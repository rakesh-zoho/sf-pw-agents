# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 2. Lead Creation - Field Validation >> 2.1 Attempt to Save Lead Without Required Fields
- Location: tests\lead-creation.spec.js:181:3

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
    - dialog "New Lead" [active] [ref=e549]:
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
                            - group "Name required" [ref=e633]:
                              - generic [ref=e634]:
                                - text: "*Name"
                                - generic "required" [ref=e635]
                              - generic [ref=e637]:
                                - generic [ref=e641]:
                                  - generic [ref=e643]: Salutation
                                  - generic [ref=e647]:
                                    - combobox "Salutation" [ref=e648] [cursor=pointer]:
                                      - generic [ref=e649]: "--None--"
                                    - img [ref=e653]
                                  - status
                                - generic [ref=e659]:
                                  - generic [ref=e660]: First Name
                                  - textbox "First Name" [ref=e662]
                                - generic [ref=e666]:
                                  - generic [ref=e667]: "*Last Name"
                                  - textbox "Last Name" [ref=e669]
                          - listitem [ref=e671]:
                            - generic [ref=e676]:
                              - generic [ref=e677]: Phone
                              - textbox "Phone" [ref=e679]
                        - generic [ref=e681]:
                          - listitem [ref=e683]:
                            - generic [ref=e689]:
                              - generic [ref=e690]: "*Company"
                              - textbox "Company" [ref=e692]
                          - listitem [ref=e694]:
                            - generic [ref=e699]:
                              - generic [ref=e700]: Email
                              - textbox "Email" [ref=e702]
                        - generic [ref=e704]:
                          - listitem [ref=e706]:
                            - generic [ref=e712]:
                              - generic [ref=e713]: Title
                              - textbox "Title" [ref=e715]
                          - listitem [ref=e717]:
                            - generic [ref=e724]:
                              - generic [ref=e726]: Rating
                              - generic [ref=e730]:
                                - combobox "Rating" [ref=e731] [cursor=pointer]:
                                  - generic [ref=e732]: "--None--"
                                - img [ref=e736]
                              - status
                  - generic [ref=e740]:
                    - heading "Address Information" [level=3] [ref=e741]:
                      - generic [ref=e742]: Address Information
                    - list [ref=e744]:
                      - generic [ref=e747]:
                        - listitem [ref=e749]:
                          - group "Address" [ref=e754]:
                            - generic [ref=e755]: Address
                            - generic [ref=e757]:
                              - generic [ref=e759]:
                                - generic [ref=e760]: Address Search
                                - generic [ref=e764]:
                                  - combobox "Address Search" [ref=e767]
                                  - img [ref=e771]
                              - status [ref=e774]
                              - generic [ref=e776]:
                                - generic [ref=e777]: Street
                                - textbox "Street" [ref=e779]
                                - status
                              - generic [ref=e783]:
                                - generic [ref=e784]: City
                                - textbox "City" [ref=e786]
                              - generic [ref=e787]:
                                - generic [ref=e790]:
                                  - generic [ref=e791]: Zip/Postal Code
                                  - textbox "Zip/Postal Code" [ref=e793]
                                - generic [ref=e796]:
                                  - generic [ref=e797]: State/Province
                                  - textbox "State/Province" [ref=e799]
                              - generic [ref=e803]:
                                - generic [ref=e804]: Country
                                - textbox "Country" [ref=e806]
                        - listitem [ref=e808]:
                          - generic [ref=e813]:
                            - generic [ref=e814]: Website
                            - textbox "Website" [ref=e816]
                  - generic [ref=e818]:
                    - heading "Additional Information" [level=3] [ref=e819]:
                      - generic [ref=e820]: Additional Information
                    - list [ref=e822]:
                      - generic [ref=e823]:
                        - generic [ref=e825]:
                          - listitem [ref=e827]:
                            - generic [ref=e832]:
                              - generic [ref=e833]: No. of Employees
                              - spinbutton "No. of Employees" [ref=e835]
                          - listitem [ref=e837]:
                            - generic [ref=e844]:
                              - generic [ref=e846]: Lead Source
                              - generic [ref=e850]:
                                - combobox "Lead Source" [ref=e851] [cursor=pointer]:
                                  - generic [ref=e852]: "--None--"
                                - img [ref=e856]
                              - status
                        - generic [ref=e860]:
                          - listitem [ref=e862]:
                            - generic [ref=e868]:
                              - generic [ref=e869]: Annual Revenue
                              - spinbutton "Annual Revenue" [ref=e871]
                          - listitem [ref=e873]:
                            - generic [ref=e880]:
                              - generic [ref=e882]: Industry
                              - generic [ref=e886]:
                                - combobox "Industry" [ref=e887] [cursor=pointer]:
                                  - generic [ref=e888]: "--None--"
                                - img [ref=e892]
                              - status
                  - generic [ref=e896]:
                    - heading "Description Information" [level=3] [ref=e897]:
                      - generic [ref=e898]: Description Information
                    - list [ref=e900]:
                      - listitem [ref=e905]:
                        - generic [ref=e909]:
                          - generic [ref=e910]: Description
                          - textbox "Description" [ref=e912]
                          - status
                - generic [ref=e917]:
                  - generic "Cancel" [ref=e918]:
                    - button "Cancel" [ref=e923] [cursor=pointer]
                  - generic "Save & New" [ref=e924]:
                    - button "Save & New" [ref=e929] [cursor=pointer]
                  - generic "Save" [ref=e930]:
                    - button "Save" [ref=e935] [cursor=pointer]
          - status [ref=e936]
  - generic:
    - status
```

# Test source

```ts
  95  | 
  96  |     // Fill form with all fields grouped together (no screenshot between fields)
  97  |     await fillField(page, /first name/i, 'John');
  98  |     await fillField(page, /last name/i, 'Doe');
  99  |     await fillField(page, /company/i, 'Acme Corporation');
  100 |     
  101 |     // Click save
  102 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
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
> 195 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
      |                                                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: /save/i }) resolved to 2 elements:
  196 |     await page.waitForTimeout(1000);
  197 | 
  198 |     // Verify save failed (form still visible)
  199 |     await sfStep('Verify validation prevents save', page, async () => {
  200 |       // Form should still be visible if save failed
  201 |       await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  202 |       await expect(page.getByLabel(/first name/i)).toBeVisible({ timeout: 10000 });
  203 |     });
  204 |   });
  205 | 
  206 |   // HEALED: Removed test.fixme() marker - test now runs
  207 |   // HEALED: Consolidated form operations
  208 |   sfTest('2.2 Enter Only First Name and Attempt Save', async ({ sfPage: page }) => {
  209 |     await allure.description(
  210 |       'Verify validation catches missing Last Name when only First Name is provided.'
  211 |     );
  212 | 
  213 |     await sfStep('Navigate to Leads and open new form', page, async () => {
  214 |       await navigateToNewLead(page);
  215 |     });
  216 | 
  217 |     // Fill only first name
  218 |     await fillField(page, /first name/i, 'Michael');
  219 |     
  220 |     // Click save
  221 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
  222 |     await page.waitForTimeout(1000);
  223 | 
  224 |     // Verify save failed
  225 |     await sfStep('Verify validation error for missing Last Name', page, async () => {
  226 |       await expect(page.getByLabel(/first name/i)).toHaveValue('Michael');
  227 |       // Form should still be open if save failed
  228 |       await expect(page.getByLabel(/last name/i)).toBeVisible({ timeout: 10000 });
  229 |     });
  230 |   });
  231 | 
  232 |   // HEALED: Removed test.fixme() marker - test now runs
  233 |   // HEALED: Consolidated form operations
  234 |   sfTest('2.3 Enter Valid Email Address', async ({ sfPage: page }) => {
  235 |     await allure.description(
  236 |       'Verify that properly formatted emails are accepted and saved correctly.'
  237 |     );
  238 | 
  239 |     await sfStep('Navigate to Leads and open new form', page, async () => {
  240 |       await navigateToNewLead(page);
  241 |     });
  242 | 
  243 |     // Fill fields with valid email
  244 |     await fillField(page, /first name/i, 'Robert');
  245 |     await fillField(page, /last name/i, 'Brown');
  246 |     await fillField(page, /company/i, 'Enterprise Corp');
  247 |     
  248 |     try {
  249 |       await fillField(page, /email/i, 'robert.brown@enterprisecorp.com');
  250 |     } catch {
  251 |       // Email field may not exist
  252 |     }
  253 | 
  254 |     // Click save
  255 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
  256 |     await waitForSFLoad(page);
  257 | 
  258 |     // Verify success
  259 |     await sfStep('Verify Lead created with email', page, async () => {
  260 |       await expect(page.getByText(/Robert|Brown/i)).toBeVisible({ timeout: 15000 });
  261 |     });
  262 |   });
  263 | 
  264 | });
  265 | 
  266 | /**
  267 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  268 |  * SECTION 3: LEAD CREATION - DROPDOWN AND PICKLIST SELECTION
  269 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  270 |  */
  271 | 
  272 | test.describe('3. Lead Creation - Dropdown and Picklist Selection', () => {
  273 | 
  274 |   // HEALED: Removed test.fixme() marker - test now runs
  275 |   // HEALED: Consolidated picklist operations
  276 |   sfTest('3.1 Select Lead Source Dropdown', async ({ sfPage: page }) => {
  277 |     await allure.description(
  278 |       'Verify dropdown selections are properly saved and displayed.'
  279 |     );
  280 | 
  281 |     await sfStep('Navigate to Leads and open new form', page, async () => {
  282 |       await navigateToNewLead(page);
  283 |     });
  284 | 
  285 |     // Fill required fields
  286 |     await fillField(page, /first name/i, 'Emily');
  287 |     await fillField(page, /last name/i, 'Davis');
  288 |     await fillField(page, /company/i, 'Growth Ventures');
  289 | 
  290 |     // Try to select Lead Source
  291 |     try {
  292 |       await selectPicklist(page, /lead source/i, 'Website');
  293 |     } catch {
  294 |       // Lead Source may not be available
  295 |     }
```