# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 1. Lead Creation - Basic Information >> 1.1 Create Lead with Required Fields Only
- Location: tests\lead-creation.spec.js:86:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: /save/i }) resolved to 2 elements:
    1) <button type="button" part="button" kx-type="ripple" name="SaveAndNew" lwc-40a585din3p="" aria-disabled="false" kx-scope="button-neutral" class="slds-button slds-button_neutral">Save & New</button> aka getByRole('button', { name: 'Save & New' })
    2) <button type="button" part="button" name="SaveEdit" kx-type="ripple" lwc-40a585din3p="" aria-disabled="false" kx-scope="button-brand" class="slds-button slds-button_brand">Save</button> aka getByRole('button', { name: 'Save', exact: true })

Call log:
  - waiting for getByRole('button', { name: /save/i })

```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic [ref=e2]:
      - generic [ref=e3]:
        - link [ref=e4] [cursor=pointer]:
          - /url: javascript:void(0);
          - text: Skip to Navigation
        - link [ref=e5] [cursor=pointer]:
          - /url: javascript:void(0);
          - text: Skip to Main Content
        - generic [ref=e6]:
          - button [ref=e12]:
            - img [ref=e14]
            - text: Search...
          - navigation [ref=e17]:
            - list [ref=e19]:
              - listitem [ref=e20]:
                - group [ref=e21]:
                  - button [ref=e23] [cursor=pointer]:
                    - img [ref=e28]
                  - button [ref=e32] [cursor=pointer]:
                    - img [ref=e37]
              - listitem [ref=e40]:
                - button [disabled] [ref=e42]:
                  - img [ref=e46]
              - listitem [ref=e49]:
                - button [ref=e51] [cursor=pointer]:
                  - img [ref=e56]
              - listitem [ref=e59]:
                - button [ref=e62] [cursor=pointer]:
                  - img [ref=e67]
              - listitem [ref=e70]:
                - button [ref=e76] [cursor=pointer]:
                  - img [ref=e81]
              - listitem [ref=e84]:
                - button [ref=e87] [cursor=pointer]:
                  - generic [ref=e89]:
                    - img [ref=e93]
                    - generic [ref=e97]: "2"
                - generic [ref=e98]: 2 new notifications
              - listitem [ref=e99]:
                - button [ref=e102] [cursor=pointer]
      - generic [ref=e107]:
        - generic [ref=e110]:
          - generic [ref=e112]:
            - navigation [ref=e113]:
              - button [ref=e115] [cursor=pointer]:
                - generic [ref=e126]: App Launcher
            - heading [level=1] [ref=e127]:
              - generic [ref=e128]: Sales
          - navigation [ref=e131]:
            - list [ref=e132]:
              - listitem [ref=e133]:
                - link [ref=e134] [cursor=pointer]:
                  - /url: /lightning/page/home
                  - generic [ref=e135]: Home
              - listitem [ref=e136]:
                - link [ref=e137] [cursor=pointer]:
                  - /url: /lightning/o/Opportunity/home
                  - generic [ref=e138]: Opportunities
                - button [ref=e142] [cursor=pointer]:
                  - img [ref=e146]
                  - generic [ref=e149]: Opportunities List
              - listitem [ref=e150] [cursor=pointer]:
                - link [ref=e151]:
                  - /url: /lightning/o/Lead/home
                  - generic [ref=e152]: Leads
                - button [ref=e156]:
                  - img [ref=e160]
                  - generic [ref=e163]: Leads List
              - listitem [ref=e164]:
                - link [ref=e165] [cursor=pointer]:
                  - /url: /lightning/o/Task/home
                  - generic [ref=e166]: Tasks
                - button [ref=e170] [cursor=pointer]:
                  - img [ref=e174]
                  - generic [ref=e177]: Tasks List
              - listitem [ref=e178]:
                - link [ref=e179] [cursor=pointer]:
                  - /url: /lightning/o/ContentDocument/home
                  - generic [ref=e180]: Files
                - button [ref=e184] [cursor=pointer]:
                  - img [ref=e188]
                  - generic [ref=e191]: Files List
              - listitem [ref=e192]:
                - link [ref=e193] [cursor=pointer]:
                  - /url: /lightning/o/Account/home
                  - generic [ref=e194]: Accounts
                - button [ref=e198] [cursor=pointer]:
                  - img [ref=e202]
                  - generic [ref=e205]: Accounts List
              - listitem [ref=e206]:
                - link [ref=e207] [cursor=pointer]:
                  - /url: /lightning/o/Contact/home
                  - generic [ref=e208]: Contacts
                - button [ref=e212] [cursor=pointer]:
                  - img [ref=e216]
                  - generic [ref=e219]: Contacts List
              - listitem [ref=e220]:
                - link [ref=e221] [cursor=pointer]:
                  - /url: /lightning/o/Campaign/home
                  - generic [ref=e222]: Campaigns
                - button [ref=e226] [cursor=pointer]:
                  - img [ref=e230]
                  - generic [ref=e233]: Campaigns List
              - listitem [ref=e234]:
                - link [ref=e235] [cursor=pointer]:
                  - /url: /lightning/o/Dashboard/home
                  - generic [ref=e236]: Dashboards
                - button [ref=e240] [cursor=pointer]:
                  - img [ref=e244]
                  - generic [ref=e247]: Dashboards List
              - listitem [ref=e248]:
                - link [ref=e249] [cursor=pointer]:
                  - /url: /lightning/o/Report/home
                  - generic [ref=e250]: Reports
                - button [ref=e254] [cursor=pointer]:
                  - img [ref=e258]
                  - generic [ref=e261]: Reports List
              - listitem [ref=e262]:
                - link [ref=e263] [cursor=pointer]:
                  - /url: /lightning/page/chatter
                  - generic [ref=e264]: Chatter
              - listitem [ref=e265]:
                - button [ref=e267] [cursor=pointer]:
                  - generic [ref=e268]: More
                  - img [ref=e272]
                  - generic [ref=e275]: Show more navigation items
              - listitem [ref=e276]:
                - button [ref=e278] [cursor=pointer]:
                  - img [ref=e280]
                  - generic [ref=e283]: Edit nav items
        - main [ref=e285]:
          - generic [ref=e293]:
            - generic [ref=e295]:
              - generic [ref=e297]:
                - generic [ref=e301]:
                  - img [ref=e303]
                  - generic [ref=e307]: Lead
                - generic [ref=e308]:
                  - heading [level=1] [ref=e309]: Leads
                  - generic [ref=e314] [cursor=pointer]:
                    - heading [level=1] [ref=e315]:
                      - generic [ref=e316]: Leads
                      - generic [ref=e317]: My Leads
                    - button [ref=e320]:
                      - img [ref=e322]
                      - generic [ref=e325]: "Select a List View: Leads"
              - group [ref=e329]:
                - button [ref=e332] [cursor=pointer]:
                  - img [ref=e334]
                  - img [ref=e338]
                  - generic [ref=e341]: Lead View Settings
                - button [ref=e342] [cursor=pointer]:
                  - img [ref=e344]
                  - generic [ref=e347]: Refresh
                - button [ref=e351] [cursor=pointer]:
                  - img [ref=e353]
                  - generic [ref=e356]: Edit List
                - group [ref=e358]:
                  - generic [ref=e360]:
                    - button [ref=e362] [cursor=pointer]: New
                    - button [ref=e364] [cursor=pointer]: List View
            - generic [ref=e366]:
              - generic [ref=e370]:
                - generic [ref=e371]:
                  - generic [ref=e372]:
                    - generic [ref=e374]: Created
                    - button [ref=e379] [cursor=pointer]:
                      - text: This Quarter
                      - img [ref=e381]
                  - generic [ref=e384]:
                    - generic [ref=e386]: Owner
                    - button [ref=e391] [cursor=pointer]:
                      - text: Me
                      - img [ref=e393]
                - group [ref=e398]:
                  - generic [ref=e400]:
                    - generic [ref=e401]:
                      - button [ref=e404] [cursor=pointer]:
                        - img [ref=e406]
                        - generic [ref=e409]: Important Leads
                      - generic [ref=e410]: Apply Important Leads Filter
                    - tooltip [ref=e411]: Shows the leads you mark as important. If you filter your view, the same filters apply.
                  - button [ref=e415] [cursor=pointer]:
                    - img [ref=e417]
                    - generic [ref=e420]: Show filters
              - group [ref=e423]:
                - button [pressed] [ref=e425] [cursor=pointer]:
                  - generic [ref=e426]:
                    - paragraph [ref=e428]: Total Leads
                    - paragraph [ref=e429]: "0"
                - generic [ref=e430]:
                  - button [ref=e431] [cursor=pointer]:
                    - generic [ref=e432]:
                      - paragraph [ref=e434]: No Activity
                      - paragraph [ref=e436]: "0"
                  - button [ref=e440] [cursor=pointer]:
                    - img [ref=e442]
                    - generic [ref=e445]: Help
                - generic [ref=e446]:
                  - button [ref=e447] [cursor=pointer]:
                    - generic [ref=e448]:
                      - paragraph [ref=e450]: Idle
                      - paragraph [ref=e452]: "0"
                  - button [ref=e456] [cursor=pointer]:
                    - img [ref=e458]
                    - generic [ref=e461]: Help
                - generic [ref=e462]:
                  - button [ref=e463] [cursor=pointer]:
                    - generic [ref=e464]:
                      - paragraph [ref=e466]: No Upcoming
                      - paragraph [ref=e468]: "0"
                  - button [ref=e472] [cursor=pointer]:
                    - img [ref=e474]
                    - generic [ref=e477]: Help
                - button [ref=e479] [cursor=pointer]:
                  - generic [ref=e480]:
                    - paragraph [ref=e482]: Overdue
                    - paragraph [ref=e483]: "0"
                - button [ref=e485] [cursor=pointer]:
                  - generic [ref=e486]:
                    - paragraph [ref=e488]: Due Today
                    - paragraph [ref=e489]: "0"
                - generic [ref=e490]:
                  - button [ref=e491] [cursor=pointer]:
                    - generic [ref=e492]:
                      - paragraph [ref=e494]: Upcoming
                      - paragraph [ref=e496]: "0"
                  - button [ref=e500] [cursor=pointer]:
                    - img [ref=e502]
                    - generic [ref=e505]: Help
              - generic [ref=e507]:
                - generic [ref=e509]:
                  - status [ref=e513]: 0 items • Filtered by Created Date, Me, Total Leads
                  - group [ref=e516]:
                    - generic [ref=e518]:
                      - button [ref=e520] [cursor=pointer]: Change Status
                      - button [ref=e522] [cursor=pointer]: Change Owner
                      - button [ref=e524] [cursor=pointer]: Send Email
                      - button [ref=e526] [cursor=pointer]: Assign Label
                - alert [ref=e528]:
                  - generic [ref=e530]:
                    - paragraph [ref=e531]: Get your lead pipeline flowing
                    - paragraph [ref=e532]: When there are leads that match your selections, you'll see them here.
      - list [ref=e535]:
        - listitem [ref=e536]:
          - button [ref=e539] [cursor=pointer]:
            - img [ref=e543]
            - generic [ref=e546]: To Do List
    - dialog "New Lead" [ref=e549]:
      - generic [ref=e550]:
        - button "Cancel and close" [ref=e551] [cursor=pointer]:
          - img [ref=e553]
          - generic [ref=e556]: Cancel and close
        - generic [ref=e557]:
          - generic [ref=e564]:
            - heading "New Lead" [level=2] [ref=e566]
            - generic [ref=e568]:
              - generic [ref=e569]: "* = Required Information"
              - generic [ref=e571]:
                - generic [ref=e576]:
                  - generic [ref=e578]:
                    - heading "Lead Information" [level=3] [ref=e579]:
                      - generic [ref=e580]: Lead Information
                    - list [ref=e582]:
                      - generic [ref=e583]:
                        - generic [ref=e585]:
                          - listitem [ref=e587]:
                            - generic [ref=e588]:
                              - generic [ref=e589]: Lead Owner
                              - generic [ref=e601]: Rakesh Sharma
                          - listitem [ref=e603]:
                            - generic [ref=e610]:
                              - generic [ref=e612]: "*Lead Status"
                              - generic [ref=e616]:
                                - combobox "Lead Status" [ref=e617] [cursor=pointer]:
                                  - generic [ref=e618]: Open
                                - img [ref=e622]
                              - status
                        - generic [ref=e626]:
                          - listitem [ref=e628]:
                            - button "Undo Name" [ref=e630] [cursor=pointer]:
                              - img [ref=e632]
                            - group "Name required" [ref=e639]:
                              - generic [ref=e640]:
                                - text: "*Name"
                                - generic "required" [ref=e641]
                              - generic [ref=e643]:
                                - generic [ref=e647]:
                                  - generic [ref=e649]: Salutation
                                  - generic [ref=e653]:
                                    - combobox "Salutation" [ref=e654] [cursor=pointer]:
                                      - generic [ref=e655]: "--None--"
                                    - img [ref=e659]
                                  - status
                                - generic [ref=e665]:
                                  - generic [ref=e666]: First Name
                                  - textbox "First Name" [ref=e668]: John
                                - generic [ref=e672]:
                                  - generic [ref=e673]: "*Last Name"
                                  - textbox "Last Name" [ref=e675]: Doe
                          - listitem [ref=e677]:
                            - generic [ref=e682]:
                              - generic [ref=e683]: Phone
                              - textbox "Phone" [ref=e685]
                        - generic [ref=e687]:
                          - listitem [ref=e689]:
                            - button "Undo Company" [ref=e691] [cursor=pointer]:
                              - img [ref=e693]
                            - generic [ref=e701]:
                              - generic [ref=e702]: "*Company"
                              - textbox "Company" [active] [ref=e704]: Acme Corporation
                          - listitem [ref=e706]:
                            - generic [ref=e711]:
                              - generic [ref=e712]: Email
                              - textbox "Email" [ref=e714]
                        - generic [ref=e716]:
                          - listitem [ref=e718]:
                            - generic [ref=e724]:
                              - generic [ref=e725]: Title
                              - textbox "Title" [ref=e727]
                          - listitem [ref=e729]:
                            - generic [ref=e736]:
                              - generic [ref=e738]: Rating
                              - generic [ref=e742]:
                                - combobox "Rating" [ref=e743] [cursor=pointer]:
                                  - generic [ref=e744]: "--None--"
                                - img [ref=e748]
                              - status
                  - generic [ref=e752]:
                    - heading "Address Information" [level=3] [ref=e753]:
                      - generic [ref=e754]: Address Information
                    - list [ref=e756]:
                      - generic [ref=e759]:
                        - listitem [ref=e761]:
                          - group "Address" [ref=e766]:
                            - generic [ref=e767]: Address
                            - generic [ref=e769]:
                              - generic [ref=e771]:
                                - generic [ref=e772]: Address Search
                                - generic [ref=e776]:
                                  - combobox "Address Search" [ref=e779]
                                  - img [ref=e783]
                              - status [ref=e786]
                              - generic [ref=e788]:
                                - generic [ref=e789]: Street
                                - textbox "Street" [ref=e791]
                                - status
                              - generic [ref=e795]:
                                - generic [ref=e796]: City
                                - textbox "City" [ref=e798]
                              - generic [ref=e799]:
                                - generic [ref=e802]:
                                  - generic [ref=e803]: Zip/Postal Code
                                  - textbox "Zip/Postal Code" [ref=e805]
                                - generic [ref=e808]:
                                  - generic [ref=e809]: State/Province
                                  - textbox "State/Province" [ref=e811]
                              - generic [ref=e815]:
                                - generic [ref=e816]: Country
                                - textbox "Country" [ref=e818]
                        - listitem [ref=e820]:
                          - generic [ref=e825]:
                            - generic [ref=e826]: Website
                            - textbox "Website" [ref=e828]
                  - generic [ref=e830]:
                    - heading "Additional Information" [level=3] [ref=e831]:
                      - generic [ref=e832]: Additional Information
                    - list [ref=e834]:
                      - generic [ref=e835]:
                        - generic [ref=e837]:
                          - listitem [ref=e839]:
                            - generic [ref=e844]:
                              - generic [ref=e845]: No. of Employees
                              - spinbutton "No. of Employees" [ref=e847]
                          - listitem [ref=e849]:
                            - generic [ref=e856]:
                              - generic [ref=e858]: Lead Source
                              - generic [ref=e862]:
                                - combobox "Lead Source" [ref=e863] [cursor=pointer]:
                                  - generic [ref=e864]: "--None--"
                                - img [ref=e868]
                              - status
                        - generic [ref=e872]:
                          - listitem [ref=e874]:
                            - generic [ref=e880]:
                              - generic [ref=e881]: Annual Revenue
                              - spinbutton "Annual Revenue" [ref=e883]
                          - listitem [ref=e885]:
                            - generic [ref=e892]:
                              - generic [ref=e894]: Industry
                              - generic [ref=e898]:
                                - combobox "Industry" [ref=e899] [cursor=pointer]:
                                  - generic [ref=e900]: "--None--"
                                - img [ref=e904]
                              - status
                  - generic [ref=e908]:
                    - heading "Description Information" [level=3] [ref=e909]:
                      - generic [ref=e910]: Description Information
                    - list [ref=e912]:
                      - listitem [ref=e917]:
                        - generic [ref=e921]:
                          - generic [ref=e922]: Description
                          - textbox "Description" [ref=e924]
                          - status
                - generic [ref=e929]:
                  - generic "Cancel" [ref=e930]:
                    - button "Cancel" [ref=e935] [cursor=pointer]
                  - generic "Save & New" [ref=e936]:
                    - button "Save & New" [ref=e941] [cursor=pointer]
                  - generic "Save" [ref=e942]:
                    - button "Save" [ref=e947] [cursor=pointer]
          - status [ref=e948]
  - generic:
    - status
```

# Test source

```ts
  2   | import * as allure from 'allure-js-commons';
  3   | import 'dotenv/config';
  4   | import { sfTest } from './seed.spec.js';
  5   | import { captureScreenshot, sfStep, setAllureMeta } from '../utils/reporter-utils.js';
  6   | import { fillField, selectPicklist } from '../utils/locator-utils.js';
  7   | import { waitForSFLoad } from '../utils/sf-helpers.js';
  8   | 
  9   | /**
  10  |  * LEAD CREATION TEST SUITE
  11  |  * ═══════════════════════════════════
  12  |  * Comprehensive test coverage for Salesforce Lead creation.
  13  |  * 
  14  |  * HEALED: Major refactor to fix browser closure issues:
  15  |  * 1. Removed all test.fixme() markers - tests now actually run
  16  |  * 2. Consolidated sfStep() calls - reduced from 5-10 per test to 2-3
  17  |  * 3. Group related actions together instead of wrapping each one
  18  |  * 4. Only take screenshots at meaningful verification points
  19  |  * 5. Using ONLY semantic locators (getByRole, getByLabel, getByText, getByPlaceholder)
  20  |  */
  21  | 
  22  | // Apply Allure metadata to all tests in this suite
  23  | test.beforeEach(async () => {
  24  |   await setAllureMeta({
  25  |     epic: 'CRM',
  26  |     feature: 'Lead Management',
  27  |     story: 'Create Lead',
  28  |     severity: 'critical',
  29  |   });
  30  | });
  31  | 
  32  | // Screenshot on failure for debugging
  33  | test.afterEach(async ({ page }, testInfo) => {
  34  |   if (testInfo.status !== 'passed') {
  35  |     try {
  36  |       const failureScreenshot = await page.screenshot({ fullPage: true });
  37  |       await testInfo.attach('failure-screenshot', {
  38  |         body: failureScreenshot,
  39  |         contentType: 'image/png',
  40  |       });
  41  |     } catch (err) {
  42  |       // Page may be closed, ignore screenshot error
  43  |     }
  44  |   }
  45  | });
  46  | 
  47  | /**
  48  |  * Helper function to navigate to Leads module
  49  |  * Groups all navigation steps into one to avoid excessive sfStep calls
  50  |  */
  51  | async function navigateToNewLead(page) {
  52  |   try {
  53  |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  54  |     await page.waitForTimeout(300);
  55  |     
  56  |     const searchBox = page.getByPlaceholder(/search/i);
  57  |     await searchBox.fill('Leads', { timeout: 5000 });
  58  |     await page.waitForTimeout(500);
  59  |     
  60  |     const leadsOption = page.getByRole('option', { name: /^Leads$/i });
  61  |     await leadsOption.click({ timeout: 5000 });
  62  |     await waitForSFLoad(page);
  63  |     
  64  |     const newButton = page.getByRole('button', { name: /new/i });
  65  |     await newButton.click({ timeout: 5000 });
  66  |     await waitForSFLoad(page);
  67  |     
  68  |     // Verify form loaded
  69  |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  70  |   } catch (err) {
  71  |     console.error('Navigation to new lead failed:', err);
  72  |     throw err;
  73  |   }
  74  | }
  75  | 
  76  | /**
  77  |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  78  |  * SECTION 1: LEAD CREATION - BASIC INFORMATION
  79  |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  80  |  */
  81  | 
  82  | test.describe('1. Lead Creation - Basic Information', () => {
  83  | 
  84  |   // HEALED: Removed test.fixme() marker - test now runs
  85  |   // HEALED: Reduced sfStep calls from 8 to 2 (navigation + verification only)
  86  |   sfTest('1.1 Create Lead with Required Fields Only', async ({ sfPage: page }) => {
  87  |     await allure.description(
  88  |       'Verify that a Lead can be created with only the required fields (First Name, Last Name, Company).'
  89  |     );
  90  | 
  91  |     // Navigate to new Lead form with all navigation grouped together
  92  |     await sfStep('Navigate to Leads and open new form', page, async () => {
  93  |       await navigateToNewLead(page);
  94  |     });
  95  | 
  96  |     // Fill form with all fields grouped together (no screenshot between fields)
  97  |     await fillField(page, /first name/i, 'John');
  98  |     await fillField(page, /last name/i, 'Doe');
  99  |     await fillField(page, /company/i, 'Acme Corporation');
  100 |     
  101 |     // Click save
> 102 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
      |                                                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: /save/i }) resolved to 2 elements:
  103 |     await waitForSFLoad(page);
  104 | 
  105 |     // Final verification with screenshot
  106 |     await sfStep('Verify Lead was created', page, async () => {
  107 |       await expect(page.getByText(/John|Doe/i)).toBeVisible({ timeout: 15000 });
  108 |       await expect(page.getByText('Acme Corporation')).toBeVisible({ timeout: 15000 });
  109 |     });
  110 |   });
  111 | 
  112 |   // HEALED: Removed test.fixme() marker - test now runs
  113 |   // HEALED: Reduced sfStep calls - grouped navigation, form filling, verification
  114 |   sfTest('1.2 Create Lead with All Standard Fields', async ({ sfPage: page }) => {
  115 |     await allure.description(
  116 |       'Verify that a Lead can be created with all standard fields populated.'
  117 |     );
  118 | 
  119 |     await sfStep('Navigate to Leads and open new form', page, async () => {
  120 |       await navigateToNewLead(page);
  121 |     });
  122 | 
  123 |     // Fill all fields without wrapping each in sfStep
  124 |     await fillField(page, /first name/i, 'Jane');
  125 |     await fillField(page, /last name/i, 'Smith');
  126 |     await fillField(page, /company/i, 'Tech Innovations Inc');
  127 |     
  128 |     try {
  129 |       await fillField(page, /title/i, 'Manager');
  130 |     } catch {
  131 |       // Title field may not exist
  132 |     }
  133 |     
  134 |     try {
  135 |       await fillField(page, /email/i, 'jane.smith@techinnovations.com');
  136 |     } catch {
  137 |       // Email field may not exist or have different label
  138 |     }
  139 |     
  140 |     try {
  141 |       await fillField(page, /phone/i, '(555) 123-4567');
  142 |     } catch {
  143 |       // Phone field may not exist
  144 |     }
  145 | 
  146 |     try {
  147 |       await fillField(page, /city/i, 'San Francisco');
  148 |     } catch {
  149 |       // City field may not exist
  150 |     }
  151 | 
  152 |     try {
  153 |       await selectPicklist(page, /lead source/i, 'Website');
  154 |     } catch {
  155 |       // Lead Source may not be available
  156 |     }
  157 | 
  158 |     // Click save
  159 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
  160 |     await waitForSFLoad(page);
  161 | 
  162 |     // Final verification with screenshot
  163 |     await sfStep('Verify all fields were saved', page, async () => {
  164 |       await expect(page.getByText(/Jane|Smith/i)).toBeVisible({ timeout: 15000 });
  165 |       await expect(page.getByText('Tech Innovations Inc')).toBeVisible({ timeout: 15000 });
  166 |     });
  167 |   });
  168 | 
  169 | });
  170 | 
  171 | /**
  172 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  173 |  * SECTION 2: LEAD CREATION - FIELD VALIDATION
  174 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  175 |  */
  176 | 
  177 | test.describe('2. Lead Creation - Field Validation', () => {
  178 | 
  179 |   // HEALED: Removed test.fixme() marker - test now runs
  180 |   // HEALED: Reduced sfStep calls - grouped navigation and verification
  181 |   sfTest('2.1 Attempt to Save Lead Without Required Fields', async ({ sfPage: page }) => {
  182 |     await allure.description(
  183 |       'Verify that the system prevents saving a Lead when required fields are empty.'
  184 |     );
  185 | 
  186 |     await sfStep('Navigate to Leads and open new form', page, async () => {
  187 |       await navigateToNewLead(page);
  188 |     });
  189 | 
  190 |     // Verify fields are empty
  191 |     await expect(page.getByLabel(/first name/i)).toHaveValue('');
  192 |     await expect(page.getByLabel(/last name/i)).toHaveValue('');
  193 | 
  194 |     // Click save without filling anything
  195 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
  196 |     await page.waitForTimeout(1000);
  197 | 
  198 |     // Verify save failed (form still visible)
  199 |     await sfStep('Verify validation prevents save', page, async () => {
  200 |       // Form should still be visible if save failed
  201 |       await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  202 |       await expect(page.getByLabel(/first name/i)).toBeVisible({ timeout: 10000 });
```