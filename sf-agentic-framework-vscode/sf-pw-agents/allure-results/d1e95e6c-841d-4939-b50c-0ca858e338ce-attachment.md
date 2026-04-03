# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 1. Lead Creation - Basic Information >> 1.1 Create Lead with Required Fields Only
- Location: tests\lead-creation.spec.js:68:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect.toBeVisible: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Skip to Navigation" [ref=e4] [cursor=pointer]:
        - /url: javascript:void(0);
      - link "Skip to Main Content" [ref=e5] [cursor=pointer]:
        - /url: javascript:void(0);
      - generic [ref=e6]:
        - button "Search" [ref=e12]:
          - img [ref=e14]
          - text: Search...
        - navigation "Global Header" [ref=e17]:
          - list [ref=e19]:
            - listitem [ref=e20]:
              - group [ref=e21]:
                - button "Add favorite" [ref=e23] [cursor=pointer]:
                  - generic [ref=e24]:
                    - img [ref=e28]
                    - tooltip "Add favorite"
                - button "Favorites list" [ref=e32] [cursor=pointer]:
                  - generic [ref=e33]:
                    - img [ref=e37]
                    - tooltip "Favorites list"
            - listitem [ref=e40]:
              - button "Global Actions" [disabled] [ref=e42]:
                - img [ref=e46]
            - listitem [ref=e49]:
              - button "Guidance Center" [ref=e51] [cursor=pointer]:
                - generic [ref=e52]:
                  - img [ref=e56]
                  - tooltip "Guidance Center"
            - listitem [ref=e59]:
              - button "Salesforce Help" [ref=e62] [cursor=pointer]:
                - generic [ref=e63]:
                  - img [ref=e67]
                  - tooltip "Salesforce Help"
            - listitem [ref=e70]:
              - button "Setup" [ref=e76] [cursor=pointer]:
                - generic [ref=e77]:
                  - img [ref=e81]
                  - tooltip "Setup"
            - listitem [ref=e84]:
              - button "2 Notifications" [ref=e87] [cursor=pointer]:
                - generic [ref=e88]:
                  - generic [ref=e89]:
                    - img [ref=e93]
                    - generic [ref=e97]: "2"
                  - tooltip "Notifications"
              - generic [ref=e98]: 2 new notifications
            - listitem [ref=e99]:
              - button "View profile" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]:
                  - tooltip "View profile"
    - generic [ref=e107]:
      - generic [ref=e110]:
        - generic [ref=e112]:
          - navigation "App" [ref=e113]:
            - button "App Launcher" [ref=e115] [cursor=pointer]:
              - generic [ref=e126]: App Launcher
          - heading "Sales" [level=1] [ref=e127]:
            - generic "Sales" [ref=e128]
        - navigation "Global" [ref=e131]:
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "Home" [ref=e134] [cursor=pointer]:
                - /url: /lightning/page/home
                - generic [ref=e135]: Home
            - listitem [ref=e136]:
              - link "Opportunities" [ref=e137] [cursor=pointer]:
                - /url: /lightning/o/Opportunity/home
                - generic [ref=e138]: Opportunities
              - button "Opportunities List" [ref=e142] [cursor=pointer]:
                - img [ref=e146]
                - generic [ref=e149]: Opportunities List
            - listitem [ref=e150] [cursor=pointer]:
              - link "Leads" [ref=e151]:
                - /url: /lightning/o/Lead/home
                - generic [ref=e152]: Leads
              - button "Leads List" [ref=e156]:
                - img [ref=e160]
                - generic [ref=e163]: Leads List
            - listitem [ref=e164]:
              - link "Tasks" [ref=e165] [cursor=pointer]:
                - /url: /lightning/o/Task/home
                - generic [ref=e166]: Tasks
              - button "Tasks List" [ref=e170] [cursor=pointer]:
                - img [ref=e174]
                - generic [ref=e177]: Tasks List
            - listitem [ref=e178]:
              - link "Files" [ref=e179] [cursor=pointer]:
                - /url: /lightning/o/ContentDocument/home
                - generic [ref=e180]: Files
              - button "Files List" [ref=e184] [cursor=pointer]:
                - img [ref=e188]
                - generic [ref=e191]: Files List
            - listitem [ref=e192]:
              - link "Accounts" [ref=e193] [cursor=pointer]:
                - /url: /lightning/o/Account/home
                - generic [ref=e194]: Accounts
              - button "Accounts List" [ref=e198] [cursor=pointer]:
                - img [ref=e202]
                - generic [ref=e205]: Accounts List
            - listitem [ref=e206]:
              - link "Contacts" [ref=e207] [cursor=pointer]:
                - /url: /lightning/o/Contact/home
                - generic [ref=e208]: Contacts
              - button "Contacts List" [ref=e212] [cursor=pointer]:
                - img [ref=e216]
                - generic [ref=e219]: Contacts List
            - listitem [ref=e220]:
              - link "Campaigns" [ref=e221] [cursor=pointer]:
                - /url: /lightning/o/Campaign/home
                - generic [ref=e222]: Campaigns
              - button "Campaigns List" [ref=e226] [cursor=pointer]:
                - img [ref=e230]
                - generic [ref=e233]: Campaigns List
            - listitem [ref=e234]:
              - link "Dashboards" [ref=e235] [cursor=pointer]:
                - /url: /lightning/o/Dashboard/home
                - generic [ref=e236]: Dashboards
              - button "Dashboards List" [ref=e240] [cursor=pointer]:
                - img [ref=e244]
                - generic [ref=e247]: Dashboards List
            - listitem [ref=e248]:
              - link "Reports" [ref=e249] [cursor=pointer]:
                - /url: /lightning/o/Report/home
                - generic [ref=e250]: Reports
              - button "Reports List" [ref=e254] [cursor=pointer]:
                - img [ref=e258]
                - generic [ref=e261]: Reports List
            - listitem [ref=e262]:
              - link "Chatter" [ref=e263] [cursor=pointer]:
                - /url: /lightning/page/chatter
                - generic [ref=e264]: Chatter
            - listitem [ref=e265]:
              - button "Show more navigation items" [ref=e267] [cursor=pointer]:
                - generic [ref=e268]: More
                - img [ref=e272]
                - generic [ref=e275]: Show more navigation items
            - listitem [ref=e276]:
              - button "Edit nav items" [ref=e278] [cursor=pointer]:
                - img [ref=e280]
                - generic [ref=e283]: Edit nav items
      - main [ref=e285]:
        - generic [ref=e301]:
          - generic [ref=e310]:
            - generic [ref=e311]:
              - heading "Lead John Doe" [level=1] [ref=e319]:
                - generic [ref=e321]: Lead
                - generic [ref=e322]: John Doe
              - button "Follow" [ref=e327] [cursor=pointer]:
                - generic [ref=e328]:
                  - img [ref=e332]
                  - text: Follow
              - generic [ref=e337]:
                - generic "Convert" [ref=e338]:
                  - button "Convert" [ref=e343] [cursor=pointer]
                - generic "Edit" [ref=e344]:
                  - button "Edit" [ref=e349] [cursor=pointer]
                - generic "Delete" [ref=e350]:
                  - button "Delete" [ref=e355] [cursor=pointer]
                - button "Show more actions" [ref=e357] [cursor=pointer]:
                  - img [ref=e359]
                  - generic [ref=e362]: Show more actions
            - generic [ref=e363]:
              - generic [ref=e365]:
                - paragraph [ref=e366]: Title
                - paragraph
              - generic [ref=e368]:
                - paragraph [ref=e369]: Company
                - paragraph [ref=e370]:
                  - generic [ref=e371]: Acme Corporation
              - generic [ref=e373]:
                - button "Phone (2)" [ref=e374] [cursor=pointer]:
                  - paragraph [ref=e375]:
                    - text: Phone (2)
                    - img [ref=e380]
                - list [ref=e383]:
                  - generic [ref=e386]:
                    - paragraph
              - generic [ref=e388]:
                - paragraph [ref=e389]: Email
                - paragraph
          - article [ref=e398]:
            - generic [ref=e399]:
              - heading "Path" [level=2] [ref=e400]
              - generic [ref=e403]:
                - listbox "Path Options" [ref=e408]:
                  - option "stage complete Contacted" [ref=e409] [cursor=pointer]:
                    - generic [ref=e412]:
                      - img [ref=e414]
                      - generic [ref=e417]: stage complete
                    - generic [ref=e418]: Contacted
                  - option "Open" [selected] [ref=e419] [cursor=pointer]:
                    - generic [ref=e420]: Open
                  - option "Unqualified" [ref=e421] [cursor=pointer]:
                    - generic [ref=e422]: Unqualified
                  - option "Converted" [ref=e423] [cursor=pointer]:
                    - generic [ref=e424]: Converted
                - button "Mark Status as Complete" [ref=e426] [cursor=pointer]:
                  - img [ref=e430]
                  - generic [ref=e433]: Mark Status as Complete
          - generic [ref=e434]:
            - generic [ref=e440]:
              - heading "Tabs" [level=2] [ref=e441]
              - generic "Tabs" [ref=e442]:
                - generic [ref=e443]:
                  - heading "Tabs" [level=2] [ref=e444]
                  - tablist "Tabs" [ref=e446]:
                    - tab "Activity" [selected] [ref=e447] [cursor=pointer]
                    - tab "Details" [ref=e448] [cursor=pointer]
                    - tab "Chatter" [ref=e449] [cursor=pointer]
                  - tabpanel "Activity" [ref=e452]:
                    - generic [ref=e458]:
                      - heading "Activity Publisher" [level=2] [ref=e459]
                      - group [ref=e461]:
                        - generic [ref=e463]:
                          - button "Email" [ref=e464] [cursor=pointer]:
                            - generic [ref=e466]:
                              - img [ref=e468]
                              - generic [ref=e471]: Email
                            - generic [ref=e472]: Email
                          - button "More Email Actions" [ref=e474] [cursor=pointer]:
                            - img [ref=e476]
                            - generic [ref=e479]: More Email Actions
                      - heading "Activity Timeline" [level=2] [ref=e480]
                      - generic [ref=e482]:
                        - link "Skip to the bottom of the activity timeline" [ref=e483] [cursor=pointer]:
                          - /url: javascript:void(0);
                        - generic [ref=e485]:
                          - generic [ref=e487]: "Filters: All time • All activities • All types"
                          - button "Timeline Settings" [ref=e488] [cursor=pointer]:
                            - img [ref=e490]
                            - generic [ref=e493]: Timeline Settings
                        - generic [ref=e496]:
                          - button "Refresh" [ref=e497] [cursor=pointer]
                          - text: •
                          - button "Expand All. Show details for activities in the timeline." [ref=e498] [cursor=pointer]: Expand All
                          - text: •
                          - button "View All" [ref=e499] [cursor=pointer]
                        - generic [ref=e501]:
                          - heading "Upcoming & Overdue" [level=3] [ref=e502]:
                            - button "Upcoming & Overdue" [expanded] [ref=e503] [cursor=pointer]:
                              - img [ref=e505]
                              - text: Upcoming & Overdue
                          - generic [ref=e508]:
                            - generic:
                              - list
                            - generic [ref=e511]:
                              - text: No activities to show.
                              - text: Get started by sending an email, scheduling a task, and more.
                        - status [ref=e512]:
                          - generic [ref=e513]: No past activity. Past meetings and tasks marked as done show up here.
                        - link "Skip to the top of the activity timeline" [ref=e514] [cursor=pointer]:
                          - /url: javascript:void(0);
            - generic [ref=e521]:
              - heading "Tabs" [level=2] [ref=e522]
              - generic "Tabs" [ref=e523]:
                - generic [ref=e524]:
                  - heading "Tabs" [level=2] [ref=e525]
                  - tablist "Tabs" [ref=e527]:
                    - tab "Related" [selected] [ref=e528] [cursor=pointer]
                  - tabpanel "Related" [ref=e531]:
                    - generic [ref=e532]:
                      - article [ref=e537]:
                        - generic [ref=e539]:
                          - img [ref=e544]
                          - heading "We found no potential duplicates of this Lead." [level=2] [ref=e548]:
                            - generic "We found no potential duplicates of this Lead." [ref=e549]
                        - generic [ref=e551]: No duplicate rules are activated. Activate duplicate rules to identify potential duplicate records.
                      - generic [ref=e555]:
                        - article "Campaign History" [ref=e563]:
                          - generic [ref=e564]:
                            - heading "Campaign History (0)" [level=2] [ref=e570]:
                              - link "Campaign History (0)" [ref=e571] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjN11UAF/related/CampaignMembers/view
                                - generic "Campaign History" [ref=e572]
                                - generic "(0)" [ref=e573]
                            - button "Show actions for Campaign History" [ref=e577] [cursor=pointer]:
                              - generic [ref=e579]:
                                - img [ref=e581]
                                - generic [ref=e584]: Show actions for Campaign History
                        - article "Licenses" [ref=e590]:
                          - generic [ref=e597]:
                            - img [ref=e601]
                            - heading "Licenses (0)" [level=2] [ref=e603]:
                              - link "Licenses (0)" [ref=e604] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjN11UAF/related/sfLma__R00N30000001JvRAEA0__r/view
                                - generic "Licenses" [ref=e605]
                                - generic "(0)" [ref=e606]
    - generic:
      - contentinfo "Utility Bar":
        - list [ref=e610]:
          - listitem [ref=e611]:
            - button "To Do List" [ref=e614] [cursor=pointer]:
              - img [ref=e618]
              - generic [ref=e621]: To Do List
  - status [ref=e623]: Success notification.Lead "John Doe" was created. Press Control + F6 to navigate to the next toast notification or focusable region.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import * as allure from 'allure-js-commons';
  3   | import 'dotenv/config';
  4   | import { sfTest } from './seed.spec.js';
  5   | import { captureScreenshot, sfStep, setAllureMeta } from '../utils/reporter-utils.js';
  6   | import { fillField, selectPicklist } from '../utils/locator-utils.js';
  7   | import { waitForSFLoad } from '../utils/sf-helpers.js';
  8   | import fs from 'fs';
  9   | import path from 'path';
  10  | 
  11  | /**
  12  |  * LEAD CREATION TEST SUITE
  13  |  * ═══════════════════════════════════
  14  |  * HEALED: Complete refactor with screenshot and video capture
  15  |  * 1. Removed all test.fixme() markers - tests now run fully
  16  |  * 2. No sfStep() on verifications - direct assertions to prevent page closure
  17  |  * 3. Screenshots captured on success with test case ID in filename
  18  |  * 4. Video recording enabled for failed tests
  19  |  * 5. Error message assertions for negative test scenarios
  20  |  * 6. Proper screenshot folder organization
  21  |  */
  22  | 
  23  | // Ensure screenshot directory exists
  24  | const screenshotDir = path.join(process.cwd(), 'reports', 'screenshots');
  25  | if (!fs.existsSync(screenshotDir)) {
  26  |   fs.mkdirSync(screenshotDir, { recursive: true });
  27  | }
  28  | 
  29  | // Apply Allure metadata to all tests
  30  | test.beforeEach(async () => {
  31  |   await setAllureMeta({
  32  |     epic: 'CRM',
  33  |     feature: 'Lead Management',
  34  |     story: 'Create Lead',
  35  |     severity: 'critical',
  36  |   });
  37  | });
  38  | 
  39  | // Screenshot and video on failure
  40  | test.afterEach(async ({ page }, testInfo) => {
  41  |   if (testInfo.status !== 'passed') {
  42  |     // Capture failure screenshot
  43  |     try {
  44  |       const failureScreenshot = await page.screenshot({ fullPage: true });
  45  |       const testName = testInfo.title.replace(/\s+/g, '-').toLowerCase();
  46  |       const screenshotPath = path.join(screenshotDir, `${testName}-FAILED.png`);
  47  |       
  48  |       fs.writeFileSync(screenshotPath, failureScreenshot);
  49  |       await testInfo.attach('failure-screenshot', {
  50  |         body: failureScreenshot,
  51  |         contentType: 'image/png',
  52  |       });
  53  |     } catch (err) {
  54  |       console.log('Could not capture failure screenshot:', err);
  55  |     }
  56  |   }
  57  | });
  58  | 
  59  | /**
  60  |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  61  |  * SECTION 1: LEAD CREATION - BASIC INFORMATION  
  62  |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  63  |  */
  64  | 
  65  | test.describe('1. Lead Creation - Basic Information', () => {
  66  | 
  67  |   // HEALED: Removed test.fixme(), added screenshot capture, no sfStep on verification
  68  |   sfTest('1.1 Create Lead with Required Fields Only', async ({ sfPage: page }, testInfo) => {
  69  |     await allure.description(
  70  |       'Verify that a Lead can be created with only the required fields (First Name, Last Name, Company).'
  71  |     );
  72  | 
  73  |     // Direct navigation actions
  74  |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  75  |     await page.waitForTimeout(500);
  76  |     
  77  |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  78  |     await page.waitForTimeout(500);
  79  |     
  80  |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  81  |     await waitForSFLoad(page);
  82  |     
  83  |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  84  |     await waitForSFLoad(page);
  85  | 
  86  |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  87  | 
  88  |     // Fill form
  89  |     await fillField(page, /first name/i, 'John');
  90  |     await fillField(page, /last name/i, 'Doe');
  91  |     await fillField(page, /company/i, 'Acme Corporation');
  92  |     
  93  |     // Save
  94  |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  95  |     await waitForSFLoad(page);
  96  | 
  97  |     // HEALED: Removed sfStep() wrapper - direct assertions to prevent page closure
  98  |     const url = page.url();
  99  |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  100 |     
> 101 |     await expect(page.getByText('Acme Corporation')).toBeVisible({ timeout: 15000 });
      |                                                      ^ Error: expect.toBeVisible: Target page, context or browser has been closed
  102 | 
  103 |     // HEALED: Capture success screenshot with test case ID
  104 |     const successScreenshot = await page.screenshot({ fullPage: true });
  105 |     const screenshotPath = path.join(screenshotDir, '1.1-Create-Lead-Required-Fields-PASSED.png');
  106 |     fs.writeFileSync(screenshotPath, successScreenshot);
  107 |     
  108 |     await testInfo.attach('success-screenshot', {
  109 |       body: successScreenshot,
  110 |       contentType: 'image/png',
  111 |       path: screenshotPath,
  112 |     });
  113 |   });
  114 | 
  115 |   // HEALED: Removed test.fixme(), added screenshot capture
  116 |   sfTest('1.2 Create Lead with All Standard Fields', async ({ sfPage: page }, testInfo) => {
  117 |     await allure.description(
  118 |       'Verify that a Lead can be created with all standard fields populated.'
  119 |     );
  120 | 
  121 |     // Navigate
  122 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  123 |     await page.waitForTimeout(500);
  124 |     
  125 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  126 |     await page.waitForTimeout(500);
  127 |     
  128 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  129 |     await waitForSFLoad(page);
  130 |     
  131 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  132 |     await waitForSFLoad(page);
  133 | 
  134 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  135 | 
  136 |     // Fill required fields
  137 |     await fillField(page, /first name/i, 'Jane');
  138 |     await fillField(page, /last name/i, 'Smith');
  139 |     await fillField(page, /company/i, 'Tech Innovations Inc');
  140 |     
  141 |     // Optional fields
  142 |     try {
  143 |       await fillField(page, /title/i, 'Manager');
  144 |       await fillField(page, /email/i, 'jane.smith@techinnovations.com');
  145 |       await fillField(page, /phone/i, '(555) 123-4567');
  146 |     } catch {
  147 |       // Optional fields may not exist
  148 |     }
  149 | 
  150 |     // Save
  151 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  152 |     await waitForSFLoad(page);
  153 | 
  154 |     // Verify
  155 |     const url = page.url();
  156 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  157 |     
  158 |     await expect(page.getByText('Tech Innovations Inc')).toBeVisible({ timeout: 15000 });
  159 | 
  160 |     // HEALED: Capture success screenshot
  161 |     const successScreenshot = await page.screenshot({ fullPage: true });
  162 |     const screenshotPath = path.join(screenshotDir, '1.2-Create-Lead-All-Fields-PASSED.png');
  163 |     fs.writeFileSync(screenshotPath, successScreenshot);
  164 |     
  165 |     await testInfo.attach('success-screenshot', {
  166 |       body: successScreenshot,
  167 |       contentType: 'image/png',
  168 |       path: screenshotPath,
  169 |     });
  170 |   });
  171 | 
  172 | });
  173 | 
  174 | /**
  175 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  176 |  * SECTION 2: LEAD CREATION - FIELD VALIDATION
  177 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  178 |  */
  179 | 
  180 | test.describe('2. Lead Creation - Field Validation', () => {
  181 | 
  182 |   // HEALED: Negative test - verify error messages appear when saving without required fields
  183 |   sfTest('2.1 Attempt to Save Lead Without Required Fields', async ({ sfPage: page }, testInfo) => {
  184 |     await allure.description(
  185 |       'Verify that the system prevents saving a Lead when required fields are empty.'
  186 |     );
  187 | 
  188 |     // Navigate
  189 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  190 |     await page.waitForTimeout(500);
  191 |     
  192 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  193 |     await page.waitForTimeout(500);
  194 |     
  195 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  196 |     await waitForSFLoad(page);
  197 |     
  198 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  199 |     await waitForSFLoad(page);
  200 | 
  201 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
```