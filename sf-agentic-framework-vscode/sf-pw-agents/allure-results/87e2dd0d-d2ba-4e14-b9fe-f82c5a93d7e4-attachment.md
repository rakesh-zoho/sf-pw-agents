# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 5. Lead Creation - Navigation and Form State >> 5.1 Save and Navigate to Lead Detail View
- Location: tests\lead-creation.spec.js:540:3

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
                - heading "Lead Mark Wilson" [level=1] [ref=e319]:
                  - generic [ref=e321]: Lead
                  - generic [ref=e322]: Mark Wilson
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
                    - generic [ref=e371]: Innovation Labs
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
                                  - /url: /lightning/r/Lead/00QdN00000DjR7qUAF/related/CampaignMembers/view
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
                                  - /url: /lightning/r/Lead/00QdN00000DjR7qUAF/related/sfLma__R00N30000001JvRAEA0__r/view
                                  - generic "Licenses" [ref=e605]
                                  - generic "(0)" [ref=e606]
      - generic:
        - contentinfo "Utility Bar":
          - list [ref=e610]:
            - listitem [ref=e611]:
              - button "To Do List" [ref=e614] [cursor=pointer]:
                - img [ref=e618]
                - generic [ref=e621]: To Do List
    - generic [ref=e622]:
      - generic: Salesforce Help
  - status [ref=e623]: Success notification.Lead "Mark Wilson" was created. Press Control + F6 to navigate to the next toast notification or focusable region.
```

# Test source

```ts
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
  501 | 
  502 |     try {
  503 |       await fillField(page, /email/i, 'francois@test.com');
  504 |     } catch {
  505 |       // Email may not exist
  506 |     }
  507 | 
  508 |     // Save
  509 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  510 |     await waitForSFLoad(page);
  511 | 
  512 |     // Verify
  513 |     const url = page.url();
  514 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  515 |     
  516 |     await expect(page.getByText('Société Générale & Partners')).toBeVisible({ timeout: 15000 });
  517 | 
  518 |     // HEALED: Capture success screenshot
  519 |     const successScreenshot = await page.screenshot({ fullPage: true });
  520 |     const screenshotPath = path.join(screenshotDir, '4.1-Special-Characters-PASSED.png');
  521 |     fs.writeFileSync(screenshotPath, successScreenshot);
  522 |     
  523 |     await testInfo.attach('success-screenshot', {
  524 |       body: successScreenshot,
  525 |       contentType: 'image/png',
  526 |       path: screenshotPath,
  527 |     });
  528 |   });
  529 | 
  530 | });
  531 | 
  532 | /**
  533 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  534 |  * SECTION 5: LEAD CREATION - NAVIGATION AND FORM STATE
  535 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  536 |  */
  537 | 
  538 | test.describe('5. Lead Creation - Navigation and Form State', () => {
  539 | 
  540 |   sfTest('5.1 Save and Navigate to Lead Detail View', async ({ sfPage: page }, testInfo) => {
  541 |     await allure.description(
  542 |       'Verify that after saving, user is navigated to the new Lead detail view.'
  543 |     );
  544 | 
  545 |     // Navigate
  546 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  547 |     await page.waitForTimeout(500);
  548 |     
  549 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  550 |     await page.waitForTimeout(500);
  551 |     
  552 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  553 |     await waitForSFLoad(page);
  554 |     
  555 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  556 |     await waitForSFLoad(page);
  557 | 
  558 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  559 | 
  560 |     // Fill and save
  561 |     await fillField(page, /first name/i, 'Mark');
  562 |     await fillField(page, /last name/i, 'Wilson');
  563 |     await fillField(page, /company/i, 'Innovation Labs');
  564 | 
  565 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  566 |     await waitForSFLoad(page);
  567 | 
  568 |     // Verify detail page
  569 |     const url = page.url();
  570 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  571 |     
> 572 |     await expect(page.getByText('Innovation Labs')).toBeVisible({ timeout: 15000 });
      |                                                     ^ Error: expect.toBeVisible: Target page, context or browser has been closed
  573 | 
  574 |     // HEALED: Capture success screenshot
  575 |     const successScreenshot = await page.screenshot({ fullPage: true });
  576 |     const screenshotPath = path.join(screenshotDir, '5.1-Detail-View-Navigation-PASSED.png');
  577 |     fs.writeFileSync(screenshotPath, successScreenshot);
  578 |     
  579 |     await testInfo.attach('success-screenshot', {
  580 |       body: successScreenshot,
  581 |       contentType: 'image/png',
  582 |       path: screenshotPath,
  583 |     });
  584 |   });
  585 | 
  586 |   sfTest('5.2 Cancel Lead Creation', async ({ sfPage: page }, testInfo) => {
  587 |     await allure.description(
  588 |       'Verify that canceling discards unsaved changes and returns to Leads list.'
  589 |     );
  590 | 
  591 |     // Navigate
  592 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  593 |     await page.waitForTimeout(500);
  594 |     
  595 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  596 |     await page.waitForTimeout(500);
  597 |     
  598 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  599 |     await waitForSFLoad(page);
  600 |     
  601 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  602 |     await waitForSFLoad(page);
  603 | 
  604 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  605 | 
  606 |     // Fill form
  607 |     await fillField(page, /first name/i, 'Rachel');
  608 |     await fillField(page, /last name/i, 'Lee');
  609 |     await fillField(page, /company/i, 'Progress Corp');
  610 | 
  611 |     // Click cancel
  612 |     const cancelBtn = page.getByRole('button', { name: /cancel/i });
  613 |     if (await cancelBtn.count() > 0) {
  614 |       await cancelBtn.click({ timeout: 5000 });
  615 |       await waitForSFLoad(page);
  616 | 
  617 |       // Verify back to list
  618 |       const url = page.url();
  619 |       // URL should not contain a Lead record ID
  620 |       expect(url).not.toMatch(/\/Lead\/[a-zA-Z0-9]{15,18}/);
  621 | 
  622 |       // HEALED: Capture success screenshot showing list view
  623 |       const successScreenshot = await page.screenshot({ fullPage: true });
  624 |       const screenshotPath = path.join(screenshotDir, '5.2-Cancel-Form-PASSED.png');
  625 |       fs.writeFileSync(screenshotPath, successScreenshot);
  626 |       
  627 |       await testInfo.attach('success-screenshot', {
  628 |         body: successScreenshot,
  629 |         contentType: 'image/png',
  630 |         path: screenshotPath,
  631 |       });
  632 |     } else {
  633 |       test.skip();
  634 |     }
  635 |   });
  636 | 
  637 | });
  638 | 
  639 | /**
  640 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  641 |  * SECTION 6: LEAD CREATION - ACCESSIBILITY
  642 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  643 |  */
  644 | 
  645 | test.describe('6. Lead Creation - Accessibility', () => {
  646 | 
  647 |   sfTest('6.1 Navigate Form Using Keyboard Only', async ({ sfPage: page }, testInfo) => {
  648 |     await allure.description(
  649 |       'Verify that the Lead creation form is fully keyboard accessible.'
  650 |     );
  651 | 
  652 |     // Navigate
  653 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  654 |     await page.waitForTimeout(500);
  655 |     
  656 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  657 |     await page.waitForTimeout(500);
  658 |     
  659 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  660 |     await waitForSFLoad(page);
  661 |     
  662 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  663 |     await waitForSFLoad(page);
  664 | 
  665 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  666 | 
  667 |     // Use keyboard to fill
  668 |     await page.keyboard.press('Tab');
  669 |     await page.keyboard.type('KeyboardTest');
  670 |     await page.keyboard.press('Tab');
  671 |     await page.keyboard.type('User');
  672 |     await page.keyboard.press('Tab');
```