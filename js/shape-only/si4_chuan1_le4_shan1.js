(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乐山轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"乐山"},"geometry":{"type":"MultiPolygon","coordinates":[["@@GGEEA@AACAAAA@A@CDCDCBCBCBA@C@A@AACBEDADQRKHEBAAAAA@CACAA@G@CBA@G@EBSDCBABIAGEA@MEC@E@A@AAAAAAGEAAGAECECCAAG@ECK@KAaBGCECGIEEEKGIECEKMGCEGAI@GBIBEBGAKAIAMCICIGMGGCGIIICIAKAE@EDEFABC@C@A@CBA@ABA@C@A@CBI@CBABA@CDCBA@ABA@CAACACAEAAA@A@ABEDABA@A@E@C@ABABABABABI@A@ABC@@B@BBDENCHCJALEJINELAFCFAHEL@JDPDPDLCNKHCHEJAFAFAHENAN@BDTFNHTFNJZBJCLCNAFABEJEPCLBLDJHJLHJJDJALENALGNENGTILELENGNGNEPAJATDHDHFFNJLDPFLBLFHDLHLJJJDFEJMPGJEJORKJILGLCPANBNDNDJ@DFNHLBPAPDNFNHFflDBHHBF@HGHATAJKLBHFDJ@RIVC|BFBDBCF@HBFDFBBDHDNBF@FCBGBIDABABCBMAEAE@CDILEJADADCFEHKJCF@DBBFD@BAHCPAHBFDDDFDDBDFLDDFDBDDD@FAFAHAHADEDEDCBEBEFCDCFCF@FADADBDFDDFDDBFDDDBHDJFJHHJDFDHHHHHFB@BD@H@HAJCNEHBH@DDF@FADCDCFEHAHEDEFCFAHCF@FCF@FDDDFBD@FBHBDBDAF@FBBB@D@DFDF@F@H@HCBADAFEDCFCFAFANCP@RDLF@JBL@DDHBNBN@JBRFHBFFBLBLBPANANAN@PBNEJAN@LDFBHDBBD@D@BD@BBF@BFJBDFDHDDDDDBDCBEBE@I@CBC@A@CAA@AAA@E@C@A@A@CBCBABA@@DBBBBDFBD@B@B@BBBBD@BBBB@FF@BCFAD@BADCFCHABIPAB@BBB@DBFBFBDBDDBBBB@B@@BB@B@B@BBB@BDALBDBDCLADCD@BHFDDFBFBFAPCHAJBBB@BBBAF@DDBFBH@FBBDFHFDFBF@B@BDBBBDDJBDBBJBBB@DCPAB@FBDBDD@JDFDJDHDLDDDHF@DBBDBDBD@HCAHAFABCBCAC@GCC@C@AD@DADCB@FADCFABBDBBBBAB@BCBABCBC@C@CAAA@ABCHEBC@CAEAIACCACCEAECE@A@AB@BABADABC@C@ABEF@BB@BBB@B@B@B@@BB@@BB@ABABA@A@EAGACAE@A@@C@AFECAAAA@A@C@@AIBABBBBD@J@BABKHCFAB@BBB@BBBFFFFBBGLAF@F@N@DBD@BBBBBHJDBLFDBBBBDAFABKHBBBDBFFF@BBD@BCC@B@DBF@FDBDFDDFBDBFDBBBFBD@JBB@BB@FAD@B@BDBD@BD@B@B@B@B@B@DBD@F@F@B@BABAB@BCBAB@B@@DB@B@@AB@B@H@DADADAHDJHHJ@DB@BBBAB@BGB@DAD@H@DABC@AGAEEAABCBCDCBABCBA@C@AAABAB@B@BBDDB@B@B@@A@C@A@ABAD@B@B@BA@AB@B@B@DBDA@C@E@ABGBABAD@BBBDDHBD@D@B@DADGFCHAFADBDFLAF@B@BBH@DAD@BBBADAB@LBB@BB@FAD@B@FBJ@F@J@FBL@JAH@BAHCLEBABBBBDFDFB@DDHBF@BAB@B@@BDFBBDDBBBBABBFBDBF@BB@BBD@B@B@B@BAFAJCB@D@DBBB@D@D@B@BBD@DAL@D@D@BAFABABGBE@ABA@@B@BB@FD@B@BABMACBA@AB@B@D@BBB@BD@BBDBF@D@@ABCBAF@BAB@@A@AB@@AAA@ABAB@BBB@D@B@B@BCB@@A@AB@B@B@B@B@B@B@B@BAB@DAD@DAB@@BBBBBBBDAD@FBB@BAB@B@BBB@BB@BBBBBB@DBB@DBDF@DCBA@ABADBD@BC@A@A@A@AD@BABA@AB@B@BFBBB@ADABAB@BBB@JFBBFDDDBB@F@FCDABABABA@ADBBF@@BDADAHABAFCA@@ADADADAB@FABBB@@D@BDBJHDBB@D@B@B@BAB@BAHBJ@B@D@BBD@BBBBFBBBAFAD@BB@D@D@LADAFADADCB@FAFAD@DA@ABAAI@ABAAC@ACC@A@AD@FABA@AAA@ABAFAD@FDD@B@@A@ACAAA@A@ABAB@F@BABA@AA@@AA@@ABABE@AB@DALAB@BBFCBA@CA@AA@AAA@AB@DABAD@@ABAHEBABCFGAA@AA@A@EAA@AAAAAEA@@AB@JCB@DADBHBB@B@BA@A@C@AECAA@ABA@A@ABADABAB@BA@ABA@CAAACAAAAAA@A@A@CAA@A@C@CBABAB@DAB@D@F@B@B@@C@AAEAA@CBAB@DAD@DABA@A@CCCBG@AAAA@A@C@CAA@A@CAACCC@C@ABCBG@A@AC@IFCDGBAB@BEAECCACAC@CBAAAACAA@CACBA@ABA@EDC@AAA@AAAC@A@A@CDC@CAC@AAA@ABABAFEBABA@CBABADAB@BABABADGBE@A@C@CBEBA@A@AAAA@AAA@@C@E@CBC@ABAD@D@BBD@BBDBD@D@@BB@BBDDBBB@B@B@D@D@BBB@@BBB@B@BADCB@B@BB@B@D@DABAB@BAB@BCDC@ABABABAB@D@F@F@BABABCB@HM@ABABADAFAD@BAB@@BB@BABB@D@DBDBBDBH@JBDDD@B@DAD@B@FDD@FFLJLJBBB@DBD@FBF@D@BAB@B@D@B@D@B@B@BBBBDDDBHDD@@DBH@DBBDBFAFABAFAH@J@B@DAF@J@D@D@D@DBBDBBBBBD@B@B@F@H@DFPBBDBB@HED@BBBFAJABABKAABAD@BBFBBFA@BB@FDB@HDDBHBDB@BBH@DFFBBBBB@BBB@D@@BABGHABABCH@BBJ@F@BBBB@HBB@D@DBBBDBB@B@DABA@ABAB@BAB@BAHBB@LDBA@B@D@BADA@EBABABAFAB@BEB@D@BBBHBBBB@BBDDBH@BB@BABAB@DD@DDAB@DADAB@BCBAB@BAD@B@B@BBBB@BFBBBB@D@DBBB@BBBBBBBBBBB@BBDBBBDBBBBB@DBB@FAD@BADAB@FBB@D@DBBDFBDADABAB@@A@AB@B@B@@A@ADAFCB@B@DB@B@BBBB@BBB@B@@A@A@C@ABADADABC@A@A@A@A@C@A@CAEAAAAAACECEA@CAC@@A@AAE@CBAB@D@BBBBB@BADABAB@D@B@B@D@FBFAB@B@FADABABA@A@C@C@C@CBCDAB@BBDBB@F@B@BA@A@A@A@C@A@EAAIAA@ACCCACAACE@AAA@CBA@AACAAAAC@A@G@AAAAAA@A@ABABAFCBABAHCBE@E@ABC@AB@BCB@DCBCBCB@D@BABABCBC@CBCBAB@DAB@HFB@B@JCF@BA@CAAACBADAB@B@@AB@B@B@D@DEDCBC@EBEBAB@DEBANCBABC@ABAD@FBD@B@DCDCB@B@DB@NBBB@FBF@D@DAH@D@DAB@BAB@B@B@B@DCBCBAB@DBD@B@BAB@@AB@@ABAA@@AAA@AAA@CCGAM@CBAH@FBDBBHBBB@BBB@B@BABA@AAACCACA@AA@A@C@ABAB@@A@AACBABAB@B@BA@ABCAAAC@ABAB@B@B@BBB@B@F@B@FABB@B@FAD@BBBBAB@B@B@DDDBD@B@BADAB@BABC@A@AA@ACAA@A@A@A@CBCB@B@B@B@@A@AD@D@@A@A@AAACACA@ABCF@B@H@BAB@@CGAA@@A@A@ABADADAB@D@D@B@BAAACAE@E@CBC@A@@A@ABC@ABAB@B@DBDBBA@A@C@C@CBADAB@@AAAMAA@@ABC@AAAABA@E@A@A@CAAAC@E@E@EBC@A@A@@AA@@CAAA@EBEBEDA@EBA@@BAB@J@BABA@KDA@AAA@@AABA@ABCJABA@A@A@@AC@AA@E@AAA@AAA@A@ABA@ABABC@A@AAAACAACACAA@@AA@@AAAAE@G@AAACAA@CBA@@AA@E@A@A@AACCAAA@A@CDA@ABAA@A@CAAC@@BABA@AA@CBABADCBADEBC@CBCBAHAFCHABABCBA@CAA@A@A@A@ABAFAB@@A@A@A@A@A@A@A@C@ACEAACEAAGAAAC@AAA@A@@A@AAAAA@A@AB@BA@AEEA@ABABA@A@EACAA@A@@AAA@E@C@AB@B@B@FBDBDBB@B@B@B@B@BAB@@ABCBABCBA@A@AAACAACCAAC@A@A@AB@B@B@BBBBBBBBB@BBD@D@B@@AEC@A@ABA@A@ABCD@BABBBB@AB@@AA@AAB@@A@ACAAAAAEA@AB@D@B@@A@AAA@AAA@A@C@A@AAAAAAAAC@AA@AAAAA@C@C@A@@BAB@F@BABABCBABEB@DADABABABA@A@A@AAAAA@A@A@@B@B@BB@F@BB@B@BA@C@@D@BABABA@A@A@AA@AAC@ACC@A@A@AAAA@AAA@E@A@AAA@@A@ACAAAEC@A@AA@EC@AAAAA@AA@A@A@@BA@AAAA@A@A@A@C@A@AAAEAAAA@EBA@@BABBB@BA@A@AA@AA@ABBBAFA@ABABA@E@CAA@A@A@CDA@A@A@AAA@AAECACCA@AAABAB@@A@AA@@AAAACDAB@@AAC@ABC@A@C@ABA@A@A@A@A@A@A@G@C@ABE@CBABAFAFAB@FB@BB@DB@BB@@BBBBBFBDBFDDDDBDBB@D@FADABBB@DABC@A@A@CDEDADE@A@A@E@AAC@AA@A@A@EDA@CBABCAA@AA@CAC@C@CBABC@C@C@C@CEI@ABCBCB@HEBABA@AB@B@BBB@@BBBBBBDB@@BDBBBB@J@HBHF@BBBBBHBBBB@@BB@B@BBBBBAAEAA@CBCFEBAFADA@CAAEBCA@ABCDG@A@A@CD@DAB@FBBB@BDDBBB@NBBABA@A@C@CAA@AA@A@AACC@ABA@AB@B@B@BAB@BA@AAA@AA@AACAA@@AC@ABEBA@A@@AAA@A@ADADAB@BAB@BEBC@AFCBA@AAA@C@AA@ABA@ABA@AAAAA@A@A@A@CBAB@B@B@BBB@BCBABAD@BA@AB@D@B@BA@A@CACA@A@AACBCA@@A@C@A@C@E@AA@CBABA@@B@BABABAAAAA@CCACA@A@@F@BA@A@ECCAA@C@CACBA@@ACB@BCBA@G@CBE@ABCBABABABCBA@C@A@AABADGBA@CAEACA@CCAAAA@A@I@A@ABADAB@B@FAB@DCBABAB@BAB@DBFBB@F@BABABA@C@ABEB@B@B@B@@B@BFBD@D@LEF@D@FBFBF@B@D@BA@CCGAA@A@AAA@A@ALIFEDABCAECEOGEACCAECCECECE@EACE@IAEEO@AAEBEDEFAFDDFBBDHDBBBBDJNFDDBH@FA@ADCDE@ABI@OBI@CBA@A@A@AAA@AAA@C@CACAG@CAA@CB@@ABABA@E@C@E@CDEHCJARHF@DBH@ACAC@C@AAGBA@C@AB@BADADCB@DABA@AB@@A@AAAAAA@@A@ABAB@H@DAFA@A@A@AA@AAA@E@A@A@AAA@@AAAACAAA@AAA@E@A@A@AAAAC@AA@AA@BABAFAB@@A@A@A@E@CAAACBADEBG@EEEMECAAAAA@A@AAA@A@A@ABADE@AAA@AEAGGEAAAAACEAA@A@A@A@A@CBA@CAACAAAA@BA@CDIDC@AA@@AIBA@@ABABCBCBCB@@A@ABEBAAA@AAACCABCAAAAA@ABE@E@A@GEK@E@CDC@AAAE@E@AAAAAA@C@AEM@A@AEE@A@ACIAA@ABC@A@A@M@A@C@ADMAEBC@GAAACACAAEAAAAAIM@AC@C@A@ABCBA@A@A@CHCDGDaJEDG@G@EC@EBMNWDIB@BE@IBGBKBADAD@FABC@CECCAICCCGECEA@CCGAI@CACCA@GICCC@QCEA@ACIAG@EBEBABC@EFOA@A@CCEEA@A@@AA@@ABA@AAEC@EDCBCBCBKBCBABA@CBAAA@CEBEDO@CCAGAC@CBCBABC@CCCEEC@ABADAJ@BABABA@C@E@M@I@EBA@ABCDCJE@AAAA@CACAABEDCFA@A@ACAEAACAEACAEAC@E@C@CBCAC@ECACACBE@ECECCCAACCCCAEAGCC@AAABCBCBADCFEDC@GBCBCBGLCFCDEDG@C@CBADAFADCBGFCDCDCBCDEBCFCBADA@GFCDCBCFEHCDEFCBIBCBCBABIFCDABCDABC@ABGCCAGCIACAEAGCCGAAACCAECECGCEAIAEDCDC@E@ICCAAAAEAEDMHEDE@EAEC@ACCAACAA@C@EACACGECCAIACCECCAAGAE@C@GCEEEBE@IACAE@E@CAAA@G@ACEE@EABCDABAHCF@D@DCBC@CDG@ABCDIBCBCBC@G@E@AGEC@ACDEBAFC@CEBE@C@GAEAC@C@CC@E@ADADAB@F@LDD@B@FCFEBE@CAAGCA@EAAAEEEKCACCECCCEEEECCCCCCAE@ECG@CCAC@C@CBCBE@C@KCACCCECAAC@EACAEAEBEAE@CAG@CACCGCCAGAEAGCAAACAC@E@E@C@EBCCBCBGFABADAB@DABIHKDI@KASGGACAC@CAGDGDIBW@K@CEDKBKEMS_IICCECIKSGECEGGAKCKAI@MCOAKEICKCOIEICICGAG@EJGJGPEHOAECEBI@EBCCMEMCICKGEGCC@GAGEECIMKIQICEECIBGAKDEBABCD@FCDEBEDAHADABC@E@CACBABCBG@ABA@ABGJAHELAHEJKTA@@BABADCDCDAB@D@B@BAHADCBADADCF@DADAF@D@D@BADEHCBEFILABA@A@GBMFGDKDC@I@E@ABA@@BCDADABABCBAB@D@D@NAR@FC^AF@FDFFBZNJHPJFJDFFNBDBLBHBJBNDJJHHRDHLLDHDLDVBFJLJHRLHJDLBN@HCHOPMHMJIFABEHEDGJGHIPEJEHILGHEDGBKFIBUAE@C@CB@B@D"],["@@A@@BB@@A"],["@@@AA@BB"],["@@A@A@AB@BAB@BBBD@DB@AB@BBBB@BB@B@@ABA@A@A@AB@@AB@BAB@@A@AAAA@A@BA@AA@A@A@A@@B@B@BA@A@@BC@A@"],["@@@BB@@AA@"]],"encodeOffsets":[[[105717,29506]],[[106650,30178]],[[105995,30571]],[[105995,30571]],[[106001,30579]]]}}],"UTF8Encoding":true});}));