# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 2. Lead Creation - Field Validation >> 2.1 Attempt to Save Lead Without Required Fields
- Location: tests\lead-creation.spec.js:183:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/complete this field|required/i)
Expected: visible
Error: strict mode violation: getByText(/complete this field|required/i) resolved to 3 elements:
    1) <div lwc-6ct7qgg1o86="" class="form-legend-desktop">…</div> aka getByText('* = Required Information')
    2) <div part="help-text" lwc-enmikoh2qu="" aria-live="polite" data-name="lastName" data-help-message="" id="help-message-882" class="slds-form-element__help slds-m-left_none">…</div> aka getByText('Last NameComplete this field.')
    3) <div part="help-text" lwc-enmikoh2qu="" aria-live="polite" data-name="Company" data-help-message="" id="help-message-890" class="slds-form-element__help slds-m-left_none">…</div> aka getByText('CompanyComplete this field.')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/complete this field|required/i)

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
                    - paragraph [ref=e429]: "21"
                - generic [ref=e430]:
                  - button [ref=e431] [cursor=pointer]:
                    - generic [ref=e432]:
                      - paragraph [ref=e434]: No Activity
                      - paragraph [ref=e436]: "21"
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
                  - status [ref=e513]: 21 items • Filtered by Created Date, Me, Total Leads
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
                        - generic [ref=e553]: Select 21 items
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
                                - /url: /lightning/r/Lead/00QdN00000DjMBOUA3/view
                                - generic [ref=e1205]: John Doe
                              - button [ref=e1207] [cursor=pointer]:
                                - img [ref=e1209]
                                - generic [ref=e1212]: "View Activity: John Doe"
                            - img [ref=e1213]:
                              - img [ref=e1215]
                        - gridcell [ref=e1218]:
                          - button [ref=e1227] [cursor=pointer]:
                            - img [ref=e1229]
                            - generic [ref=e1232]: "Mark Important: John Doe"
                        - gridcell [ref=e1233]:
                          - button [ref=e1236] [cursor=pointer]:
                            - img [ref=e1238]
                            - generic [ref=e1241]: Edit Title
                        - gridcell [ref=e1242]:
                          - generic [ref=e1244]:
                            - generic [ref=e1247]: Acme Corporation
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
                        - gridcell [ref=e1293]:
                          - button [ref=e1300] [cursor=pointer]:
                            - img [ref=e1302]
                            - generic [ref=e1305]: Show Actions
                      - row [ref=e1306]:
                        - gridcell [ref=e1307]
                        - gridcell [ref=e1312]:
                          - generic [ref=e1314]:
                            - checkbox [ref=e1315]
                            - generic [ref=e1318]: Select Item 6
                        - rowheader [ref=e1319]:
                          - generic [ref=e1321]:
                            - generic [ref=e1325]:
                              - link [ref=e1328] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjN11UAF/view
                                - generic [ref=e1329]: John Doe
                              - button [ref=e1331] [cursor=pointer]:
                                - img [ref=e1333]
                                - generic [ref=e1336]: "View Activity: John Doe"
                            - img [ref=e1337]:
                              - img [ref=e1339]
                        - gridcell [ref=e1342]:
                          - button [ref=e1351] [cursor=pointer]:
                            - img [ref=e1353]
                            - generic [ref=e1356]: "Mark Important: John Doe"
                        - gridcell [ref=e1357]:
                          - button [ref=e1360] [cursor=pointer]:
                            - img [ref=e1362]
                            - generic [ref=e1365]: Edit Title
                        - gridcell [ref=e1366]:
                          - generic [ref=e1368]:
                            - generic [ref=e1371]: Acme Corporation
                            - button [ref=e1372] [cursor=pointer]:
                              - img [ref=e1374]
                              - generic [ref=e1377]: Edit Company
                        - gridcell [ref=e1378]:
                          - generic [ref=e1380]:
                            - generic [ref=e1383]: Open
                            - button [ref=e1384] [cursor=pointer]:
                              - img [ref=e1386]
                              - generic [ref=e1389]: Edit Lead Status
                        - gridcell [ref=e1390]:
                          - button [ref=e1393] [cursor=pointer]:
                            - img [ref=e1395]
                            - generic [ref=e1398]: Edit Lead Source
                        - gridcell [ref=e1399]:
                          - img [ref=e1402]:
                            - img [ref=e1404]
                        - gridcell [ref=e1407]:
                          - group [ref=e1414]:
                            - generic [ref=e1416]:
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
                        - gridcell [ref=e1417]:
                          - button [ref=e1424] [cursor=pointer]:
                            - img [ref=e1426]
                            - generic [ref=e1429]: Show Actions
                      - row [ref=e1430]:
                        - gridcell [ref=e1431]
                        - gridcell [ref=e1436]:
                          - generic [ref=e1438]:
                            - checkbox [ref=e1439]
                            - generic [ref=e1442]: Select Item 7
                        - rowheader [ref=e1443]:
                          - generic [ref=e1445]:
                            - generic [ref=e1449]:
                              - link [ref=e1452] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjNU3UAN/view
                                - generic [ref=e1453]: Jane Smith
                              - button [ref=e1455] [cursor=pointer]:
                                - img [ref=e1457]
                                - generic [ref=e1460]: "View Activity: Jane Smith"
                            - img [ref=e1461]:
                              - img [ref=e1463]
                        - gridcell [ref=e1466]:
                          - button [ref=e1475] [cursor=pointer]:
                            - img [ref=e1477]
                            - generic [ref=e1480]: "Mark Important: Jane Smith"
                        - gridcell [ref=e1481]:
                          - generic [ref=e1483]:
                            - generic [ref=e1486]: Manager
                            - button [ref=e1487] [cursor=pointer]:
                              - img [ref=e1489]
                              - generic [ref=e1492]: Edit Title
                        - gridcell [ref=e1493]:
                          - generic [ref=e1495]:
                            - generic [ref=e1498]: Tech Innovations Inc
                            - button [ref=e1499] [cursor=pointer]:
                              - img [ref=e1501]
                              - generic [ref=e1504]: Edit Company
                        - gridcell [ref=e1505]:
                          - generic [ref=e1507]:
                            - generic [ref=e1510]: Open
                            - button [ref=e1511] [cursor=pointer]:
                              - img [ref=e1513]
                              - generic [ref=e1516]: Edit Lead Status
                        - gridcell [ref=e1517]:
                          - button [ref=e1520] [cursor=pointer]:
                            - img [ref=e1522]
                            - generic [ref=e1525]: Edit Lead Source
                        - gridcell [ref=e1526]:
                          - img [ref=e1529]:
                            - img [ref=e1531]
                        - gridcell [ref=e1534]:
                          - group [ref=e1541]:
                            - generic [ref=e1543]:
                              - button [ref=e1545] [cursor=pointer]:
                                - img [ref=e1547]
                                - generic [ref=e1550]: Email
                              - button [ref=e1552] [cursor=pointer]:
                                - img [ref=e1554]
                                - generic [ref=e1557]: Call
                        - gridcell [ref=e1558]:
                          - button [ref=e1565] [cursor=pointer]:
                            - img [ref=e1567]
                            - generic [ref=e1570]: Show Actions
                      - row [ref=e1571]:
                        - gridcell [ref=e1572]
                        - gridcell [ref=e1577]:
                          - generic [ref=e1579]:
                            - checkbox [ref=e1580]
                            - generic [ref=e1583]: Select Item 8
                        - rowheader [ref=e1584]:
                          - generic [ref=e1586]:
                            - generic [ref=e1590]:
                              - link [ref=e1593] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjOhpUAF/view
                                - generic [ref=e1594]: Jane Smith
                              - button [ref=e1596] [cursor=pointer]:
                                - img [ref=e1598]
                                - generic [ref=e1601]: "View Activity: Jane Smith"
                            - img [ref=e1602]:
                              - img [ref=e1604]
                        - gridcell [ref=e1607]:
                          - button [ref=e1616] [cursor=pointer]:
                            - img [ref=e1618]
                            - generic [ref=e1621]: "Mark Important: Jane Smith"
                        - gridcell [ref=e1622]:
                          - generic [ref=e1624]:
                            - generic [ref=e1627]: Manager
                            - button [ref=e1628] [cursor=pointer]:
                              - img [ref=e1630]
                              - generic [ref=e1633]: Edit Title
                        - gridcell [ref=e1634]:
                          - generic [ref=e1636]:
                            - generic [ref=e1639]: Tech Innovations Inc
                            - button [ref=e1640] [cursor=pointer]:
                              - img [ref=e1642]
                              - generic [ref=e1645]: Edit Company
                        - gridcell [ref=e1646]:
                          - generic [ref=e1648]:
                            - generic [ref=e1651]: Open
                            - button [ref=e1652] [cursor=pointer]:
                              - img [ref=e1654]
                              - generic [ref=e1657]: Edit Lead Status
                        - gridcell [ref=e1658]:
                          - button [ref=e1661] [cursor=pointer]:
                            - img [ref=e1663]
                            - generic [ref=e1666]: Edit Lead Source
                        - gridcell [ref=e1667]:
                          - img [ref=e1670]:
                            - img [ref=e1672]
                        - gridcell [ref=e1675]:
                          - group [ref=e1682]:
                            - generic [ref=e1684]:
                              - button [ref=e1686] [cursor=pointer]:
                                - img [ref=e1688]
                                - generic [ref=e1691]: Email
                              - button [ref=e1693] [cursor=pointer]:
                                - img [ref=e1695]
                                - generic [ref=e1698]: Call
                        - gridcell [ref=e1699]:
                          - button [ref=e1706] [cursor=pointer]:
                            - img [ref=e1708]
                            - generic [ref=e1711]: Show Actions
                      - row [ref=e1712]:
                        - gridcell [ref=e1713]
                        - gridcell [ref=e1718]:
                          - generic [ref=e1720]:
                            - checkbox [ref=e1721]
                            - generic [ref=e1724]: Select Item 9
                        - rowheader [ref=e1725]:
                          - generic [ref=e1727]:
                            - generic [ref=e1731]:
                              - link [ref=e1734] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjOwLUAV/view
                                - generic [ref=e1735]: John Doe
                              - button [ref=e1737] [cursor=pointer]:
                                - img [ref=e1739]
                                - generic [ref=e1742]: "View Activity: John Doe"
                            - img [ref=e1743]:
                              - img [ref=e1745]
                        - gridcell [ref=e1748]:
                          - button [ref=e1757] [cursor=pointer]:
                            - img [ref=e1759]
                            - generic [ref=e1762]: "Mark Important: John Doe"
                        - gridcell [ref=e1763]:
                          - button [ref=e1766] [cursor=pointer]:
                            - img [ref=e1768]
                            - generic [ref=e1771]: Edit Title
                        - gridcell [ref=e1772]:
                          - generic [ref=e1774]:
                            - generic [ref=e1777]: Acme Corporation
                            - button [ref=e1778] [cursor=pointer]:
                              - img [ref=e1780]
                              - generic [ref=e1783]: Edit Company
                        - gridcell [ref=e1784]:
                          - generic [ref=e1786]:
                            - generic [ref=e1789]: Open
                            - button [ref=e1790] [cursor=pointer]:
                              - img [ref=e1792]
                              - generic [ref=e1795]: Edit Lead Status
                        - gridcell [ref=e1796]:
                          - button [ref=e1799] [cursor=pointer]:
                            - img [ref=e1801]
                            - generic [ref=e1804]: Edit Lead Source
                        - gridcell [ref=e1805]:
                          - img [ref=e1808]:
                            - img [ref=e1810]
                        - gridcell [ref=e1813]:
                          - group [ref=e1820]:
                            - generic [ref=e1822]:
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
                        - gridcell [ref=e1823]:
                          - button [ref=e1830] [cursor=pointer]:
                            - img [ref=e1832]
                            - generic [ref=e1835]: Show Actions
      - list [ref=e1838]:
        - listitem [ref=e1839]:
          - button [ref=e1842] [cursor=pointer]:
            - img [ref=e1846]
            - generic [ref=e1849]: To Do List
    - generic [ref=e1850]:
      - dialog [ref=e1852]:
        - generic [ref=e1853]:
          - button [ref=e1854] [cursor=pointer]:
            - img [ref=e1856]
            - generic [ref=e1859]: Cancel and close
          - generic [ref=e1860]:
            - generic [ref=e1867]:
              - heading [level=2] [ref=e1869]: New Lead
              - generic [ref=e1871]:
                - generic [ref=e1872]: "* = Required Information"
                - generic [ref=e1874]:
                  - generic [ref=e1879]:
                    - generic [ref=e1881]:
                      - heading [level=3] [ref=e1882]:
                        - generic [ref=e1883]: Lead Information
                      - list [ref=e1885]:
                        - generic [ref=e1886]:
                          - generic [ref=e1888]:
                            - listitem [ref=e1890]:
                              - generic [ref=e1891]:
                                - generic [ref=e1892]: Lead Owner
                                - generic [ref=e1904]: Rakesh Sharma
                            - listitem [ref=e1906]:
                              - generic [ref=e1913]:
                                - generic [ref=e1915]: "*Lead Status"
                                - generic [ref=e1919]:
                                  - combobox [ref=e1920] [cursor=pointer]:
                                    - generic [ref=e1921]: Open
                                  - img [ref=e1925]
                          - generic [ref=e1929]:
                            - listitem [ref=e1931]:
                              - group [ref=e1936]:
                                - generic [ref=e1937]: "*Name"
                                - generic [ref=e1940]:
                                  - generic [ref=e1944]:
                                    - generic [ref=e1946]: Salutation
                                    - generic [ref=e1950]:
                                      - combobox [ref=e1951] [cursor=pointer]:
                                        - generic [ref=e1952]: "--None--"
                                      - img [ref=e1956]
                                  - generic [ref=e1962]:
                                    - generic [ref=e1963]: First Name
                                    - textbox [ref=e1965]:
                                      - /placeholder: First Name
                                  - generic [ref=e1968]:
                                    - generic [ref=e1969]:
                                      - generic [ref=e1970]: "*Last Name"
                                      - generic [ref=e1971]:
                                        - img [ref=e1972]
                                        - textbox [ref=e1975]:
                                          - /placeholder: Last Name
                                    - generic [ref=e1976]:
                                      - generic [ref=e1977]: Last Name
                                      - text: Complete this field.
                            - listitem [ref=e1979]:
                              - generic [ref=e1984]:
                                - generic [ref=e1985]: Phone
                                - textbox [ref=e1987]
                          - generic [ref=e1989]:
                            - listitem [ref=e1991]:
                              - generic [ref=e1996]:
                                - generic [ref=e1997]:
                                  - generic [ref=e1998]: "*Company"
                                  - generic [ref=e1999]:
                                    - img [ref=e2000]
                                    - textbox [ref=e2003]
                                - generic [ref=e2004]:
                                  - generic [ref=e2005]: Company
                                  - text: Complete this field.
                            - listitem [ref=e2007]:
                              - generic [ref=e2012]:
                                - generic [ref=e2013]: Email
                                - textbox [ref=e2015]
                          - generic [ref=e2017]:
                            - listitem [ref=e2019]:
                              - generic [ref=e2025]:
                                - generic [ref=e2026]: Title
                                - textbox [ref=e2028]
                            - listitem [ref=e2030]:
                              - generic [ref=e2037]:
                                - generic [ref=e2039]: Rating
                                - generic [ref=e2043]:
                                  - combobox [ref=e2044] [cursor=pointer]:
                                    - generic [ref=e2045]: "--None--"
                                  - img [ref=e2049]
                    - generic [ref=e2053]:
                      - heading [level=3] [ref=e2054]:
                        - generic [ref=e2055]: Address Information
                      - list [ref=e2057]:
                        - generic [ref=e2060]:
                          - listitem [ref=e2062]:
                            - group [ref=e2067]:
                              - generic [ref=e2068]: Address
                              - generic [ref=e2070]:
                                - generic [ref=e2072]:
                                  - generic [ref=e2073]: Address Search
                                  - generic [ref=e2077]:
                                    - combobox [ref=e2080]
                                    - img [ref=e2084]
                                - status [ref=e2087]
                                - generic [ref=e2089]:
                                  - generic [ref=e2090]: Street
                                  - textbox [ref=e2092]
                                - generic [ref=e2096]:
                                  - generic [ref=e2097]: City
                                  - textbox [ref=e2099]
                                - generic [ref=e2100]:
                                  - generic [ref=e2103]:
                                    - generic [ref=e2104]: Zip/Postal Code
                                    - textbox [ref=e2106]
                                  - generic [ref=e2109]:
                                    - generic [ref=e2110]: State/Province
                                    - textbox [ref=e2112]
                                - generic [ref=e2116]:
                                  - generic [ref=e2117]: Country
                                  - textbox [ref=e2119]
                          - listitem [ref=e2121]:
                            - generic [ref=e2126]:
                              - generic [ref=e2127]: Website
                              - textbox [ref=e2129]
                    - generic [ref=e2131]:
                      - heading [level=3] [ref=e2132]:
                        - generic [ref=e2133]: Additional Information
                      - list [ref=e2135]:
                        - generic [ref=e2136]:
                          - generic [ref=e2138]:
                            - listitem [ref=e2140]:
                              - generic [ref=e2145]:
                                - generic [ref=e2146]: No. of Employees
                                - spinbutton [ref=e2148]
                            - listitem [ref=e2150]:
                              - generic [ref=e2157]:
                                - generic [ref=e2159]: Lead Source
                                - generic [ref=e2163]:
                                  - combobox [ref=e2164] [cursor=pointer]:
                                    - generic [ref=e2165]: "--None--"
                                  - img [ref=e2169]
                          - generic [ref=e2173]:
                            - listitem [ref=e2175]:
                              - generic [ref=e2181]:
                                - generic [ref=e2182]: Annual Revenue
                                - spinbutton [ref=e2184]
                            - listitem [ref=e2186]:
                              - generic [ref=e2193]:
                                - generic [ref=e2195]: Industry
                                - generic [ref=e2199]:
                                  - combobox [ref=e2200] [cursor=pointer]:
                                    - generic [ref=e2201]: "--None--"
                                  - img [ref=e2205]
                    - generic [ref=e2209]:
                      - heading [level=3] [ref=e2210]:
                        - generic [ref=e2211]: Description Information
                      - list [ref=e2213]:
                        - listitem [ref=e2218]:
                          - generic [ref=e2222]:
                            - generic [ref=e2223]: Description
                            - textbox [ref=e2225]
                  - generic [ref=e2228]:
                    - button [ref=e2229] [cursor=pointer]:
                      - generic [ref=e2231]:
                        - img [ref=e2233]
                        - generic [ref=e2236]: Error
                    - generic [ref=e2238]:
                      - button [ref=e2244] [cursor=pointer]: Cancel
                      - button [ref=e2250] [cursor=pointer]: Save & New
                      - button [ref=e2256] [cursor=pointer]: Save
            - status [ref=e2257]
      - dialog "We hit a snag." [ref=e2258]:
        - generic [ref=e2259]:
          - generic [ref=e2261]:
            - button "Close error dialog" [ref=e2263] [cursor=pointer]:
              - img [ref=e2265]
              - generic [ref=e2268]: Close error dialog
            - banner [ref=e2269]:
              - generic [ref=e2270]:
                - img [ref=e2275]
                - heading "We hit a snag." [active] [level=2] [ref=e2279]
          - generic [ref=e2283]:
            - strong [ref=e2285]: Review the following fields
            - list [ref=e2286]:
              - listitem [ref=e2287]:
                - link "Name" [ref=e2288] [cursor=pointer]:
                  - /url: javascript:void(0)
              - listitem [ref=e2289]:
                - link "Company" [ref=e2290] [cursor=pointer]:
                  - /url: javascript:void(0)
  - generic:
    - status
```

# Test source

```ts
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
  202 | 
  203 |     // Verify fields are empty
  204 |     await expect(page.getByLabel(/first name/i)).toHaveValue('');
  205 |     await expect(page.getByLabel(/last name/i)).toHaveValue('');
  206 | 
  207 |     // Try to save empty form
  208 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  209 |     await page.waitForTimeout(1000);
  210 | 
  211 |     // HEALED: Assert that error messages appear (validation failed)
  212 |     const url = page.url();
  213 |     // URL should not contain a record ID - form still visible = save failed
  214 |     expect(url).not.toMatch(/\/Lead\/[a-zA-Z0-9]{15,18}/);
  215 |     
  216 |     // Check for error/validation messages
  217 |     const errorMessages = page.getByRole('alert');
  218 |     const errorCount = await errorMessages.count();
  219 |     
  220 |     if (errorCount > 0) {
  221 |       // Error dialog appeared - validation worked
  222 |       await expect(errorMessages.first()).toBeVisible({ timeout: 5000 });
  223 |     } else {
  224 |       // Look for inline field errors
> 225 |       await expect(page.getByText(/complete this field|required/i)).toBeVisible({ timeout: 5000 });
      |                                                                     ^ Error: expect(locator).toBeVisible() failed
  226 |     }
  227 | 
  228 |     // HEALED: Capture validation error screenshot
  229 |     const errorScreenshot = await page.screenshot({ fullPage: true });
  230 |     const screenshotPath = path.join(screenshotDir, '2.1-Validation-No-Required-Fields-PASSED.png');
  231 |     fs.writeFileSync(screenshotPath, errorScreenshot);
  232 |     
  233 |     await testInfo.attach('validation-screenshot', {
  234 |       body: errorScreenshot,
  235 |       contentType: 'image/png',
  236 |       path: screenshotPath,
  237 |     });
  238 |   });
  239 | 
  240 |   // HEALED: Negative test - verify missing Last Name validation error
  241 |   sfTest('2.2 Enter Only First Name and Attempt Save', async ({ sfPage: page }, testInfo) => {
  242 |     await allure.description(
  243 |       'Verify validation catches missing Last Name when only First Name is provided.'
  244 |     );
  245 | 
  246 |     // Navigate
  247 |     await page.getByTitle('App Launcher').click({ timeout: 10000 });
  248 |     await page.waitForTimeout(500);
  249 |     
  250 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  251 |     await page.waitForTimeout(500);
  252 |     
  253 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  254 |     await waitForSFLoad(page);
  255 |     
  256 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  257 |     await waitForSFLoad(page);
  258 | 
  259 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  260 | 
  261 |     // Fill only first name
  262 |     await fillField(page, /first name/i, 'Michael');
  263 |     
  264 |     // Try to save
  265 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  266 |     await page.waitForTimeout(1000);
  267 | 
  268 |     // Verify save failed
  269 |     const url = page.url();
  270 |     expect(url).not.toMatch(/\/Lead\/[a-zA-Z0-9]{15,18}/);
  271 |     
  272 |     // First name should still be filled
  273 |     await expect(page.getByLabel(/first name/i)).toHaveValue('Michael');
  274 |     
  275 |     // Last name field should be visible (empty) - validation error
  276 |     await expect(page.getByLabel(/last name/i)).toBeVisible({ timeout: 5000 });
  277 |     
  278 |     // Check for error messages
  279 |     const errorMessages = page.getByRole('alert');
  280 |     const errorCount = await errorMessages.count();
  281 |     if (errorCount > 0) {
  282 |       await expect(errorMessages.first()).toBeVisible({ timeout: 5000 });
  283 |     }
  284 | 
  285 |     // HEALED: Capture validation error screenshot showing error state
  286 |     const errorScreenshot = await page.screenshot({ fullPage: true });
  287 |     const screenshotPath = path.join(screenshotDir, '2.2-Validation-Missing-LastName-PASSED.png');
  288 |     fs.writeFileSync(screenshotPath, errorScreenshot);
  289 |     
  290 |     await testInfo.attach('validation-screenshot', {
  291 |       body: errorScreenshot,
  292 |       contentType: 'image/png',
  293 |       path: screenshotPath,
  294 |     });
  295 |   });
  296 | 
  297 |   // HEALED: Positive test - valid email accepted and saved
  298 |   sfTest('2.3 Enter Valid Email Address', async ({ sfPage: page }, testInfo) => {
  299 |     await allure.description(
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
```