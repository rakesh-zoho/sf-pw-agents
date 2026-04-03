---
name: sf-pw-agents
description: Use when working on Salesforce automation testing with Playwright agents. Covers Planner, Generator, and Healer workflows, locator conventions, SF Lightning patterns, and Allure reporting standards.
---

# Salesforce + Playwright Agentic Framework

## Project Overview

This is an automated testing framework for **Salesforce Lightning** using **Playwright Test Agents** (Microsoft official Planner/Generator/Healer agents) orchestrated through VS Code GitHub Copilot Chat.

- **Stack**: Playwright Test Agents v1.56+, MCP browser integration, Allure HTML reporting, Playwright HTML reports
- **Test Types**: Lead creation, Opportunity flows, custom object workflows — all Lightning components
- **Auth**: Session-based via `globalSetup` → `reports/.auth-state.json` (created on first run)
- **Reports**: Allure (primary detailed reporting), Playwright (fallback), JUnit (CI integration)

---

## Three-Agent Workflow

### 1. **Planner Agent** — Test Plan Design
**When**: You need to design test scenarios for a new Salesforce flow.

**Invoke**: In Copilot Chat, mention the Planner agent by name or say "create test plan for..."

**What it does**:
- Reads your task description from `tasks/[name].md`
- Navigates Salesforce UI via MCP browser tools to explore the flow
- Maps all interactive elements (buttons, forms, modals, picklists)
- Generates detailed step-by-step test scenarios in `specs/[name]-plan.md`

**Planner output includes**:
- Exact locators (using accessible role-based selectors)
- Wait conditions for each step
- Expected assertions and success criteria
- Screenshot points for visual validation

### 2. **Generator Agent** — Test Code Generation
**When**: You're ready to turn a test plan into executable test code.

**Invoke**: In Copilot Chat, mention the Generator agent or copy a test plan file and ask it to generate.

**What it does**:
- Reads `specs/[name]-plan.md`
- Generates production-ready test code in `tests/[name].spec.js`
- Includes Allure metadata, screenshots after each step, assertions, error handling
- Copies auth fixture pattern from `tests/seed.spec.js`

**Generator output includes**:
- Import statements for utilities (sf-helpers, locator-utils, reporter-utils)
- Allure epic/feature/story/severity annotations
- `sfStep()` wrappers for reporting
- `captureScreenshot()` after critical actions
- `afterEach` failure screenshot handler
- Proper MCP browser tool patterns

### 3. **Healer Agent** — Test Repair
**When**: A test is failing due to broken locators or timing issues.

**Invoke**: In Copilot Chat, say "Fix failing test" or "Heal [test-name]"

**What it does**:
- Runs the failing test and captures the error
- Inspects Salesforce UI to find the correct locator
- Updates broken selectors with working alternatives
- Re-runs until all tests pass
- Documents what changed with `// HEALED:` comments

---

## Locator Rules (Non-Negotiable)

**Priority order** — always try in this sequence:

```javascript
// 1. Role-based (preferred — accessible and maintainable)
page.getByRole('button', { name: 'New' })
page.getByRole('dialog')
page.getByRole('option', { name: 'Option Text' })
page.getByRole('tab', { name: 'Overview' })

// 2. Label-based (for form fields)
page.getByLabel('First Name')
page.getByLabel('Account Name')
page.getByLabel('Close Date')

// 3. Placeholder-based (for search inputs)
page.getByPlaceholder('Search...')
page.getByPlaceholder('Enter name...')

// 4. Text content (when no role/label available)
page.getByText('Success')
page.getByText('Record created')

// 5. ARIA attributes (fallback for custom components)
page.locator('[aria-label="Close"]')
page.locator('[aria-labelledby="labelId"]')

// 6. CSS class (ONLY for Salesforce toast — has no accessible selector)
page.locator('.toastMessage')

// NEVER use:
// ❌ XPath with element IDs
// ❌ CSS class selectors for interactive elements (except SF toast)
// ❌ Deprecated test IDs (use role instead)
```

---

## Salesforce Lightning Patterns

All generated tests **must** follow these patterns for Salesforce components:

### After Navigation or Button Click
```javascript
import { waitForSFLoad } from '../utils/sf-helpers.js';

await page.getByRole('button', { name: 'New' }).click();
await waitForSFLoad(page);  // ← Critical: waits for SF to settle
```

### Toast Messages (Appear/Disappear ~3 seconds)
```javascript
import { expect } from '@playwright/test';

const toast = page.locator('.toastMessage');
await expect(toast).toBeVisible({ timeout: 15000 });
await expect(toast).toContainText('Contact was created');
// Don't wait after assert — toast disappears on its own
```

### Modal/Dialog Interactions
```javascript
const dialog = page.getByRole('dialog');
await dialog.waitFor({ state: 'visible' });

// Scope all inner interactions to the dialog
await dialog.getByLabel('First Name').fill('John');
await dialog.getByLabel('Last Name').fill('Doe');
await dialog.getByRole('button', { name: 'Save' }).click();

await dialog.waitFor({ state: 'hidden' });
```

### Picklist/Dropdown Selection
```javascript
// Method A: Native HTML select
await page.getByLabel('Stage').selectOption('Needs Analysis');

// Method B: SF custom picklist (click + option)
await page.getByLabel('Stage').click();
await page.getByRole('option', { name: 'Needs Analysis' }).click();
```

### Lookup Field (Account Name, Contact Name, etc.)
```javascript
import { fillLookup } from '../utils/locator-utils.js';

// Method A: Direct helper (preferred)
await fillLookup(page, 'Account Name', 'Acme Corp');

// Method B: Manual (if helper not available)
await page.getByLabel('Account Name').fill('Acme Corp');
await page.waitForTimeout(600);  // autocomplete debounce
await page.getByRole('option', { name: 'Acme Corp' }).first().click();
```

### Date Field (SF requires MM/DD/YYYY format)
```javascript
import { getDatePlusDays } from '../utils/locator-utils.js';

// Gets current date + N days in SF format
await page.getByLabel('Close Date').fill(getDatePlusDays(30));
```

### Switch List View to "All Records"
```javascript
import { switchToAllRecords } from '../utils/sf-helpers.js';

// Forces list view filter off (shows all records instead of filtered)
await switchToAllRecords(page, 'Leads');
// Also works: 'Opportunities', 'Contacts', 'Accounts', etc.
```

### Edit an Existing Record
```javascript
import { sfStep } from '../utils/reporter-utils.js';

// Click the record name to open
await sfStep('Open record', page, async () => {
  await page.getByRole('link', { name: 'John Doe' }).click();
  await waitForSFLoad(page);
});

// Click Edit button in detail view
await sfStep('Enter edit mode', page, async () => {
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('dialog').waitFor({ state: 'visible' });
});
```

---

## Required Allure Annotations (Every Test)

Every generated test **must** include Allure metadata for reporting. Add this to `test.beforeEach()`:

```javascript
import * as allure from 'allure-js-commons';
import { test, expect } from '@playwright/test';

test.beforeEach(async () => {
  // All 4 are required
  await allure.epic('CRM');              // Business domain
  await allure.feature('Lead Management'); // Feature area
  await allure.story('Create New Lead');  // Specific user story
  await allure.severity('critical');      // critical|major|minor|trivial
});

test.afterEach(async ({ page }, testInfo) => {
  // Screenshot only on failure
  if (testInfo.status !== testInfo.expectedStatus) {
    import { captureScreenshot } from '../utils/reporter-utils.js';
    await captureScreenshot(page, `failure-${testInfo.title.replace(/\s+/g, '-')}`);
  }
});
```

### Severity Levels
- `critical`: Essential flows (lead creation, deal closure, account setup)
- `major`: Important features (edit, delete, search, filter)
- `minor`: Non-blocking features (UI refinement, optional fields)
- `trivial`: Cosmetic (color, spacing, help tooltips)

---

## Allure Reporting Setup

### Generate and View Allure Report

```bash
# Generate Allure HTML report from test results
npm run report:allure

# This runs:
# → allure generate reports/allure-results -o reports/allure-report --clean
# → allure open reports/allure-report (opens in browser)
```

### Test Execution Commands

```bash
# Run all tests
npm test

# Run specific test file
npm run test:lead
npm run test:opportunity

# Debug mode (interactive breakpoints)
npm test:debug

# UI mode (step-by-step replay)
npm test:ui

# Headed mode (GUI browser visible)
npm test:headed

# CI mode (headless, 2 retries)
npm run test:ci
```

---

## Test File Organization

```
tasks/
  └─ lead-creation.md          ← You write: plain English flow
     opportunity-flow.md

specs/
  └─ lead-creation-plan.md     ← Planner writes: detailed test plan
     opportunity-flow-plan.md

tests/
  ├─ seed.spec.js              ← Auth fixture (copy pattern into generated tests)
  ├─ lead-creation.spec.js     ← Generator writes: executable test code
  └─ opportunity-flow.spec.js

utils/
  ├─ sf-helpers.js             ← waitForSFLoad, switchToAllRecords, etc.
  ├─ locator-utils.js          ← fillField, selectPicklist, fillLookup, getDatePlusDays
  └─ reporter-utils.js         ← captureScreenshot, sfStep, setAllureMeta
```

---

## Memory Files (When to Read)

These files document project conventions and decisions:

| File | Purpose | When to Read |
|------|---------|--------------|
| `memory/framework-memory.md` | All locator rules, SF patterns, Allure requirements | Before any agent session |
| `memory/agent-context.md` | Quick reference for Planner/Generator/Healer | Starting a new test workflow |
| `memory/sf-selectors.md` | Known Salesforce selectors and alternatives | When a locator is failing |

---

## Tool Usage Guidelines

### Browser Tools
- **Navigation**: Use `getByRole('link')` for links, `getByRole('button')` for buttons
- **Forms**: Use `getByLabel()` for all form fields (accessible standard)
- **Assertions**: Always assert **immediately after action** (e.g., toast disappears in 3s)
- **Wait conditions**: Use `waitForSFLoad()` after every click/navigation, not arbitrary timeouts
- **Screenshots**: Capture after critical actions (modal open, record created, toast shown)

### Playwright Tools (Agents Only)
- `planner_setup_page` → required before any agent-driven browser exploration
- `planner_save_plan` → saves test plan to `specs/[name]-plan.md`
- `browser_snapshot` → accessibility tree (not visual screenshots)
- `browser_take_screenshot` → visual debugging (use sparingly)
- `browser_navigate` → use for initial app load only
- All other `browser_*` tools → only via agent orchestration

### Code Style
- **Imports**: Absolute from utils — `import { fillLookup } from '../utils/locator-utils.js'`
- **Locators**: Prefix with role/label/placeholder — never hardcode selectors in test steps
- **Steps**: Wrap in `sfStep()` for Allure reporting
- **Comments**: Add `// HEALED:` markers when fixing locators, `// NOTE:` for context
- **Async**: Always `await` navigation, clicks, and wait conditions
- **Prettier**: 2-space indent, 100-char line limit, trailing commas

---

## Common Commands

```bash
# Run tests
npm test                  # Headless (fastest)
npm run test:headed      # GUI browser visible
npm run test:debug       # Breakpoint debugging

# Generate auth session (run first, once)
npm run setup

# View reports
npm run report:allure    # Allure HTML (detailed)
npm run report:pw        # Playwright HTML (fallback)

# Initialize agents
npm run agents:init      # Sets up MCP connection
```

---

## When to Use Each Agent

### Use **Planner** When:
- Designing test scenarios for a new Salesforce flow
- You need detailed step-by-step documentation before coding
- Multiple test cases exist for the same feature

### Use **Generator** When:
- Converting a test plan (spec) into executable test code
- You have `specs/[name]-plan.md` already written
- You want production-ready code with Allure metadata and screenshots

### Use **Healer** When:
- A test fails with a broken locator error
- You need to update Salesforce selectors after UI changes
- You want automated debugging and repair

### Use **Default Chat** When:
- Asking general questions about the framework
- Explaining code or troubleshooting non-Playwright issues
- Writing helper functions or utilities

---

## Troubleshooting Quick Reference

| Problem | Check |
|---------|-------|
| Test times out on button click | Did you add `await waitForSFLoad(page)` after? |
| Toast not found | Toast disappears in ~3s — assert immediately, don't wait |
| Locator not found in modal | Scoped the locator to `dialog.getByLabel()` instead of `page.getByLabel()`? |
| Picklist not opening | Is it a custom SF picklist? Try Method B (click + option) |
| Lookup field not autocompleting | Did you add `await page.waitForTimeout(600)` for debounce? |
| Auth session invalid | Run `npm run setup` to regenerate `reports/.auth-state.json` |
| Allure report not generated | Run `npm run report:allure` (separate from test execution) |

---

## Agent Behavior Settings

All three agents (Planner, Generator, Healer) are configured to:
- Use **Claude Sonnet 4** model for reasoning depth
- Access **Playwright MCP** browser tools for validation
- Work **independently** (each agent session starts fresh)
- Save artifacts to **workspace** (specs, tests updated automatically)
- Include **detailed Allure metadata** in generated code
- Follow **locator priority order** (role → label → placeholder → text → aria → CSS class)
- Screenshot **after every major action** (for debugging)

---

## Next Steps

1. **First time?** Run `npm run setup` to create auth session
2. **New test?** Write a task in `tasks/[name].md`, then invoke Planner
3. **Have a plan?** Invoke Generator to turn it into test code
4. **Test failing?** Invoke Healer to fix broken locators
5. **View results?** Run `npm run report:allure` for detailed reporting

For detailed command reference, see [package.json](./package.json) scripts.
For Salesforce selector reference, see [memory/sf-selectors.md](./memory/sf-selectors.md).
