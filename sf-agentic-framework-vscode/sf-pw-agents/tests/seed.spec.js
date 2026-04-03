import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { waitForSFLoad } from '../utils/sf-helpers.js';

/**
 * SEED SPEC — Salesforce Login Fixture
 * ─────────────────────────────────────
 * This file is the foundation for all agent-generated tests.
 * The Playwright Test Agents (Planner, Generator, Healer) read this
 * and copy the auth pattern into every .spec.js they produce.
 *
 * Auth state is written by globalSetup (utils/sf-helpers.js) and
 * reused here via storageState so no re-login occurs per test.
 */

// Reuse the saved Salesforce auth session
test.use({ storageState: './reports/.auth-state.json' });

/**
 * Extended test fixture: sfPage
 * Provides a pre-authenticated Salesforce Lightning page with blocked permissions.
 * Generator agent should use this in all generated tests.
 */
export const sfTest = test.extend({
  sfPage: async ({ browser }, use) => {
    // Create context with NO permissions allowed (blocks notifications, camera, microphone, etc.)
    const context = await browser.newContext({
      storageState: './reports/.auth-state.json',
      permissions: [], // Block all permissions
    });
    
    const page = await context.newPage();
    await page.goto(process.env.SF_URL);
    await waitForSFLoad(page);
    
    await use(page);
    
    // Cleanup
    await context.close();
  },
});

/**
 * Seed health check —verifies the auth setup works.
 * Agents run this first to confirm login is working before proceeding.
 */
test('seed: Salesforce login and Lightning shell loads', async ({ browser }) => {
  // Create context with blocked permissions
  const context = await browser.newContext({
    storageState: './reports/.auth-state.json',
    permissions: [], // Block all browser permissions
  });
  
  const page = await context.newPage();
  try {
    await page.goto(process.env.SF_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForSFLoad(page);

    // Verify we're on Salesforce and not on login page
    const checks = await page.evaluate(() => {
      return {
        isOnSalesforce: window.location.hostname.includes('salesforce'),
        isNotOnLogin: !window.location.href.includes('/login'),
        pageTitle: document.title,
      };
    });
    
    if (!checks.isOnSalesforce) {
      throw new Error('Not on Salesforce domain');
    }
    
    if (!checks.isNotOnLogin) {
      throw new Error('Still on login page');
    }
    
    console.log('✓ Auth valid, page:', checks.pageTitle);
  } finally {
    // Should NOT be on login page
    await expect(page).not.toHaveURL(/login/);
    
    // Cleanup
    await context.close();
  }
});
