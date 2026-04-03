# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 6. Lead Creation - Accessibility >> 6.2 Verify Field Labels and Help Text
- Location: tests\lead-creation.spec.js:701:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel(/company/i)
Expected: visible
Error: strict mode violation: getByLabel(/company/i) resolved to 3 elements:
    1) <th scope="col" tabindex="-1" aria-sort="other" lwc-392cvb27u8q="" role="columnheader" aria-label="Company" data-col-key-value="Company-lstFormattedText-5">…</th> aka getByLabel('Company', { exact: true })
    2) <input min="140" max="3840" type="range" tabindex="-1" lwc-7kg80i98oc7="" aria-valuemin="140" aria-valuenow="180" aria-valuemax="3840" aria-label="Company column width" class="slds-resizable__input slds-assistive-text"/> aka getByLabel('Company column width')
    3) <input required="" type="text" part="input" id="input-869" name="Company" maxlength="255" lwc-enmikoh2qu="" class="slds-input" aria-describedby="help-message-869"/> aka getByRole('textbox', { name: 'Company' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByLabel(/company/i)

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
                    - paragraph [ref=e429]: "26"
                - generic [ref=e430]:
                  - button [ref=e431] [cursor=pointer]:
                    - generic [ref=e432]:
                      - paragraph [ref=e434]: No Activity
                      - paragraph [ref=e436]: "26"
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
                  - status [ref=e513]: 25 items • Filtered by Created Date, Me, Total Leads
                  - group [ref=e516]:
                    - generic [ref=e518]:
                      - button [ref=e520] [cursor=pointer]: Change Status
                      - button [ref=e522] [cursor=pointer]: Change Owner
                      - button [ref=e524] [cursor=pointer]: Send Email
                      - button [ref=e526] [cursor=pointer]: Assign Label
                - generic [ref=e537]:
                  - generic [ref=e538]: Navigation Mode
                  - grid [ref=e542]:
                    - generic [ref=e546]:
                      - generic [ref=e547]: Choose a Row
                      - generic [ref=e549]:
                        - checkbox [ref=e550]
                        - generic [ref=e553]: Select 25 items
                    - generic [ref=e555]:
                      - button [ref=e556] [cursor=pointer]:
                        - generic [ref=e557]: "Sort by:"
                        - generic [ref=e558]: Name
                      - generic [ref=e559]: "Sorted: None"
                      - button [ref=e561] [cursor=pointer]:
                        - img [ref=e563]
                        - generic [ref=e566]: Show Name column actions
                      - slider [ref=e567]: "170"
                    - generic [ref=e575]:
                      - img [ref=e577]
                      - generic [ref=e580]: Important
                    - generic [ref=e582]:
                      - button [ref=e583] [cursor=pointer]:
                        - generic [ref=e584]: "Sort by:"
                        - generic [ref=e585]: Title
                      - generic [ref=e586]: "Sorted: None"
                      - button [ref=e588] [cursor=pointer]:
                        - img [ref=e590]
                        - generic [ref=e593]: Show Title column actions
                      - slider [ref=e594]: "140"
                    - generic [ref=e598]:
                      - button [ref=e599] [cursor=pointer]:
                        - generic [ref=e600]: "Sort by:"
                        - generic [ref=e601]: Company
                      - generic [ref=e602]: "Sorted: None"
                      - button [ref=e604] [cursor=pointer]:
                        - img [ref=e606]
                        - generic [ref=e609]: Show Company column actions
                      - slider [ref=e610]: "180"
                    - generic [ref=e614]:
                      - button [ref=e615] [cursor=pointer]:
                        - generic [ref=e616]: "Sort by:"
                        - generic [ref=e617]: Lead Status
                      - generic [ref=e618]: "Sorted: None"
                      - button [ref=e620] [cursor=pointer]:
                        - img [ref=e622]
                        - generic [ref=e625]: Show Lead Status column actions
                      - slider [ref=e626]: "166"
                    - generic [ref=e630]:
                      - button [ref=e631] [cursor=pointer]:
                        - generic [ref=e632]: "Sort by:"
                        - generic [ref=e633]: Lead Source
                      - generic [ref=e634]: "Sorted: None"
                      - button [ref=e636] [cursor=pointer]:
                        - img [ref=e638]
                        - generic [ref=e641]: Show Lead Source column actions
                      - slider [ref=e642]: "140"
                    - generic [ref=e646]:
                      - button [ref=e647] [cursor=pointer]:
                        - generic [ref=e648]: "Sort by:"
                        - generic [ref=e649]: Last Activity
                      - generic [ref=e650]: "Sorted: None"
                      - button [ref=e652] [cursor=pointer]:
                        - img [ref=e654]
                        - generic [ref=e657]: Show Last Activity column actions
                      - slider [ref=e658]: "140"
                    - generic [ref=e664]: Actions
                    - rowgroup [ref=e668]:
                      - row [ref=e669]:
                        - gridcell [ref=e670]
                        - gridcell [ref=e675]:
                          - generic [ref=e677]:
                            - checkbox [ref=e678]
                            - generic [ref=e681]: Select Item 1
                        - rowheader [ref=e682]:
                          - generic [ref=e684]:
                            - generic [ref=e688]:
                              - link [ref=e691] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjG64UAF/view
                                - generic [ref=e692]: David Miller
                              - button [ref=e694] [cursor=pointer]:
                                - img [ref=e696]
                                - generic [ref=e699]: "View Activity: David Miller"
                            - img [ref=e700]:
                              - img [ref=e702]
                        - gridcell [ref=e705]:
                          - button [ref=e714] [cursor=pointer]:
                            - img [ref=e716]
                            - generic [ref=e719]: "Mark Important: David Miller"
                        - gridcell [ref=e720]:
                          - button [ref=e723] [cursor=pointer]:
                            - img [ref=e725]
                            - generic [ref=e728]: Edit Title
                        - gridcell [ref=e729]:
                          - generic [ref=e731]:
                            - generic [ref=e734]: Premier Industries
                            - button [ref=e735] [cursor=pointer]:
                              - img [ref=e737]
                              - generic [ref=e740]: Edit Company
                        - gridcell [ref=e741]:
                          - generic [ref=e743]:
                            - generic [ref=e746]: Open
                            - button [ref=e747] [cursor=pointer]:
                              - img [ref=e749]
                              - generic [ref=e752]: Edit Lead Status
                        - gridcell [ref=e753]:
                          - button [ref=e756] [cursor=pointer]:
                            - img [ref=e758]
                            - generic [ref=e761]: Edit Lead Source
                        - gridcell [ref=e762]:
                          - img [ref=e765]:
                            - img [ref=e767]
                        - gridcell [ref=e770]:
                          - group [ref=e777]:
                            - generic [ref=e779]:
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e780]:
                          - button [ref=e787] [cursor=pointer]:
                            - img [ref=e789]
                            - generic [ref=e792]: Show Actions
                      - row [ref=e793]:
                        - gridcell [ref=e794]
                        - gridcell [ref=e799]:
                          - generic [ref=e801]:
                            - checkbox [ref=e802]
                            - generic [ref=e805]: Select Item 2
                        - rowheader [ref=e806]:
                          - generic [ref=e808]:
                            - generic [ref=e812]:
                              - link [ref=e815] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjHDKUA3/view
                                - generic [ref=e816]: Jane Smith
                              - button [ref=e818] [cursor=pointer]:
                                - img [ref=e820]
                                - generic [ref=e823]: "View Activity: Jane Smith"
                            - img [ref=e824]:
                              - img [ref=e826]
                        - gridcell [ref=e829]:
                          - button [ref=e838] [cursor=pointer]:
                            - img [ref=e840]
                            - generic [ref=e843]: "Mark Important: Jane Smith"
                        - gridcell [ref=e844]:
                          - generic [ref=e846]:
                            - generic [ref=e849]: Manager
                            - button [ref=e850] [cursor=pointer]:
                              - img [ref=e852]
                              - generic [ref=e855]: Edit Title
                        - gridcell [ref=e856]:
                          - generic [ref=e858]:
                            - generic [ref=e861]: Tech Innovations Inc
                            - button [ref=e862] [cursor=pointer]:
                              - img [ref=e864]
                              - generic [ref=e867]: Edit Company
                        - gridcell [ref=e868]:
                          - generic [ref=e870]:
                            - generic [ref=e873]: Open
                            - button [ref=e874] [cursor=pointer]:
                              - img [ref=e876]
                              - generic [ref=e879]: Edit Lead Status
                        - gridcell [ref=e880]:
                          - button [ref=e883] [cursor=pointer]:
                            - img [ref=e885]
                            - generic [ref=e888]: Edit Lead Source
                        - gridcell [ref=e889]:
                          - img [ref=e892]:
                            - img [ref=e894]
                        - gridcell [ref=e897]:
                          - group [ref=e904]:
                            - generic [ref=e906]:
                              - button [ref=e908] [cursor=pointer]:
                                - img [ref=e910]
                                - generic [ref=e913]: Email
                              - button [ref=e915] [cursor=pointer]:
                                - img [ref=e917]
                                - generic [ref=e920]: Call
                        - gridcell [ref=e921]:
                          - button [ref=e928] [cursor=pointer]:
                            - img [ref=e930]
                            - generic [ref=e933]: Show Actions
                      - row [ref=e934]:
                        - gridcell [ref=e935]
                        - gridcell [ref=e940]:
                          - generic [ref=e942]:
                            - checkbox [ref=e943]
                            - generic [ref=e946]: Select Item 3
                        - rowheader [ref=e947]:
                          - generic [ref=e949]:
                            - generic [ref=e953]:
                              - link [ref=e956] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjIEEUA3/view
                                - generic [ref=e957]: John Doe
                              - button [ref=e959] [cursor=pointer]:
                                - img [ref=e961]
                                - generic [ref=e964]: "View Activity: John Doe"
                            - img [ref=e965]:
                              - img [ref=e967]
                        - gridcell [ref=e970]:
                          - button [ref=e979] [cursor=pointer]:
                            - img [ref=e981]
                            - generic [ref=e984]: "Mark Important: John Doe"
                        - gridcell [ref=e985]:
                          - button [ref=e988] [cursor=pointer]:
                            - img [ref=e990]
                            - generic [ref=e993]: Edit Title
                        - gridcell [ref=e994]:
                          - generic [ref=e996]:
                            - generic [ref=e999]: Acme Corporation
                            - button [ref=e1000] [cursor=pointer]:
                              - img [ref=e1002]
                              - generic [ref=e1005]: Edit Company
                        - gridcell [ref=e1006]:
                          - generic [ref=e1008]:
                            - generic [ref=e1011]: Open
                            - button [ref=e1012] [cursor=pointer]:
                              - img [ref=e1014]
                              - generic [ref=e1017]: Edit Lead Status
                        - gridcell [ref=e1018]:
                          - button [ref=e1021] [cursor=pointer]:
                            - img [ref=e1023]
                            - generic [ref=e1026]: Edit Lead Source
                        - gridcell [ref=e1027]:
                          - img [ref=e1030]:
                            - img [ref=e1032]
                        - gridcell [ref=e1035]:
                          - group [ref=e1042]:
                            - generic [ref=e1044]:
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e1045]:
                          - button [ref=e1052] [cursor=pointer]:
                            - img [ref=e1054]
                            - generic [ref=e1057]: Show Actions
                      - row [ref=e1058]:
                        - gridcell [ref=e1059]
                        - gridcell [ref=e1064]:
                          - generic [ref=e1066]:
                            - checkbox [ref=e1067]
                            - generic [ref=e1070]: Select Item 4
                        - rowheader [ref=e1071]:
                          - generic [ref=e1073]:
                            - generic [ref=e1077]:
                              - link [ref=e1080] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjIJwUAN/view
                                - generic [ref=e1081]: Mark Wilson
                              - button [ref=e1083] [cursor=pointer]:
                                - img [ref=e1085]
                                - generic [ref=e1088]: "View Activity: Mark Wilson"
                            - img [ref=e1089]:
                              - img [ref=e1091]
                        - gridcell [ref=e1094]:
                          - button [ref=e1103] [cursor=pointer]:
                            - img [ref=e1105]
                            - generic [ref=e1108]: "Mark Important: Mark Wilson"
                        - gridcell [ref=e1109]:
                          - button [ref=e1112] [cursor=pointer]:
                            - img [ref=e1114]
                            - generic [ref=e1117]: Edit Title
                        - gridcell [ref=e1118]:
                          - generic [ref=e1120]:
                            - generic [ref=e1123]: Innovation Labs
                            - button [ref=e1124] [cursor=pointer]:
                              - img [ref=e1126]
                              - generic [ref=e1129]: Edit Company
                        - gridcell [ref=e1130]:
                          - generic [ref=e1132]:
                            - generic [ref=e1135]: Open
                            - button [ref=e1136] [cursor=pointer]:
                              - img [ref=e1138]
                              - generic [ref=e1141]: Edit Lead Status
                        - gridcell [ref=e1142]:
                          - button [ref=e1145] [cursor=pointer]:
                            - img [ref=e1147]
                            - generic [ref=e1150]: Edit Lead Source
                        - gridcell [ref=e1151]:
                          - img [ref=e1154]:
                            - img [ref=e1156]
                        - gridcell [ref=e1159]:
                          - group [ref=e1166]:
                            - generic [ref=e1168]:
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e1169]:
                          - button [ref=e1176] [cursor=pointer]:
                            - img [ref=e1178]
                            - generic [ref=e1181]: Show Actions
                      - row [ref=e1182]:
                        - gridcell [ref=e1183]
                        - gridcell [ref=e1188]:
                          - generic [ref=e1190]:
                            - checkbox [ref=e1191]
                            - generic [ref=e1194]: Select Item 5
                        - rowheader [ref=e1195]:
                          - generic [ref=e1197]:
                            - generic [ref=e1201]:
                              - link [ref=e1204] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjIMMUA3/view
                                - generic [ref=e1205]: Robert Brown
                              - button [ref=e1207] [cursor=pointer]:
                                - img [ref=e1209]
                                - generic [ref=e1212]: "View Activity: Robert Brown"
                            - img [ref=e1213]:
                              - img [ref=e1215]
                        - gridcell [ref=e1218]:
                          - button [ref=e1227] [cursor=pointer]:
                            - img [ref=e1229]
                            - generic [ref=e1232]: "Mark Important: Robert Brown"
                        - gridcell [ref=e1233]:
                          - button [ref=e1236] [cursor=pointer]:
                            - img [ref=e1238]
                            - generic [ref=e1241]: Edit Title
                        - gridcell [ref=e1242]:
                          - generic [ref=e1244]:
                            - generic [ref=e1247]: Enterprise Corp
                            - button [ref=e1248] [cursor=pointer]:
                              - img [ref=e1250]
                              - generic [ref=e1253]: Edit Company
                        - gridcell [ref=e1254]:
                          - generic [ref=e1256]:
                            - generic [ref=e1259]: Open
                            - button [ref=e1260] [cursor=pointer]:
                              - img [ref=e1262]
                              - generic [ref=e1265]: Edit Lead Status
                        - gridcell [ref=e1266]:
                          - button [ref=e1269] [cursor=pointer]:
                            - img [ref=e1271]
                            - generic [ref=e1274]: Edit Lead Source
                        - gridcell [ref=e1275]:
                          - img [ref=e1278]:
                            - img [ref=e1280]
                        - gridcell [ref=e1283]:
                          - group [ref=e1290]:
                            - generic [ref=e1292]:
                              - button [ref=e1294] [cursor=pointer]:
                                - img [ref=e1296]
                                - generic [ref=e1299]: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e1300]:
                          - button [ref=e1307] [cursor=pointer]:
                            - img [ref=e1309]
                            - generic [ref=e1312]: Show Actions
                      - row [ref=e1313]:
                        - gridcell [ref=e1314]
                        - gridcell [ref=e1319]:
                          - generic [ref=e1321]:
                            - checkbox [ref=e1322]
                            - generic [ref=e1325]: Select Item 6
                        - rowheader [ref=e1326]:
                          - generic [ref=e1328]:
                            - generic [ref=e1332]:
                              - link [ref=e1335] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjMBOUA3/view
                                - generic [ref=e1336]: John Doe
                              - button [ref=e1338] [cursor=pointer]:
                                - img [ref=e1340]
                                - generic [ref=e1343]: "View Activity: John Doe"
                            - img [ref=e1344]:
                              - img [ref=e1346]
                        - gridcell [ref=e1349]:
                          - button [ref=e1358] [cursor=pointer]:
                            - img [ref=e1360]
                            - generic [ref=e1363]: "Mark Important: John Doe"
                        - gridcell [ref=e1364]:
                          - button [ref=e1367] [cursor=pointer]:
                            - img [ref=e1369]
                            - generic [ref=e1372]: Edit Title
                        - gridcell [ref=e1373]:
                          - generic [ref=e1375]:
                            - generic [ref=e1378]: Acme Corporation
                            - button [ref=e1379] [cursor=pointer]:
                              - img [ref=e1381]
                              - generic [ref=e1384]: Edit Company
                        - gridcell [ref=e1385]:
                          - generic [ref=e1387]:
                            - generic [ref=e1390]: Open
                            - button [ref=e1391] [cursor=pointer]:
                              - img [ref=e1393]
                              - generic [ref=e1396]: Edit Lead Status
                        - gridcell [ref=e1397]:
                          - button [ref=e1400] [cursor=pointer]:
                            - img [ref=e1402]
                            - generic [ref=e1405]: Edit Lead Source
                        - gridcell [ref=e1406]:
                          - img [ref=e1409]:
                            - img [ref=e1411]
                        - gridcell [ref=e1414]:
                          - group [ref=e1421]:
                            - generic [ref=e1423]:
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e1424]:
                          - button [ref=e1431] [cursor=pointer]:
                            - img [ref=e1433]
                            - generic [ref=e1436]: Show Actions
                      - row [ref=e1437]:
                        - gridcell [ref=e1438]
                        - gridcell [ref=e1443]:
                          - generic [ref=e1445]:
                            - checkbox [ref=e1446]
                            - generic [ref=e1449]: Select Item 7
                        - rowheader [ref=e1450]:
                          - generic [ref=e1452]:
                            - generic [ref=e1456]:
                              - link [ref=e1459] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjN11UAF/view
                                - generic [ref=e1460]: John Doe
                              - button [ref=e1462] [cursor=pointer]:
                                - img [ref=e1464]
                                - generic [ref=e1467]: "View Activity: John Doe"
                            - img [ref=e1468]:
                              - img [ref=e1470]
                        - gridcell [ref=e1473]:
                          - button [ref=e1482] [cursor=pointer]:
                            - img [ref=e1484]
                            - generic [ref=e1487]: "Mark Important: John Doe"
                        - gridcell [ref=e1488]:
                          - button [ref=e1491] [cursor=pointer]:
                            - img [ref=e1493]
                            - generic [ref=e1496]: Edit Title
                        - gridcell [ref=e1497]:
                          - generic [ref=e1499]:
                            - generic [ref=e1502]: Acme Corporation
                            - button [ref=e1503] [cursor=pointer]:
                              - img [ref=e1505]
                              - generic [ref=e1508]: Edit Company
                        - gridcell [ref=e1509]:
                          - generic [ref=e1511]:
                            - generic [ref=e1514]: Open
                            - button [ref=e1515] [cursor=pointer]:
                              - img [ref=e1517]
                              - generic [ref=e1520]: Edit Lead Status
                        - gridcell [ref=e1521]:
                          - button [ref=e1524] [cursor=pointer]:
                            - img [ref=e1526]
                            - generic [ref=e1529]: Edit Lead Source
                        - gridcell [ref=e1530]:
                          - img [ref=e1533]:
                            - img [ref=e1535]
                        - gridcell [ref=e1538]:
                          - group [ref=e1545]:
                            - generic [ref=e1547]:
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e1548]:
                          - button [ref=e1555] [cursor=pointer]:
                            - img [ref=e1557]
                            - generic [ref=e1560]: Show Actions
                      - row [ref=e1561]:
                        - gridcell [ref=e1562]
                        - gridcell [ref=e1567]:
                          - generic [ref=e1569]:
                            - checkbox [ref=e1570]
                            - generic [ref=e1573]: Select Item 8
                        - rowheader [ref=e1574]:
                          - generic [ref=e1576]:
                            - generic [ref=e1580]:
                              - link [ref=e1583] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjNU3UAN/view
                                - generic [ref=e1584]: Jane Smith
                              - button [ref=e1586] [cursor=pointer]:
                                - img [ref=e1588]
                                - generic [ref=e1591]: "View Activity: Jane Smith"
                            - img [ref=e1592]:
                              - img [ref=e1594]
                        - gridcell [ref=e1597]:
                          - button [ref=e1606] [cursor=pointer]:
                            - img [ref=e1608]
                            - generic [ref=e1611]: "Mark Important: Jane Smith"
                        - gridcell [ref=e1612]:
                          - generic [ref=e1614]:
                            - generic [ref=e1617]: Manager
                            - button [ref=e1618] [cursor=pointer]:
                              - img [ref=e1620]
                              - generic [ref=e1623]: Edit Title
                        - gridcell [ref=e1624]:
                          - generic [ref=e1626]:
                            - generic [ref=e1629]: Tech Innovations Inc
                            - button [ref=e1630] [cursor=pointer]:
                              - img [ref=e1632]
                              - generic [ref=e1635]: Edit Company
                        - gridcell [ref=e1636]:
                          - generic [ref=e1638]:
                            - generic [ref=e1641]: Open
                            - button [ref=e1642] [cursor=pointer]:
                              - img [ref=e1644]
                              - generic [ref=e1647]: Edit Lead Status
                        - gridcell [ref=e1648]:
                          - button [ref=e1651] [cursor=pointer]:
                            - img [ref=e1653]
                            - generic [ref=e1656]: Edit Lead Source
                        - gridcell [ref=e1657]:
                          - img [ref=e1660]:
                            - img [ref=e1662]
                        - gridcell [ref=e1665]:
                          - group [ref=e1672]:
                            - generic [ref=e1674]:
                              - button [ref=e1676] [cursor=pointer]:
                                - img [ref=e1678]
                                - generic [ref=e1681]: Email
                              - button [ref=e1683] [cursor=pointer]:
                                - img [ref=e1685]
                                - generic [ref=e1688]: Call
                        - gridcell [ref=e1689]:
                          - button [ref=e1696] [cursor=pointer]:
                            - img [ref=e1698]
                            - generic [ref=e1701]: Show Actions
                      - row [ref=e1702]:
                        - gridcell [ref=e1703]
                        - gridcell [ref=e1708]:
                          - generic [ref=e1710]:
                            - checkbox [ref=e1711]
                            - generic [ref=e1714]: Select Item 9
                        - rowheader [ref=e1715]:
                          - generic [ref=e1717]:
                            - generic [ref=e1721]:
                              - link [ref=e1724] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjOhpUAF/view
                                - generic [ref=e1725]: Jane Smith
                              - button [ref=e1727] [cursor=pointer]:
                                - img [ref=e1729]
                                - generic [ref=e1732]: "View Activity: Jane Smith"
                            - img [ref=e1733]:
                              - img [ref=e1735]
                        - gridcell [ref=e1738]:
                          - button [ref=e1747] [cursor=pointer]:
                            - img [ref=e1749]
                            - generic [ref=e1752]: "Mark Important: Jane Smith"
                        - gridcell [ref=e1753]:
                          - generic [ref=e1755]:
                            - generic [ref=e1758]: Manager
                            - button [ref=e1759] [cursor=pointer]:
                              - img [ref=e1761]
                              - generic [ref=e1764]: Edit Title
                        - gridcell [ref=e1765]:
                          - generic [ref=e1767]:
                            - generic [ref=e1770]: Tech Innovations Inc
                            - button [ref=e1771] [cursor=pointer]:
                              - img [ref=e1773]
                              - generic [ref=e1776]: Edit Company
                        - gridcell [ref=e1777]:
                          - generic [ref=e1779]:
                            - generic [ref=e1782]: Open
                            - button [ref=e1783] [cursor=pointer]:
                              - img [ref=e1785]
                              - generic [ref=e1788]: Edit Lead Status
                        - gridcell [ref=e1789]:
                          - button [ref=e1792] [cursor=pointer]:
                            - img [ref=e1794]
                            - generic [ref=e1797]: Edit Lead Source
                        - gridcell [ref=e1798]:
                          - img [ref=e1801]:
                            - img [ref=e1803]
                        - gridcell [ref=e1806]:
                          - group [ref=e1813]:
                            - generic [ref=e1815]:
                              - button [ref=e1817] [cursor=pointer]:
                                - img [ref=e1819]
                                - generic [ref=e1822]: Email
                              - button [ref=e1824] [cursor=pointer]:
                                - img [ref=e1826]
                                - generic [ref=e1829]: Call
                        - gridcell [ref=e1830]:
                          - button [ref=e1837] [cursor=pointer]:
                            - img [ref=e1839]
                            - generic [ref=e1842]: Show Actions
      - list [ref=e1845]:
        - listitem [ref=e1846]:
          - button [ref=e1849] [cursor=pointer]:
            - img [ref=e1853]
            - generic [ref=e1856]: To Do List
    - dialog "New Lead" [ref=e1859]:
      - generic [ref=e1860]:
        - button "Cancel and close" [ref=e1861] [cursor=pointer]:
          - img [ref=e1863]
          - generic [ref=e1866]: Cancel and close
        - generic [ref=e1867]:
          - generic [ref=e1874]:
            - heading "New Lead" [level=2] [ref=e1876]
            - generic [ref=e1878]:
              - generic [ref=e1879]: "* = Required Information"
              - generic [ref=e1881]:
                - generic [ref=e1886]:
                  - generic [ref=e1888]:
                    - heading "Lead Information" [level=3] [ref=e1889]:
                      - generic [ref=e1890]: Lead Information
                    - list [ref=e1892]:
                      - generic [ref=e1893]:
                        - generic [ref=e1895]:
                          - listitem [ref=e1897]:
                            - generic [ref=e1898]:
                              - generic [ref=e1899]: Lead Owner
                              - generic [ref=e1911]: Rakesh Sharma
                          - listitem [ref=e1913]:
                            - generic [ref=e1920]:
                              - generic [ref=e1922]: "*Lead Status"
                              - generic [ref=e1926]:
                                - combobox "Lead Status" [active] [ref=e1927] [cursor=pointer]:
                                  - generic [ref=e1928]: Open
                                - img [ref=e1932]
                              - status
                        - generic [ref=e1936]:
                          - listitem [ref=e1938]:
                            - group "Name required" [ref=e1943]:
                              - generic [ref=e1944]:
                                - text: "*Name"
                                - generic "required" [ref=e1945]
                              - generic [ref=e1947]:
                                - generic [ref=e1951]:
                                  - generic [ref=e1953]: Salutation
                                  - generic [ref=e1957]:
                                    - combobox "Salutation" [ref=e1958] [cursor=pointer]:
                                      - generic [ref=e1959]: "--None--"
                                    - img [ref=e1963]
                                  - status
                                - generic [ref=e1969]:
                                  - generic [ref=e1970]: First Name
                                  - textbox "First Name" [ref=e1972]
                                - generic [ref=e1976]:
                                  - generic [ref=e1977]: "*Last Name"
                                  - textbox "Last Name" [ref=e1979]
                          - listitem [ref=e1981]:
                            - generic [ref=e1986]:
                              - generic [ref=e1987]: Phone
                              - textbox "Phone" [ref=e1989]
                        - generic [ref=e1991]:
                          - listitem [ref=e1993]:
                            - generic [ref=e1999]:
                              - generic [ref=e2000]: "*Company"
                              - textbox "Company" [ref=e2002]
                          - listitem [ref=e2004]:
                            - generic [ref=e2009]:
                              - generic [ref=e2010]: Email
                              - textbox "Email" [ref=e2012]
                        - generic [ref=e2014]:
                          - listitem [ref=e2016]:
                            - generic [ref=e2022]:
                              - generic [ref=e2023]: Title
                              - textbox "Title" [ref=e2025]
                          - listitem [ref=e2027]:
                            - generic [ref=e2034]:
                              - generic [ref=e2036]: Rating
                              - generic [ref=e2040]:
                                - combobox "Rating" [ref=e2041] [cursor=pointer]:
                                  - generic [ref=e2042]: "--None--"
                                - img [ref=e2046]
                              - status
                  - generic [ref=e2050]:
                    - heading "Address Information" [level=3] [ref=e2051]:
                      - generic [ref=e2052]: Address Information
                    - list [ref=e2054]:
                      - generic [ref=e2057]:
                        - listitem [ref=e2059]:
                          - group "Address" [ref=e2064]:
                            - generic [ref=e2065]: Address
                            - generic [ref=e2067]:
                              - generic [ref=e2069]:
                                - generic [ref=e2070]: Address Search
                                - generic [ref=e2074]:
                                  - combobox "Address Search" [ref=e2077]
                                  - img [ref=e2081]
                              - status [ref=e2084]
                              - generic [ref=e2086]:
                                - generic [ref=e2087]: Street
                                - textbox "Street" [ref=e2089]
                                - status
                              - generic [ref=e2093]:
                                - generic [ref=e2094]: City
                                - textbox "City" [ref=e2096]
                              - generic [ref=e2097]:
                                - generic [ref=e2100]:
                                  - generic [ref=e2101]: Zip/Postal Code
                                  - textbox "Zip/Postal Code" [ref=e2103]
                                - generic [ref=e2106]:
                                  - generic [ref=e2107]: State/Province
                                  - textbox "State/Province" [ref=e2109]
                              - generic [ref=e2113]:
                                - generic [ref=e2114]: Country
                                - textbox "Country" [ref=e2116]
                        - listitem [ref=e2118]:
                          - generic [ref=e2123]:
                            - generic [ref=e2124]: Website
                            - textbox "Website" [ref=e2126]
                  - generic [ref=e2128]:
                    - heading "Additional Information" [level=3] [ref=e2129]:
                      - generic [ref=e2130]: Additional Information
                    - list [ref=e2132]:
                      - generic [ref=e2133]:
                        - generic [ref=e2135]:
                          - listitem [ref=e2137]:
                            - generic [ref=e2142]:
                              - generic [ref=e2143]: No. of Employees
                              - spinbutton "No. of Employees" [ref=e2145]
                          - listitem [ref=e2147]:
                            - generic [ref=e2154]:
                              - generic [ref=e2156]: Lead Source
                              - generic [ref=e2160]:
                                - combobox "Lead Source" [ref=e2161] [cursor=pointer]:
                                  - generic [ref=e2162]: "--None--"
                                - img [ref=e2166]
                              - status
                        - generic [ref=e2170]:
                          - listitem [ref=e2172]:
                            - generic [ref=e2178]:
                              - generic [ref=e2179]: Annual Revenue
                              - spinbutton "Annual Revenue" [ref=e2181]
                          - listitem [ref=e2183]:
                            - generic [ref=e2190]:
                              - generic [ref=e2192]: Industry
                              - generic [ref=e2196]:
                                - combobox "Industry" [ref=e2197] [cursor=pointer]:
                                  - generic [ref=e2198]: "--None--"
                                - img [ref=e2202]
                              - status
                  - generic [ref=e2206]:
                    - heading "Description Information" [level=3] [ref=e2207]:
                      - generic [ref=e2208]: Description Information
                    - list [ref=e2210]:
                      - listitem [ref=e2215]:
                        - generic [ref=e2219]:
                          - generic [ref=e2220]: Description
                          - textbox "Description" [ref=e2222]
                          - status
                - generic [ref=e2227]:
                  - generic "Cancel" [ref=e2228]:
                    - button "Cancel" [ref=e2233] [cursor=pointer]
                  - generic "Save & New" [ref=e2234]:
                    - button "Save & New" [ref=e2239] [cursor=pointer]
                  - generic "Save" [ref=e2240]:
                    - button "Save" [ref=e2245] [cursor=pointer]
          - status [ref=e2246]
  - generic:
    - status
```

# Test source

```ts
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
  673 |     await page.keyboard.type('KeyboardCorp');
  674 | 
  675 |     // Tab to save and press Enter
  676 |     for (let i = 0; i < 5; i++) {
  677 |       await page.keyboard.press('Tab');
  678 |       await page.waitForTimeout(100);
  679 |     }
  680 |     await page.keyboard.press('Enter');
  681 |     await waitForSFLoad(page);
  682 | 
  683 |     // Verify
  684 |     const url = page.url();
  685 |     expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  686 |     
  687 |     await expect(page.getByText('KeyboardCorp')).toBeVisible({ timeout: 15000 });
  688 | 
  689 |     // HEALED: Capture success screenshot
  690 |     const successScreenshot = await page.screenshot({ fullPage: true });
  691 |     const screenshotPath = path.join(screenshotDir, '6.1-Keyboard-Navigation-PASSED.png');
  692 |     fs.writeFileSync(screenshotPath, successScreenshot);
  693 |     
  694 |     await testInfo.attach('success-screenshot', {
  695 |       body: successScreenshot,
  696 |       contentType: 'image/png',
  697 |       path: screenshotPath,
  698 |     });
  699 |   });
  700 | 
  701 |   sfTest('6.2 Verify Field Labels and Help Text', async ({ sfPage: page }, testInfo) => {
  702 |     await allure.description(
  703 |       'Verify that all fields have descriptive labels and required indicators.'
  704 |     );
  705 | 
  706 |     // Navigate
  707 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  708 |     await page.waitForTimeout(500);
  709 |     
  710 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  711 |     await page.waitForTimeout(500);
  712 |     
  713 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  714 |     await waitForSFLoad(page);
  715 |     
  716 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  717 |     await waitForSFLoad(page);
  718 | 
  719 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  720 | 
  721 |     // Verify fields
  722 |     await expect(page.getByLabel(/first name/i)).toBeVisible({ timeout: 5000 });
  723 |     await expect(page.getByLabel(/last name/i)).toBeVisible({ timeout: 5000 });
> 724 |     await expect(page.getByLabel(/company/i)).toBeVisible({ timeout: 5000 });
      |                                               ^ Error: expect(locator).toBeVisible() failed
  725 |     
  726 |     await expect(page.getByRole('button', { name: 'Save', exact: true })).toBeVisible({ timeout: 5000 });
  727 |     
  728 |     const cancelBtn = page.getByRole('button', { name: /cancel/i });
  729 |     if (await cancelBtn.count() > 0) {
  730 |       await expect(cancelBtn).toBeVisible();
  731 |     }
  732 | 
  733 |     // HEALED: Capture success screenshot showing accessible form
  734 |     const successScreenshot = await page.screenshot({ fullPage: true });
  735 |     const screenshotPath = path.join(screenshotDir, '6.2-Field-Labels-Accessibility-PASSED.png');
  736 |     fs.writeFileSync(screenshotPath, successScreenshot);
  737 |     
  738 |     await testInfo.attach('success-screenshot', {
  739 |       body: successScreenshot,
  740 |       contentType: 'image/png',
  741 |       path: screenshotPath,
  742 |     });
  743 |   });
  744 | 
  745 | });
  746 | 
```