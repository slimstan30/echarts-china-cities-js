(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('嘉兴轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"嘉兴"},"geometry":{"type":"MultiPolygon","coordinates":[["@@`iLKvuVSIAKEICCEEGGQM]@EEQG_Igwi[_KOKUCISMEEKGQCSCwO[KMGiUUK{QQCSEiImIq@]BG@wRIBKDIDSJUNABGHGHCLELAN@^@\\@RAZ@BAFABADABCDABCBA@SFODE@EBGBG@GBCB[DCBM@C@Y@C@W@E@[AQ@Y@O@k@E@C@MBe@E@M@A@UCUCWCGAGAC@GAGCEAAAA@CCAAAAIUGQACGSAAGQAA@AIUQHSRWTEB@BA@ADDLDJCBBFJNDFB@PBD@BBBBAXA@CAC@CAGAG@EAA@A@A@CAAAA@C@AAA@C@CAAAA@CAC@AAA@C@E@CAA@AA@B@BA@@A@AAA@A@AA@@AA@C@A@@BB@@BA@@BA@@BCB@B@B@DEA@B@BA@@A@A@AA@@AAB@BC@A@A@CBABC@ABA@A@@A@AABA@A@@BA@@BA@@B@B@B@B@B@BA@@BB@@BA@@BB@AF@BA@ADABA@A@@AC@A@AA@BA@AAA@@D@B@BBBBBB@BBBBABBBBCBAB@B@@BB@BB@BB@@BB@B@BBB@@D@BA@@BD@@BBBBBD@@B@BB@B@@B@BB@B@B@B@@DB@@B@BB@@BA@@BA@@B@B@B@BABABB@BB@BB@B@B@B@@BA@@BB@ADB@BBB@B@B@AD@B@D@BB@@BB@@B@BA@ABB@@B@B@HA@@BA@A@@B@D@DADB@@B@BB@@BA@@B@B@DBBB@B@@AB@B@@BB@@BA@A@@B@B@BABBBA@ABABA@A@A@EE@BA@A@@A@AA@@BA@A@A@@B@BB@@BB@ADA@@B@BA@@B@B@BB@ABB@B@@B@B@B@B@BA@@B@BB@@B@BA@@BB@@B@BA@@B@B@B@BA@@B@B@BABB@@B@BAAAD@B@BA@@BAAAD@BB@B@@H@BAB@B@BA@A@@D@BAB@BC@E@A@A@@AA@A@A@A@@BA@C@AAA@C@C@AB@B@BBBA@BB@D@B@BA@@B@BB@@BB@@BAB@BB@B@@B@BB@@F@BA@A@CJ@B@BAA@D@BBAB@B@@BA@@BB@@D@BAD@B@BAB@B@B@BAAAB@BAB@B@BB@@BB@@AB@@AB@@BB@@BB@@CB@B@B@BB@BB@@B@B@BB@B@B@@BB@B@B@@BBBB@@BD@@BB@@BABB@B@@B@BB@@B@F@BA@ADA@CAA@@BCDABABCDEDGFAB@BBA@B@BB@ABB@@BF@@DB@@AB@@DC@A@AD@BB@D@B@@BABA@@BABBBF@B@@BBBB@BBBBB@AAB@@AB@D@@BB@@AB@@AB@@BDA@BD@D@BBH@B@B@B@@B@BD@B@B@@B@BB@@B@BB@D@ABBBA@@BB@ABA@@BA@A@@B@BA@@AA@A@@B@BB@B@D@BAD@@B@B@D@BB@@B@BAB@BA@@BB@B@@B@BB@@BB@@B@BB@@DA@@BA@@BB@B@@D@B@B@DA@A@BFA@A@@DC@A@@DDABBA@@DB@BADABB@AB@BB@AB@@B@BB@@FB@@BBA@B@BBBBCD@@CD@B@B@AA@AB@@AB@B@@AB@@CDA@AD@@B@B@BB@B@B@B@BBB@B@B@FAD@BD@BBB@D@BA@@B@B@D@B@BFBBBBAB@BBB@BAD@B@@BB@F@D@@BB@D@B@DAD@BABDBD@BBDDAHBD@B@B@B@@BD@BBD@BB@BB@BAB@D@BB@AB@B@B@B@@BB@@AB@@BB@@BB@B@@AB@@AB@@ABBB@B@B@AAB@B@@BADD@DAB@@B@BB@BAAAB@B@DF@B@BCBA@ABA@AB@BA@A@AB@BA@@B@BA@AA@AABAAAB@B@BB@B@B@@BAB@BA@@BB@@B@B@BB@B@@B@BD@@CF@B@B@D@B@B@B@@@B@@BBBB@@AB@@A@ABB@ABBBBD@BABBHHFFB@B@@BA@BBB@BA@BB@@B@BA@BFDFFHDHBB@BCBA@@BB@@B@B@BC@A@@BAB@BAB@B@BA@@B@BA@A@@AC@AFBDA@@BA@A@@B@BB@@B@B@B@BB@@BA@A@@B@BB@B@@BADAB@BADADBBD@B@B@F@D@BCB@B@B@BBB@D@B@BAB@BAB@DAB@BAD@B@DABAB@B@B@BDDBBDBBBBHJDDBBDFBDDFDD@BBBFFBDBBDHB@BDDDBDDDBFB@DFBDDFBDBDDBDFBDBBFFBBBB@B@DFFDBFDFBDFF@BBHFB@BDBDBBFDBBBBB@BABAD@B@BADAD@B@DAB@B@B@B@B@BAB@DBF@D@BBB@BBBBB@BBBBDBBBB@B@B@B@BAD@D@BAB@B@B@FBB@D@B@AEB@@AFADCD@@AB@B@B@B@@BAB@B@B@B@B@D@BB@B@B@@B@B@D@B@B@BBB@B@BB@BAB@@ABCBABDBBDDFHFJ@BDBB@B@FBBB@BBDBBBBB@@ABA@A@A@ABAHAFCAA@C@ADABBBABABAB@DBDDBDAFAB@BABAD@DBBBBH@D@JB@BAD@FAF@BAH@HAF@DBBBD@DBD@B@D@D@B@BAF@DAF@DADCHCHCBADCDCDAFA@GBIDGDBDFFDBBBBBDD@DB@BBDD@BDADCBADAB@BBBB@BBB@BBBB@BAFAD@DBF@D@F@D@DCDABADCBCDAF@D@F@BBB@DDBBBBDDDFBBDBDBFBH@FB@B@B@DABAF@D@B@D@BBBBD@D@BB@B@@ADAB@BBDDBDDBHBTDDBNBH@N@NBDAPETIBCBC@AB@@AB@B@@BB@@ABA@AB@B@BBB@BBBBB@@BB@@AB@BABA@AB@BBB@B@B@B@@AB@B@@BB@B@@B@D@B@BB@D@B@D@B@@BB@BBD@D@@BRHDBBNFB@LJ@B@B@P@@C@EBCFBFDD@PEBDDADBBADAHAD@@BGJABBB\\BDLEBBFCBBBB@BADBB@B@B@FABIBCBAF@BAEEBAD@D@F@F@B@H@J@@ABAB@D@B@B@B@B@CABEDCAABC@CA@@CB@@A@ECABCHBBEAABABCB@BI@A@A@ABAB@B@B@@CCA@A@A@AA@@AC@@AA@A@E@@AAABCA@@CD@@A@AACDGE@BGD@BGB@@KAABABCBCDA@A@CAG@E@S@E@A@A@AAAB@@AA@@AB@B@D@B@B@@EA@@AAAA@ABC@@CC@A@A@@AA@AA@C@ACE@AB@BA@A@C@AB@XADAB@B@@A@AAC@ADAB@B@H@B@BABABABAA@ACFAAAA@@ADACACDEEFAACA@CEDCCCB@ACABA@@ABACCHCCCC@ABA@AC@AC@ACAA@AA@A@A@@AAAAACBAC@ABAA@ACA@A@A@AA@ACC@AAAD@DAGEBAB@DA@ACC@ABAD@B@BB@BA@BBBADFA@BDB@BBB@@A@ADAB@@BFFHHDBB@BCJAJCFADAHIBEB@@ABA@A@ABC@AFBJBCHA@AB@BA@BC@AA@A@A@ABDB@B@BBB@BB@@BABA@@BB@B@B@BBBCBAB@FAENJBJFLDAB@D@BADD@CDHDDBBBB@F@B@D@J@B@B@B@FBBBDBHDFDFB@AB@@A@AB@B@@AA@BADA@AD@BAFDF@BD@BB@B@@ABCJCBBB@BA@ABAEGAA@ABCACCCB@BBBA@BF@DAD@D@BABDBABABAACBA@CDA@DBB@A@A@A@A@CA@@AAA@AA@AA@AAA@AAA@AA@@AAA@A@A@AAA@A@A@AAC@A@A@A@A@AAC@A@A@A@A@A@A@C@A@AA@A@A@C@A@A@A@@AA@@A@A@ADABA@ABAB@@A@AB@F@B@B@B@@AD@@AH@B@BBDB@A@AB@BBD@BB@BD@D@BAD@D@DABABBB@BAD@@GBBBBB@D@BBD@B@@BB@B@@AAAB@BAB@BA@AB@DBDBB@B@BBB@DBBB@B@BBBB@BAB@@BBB@ABABABADCBCDBD@ADAF@DBB@B@BB@FBDBH@H@H@BA@ABCBABCBCBADBB@@C@A@AB@BAAABCBABCBC@EBE@C@AFADAAABA@BD@@ABBDAAABABBDAHCLEDAB@BADEBCDAFEB@@BB@DA@AB@@AAA@ABA@AAAB@@AA@DC@AACAA@A@C@AA@CABEAAAA@A@A@ABAB@@A@A@A@ABAD@@AA@BA@AA@@AB@@AB@@GBIDUC@[CCCYeCEEEOIUG]GcEaO]SCAEACCAC@E@G@A@A@AA@AAB@@A@AAA@AAAA@A@@B@BBB@BB@@BEAOGC@ABE@ECCAEEKGOCQGQEKAwW\\k"],["@@A@@BB@@A"],["@@@AA@A@AB@BB@DA"],["@@A@@AA@ABBBB@B@@A"],["@@ABB@@A"]],"encodeOffsets":[[[123978,31276]],[[124038,31326]],[[124039,31322]],[[124037,31313]],[[123195,31303]]]}}],"UTF8Encoding":true});}));