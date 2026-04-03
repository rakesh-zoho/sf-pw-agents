# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 1. Lead Creation - Basic Information >> 1.2 Create Lead with All Standard Fields
- Location: tests\lead-creation.spec.js:95:3

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
              - heading "Lead Jane Smith" [level=1] [ref=e319]:
                - generic [ref=e321]: Lead
                - generic [ref=e322]: Jane Smith
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
                - paragraph [ref=e367]:
                  - generic [ref=e368]: Manager
              - generic [ref=e370]:
                - paragraph [ref=e371]: Company
                - paragraph [ref=e372]:
                  - generic [ref=e373]: Tech Innovations Inc
              - generic [ref=e375]:
                - button "Phone (2)" [ref=e376] [cursor=pointer]:
                  - paragraph [ref=e377]:
                    - text: Phone (2)
                    - img [ref=e382]
                - list [ref=e385]:
                  - paragraph [ref=e389]:
                    - link "(555) 123-4567" [ref=e393] [cursor=pointer]:
                      - /url: tel:(555) 123-4567
              - generic [ref=e395]:
                - paragraph [ref=e396]: Email
                - paragraph [ref=e397]:
                  - link "jane.smith@techinnovations.com" [ref=e402] [cursor=pointer]:
                    - /url: mailto:jane.smith@techinnovations.com
          - article [ref=e411]:
            - generic [ref=e412]:
              - heading "Path" [level=2] [ref=e413]
              - generic [ref=e416]:
                - listbox "Path Options" [ref=e421]:
                  - option "stage complete Contacted" [ref=e422] [cursor=pointer]:
                    - generic [ref=e425]:
                      - img [ref=e427]
                      - generic [ref=e430]: stage complete
                    - generic [ref=e431]: Contacted
                  - option "Open" [selected] [ref=e432] [cursor=pointer]:
                    - generic [ref=e433]: Open
                  - option "Unqualified" [ref=e434] [cursor=pointer]:
                    - generic [ref=e435]: Unqualified
                  - option "Converted" [ref=e436] [cursor=pointer]:
                    - generic [ref=e437]: Converted
                - button "Mark Status as Complete" [ref=e439] [cursor=pointer]:
                  - img [ref=e443]
                  - generic [ref=e446]: Mark Status as Complete
          - generic [ref=e447]:
            - generic [ref=e453]:
              - heading "Tabs" [level=2] [ref=e454]
              - generic "Tabs" [ref=e455]:
                - generic [ref=e456]:
                  - heading "Tabs" [level=2] [ref=e457]
                  - tablist "Tabs" [ref=e459]:
                    - tab "Activity" [selected] [ref=e460] [cursor=pointer]
                    - tab "Details" [ref=e461] [cursor=pointer]
                    - tab "Chatter" [ref=e462] [cursor=pointer]
                  - tabpanel "Activity" [ref=e465]:
                    - generic [ref=e471]:
                      - heading "Activity Publisher" [level=2] [ref=e472]
                      - group [ref=e474]:
                        - generic [ref=e476]:
                          - button "Email" [ref=e477] [cursor=pointer]:
                            - generic [ref=e479]:
                              - img [ref=e481]
                              - generic [ref=e484]: Email
                            - generic [ref=e485]: Email
                          - button "More Email Actions" [ref=e487] [cursor=pointer]:
                            - img [ref=e489]
                            - generic [ref=e492]: More Email Actions
                      - heading "Activity Timeline" [level=2] [ref=e493]
                      - generic [ref=e495]:
                        - link "Skip to the bottom of the activity timeline" [ref=e496] [cursor=pointer]:
                          - /url: javascript:void(0);
                        - generic [ref=e498]:
                          - generic [ref=e500]: "Filters: All time • All activities • All types"
                          - button "Timeline Settings" [ref=e501] [cursor=pointer]:
                            - img [ref=e503]
                            - generic [ref=e506]: Timeline Settings
                        - generic [ref=e509]:
                          - button "Refresh" [ref=e510] [cursor=pointer]
                          - text: •
                          - button "Expand All. Show details for activities in the timeline." [ref=e511] [cursor=pointer]: Expand All
                          - text: •
                          - button "View All" [ref=e512] [cursor=pointer]
                        - generic [ref=e514]:
                          - heading "Upcoming & Overdue" [level=3] [ref=e515]:
                            - button "Upcoming & Overdue" [expanded] [ref=e516] [cursor=pointer]:
                              - img [ref=e518]
                              - text: Upcoming & Overdue
                          - generic [ref=e521]:
                            - generic:
                              - list
                            - generic [ref=e524]:
                              - text: No activities to show.
                              - text: Get started by sending an email, scheduling a task, and more.
                        - status [ref=e525]:
                          - generic [ref=e526]: No past activity. Past meetings and tasks marked as done show up here.
                        - link "Skip to the top of the activity timeline" [ref=e527] [cursor=pointer]:
                          - /url: javascript:void(0);
            - generic [ref=e534]:
              - heading "Tabs" [level=2] [ref=e535]
              - generic "Tabs" [ref=e536]:
                - generic [ref=e537]:
                  - heading "Tabs" [level=2] [ref=e538]
                  - tablist "Tabs" [ref=e540]:
                    - tab "Related" [selected] [ref=e541] [cursor=pointer]
                  - tabpanel "Related" [ref=e544]:
                    - generic [ref=e545]:
                      - article [ref=e550]:
                        - generic [ref=e552]:
                          - img [ref=e557]
                          - heading "We found no potential duplicates of this Lead." [level=2] [ref=e561]:
                            - generic "We found no potential duplicates of this Lead." [ref=e562]
                        - generic [ref=e564]: No duplicate rules are activated. Activate duplicate rules to identify potential duplicate records.
                      - generic [ref=e568]:
                        - article "Campaign History" [ref=e576]:
                          - generic [ref=e577]:
                            - heading "Campaign History (0)" [level=2] [ref=e583]:
                              - link "Campaign History (0)" [ref=e584] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjQ8XUAV/related/CampaignMembers/view
                                - generic "Campaign History" [ref=e585]
                                - generic "(0)" [ref=e586]
                            - button "Show actions for Campaign History" [ref=e590] [cursor=pointer]:
                              - generic [ref=e592]:
                                - img [ref=e594]
                                - generic [ref=e597]: Show actions for Campaign History
                        - article "Licenses" [ref=e603]:
                          - generic [ref=e610]:
                            - img [ref=e614]
                            - heading "Licenses (0)" [level=2] [ref=e616]:
                              - link "Licenses (0)" [ref=e617] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjQ8XUAV/related/sfLma__R00N30000001JvRAEA0__r/view
                                - generic "Licenses" [ref=e618]
                                - generic "(0)" [ref=e619]
    - generic:
      - contentinfo "Utility Bar":
        - list [ref=e623]:
          - listitem [ref=e624]:
            - button "To Do List" [ref=e627] [cursor=pointer]:
              - img [ref=e631]
              - generic [ref=e634]: To Do List
  - status [ref=e636]: Success notification.Lead "Jane Smith" was created. Press Control + F6 to navigate to the next toast notification or focusable region.
```

# Test source

```ts
  39  |     } catch (err) {
  40  |       // Page may be closed
  41  |     }
  42  |   }
  43  | });
  44  | 
  45  | /**
  46  |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  47  |  * SECTION 1: LEAD CREATION - BASIC INFORMATION  
  48  |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  49  |  */
  50  | 
  51  | test.describe('1. Lead Creation - Basic Information', () => {
  52  | 
  53  |   // HEALED: Removed test.fixme() - tests now run
  54  |   sfTest('1.1 Create Lead with Required Fields Only', async ({ sfPage: page }) => {
  55  |     await allure.description(
  56  |       'Verify that a Lead can be created with only the required fields (First Name, Last Name, Company).'
  57  |     );
  58  | 
  59  |     // Direct navigation actions
  60  |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  61  |     await page.waitForTimeout(500);
  62  |     
  63  |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  64  |     await page.waitForTimeout(500);
  65  |     
  66  |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  67  |     await waitForSFLoad(page);
  68  |     
  69  |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  70  |     await waitForSFLoad(page);
  71  | 
  72  |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  73  | 
  74  |     // Fill form
  75  |     await fillField(page, /first name/i, 'John');
  76  |     await fillField(page, /last name/i, 'Doe');
  77  |     await fillField(page, /company/i, 'Acme Corporation');
  78  |     
  79  |     // Save - use exact: true to avoid matching "Save & New"
  80  |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  81  |     await waitForSFLoad(page);
  82  | 
  83  |     // HEALED: Improved verification - check URL and company instead of first/last name
  84  |     await sfStep('Verify Lead was created', page, async () => {
  85  |       const url = page.url();
  86  |       // When save succeeds, URL should change to detail view
  87  |       expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  88  |       
  89  |       // Company name is prominently displayed on detail page
  90  |       await expect(page.getByText('Acme Corporation')).toBeVisible({ timeout: 15000 });
  91  |     });
  92  |   });
  93  | 
  94  |   // HEALED: Removed test.fixme(), simplified, robust verifications
  95  |   sfTest('1.2 Create Lead with All Standard Fields', async ({ sfPage: page }) => {
  96  |     await allure.description(
  97  |       'Verify that a Lead can be created with all standard fields populated.'
  98  |     );
  99  | 
  100 |     // Navigate
  101 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  102 |     await page.waitForTimeout(500);
  103 |     
  104 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  105 |     await page.waitForTimeout(500);
  106 |     
  107 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  108 |     await waitForSFLoad(page);
  109 |     
  110 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  111 |     await waitForSFLoad(page);
  112 | 
  113 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  114 | 
  115 |     // Fill required fields
  116 |     await fillField(page, /first name/i, 'Jane');
  117 |     await fillField(page, /last name/i, 'Smith');
  118 |     await fillField(page, /company/i, 'Tech Innovations Inc');
  119 |     
  120 |     // Optional fields
  121 |     try {
  122 |       await fillField(page, /title/i, 'Manager');
  123 |       await fillField(page, /email/i, 'jane.smith@techinnovations.com');
  124 |       await fillField(page, /phone/i, '(555) 123-4567');
  125 |     } catch {
  126 |       // Optional fields may not exist
  127 |     }
  128 | 
  129 |     // Save
  130 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  131 |     await waitForSFLoad(page);
  132 | 
  133 |     // Verify
  134 |     await sfStep('Verify Lead created', page, async () => {
  135 |       const url = page.url();
  136 |       expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  137 |       
  138 |       // Company is always visible on detail page
> 139 |       await expect(page.getByText('Tech Innovations Inc')).toBeVisible({ timeout: 15000 });
      |                                                            ^ Error: expect.toBeVisible: Target page, context or browser has been closed
  140 |     });
  141 |   });
  142 | 
  143 | });
  144 | 
  145 | /**
  146 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  147 |  * SECTION 2: LEAD CREATION - FIELD VALIDATION
  148 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  149 |  */
  150 | 
  151 | test.describe('2. Lead Creation - Field Validation', () => {
  152 | 
  153 |   sfTest('2.1 Attempt to Save Lead Without Required Fields', async ({ sfPage: page }) => {
  154 |     await allure.description(
  155 |       'Verify that the system prevents saving a Lead when required fields are empty.'
  156 |     );
  157 | 
  158 |     // Navigate
  159 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  160 |     await page.waitForTimeout(500);
  161 |     
  162 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  163 |     await page.waitForTimeout(500);
  164 |     
  165 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  166 |     await waitForSFLoad(page);
  167 |     
  168 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  169 |     await waitForSFLoad(page);
  170 | 
  171 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  172 | 
  173 |     // Verify fields are empty
  174 |     await expect(page.getByLabel(/first name/i)).toHaveValue('');
  175 |     await expect(page.getByLabel(/last name/i)).toHaveValue('');
  176 | 
  177 |     // Try to save empty form
  178 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  179 |     await page.waitForTimeout(1000);
  180 | 
  181 |     // HEALED: Check URL hasn't changed - we should still be on the form
  182 |     await sfStep('Verify validation prevents save', page, async () => {
  183 |       const url = page.url();
  184 |       // URL should NOT contain a record ID - should still be the new form
  185 |       expect(url).not.toMatch(/\/Lead\/[a-zA-Z0-9]{15,18}/);
  186 |       
  187 |       // Form should still be visible
  188 |       await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 5000 });
  189 |     });
  190 |   });
  191 | 
  192 |   sfTest('2.2 Enter Only First Name and Attempt Save', async ({ sfPage: page }) => {
  193 |     await allure.description(
  194 |       'Verify validation catches missing Last Name when only First Name is provided.'
  195 |     );
  196 | 
  197 |     // Navigate
  198 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  199 |     await page.waitForTimeout(500);
  200 |     
  201 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  202 |     await page.waitForTimeout(500);
  203 |     
  204 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  205 |     await waitForSFLoad(page);
  206 |     
  207 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  208 |     await waitForSFLoad(page);
  209 | 
  210 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  211 | 
  212 |     // Fill only first name
  213 |     await fillField(page, /first name/i, 'Michael');
  214 |     
  215 |     // Try to save
  216 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  217 |     await page.waitForTimeout(1000);
  218 | 
  219 |     // Verify save failed
  220 |     await sfStep('Verify validation error', page, async () => {
  221 |       const url = page.url();
  222 |       expect(url).not.toMatch(/\/Lead\/[a-zA-Z0-9]{15,18}/);
  223 |       
  224 |       // First name should still be filled
  225 |       await expect(page.getByLabel(/first name/i)).toHaveValue('Michael');
  226 |       // Last name should still be visible (not filled)
  227 |       await expect(page.getByLabel(/last name/i)).toBeVisible({ timeout: 5000 });
  228 |     });
  229 |   });
  230 | 
  231 |   sfTest('2.3 Enter Valid Email Address', async ({ sfPage: page }) => {
  232 |     await allure.description(
  233 |       'Verify that properly formatted emails are accepted and saved correctly.'
  234 |     );
  235 | 
  236 |     // Navigate
  237 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  238 |     await page.waitForTimeout(500);
  239 |     
```