(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('马鞍山轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"马鞍山"},"geometry":{"type":"Polygon","coordinates":["@@HCD@B@BAF@DBD@DBB@B@BBB@BA@A@A@CB@@ABCBCB@@ABAB@@AB@B@@AB@B@B@B@B@B@@AB@BAB@B@@AB@B@B@B@@BB@B@@BB@B@@BB@B@@BB@B@@BB@B@B@B@@AB@@A@AB@@ABA@AB@@BB@B@B@B@B@BABA@A@AA@A@A@A@A@A@A@A@CG@A@A@AB@@A@AA@A@A@A@@AA@A@A@A@A@A@AAA@@AA@A@@AA@AA@AA@@AB@B@B@B@B@B@B@B@@A@A@A@A@AB@@A@ABBB@B@@BB@B@@BB@@AB@@AB@@AB@BAB@BABA@AB@B@@B@BB@@B@B@BB@B@B@@AB@@ABA@A@AB@@A@AB@@AB@@AB@@BB@B@@BBB@BB@@BBB@BBB@BB@@BBBB@@BB@@BB@@BBBB@@BB@@BB@BBB@B@BA@ABA@ABAB@B@B@B@B@BBB@B@B@@BB@B@B@@BB@B@B@B@BBB@BB@BB@@BB@@BBBBB@BB@@BB@@BBBB@BBB@BBB@@BF@BAB@@AB@B@BAB@@ABABAB@@AB@B@B@@BB@BB@B@BB@BBB@@BBB@B@BB@B@B@B@B@B@B@B@B@B@B@B@B@BAB@B@@A@A@AB@@A@AB@@AB@BAB@B@@A@A@AAAA@@AA@@AA@A@@AA@@A@ABAB@@AB@B@BAB@B@B@@BB@@AB@@A@AAA@A@A@A@ABA@AB@BAB@B@B@B@B@B@B@B@B@B@B@B@B@B@BAB@B@B@B@B@B@B@B@B@@AB@BAB@@AB@B@BAB@B@@AB@@ABA@A@A@ABAA@@A@AB@BAB@B@@AB@@AB@BABAB@BABAAA@AA@A@A@A@AAAA@AA@AAA@@AA@@AA@AAAAAAAAA@@AA@A@A@A@A@A@A@A@@AA@@AA@@AA@@A@A@A@AB@@A@AA@@AA@AAAAAA@AA@@AA@@AA@@AA@A@@AA@AAA@@AA@A@@AA@AA@BA@A@@BA@AB@BA@@BA@A@A@@AAA@A@AA@@A@A@AA@@AAA@AB@@ABA@AB@@AB@@ABA@A@AB@@AA@@A@A@AAA@AAA@A@AA@@A@AA@@A@A@A@AB@@AB@B@B@B@B@B@@AB@@AB@@AB@@AB@@AB@B@@AB@B@B@B@B@B@B@B@B@B@B@B@@AB@B@B@B@B@B@B@B@@AB@B@BAB@B@@AB@B@BAB@B@B@B@B@B@@BB@BBB@@BB@B@@BB@B@B@BAB@B@B@@AB@B@B@@BB@B@@BB@B@@BB@BBB@B@B@@AB@BAB@BA@A@A@A@A@AB@@A@A@A@AB@@A@A@AB@B@B@B@B@B@@B@B@B@BB@BB@BBBB@@AB@B@BBB@@A@AB@@BB@B@BB@BABBB@B@B@BB@BBBB@BAB@B@B@BB@BBBBABA@@B@BBBB@BBB@@BB@ABB@@B@BAF@DBB@B@B@B@B@BBBBBBBBB@B@B@B@BB@@BB@B@B@B@B@B@B@@BB@@BB@B@@BB@B@B@@AB@B@BAB@B@BABBBBB@@BB@@BB@@BB@B@B@BAB@BAB@@AB@@AB@@AB@@AB@@AB@@AB@BABAB@@AB@B@B@B@B@@AB@B@@AB@B@@AB@@ABAAAA@@AA@@AA@@AAA@AA@@AA@@AA@A@A@A@@AA@A@A@@AA@A@A@@A@AB@@A@A@ABAB@@AB@BAB@@ABA@A@AAA@AAAB@@A@AB@@AB@@AB@BA@A@A@A@AA@@A@AA@@A@AB@B@B@B@BAB@@AB@@AB@@AB@@ABA@AB@@A@AB@@AB@@AB@B@B@B@B@B@B@B@B@B@BBB@B@BBB@@BB@BBBB@BAB@B@B@BB@BBB@B@B@B@B@B@B@B@BBB@B@B@B@B@BAB@B@B@BAB@B@@AB@B@@AB@DADAB@B@B@B@B@B@B@B@B@BA@AB@@ABA@AB@@A@ABA@ABAB@BABAB@@AB@@A@A@AB@@A@A@A@A@A@AB@@A@A@A@AA@@AA@A@@AA@A@@AA@A@AAA@@A@AB@@AB@B@B@@AB@B@B@B@B@B@B@B@B@B@B@@AB@@A@AAA@A@A@AA@@A@AA@@A@AAA@A@A@A@A@A@ABA@AB@@ABAB@@AB@@AB@@AB@BABAAA@AA@@AA@@A@AA@@AA@@AAA@A@AA@@A@A@A@A@A@A@A@A@A@A@A@A@AAA@A@AA@@A@A@A@A@A@A@A@AB@B@@BB@B@B@B@B@B@BAB@B@@ABA@AB@@A@A@A@A@A@A@A@A@A@A@A@AA@@A@A@A@A@A@A@A@A@AA@@A@A@A@A@A@A@AAA@A@A@A@A@AAA@A@AAA@A@A@AA@@A@A@AA@@A@A@AAA@A@A@AA@@A@AA@@A@AAA@AA@@A@AAA@AAA@A@AA@@A@AA@@A@A@AA@@A@A@A@AA@@A@A@A@AA@@A@A@A@AA@@A@A@A@AAA@AB@@A@A@A@A@A@A@A@A@A@AB@@A@A@A@A@A@A@A@A@A@A@AB@@AB@@AA@@AA@@AAA@AA@@AAA@AA@@AAA@AA@@A@AA@@AAA@AAA@AA@@AAA@AA@@AAA@AA@@A@AA@@CACAAA@A@ADA@AA@AA@AAA@@AA@@AA@@AA@@AA@ACA@AAA@AAA@A@GCIAAAEGEAECEACAE@CAA@C@AAA@C@GBC@A@A@CAC@A@A@CAAAA@GACAA@AAAAA@ABA@AB@BBDDFBH@D@BADADCB@DABAFA@A@@AA@A@A@AAA@E@AAOUACK_IWGKIOCKAA@AA@@AA@C@EAC@@AA@AACE@CA@AAGKAAA@C@ABE@CBC@A@AAECAAC@EAE@C@CBEBCAEAG@C@EBCACBEAC@CAECECEAE@EAC@E@E@C@A@AACAAAA@A@E@A@ABA@CBA@AAA@CAC@A@A@A@ABA@AAA@AAA@A@CAC@CAEAC@E@C@CB@B@BAB@BAD@B@B@BABA@CBA@A@ABAD@D@DADCBCBADCDCD@D@B@BBB@BB@@BADEDCDAD@BBD@BDDFHBDBBABABADADAFADEBC@EBAB@B@DBDABA@ABCBABCDGDCBABEDCBADAB@DBH@J@BBD@B@H@D@BA@CBM@@BABEDI@K@KAGCEGEG@GI@I@IDCDGFEBG@GCKEEC@B@B@BAD@B@B@D@D@DA@@B@BADADAFAF@DAFAFA@ADADAB@BABAD@BA@@B@BAD@DAD@DAD@DADAF@BAB@B@B@BB@DADAFJBNAH@BGFGDEBCJ@BCNAFAFEDA@QDQJMRUdCGAGCKCICGCIEICIAECIAC@ACGAECKGMAA@ACECEA@CGEEGECCEAEAE@E@E@@DAHAH@J@FBNBLBFBFBFBBBDAB@BCDAB@DA@A@ABEDAB@BAB@B@BA@A@@BB@B@BB@B@BADABABA@@AA@A@AB@E@ABE@A@A@AAAA@C@C@A@A@C@CBCBABCBCDCBGBC@ABEDCDA@A@A@@AA@A@@BA@@BB@@BB@B@B@@BAB@BABABA@A@A@@BA@@AA@@B@BA@@BA@A@@B@BABA@@AA@@BA@@BABA@AB@B@BAB@BCAA@@DAB@DOEGCC@A@GAIACAC@C@A@C@CBE@A@C@GAA@AB@BAB@BABAD@BCBEBMDE@@BC@AAA@C@KEKECCCAGGACCAECEAEAA@G@C@ABABCCCAAA@C@MDM@AHIBCBC@A@G@CBABC@ABC@ABAFAD@@A@AA@@A@ABA@CA@CBABA@@A@A@AA@ABABA@@BB@@BA@@BA@@ACAACCAMIA@AA@AB@@A@AAC@A@C@ADE@A@AAI@ABC@ADCB@D@F@D@B@FAB@DBD@B@DALCDAD@F@B@B@BA@ABAB@D@B@@AAAACCECECGAE@A@CDCDEDC@A@AAAAAAAK@OBE@N[HMBQFG@A@A@C@EACDEHIDYFKBMDIBMDcFUDKDKBCECCE@CBGFAH@JEPIHELABJBD@HBD@JBFBHDDDCBA@CBEBI@OHO@CDA@FRNBHH@B@BA@A@EBABBHABADEBEBAFAF@FCDCDC@IBGBCD@BBBHFDDBBBBBBBDBBB@@BABABEBE@E@EAGAEAC@CBKPEFABC@OGAB@D@B@BBB@BAHBBJF@B@D@BBBB@DBB@B@B@B@B@BBB@B@B@D@BB@B@B@DBBB@BBB@@BBBBB@B@B@BAB@AA@A@ABA@AB@D@B@DB@DAB@D@@BBD@B@BAB@F@F@DABCF@D@B@BB@DBBBBB@BAB@BCFBBBBBDB@BDBFBBDBDBB@BA`@EIBKXH@B@BBX@B@B@B@BGHCHCPDDEB@FFFC@SHCDGFKACBE@DDBB@D@B@B@BC@CBGBCBGFCDCFAFA@MLCJAXDBHNDJ@LCPABCD@B@D@F@DBBDDFBDDBBB@@BABABCBEBCBC@C@CBABCDCDAFBB@FDDBBBDDFLBCFCD@BC@EFCDAFADCHCLBFBDBDBFBFBDBF@FDFBDFHFBHDDBFDFBBDDBFDDD@D@BDFBFDFBDBHBHBJDJ@B@DBB@BDJ@FADAB@BDDBBB@DCBAB@JAH@JED@D@BABADGXWD@BAFABAB@DAB@BAD@HCFALCBAB@BAHADAB@BADAB@FAPEBAHAR@LDHDFGDIBEHAB@FDFBB@F@BB@D@H@H@B@BDDBD@BAD@BABBDBDDBJDDDHBDBJFR^JDXCJ@JFJD^ILEHAHDFDHHJXTLLBBDJ@VEVRTTbVHFVTB@^THF^L@F@F@LJXLFBPFDDBNHBBJH^HFDBBDBFLDBFBFDB@DBDB@DD@BBB@BBFBD@BBB@B@BBB@@ABA@ABAB@BAB@B@B@BA@ABA@A@A@A@AA@AAAAA@AAA@@A@AAA@A@A@A@AAA@A@A@A@A@A@AB@@AB@BADAHCHADCBEACC@G@A@C@@AAAAA@A@AA@BA@A@A@A@A@A@A@A@AAA@A@A@ABA@AB@@C@A@C@EAEACAAAAC@A@A@EAC@C@AA@A@ABABCBABABC@C@CAAAAA@AACA@ACCAA@ACCAA@C@A@C@A@A@CBC@C@AAAAAACAAAAAC@C@A@ABABAB@DAD@DAFCBADABEB@BCJGD@F@JA@BD@D@B@DADABADA@ADCB@BADEBABAFABAB@TGPED@DEBABAD@DAB@DABABAB@LCF@DAD@FAB@DABA@A@A@AAAAA@AAAA@AAACAA@C@ABA@A@A@CACBAFABABABABCBAHALELEJAFAFBB@DA@AU{O_EY@AAE","@@C@GCCACCCECCEECEAC@AAEBABADAH@FDBDBFFHFFDFDBBBDBBB@DABCBE@"],"encodeOffsets":[[121326,32542],[121719,32284]]}}],"UTF8Encoding":true});}));