# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\lead-creation.spec.js >> 5. Lead Creation - Navigation and Form State >> 5.1 Save and Navigate to Lead Detail View
- Location: tests\lead-creation.spec.js:357:3

# Error details

```
Error: Could not find App Launcher button
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e7]:
        - img [ref=e8]
        - generic [ref=e9]: Salesforce login
      - generic [ref=e11]:
        - generic [ref=e12]:
          - heading "Salesforce login" [level=1] [ref=e13]
          - generic [ref=e14]:
            - text: Username
            - textbox "Username" [active] [ref=e16]
          - text: Password
          - textbox "Password" [ref=e17]
          - button "Log In" [ref=e18] [cursor=pointer]
          - generic [ref=e19]:
            - checkbox "Remember me" [ref=e20]
            - generic [ref=e21]: Remember me
        - link "Forgot Your Password?" [ref=e23] [cursor=pointer]:
          - /url: /secur/forgotpassword.jsp?locale=in
    - generic [ref=e24]: © 2026 Salesforce, Inc. All rights reserved.
  - iframe [ref=e26]:
    - generic [active] [ref=f1e1]:
      - heading "Access Denied" [level=1] [ref=f1e2]
      - text: You don't have permission to access "http://c.salesforce.com/login-messages/in/promos.html" on this server.
      - paragraph [ref=f1e3]: "Reference #18.9adc55b8.1775100792.51d1bbec"
      - paragraph [ref=f1e4]: https://errors.edgesuite.net/18.9adc55b8.1775100792.51d1bbec
  - generic: Login
  - iframe [ref=e27]:
    
```

# Test source

```ts
  62  |       await page.waitForTimeout(3000);
  63  |     }
  64  | 
  65  |     if (!shellFound) {
  66  |       console.warn('⚠️  Lightning shell selector not found, but continuing...');
  67  |       await page.screenshot({ path: './reports/shell-notfound.png' });
  68  |     }
  69  | 
  70  |     // Wait for page to settle
  71  |     await page.waitForTimeout(2000);
  72  | 
  73  |     // Ensure reports directory exists
  74  |     await fs.mkdir('./reports', { recursive: true });
  75  | 
  76  |     // Save auth — all tests reuse this session
  77  |     await page.context().storageState({ path: './reports/.auth-state.json' });
  78  |     console.log('✅ Auth state saved to reports/.auth-state.json\n');
  79  | 
  80  |   } catch (err) {
  81  |     console.error('❌ SF Login failed:', err.message);
  82  |     try {
  83  |       await page.screenshot({ path: './reports/login-failure.png' });
  84  |     } catch (e) {
  85  |       // Screenshot may fail if page is unreachable
  86  |     }
  87  |     throw err;
  88  |   } finally {
  89  |     await browser.close();
  90  |   }
  91  | }
  92  | 
  93  | /**
  94  |  * Wait for Salesforce Lightning page to settle.
  95  |  * Waits for spinners to disappear — use after every navigation or click.
  96  |  */
  97  | export async function waitForSFLoad(page, timeout = 15000) {
  98  |   try {
  99  |     // First wait for common Salesforce spinners to disappear
  100 |     await page.waitForFunction(
  101 |       () => {
  102 |         const spinners = document.querySelectorAll(
  103 |           '.forceListViewManagerSpinner, .slds-spinner_container, .loadingIndicator, [role="status"]'
  104 |         );
  105 |         return Array.from(spinners).every(s => {
  106 |           const style = window.getComputedStyle(s);
  107 |           return style.display === 'none' || style.visibility === 'hidden' || s.style.display === 'none';
  108 |         });
  109 |       },
  110 |       { timeout }
  111 |     );
  112 |     
  113 |     // Then wait for the page to be stable
  114 |     await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
  115 |   } catch {
  116 |     // Non-fatal — spinner may already be gone or page structure is different
  117 |     console.log('ℹ️  Page load check timed out, continuing...');
  118 |   }
  119 | }
  120 | 
  121 | /**
  122 |  * Switch the list view to "All [ObjectName]" records.
  123 |  * SF defaults to "Recently Viewed" — this ensures all records are visible.
  124 |  */
  125 | export async function switchToAllRecords(page, objectName) {
  126 |   try {
  127 |     await page
  128 |       .getByRole('button', { name: /Select a List View/i })
  129 |       .click({ timeout: 5000 });
  130 |     await page.getByRole('option', { name: `All ${objectName}` }).click();
  131 |     await waitForSFLoad(page);
  132 |   } catch {
  133 |     // Already on the correct list view
  134 |   }
  135 | }
  136 | 
  137 | /**
  138 |  * Navigate to a Salesforce app via App Launcher.
  139 |  * More robust with retry logic and multiple selector support.
  140 |  */
  141 | export async function navigateToApp(page, appName) {
  142 |   let clicked = false;
  143 |   
  144 |   // Try multiple App Launcher selectors
  145 |   const appLauncherSelectors = [
  146 |     '[title="App Launcher"]',
  147 |     '[aria-label*="App Launcher"]',
  148 |     '[data-test-id="appLauncherButton"]',
  149 |   ];
  150 |   
  151 |   for (const selector of appLauncherSelectors) {
  152 |     try {
  153 |       await page.click(selector, { timeout: 5000 });
  154 |       clicked = true;
  155 |       break;
  156 |     } catch {
  157 |       // Try next selector
  158 |     }
  159 |   }
  160 |   
  161 |   if (!clicked) {
> 162 |     throw new Error('Could not find App Launcher button');
      |           ^ Error: Could not find App Launcher button
  163 |   }
  164 |   
  165 |   // Wait for search to appear
  166 |   await page.waitForTimeout(500);
  167 |   
  168 |   // Try to find and fill search input
  169 |   try {
  170 |     await page.fill('[placeholder="Search apps and items..."]', appName, { timeout: 5000 });
  171 |   } catch {
  172 |     const searchInput = page.locator('input[aria-label*="search"], input[placeholder*="Search"]');
  173 |     await searchInput.fill(appName);
  174 |   }
  175 |   
  176 |   await page.waitForTimeout(500);
  177 |   
  178 |   // Click the matching option
  179 |   try {
  180 |     await page.click(`text="${appName}"`, { timeout: 5000 });
  181 |   } catch {
  182 |     const option = page.getByRole('option', { name: new RegExp(`^${appName}$`, 'i') });
  183 |     await option.click({ timeout: 5000 });
  184 |   }
  185 |   
  186 |   await waitForSFLoad(page);
  187 | }
  188 | 
```