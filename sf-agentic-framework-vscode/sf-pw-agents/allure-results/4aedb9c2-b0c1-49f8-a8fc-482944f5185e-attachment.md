# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 2. Lead Creation - Field Validation >> 2.2 Enter Only First Name and Attempt Save
- Location: tests\lead-creation.spec.js:208:3

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
                                  - textbox "First Name" [active] [ref=e668]: Michael
                                - generic [ref=e672]:
                                  - generic [ref=e673]: "*Last Name"
                                  - textbox "Last Name" [ref=e675]
                          - listitem [ref=e677]:
                            - generic [ref=e682]:
                              - generic [ref=e683]: Phone
                              - textbox "Phone" [ref=e685]
                        - generic [ref=e687]:
                          - listitem [ref=e689]:
                            - generic [ref=e695]:
                              - generic [ref=e696]: "*Company"
                              - textbox "Company" [ref=e698]
                          - listitem [ref=e700]:
                            - generic [ref=e705]:
                              - generic [ref=e706]: Email
                              - textbox "Email" [ref=e708]
                        - generic [ref=e710]:
                          - listitem [ref=e712]:
                            - generic [ref=e718]:
                              - generic [ref=e719]: Title
                              - textbox "Title" [ref=e721]
                          - listitem [ref=e723]:
                            - generic [ref=e730]:
                              - generic [ref=e732]: Rating
                              - generic [ref=e736]:
                                - combobox "Rating" [ref=e737] [cursor=pointer]:
                                  - generic [ref=e738]: "--None--"
                                - img [ref=e742]
                              - status
                  - generic [ref=e746]:
                    - heading "Address Information" [level=3] [ref=e747]:
                      - generic [ref=e748]: Address Information
                    - list [ref=e750]:
                      - generic [ref=e753]:
                        - listitem [ref=e755]:
                          - group "Address" [ref=e760]:
                            - generic [ref=e761]: Address
                            - generic [ref=e763]:
                              - generic [ref=e765]:
                                - generic [ref=e766]: Address Search
                                - generic [ref=e770]:
                                  - combobox "Address Search" [ref=e773]
                                  - img [ref=e777]
                              - status [ref=e780]
                              - generic [ref=e782]:
                                - generic [ref=e783]: Street
                                - textbox "Street" [ref=e785]
                                - status
                              - generic [ref=e789]:
                                - generic [ref=e790]: City
                                - textbox "City" [ref=e792]
                              - generic [ref=e793]:
                                - generic [ref=e796]:
                                  - generic [ref=e797]: Zip/Postal Code
                                  - textbox "Zip/Postal Code" [ref=e799]
                                - generic [ref=e802]:
                                  - generic [ref=e803]: State/Province
                                  - textbox "State/Province" [ref=e805]
                              - generic [ref=e809]:
                                - generic [ref=e810]: Country
                                - textbox "Country" [ref=e812]
                        - listitem [ref=e814]:
                          - generic [ref=e819]:
                            - generic [ref=e820]: Website
                            - textbox "Website" [ref=e822]
                  - generic [ref=e824]:
                    - heading "Additional Information" [level=3] [ref=e825]:
                      - generic [ref=e826]: Additional Information
                    - list [ref=e828]:
                      - generic [ref=e829]:
                        - generic [ref=e831]:
                          - listitem [ref=e833]:
                            - generic [ref=e838]:
                              - generic [ref=e839]: No. of Employees
                              - spinbutton "No. of Employees" [ref=e841]
                          - listitem [ref=e843]:
                            - generic [ref=e850]:
                              - generic [ref=e852]: Lead Source
                              - generic [ref=e856]:
                                - combobox "Lead Source" [ref=e857] [cursor=pointer]:
                                  - generic [ref=e858]: "--None--"
                                - img [ref=e862]
                              - status
                        - generic [ref=e866]:
                          - listitem [ref=e868]:
                            - generic [ref=e874]:
                              - generic [ref=e875]: Annual Revenue
                              - spinbutton "Annual Revenue" [ref=e877]
                          - listitem [ref=e879]:
                            - generic [ref=e886]:
                              - generic [ref=e888]: Industry
                              - generic [ref=e892]:
                                - combobox "Industry" [ref=e893] [cursor=pointer]:
                                  - generic [ref=e894]: "--None--"
                                - img [ref=e898]
                              - status
                  - generic [ref=e902]:
                    - heading "Description Information" [level=3] [ref=e903]:
                      - generic [ref=e904]: Description Information
                    - list [ref=e906]:
                      - listitem [ref=e911]:
                        - generic [ref=e915]:
                          - generic [ref=e916]: Description
                          - textbox "Description" [ref=e918]
                          - status
                - generic [ref=e923]:
                  - generic "Cancel" [ref=e924]:
                    - button "Cancel" [ref=e929] [cursor=pointer]
                  - generic "Save & New" [ref=e930]:
                    - button "Save & New" [ref=e935] [cursor=pointer]
                  - generic "Save" [ref=e936]:
                    - button "Save" [ref=e941] [cursor=pointer]
          - status [ref=e942]
  - generic:
    - status
```

# Test source

```ts
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
> 221 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
      |                                                       ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: /save/i }) resolved to 2 elements:
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
  296 | 
  297 |     // Click save
  298 |     await page.getByRole('button', { name: /save/i }).click({ timeout: 5000 });
  299 |     await waitForSFLoad(page);
  300 | 
  301 |     // Verify success
  302 |     await sfStep('Verify Lead created', page, async () => {
  303 |       await expect(page.getByText(/Emily|Davis/i)).toBeVisible({ timeout: 15000 });
  304 |     });
  305 |   });
  306 | 
  307 |   // HEALED: Removed test.fixme() marker - test now runs
  308 |   // HEALED: Consolidated operations
  309 |   sfTest('3.2 Select Rating Picklist', async ({ sfPage: page }) => {
  310 |     await allure.description(
  311 |       'Verify Rating picklist selection is saved correctly.'
  312 |     );
  313 | 
  314 |     await sfStep('Navigate to Leads and open new form', page, async () => {
  315 |       await navigateToNewLead(page);
  316 |     });
  317 | 
  318 |     // Fill required fields
  319 |     await fillField(page, /first name/i, 'David');
  320 |     await fillField(page, /last name/i, 'Miller');
  321 |     await fillField(page, /company/i, 'Premier Industries');
```