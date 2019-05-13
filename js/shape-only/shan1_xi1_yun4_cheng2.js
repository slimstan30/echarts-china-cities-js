(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('运城轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"运城"},"geometry":{"type":"Polygon","coordinates":["@@CA@ACCAAACCIAAA@CBA@CA@A@C@GBAACCMAAAGAAAAEAEBEAA@CAAAEAIEAACC@CAGBAAA@C@EAEAKCGCCC@@A@A@ACCAAKECCCCA@EAABCBA@CBCD@D@BCBEBKBG@E@KCC@EAC@A@CACAAAIGAAAAAAC@A@A@AAC@@AAA@CGGACC@EAC@A@E@E@C@ECGAI@KBA@A@C@A@EDEFCDGDCBEBE@C@A@CBA@AAEGAA@AAAAAA@A@CACAE@AAABA@A@A@C@A@CAAACAAAAACACEAACAA@CAA@CAA@A@C@ABA@@AA@ABA@CBG@CBC@CBE@ABA@G@C@CBC@EBEBCDCFADCBCBA@C@A@C@CAIGIGKEEAG@ICGAAAGCOIEACAEBIDIHQJMFE@EAECAACECGEKACACAGCECAAAGCG@A@I@EBCDCFEFADEBKBIBG@GAK@C@E@CDEDIJCDGDG@ICMKKKMSEIGMCOACAKAECCGEC@I@KAK@C@UCE@eC_I]KICECSI]QAAOIOGUMICI@CDABUZMLUJK@I@IAEGAEDS@_IYCGMYIMCEIICGIICEQGGCE@O@MAK@SEIECAIEA@GAQ@MJONEDCBIHOLC@OFA@ODI@C@ICECAIIKOKAAACemEEEAaBG@FK@yAC@EBGAQCOCOGSG[KICICICA@MCODSLA@SNIHKFCDSJAB]NC@KBMACAGAEGAACEQQAAIGEECAECQAQDGDGDEBA@QFOFaJOBGBe@SBY@GBC@QDGDEDGDKHSRSZCFGPCJM^ETDZFVJRDHBFH\\BF@H@XADCRIZCDKTCBMVCFETBPBJBRBFblBDJVDHBJ@B@FCFKF@D@H@HBFDHDHBD@FADCDADBJDLBFDDJBJFFDFJJTHJDFBDZXHJPPT\\DHFLBJFTFTBL@BDNDNN`BFBLLdLb@BHVFTFVDPBPFfJtD`DTBJ@HHXBBBJJP@BJPHHHFLLFFFLB@DDJLDBJJDBHFNLHHHPBDDRDJDJBHH\\@BFTBDBHDJFVFPFLJHVHVJNFFBFDLHLNHNFPBHBF@DBJFRDNHZHTFLDHR^HNFNFHFLL\\HRHPBDDDJFDBBRBLBFD\\@HANCLCR@BABGBE@CBCDAD@D@JBP@DAFCDEDCBA@AB@DAFADEHAF@DBFDF@F@F@D@DCP@NFFHBPJFDB@BB@BDBHBD@@BD@B@@B@BDDBD@D@BB@B@@BBBB@@BB@DDBBBBDBDD@BBFBDBNBBFBJDTDVAHCLENM@AFM@AD@RBDAFALCDICGGCMGA@IO@QDCFEVJHBHDHBB@TD\\DTFB@D@D@PIJMFCB@HCNAD@\\ALCNCHBJAJBNENANBHAJAVKfGRKHENKJGNCNBNNLJRDNFPJJPBLCDCVAF@RD^DLC`LRJNLJPDBANY@M@KFMBIPQDK@M@EDOFGN@PFRBJAP@JBN@HFF@HNBPJNJLFFHRFJNVHJHJJNPJFDB@JBJAHBVGPIPQLMDGDEDODIHEHCB@HCJGBCBIDEBI@Q@GACBIFKHKHCDEHCJ@D@PELCFANEBCJKHIBEDEHID@HANBDBHDHNRPPNPHLBF@FBJDLBNAF@JEBGBK@IAE@EFEFCHIBKACAACAAEA@C@EDAB@D@BEDABCDCBA@E@E@A@A@C@CAAAC@CCA@@AA@AAAAA@A@C@A@CAECAA@AAAA@@C@A@CBAFAD@D@BC@A@AEA@A@G@ABA@AAACCKAG@A@AA@C@ABC@A@AC@A@ADABA@A@ECA@ABA@A@A@CAECAA@CBA@IAOAAAGBM@MFKJOHIDADEDGACCEICIKDGLIBAHEFCTOLAJAJBD@DBJBNFLFFJFHJBDBDBFBLAFEDAHDLDD@DBDHFDL@L@BBHDJBFBFFDDB@B@@A@EBC@ADAHCB@HELDPFJAH@DADAHBNDVBJBHBB@D@RFJBTHH@F@N@DA\\CB@PENANEFCFEJGBABAD@B@HDPF@FARDTJLHHBBBD@BFFBP@N@DBVBJBD@DDJHJDBBJ@BRAVCDAH@NABANAXLBB@FD@HBHDJAFEAAAM@EDAF@N@DBB@`FD@FBN@FALCFEBCHEJIJGLGTSDAJEVCbE\\CB@TCPDJDJALALAP@@AACIGQEKKEI@CAIAG@IDEJIBCBAFAJ@N@D@B@BABCB@HARAJBF@FADCBAB@H@B@DCB@D@FBDADAAC@ABA@A@CAC@AG@AAAABC@E@CAAKGEECGACC@KLEBEAA@CA@BA@ABA@CAC@@AA@C@KCCAE@@CAECCBE@A@ACAEEACAA@KBCBC@AA@A@IBEACG@C@GDI@A@EBABABEAICCG@CCBEAAAAIBCACEAGEAG@AA@A@ADGF@L@DAD@LJFBF@DGBEHAFE@IFGBG@MAE@ERAHK`CZC^@vHRAPFTTRVLP@RDGPUVQPKLARARGJGDC@CCM@KAGGGEKAK@A@ABEBCDAHAH@JAVGHAFE@A@CCIBEBADAHCDCHEBEBE@I@CCKGMACEAEAA@@ADGBI@CACCCAA@A@AB@HCPGFEDMNYBGAI@E@EBCBC@ECAAAUIIGGGMAGAKGCE@GBGJMLKNWHKFKBCAC@CIIAA@ABCBAH@B@@A@AAIEUG]EOAIBGHMFG@EAG@G@G@ABEAGQWCAC@CBCDE@GABBAFADCFC@GDCBEDADABAD@B@B@BABCBC@C@A@CAA@AAAAEAABGBKDC@C@C@A@A@IAC@AAC@CBABA@ABEHCDCDEDGBGBGBQ@E@EBG@C@A@CACEACCCCEEAAAA@ABEBQLABA@C@CAA@ECEEGECAA@A@EBEBEDEBA@CBGBA@CCA@E@CASAEAG@A@SCG@KAEAECCCAA@A@A@ABC@A@C@CBE@C@CAEAGAEACACECCCCAA@C@CAA@A@A@C@KDABA@A@C@CAAA@A@C@C@AA@@AAAACA@CACA@AC@A@EBC@KBKAC@ECEE@A@A@C@AAA@AA@C@C@A@G@CAGBMAA@CBA@A@CACCA@AACCA@C@C@G@C@CECEEEAAA@A@A@A@C@O@GAA@CAAAAA@C@ABADCBAB@DABCDCBCBCBC@K@ADG@ABABA@ABCAAAACAAAAAICKGCAC@C@I@ABA@KACACCAAACEECA"],"encodeOffsets":[[114316,35768]]}}],"UTF8Encoding":true});}));