// ------------------------------------------
// SpOoKy Dayz Trainer - by Jonastos (nCore)
// ------------------------------------------
// Frissítve: 2024-01-03
// Verzió: 1.0.3.0
// ------------------------------------------
// 179 db SpOoKy figura
// 234 db különböző szöveg
// 6 db képes háttér + 7 db nCore téma háttér
// ------------------------------------------

// -----------------------------
// Globális változók
// -----------------------------

var verzio = "1.0.3.0";

// -----------------------------
// Böngésző helyi tároló
// -----------------------------
var helyiTaroloOkay = false;

// -----------------------------
// Számlálók
// -----------------------------
var megjelentSpookyk = 0;
var elkapottSpookyk = 0;

// -----------------------------
// Időzítők
// -----------------------------
var spkRmvTmr;
var autoSpookyIdo;

// -------------------------------------------------------
// Minimum ennyi idő után jelenik meg Spooky (másodperc!)
// -------------------------------------------------------
var defSpookyMinIdo = 55;

// -------------------------------------------------------
// Maximum ennyi idő után jelenik meg Spooky (másodperc!)
// -------------------------------------------------------
var defSpookyMaxIdo = 195;

// -------------------------------------------------------
// Spooky megjelenés után ennyi ideig látható (másodperc!)
// -------------------------------------------------------
var defSpookyLathatoIdo = 30;

// ---------------------------------
// Megjelenő Spo0ky szövegek tömbje
// ---------------------------------
var spookySzovegek = [
"Az erdőben járva Joe Bidennel találkoztál, aki fantomokkal akart kezet fogni. Meglátott és ijedtében odaadta neked a pénztárcáját, amiben 1050 pont volt.",
"A Hit gyülekezete tévedésből rád rúgta éjjel a lakásod ajtaját. Kárpótlásképpen adtak 250 pontot.",
"A tévében úgy néztél meg egy riportot Rusvai Miklóssal, hogy nem volt rajtad maszk, ezért elvette 300 pontodat.",
"Éjjel Kárász Robival horgásztál ezer lámpással a közelben, de lenyúlta az összes megtakarított pénzedet. 175 pontot vesztettél.",
"Segítettél Szíjjártó Petinek egy gázkészlet kitermelésében, ezért átpasszolt neked egy 2100 pontot érő uniós pályázatot.",
"Beparáztattál egy seregnyi brüsszeli bürokratát, akik átadták az összes korrupciós ügyeikből származó bevételüket, ami 1350 pont.",
"Bódi Gusztival fésülküdtél egy szórakozóhely mosdójában, ezért aranyeső hullik le rád 960 pont formájában.",
"Eva Kailiba botlottál a 4-es metrón, aki rád nézet, majd ijedtében átadott neked 290 pontot.",
"Magad elé engedtél egy tehenet a buszmegállóban, aki legelőre szállt fel, így nem fértél fel. A következő menetrend szerinti autóbusz 21 perccel később jön csak, így ennyivel tovább is kell seedelned a torrentjeidet.",
"A Vérvári Vámpírpagodában sikerrel beüzemelted az első szénsavas vér üdítőautomatát. A próbaüzem során a gép elkezdett füstölögni, mire te lehajoltál alá és találtál 236 pontot.",
"Elvezettél egy egész hordányi zombit a Holt-tengerhez. Hálájuk jeléül 26 perccel rövidebb ideig kell seedelned a torrentjeidet.",
"A boszorkányok szilveszterén felszolgált koktéljaid annyira ízlettek a bosziknak, hogy kapsz tőlük 178 pontot.",
"Kincskeresésen vettél részt az elátkozott erdőben. Olyan szemfüles voltál, hogy te találtad meg leghamarabb az elrejtett 117 pontot.",
"Megidéztél egy szellemet, aki sajnos ellened fordult, és elvette 71 pontodat.",
"Jelmezed olyan riasztóra sikerült, hogy az egyik háznál rád csapták az ajtót, amelynek következtében kiborult a kosaradból 20 pont.",
"Tökpálinkával kínáltad a Halloweenkor kopogtató gyerekeket, büntetésül 6 perccel tovább kell seedelned a torrentjeidet.",
"Gonosz voltál a gyerekekhez, mert spenót ízű cukrot adtál nekik. Büntetésül 21 perccel tovább kell seedelned a torrentjeid.",
"Megidézted volna Halloween Szellemét, de a varázsszöveg latinul van, így előbb meg kell tanulnod a régi nyelvet. A latinórák 39 pontodba kerülnek.",
"Piros volt a sütőtök, nem sárga, a pontjaid száma előre megy, nem hátra! 272 pontot kapsz!",
"Gyerekekkel kóstoltattad meg Varga Irén rántott dinnyéjét, amitől rosszul lettek. Ez 94 pontodba került.",
"Részegen Troll balettet jártál a tündérbálban, ezért 3 perccel tovább kell seedelned a torrentjeidet.",
"Miután a kriptában bujkáló vámpírt észrevetted, denevérré alakult és elrepült. Viszont hagyott a koporsójában 85 pontot.",
"A temetőben megtisztítottál egy elhagyatott sírkövet. A szellem, aki ott nyugszik jutalmul eltüntette 2 seedköteles torrentedet!",
"Vegán vérrel kínáltál egy vámpírt, dühében elvett tőled 27 pontot.",
"A kocsmába beérve mindenkinek fizettél egy töklevet. Jutalmul 20 perccel rövidebb ideig kell seedelned a torrentjeidet.",
"Vadiúj tormás-szellemchilis nyalókádat talán mégsem a tündérek óvodájában kellett volna bevezetned a piacra. Az apró üzleti bakiért 4 perccel tovább kell seedelned a torrentjeidet.",
"A gonosz boszorka átkot szórt rád amiért eldugtad a seprűjét. Büntetésül 79 pontot veszítesz.",
"Új seprűt vettél a boszorkánynak, aki ezt 287 ponttal hálálta meg neked.",
"A piacról elzavartad a bódét rongáló csontvázakat, ezért az árusok 252 pontot adtak jutalmul.",
"Megmentettél egy járókelőt Michael Myers elől, hálája jeléül 22 perccel rövidebb ideig kell seedelned a torrentjeidet.",
"Ki akartál szabadulni az örök kárhozat fogságából, azonban egy démon elkapott. Azért, hogy a Pokol egy kényelmesebb bugyrába kerülj megvesztegetted 15 ponttal.",
"Lejárt szavatosságú szenteltvizet árultak a sarkon az alakváltók. Szétkergetted őket egy vaskos lopótökkel. Jutalmul 19 perccel kevesebb ideig kell seedelned a torrentjeidet.",
"Tökfarmtulajdonos vagy, de a nagy csapadékhiány miatt igencsak gyér lett az idei termés, így összességében nullszaldósra sem tudtad kihozni a bizniszt: 25 pont vesztességgel zárod az évet",
"Bekopogtál egy házhoz néhány édesség reményében, de helyette boldogan távozhatsz 240 ponttal.",
"Előfizettél Disney+-ra, és úgy bámultad a képernyőt egész októberben, hogy észre sem vetted, elloptak tőled 62 pontot.",
"Meglátogatott a vármegyéd főispánja, és 17 pont tizedet szedett be tőled.",
"Megzavartad az útpadkán ülő kék hósárkányt a tízóraija közben, ezért jéggé dermesztett téged. Csak 9 perccel később olvadtál ki, ennyivel több ideig kell seedelned torrentjeid!",
"Egyszerre felfaltad az összes cukorkát, amit gyűjtöttél az este folyamán. Mohóságod miatt levonunk 79 pontot.",
"Ragyogó magvakat találtál a tök alatt, amik eladásával 248 pontot szereztél.",
"Csoportos ördögűzést akartál végrehajtani 20 megszállt teremtményen, ezt azonban a Szentszék nem hagyta jóvá. Büntetésül ki kell takarítanod 20 templomot és 86 pontot fel kell ajánlanod a Nyugdíjas Ördögűzők Öregek Otthonának.",
"Elvitted Drakulát a fogorvoshoz, cserébe ő átvállalt tőled minden torrented seedeléséből 31 percet.",
"Ideje már aludni menned, hisz 253 pont és Freddy Krueger is vár már az álmodban!",
"Töketlenség miatt 6 perccel tovább kell seedelned a torrentjeidet!",
"Az ideges vámpírnak csigavért ajánlottál. Nem tetszett neki a vicced, így megfosztott 21 ponttól.",
"Egy bájos tündér arról érdeklődött, hogy merre található az elfbár. Elvezetted őt egy trafikba, ahol van Elf Bar, de mivel félreértetted végtelen haragra gerjedt, ami miatt bűbájt szórt rád, így 17 perccel tovább kell seedelned torrentjeid.",
"Drakula halott és élvezi! Még 1 db seedköteles torrentedet is eltüntette!",
"Mivel ársapkás lett a tűzifa is, így be akartál tárolni belőle, de túl sokat tettél a kocsidra, így leszakadt tőle az egyik féltengely. 70 pontodba fájt a szerviz.",
"Meghívót küldtél a boszorkány testvérének. Jutalmul 36 perccel kevesebbet kell seedelned a torrentjeidet.",
"Tündérporral való kereskedelem miatt a tündék elvesznek tőled 58 pontot.",
"Visszavarrtad a zombinak leszakadt végtagjait. Jutalmul eltüntette 2 seedköteles torrentedet.",
"Bevált az új protonnyaláb, amit a szellemek ellen fejlesztettél. A városi tanács hálája jeléül 271 pont jutalomban részesített.",
"Kiálltál teniszezni Randall 'Randy' Boggs ellen, s vesztettél, ezért 22 perccel tovább kell seedelned a torrentjeidet.",
"Nem sikerült időben megvarrnod a halloweeni jelmezedet, ezért 22 perccel tovább kell seedelned a torrentjeidet.",
"A szellemek meg akartak ijeszteni, de a pároddal találkoztak először, így ők ijedtek csak meg igazán. Kapásból el is vittek magukkal 68 pontot.",
"Illuminált lopótökkel csevegtél, aki közben lenyúlta 22 pontodat.",
"Nem vetted észre, hogy a viharos szél lefújta az ársapkát a 95-ös benzinről, miközben a seprűdet tankoltad. Ez 40 pontodba fog kerülni.",
"A Vérvári Vámpírpagodában sikerrel beüzemelted az első szénsavas vér üdítőautomatát. A próbaüzem során a gép elkezdett füstölögni, mire te lehajoltál alá és találtál 236 pontot.",
"A rémségek a villanyszámlád láttán megijedtek, kárpótlásul otthagytak nálad 80 pontot.",
"Mivel évről-évre kitartóan védelmezed a trackert, így szeretnénk meghálálni neked a munkádat, 2 torrented lekerül a seedkötelezett listáról.",
"Megidéztél egy szellemet, aki sajnos ellened fordult, és elvette 71 pontodat.",
"Megláttátok a szomszéd lányt meztelenül tököt faragni a nappaliban és te rögtön eltakartad az öcséd szemét, ezért jóváírunk 263 pontot.",
"Újonnan regisztráltál a TikTök közösségi felületre és lett is négy új követőd, bár nem az alkalmazásban, hanem egy szűk sikátorban, amin éppen áthaladsz. 66 pontot loptak el tőled a követőid.",
"Hazafelé tartva elbambultál, és majdnem elsodort Hamupipőke tökhintója. A nagy ijedtségben elejtettél 98 pontot.",
"Mindenki másnál több gonosz lényt vadásztál le! Elismerésül kapsz tőlünk 66 pontot.",
"Tökpálinkával kínáltad a Halloweenkor kopogtató gyerekeket, büntetésül 6 perccel tovább kell seedelned a torrentjeidet.",
"A rémek álarcosbálján első helyet nyertél. Mikor kiderült, hogy elfelejtetted felvenni a jelmezed, a bizottság úgy döntött 3 perccel tovább kell seedelned torrentjeid.",
"Megidézted volna Halloween Szellemét, de a varázsszöveg latinul van, így előbb meg kell tanulnod a régi nyelvet. A latinórák 39 pontodba kerülnek.",
"Becsengettél egy házba de pechedre Addamsék nyitottak ajtót. Ijedtedben futásnak eredtél, de a nagy sietségben elhagytál 86 pontot.",
"Részegen Troll balettet jártál a tündérbálban, ezért 3 perccel tovább kell seedelned a torrentjeidet.",
"Miután a kriptában bujkáló vámpírt észrevetted, denevérré alakult és elrepült. Viszont hagyott a koporsójában 85 pontot.",
"Egy denevér csapódott az ablakodnak, az ütközés során elejtett 112 pontot.",
"Lebanyáztad a csúf boszorkányt, aki ezért békává változtatott, és lenyúlta még 79 pontodat is.",
"Elaludtál munka közben a gyárban, és emiatt levágtad saját töködet. Figyelmetlenséged miatt levonunk tőled 78 pontot.",
"Egy zombi eltévedt a belvárosban, te szívesen útbaigazítottad, hálája jeléül 224 pontot adott.",
"Hazafelé egy rövidebb utat választottál, és a parkon keresztül mentél. A parkban egy faágban elbotlottál, és egy lesben álló boszorkány elvitte a táskádat, a benne lévő 18 pontoddal.",
"Segítettél egy csontváznak megkeresni a lábát. Azt nem találtad meg, de keresgélés közben 27 pontra leltél.",
"A városi napilap gyászrovatában olvasod, hogy 1 seedkötelezett torrented tragikus hirtelenséggel eltávozott.",
"Segítettél kondért készíteni egy boszorkánynak, ezért nem varázsolt varangyos békává és még 85 pontot is kaptál tőle.",
"Miután rutinosan megtetted a cukorkagyűjtögető utadat, és elkezdted átnézni az édességzsákmányodat, észrevetted, hogy valaki cukorka helyett 113 pontot adott neked.",
"Egy gonosz álommanó álomport szórt rád, így egy csomó figuráról lemaradtál. Kárpótlásul kapsz 84 pontot.",
"Betévedtél az elvarázsolt kastélyba és megtaláltad a titkos szobát tele kincsekkel, jutalmad 264 pont!",
"A temetőben megtisztítottál egy elhagyatott sírkövet. A szellem, aki ott nyugszik jutalmul eltüntette 2 seedköteles torrentedet!",
"Tökfalván lopáson kaptál egy vámpírt, ezért a helyi lakosok 216 pontot ajándékoztak neked.",
"Mivel idén nem volt kedved halloweenezni és tönkretetted a szomszéd töklámpásait, ezért 22 perccel tovább kell seedelned a torrentjeidet.",
"Elhibáztad a This is Halloween szövegét a Rögtönzött Rémkórusban, büntetésül 19 perccel tovább kell seedelned a torrentjeidet.",
"A temetőben rendbe raktad mások sírját is. Ez tetszett a zombiknak, így 21 perccel rövidebb ideig kell seedelned a torrentjeidet.",
"Ragyogó magvakat találtál a tök alatt, amik eladásával 113 pontot szereztél.",
"Megijedtél, hogy elfogyott a tűzifa, de csak 2 seedköteles torrented tűnt el.",
"Túl mohó voltál, és a torkodon akadt egy cukorka, ezért levonunk 43 pontot.",
"A tükörképed megajándékozott téged két tökkel és elvette 2 seedköteles torrentedet is Halloween estéjén!",
"Az nCore Zrt. most hamarabb osztotta ki a 13. havi juttatásokat, így az egész éves aktivitásodért 168 pontot kapsz.",
"Erjedt tökön csúszott meg lábad, az eséssel 34 pontot hagytál a sárban.",
"Egy tökfaragó versenyen vagy, ahol megjelent a fej nélküli lovas. Faragtál neki egy díjnyertes fejet, cserébe magával vitte 1 seedköteles torrentedet, amivel így már nem lesz gondod.",
"Bájos ajtókopogtató díszt készítettél a rettenetes mordori vértökből. Bátorságod és kreativitásod elismeréseként eltűnt 1 seedkötelezett torrented.",
"Segítettél az öreg boszorkánynak megkeresni a szemüvegét. A kanapé mögött volt és találtál mellette 210 pontot a padlón heverve. A boszorkány hálából neked adta.",
"Már szó szerint vért izzadsz a tökvadászattól. Az okozott kellemetlenségért cserébe eltüntettük 2 seedköteles torrentedet!",
"Több koros vasorrú szépelgett veled, amit te huncutságból viszonoztál, ám amikor a tettekre került volna sor, elszeleltél, de a nagy rohanásban 76 pontot elejtettél.",
"Feltartottál egy szelfibotot, pedig késésben volt. Büntetésül 10 perccel tovább kell seedelned torretjeidet.",
"Amikor a feleséged sepregetett megkérdezted tőle: - Takarítasz vagy mész valahova? A kanapén alszol este és elvette 87 pontodat is.",
"Segítettél egy ártatlan szellemgyereknek a túlvilágra jutni, ezért kapsz 198 pontot.",
"Elkárhozott apácák szellemeivel akartál kapcsolatba lépni, de a mindent látó szem észrevette. Büntetésül 5 perccel tovább kell seedelned a torrentjeidet.",
"Nem értetted meg a holtak nyelvét, a latin óráid 16 pontba kerültek.",
"44 pontot kapsz, hiszen inkább ez a figura legyen pozitív, mintsem a covid gyorsteszted!",
"89 pontért cserébe rávetted a Halált, hogy helyetted az anyósodat vigye magával!",
"A fekete kandúr felugrott az ablakpárkányra és leverte a pontjaidat tartalmazó tálat. Mikor összeszedted, észrevetted, hogy 77 pont véglegesen eltűnt.",
"A Gazdasági Versenyhivatal Schobert Norbit megbüntette, és mivel te is vettél a halloweeni tökmagvas szénhidrátcsökkentett pizzás csigájából, ezért 135 pont kártérítést kaptál.",
"A halottak napi sakkjátszma döntő előtt eltűnt a tábláról a sötét paraszt, és testhezálló feladatnak találták azt, ha te helyettesíted. Jól pótoltad a figurát, ezért 82 pontot kapsz.",
"A kalóz jelmezed nagyszerűen sikerült, ezért a szomszéd veterán kalóz 65 pontot rakott a cukros zsákodba.",
"A kitaszított lelkek védelmezőjeként a sötét oldaltól kaptál 186 pontot.",
"A lassú interneted miatt gumiszobába zártak, ahol 14 percig őrjöngtél mire lenyugodtál. Viselkedésed miatt ugyanennyi perccel tovább kell seedelned a torrentjeidet!",
"A Lidérc Lajos által szervezett Túlélő Versenyen elsőként értél a célba. Jutalmad 96 pont jóváírása a profilodon.",
"A meghívottad nem tölti vissza elég hatékonyan a torrenteket, ezért neked kell helytállni, 3 perccel tovább seedelve minden torrentedet.",
"A múmiák labirintusában megoldottad az összes rejtélyt és találtál egy titkos ajtót. Jutalmad 194 pont jóváírása.",
"A Pestisdoktor letört, madárcsőrös maszkját ragasztópisztollyal megragasztottad, aki 153 ponttal meghálálta ezt neked.",
"A rémségek éjszakáján nekimész Frankensteinnek, aki elveszíti az egyensúlyát és kidől. Te megragadod az alkalmat és kizsebeled, jutalmad 250 pont.",
"A rémségek kastélyában egy látogató megijedt tőled és elszaladt, ám a nagy sietségben elejtett 22 pontot.",
"A sok alvásmentes napért kárpótlásul eltüntettük 2 db seedköteles torrentedet",
"A sötét erdőben felébresztettél egy ősi démont, mert véletlenül ráléptél egy varázskörre. A démon nem volt hálás, 7 perc seedidőt adott hozzá minden torrentedhez.",
"A szomszédodba költözött egy zombi bácsi. Átszoktattad a pálinkára, ezért elviszi 1 seedköteles torrentedet.",
"A teljesen zöld energiára alapozott tökgazdaságod miatt jutalmad 1 db seedköteles torrented eltüntetése.",
"A temetőbe mentél mécsest lopni, de ráléptél egy múmia lábára és elestél, eközben véletlenül 17 pontot elejtettél.",
"A temetőben sétálva megbotlottál egy éppen ébredő zombiban. Bocsánatkérésképp adott neked 297 pontot.",
"A Tökkvízen te voltál a legtökösebb. Gratulálunk, a nyereményed 103 pont.",
"A Tökponti Statisztikai Hivatal a népszámlálási adatokat összesítve kiderítette, hogy 7 perccel kevesebb seedidő érkezett be az állandó lakcímedről, mint amennyi kellett volna, így ezt most kell bepótolnod!",
"A vámpírok udvarában bátor harcosokkal együtt megtámadtátok az Éjszaka Urát. Az egyik bajtársad kardját megszerezve sikerült legyőznöd őt, és 17 percet is lenyisszantottál a torrentjeid seedelési idejéből.",
"A városszéli elhagyatott temetőben felfedted a régi sírok titkát, így megszerezted az elrejtett kincset, ami 195 pontot ér.",
"A zombi diszkóban leesett a diszkógömb, és kiesett belőle egy rakás pont. Te is odasiettél és elcsentél 212 pontot.",
"Addams-éket idén is ideette a fene és nem tágítanak. Évről évre egyre profibbak, sajnos most 51 ponttól szabadítottak meg.",
"Akció van a hentesnél, és megkért a barátod, hogy vegyél hurkát, de ne véreset. Furcsálltad, de nekiálltál a vadászatnak, ami nem tetszett a helyi denevérrajnak. 78 pontot ki is szívtak belőled.",
"Ásás közben olajat találtál a telkeden, amit már aznap elkezdett a MOL kitermelni, ezért 142 pontért cserébe kisajátította a hátsó udvarodat.",
"Az adóbevallásodban az szerepel, hogy szellemi munkát végzel, ezért kísértetek kerestek fel a Szellemi Számlák Szakszervezetétől, és 59 pontot hajtottak be tőled.",
"Az Árnyak Könyvéből bűbájt bocsátottál a Staff tagjaira, akik ennek hatására gyorsan törölték is 1 seedköteles torrentedet!",
"Az interneten történő böngészés közben elfogadtál minden sütit, ezért úgy meghíztál, hogy a gamer széked leszakadt a nagyra nőtt kufferedtől és szétnyomódott az alatta lévő 2 seedkötelezett torrented.",
"Az nCore tulajához csöngettél be csokiért, de ő csak 113 pontot tudott neked adni.",
"Az ördög sosem alszik. Mivel te igen, álmodban 57 pontot lopott el tőled.",
"Az ősz beköszöntével ismét elkaptad a szezonális influenzát és taknyod-nyálad összefolyt. Az egyik orrfújás alkalmából 2 seedkötelezett torrent is távozott belőled.",
"Az új magyar streaming szolgáltatón, a Nerflixen előfizettél, hogy megnézd a Lopott idő című filmet. Megtekintése után 27 perccel csökkent a seedkötelezett torrentjeid hátralévő ideje.",
"Becsöngettél az Addams családhoz, de senki sem nyitott ajtót. Már épp menni készültél, amikor véletlenül észrevetted, hogy a lábtörlő alatt hever 177 pont. Gyorsan felvetted és zsebre raktad.",
"Bedőltél egy \"Szia Uram!\"-mal köszönő üzletembernek és 68 ponttal kevesebbel távoztál.",
"Bementél az Országház egyik rejtélyes alagsori termébe, ahol sikerül elcsenned 28 pontot az elveszett adományládikók fosztogatóitól.",
"Bementél egy elhagyatott rémségektől teli templomba. Egy szellem elkezdett magával vonszolni, de szerencsére sikerült megfognod az Isten lábát, aki kimenekített a bajból, és jutalmul adott neked 131 pontot.",
"Beneveztél egy halloweeni jelmezversenyre, de a zsűri elnökének, Mészáros Lőrincnek nem tetszett a gázszerelő jelmezed, és kidobott a versenyről, ezért 11 perccel tovább kell seedelned a torrentjeidet!",
"Bizniszeltél a Sértődős Sertéssel, akinek az üzletkötés előtt azt mondtad, hogy itt a kezem nem disznóláb. Ezt zokon vette és 53 pontot elvett tőled sértődöttségében.",
"Boldoggá tettél egy szomorúfűzfát, ezért 31 perccel kevesebb ideig kell seedelned minden torrentedet.",
"Casper, a szellem segített megkeresni az elkóborolt árnyékodat, cserébe csak annyit kért, hogy seedeld 14 perccel tovább minden torrentedet.",
"Csak egy pillanatra hunytad le a szemed, máris megjelent egy gonosz szellem, és hozzáadott 6 percet minden torrentedhez.",
"Egy bólogatós kutyát kérdeztél meg, hogy a következő figura pozitív lesz-e, amire bólintott. Igaza lett, hiszen 257 pontot ad most neked ez a figura.",
"Egy boszorkányt láttál bemenni a lépcsőházba. Beszaladtál és értesítetted a házmestert a veszélyről. A lakók, hálájuk jeléül 2 torrentet seedelnek helyetted.",
"Egy kemény partin túl sokat ivott egy vámpír, így bealudt a hátsókertben. A reggeli napfényre sem ébredt fel, így elporladt. Az utána maradt hamukupacban 280 pontot fedeztél fel, amit eltettél.",
"Egy óriás ventilátorral el akartad fújni a szellemeket a házad környékéről. Ők azonban átbújtak a lapátok között és bejutottak a házba, elvettek tőled 94 pontot.",
"Egy vödör ipari ragasztót borítottál a kísértetre. Társaid megjutalmaztak 88 ponttal.",
"Egyre több az UFO-észlelés a környékeden. Az egyik este te is szemtanúja voltál egy repülő csészealj leereszkedésének, amint felvevősugárral teheneket visz. Az állatokon kívül 93 pontodat is felszívták, és elmentek vele a végtelenbe és tovább.",
"Egyszer csak arra lettél figyelmes, hogy Borkai Zsolt 1 seedkötelezett torrentedet a luxusjachtjára csábította.",
"El akartad lopni Kiszel Tünde naptárgyűjteményét, de rajtakaptak. Büntetésül 16 perccel tovább kell seedelned a torrentjeidet!",
"Elfelejtetted átállítani az órát, ezért 18 perccel tovább kell seedelned a torrentjeidet!",
"Elfelejtetted lekapcsolni a lámpát a kísértetkastélyban. A szellemek bosszúja miatt 15 perccel tovább kell seedelned a torrentjeidet.",
"Elláttad a boszorkány harci sérüléseit. A járókelők ennek nem örültek, de mindenesetre a boszorkány hálája jeléül eltüntette 1 seedköteles torrentedet!",
"Elloptad egy csontváz jobb lábát. Ő azonban egy seprűs boszorkány segítségével utolért és a láb visszatétel közben elvett tőled 70 pontot.",
"Elloptad egy ogre bunkócskáját, ő azonban visszaszerezte és jó alaposan meg is vert. A bunyó közben elejtettél 63 pontot.",
"Elloptad Jason-től véres hokimaszkját, amit az eBay-en 158 pontért adtál el.",
"Első helyezett lettél véraláfutásban, megelőzve a regnáló vámpírbajnokot, így 33 pont jutalmat nyertél.",
"Elszomorodtál és csak bágyadtan ültél a parti kellős közepén, mert eszedbe jutott, hogy nem vettél bitcoin-t mikor még óvodába jártál. Elmélkedésed elvonta figyelmed és nem eszméltél fel időben így nyakon öntöttek egy nagy korsó sörrel, ami kimosott a zsebedből 29 pontot.",
"Este a mezőn találtál egy szép nagy tököt, ám a távolban egy zombi hörgött. Ezt hallván futásnak eredtél, de a nagy rohanásban 41 pontot elejtettél.",
"Felkerested Polgár Jenőt a hivatalban, amikor a mennyezett repedezett. Önkormányzati támogatást adott neked, hogy megoldódjon a probléma, ami 137 pontot jelent.",
"Feltaláltál egy olyan csodaszert ami megszépíti a rusnya boszorkányokat. A boszik hálája örökké üldözni fog, emellett 182 ponttal lettél gazdagabb.",
"Feltámasztottál egy szellemet, aki erre összetörte a töklámpásod. Amíg elmentél kifaragni egy újat, abbahagytad a seedelést. Büntetésül 12 perccel tovább kell seedelned a torrentjeidet.",
"Figuraelkapás közben véletlenül félrekattintottál, és a Belga Fizetésnap c. számát indítottad el, ami miatt 110 pontot kaptál.",
"Freddy Krueger megtámadott és behatolt az álmodba. Nem gondolta volna, hogy ő húzza a rövidebbet, mert nem volt mentálisan felkészülve arra, amiket ott látott. Inkább adott neked gyorsan 69 pontot, hogy szabaduljon tőled.",
"Fülöp-szigeteki vendégmunkásokat béreltél fel a seedelésre, ami hatékonynak bizonyult, miattuk 20 perccel kevesebb ideig kell a letöltött torrentjeidet seedelned.",
"G.w.M és L.L. Junior gyorsulási versenyt tartott, aminek te ittad meg a levét, hiszen a menetszél elvitt tőled 81 pontot.",
"Gonoszkodásból brokkoli ízű cukorkákat adtál a gyerekeknek. Büntetésül 4 perccel tovább kell seedelned a torrentjeidet!",
"Gyertyát helyeztél egy faragott tökbe, amit az ablakhoz tettél, de belekapott a lángja a függönybe és kigyulladt a hálószobád. 87 pont károd keletkezett.",
"Halloweeni partin rád jött a hasmars, de elfogyott a WC-papír. Óvatosan kinyitottad a budiajtót, és megláttál egy összetekert papírt, amiből téptél le magadnak. Utólag derült ki, hogy a buli sztárvendégéből, az átkozott múmiából szakítottál le egy-két törlésre valót, ezért 6 perccel tovább kell seedelned a torrentjeidet!",
"Hivatásos démonvadász létedre elég keveset kaptál el, így levonunk a fizetésedből 25 pontot!",
"Hullajól teljesítesz idén a játékunkban, így most elveszünk 1 db seedköteles torrentet!",
"Idén Lagzi Lajcsi vízóráját faragtad ki tökből, és elég jól sikerült. Jutalmul neked is 20 perccel rövidebb ideig kell seedelned a torrentjeidet.",
"Ilyen rusnya teremtés még a kalendáriumban sincsen!” - kiáltott fel a zsűri elnöke, miközben átadta számodra az Ocsmány Orca díjat és mellé a megérdemelt 117 pontot.",
"Jó volt az idei töktermés, de az ársapka miatt elég nyomott áron tudtad értékesíteni, így vesztettél 16 pontot.",
"Kettőt lapoztál a szakácskönyvben. Mákos tökleves lett a halloweeni népnek. Ez nem igazán tetszett a séfnek. Le is vonta 57 pontod!",
"Kiástál egy 8 éve lezárt időkapszulát, ami kinyitás után ugyanennyi perccel lerövidítette a torrentjeid seedelési idejét.",
"Kifaragtad a töködből a Staff tagjait, akik ezért eltüntették 1 db seedköteles torrentedet.",
"Kirámoltad Dagobert bácsi miniszéfjét, amiben 60 pontot találtál.",
"Lecsacsiztál egy önérzetes szamarat, aki ezért a szamárpaddal 29 pontot kivert belőled.",
"Levelet kaptál. Azt hitted behívó a seregbe, de szerencsére csak egy meghívó volt a SpOoKy DaYz-re. Ijedtedben azonban kiejtettél a zsebedből 42 pontot.",
"Mága Zoltán koncertjén 1 seedkötelezett torrentednek el lett húzva a nótája, amit örömmel konstatáltál.",
"Meg akartál szelídíteni egy egyszarvút. Olyan gyorsan elvágtatott, hogy magával vitte 77 pontodat.",
"Még épp időben eszedbe jutott, hogy mindjárt kezdődik a Spooky, így gyorsan seprűnyélre pattantál és meg sem álltál hazáig! Gyorshajtásért a Tökrendőrség 46 pontra megbüntetett!",
"Megbotlottál és energiaital löttyent a gépedre. A Red Bull szárnyakat ad, így 2 seedkötelezett torrent tovaszállt a gépből.",
"Megelőzted a futózáport egy versenyen, így elsőként célba érve 288 pontot nyertél.",
"Megjött a lehűlés, ezért elkezdett fázni a fejbőröd. Ársapkát kötöttél rá, így 26 perccel kevesebb ideig kell seedelned a torrentjeidet.",
"Meglested a szomszéd boszilányt fürdés közben. Az apja megkergetett, futás közben elejtettél 68 pontot.",
"Megmentetted a vámpírt a napfénytől, aki hálás volt és megszabadított 1 seedköteles torrentedtől!",
"Megszentelt földbe temettél egy boszorkányt. Utolsó erejével még sikerült elvenni tőled 17 pontot, amit magával vitt a sírba.",
"Megtaláltad a Boszorkány seprűjét, de csak 69 pontért cserébe adtad vissza neki.",
"Megtaláltad a csontváz elvesztett kulcscsontját. Visszaadtad neki, ő pedig hálája jeléül 176 ponttal jutalmazott.",
"Megtaláltad a veszett fejsze nyelét, amit a Radai Rosseb elkunyerált tőled. 141 pontot adott érte.",
"Megtámadta a településed egy Gyümölcsszörny, akit te gránátalmával robbantottál fel. A falu közjegyzője 109 pont jutalmat adott át neked.",
"Megzavartál egy templomból kijövő politikust, aki ezt sérelmezte. 13 percet tartózkodott a templomban, ennyivel tovább kell seedelned a torrentjeidet.",
"Mikulásnak öltöztél Halloweenkor. A szervezők jót röhögtek rajtad, de büntetésképp elvesztettél 50 pontot.",
"Mint ahogy tavaly, idén is Te voltál az utolsó a tök beszerzésében, így neked csak egy csoffadt tök maradt. Vigaszdíjul kapsz 195 pontot.",
"nCore meghívót adtál egy múmiának, aki hálából eltüntette 2 seedköteles torrentedet.",
"Nem értetted meg a holtak nyelvét, a latin óráid 16 pontba kerültek.",
"Nem segítettél Barbie-nak lerombolni a patriarchátust, ezért elKENte a szádat, és a pontszámodat 22 ponttal lecsökKENtette.",
"Nem tudtad kikapcsolni a láncfűrészedet, ezért véletlenül kivágtad Drakula családfáját. A Varázslények Védelmi Tanácsa 26 pontra büntet meg.",
"Nyaralni mentél, de elfelejtetted beállítani a tökültetvény öntözőprogramját, emiatt tönkrement 300 tökpalánta. Pótlásuk 12 pontodba került.",
"Olyan erős Tic-Tök mentolos cukorkát kaptál be, hogy 35 perc lefagyott a torrentjeid seedelési idejéből.",
"Olyan gyorsan seedeltél, hogy a súrlódástól kigyulladt a rőzsehordó boszi kosara, ezért 19 perccel meghosszabbította a torrentjeid seedelési idejét.",
"Pszichiátriára kerültél, mert elkaptad az igen súlyos enKórt, ami miatt azt hallucinálod, hogy tököket kell elkapnod. 9 percet töltöttél a zárt osztályon, ennyivel tovább is kell seedelned a torrentjeidet.",
"Rakodás közben ráesett a nagylábujjadra egy tök, erre te dühödben többször rácsaptál. Éppen arra járt egy rendőr, aki 34 pontra büntetett meg, mert nyilvánosan verted a töködet.",
"Ráültél egy ferencvárosi padra, de figyelmetlen voltál, így nem vetted észre, hogy frissen van lefestve. Már elkezdett száradni, amikor eszméltél, de már késő volt, a farzsebedben lévő 56 pontod oda is tapadt.",
"Renováltad Drakula gróf erdélyi kastélyát, aki fáradozásodért cserébe eltüntette 2 db seedköteles torrented.",
"Részt vettél az éhező vámpírok részére szervezett véradáson, 154 pont jutalmat kaptál érte.",
"Ruhateregetés közben a láthatatlanná tévő köpenyedet 73 pontodra terítetted rá, amit soha nem találtál meg újra.",
"Segítséget kértél a ChatGPT-től, hogy kevesebbet seedelj és a tanácsát megfogadva 13 perccel lecsökkent a seedkötelezett torrentjeid hátralévő ideje.",
"Selejtes seprűt akartál eladni egy boszorkánynak, ő azonban rájött a turpisságra. Büntetésül 19 perccel tovább kell seedelned a torrentjeidet!",
"Sikerült felvenned a kapcsolatot egy 30. századbeli rokonoddal, MZ/X-szel, aki segített kicsit seedelni, így 33 perccel kevesebb ideig kell visszatöltened a torrenteket.",
"Sokat romlott a szemed a monitor bámulása miatt, így elmentél egy optikushoz, aki adott egy mindent látó szemüveget. A szemészetről kiérve ezzel észre is vettél 116 eldugott pontot.",
"Szégyenszemre rajtad kívül mindenki jelmezbe bújt a halloweeni buliban, ezért 9 perccel tovább kell seedelned a torrentjeidet.",
"Szerelemféltésből meg akartad ölni a halloweeni buliban a hótündér udvarlóját, de alulmaradtál és pépesre vert. Ezt a becsületed mellett 49 pontod bánta.",
"Találtál egy szomorú kiskutyát csokivadászat közben, akit megsimogattál. Boldogsága jeléül elvezetett egy ládához, amiben volt 262 pont.",
"Tavaly decemberben Luca székéről megláttad a boszorkányokat, azóta egyfolytában üldözöd őket. Most végre elejtettek 142 pontot, amit gyorsan zsebre vágtál.",
"Tóth Gabi válása miatt annyira elszontyolodtál, hogy nem győzted a könnyeid törölgetni. 13 zsebkendőt kellett venned, amiért ugyanennyi pontot fizettél ki.",
"Töklétől részegen a vasorrú bába üstjébe ültél, és közben Zámbó Jimmy dalokat énekeltél. Gyönyörű hangod jutalma 219 pont.",
"Töklével enyhítetted a Sárkány gyomorégését, aki hálából eltüntette 1 db seedköteles torrentedet.",
"Tőzsdézni akartál az összeszedett pontjaiddal, de a spekulánsok miatt 49 pontot elbuktál.",
"Túl álmos voltál, ezért nem ijedtél meg a boszorkány csúnyaságától mikor rád nézett. Hálája jeléül eltüntette 1 seedköteles torrentedet.",
"Túl hangosan hallgattad Korda György Reptér című zenéjét, amitől 37 pontod elszállt.",
"Túl sok cukorkát ettél. 52 pontot kellett fizetned, hogy targoncával hazavigyenek.",
"Új ágyat akartál vásárolni, de a memóriahabos matracod nem felejt: elmondta, hogy több éve hová esett 62 pontod. Megtaláltad őket, ezért megesett rajta a szíved, így elnapoltad a lecserélését.",
"Vajas kenyeret ragasztottál a macskád hátára, akit ezzel ejtettél le a földre, így örökmozgó lett belőle. Ez fedezni tudja a lakásod áramellátását, sőt 29 perccel kevesebb ideig is kell seedelned letöltött torrentjeidet.",
"Véletlenül megettél egy filozófiakönyvet, ezért 208 percig néztél meredten a távolba. Bölccsé válásod miatt ugyanennyi pontot is kapsz.",
"Viccből karfiol ízű cukorkákkal tréfáltad meg a gyerekeket. Ennek következményeként 5 perccel meghosszabbított seed időt kell vállalnod a torrentjeiden.",
"Zombi Zoltán elvitte 2 seedköteles torrentedet, mert segítettél neki feleséget találni.",
"Fantasztikus munka volt a Halloween dekorációkkal! Mivel a házad a legfélelmetesebb lett az utcában, most 115 plusz pontot kapsz az év végi díjazáshoz.",
"Időben meghoztad a szenteltvíz utánpótlást a soron következő ördögűzéshez. A helyi bíboros 296 ponttal jutalmaz meg."
];

//--------------------------------------------------------------
// Spooky start
//--------------------------------------------------------------

function spookyInit(){
	
	spookyStop();
	naplozas("Auto Spo0ky v" + verzio + " elindult", 1, 1);

	//--------------------------------------------------------------
	// Megkérdezzük a felhasználót, milyen
	// háttérképek között váltogassunk
	//--------------------------------------------------------------
	// nc = nCore témák
	// kp = egyéb háttérképek
	//--------------------------------------------------------------

	var hatterKep = prompt("Milyen háttérképek legyenek az oldalon?\n\nnc = nCore hátterek\n\nkp = egyéb hátterek\n\nNyomd meg az F11 billentyűt a teljes képernyős nézethez.\n\n", "nc");

	//--------------------------------------------------------------
	// Ellenőrizzük a megadott értéket
	//--------------------------------------------------------------

	// NC hátérképek
	if (hatterKep == "nc") {

		let bgKepekSzama = 7;
		let randomKep = Math.ceil( Math.random() * bgKepekSzama);
		document.body.style.cssText = "background: #090909; background-size: contain; background-position: center center; background-repeat: no-repeat; background-attachment: fixed; font-family: Verdana;";
		document.body.style.backgroundImage = "url('img/bgs/nc/spookyBg-" + randomKep + ".jpg')";

	// Egyéb hátérképek
	} else if (hatterKep == "kp") {

		let bgKepekSzama = 6;
		let randomKep = Math.ceil( Math.random() * bgKepekSzama);
		document.body.style.cssText = "background: #090909; background-size: cover; background-position: center center; background-repeat: no-repeat; background-attachment: fixed; font-family: Verdana;";
		document.body.style.backgroundImage = "url('img/bgs/kp/spookyBg-" + randomKep + ".jpg')";

	// A választás nem nc vagy kp
	// ezért az nc háttereket használjuk
	} else {

		let bgKepekSzama = 7;
		let randomKep = Math.ceil( Math.random() * bgKepekSzama);
		document.body.style.cssText = "background: #090909; background-size: contain; background-position: center center; background-repeat: no-repeat; background-attachment: fixed; font-family: Verdana;";
		document.body.style.backgroundImage = "url('img/bgs/nc/spookyBg-" + randomKep + ".jpg')";
	}

	//--------------------------------------------------------------

	helyiTaroloOkay = false;

	// Ellenőrizzük a böngésző helyi tárolójának használhatóságát
	try {
		localStorage.setItem("teszt", "rendben");
		helyiTaroloOkay = true;
		naplozas("Sikeres hozzáférés a böngésző helyi tárolójához. A statisztikai adatok naplózva lesznek.", 2, 1);
	} catch(err) {
		helyiTaroloOkay = false;
		naplozas("Nem férek hozzá a böngésző helyi tárolójához! Így nem lesznek statisztikai adatok.", 3, 1);
	}

	if (helyiTaroloOkay == true) {
		if (localStorage.getItem("teszt") != undefined) {
			try {
				localStorage.removeItem("teszt");
			} catch(err) {
				//hiba
			}
		}
	}

	//--------------------------------------------------------------

	let spookyMinIdo = defSpookyMinIdo*1000;
	let spookyMaxIdo = defSpookyMaxIdo*1000;
	let veletlenNum = veletlenSzamGen(spookyMinIdo, spookyMaxIdo);

	//--------------------------------------------------------------

	if (helyiTaroloOkay == true) {
		if (localStorage.getItem("megjelentSpookyk") != undefined) {
			megjelentSpookyk = parseInt(localStorage.getItem("megjelentSpookyk"));
		} else {
			localStorage.setItem("megjelentSpookyk", megjelentSpookyk);
		}

		//--------------------------------------------------------------

		if (localStorage.getItem("elkapottSpookyk") != undefined) {
			elkapottSpookyk = parseInt(localStorage.getItem("elkapottSpookyk"));
		} else {
			localStorage.setItem("elkapottSpookyk", elkapottSpookyk);
		}

	}
	//--------------------------------------------------------------

	if (helyiTaroloOkay == true) {
		naplozas("Eddig megjelenített Spo0kyk: " + megjelentSpookyk + " db.", 0, 1);
		naplozas("Eddig elkapott Spo0kyk: " + elkapottSpookyk + " db.", 2, 1);
	}

	naplozas("Spo0ky megjelenik: " + Math.round(veletlenNum/1000) + " mp", 3, 1);
	naplozas("-----------------------------------------------------------------------------------", 0, 0);

	autoSpookyIdo = setInterval(autoSpooky, veletlenNum);

}

//--------------------------------------------------------------
// Spooky 
//--------------------------------------------------------------

function autoSpooky() {

	try {
		clearInterval(autoSpookyIdo);
	} catch(err) {
		// nincs időzítő
	}

	try {
		clearTimeout(spkRmvTmr);
	} catch(err) {
		// nincs időzítő
	}
	
	let spookyDiv = document.querySelector("#spo0kyD");
	let spookyLathato = defSpookyLathatoIdo * 1000;

	try {
		spookyDiv.remove();
	} catch(err) {
		// Ok, nincs Spo0ky az oldalon.
	}

	megjelentSpookyk += 1;
	
	if (helyiTaroloOkay == true) {
		localStorage.setItem("megjelentSpookyk", megjelentSpookyk);
	}

	naplozas("Spo0ky megjelenítve", 1, 1);
	
	addDiv();
	spkRmvTmr = setTimeout(spookyRemove, spookyLathato, "timeout");	

}

//--------------------------------------------------------------
// Spooky DIV hozzáadás / formázás
//--------------------------------------------------------------

function addDiv() {

	// DIV létrehozása a megjelenő Spookynak
	let spookyDiv = document.createElement("div");
	
	// Ablak méreteinek beszippantása
	let ablakSzelesseg = window.innerWidth;
	let ablakMagassag = window.innerHeight;
	
	// A Spooky PNG fájlok kezdő / vége sorszáma (img/Spo0ky mappa)
	let minPngNum = 1;
    let maxPngNum = 179;
   
   // Megjelenő Spo0ky pixelben megadott minimális pozíciója (x és y)
	let minPos = 10;

	// Megjelenő Spo0ky pixelben megadott maximális X pozíciója
	let maxPosX = ablakSzelesseg-210;

	// Megjelenő Spo0ky pixelben megadott maximális Y pozíciója
	let maxPosY = ablakMagassag-210;

	// Megjelenő Spo0ky PNG száma (1-179)
	let spookyPngNum = veletlenSzamGen(minPngNum, maxPngNum);

	//Spooky X pozíció
	let posX = veletlenSzamGen(minPos, maxPosX);

	//Spooky Y pozíció
	let posY = veletlenSzamGen(minPos, maxPosY);
	
	// Megjelenő Spo0ky PNG fájl
	let spookyPng = "Spo0ky_" + spookyPngNum + ".png";

    // Spo0ky szöveglnek véletleszerű kiválasztása a tömb elmeinek számából
	let minNum = 0;
	let maxNum = spookySzovegek.length-1;
    let spkySzovegNum = veletlenSzamGen(minNum, maxNum);
	let spkySzoveg = spookySzovegek[spkySzovegNum];
	
	// Létrehozott DIV beállítása (id, css, tartalom, klikk figyelés)
	spookyDiv.setAttribute("id", "spo0kyD");
	spookyDiv.style.cssText = "position: fixed; left:" + posX + "px; top:" + posY + "px; width: 180px; height: 180px; opacity: 1; text-align: center; cursor: pointer; z-index: 9999; background: #00000;";
	spookyDiv.innerHTML = "<div id='spookyTxt' style='width: 180px; height: auto; display: none; background-color: rgba(15, 15, 15, 0.86); border: 1px solid #9066FF;'><p style='padding: 3px; font-size: 11px; color: #ffffff; line-height: 18px; text-align: left;'>"+spkySzoveg+"</p><div>";
	spookyDiv.innerHTML += "<img id='spookyKep' src='img/Spo0ky/"+spookyPng+"' width='120px'>";
	spookyDiv.addEventListener("click", spookyClicked);
	
	// Megjelenítjük a Spookyt
	document.body.append(spookyDiv);

}

//--------------------------------------------------------------
// Spooky klikk
//--------------------------------------------------------------

function spookyClicked() {

	let spo0kyDiv = document.getElementById("spo0kyD");
	let spkyPng = document.getElementById("spookyKep");
	let spkyTxt = document.getElementById("spookyTxt");

	elkapottSpookyk += 1;

	if (helyiTaroloOkay == true) {
		localStorage.setItem("elkapottSpookyk", elkapottSpookyk);
	}

	naplozas("Spo0ky elkapva", 2, 1);

	spo0kyDiv.removeEventListener("click", spookyClicked);
	spkyTxt.addEventListener("click", spookyTxtClicked);

	try {
		spkyPng.remove();
	} catch(err) {
		// hiba / már bezártuk
	}

	spkyTxt.style.display = "block";
	spkTxtTmr = setTimeout(spookyTxtClicked, 20000);
}

//--------------------------------------------------------------
// Spooky klikkelve
//--------------------------------------------------------------

function spookyTxtClicked () {

	clearTimeout(spkTxtTmr);
	clearTimeout(spkRmvTmr);

	let spkyTxt = document.getElementById("spookyTxt");

	try {
		spkyTxt.remove();
	} catch(err) {
		// hiba / már bezártuk
	}

	spkRmvTmr = setTimeout(spookyRemove, 1250, "clicked");

}

//--------------------------------------------------------------
// Spooky eltávolítása az oldalról
//--------------------------------------------------------------

function spookyRemove(proc) {

	let spookyDiv = document.querySelector("#spo0kyD");
	let spookyMinIdo = defSpookyMinIdo*1000;
	let spookyMaxIdo = defSpookyMaxIdo*1000;
	let veletlenNum = veletlenSzamGen(spookyMinIdo, spookyMaxIdo);

	try {
		clearInterval(autoSpookyIdo);
	} catch(err) {
		//hiba / nincs időzítő
	}

	try {
		spookyDiv.remove();
		if(proc == "timeout") {
			naplozas("Spo0ky eltűntetve (nem lett elkapva)", 3, 1);
		} else if (proc == "clicked") {
			naplozas("Spo0ky eltűntetve (elkapott!)", 2, 1);
		} else {
			naplozas("Spo0ky eltűntetve (???)", 2, 1);
		}
	} catch(err) {
		naplozas("Nincs eltűntethető Spo0ky!", 3, 1);
	}

	autoSpookyIdo = setInterval(autoSpooky, veletlenNum);

	naplozas("Eddig " + megjelentSpookyk + " db Spo0kyt jelent meg összesen, ebből " + elkapottSpookyk + " db lett elkapva.", 2, 1);
	naplozas("Spo0ky megjelenik: " + Math.round(veletlenNum/1000) + " mp", 2, 1);
	naplozas("-----------------------------------------------------------------------------------");
}

//--------------------------------------------------------------
// Véletlenszám generáló
//--------------------------------------------------------------

function veletlenSzamGen(minNum, maxNum) {
    const rndPuffer = new Uint32Array(1);
    window.crypto.getRandomValues(rndPuffer);
    let veleltenSzam = rndPuffer[0] / (0xffffffff + 1);
    minNum = Math.ceil(minNum);
    maxNum = Math.floor(maxNum);
    return Math.floor(veleltenSzam * (maxNum - minNum + 1)) + minNum;
}

//--------------------------------------------------------------
// Spooky megállítás
//--------------------------------------------------------------

function spookyStop() {

	let spookyDiv = document.querySelector("#spo0kyD");

	try {
		clearInterval(autoSpookyIdo);
	} catch(err) {
		//hiba / nincs időzítő
	}

	try {
		clearTimeout(spkRmvTmr);
	} catch(err) {
		//hiba / nincs időzítő
	}

	try {
		spookyDiv.remove();
	} catch(err) {
		// Nincs Spo0ky az oldalon
	}

	naplozas("-----------------------------------------------------------------------------------", 0, 0);
	naplozas("AutoSpo0ky leállítva!", 1, 1);
	naplozas("-----------------------------------------------------------------------------------", 0, 0);

}

//--------------------------------------------------------------
// Eredmények mutatása
//--------------------------------------------------------------

function eredmenyek() {
	
	let megjelent = 0;
	let elkapott = 0;

	if (helyiTaroloOkay == true) {
		
		if (localStorage.getItem("megjelentSpookyk") != undefined) {
			megjelent = parseInt(localStorage.getItem("megjelentSpookyk"));
		} else {
			megjelent = -1;
		}

		if (localStorage.getItem("elkapottSpookyk") != undefined) {
			elkapott = parseInt(localStorage.getItem("elkapottSpookyk"));
		} else {
			elkapott = -1;
		}

		if (megjelent >=0 && elkapott >=0) {
			naplozas("Statisztika:\n\nMegjelent Spo0kyk: " + megjelent + " db\nElkapott Spo0kyk: " + elkapott + " db", 2, 0);
			alert("Statisztika:\n\nMegjelent Spo0kyk: " + megjelent + " db\nElkapott Spo0kyk: " + elkapott + " db");
		}
		
	} else {

		naplozas("Mivel nem férek hozzá a böngésző helyi tárolójához, ezért csak az ebben a munkamenetben megjelenített / elkapott Spookykat tudom mutatni.", 3, 1);
		naplozas("Statisztika:\n\nMegjelent Spo0kyk: " + megjelentSpookyk + " db\nElkapott Spo0kyk: " + elkapottSpookyk + " db", 2, 0);
		alert("Statisztika:\n\nMegjelent Spo0kyk: " + megjelentSpookyk + " db\nElkapott Spo0kyk: " + elkapottSpookyk + " db");		

	}

}

//--------------------------------------------------------------
// Eredmények törlése
//--------------------------------------------------------------

function eredmenyekTorlese() {

	if (helyiTaroloOkay == true) {
		try {
			localStorage.removeItem("megjelentSpookyk");
		} catch(err) {
			// Hiba / Nincs ilyen változó
		}

		//----------------------------------------------------------

		try {
			localStorage.removeItem("elkapottSpookyk");
		} catch(err) {
			// Hiba / Nincs ilyen változó
		}
	}
	
	location.reload();
}

//--------------------------------------------------------------
// Naplózás
//--------------------------------------------------------------

function naplozas(szoveg, formazas, showDatum) {

	let d = new Date();

	//--------------------------------------------

	if(formazas == 0) {

		let konzolCss = "font-size: 16px;";

		if(showDatum == 1) {
			console.log("%c" + d.toLocaleString() + "%s", konzolCss, " - " + szoveg);
		} else {
			console.log("%c" + szoveg + "%s", konzolCss, "");
		}

	//--------------------------------------------

	} else if (formazas == 1) {

		let konzolCss = "text-shadow: -1px 1px 0 #00ffab, 1px 1px 0 #c63d2b, 1px -1px 0 #0099cd, -1px -1px 0 #c6c23f; font-size: 16px; color: #fffff;";

		if(showDatum == 1) {
			console.log("%c" + d.toLocaleString() + "%s", konzolCss, " - " + szoveg);
		} else {
			console.log("%c" + szoveg + "%s", konzolCss, "");
		}

	//--------------------------------------------

	} else if (formazas == 2) {

		let konzolCss = "font-size: 16px; color: #00ff00;";

		if(showDatum == 1) {
			console.log("%c" + d.toLocaleString() + "%s", konzolCss, " - " + szoveg);
		} else {
			console.log("%c" + szoveg + "%s", konzolCss, "");
		}

	//--------------------------------------------

	} else if (formazas == 3) {

		let konzolCss = "font-size: 16px; color: #ff0000;";

		if(showDatum == 1) {
			console.log("%c" + d.toLocaleString() + "%s", konzolCss, " - " + szoveg);
		} else {
			console.log("%c" + szoveg + "%s", konzolCss, "");
		}

	//--------------------------------------------

	} else {

		let konzolCss = "font-size: 16px;";

		if(showDatum == 1) {
			console.log("%c" + d.toLocaleString() + "%s", konzolCss, " - " + szoveg);
		} else {
			console.log("%c" + szoveg + "%s", konzolCss, "");
		}
	}

}

//-------------------------------------------------------------------

//---------
// Indítás
//---------

spookyInit();
