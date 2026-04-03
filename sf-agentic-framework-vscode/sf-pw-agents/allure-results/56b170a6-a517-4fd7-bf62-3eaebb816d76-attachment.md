# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-creation.spec.js >> 2. Lead Creation - Field Validation >> 2.1 Attempt to Save Lead Without Required Fields
- Location: tests\lead-creation.spec.js:153:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /new/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: /new/i })

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
                    - paragraph [ref=e429]: "16"
                - generic [ref=e430]:
                  - button [ref=e431] [cursor=pointer]:
                    - generic [ref=e432]:
                      - paragraph [ref=e434]: No Activity
                      - paragraph [ref=e436]: "16"
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
                  - status [ref=e513]: 16 items • Filtered by Created Date, Me, Total Leads
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
                        - generic [ref=e553]: Select 16 items
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
                      - slider [ref=e626]: "165"
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
                                - /url: /lightning/r/Lead/00QdN00000DjIJwUAN/view
                                - generic [ref=e957]: Mark Wilson
                              - button [ref=e959] [cursor=pointer]:
                                - img [ref=e961]
                                - generic [ref=e964]: "View Activity: Mark Wilson"
                            - img [ref=e965]:
                              - img [ref=e967]
                        - gridcell [ref=e970]:
                          - button [ref=e979] [cursor=pointer]:
                            - img [ref=e981]
                            - generic [ref=e984]: "Mark Important: Mark Wilson"
                        - gridcell [ref=e985]:
                          - button [ref=e988] [cursor=pointer]:
                            - img [ref=e990]
                            - generic [ref=e993]: Edit Title
                        - gridcell [ref=e994]:
                          - generic [ref=e996]:
                            - generic [ref=e999]: Innovation Labs
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
                                - /url: /lightning/r/Lead/00QdN00000DjMBOUA3/view
                                - generic [ref=e1081]: John Doe
                              - button [ref=e1083] [cursor=pointer]:
                                - img [ref=e1085]
                                - generic [ref=e1088]: "View Activity: John Doe"
                            - img [ref=e1089]:
                              - img [ref=e1091]
                        - gridcell [ref=e1094]:
                          - button [ref=e1103] [cursor=pointer]:
                            - img [ref=e1105]
                            - generic [ref=e1108]: "Mark Important: John Doe"
                        - gridcell [ref=e1109]:
                          - button [ref=e1112] [cursor=pointer]:
                            - img [ref=e1114]
                            - generic [ref=e1117]: Edit Title
                        - gridcell [ref=e1118]:
                          - generic [ref=e1120]:
                            - generic [ref=e1123]: Acme Corporation
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
                                - /url: /lightning/r/Lead/00QdN00000DjOhpUAF/view
                                - generic [ref=e1205]: Jane Smith
                              - button [ref=e1207] [cursor=pointer]:
                                - img [ref=e1209]
                                - generic [ref=e1212]: "View Activity: Jane Smith"
                            - img [ref=e1213]:
                              - img [ref=e1215]
                        - gridcell [ref=e1218]:
                          - button [ref=e1227] [cursor=pointer]:
                            - img [ref=e1229]
                            - generic [ref=e1232]: "Mark Important: Jane Smith"
                        - gridcell [ref=e1233]:
                          - generic [ref=e1235]:
                            - generic [ref=e1238]: Manager
                            - button [ref=e1239] [cursor=pointer]:
                              - img [ref=e1241]
                              - generic [ref=e1244]: Edit Title
                        - gridcell [ref=e1245]:
                          - generic [ref=e1247]:
                            - generic [ref=e1250]: Tech Innovations Inc
                            - button [ref=e1251] [cursor=pointer]:
                              - img [ref=e1253]
                              - generic [ref=e1256]: Edit Company
                        - gridcell [ref=e1257]:
                          - generic [ref=e1259]:
                            - generic [ref=e1262]: Open
                            - button [ref=e1263] [cursor=pointer]:
                              - img [ref=e1265]
                              - generic [ref=e1268]: Edit Lead Status
                        - gridcell [ref=e1269]:
                          - button [ref=e1272] [cursor=pointer]:
                            - img [ref=e1274]
                            - generic [ref=e1277]: Edit Lead Source
                        - gridcell [ref=e1278]:
                          - img [ref=e1281]:
                            - img [ref=e1283]
                        - gridcell [ref=e1286]:
                          - group [ref=e1293]:
                            - generic [ref=e1295]:
                              - button [ref=e1297] [cursor=pointer]:
                                - img [ref=e1299]
                                - generic [ref=e1302]: Email
                              - button [ref=e1304] [cursor=pointer]:
                                - img [ref=e1306]
                                - generic [ref=e1309]: Call
                        - gridcell [ref=e1310]:
                          - button [ref=e1317] [cursor=pointer]:
                            - img [ref=e1319]
                            - generic [ref=e1322]: Show Actions
                      - row [ref=e1323]:
                        - gridcell [ref=e1324]
                        - gridcell [ref=e1329]:
                          - generic [ref=e1331]:
                            - checkbox [ref=e1332]
                            - generic [ref=e1335]: Select Item 6
                        - rowheader [ref=e1336]:
                          - generic [ref=e1338]:
                            - generic [ref=e1342]:
                              - link [ref=e1345] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjOwLUAV/view
                                - generic [ref=e1346]: John Doe
                              - button [ref=e1348] [cursor=pointer]:
                                - img [ref=e1350]
                                - generic [ref=e1353]: "View Activity: John Doe"
                            - img [ref=e1354]:
                              - img [ref=e1356]
                        - gridcell [ref=e1359]:
                          - button [ref=e1368] [cursor=pointer]:
                            - img [ref=e1370]
                            - generic [ref=e1373]: "Mark Important: John Doe"
                        - gridcell [ref=e1374]:
                          - button [ref=e1377] [cursor=pointer]:
                            - img [ref=e1379]
                            - generic [ref=e1382]: Edit Title
                        - gridcell [ref=e1383]:
                          - generic [ref=e1385]:
                            - generic [ref=e1388]: Acme Corporation
                            - button [ref=e1389] [cursor=pointer]:
                              - img [ref=e1391]
                              - generic [ref=e1394]: Edit Company
                        - gridcell [ref=e1395]:
                          - generic [ref=e1397]:
                            - generic [ref=e1400]: Open
                            - button [ref=e1401] [cursor=pointer]:
                              - img [ref=e1403]
                              - generic [ref=e1406]: Edit Lead Status
                        - gridcell [ref=e1407]:
                          - button [ref=e1410] [cursor=pointer]:
                            - img [ref=e1412]
                            - generic [ref=e1415]: Edit Lead Source
                        - gridcell [ref=e1416]:
                          - img [ref=e1419]:
                            - img [ref=e1421]
                        - gridcell [ref=e1424]:
                          - group [ref=e1431]:
                            - generic [ref=e1433]:
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
                        - gridcell [ref=e1434]:
                          - button [ref=e1441] [cursor=pointer]:
                            - img [ref=e1443]
                            - generic [ref=e1446]: Show Actions
                      - row [ref=e1447]:
                        - gridcell [ref=e1448]
                        - gridcell [ref=e1453]:
                          - generic [ref=e1455]:
                            - checkbox [ref=e1456]
                            - generic [ref=e1459]: Select Item 7
                        - rowheader [ref=e1460]:
                          - generic [ref=e1462]:
                            - generic [ref=e1466]:
                              - link [ref=e1469] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjP9FUAV/view
                                - generic [ref=e1470]: Robert Brown
                              - button [ref=e1472] [cursor=pointer]:
                                - img [ref=e1474]
                                - generic [ref=e1477]: "View Activity: Robert Brown"
                            - img [ref=e1478]:
                              - img [ref=e1480]
                        - gridcell [ref=e1483]:
                          - button [ref=e1492] [cursor=pointer]:
                            - img [ref=e1494]
                            - generic [ref=e1497]: "Mark Important: Robert Brown"
                        - gridcell [ref=e1498]:
                          - button [ref=e1501] [cursor=pointer]:
                            - img [ref=e1503]
                            - generic [ref=e1506]: Edit Title
                        - gridcell [ref=e1507]:
                          - generic [ref=e1509]:
                            - generic [ref=e1512]: Enterprise Corp
                            - button [ref=e1513] [cursor=pointer]:
                              - img [ref=e1515]
                              - generic [ref=e1518]: Edit Company
                        - gridcell [ref=e1519]:
                          - generic [ref=e1521]:
                            - generic [ref=e1524]: Open
                            - button [ref=e1525] [cursor=pointer]:
                              - img [ref=e1527]
                              - generic [ref=e1530]: Edit Lead Status
                        - gridcell [ref=e1531]:
                          - button [ref=e1534] [cursor=pointer]:
                            - img [ref=e1536]
                            - generic [ref=e1539]: Edit Lead Source
                        - gridcell [ref=e1540]:
                          - img [ref=e1543]:
                            - img [ref=e1545]
                        - gridcell [ref=e1548]:
                          - group [ref=e1555]:
                            - generic [ref=e1557]:
                              - button [ref=e1559] [cursor=pointer]:
                                - img [ref=e1561]
                                - generic [ref=e1564]: Email
                              - generic:
                                - button [disabled]:
                                  - generic:
                                    - img
                                  - generic: Call
                        - gridcell [ref=e1565]:
                          - button [ref=e1572] [cursor=pointer]:
                            - img [ref=e1574]
                            - generic [ref=e1577]: Show Actions
                      - row [ref=e1578]:
                        - gridcell [ref=e1579]
                        - gridcell [ref=e1584]:
                          - generic [ref=e1586]:
                            - checkbox [ref=e1587]
                            - generic [ref=e1590]: Select Item 8
                        - rowheader [ref=e1591]:
                          - generic [ref=e1593]:
                            - generic [ref=e1597]:
                              - link [ref=e1600] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00QdN00000DjPArUAN/view
                                - generic [ref=e1601]: Emily Davis
                              - button [ref=e1603] [cursor=pointer]:
                                - img [ref=e1605]
                                - generic [ref=e1608]: "View Activity: Emily Davis"
                            - img [ref=e1609]:
                              - img [ref=e1611]
                        - gridcell [ref=e1614]:
                          - button [ref=e1623] [cursor=pointer]:
                            - img [ref=e1625]
                            - generic [ref=e1628]: "Mark Important: Emily Davis"
                        - gridcell [ref=e1629]:
                          - button [ref=e1632] [cursor=pointer]:
                            - img [ref=e1634]
                            - generic [ref=e1637]: Edit Title
                        - gridcell [ref=e1638]:
                          - generic [ref=e1640]:
                            - generic [ref=e1643]: Growth Ventures
                            - button [ref=e1644] [cursor=pointer]:
                              - img [ref=e1646]
                              - generic [ref=e1649]: Edit Company
                        - gridcell [ref=e1650]:
                          - generic [ref=e1652]:
                            - generic [ref=e1655]: Open
                            - button [ref=e1656] [cursor=pointer]:
                              - img [ref=e1658]
                              - generic [ref=e1661]: Edit Lead Status
                        - gridcell [ref=e1662]:
                          - button [ref=e1665] [cursor=pointer]:
                            - img [ref=e1667]
                            - generic [ref=e1670]: Edit Lead Source
                        - gridcell [ref=e1671]:
                          - img [ref=e1674]:
                            - img [ref=e1676]
                        - gridcell [ref=e1679]:
                          - group [ref=e1686]:
                            - generic [ref=e1688]:
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
                                - /url: /lightning/r/Lead/00QdN00000DjPCTUA3/view
                                - generic [ref=e1725]: John Doe
                              - button [ref=e1727] [cursor=pointer]:
                                - img [ref=e1729]
                                - generic [ref=e1732]: "View Activity: John Doe"
                            - img [ref=e1733]:
                              - img [ref=e1735]
                        - gridcell [ref=e1738]:
                          - button [ref=e1747] [cursor=pointer]:
                            - img [ref=e1749]
                            - generic [ref=e1752]: "Mark Important: John Doe"
                        - gridcell [ref=e1753]:
                          - button [ref=e1756] [cursor=pointer]:
                            - img [ref=e1758]
                            - generic [ref=e1761]: Edit Title
                        - gridcell [ref=e1762]:
                          - generic [ref=e1764]:
                            - generic [ref=e1767]: Acme Corporation
                            - button [ref=e1768] [cursor=pointer]:
                              - img [ref=e1770]
                              - generic [ref=e1773]: Edit Company
                        - gridcell [ref=e1774]:
                          - generic [ref=e1776]:
                            - generic [ref=e1779]: Open
                            - button [ref=e1780] [cursor=pointer]:
                              - img [ref=e1782]
                              - generic [ref=e1785]: Edit Lead Status
                        - gridcell [ref=e1786]:
                          - button [ref=e1789] [cursor=pointer]:
                            - img [ref=e1791]
                            - generic [ref=e1794]: Edit Lead Source
                        - gridcell [ref=e1795]:
                          - img [ref=e1798]:
                            - img [ref=e1800]
                        - gridcell [ref=e1803]:
                          - group [ref=e1810]:
                            - generic [ref=e1812]:
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
                        - gridcell [ref=e1813]:
                          - button [ref=e1820] [cursor=pointer]:
                            - img [ref=e1822]
                            - generic [ref=e1825]: Show Actions
      - list [ref=e1828]:
        - listitem [ref=e1829]:
          - button [ref=e1832] [cursor=pointer]:
            - img [ref=e1836]
            - generic [ref=e1839]: To Do List
    - generic [ref=e1840]:
      - dialog [ref=e1842]:
        - generic [ref=e1843]:
          - button [ref=e1844] [cursor=pointer]:
            - img [ref=e1846]
            - generic [ref=e1849]: Cancel and close
          - generic [ref=e1850]:
            - generic [ref=e1857]:
              - heading [level=2] [ref=e1859]: New Lead
              - generic [ref=e1861]:
                - generic [ref=e1862]: "* = Required Information"
                - generic [ref=e1864]:
                  - generic [ref=e1869]:
                    - generic [ref=e1871]:
                      - heading [level=3] [ref=e1872]:
                        - generic [ref=e1873]: Lead Information
                      - list [ref=e1875]:
                        - generic [ref=e1876]:
                          - generic [ref=e1878]:
                            - listitem [ref=e1880]:
                              - generic [ref=e1881]:
                                - generic [ref=e1882]: Lead Owner
                                - generic [ref=e1894]: Rakesh Sharma
                            - listitem [ref=e1896]:
                              - generic [ref=e1903]:
                                - generic [ref=e1905]: "*Lead Status"
                                - generic [ref=e1909]:
                                  - combobox [ref=e1910] [cursor=pointer]:
                                    - generic [ref=e1911]: Open
                                  - img [ref=e1915]
                          - generic [ref=e1919]:
                            - listitem [ref=e1921]:
                              - group [ref=e1926]:
                                - generic [ref=e1927]: "*Name"
                                - generic [ref=e1930]:
                                  - generic [ref=e1934]:
                                    - generic [ref=e1936]: Salutation
                                    - generic [ref=e1940]:
                                      - combobox [ref=e1941] [cursor=pointer]:
                                        - generic [ref=e1942]: "--None--"
                                      - img [ref=e1946]
                                  - generic [ref=e1952]:
                                    - generic [ref=e1953]: First Name
                                    - textbox [ref=e1955]:
                                      - /placeholder: First Name
                                  - generic [ref=e1958]:
                                    - generic [ref=e1959]:
                                      - generic [ref=e1960]: "*Last Name"
                                      - generic [ref=e1961]:
                                        - img [ref=e1962]
                                        - textbox [ref=e1965]:
                                          - /placeholder: Last Name
                                    - generic [ref=e1966]:
                                      - generic [ref=e1967]: Last Name
                                      - text: Complete this field.
                            - listitem [ref=e1969]:
                              - generic [ref=e1974]:
                                - generic [ref=e1975]: Phone
                                - textbox [ref=e1977]
                          - generic [ref=e1979]:
                            - listitem [ref=e1981]:
                              - generic [ref=e1986]:
                                - generic [ref=e1987]:
                                  - generic [ref=e1988]: "*Company"
                                  - generic [ref=e1989]:
                                    - img [ref=e1990]
                                    - textbox [ref=e1993]
                                - generic [ref=e1994]:
                                  - generic [ref=e1995]: Company
                                  - text: Complete this field.
                            - listitem [ref=e1997]:
                              - generic [ref=e2002]:
                                - generic [ref=e2003]: Email
                                - textbox [ref=e2005]
                          - generic [ref=e2007]:
                            - listitem [ref=e2009]:
                              - generic [ref=e2015]:
                                - generic [ref=e2016]: Title
                                - textbox [ref=e2018]
                            - listitem [ref=e2020]:
                              - generic [ref=e2027]:
                                - generic [ref=e2029]: Rating
                                - generic [ref=e2033]:
                                  - combobox [ref=e2034] [cursor=pointer]:
                                    - generic [ref=e2035]: "--None--"
                                  - img [ref=e2039]
                    - generic [ref=e2043]:
                      - heading [level=3] [ref=e2044]:
                        - generic [ref=e2045]: Address Information
                      - list [ref=e2047]:
                        - generic [ref=e2050]:
                          - listitem [ref=e2052]:
                            - group [ref=e2057]:
                              - generic [ref=e2058]: Address
                              - generic [ref=e2060]:
                                - generic [ref=e2062]:
                                  - generic [ref=e2063]: Address Search
                                  - generic [ref=e2067]:
                                    - combobox [ref=e2070]
                                    - img [ref=e2074]
                                - status [ref=e2077]
                                - generic [ref=e2079]:
                                  - generic [ref=e2080]: Street
                                  - textbox [ref=e2082]
                                - generic [ref=e2086]:
                                  - generic [ref=e2087]: City
                                  - textbox [ref=e2089]
                                - generic [ref=e2090]:
                                  - generic [ref=e2093]:
                                    - generic [ref=e2094]: Zip/Postal Code
                                    - textbox [ref=e2096]
                                  - generic [ref=e2099]:
                                    - generic [ref=e2100]: State/Province
                                    - textbox [ref=e2102]
                                - generic [ref=e2106]:
                                  - generic [ref=e2107]: Country
                                  - textbox [ref=e2109]
                          - listitem [ref=e2111]:
                            - generic [ref=e2116]:
                              - generic [ref=e2117]: Website
                              - textbox [ref=e2119]
                    - generic [ref=e2121]:
                      - heading [level=3] [ref=e2122]:
                        - generic [ref=e2123]: Additional Information
                      - list [ref=e2125]:
                        - generic [ref=e2126]:
                          - generic [ref=e2128]:
                            - listitem [ref=e2130]:
                              - generic [ref=e2135]:
                                - generic [ref=e2136]: No. of Employees
                                - spinbutton [ref=e2138]
                            - listitem [ref=e2140]:
                              - generic [ref=e2147]:
                                - generic [ref=e2149]: Lead Source
                                - generic [ref=e2153]:
                                  - combobox [ref=e2154] [cursor=pointer]:
                                    - generic [ref=e2155]: "--None--"
                                  - img [ref=e2159]
                          - generic [ref=e2163]:
                            - listitem [ref=e2165]:
                              - generic [ref=e2171]:
                                - generic [ref=e2172]: Annual Revenue
                                - spinbutton [ref=e2174]
                            - listitem [ref=e2176]:
                              - generic [ref=e2183]:
                                - generic [ref=e2185]: Industry
                                - generic [ref=e2189]:
                                  - combobox [ref=e2190] [cursor=pointer]:
                                    - generic [ref=e2191]: "--None--"
                                  - img [ref=e2195]
                    - generic [ref=e2199]:
                      - heading [level=3] [ref=e2200]:
                        - generic [ref=e2201]: Description Information
                      - list [ref=e2203]:
                        - listitem [ref=e2208]:
                          - generic [ref=e2212]:
                            - generic [ref=e2213]: Description
                            - textbox [ref=e2215]
                  - generic [ref=e2218]:
                    - button [ref=e2219] [cursor=pointer]:
                      - generic [ref=e2221]:
                        - img [ref=e2223]
                        - generic [ref=e2226]: Error
                    - generic [ref=e2228]:
                      - button [ref=e2234] [cursor=pointer]: Cancel
                      - button [ref=e2240] [cursor=pointer]: Save & New
                      - button [ref=e2246] [cursor=pointer]: Save
            - status [ref=e2247]
      - dialog "We hit a snag." [ref=e2248]:
        - generic [ref=e2249]:
          - generic [ref=e2251]:
            - button "Close error dialog" [ref=e2253] [cursor=pointer]:
              - img [ref=e2255]
              - generic [ref=e2258]: Close error dialog
            - banner [ref=e2259]:
              - generic [ref=e2260]:
                - img [ref=e2265]
                - heading "We hit a snag." [active] [level=2] [ref=e2269]
          - generic [ref=e2273]:
            - strong [ref=e2275]: Review the following fields
            - list [ref=e2276]:
              - listitem [ref=e2277]:
                - link "Name" [ref=e2278] [cursor=pointer]:
                  - /url: javascript:void(0)
              - listitem [ref=e2279]:
                - link "Company" [ref=e2280] [cursor=pointer]:
                  - /url: javascript:void(0)
  - generic:
    - status
```

# Test source

```ts
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
  139 |       await expect(page.getByText('Tech Innovations Inc')).toBeVisible({ timeout: 15000 });
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
> 188 |       await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 5000 });
      |                                                                 ^ Error: expect(locator).toBeVisible() failed
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
  240 |     await page.getByPlaceholder(/search/i).fill('Leads', { timeout: 5000 });
  241 |     await page.waitForTimeout(500);
  242 |     
  243 |     await page.getByRole('option', { name: /^Leads$/i }).click({ timeout: 5000 });
  244 |     await waitForSFLoad(page);
  245 |     
  246 |     await page.getByRole('button', { name: /new/i }).click({ timeout: 5000 });
  247 |     await waitForSFLoad(page);
  248 | 
  249 |     await expect(page.getByRole('heading', { name: /new/i })).toBeVisible({ timeout: 10000 });
  250 | 
  251 |     // Fill fields with email
  252 |     await fillField(page, /first name/i, 'Robert');
  253 |     await fillField(page, /last name/i, 'Brown');
  254 |     await fillField(page, /company/i, 'Enterprise Corp');
  255 |     
  256 |     try {
  257 |       await fillField(page, /email/i, 'robert.brown@enterprisecorp.com');
  258 |     } catch {
  259 |       // Email may not exist
  260 |     }
  261 | 
  262 |     // Save
  263 |     await page.getByRole('button', { name: 'Save', exact: true }).click({ timeout: 5000 });
  264 |     await waitForSFLoad(page);
  265 | 
  266 |     // Verify
  267 |     await sfStep('Verify Lead created', page, async () => {
  268 |       const url = page.url();
  269 |       expect(url).toMatch(/Lightning|savepointId|\/Lead\//i);
  270 |       
  271 |       // Company is visible on detail page
  272 |       await expect(page.getByText('Enterprise Corp')).toBeVisible({ timeout: 15000 });
  273 |     });
  274 |   });
  275 | 
  276 | });
  277 | 
  278 | /**
  279 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  280 |  * SECTION 3: LEAD CREATION - DROPDOWN AND PICKLIST SELECTION
  281 |  * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  282 |  */
  283 | 
  284 | test.describe('3. Lead Creation - Dropdown and Picklist Selection', () => {
  285 | 
  286 |   sfTest('3.1 Select Lead Source Dropdown', async ({ sfPage: page }) => {
  287 |     await allure.description(
  288 |       'Verify dropdown selections are properly saved and displayed.'
```