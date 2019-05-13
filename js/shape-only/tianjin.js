(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('天津轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"天津"},"geometry":{"type":"MultiPolygon","coordinates":[["@@aJDLF@JNF@FNLAH\\FABPD@EFHELCHVG@AHJ@G^G@AF@DA@@FEBBFcJqAEDECFFABBRCHBFEDDNAHA@@`CHG@AT`D@AH@@PBBCJDBFABGB@@BBAB@BIFBBDJ@@FE@DHKD@JA@@FGCCDE@AZFDM\\JBCZCRKA@FGA@JHB@FBBXFBCFB@BB@CRJ@DJ@HCTF@ADB@AHEAIFKACH@CA@CLA@FBAFB@@DH@CFE@ADIEKA@FAABIB@BCG@@CC@BAOMCJGG[C@BABG\\AAAD@FL@@DJBADHB@BA@ABOCCDC@@BC@ADB@ADA@AFL@@A\\D@FFBBEB@CLB@ELB@@BAB@DBB@DEA@DD@AFCACDBHJDALF@AFFBBCPB@DB@ABBBBBD@@DDBFB@DHBCHDBLEJNMF@DKCIFCFQCBAA@@AEBAAEA@DOICDGD@BB@ALDA@BYLI@@GGA@AMHEABCC@GNLE@NC@@DAAAFEAAJKBBBF@CB@BF@AFH@@BN@ADZF@DD@@DF@DCFBEBF@@JB@EDCPA@@FI@@BF@@DDCCTD@TD@BB@G^FAGPECBGG@@BSAEDALG@AJA@AHC@ABC@@FEAAHB@@DB@BDF@AHHFA@DBABD@D@CBBBCBXH@DB@AFH@EHCACFCBCFA@CFDACL@BB@AFB@BCDBBA@BBBBCFBADC@@BCBBBD@ABE@ABAA@BLD@BHDBEGA@AD@CABEL@CJHBEHDBEJBBPDFCBEJDDBH@@FADHBMNIHFDEFFD@AJFADBBBAF@D@AHDBRDBD@RCBBJV@@BD@BDPBFEBBCDTHL@DAHBBCDBABTDCJJBGJNBAND@ADFBHE@DED@H@FH@X@BCBBBCB@DFZ@DMA@CFA@GMCADGAGBCNMAAIA@KXGCODOJMD@LJJC@C@KC@BCFAFDRDBAD@CD^F@DF@BFFA@FJB@DbEPEbElMTIZGAAFA@CJ@BE@FHA@EJA@CHB@CPA@BG@AFBBVGHFL@BBABD@JBADDBGDBDHBFJJ@TBBHB@@DH@AFKBCB@HE@@BEA@DADBHC@@AA@@DCB@DB@@FJ@@FD@@HH@E\\F@ADB@ARBBBFED@B@HD@AJE@@ACAAHDB@BH@AHCB@EAAADGB@BE@BBK@FLEBDDADA@BDNB@DJCBBIR@DBBDBFALDX@DHL@DJFA@BH@HHKJAB@DC@GFOHED@BCBAZE@ADE@AFGACEEDA@@AGAAVJ@IVB@@DB@@DHGJB@JpFBCFBEPPBBCNFBGHBPC@EHBFFRDRA^GD@JCFDJGHBLGFECCBGHBBCFBDCFB@EFGD@@BF@@DPALEDCECDEDABED@HCHJH@FDDEFDHENCLBDDDA@ERABEN@JEDDBACEJ@AINMRBJGAIDCZEJCLAFRTJHAHJHFD@@AEKBAFBRJGF@BPAFBHEDBFHBAFONFH@BEFGHAD@BFBBJID@BFDBDEB@J@AGDCL@FBNIBBFJD@HKDCNDF@DAFGFCdE@A@AICBCJC@C@AGAEFC@@MIBAABC@CKA@CBANACAGC@ARBJG@GLGHCX@LENBNE@EDAFBHHD@DCDIIMLCBGN@@AIEBANEGKLEJDDAAGIKHKCIBECIECSF@GBKGCIDC@FKAAGCBOC@OB@MKGC@CHCAAEFUB@HDLPJDBCAIFGDARDHGBC@EIKDGB@N@PHJHBLHBNARQXGFG@GIGK@IDEFEAAC@EHILCP@JCDGCEAC@EBIFIJGNJJ@JBJJHJHFSZA@BND@@LVB@BJ@AFDBBDEDILjTABlEHHTBvWVAPDHCDFL@LHHB`MFALDNC^M^GJIEKABEGACC@IMA@AOB@EACIGAAEBAECAAAADAAEFCBDB@ACB@AAAABEBAD@AG@ADFAEGKSCCgG@AEJA@AFO@ECCQEEEOBGYG@BqGBKXBFKCYJKOIKNEASCeA_ECSBGFENEF@HDZ@FCBE`TEFB@EFHFFEECBCFDFADBDEUWCOGBAIECLG@CEIDFFAD@@BF@BBAB@BNFBEHCXDT@JGAGVEBEDCDB@BF@@DRC@BZ@PAP@BCFAJ@@B@BTC@DB@JEAAB@FB@ACAB@@CC@BCHOF@BADAAADCHBH@HECEB@BCHBDBBCFDBAACBAD@BBPGJFABDB@BD@ABBDDAFCBC@CB@CCAKNECG@EF@@EzQBiAC@Ey@BUI@±]GaQaý¥Y_YeK]EaDqPmHcD{DKQBMMaKEUC_BOASY_YAYDXSIaa¹JgCeOQ[@RUbK¶MPGJMA¯CUSQÓgOKMWEa³OqIGFG@EBEACIGCFK]EE@@DFD@B@BG@BHCFC@@EEAIHEACBC@BFCBQCaDFKACEBECADE@SSKMIKHQKHEJ@[UGCoO@d[CFSMIAIE@AH[A@DOA@AQKOEEBARGNI@G@BSgE@AOACJSKMVC@IXF@hJAFmKCHB@PVVFAHHB@JC@CH@BABD@ABMFC@@BSB@BAAAHG@JL@BBBWABHHB@N@BMBMAEEESMA@EA@@CCE@FC@AEQ@@GCAA@AJC@BEK@AAABSGA@@FEA@BCBC@@EC@@DI@ECB@BMEB@ESEAABECAWBAECBBCC@CIBCS@@IWDAHC@@FCA@DHB@JS@@DA@@H]BCTKfG@BHK@@FEAADJD@RJhNNI@@FQBBDCBQA@BBLMIBNFJADHHEBuK@IA@AKU@UDDHKI@HAGAAC]@CDCA@MSAHPGBOEMEIA@EC@@DA@MBAASB@BCB@TE@@BBBBDAHCBDFABFNGBBFKBBFC@BDB@FPC@BPCPMACEoBE@AAC@@DcB_D@ECB@DC@@CA@@IE@AAG@BDK@EBABQA@JE@@HC@ABA@@BB@ADOA@DIAACA@NxQB@FIBHXHABFKBFLIDLPDTF@DNC@CAGB@FA@BJDXmBA[@@D@@NL@BHB@H\\BTD@HRB@JF@FL@FHDNDABJDCDTD@DTA@@LF@BB@XGBADE@@B@B@DJXJ@XEDFHAFHCBBDBDJBBHTCAIGBAAGBEA@EC@BC@AB@@CD@@DB@@DJ@DDF@DAF@@CLABBF@@AB@BBJ@@IBBDBB@ACJBJDR@@HD@@GfBAFXBCLH@GTPFjK"],["@@ADBC@@"],["@@@BBAA@"]],"encodeOffsets":[[[119704,40005]],[[119933,40571]],[[119588,39989]]]}}],"UTF8Encoding":true});}));