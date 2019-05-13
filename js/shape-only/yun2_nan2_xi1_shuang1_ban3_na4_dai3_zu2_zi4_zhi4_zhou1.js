(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西双版纳傣族自治州轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"西双版纳傣族自治州"},"geometry":{"type":"MultiPolygon","coordinates":[["@@BABA@AB@AABAA@@A@AB@BAB@@A@AB@@AD@@CB@B@BAB@B@B@@AB@B@B@B@D@@BB@@BDBDADAD@BAJHHJDHAHCDCFCH@JDHDHDJDHHBJ@DBB@DADBB@BBFBB@D@D@B@B@BBB@JBB@HF@FCNBJBLBBF@L@FDLDF@JAJCJCFAL@JDFDDFF@HAH@FDFHDFDDBB@H@JBBDBDBBDBHBDLJ@DADBB@BD@BAB@BBBBB@B@@B@BB@B@@BBB@B@BB@BAB@BBB@F@B@ABA@A@@BB@B@DAB@@B@BBAB@@BD@@BB@@AB@@BD@@ABAB@BBBBBD@ABABABBABB@B@DAB@ABB@B@B@@BD@@BB@B@D@@AFADBB@DA@AB@@B@BBBB@B@BBB@D@CD@BB@BA@BAB@B@B@BA@@BA@@B@BB@B@AB@BB@@BA@AB@BB@@AB@B@BABBBAB@@A@AB@BADB@BBA@A@AB@@B@BB@B@@BB@B@B@BA@AB@BB@AB@B@B@D@B@@ABA@ABA@BB@@AB@D@B@BAB@BAB@B@D@B@BBDBB@B@B@B@D@HEDKFE@ADCFEDEJKBOBEAEBGBEBALAFELIHEH@H@J@B@FBJDFHTLJHHH\\PBBF@D@D@FBD@XABAF@HBFBFD@B@BABEDAFCD@DAD@B@DB@DFBB@FBDB@@A@CBABAB@B@@BB@B@B@BABAACBAB@DCB@B@@BB@BAB@B@@B@BB@BDB@B@BBB@B@@BBAB@BF@BB@AB@B@BABBBB@B@B@@BB@@BB@BDB@@AB@BAB@@BBB@A@AB@BBB@BABERIXOr[JITGRCVCPA`FTBJ@VBVDLCLGBAJILGNCP@J@PDPDTDB@@BB@B@NDNAVCL@JCPCTEP@RJRJPLTJHDBB@BB@@BB@B@BBB@B@D@B@DCB@B@B@@BBBB@FAB@DB@BBB@BD@B@B@B@B@DBBBDDB@@BBA@AB@BB@BBBBBD@DBB@BBB@BB@BB@@AB@DBBBDDB@B@BA@A@ABABAB@B@B@@B@B@BB@@BB@B@BAB@B@BA@C@AB@@DDB@DBBBB@B@BB@BA@BBBBBB@B@DBB@BAB@BA@BD@@BB@B@DABA@AB@B@@BBBDDBBBCBABABAB@@A@AA@@AA@@A@C@ABAB@DEB@@AAA@C@A@AA@AC@AAC@AB@@ABC@ABAB@@A@A@A@A@ABABA@ABABA@AB@@ABA@ABC@A@ABAB@DA@BB@BBBBBBB@@AB@@A@AAC@A@AA@BA@ABABABCB@@ABE@A@A@A@ADABABA@A@A@A@A@AACAA@AB@@AB@@A@A@EAAB@@A@ABC@AB@@ABA@ABA@ABABABCBADEB@@ABC@CBABC@A@ABC@A@A@ABA@ABC@A@A@A@ABA@AA@@A@AAAAA@AB@@AB@B@@A@CBADCBCBABAB@BA@AB@@AB@BABA@C@A@A@A@ABC@ABA@ABCBCBA@A@A@A@A@A@ABA@A@AACCE@APWPIHE@ABCDCD@D@B@FCB@B@BBB@BADA@A@AB@BAB@BBB@BABAAACABAD@HBDDB@BABA@A@CAC@A@CAGIKAEI_BGBCFAPB^LFBD@BABAJIF@BBDB@B@DBBBBH@D@BDDBDBFAF@FATAHAHEBAHAJ@H@AKWU@GCIGQCKCQMMMEOCYCQ@UHOECICIKUMW@MJGNKPUFOBKFIHKLIJKJOFMBI@G@OJMBIGGSASCIIAKHODKFMBEDMDKFMDIHIPKFMJOJOBKBKHIDGDMMK@E@SCQMOIEBGXANEJENCJGZIPUHCJDLDLDJFRAJEDK@GAKCIAQ@OBIHGHKJIB@RGPAHCHIBMAWBMJGTKVCN@FCDIAICIKQIOEQ@OBOCQIQCGIMAI@OBIHGHCNGJGDKDUAIBIBG@MAW@MDEFIDGDG@GB@FAJ@HBLDTBHE@M@KNGHCHADIAECICICICCGGEMIGEIMGQA]FSLSFOECK@IPKLC@GEOAEAKBIDKHKLCHIDKCMKMKGMEGGIGECAGFMDOBSBOBQ@QBODO@GKKIECKAeCSEOGKBOBOJ[FMFOJWLMJAFAFAHAJ@NDJCN@DAPYDGFIJGXONBLABK@KIMBOHUBMAGGAE@M@IHIHGGI@MBKQ@AEIAOI[IOKQIOQIQ@MAO@IBI@WBQDGJCJBRAHGFGFOHADGP@BGLKDM@MAOCOCOI_UGAGEKBOJGP@LJTPVFXBLGFOFMDSH[FUHUDQDMAUCYEMCUAQCSQQEWEK@O@O@YASBKAQ@MGQIOKMIOIOI[GGCO@IAICKKKCGCEDGJKFKJKHIHIFIHILCHEDEBGBIDGFGH@JDFDLDJBPLLLPLLDLDPAPIJWHWHKFUNYROLE^GJOLMXEJQ\\IXENHJJBT@VA\\DHFJNBTAT@XCT@PJLRJRLHFDDBBFF@DIBKDGJCRAPDJFTGP@RWBOCSAaFGBKDI@A@C@ADCDAFAB@B@DBD@BBDBDDFDDBDDDB@FBB@DBD@D@F@D@D@DB@BBD@DBF@D@BADAB@DCDADABADADAD@D@BADAD@F@D@B@BBDBBBB@DABAD@B@DADABABABA@A@C@A@AD@B@F@H@D@B@DBDBD@D@BABABC@C@CAC@EBGBA@ABADCDCDCFAB@B@D@DAB@BCAA@CAA@CBABAB@BBD@DBH@DBDBH@D@FAD@D@FADAD@H@BADAB@BAD@DAD@B@F@B@BAB@BAB@D@B@D@D@B@B@DBB@BBDBB@BBDBBFFBDDBBB@BA@@BA@A@@BA@@AA@AAA@AAA@ABA@A@AAA@A@A@ABA@ABA@ABA@AAAAA@A@A@A@A@A@A@ABA@A@A@@AAAA@AACA@AAA@A@A@A@AA@A@A@@AAAA@C@AA@AA@A@A@@AA@A@A@AA@CAAA@@ACAA@AAA@A@CAA@@AAA@AAAAAA@@A@AAAA@@BA@A@A@@ACC@AA@A@@AA@A@@AA@@AAA@A@A@A@A@AA@@AA@A@A@A@@AA@AA@AAAAAAAA@@AA@AB@AA@AAAAA@A@A@A@AAAAA@@ABA@AA@A@AAAA@AAA@A@A@A@A@A@AAAA@AAA@@AABABA@A@A@A@@AA@ABA@@AAAA@C@AAAAAAA@A@ABA@A@CAA@AAABA@A@A@A@A@AA@AA@@AAAA@AAA@A@A@@BA@A@AAAAA@A@A@@BABA@A@A@AAA@A@ABA@@BA@@AAAAAA@A@@BC@ABA@A@A@C@A@A@AAA@A@AA@A@AA@A@A@@AAA@AA@A@A@A@@AA@@AAAA@A@AAAAC@A@A@@BA@A@AAA@BB@B@BA@AAA@A@C@A@@A@A@ABABA@AB@@AA@@AA@A@A@ABAB@BA@@BABA@A@A@AAA@A@ABA@AAAAA@AAA@A@AAA@A@@BA@@BAB@BA@A@AAA@@A@A@AA@@AA@@A@AA@A@A@@AA@AAA@@A@AA@@A@AA@A@A@A@A@@A@AA@@BA@@A@A@AAB@A@AAA@A@AA@A@A@@A@ABAA@@AA@@AB@@AA@A@@AA@A@@A@AA@@A@A@AA@@AABA@@A@AA@@A@AAA@AA@@A@AA@@AA@@AA@@AA@@AB@@AA@AA@AA@AABAB@@AA@AAA@A@@BA@A@A@A@A@AAA@A@A@@AA@A@@AA@@AA@@AAAA@A@A@@A@AAAA@AA@AA@A@A@@AA@@A@A@AA@A@@A@AA@@AA@A@@AMAIKEQESGUKSIGQESEWKQUIOISGOOIOCQ@M@OAOMKOQQMIQCSDSGSGUOOGUEUKKESCUBSLKHKJGHKD_EYKKES@KHIHOXGXENO`OLCREJGFCDCFK@cQKGSGMBIFA@A@A@A@AAA@A@GBA@A@A@A@A@A@A@A@A@ABA@C@A@AA@BA@A@A@A@@AA@@AA@@AA@AA@AA@@AA@@AB@@AA@A@@AA@A@AC@AA@A@@AAAAA@AA@@AA@A@@A@A@AA@@AA@@A@A@AAAA@AAA@@AA@AA@AA@A@@AA@@AA@@AA@@A@AA@@A@AA@AA@AAAB@@A@AA@@BA@@AA@A@A@A@A@A@@AA@A@@AA@A@AAB@@AA@@A@AB@@AA@A@@BA@@AA@@AA@@AAA@AA@A@A@AA@BA@A@@AA@A@@BA@A@@BA@@BA@A@@BABA@@BA@C@A@@A@AAC@AA@@AA@ABA@AA@AA@@ABA@AA@A@A@@AB@@AA@A@A@@AA@A@@AA@@BA@@A@AA@@BA@@AA@@BA@A@A@@A@AAB@BA@@BA@AA@AA@A@A@A@@AA@@A@A@AA@@BA@AA@AA@AB@BA@A@ABA@@BA@A@A@A@A@A@A@A@ABA@@B@D@BA@A@A@@BBBBBBB@B@BABABC@ABAB@B@B@BA@A@CBABCBEBABAB@D@D@B@BCDCBAB@DABCDADA@@BBBABA@ABA@A@ABABA@A@A@A@CAA@@BCBCBEBA@A@A@AACAAE@A@A@AAA@AA@@ABCAAAA@A@A@A@A@AAA@A@AAA@A@AAA@C@AAAAAA@AA@AA@@BABABCBABA@ABCBABA@ABABABABA@ABABABA@CBA@ABA@CBABCBA@A@C@ABC@ABCB@BABCB@B@BADADAD@BAB@B@B@D@D@BBD@BBB@BABBB@B@BAB@D@BAB@BABAD@BAB@B@DBB@BBB@BBD@B@B@B@B@DBB@B@B@BAD@D@DADAB@BABABADABABA@ABABCBA@AB@BAB@B@B@B@B@D@B@DBBBB@DBB@BB@@BBBB@BBB@BBB@BBDB@BBBBBB@BBB@D@BBB@BBB@BB@B@BB@@BB@@BBB@B@B@B@B@B@B@D@BBBBDBD@BBBBBBB@BD@BBB@B@BB@B@BBBBBBB@BBB@BB@@BBBB@@BB@B@B@B@D@D@B@D@BAD@DAB@B@BBB@@BBB@B@B@B@DAB@BADAB@BA@@DADABA@@B@BA@AB@BABA@@BAB@BBBABA@A@A@A@ABA@@B@BAB@B@BA@ADA@A@A@C@A@A@A@@B@BBB@BBBABC@A@A@@BA@A@C@@BA@AB@BA@BB@BBBB@@B@BA@A@A@A@@AA@A@A@AB@BBB@BA@A@CAA@AAA@CBADAB@BA@ABA@@AC@AAA@C@A@A@@A@A@A@A@AAAA@ABEBABAB@BAB@BA@ADA@C@CAAAAECC@A@AEGEAS@ICSKOKGMEAIDUFCFFPDJ@DC@ABCBA@@BA@AAA@CACAC@@AABA@A@ABA@ABABABE@ABA@ABAACBA@CBCBABCBABA@A@@B@BAD@BABAB@BA@ABA@@BA@@B@BAB@B@B@B@D@D@DA@@B@BAB@BAB@BCDADAD@BAB@BA@@B@B@BBBBB@BABAB@BAB@BAB@BAB@B@B@B@BAB@B@B@B@B@B@BABABAB@BA@@BABABABABAB@BAB@B@D@BABBB@DAB@BBD@B@BAB@BAB@B@B@DABCB@BAB@BABA@@BABABA@@BA@@B@BADABAB@B@B@B@B@B@BAB@BAB@BABBB@B@BBBBB@B@B@B@B@BAB@B@BBB@BBB@B@B@B@B@BAB@BA@@B@B@B@BBB@B@BAB@B@B@B@B@B@B@B@B@B@BB@@BDDBBBBBBB@BBB@B@@BBBB@BBBBBB@BBB@BBDBB@DBB@B@B@B@BA@@DADAB@B@D@B@D@B@B@B@B@B@BAB@B@BABB@@BB@D@B@B@B@DBD@BBB@DBB@BBB@@BBB@BBBBBBBBB@BBB@B@B@B@B@B@BAB@B@BAB@B@B@B@B@BBBBBB@@BBB@DB@@B@B@BBB@BBB@BBDBBBB@B@B@BA@@B@BBB@DB@@BB@@BB@@DBBBDDBBB@BBB@B@B@BABAB@BA@@BAB@BAB@BAB@DAD@BABA@@B@BA@AB@BCD@BCBA@ABABA@ABABCBAB@BADAB@BABA@ABA@@B@BBB@BA@@BC@EB@BA@@D@BCF@B@B@BAB@B@BCF@B@B@BAF@B@BB@BBBBBBDBDBBBDB@BBB@DBD@BBB@BBAB@BF@F@DBB@DDBFDDBDFHPFdDN@B@HHLdChVXRj~FTDNJjDDDBBBCFCDADGJDDJ@F@DHAJBFHFH@BF@H@J@BBDH@FFNARQTAHCB@BAB@J@HABAHBDFDBX@NBJDFHDJBFFFL@H@L@FBDFBHOVAF@PBF@BNJJ@JCLAJBLFHADAJ@DALEH@F@LBFAFGHIDCDAD@AC@CdQF@PEPANINAHEVKLCDDFBHHHLNFDBHDHNBLAHAFDHHF@NCF@FBFFFDH@FBJAHAHBDLDEJ@D@FDD@DADA@ABFXDN@JAFEBKBMBIBDBD@DDB@DDDBDD@BGJAFBFFJBBFBH@DDFDDBB@B@FDDFDNFJDHFHDJHDJ@JCFAFIFKH@LBDF@HAD@D@BJBBFFDHBHLLDFCDADBFHLDH@N@J@B@H@HBJ@JBJBFDDBB@BABANAFADBFBH@D@FCHAD@DBB@BBB@D@BALBBAD@@AAA"],["@@@BB@@AA@"],["@@ABB@@A"]],"encodeOffsets":[[[102992,22996]],[[103237,23133]],[[103244,23134]]]}}],"UTF8Encoding":true});}));