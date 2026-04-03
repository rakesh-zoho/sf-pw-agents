import { chromium } from '@playwright/test';
import fs from 'fs/promises';
import 'dotenv/config';

/**
 * GLOBAL SETUP
 * Runs once before all tests. Logs into Salesforce and saves
 * auth state to reports/.auth-state.json for test reuse.
 */
export default async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('\n🔐 SF Global Setup: Logging into Salesforce...');

  try {
    // Navigate to Salesforce login
    await page.goto(process.env.SF_URL, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    // Check if already logged in by looking for Lightning indicators
    const isLoggedIn = await page.evaluate(() => {
      return document.querySelector('[data-id="AppNavigation"]') || 
             document.querySelector('.navContainer') || 
             document.querySelector('one-app-nav-bar') ||
             document.querySelector('[data-test-id="appNavigation"]') ||
             !document.querySelector('#loginForm');
    });

    if (!isLoggedIn) {
      console.log('Attempting to log in...');
      // Fill credentials
      await page.fill('#username', process.env.SF_USERNAME, { timeout: 5000 });
      await page.fill('#password', process.env.SF_PASSWORD, { timeout: 5000 });
      await page.click('#Login', { timeout: 5000 });

      // Wait for redirect after login
      await page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
    }

    // Wait for Lightning shell with multiple selector attempts
    console.log('Waiting for Lightning shell to load...');
    let shellFound = false;
    const maxAttempts = 10;
    
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const found = await page.evaluate(() => {
        return !!(document.querySelector('[data-id="AppNavigation"]') || 
                 document.querySelector('.navContainer') || 
                 document.querySelector('one-app-nav-bar') ||
                 document.querySelector('[data-test-id="appNavigation"]'));
      });
      
      if (found) {
        shellFound = true;
        console.log('✓ Lightning shell detected');
        break;
      }
      
      await page.waitForTimeout(3000);
    }

    if (!shellFound) {
      console.warn('⚠️  Lightning shell selector not found, but continuing...');
      await page.screenshot({ path: './reports/shell-notfound.png' });
    }

    // Wait for page to settle
    await page.waitForTimeout(2000);

    // Ensure reports directory exists
    await fs.mkdir('./reports', { recursive: true });

    // Save auth — all tests reuse this session
    await page.context().storageState({ path: './reports/.auth-state.json' });
    console.log('✅ Auth state saved to reports/.auth-state.json\n');

  } catch (err) {
    console.error('❌ SF Login failed:', err.message);
    try {
      await page.screenshot({ path: './reports/login-failure.png' });
    } catch (e) {
      // Screenshot may fail if page is unreachable
    }
    throw err;
  } finally {
    await browser.close();
  }
}

/**
 * Wait for Salesforce Lightning page to settle.
 * Waits for spinners to disappear — use after every navigation or click.
 */
export async function waitForSFLoad(page, timeout = 15000) {
  try {
    // First wait for common Salesforce spinners to disappear
    await page.waitForFunction(
      () => {
        const spinners = document.querySelectorAll(
          '.forceListViewManagerSpinner, .slds-spinner_container, .loadingIndicator, [role="status"]'
        );
        return Array.from(spinners).every(s => {
          const style = window.getComputedStyle(s);
          return style.display === 'none' || style.visibility === 'hidden' || s.style.display === 'none';
        });
      },
      { timeout }
    );
    
    // Then wait for the page to be stable
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
  } catch {
    // Non-fatal — spinner may already be gone or page structure is different
    console.log('ℹ️  Page load check timed out, continuing...');
  }
}

/**
 * Switch the list view to "All [ObjectName]" records.
 * SF defaults to "Recently Viewed" — this ensures all records are visible.
 */
export async function switchToAllRecords(page, objectName) {
  try {
    await page
      .getByRole('button', { name: /Select a List View/i })
      .click({ timeout: 5000 });
    await page.getByRole('option', { name: `All ${objectName}` }).click();
    await waitForSFLoad(page);
  } catch {
    // Already on the correct list view
  }
}

/**
 * Navigate to a Salesforce app via App Launcher.
 * More robust with retry logic and multiple selector support.
 */
export async function navigateToApp(page, appName) {
  let clicked = false;
  
  // Try multiple App Launcher selectors
  const appLauncherSelectors = [
    '[title="App Launcher"]',
    '[aria-label*="App Launcher"]',
    '[data-test-id="appLauncherButton"]',
  ];
  
  for (const selector of appLauncherSelectors) {
    try {
      await page.click(selector, { timeout: 5000 });
      clicked = true;
      break;
    } catch {
      // Try next selector
    }
  }
  
  if (!clicked) {
    throw new Error('Could not find App Launcher button');
  }
  
  // Wait for search to appear
  await page.waitForTimeout(500);
  
  // Try to find and fill search input
  try {
    await page.fill('[placeholder="Search apps and items..."]', appName, { timeout: 5000 });
  } catch {
    const searchInput = page.locator('input[aria-label*="search"], input[placeholder*="Search"]');
    await searchInput.fill(appName);
  }
  
  await page.waitForTimeout(500);
  
  // Click the matching option
  try {
    await page.click(`text="${appName}"`, { timeout: 5000 });
  } catch {
    const option = page.getByRole('option', { name: new RegExp(`^${appName}$`, 'i') });
    await option.click({ timeout: 5000 });
  }
  
  await waitForSFLoad(page);
}
