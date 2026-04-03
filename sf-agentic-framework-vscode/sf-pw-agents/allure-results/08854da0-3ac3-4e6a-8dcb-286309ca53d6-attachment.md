# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 3. Lead Creation - Dropdown and Picklist Selection >> 3.1 Select Lead Source Dropdown
- Location: tests\lead-creation.spec.js:361:3

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
              - heading "Lead Emily Davis" [level=1] [ref=e319]:
                - generic [ref=e321]: Lead
                - generic [ref=e322]: Emily Davis
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
                  - generic [ref=e371]: Growth Ventures
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
                                - /url: /lightning/r/Lead/00QdN00000DjOwOUAV/related/CampaignMembers/view
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
                                - /url: /lightning/r/Lead/00QdN00000DjOwOUAV/related/sfLma__R00N30000001JvRAEA0__r/view
                                - generic "Licenses" [ref=e605]
                                - generic "(0)" [ref=e606]
    - generic:
      - contentinfo "Utility Bar":
        - list [ref=e610]:
          - listitem [ref=e611]:
            - button "To Do List" [ref=e614] [cursor=pointer]:
              - img [ref=e618]
              - generic [ref=e621]: To Do List
  - status [ref=e623]: Success notification.Lead "Emily Davis" was created. Press Control + F6 to navigate to the next toast notification or focusable region.
```

# Test source

```ts
  300 |       'Verify that properly formatted emails are accepted and saved correctly.'
  301 |     );
  302 | 
  303 |     // Navigate
  304 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  305 |     await page.waitForTimeout(500);
  306 |     
  307 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  308 |     await page.waitForTimeout(500);
  309 |     
  310 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  311 |     await waitForSFLoad(page);
  312 |     
  313 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  314 |     await waitForSFLoad(page);
  315 | 
  316 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  317 | 
  318 |     // Fill fields with email
  319 |     await fillField(page, /first name/i, 'Robert');
  320 |     await fillField(page, /last name/i, 'Brown');
  321 |     await fillField(page, /company/i, 'Enterprise Corp');
  322 |     
  323 |     try {
  324 |       await fillField(page, /email/i, 'robert.brown@enterprisecorp.com');
  325 |     } catch {
  326 |       // Email may not exist
  327 |     }
  328 | 
  329 |     // Save
  330 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  331 |     await waitForSFLoad(page);
  332 | 
  333 |     // Verify success
  334 |     const url = page.url();
  335 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  336 |     
  337 |     await expect(page.getByText('Enterprise Corp')).toBeVisible({ timeout: 15000 });
  338 | 
  339 |     // HEALED: Capture success screenshot with email
  340 |     const successScreenshot = await page.screenshot({ fullPage: true });
  341 |     const screenshotPath = path.join(screenshotDir, '2.3-Valid-Email-PASSED.png');
  342 |     fs.writeFileSync(screenshotPath, successScreenshot);
  343 |     
  344 |     await testInfo.attach('success-screenshot', {
  345 |       body: successScreenshot,
  346 |       contentType: 'image/png',
  347 |       path: screenshotPath,
  348 |     });
  349 |   });
  350 | 
  351 | });
  352 | 
  353 | /**
  354 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  355 |  * SECTION 3: LEAD CREATION - DROPDOWN AND PICKLIST SELECTION
  356 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  357 |  */
  358 | 
  359 | test.describe('3. Lead Creation - Dropdown and Picklist Selection', () => {
  360 | 
  361 |   sfTest('3.1 Select Lead Source Dropdown', async ({ sfPage: page }, testInfo) => {
  362 |     await allure.description(
  363 |       'Verify dropdown selections are properly saved and displayed.'
  364 |     );
  365 | 
  366 |     // Navigate
  367 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  368 |     await page.waitForTimeout(500);
  369 |     
  370 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  371 |     await page.waitForTimeout(500);
  372 |     
  373 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  374 |     await waitForSFLoad(page);
  375 |     
  376 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  377 |     await waitForSFLoad(page);
  378 | 
  379 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  380 | 
  381 |     // Fill form
  382 |     await fillField(page, /first name/i, 'Emily');
  383 |     await fillField(page, /last name/i, 'Davis');
  384 |     await fillField(page, /company/i, 'Growth Ventures');
  385 | 
  386 |     try {
  387 |       await selectPicklist(page, /lead source/i, 'Website');
  388 |     } catch {
  389 |       // May not be available
  390 |     }
  391 | 
  392 |     // Save
  393 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  394 |     await waitForSFLoad(page);
  395 | 
  396 |     // Verify
  397 |     const url = page.url();
  398 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  399 |     
> 400 |     await expect(page.getByText('Growth Ventures')).toBeVisible({ timeout: 15000 });
      |                                                     ^ Error: expect.toBeVisible: Target page, context or browser has been closed
  401 | 
  402 |     // HEALED: Capture success screenshot
  403 |     const successScreenshot = await page.screenshot({ fullPage: true });
  404 |     const screenshotPath = path.join(screenshotDir, '3.1-Lead-Source-Dropdown-PASSED.png');
  405 |     fs.writeFileSync(screenshotPath, successScreenshot);
  406 |     
  407 |     await testInfo.attach('success-screenshot', {
  408 |       body: successScreenshot,
  409 |       contentType: 'image/png',
  410 |       path: screenshotPath,
  411 |     });
  412 |   });
  413 | 
  414 |   sfTest('3.2 Select Rating Picklist', async ({ sfPage: page }, testInfo) => {
  415 |     await allure.description(
  416 |       'Verify Rating picklist selection is saved correctly.'
  417 |     );
  418 | 
  419 |     // Navigate
  420 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  421 |     await page.waitForTimeout(500);
  422 |     
  423 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  424 |     await page.waitForTimeout(500);
  425 |     
  426 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  427 |     await waitForSFLoad(page);
  428 |     
  429 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  430 |     await waitForSFLoad(page);
  431 | 
  432 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  433 | 
  434 |     // Fill form
  435 |     await fillField(page, /first name/i, 'David');
  436 |     await fillField(page, /last name/i, 'Miller');
  437 |     await fillField(page, /company/i, 'Premier Industries');
  438 | 
  439 |     try {
  440 |       await selectPicklist(page, /rating/i, 'Warm');
  441 |     } catch {
  442 |       // May not be available
  443 |     }
  444 | 
  445 |     // Save
  446 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  447 |     await waitForSFLoad(page);
  448 | 
  449 |     // Verify
  450 |     const url = page.url();
  451 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  452 |     
  453 |     await expect(page.getByText('Premier Industries')).toBeVisible({ timeout: 15000 });
  454 | 
  455 |     // HEALED: Capture success screenshot
  456 |     const successScreenshot = await page.screenshot({ fullPage: true });
  457 |     const screenshotPath = path.join(screenshotDir, '3.2-Rating-Picklist-PASSED.png');
  458 |     fs.writeFileSync(screenshotPath, successScreenshot);
  459 |     
  460 |     await testInfo.attach('success-screenshot', {
  461 |       body: successScreenshot,
  462 |       contentType: 'image/png',
  463 |       path: screenshotPath,
  464 |     });
  465 |   });
  466 | 
  467 | });
  468 | 
  469 | /**
  470 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  471 |  * SECTION 4: LEAD CREATION - TEXT FIELD HANDLING
  472 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  473 |  */
  474 | 
  475 | test.describe('4. Lead Creation - Text Field Handling', () => {
  476 | 
  477 |   sfTest('4.1 Enter Text with Special Characters', async ({ sfPage: page }, testInfo) => {
  478 |     await allure.description(
  479 |       'Verify that special characters are properly handled in text fields.'
  480 |     );
  481 | 
  482 |     // Navigate
  483 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  484 |     await page.waitForTimeout(500);
  485 |     
  486 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  487 |     await page.waitForTimeout(500);
  488 |     
  489 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  490 |     await waitForSFLoad(page);
  491 |     
  492 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  493 |     await waitForSFLoad(page);
  494 | 
  495 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  496 | 
  497 |     // Fill with special characters
  498 |     await fillField(page, /first name/i, 'François');
  499 |     await fillField(page, /last name/i, 'O\'Sullivan');
  500 |     await fillField(page, /company/i, 'Société Générale & Partners');
```