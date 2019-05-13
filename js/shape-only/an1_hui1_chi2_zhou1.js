(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('池州轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"池州"},"geometry":{"type":"Polygon","coordinates":["@@HBJHFDDDDDHFHHFFFHDHFJFFBLDJBNBB@B@FDL@LBDBFDJFJBLBJ@P@D@DAHCJAHABCFEFCFIHADCDMJIJEJAL@H`PPFHDdPFDPH^RLHPHPHRDPFPFFBNFZFVDjDNADADCBADADAPEB@VETCLAL@HAF@J@J@D@J@B@D@B@DBHBHFDBFB@BBBBBDFDD@BDDBDBD@DBBBD@BBDBBBB@BBDBJBJFBBFHDbNJDXLLDTHbNbJLDNDVFBJBRBBBD@B@NDNJNLJHZT@CAM@ACE@CAABAFBJ@L@J@B@FBD@DDNJBBHFFDBFB@B@BA@ABCBAJBB@BABC@EDEBC@GAA@CAAAAEACA@C@ABADADABADAF@@A@A@ABAAAACCC@A@A@AB@BAB@NBN@B@FBJBB@B@BAB@@A@A@CAACIAA@A@AB@BAJ@NAB@B@@BBB@D@B@BBBB@B@@ABA@B@B@BB@@BB@B@B@B@@BB@B@@BB@BBB@B@B@B@B@DBHDHDJDDBHBFDFF@J@FBFFHJFFFJFJFFFFDFFFBJDHBD@D@J@JBJBLDHDFDFBFFBDFDDDDFDBHDF@HABAFIDEDCDCBCBCDAFDBDBDBDFFHFFHJJFBNFBCBCCC@EDADA@GCEIKKKEGEGEGCE@CFCH@J@B@JADCFCDIBABC@AFCDAL@HAJALAJ@HAHADAFAHCFCHEDGFEJEFANGDAACA@@ADAB@@AB@D@BABAB@B@DB@A@A@ADAB@@BB@BDD@FEB@BAHBABBDD@DBFBBGFAB@D@BA@CBCACC@AEJCFIFGHBF@DCBEDACABI@GDENAAEEGIEEGCE@GBCGGI@EGCEACACAACCAEGAACDCBEAGAE@GIIAAMGAAGCGEAGCICICGACACECIAIBIAICIGEEEGEEACCAAAECECIAEAEAEAG@G@IAGCGEGI@IDIBI@A@GAGAGACCGCCGGCGCCEGMGGGCGAACGACCICIAKAAAIAK@EBCAM@EAAAMAGAGAE@ACI@C@E@EBCBGFGFCDEHABG@C@KEEAACCGEAAACGCCCE@ICGCECEECAPOFABAFGBCFM@AB@BABA@ABABAACB@BAAAABCBA@AA@AE@AAACC@A@A@A@@ABABADAFA@A@AE@@A@A@A@A@AA@A@G@C@A@A@@AAA@ACCCC@AAAKAAA@CDGHE@AAAECECG@G@KBG@CCBEBG@E@GBGFGAAEAKCEAE@K@E@IAEAKAMCGCEEGIKIKKAIBKDGFCJAHAHANEFALAFE@IEICIAGCGK@OIOIK@I@EEIEIKKGIEGCICGCMAOAO@KAM@KAKCOCWEIAAACAA@E@A@A@A@A@A@A@CAA@BCACA@EAEA@AC@AAAACAA@A@AABABADA@ABA@AAAAAA@@AA@CAC@A@E@C@@CHE@AA@A@ACA@AAB@@ADAB@BCB@@AA@@AAA@BCBAB@AA@@B@BA@@A@AA@A@C@I@A@ABCBABCHI@IAAECKAACABC@ACACDCCAAA@C@@DADA@EBA@CDCDCDABC@A@@BA@@B@B@FAD@B@B@BAB@B@B@BABBB@BABADAAA@A@AAA@C@CBAAA@A@@AB@B@ACA@@BG@ECA@AAAAAAA@@ACEAAA@@AA@C@E@A@CAA@A@A@AA@CA@AAA@@AB@@C@A@AA@EAA@C@A@@AA@@AHAHAD@B@@A@A@AACA@@A@ABC@A@A@AAA@AA@AAA@AAA@AACCA@ABABBD@B@BA@A@A@@AA@AB@BB@BDGCAB@B@BBB@BB@BBBB@B@B@DABC@EBA@AAC@AB@B@B@B@BCB@BAB@BA@C@@AB@ACBA@AC@AAA@@ACCEAA@AA@A@A@AAGB@@CDCBABAB@B@BBBA@AAA@A@AHDB@B@DBB@@A@AA@@AA@AAACA@AAAAAAAABCBGBA@A@ABEBEBGAGDAKEKEKGICKEECIAMAM@KBIBIBI@KBIACAGGCECEECCCIAKAE@KBGDGFOHUBMCAACCCGAEAG@EACCCGAIFI@IAIAI@KAGAICGEECICEAC@MDG@I@EEICGCIAEAMCECIAGCGAMDYEI@OAICKAKAE@C@GAECAAAECI@I@GBA@C@A@IBQBOBGE@EAA@GCMEI@MBKCECCCMAIEIAA@KGICGCCCEEAE@G@E@EBCDGDKAI@EA@AEECIEGAEAICECECCGEGGEEGEAIAO@CACAAC@CBEDEDABCHAHCFEDCBEHCHAVERE@AF@LGDEDGBEDIBKAEEEGEECICECIIGEAG@GHEJEHKDGAGCIEGGGKGOIOGCACACAEAGAGAG@AAEAGEGEGCGAKAEAI@ABE@IBOBKDC@G@A@G@EAKCECGCACEECEAEA@@ECEEECCECGCGAIAIAI@GAICGCGCGCGEKIMEOIOGIEKCGCGEGGCGCEEEEGGGEEOWCAAAEA@AA@CACCCAIAMCC@EAA@K@KBGBA@C@A@A@E@GBCDA@AAA@AAA@A@@BA@A@@BA@@B@B@B@BA@@B@B@B@B@BBBBD@B@BBBBB@BBDB@@BBB@BABA@A@A@A@A@ABA@@BA@@BA@A@A@A@@AA@AA@AA@A@ABEDEFEBECGIECAAC@GAGEIQEICEEEEAE@@BAB@BBBAB@B@B@BBB@B@B@BABA@A@@BB@@BBB@B@BA@@B@BAB@BA@A@@BA@@B@BB@@B@BA@A@ABA@@BA@A@A@ABA@ABA@CBA@ABA@@BMFCBCDA@CHAHEFCBADEDGFEFGDIFEDEDA@EFAH@BBFFHDHHFFFVRFDFFBH@HAB@BEFGFMCS@CDAH@D@BDDDBHBDBJBFFBHDD@DDFDHFJBBDH@BDHBDDBBBFBLDB@DBBBFDJPFHBDJFBFFDDBFDLBLJDJBHBDDJ@BHHFFLJH@NADCFEDCDAFALBFDDBDDFDFFHDLFFHBBDFDDBFFNLPDFBDBBJHHDFFDDHHB@HFJJDFBBFFFJFFHHDDFFHLBDBJDH@DFJFR@H@B@FBHDFDFDHBJ@HAFAFAFABABADCDCDCD@BIFQJGDCDGAA@CAGCEEEAECA@CAAAA@CBC@A@G@AE@C@C@A@ADA@A@AAAA@A@ABA@CHA@@B@B@B@B@B@B@BAB@B@B@DBB@BCBBB@B@B@B@DBBB@@BADBB@B@DAD@B@BAB@B@BBDDD@FADC@E@GCGCICGCEACAC@A@AB@BAJABCDCHEJEJENAHCBAAI@CDCBCD@DAFAHCFCDC@IAGBKPPLLHLHHDBBJJHHXVBBFF^ZFFFDLPRVNRHJNXLTBDBDDFBD@HFX@BDNFZ^dTRBBNJLFFDBBNHHFHPBD@DBDBDBTBNABALADAFGTADCFADCHENA@AFG^ADAHAD@DCJIX@DELCLAFCNAP@DDHDHAF@D@NBJHFJDLADELM\\VFDFBDB^F^PTPDDBBRTFDLJHFHFNLPDPFD@B@B@D@D@B@B@J@B@B@B@D@B@D@B@F@D@B@J@B@F@B@D@D@PBJ@D@L@P@N@D@L@NAF@D@XEFCHCFCLGJEJCFCHCLCHAPENANBBB","@@EDIDG@G@EAECEEACAACECGCEOIG@EC@EAACAE@EAEEG@GCAC@EBEDEH@FADE@CEECC@A@EAACCEAG@ACACAC@CDAFBJ@J@HAJEJEF@FBPJJFFD@DKLAHBF@BFFHBJBDDDJDJDFDBNBBDDFDF@J@HAHAH@BCF","@@@B@DAD@B@BA@CAC@A@ABC@AA@A@CAA@ABAA@@AA@@ABABBB@D@B@AB@BBAHCB@@BDD","@@ABBBAB@B@B@BA@@B@BA@@B@B@B@DA@A@AAA@A@@A@ABC@A@ABABABA@I@AB@BB@BB@BB"],"encodeOffsets":[[120013,31200],[120139,31223],[119519,30404],[119508,30411]]}}],"UTF8Encoding":true});}));