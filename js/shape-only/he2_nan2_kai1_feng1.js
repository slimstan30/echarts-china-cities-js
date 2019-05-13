(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('开封轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"开封"},"geometry":{"type":"MultiPolygon","coordinates":[["@@BDA@AGA@@DA@@AA@AAA@BFGBAGCBACB@AADAC@@AD@@AC@@CAB@AE@BBA@AFA@EFA@BDBDD@ADA@ACBFA@@BC@@BA@BBAB@BA@A@BBCBF@BFB@BFAA@D@BB@AFB@B@@AB@@BDHB@BD@B@BB@B@B@@BB@@AD@@DA@@BB@@BA@@DA@ACBHA@@B@BBFA@@BB@BBB@D@B@AAD@@BD@@AJABBA@@BF@FDB@@FB@@D@BA@@BA@@BC@BJA@A@A@@BD@KB@BD@@BE@A@@BA@@AC@@BC@A@@BA@C@@BA@BFA@BJG@@AA@@AC@@B@DA@@DA@BDGBBBGBCD@BA@KB@CC@AAED@AABEBBBA@@LBDC@A@A@@B@B@F@DB@@BB@@B@BBD@BBBB@BB@A@CB@@AD@@A@AB@@BB@CNB@BKD@@BB@DHB@B@DABDD@@AD@D@@DFA@BDABFB@BADHBAAE@AD@B@@A@AD@ACDADHB@BBD@B@@AB@DB@AAEBAAAFA@AAAJA@DD@BBDA@AB@BDB@AEBBD@@CJBB@H@BB@BFBBFA@@FA@AC@DA@@BHABDA@BBD@@D@BA@@D@BB@BBB@@BBJA@BFGABBA@BHB@@DBBBFB@@FDAFX@BI@@B@D@L@FDD@BBV@DBB@FDTDAB@DADADAD@D@D@HAD@FAFAB@BEBABADCBABAD@DAHAD@LDHBFDDBDBBBNDF@L@BBD@H@R@DBH@H@D@D@D@H@FAF@TAD@PAB@FBDBDBD@DDDBFDBBFDDFDDJNHH@BBFBBBBB@BBDBD@FDDBD@B@B@B@DAHAFADABAB@BAB@FCFCBAFCHCHEB@JERIB@DABAB@B@LCFAB@H@BAF@LAF@JAB@B@FAJ@B@J@JBBALGDABAD@B@HAF@D@D@F@H@D@DBDBDBHDBBFBBBDBBBFBFBDBDBDBB@B@B@B@FAJEB@PGB@BAB@DAD@B@H@BBB@FBB@B@B@DAHAB@HAD@HAD@DAB@L@JAHAD@FAD@B@FAD@D@F@B@D@LBF@F@F@HBHBJDDBDBBBBBAQG[@CDGNAJA@A@A@AHA@AJA@AD@@CD@CKD@@AB@FAB@@AB@B@AEFFB@BAAOFB@IB@BA@C@A@ACA@AC@@G@AB@AAAI@A@AA@@AD@@A@AB@@CB@@C@AC@@AA@E@A@AE@EB@AA@AFA@A@AA@AAAC@AA@@A@ACG@CB@CKZC@DB@AGA@AK@AEBC@AC@AKBEBACAE@KA@E@BCA@C@AGA@C@@CE@AAC@A@@E@AE@A@@AH@F@@IL@@CD@H@@ABA@BB@@AB@ACC@@A@CA@A@@AAB@ECBACC@AIC@@ADAAEC@A@AA@AB@ACA@@AC@A@@AGB@BAABA@CK@A@AAA@ABE@BC@ABCA@A@@BA@@BA@EBKBCAIBABC@@AA@@A@AA@A@@A@A@AABC@@BA@C@A@E@AA@ACA@AA@@ACA@I@CC@@ANK@A@A@AC@@DA@@C@AB@@C@AC@@EA@@CBCA@BE@AB@@C@ABC@AA@@AB@BGXAB@B@@A@AC@@CACB@AEAC@A@CB@@C@C@ABABAB@@AD@@A@A@CA@@AA@@CA@@AA@@AABAA@M@A@AEBAECBCGC@A@@AAB@ACBAEBACED@AAB@AED@ACB@AAFAAA@CA@@AAABAAC@CEBCEC@ACOFAADAC@@AC@@CCBCGB@BA@CAA@EC@@AD@@CABAEB@ACCBCMB@BFB@DEB@@AD@DB@ABB@EBB@EB@@CC@@CDC@GC@EU@AC@E@@EB@@CAA@AB@@CA@AGB@@EC@@A@A@AC@C@@M@ABB@AAED@AGD@AIAE@AC@AC@CB@@AA@@AF@@A@CB@D@@BHABA@GFA@IB@BAB@@DF@D@B@@BF@@BB@B@@BB@@CF@D@BEA@BGBBAKD@@CBGD@@AG@@AB@@AA@A@@DC@@EA@@EI@@A@AA@E@@AF@ACB@@AJ@@CD@D@@CC@@E@CA@@CB@@AG@@CCAAA@CE@@CB@@CD@@AB@@C@CA@C@@EBA@AHA@BF@AAB@H@@AD@B@@CD@@CD@@CB@@A@I@CA@AAF@@A@A@AAEAE@FA@@CA@A@AA@AA@AAB@ACB@@A@AACB@B@@ABAB@DA@AE@@AH@BA@A@A@C@AA@@AE@CIB@DBAC@AAGB@@CA@C@C@K@Q@AAB@AI@ADAAA@A@AH@B@@ADA@AD@@CC@@KA@@AA@@A@A@A@CB@@AD@@AB@B@@EAAGB@AD@@AE@C@@A@AB@@CB@@CB@BEB@@C@AA@@A@AD@@C@AGF@CC@@CC@@G@AA@@AB@@CJ@@EBEAAA@CA@A@AA@@CC@@AB@AC@AGBACB@@IA@@C@AC@@A@ADA@AJAACB@AED@@G@EA@@AD@@AC@@CA@@AE@@BM@@BC@@DEA@DE@@DCB@BCBAFC@@BA@C@EBC@A@@BA@AAGAG@@AA@@AE@CBE@@AM@@AC@G@BAA@E@A@BBCBC@@DC@@D@DA@@BDBANB@D@@DC@A@G@@AE@@BA@@EA@BAG@C@C@@BA@E@C@@AA@@DA@C@DDA@@FB@BB@DA@@B@FA@AB@H@BA@@BBBB@@BD@H@DA@BA@CBG@@DB@ADE@@C@ACBE@BB@BB@@B@BC@@DKBA@@A@KC@MBC@@ACBABA@E@AHABBBAFB@ADA@AAABC@@BEAELA@ABBBFABBCBC@ABC@CBA@A@A@G@@AK@C@@A@CGABAD@BA@A@A@AB@BAE@@AQ@@BC@@BC@BBE@@DA@ADEAAB@BC@AFB@@B@BD@AB@D@BK@A@@BE@@AA@@AC@@CF@@AF@@CB@D@BC@A@A@AA@@FA@@GC@@A@AB@BAE@@EDA@C@CA@CA@AC@@AE@@AA@@AE@BAC@A@I@C@A@E@@AA@@B@DA@@CA@@B@D@DA@@CA@@DAA@DA@C@@B@D@BCA@DBFBFBDF@@BF@AFBBAB@BB@@B@BC@@DCBBFC@@BA@BDA@A@AE@DA@AC@B@FA@@EA@@DA@@AA@@AC@@BC@@AA@ABC@A@A@IBA@@AE@@B@BA@AA@DACA@@AA@@AA@@AA@@A@AC@CB@CIBC@@BA@BDA@BHC@BFMBA@A@BDWD@CE@@BA@A@BDB@BDF@@DB@B@BHBA@HFABFB@@FB@@B@DD@@BL@BFB@@BH@FB@BB@BFE@@DC@@DE@@BC@@BE@@B@B@FD@@DD@@J@BG@@BA@@FBFB@@D@BF@@D@BED@AC@@ACBE@@AC@GB@BA@@BA@CDA@@FE@BDIBAB@D@BF@@F@B@FE@@F@FAACBA@@AG@@BA@@ACB@ACBC@K@@DBH@JA@BHA@BFA@@D@BD@@BA@BDB@BDBFD@@D@DB@@BBDC@@DA@BDA@A@@DAB@DA@@CC@@DCBBF@BB@@BB@BDB@B@@AB@@H@FAB@BA@BDABBFABADABEBA@A@ADA@BBABAAEDBD@BABA@ABGD@B@BC@@BA@BFCB@BCB@BC@@D@BBJBHA@A@BJB@F@ADA@A@A@@FUBBHA@EB@ACBGBC@AGE@AB@AM@@A@AABEB@D@DBFA@ABA@CBA@ABAA@A@AEBBBABAAA@DHBBC@A@@DAB@BA@C@@BA@A@AIA@CDCB@BA@A@CD@EA@@B@DA@@CAAAAA@@AA@@AA@@BA@@BAB@AA@@BAB@C@CCB@BBJGA@DD@ABC@@AEDCBBDA@EBCBC@C@@B@BAABF@BA@A@@DA@EBA@E@AAA@@DCBGEAA@BABAAABABA@ABA@C@A@CB@BABGHJDCBCBEBA@ABC@@LA@BHL@AB@BC@@FEBBLB@D@D@CBBDA@@BFAB@@BC@@DDA@BEBB@D@BBA@BBEB@BA@ADA@@B@BEBBBA@@FC@@BEBBFE@BFB@DDB@F@HFFA@BABB@@BB@BBC@@BA@@B@BADBFDA@BCBBB@DBDDA@BCB@D@BGBBBA@DJ@BA@@AA@DFBD@AB@B@@D@B@BC@BDB@BB@BB@B@@BC@BBA@BDBAD@@BA@@BB@B@@BD@BDABA@@AACC@@DB@B@@DB@@BA@BFC@C@@B"],["@@@AABB@"],["@@@BB@@AA@"],["@@@AA@@BB@"],["@@A@@BB@@A"],["@@B@D@@AE@@B"],["@@A@@FB@B@AE"],["@@B@@ACBB@"],["@@B@AA@B"],["@@@DB@@C@A@AA@@D"],["@@ABB@@A"],["@@BAC@BB"],["@@ABB@@A"],["@@AAA@@DAA@BDBBC"],["@@B@@AA@@B"],["@@@AABB@"],["@@@CA@BD"],["@@B@@AA@@B"],["@@@AA@BB"],["@@@CA@@DB@"],["@@B@@AAB"],["@@AA@BB@"],["@@BB@AA@"],["@@@EA@BF"],["@@@BB@@DB@@EA@A@"],["@@B@AEA@BF"],["@@C@@DB@@AB@@A"],["@@C@A@@DB@@AD@@A"],["@@@CCA@FD@"],["@@@AAABD"],["@@@AA@BB"],["@@@AA@@BB@"],["@@@BB@AA"],["@@@CA@BD"],["@@@EA@BF"],["@@ABB@@A"]],"encodeOffsets":[[[116905,35550]],[[117574,35580]],[[117600,35581]],[[117605,35582]],[[117606,35583]],[[117615,35536]],[[117659,35495]],[[117654,35494]],[[117677,35345]],[[117647,35209]],[[117642,35121]],[[117534,35078]],[[117306,35091]],[[117229,35152]],[[117144,35166]],[[117102,35167]],[[117015,35391]],[[116958,35400]],[[116931,35424]],[[116892,35456]],[[117965,35634]],[[117782,35611]],[[117743,35591]],[[116636,35119]],[[116623,35262]],[[116716,35263]],[[116768,35330]],[[116788,35334]],[[116869,35418]],[[116872,35437]],[[117111,35071]],[[117616,35277]],[[118017,35649]],[[116714,35266]],[[116760,35331]],[[116843,35358]]]}}],"UTF8Encoding":true});}));