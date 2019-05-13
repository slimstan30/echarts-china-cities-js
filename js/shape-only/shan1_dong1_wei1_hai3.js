(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('威海轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"威海"},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@@BB@@A"],["@@A@@BB@B@@AA@"],["@@@BB@@AA@"],["@@A@@B@BB@@A@A"],["@@ABA@ABB@DAB@AA"],["@@B@@AAB"],["@@A@A@AA@BABBB@AB@D@@A"],["@@ABABABABBBB@B@@AB@F@B@@AB@B@AA@AA@A@C@AA"],["@@@AA@A@@BA@CBAB@B@BA@A@@BB@DBBAB@B@B@@A@AA@AAB@BA@AB@"],["@@B@@ABAB@BB@BB@B@BAAAB@@AAA@A@ABABABAB@BABBB@B@@AB@B@B@BAB@@ABA@BB@BAB@BAAA@BC@C@A@A@A@A@A@G@C@C@CBC@C@A@I@ABC@A@@ACBB@@BA@GBA@@CE@@BD@@BE@AB@B@BA@@BC@@BDBB@BA@AB@B@@BB@@BD@B@@B@BB@B@@B@B@BB@@B@BB@B@@BBBBA@ABAB@@A@AB@@AB@B@@BB@BA@BB@"],["@@BLDN@PBTBDJNNLBBPHFDJDDBJNBBDDBDHNBB@BFLBF@BBJBHLXFD@BBFH@@D@B@DA@ABABC@@B@JGTAFNFpRTHDBB@D@DAB@H@F@F@HBPFFBBB@BAD@BBBBBBB@B@B@B@B@BB@B@B@@AB@J@DDFFDHBF@DABABADBFBFBBBBD@H@B@BAB@J@F@F@F@FBFBFDBB@B@BAD@BB@BBBBFDD@BABABBBBB@BABADEB@@AB@B@B@BABBB@B@BBBBBB@FAL@FABCFGJABAD@D@B@BB@BBB@B@BA\\SHGJANCJAF@B@BBFDB@B@B@BAB@B@B@B@B@B@BB@B@BENAD@DBBBBB@D@BADABAFKBA@ABALBD@F@J@D@BA@A@AA@AAA@A@AAAAA@AA@A@AB@D@BAB@B@@ABCB@B@BB@AB@@AB@BAB@BBB@B@@ABAB@B@BBD@BBB@BAB@BA@A@A@AAA@AB@@A@A@AAAAAEEAAAC@ABABA@AAAAAAAA@A@A@A@A@A@AA@BA@A@@A@A@A@AAAA@A@A@A@A@@AAAA@A@C@C@CBA@EAGCA@AAAAH@@IC@@ABEBCDAD@B@D@D@PE@AFABC@A@A@AAACAAAAC@CBGFKBGBEBABEHGDCB@BCBCBC@C@C@C@EBAFCFEJAFAF@DBBFAH@FLJDF@DAFDDD@FCHBDAF@D@DBBBDFBDB@FDD@DAD@FED@B@BB@H@FDDFAFELBFBFBHAHMFCF@F@D@B@F@DCDCFCJI@EAAEAC@AC@A@E@EBEBEFCBAFAJAB@HALBB@J@DCB@@AAC@CF@J@VCB@F@F@NBB@TBD@J@FBXDBBN@B@D@BAHEBADAD@LAJ@RBjL^FZBFBHDTNHBF@BABCAECI@EBAJKFAJANALAnCVANAVBNBTDJFFFLHDBDBHBJBN@P@J@J@B@@BFBLDD@B@BA@AFE@AAA@A@AD@B@BFBH@BBBD@D@B@BA@ABALABAAAG@CA@CBABCDAB@DAHAD@D@D@B@@B@BGF@D@B@B@BC@CD@B@B@BDBB@D@D@F@B@BBB@DABABCBADEDAFALADAFG@ABG@CBC@CFAF@DAB@@CBA@AACACACGEICICCAAAAC@EACCCAAC@CAE@EBABCFEHAD@BC@E@I@C@C@ABCBABCBC@E@IAGAGECEGIEEEECAIAG@GAGEKIGGEMCMAEBA@AD@D@DBJBJBF@D@BA@C@AEEAAUMGECCCEECCCIICEEAEEAA@C@CBCBADADABA@ABA@AAAECCAAAEG@EBCF@BA@CCAECAAAEACA@AA@ABABAD@HBH@LADBDDH@BA@CAEAEAE@ANKF@BC@EAE@E@EBEBCBCBAJANCJCDCBCFIDGBEAKACECE@G@EBEBE@E@CAAECGACCCA@E@IDGBC@C@A@CAGEAC@CDEHEPMBC@GCGCEEEGAC@M@Q@[HKBCBIBaEM@GAIAAACAECEEGKGOACEQCaASDYBM@MAGCCACOGKECCCE@EDELCVATCLAJB^FVFPHTFNHVDVBL@JEHGBGAGACGEGCMEMEKGMOIU@M@ABMHMPGDKAEACKEKQBc@U@IAGEKKMACGEKKGEKEIC[CI@E@GFAD@J@JBFBBJFBDBBADGBK@S@M@I@gBO@GCAC@CBAHCVOBAJIBGBCBIBED@FFBBFABCIOEEC@QHGAOGCAAAGCEAG@ECAAAIAAA@@JCBABG@G@CBCDGBEBG@C@C@AAA@AABCD@D@BAAAGCAADKAAAC@AEECAICICC@EAE@C@GCCAAABAAAA@BA@A@AAAA@A@E@C@A@ABADA@ABAB@DBBABA@C@A@E@CC@EACEAABCBCBABE@IBI@CAE@CB@B@B@BA@A@A@EAGAG@G@KDGDGBABC@EAC@CAMBAAAEAAA@A@EDEDA@CBIDCDCDIDEBC@E@E@MESEQAKAMBGLDHRHLFBHBHAFADCDEFADCJ@JADAFCDK@IEIMGCRCHRjBD\\h@FADCBA@GBKBECQGE@GDC@GECECE@E@GDE@AAAACCGCAC@E@K@O@E@ICSEGEECAGDE@CCCGCAAAAAYCKAAA@A@AFAD@d@FIFKJCJAZ@F@L@NAFADCFADA@ADCRAFCBGBGKSEOJG@ACCICIIGGEICIAIASCOASA]I]KG@G@GAKASGAAMI_KcKKEOEYGQEGAmSKQCG@C@CBADC@ABC@ACICCEEWEICEACE@CCAA@CACCE@EBCDE@MIIC[EQ@OAKASGeOGCKGGEAC@CBA@ABA@EAEBABEBABC@A@GBEBC@ADEFCDE@GDIBENWDKBC@AACAACAC@CBABCDCDCBA@C@A@CBCBMFGDEBCBEAG@E@CBABEL@F@VBHADCBCCCGACCACAC@A@CBABIFCBKHEBEACAI@CA@CDAFADABEBAFABA@EDEFABA@E@E@EAACEEECAA@C@C@C@EBABWFCBA@AAA@ACCAC@A@A@A@@B@D@B@BBBBBD@LDJDBF@DABCBA@IFCBCBA@A@ECECAAA@A@C@A@AB@DAB@JBDABABC@CAC@E@CBABCB@B@BDFBBAB@BG@M@OBGBCBAB@D@D@DBBBBFBJFBBBDHFFBFBHBFBHDLFRHJDF@NAH@DDDDBHFFTNLHBB@B@BC@G@sMGCCAGCACGKCEECGAC@I@CAEEECIGQKOICCAC@EBCBGAAKFEHCDADGFYLE@E@IBI@I@E@QBGCC@E@G@C@A@A@ABC@CF@D@DBLABADGFABABCHGPKJADAJ@HCBMBI@ABABCLAFHPABABCDDDBDHHZJNCDB@B@BEHEHA@EBCDAJCBCDGB@DABFH@DADCNENCBG@OC]OCAMEKCAAGCCBE@ADCH@D@BAJA@A@K@E@C@C@E@G@EBA@CHEFCBC@C@ACA@EBABCDADMNAFAD@PADABEBWDALCDEFCH@BAL@H@DADABC@C@EEG@E@ABOLGFIDCBA@C@ECC@CBCFAJDJDPFDNBH@BF@DAFGFC@ADBJAJJVA^AJ\\NXJVHHBL@LHFPBFJJHHLLHFNJTLLJLFZFPAHGAA@CBAB@F@BA@AB@@AB@B@@BB@BA@A@AA@@AF@BB@BB@B@BAB@DBD@BA@AD@B@@BDBBBB@@B@BBB@BBB@BD@@BB@BBB@B@D@BBBBB@@A@AFEBA@A@ABA@A@AAAAACACA@BA@ABABABC@A@BAB@@AC@@AB@@AB@BABA@AA@NIHGFCDAFBFHB@LGDADGDEBEDEDAF@HBLDHJD@BABE@CB@DBDDF@JAB@DBBHDHBBHJJJLFdELEJEPEDALEPGR@X@D@XBT@J@PBVFPBLEBBDLDBHDAFDJ@BB@@BADEDCDDFBBBBBF@BBBA@@B@BBBB@D@@CF@FBB@DD@CACCADCDC@ADG@ADAFEAABAB@LHB@BAD@@DABB@B@FBJHCDH@D@DBFB@C@AB@B@@AAA@C@ABAB@B@@ABDB@DA@CCCBAD@B@@CBBB@HCBAAADAHABBD@F@BABG@CEEDCDDFDDHHJDBH@@BAFAD@FDBJB@DCDCBABAFFFF@JE@ABGHKBKB@H@H@VAR@FBF@HFBD@BAB@HL@H@JF@BEFFHBB@B@FD@BD@BA@CBA@DDFB@B@FB@BABCB@DDFHAD@BC@@BJDGFBBBBABADC@AAEEC@@CAAA@EDA@AB@BANF@BI@AFD@BFAD@@F@FAFA@BHHAB@FBCDAAA@@DDBB@FB@D@DAFEFAAGC@B@FHHBB@BAHEB@E@EAA@B@FCBCGC@AFD@@JCFA@A@A@C@ABA@@B@B@BB@@BAB@B@BB@AF@FDJBDBBNFb@BBBPFHDBHD@JHLADBDHV@D@BCPBDDBBDFAFAZCD@PHHPPLPJZJJDLN"],["@@A@@BB@@A"],["@@B@@AA@@B"],["@@A@@BB@@A"],["@@C@EDAD@DBBDAD@DE@CAA"],["@@@BB@@AA@"],["@@B@@A@AAD"],["@@B@AAA@@BB@"],["@@@BB@B@B@@AA@@AA@A@@B"],["@@@AA@ABAB@B@BBAB@BB@AB@@A@AA@"],["@@F@D@@A@AC@E@CBDB"],["@@@AA@@BC@@BA@A@A@AA@BBBBBB@B@BABAB@@A"],["@@BDDBDAAGCEC@ADBF"],["@@BAB@@AB@@A@AA@A@@BABA@A@A@@AA@A@@AA@CBB@B@@BB@@BBBA@A@@BA@A@AB@BC@A@@B@BA@ABBB@AB@B@DA@AB@B@@BB@BAB@@AF@D@BA@AA@A@@A"],["@@@D@BDFB@@BBABAB@B@DAB@BA@AAACACCC@E@AB@B"],["@@B@@AA@A@@BB@"],["@@A@@BA@AB@BB@B@BABA@AA@"],["@@@EAAAAAD@FDBBA"],["@@DABAAAC@CBABDBB@"],["@@BA@A@AAAABC@AB@BBBF@"],["@@@AA@ABB@B@"],["@@@BB@@B@B@B@BABBBA@BBB@@A@AB@@A@ABAB@@AA@AAA@@AA@A@"],["@@@BB@B@FDBDB@@B@BB@@BBBABB@BCBBDAB@BABAB@@A@AA@CBA@@AA@@AA@C@@AA@@A@AA@@AAAB@@A@ACBAACBA@CB@BBB"],["@@B@BA@C@ABADA@A@AAAA@AA@AACCEAACACAA@AB@B@BBFBBB@BB@NBBFF"],["@@ABB@@A"],["@@@AAEADDD"]],"encodeOffsets":[[[125134,38412]],[[125140,38379]],[[125100,38426]],[[125105,38427]],[[125154,38395]],[[124942,38429]],[[124942,38429]],[[124927,38429]],[[125019,38472]],[[125126,38412]],[[124791,38233]],[[124965,37762]],[[124979,37771]],[[124979,37771]],[[124965,37745]],[[125177,37656]],[[125178,37671]],[[125424,37940]],[[125323,37736]],[[125331,37736]],[[125225,37717]],[[125620,38345]],[[125526,37856]],[[125201,37634]],[[125421,38348]],[[124562,37677]],[[124521,37612]],[[124586,37565]],[[124510,37631]],[[124501,37629]],[[124627,37689]],[[124627,37689]],[[124399,37614]],[[124546,37614]],[[124244,38021]],[[124604,38034]]]}}],"UTF8Encoding":true});}));