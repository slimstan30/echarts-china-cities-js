(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('北京轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"北京"},"geometry":{"type":"MultiPolygon","coordinates":[["@@C@_S@FA@AHA@ECABBBE@@BF@@DEAADE@CFC@BGA@ADA@BCC@AGIA@AAACJAAAHK@@BMKSA@CCDMAEBIGIAE@MPIBDDOFAEcA@EQC@MC@@MBECB@CI@@DE@@DACOBEEUHBDS@EC@KCA@A@ECICECEBCJK@KAIOUAKEGIGAMBCJGdKDCBWAO@QAQFQ@UDGPKNEF@@NH@@HHBBQF@BEP@FAJOHIFBJIFCL@BGB@DKRC@ELCD@@BJA@FJ@DANKBEDAJEJADBBB@DCHEFAHBFLB@BDBNGNQDEBMDSAKDCRKFCBCO@DIA@@AB@BCZCDCBGCBGADMGA@BE@GFI@YAIIJMOGDCCA@AEBCJCCICBGEADELB@E@CD@@EB@@AB@DCCAFEGA@ED@@CH@@IIBSEBAEA@AKAM@@CC@AECCDCD@BCA@BCAKB@BGCAFAB@HICADCKCDEB@ABDBBATD@AD@JMIADISCBACAADGACBK@SGDCAAEFOAACC@@AU@AIDA@QACQCCABGC@E@ABAABCIE@BECFEECJGNMGABC@EG@CAICAFGDKA@AGCQABCYABCBCA@DIEB@KB@@AI@@AAA@AI@C@@FEFALGB@DCBEDEFIFQFAAEBAA@CE@@AE@@DI@@DC@AFE@CDEA@CK@ACICCDEA@FIADMB@BEC@HEF@HCBEB@@BDAB@@CFAE@HA@AD@DE@FBICAAFA@BEAB@AEABAA@CBEA@AGAK@EBADA@CHC@ENIG@DG@@ACAAFA@@AA@@BSD@DI@E@AAGAA@BCEAAA@BG@EAAFE@AF@AGA@DE@@IMA@BIB@BE@@JG@@NG@AJGB@JK@@CE@BEGAB@CA@BC@AFECADKDE@@GUB@AE@@GD@@CB@@ABAGADEC@BEA@BAIA@AIA@AGABAIA@AG@A@AFD@@DAFCABAEABABEA@@GABIB@BIB@DE@@CEA@CEABEC@BGB@@EAACA@GL@DIOABCE@BEOABEC@@EC@@GA@BIIAEBIA@AC@@BG@@FOA@BQ@@BC@DID@BAAA@CB@DCBGEADEAA@BG@A@@AE@AA@CG@@GIA@DK@@CY@GABED@BECABEF@@EBEUEAFOAANDB@BA@@JC@ADS@@BM@DBABG@BE@UFA@AD@ACD@@CJ@BEHBJSG@CACOCB@CCABAA@BETDJHFME@@BCA@A@AD@BEB@@BJBABD@ADB@@BB@@BF@BAH@@EF@DE@KA@BIJOFB@CCEC@CA@GKA@AE@@AI@EESHUDIDQAGDGBGC]BK@@BI@@FAAUBAEIBADE@IBOHEFAFGDAD@FKHAHKH@DCFE@SDMBABBBC@AGE@GJM@OHEBAJCFCDOJADDFED@DFB@DDFABCABHC@BDBHCN@BADDBEFFDBDABE@CLK@DF@DOEA@CDIVYAAHA@@DE@@JCB@EA@@FAE@FA@@EC@@FE@@CE@@DK@@DOA@II@MCI@@BKABDCBCE@IA@@CA@@GC@@AA@@HA@CGAAGBAEA@G@EA@DQB@HIAEEO@@JIHBGED@E¿EGB@DCBC@AAEBBFA@DNA@@DIAIDC@AGB@@AG@AICAEA@BI@GABNE@CFA@BHA@@HGA@DKAADCA@GA@@QB@@ECEDEBAE@@EA@ABI@ACA@@GGB@CG@@EC@@FE@@DG@AFA@@JAACDE@@FI@@HE@ANCA@DCB@FKBAB@DKBCBE@CDAKCA@AAEFCAGNACCB@AEEIDACEB@CAG@DA@AGBAAABBBC@@BCAEBKABIBB@CBA@KK@DAA@AAD@CGGB@ESB@CA@@AK@AHGCKN@AE@@CC@@CGB@AAMC@CC[@@KGACGG@BKB@BCC@HABEIABABED@@CFDFA@CC@@AFACCODK@SDBA[BKAQHAAIDIBDCAAFCCCEFAFE@EACDCA@AACC@@B@DAB@BEDB@ADEDADEXGFB@BBCFABD@@DC@@AID@ACBCAADE@DABGEBA@A@AF@HA@FBID@BD@EJC@@BIDCCCBC@BBM@GBEDFB@D@BDBFAAB@HBDEBB@@DEA@BABBH@DABIL@LGJQFIFGLAABCAABCCGMGACG@@BG@CCG@A@AHIBEABCCCBAC@MBEHGBKEIAOBCCBAMCGCCIEBGAODBFBDKFCHEHODEJKJA@KCKG@C@CEEAABCMGKC@ABC@ACCE@BFEV@JDHJHHFAD@JCBDBADADDFADBDKB@DIBCJEFSBAAAEA@MBEDICAD@DBBBHDDBDRN@BIFBB@FDBAB@DFBDDABBBF@@BDBCBB@DBBBEDDDADCBGHE@FHBFCLALAHBFEFBFHF@FE@GFGBW@EEGHE@CBKHE@GDKDGL@FCFBLGDGCCHLDFLTHRGLBdRFJHDPEDB@CFADCFCJIDAB@NJlHB@DDHBPAHB@BJHDFJDAJFFCFGBIDEBOF@FCBKDGDIAGLSDE@CLADJFNV@HAJLDBLE@QJMBAFBFHDBFDBFHFDADSPEDCFGDC@EDGBADMH@FEFELQFE@CBGBEDMFADKBGFIBCCE@C@CAEB@DEFDH@DDHEDAFDJBHB@DHABFDDFHFNFD@BCH@EPBDEFEBAHFHDDJJDHBJDBF@BBP@THDFHBHHBD@BBBRJD@BFH@@DJLADLDDFTLVDH@BCB@FDLDBDDBBFCLDBBFF@HFF@BCFBBBDDDBBADGFAF@LBDHAFDHAFDA@NJHV@NEJDDADAH@DBJCL@DBCHFH@DTJFC@AbBHDFBF@FCFDD@FE@ADCLDTC@DABK@KFJ@LDLAPIJDLALFBBHDDDDBHJBF@DGFADHL@FBDFBJCFDFBJVLDHAHD@QFCXSBCHG`@LEB@NIBDCFXELBBBBJGJ@BCB@BFBABABCACBAFFDFHDHDFKHLFBDTEL@DD@DBB@DFBBNDDF@HHEF@DDBCJB@B@FJFFBFLJBDADHAJCJBDBBJDDAD@BLJD@BBD@HFHBD@NCDBH@B@@DF@P@FBDDBFFDCBCBCFC@CJBBID@FGD@DCFBBADGA@FABBB@FGHAFA@@BDDBB@DBDMDAHEBADEBEA@BGH@BHDBDCDCBAFAFFFGLAHAB@DMDCDaCCDKA@BC@@DIA@DC@@BGCEBICCD@BE@ABF@@BGBH@@DE@@BF@@BG@HB@HA@@DI@@DMA@AC@CBA@@DEAAHE@AHC@@BB@FBAFO@EJCBGF@ACFA@@AC@CDEABBC@@BBB@BFBADBBADFACFB@CFBBD@FC@BA@ADDFD@@BABGCE@EF@HDHDBFF@HADDHHF@FGDGAKJGBgAAAAEMRJPADFBBHJPJJD@@FEFBDDBHAJDBBBDHJJBDHPJLFJ@HELBLCF@LDDHAJDF@FBDDPDHVFJBFDFCLADBH@HBDBBFJADBLADBFAHFDHDDBDJFHHDBBDDDDAR@RGNBHCNAHCDBJ@HCH@HC@CCENB@ADIDMHIBIFABBL@DBFABD@D@BRABHDDD@FJHF@BCBBBFBHHB@DDBCDDBC@ECEDCHFBBBARDLHPBJFL@HBBBBLDDTJFFTFB@BEF@^BFBBBCFONALABDDLDDDJBBDFFFJB@ABFFD@LADANCTAFB@FFLBLFH@FDH@JCDBDHFDJ@DFF@DJDADLJBHLDPL@DAD@FH@DDFCJFDD@JFHVLADEBBF@F@B@DJH@JAFJDDFHBDFLCDCF@@CDABCF@BEDCFA@KBCFE@ED@DCHFD@FAHBHIJELAHGDB@FCF@FAFJLHDD@DBL@HBFAL@BAJBNELBFDNCFBR@FBBDH@HDDDJAHDDAHDNEDQL@FCNBLAFDH@REHFHBHFBDKPBLCD@LEDG@CBBDABGFKFADBB@FABCBAJUDG@KHADKDEFANCDCJEFMJCH@FGBIBADEDEHEBIHAHCDCBADMFIFCFC@EH@DCDKF@DBH@DARHFDJDDLFDDT@DHFB@DLBLGDEDAAEDEFCBKLOJEBEDEL@RKLFJANDLIXBDBTADADET@@DDDDFCDBDENALILALKBBJMRAHMHDHDJDDCLDD@FDD@HB@DBLFFCBAHADCBAFBFDD@FDPIF@PCH@HAH@FFBHJAFBLHDFNDJEP@HBDJD@LCJGBAHCHGFAFEF@PC^PDH@HDPED@DDJ@DDD@DFF@FBDCDBB@J@BABEHGB@D@FBHBBDH@FCBRDLLLABBHEFDHABAD@HCDE@CHCJELADBHGLAFDHBDGAEHGBEAEBEFGGMEACADEACIICAAA@KA@BIAGFEGCAECCAILKHC@IDABIACHAHKJEBIJCJBAEFEF@JCIKCICC@GH@NG@CDA@EHEL@DCDBHEF@HEJ@HAAG@GBAFANFFIJ@FABEJIHABELEBEAGDA@ABCFAAKBEDAD@FFDFDBP@BCDC@CDAD@HBHABBHEP@BENALM@AACLCFCH@D@BEHCDEAABEAGACDAHABADENABAAIAABGAG@ACDC@BEF@HGL@bEHA@AEC@ALYCEE@@AFK@CJ@HEBAJABE@IBCRKH@BCHA@CFAHGCIFABCPABCDAPBFCZIFCNALDBAP@HEHFBFJBFDVAFDL@FALBHCJFJAPFBBNBFBF@FBBABEFC@ABCJBF@H@HCF@FCH@NDHCLADDD@DDFAD@PKHBBFBBDCPBHCLBFAD@FEN@BC^KDGNG^FFDD@NIJKJCBAACBAFAJEvCF@DAFBLDJBFDD@BBAFDDFDBDdBJDFBHFNALFFDJADBF@ZFHAJBFCJ@NGHFFC@EDEH@DBL@@AJ@PEHBDBD@DBJBBDFCVEHEBADANIJG@IGAOCFKEECCBC@EAAS@IEADM@EJBHGBAFGD@AE@EDDB@BA@Q@IABANC@AEBCCDIA@ACBEAIGCBC@AMBACCAO@BDEBFBGFBDADBBCBC@GEAKHI@IAAGCEKCA@CCEDGFCBGFCAEFQFAHA@GQMGBCBCACDG@GFCCAEOEEEAEC@ABE@CDG@CD@DE@ABBBE@@DEBAFG@KD@BE@CDADCCCBE@MECCIAGFMC@BABE@AAC@IGCAACGCACCBGCMAOIE@CBIAGCKIECC@CCEA@CBA@C@ACAAAJGDIBGFEFKFCAGE@IDOEEFIDCAACE@GEIBMDICAID@KM@GHCJ@VYCE@EDEHEJAAGA@CCFKHCH@FELC@ILEJAB@ECEGMIAEGAEICBCEKEBEBA@EDGCEBEFEBGG@AGOGAE@AACBAEG@GDEH@DDFADBLABEFABCDIF@DAAEBA@EDKBEHGACDAL@DAHABAAEAACEDEAE@CFGAKVKF@DEHE@EBA@CAA@CAA@EDCBEPBBCJBDBF@DFBA@FF@H@FBDFFBFG@GDI@ODEAEDC@CFECSFGDK@CF@FEBEHBLFL@DBFCDBDCFAD@HEJBDCBA@CBCKAK@CCC@AADCAIF@@CBCD@BBD@DCHA@AEAEBICBB@BABAACE@CBA@ABCF@B@@AAAACBEH@BDDBDA@AJHDCD@FEFAAACA@CGBIGICFCAAO@ABCACDDGAACBEFC@E@AACA@AAA@BABCBBBCB@CCA@AB@@AAAEDA@G@C@ACDA@CJI@EFGAAC@AAIGCCH@B@CCCAAAN@AGACADC@EICAEAIBCAMA@FCBC@EHIEGBABCAIC@IAAAECEKG@EA@CBC@EDG@CACEC@AEEABIEEGBADCFMDIA@DC@@BGBGGGBGCCGMGAGGCBCACKDM@@KFC@AAADAGACCC@GE@EJ@ACCC@EIACCABBDIBCDAHCH@BBBIF@A@AGEBCHC@ACA@EGC@BIB@BC@ABEBID@AEBIDHEGKQGI@GCG@MDEFKHCCEDOAEDBBECDFEBEAAAW@@KC@AGC@@HQAC@BGMABAE@ACKB@CEB@ID@ACCA@AMAABICKMKGDII@BGE@AFEA@AG@@DE@@CUA@FOHMDO@MCCDBB@HD@@BA@CHGAAHC@"],["@@DA@AE@BD"],["@@@AC@DB"],["@@@CE@BDD@"]],"encodeOffsets":[[[119770,41013]],[[118586,40459]],[[118501,40494]],[[120184,41139]]]}}],"UTF8Encoding":true});}));