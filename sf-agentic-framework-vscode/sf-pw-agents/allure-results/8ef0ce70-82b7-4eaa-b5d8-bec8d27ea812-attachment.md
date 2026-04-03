# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 2. Lead Creation - Field Validation >> 2.1 Attempt to Save Lead Without Required Fields
- Location: tests\lead-creation.spec.js:268:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect.toHaveValue: Target page, context or browser has been closed
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
                                - combobox "Lead Status" [active] [ref=e617] [cursor=pointer]:
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
                              - status [ref=e758]
                              - generic [ref=e760]:
                                - generic [ref=e761]: Street
                                - textbox "Street" [ref=e763]
                                - status
                              - generic [ref=e767]:
                                - generic [ref=e768]: City
                                - textbox "City" [ref=e770]
                              - generic [ref=e771]:
                                - generic [ref=e774]:
                                  - generic [ref=e775]: Zip/Postal Code
                                  - textbox "Zip/Postal Code" [ref=e777]
                                - generic [ref=e780]:
                                  - generic [ref=e781]: State/Province
                                  - textbox "State/Province" [ref=e783]
                              - generic [ref=e787]:
                                - generic [ref=e788]: Country
                                - textbox "Country" [ref=e790]
                        - listitem [ref=e792]:
                          - generic [ref=e797]:
                            - generic [ref=e798]: Website
                            - textbox "Website" [ref=e800]
                  - generic [ref=e802]:
                    - heading "Additional Information" [level=3] [ref=e803]:
                      - generic [ref=e804]: Additional Information
                    - list [ref=e806]:
                      - generic [ref=e807]:
                        - generic [ref=e809]:
                          - listitem [ref=e811]:
                            - generic [ref=e816]:
                              - generic [ref=e817]: No. of Employees
                              - spinbutton "No. of Employees" [ref=e819]
                          - listitem [ref=e821]:
                            - generic [ref=e828]:
                              - generic [ref=e830]: Lead Source
                              - generic [ref=e834]:
                                - combobox "Lead Source" [ref=e835] [cursor=pointer]:
                                  - generic [ref=e836]: "--None--"
                                - img [ref=e840]
                              - status
                        - generic [ref=e844]:
                          - listitem [ref=e846]:
                            - generic [ref=e852]:
                              - generic [ref=e853]: Annual Revenue
                              - spinbutton "Annual Revenue" [ref=e855]
                          - listitem [ref=e857]:
                            - generic [ref=e864]:
                              - generic [ref=e866]: Industry
                              - generic [ref=e870]:
                                - combobox "Industry" [ref=e871] [cursor=pointer]:
                                  - generic [ref=e872]: "--None--"
                                - img [ref=e876]
                              - status
                  - generic [ref=e880]:
                    - heading "Description Information" [level=3] [ref=e881]:
                      - generic [ref=e882]: Description Information
                    - list [ref=e884]:
                      - listitem [ref=e889]:
                        - generic [ref=e893]:
                          - generic [ref=e894]: Description
                          - textbox "Description" [ref=e896]
                          - status
                - generic [ref=e901]:
                  - generic "Cancel" [ref=e902]:
                    - button "Cancel" [ref=e907] [cursor=pointer]
                  - generic "Save & New" [ref=e908]:
                    - button "Save & New" [ref=e913] [cursor=pointer]
                  - generic "Save" [ref=e914]:
                    - button "Save" [ref=e919] [cursor=pointer]
          - status [ref=e920]
  - generic:
    - status
```

# Test source

```ts
  191 |       await expect(page.getByLabel(/postal code|zip/i)).toHaveValue('94105');
  192 |     });
  193 | 
  194 |     await sfStep('Enter Country: United States', page, async () => {
  195 |       await fillField(page, /country/i, 'United States');
  196 |       await expect(page.getByLabel(/country/i)).toHaveValue('United States');
  197 |     });
  198 | 
  199 |     await sfStep('Select Lead Source: Website', page, async () => {
  200 |       try {
  201 |         await selectPicklist(page, /lead source/i, 'Website');
  202 |       } catch {
  203 |         // Fallback: manually click and select
  204 |         await page.getByLabel(/lead source/i).click();
  205 |         await page.getByRole('option', { name: /website/i }).click();
  206 |       }
  207 |       await expect(page.getByLabel(/lead source/i)).toContainText('Website');
  208 |     });
  209 | 
  210 |     // Scroll to reveal additional fields
  211 |     await sfStep('Scroll to view additional fields', page, async () => {
  212 |       await page.locator('form').evaluate(el => el.scrollTop = el.scrollHeight);
  213 |       await page.waitForTimeout(300);
  214 |     });
  215 | 
  216 |     await sfStep('Select Lead Status: Qualified', page, async () => {
  217 |       try {
  218 |         await selectPicklist(page, /lead status/i, 'Qualified');
  219 |       } catch {
  220 |         await page.getByLabel(/lead status/i).click();
  221 |         await page.getByRole('option', { name: /qualified/i }).click();
  222 |       }
  223 |     });
  224 | 
  225 |     await sfStep('Select Rating: Warm', page, async () => {
  226 |       try {
  227 |         await selectPicklist(page, /rating/i, 'Warm');
  228 |       } catch {
  229 |         await page.getByLabel(/rating/i).click();
  230 |         await page.getByRole('option', { name: /warm/i }).click();
  231 |       }
  232 |     });
  233 | 
  234 |     await sfStep('Enter Description: High priority prospect for Q2', page, async () => {
  235 |       await fillField(page, /description/i, 'High priority prospect for Q2');
  236 |       await expect(page.getByLabel(/description/i)).toContainText('High priority prospect for Q2');
  237 |     });
  238 | 
  239 |     await sfStep('Click Save button', page, async () => {
  240 |       await page.getByRole('button', { name: /save/i }).click();
  241 |       await waitForSFLoad(page);
  242 |     });
  243 | 
  244 |     await sfStep('Verify all fields saved correctly', page, async () => {
  245 |       await expect(page.getByText('Jane Smith')).toBeVisible({ timeout: 15000 });
  246 |       await expect(page.getByText('Tech Innovations Inc')).toBeVisible();
  247 |       await expect(page.getByText('Manager')).toBeVisible();
  248 |       await expect(page.getByText('jane.smith@techinnovations.com')).toBeVisible();
  249 |     });
  250 | 
  251 |     await sfStep('Verify success toast displayed', page, async () => {
  252 |       const successToast = page.locator('.slds-notify').filter({ hasText: /success|created/i });
  253 |       await expect(successToast).toBeVisible({ timeout: 5000 });
  254 |     });
  255 |   });
  256 | 
  257 | });
  258 | 
  259 | /**
  260 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  261 |  * SECTION 2: LEAD CREATION - FIELD VALIDATION
  262 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  263 |  */
  264 | 
  265 | test.describe('2. Lead Creation - Field Validation', () => {
  266 | 
  267 |   // HEALED: Changed test() to sfTest() to use sfPage fixture
  268 |   sfTest('2.1 Attempt to Save Lead Without Required Fields', async ({ sfPage: page }) => {
  269 |     await allure.description(
  270 |       'Verify that the system prevents saving a Lead when required fields are empty and displays error messages.'
  271 |     );
  272 | 
  273 |     await sfStep('Navigate to Leads module', page, async () => {
  274 |       await page.getByRole('button', { name: /app launcher/i }).click();
  275 |       await waitForSFLoad(page);
  276 |     });
  277 | 
  278 |     await sfStep('Search and select Leads', page, async () => {
  279 |       await page.getByPlaceholder(/search apps/i).fill('Leads');
  280 |       await page.waitForTimeout(500);
  281 |       await page.getByRole('option', { name: /leads/i }).first().click();
  282 |       await waitForSFLoad(page);
  283 |     });
  284 | 
  285 |     await sfStep('Click New button', page, async () => {
  286 |       await page.getByRole('button', { name: /new/i }).click();
  287 |       await waitForSFLoad(page);
  288 |     });
  289 | 
  290 |     await sfStep('Verify form is empty', page, async () => {
> 291 |       await expect(page.getByLabel(/first name/i)).toHaveValue('');
      |                                                    ^ Error: expect.toHaveValue: Target page, context or browser has been closed
  292 |       await expect(page.getByLabel(/last name/i)).toHaveValue('');
  293 |       await expect(page.getByLabel(/company/i)).toHaveValue('');
  294 |     });
  295 | 
  296 |     await sfStep('Click Save without filling any fields', page, async () => {
  297 |       await page.getByRole('button', { name: /save/i }).click();
  298 |       await page.waitForTimeout(1000);
  299 |     });
  300 | 
  301 |     await sfStep('Verify error messages appear', page, async () => {
  302 |       const errorElements = page.locator('.slds-form-element__help, [role="alert"]');
  303 |       await expect(errorElements).toHaveCount(await errorElements.count() > 0 ? await errorElements.count() : 3);
  304 |     });
  305 | 
  306 |     await sfStep('Verify form fields are highlighted with error state', page, async () => {
  307 |       const errorFields = page.locator('.slds-has-error');
  308 |       await expect(errorFields).toHaveCount(await errorFields.count() > 0 ? await errorFields.count() : 1);
  309 |     });
  310 | 
  311 |     await sfStep('Verify user remains on the creation form', page, async () => {
  312 |       await expect(page.getByRole('heading', { name: /new lead/i })).toBeVisible();
  313 |     });
  314 |   });
  315 | 
  316 |   // HEALED: Changed test() to sfTest() to use sfPage fixture
  317 |   sfTest('2.2 Enter Only First Name and Attempt Save', async ({ sfPage: page }) => {
  318 |     await allure.description(
  319 |       'Verify validation catches missing Last Name when only First Name is provided.'
  320 |     );
  321 | 
  322 |     await sfStep('Navigate to Leads and open new Lead form', page, async () => {
  323 |       await page.getByRole('button', { name: /app launcher/i }).click();
  324 |       await waitForSFLoad(page);
  325 |       await page.getByPlaceholder(/search apps/i).fill('Leads');
  326 |       await page.waitForTimeout(500);
  327 |       await page.getByRole('option', { name: /leads/i }).first().click();
  328 |       await waitForSFLoad(page);
  329 |       await page.getByRole('button', { name: /new/i }).click();
  330 |       await waitForSFLoad(page);
  331 |     });
  332 | 
  333 |     await sfStep('Enter First Name: Michael', page, async () => {
  334 |       await fillField(page, /first name/i, 'Michael');
  335 |       await expect(page.getByLabel(/first name/i)).toHaveValue('Michael');
  336 |     });
  337 | 
  338 |     await sfStep('Verify Last Name is empty', page, async () => {
  339 |       await expect(page.getByLabel(/last name/i)).toHaveValue('');
  340 |     });
  341 | 
  342 |     await sfStep('Click Save', page, async () => {
  343 |       await page.getByRole('button', { name: /save/i }).click();
  344 |       await page.waitForTimeout(1000);
  345 |     });
  346 | 
  347 |     await sfStep('Verify Last Name error is displayed', page, async () => {
  348 |       const lastNameField = page.getByLabel(/last name/i);
  349 |       const errorContainer = lastNameField.locator('xpath=ancestor::div[@class[contains(., "slds-has-error")]]');
  350 |       await expect(errorContainer).toBeVisible().catch(() => {
  351 |         // Fallback: check for error message near field
  352 |         return expect(page.locator('[role="alert"]')).toContainText(/last name|required/i);
  353 |       });
  354 |     });
  355 | 
  356 |     await sfStep('Verify First Name is retained', page, async () => {
  357 |       await expect(page.getByLabel(/first name/i)).toHaveValue('Michael');
  358 |     });
  359 |   });
  360 | 
  361 |   // HEALED: Changed test() to sfTest() to use sfPage fixture
  362 |   sfTest('2.4 Enter Invalid Email Format', async ({ sfPage: page }) => {
  363 |     await allure.description(
  364 |       'Verify email field validation prevents invalid email formats.'
  365 |     );
  366 | 
  367 |     await sfStep('Navigate to Leads and open new Lead form', page, async () => {
  368 |       await page.getByRole('button', { name: /app launcher/i }).click();
  369 |       await waitForSFLoad(page);
  370 |       await page.getByPlaceholder(/search apps/i).fill('Leads');
  371 |       await page.waitForTimeout(500);
  372 |       await page.getByRole('option', { name: /leads/i }).first().click();
  373 |       await waitForSFLoad(page);
  374 |       await page.getByRole('button', { name: /new/i }).click();
  375 |       await waitForSFLoad(page);
  376 |     });
  377 | 
  378 |     await sfStep('Fill required fields with valid data', page, async () => {
  379 |       await fillField(page, /first name/i, 'Sarah');
  380 |       await fillField(page, /last name/i, 'Williams');
  381 |       await fillField(page, /company/i, 'Digital Solutions');
  382 |     });
  383 | 
  384 |     await sfStep('Enter invalid email format: invalid-email-format', page, async () => {
  385 |       await fillField(page, /email/i, 'invalid-email-format');
  386 |       await expect(page.getByLabel(/email/i)).toHaveValue('invalid-email-format');
  387 |     });
  388 | 
  389 |     await sfStep('Click Save', page, async () => {
  390 |       await page.getByRole('button', { name: /save/i }).click();
  391 |       await page.waitForTimeout(1000);
```