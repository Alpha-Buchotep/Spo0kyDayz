// ----------------------------------
// Auto Spo0ky - by Jonastos (nCore)
// ----------------------------------

// -----------------------------
// Globális változók
// -----------------------------

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
var defSpookyMinIdo = 45;

// -------------------------------------------------------
// Maximum ennyi idő után jelenik meg Spooky (másodperc!)
// -------------------------------------------------------
var defSpookyMaxIdo = 180;

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
"Elkárhozott apácák szellemeivel akartál kapcsolatba lépni, de a mindent látó szem észrevette. Büntetésül 5 perccel tovább kell seedelned a torrentjeidet."
];

//--------------------------------------------------------------

function spookyInit(){
	
	let spookyMinIdo = defSpookyMinIdo*1000;
	let spookyMaxIdo = defSpookyMaxIdo*1000;
	let veletlenNum = veletlenSzamGen(spookyMinIdo, spookyMaxIdo);

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

	//--------------------------------------------------------------

	console.log("-----------------------------------------");
	console.log("Auto Spo0ky elindult.");
	console.log("Eddig megjelenített Spo0kyk: " + megjelentSpookyk + " db.");
	console.log("Eddig elkapott Spo0kyk: " + elkapottSpookyk + " db.");
	console.log("-----------------------------------------");
	console.log("AutoSpo0ky idő: " + Math.round(veletlenNum/1000) + " mp");
	console.log("-----------------------------------------");

	autoSpookyIdo = setInterval(autoSpooky, veletlenNum);

}

//--------------------------------------------------------------

function autoSpooky() {

	clearInterval(autoSpookyIdo);
	clearTimeout(spkRmvTmr);

	let d = new Date();
	let spookyDiv = document.querySelector("#spo0kyD");
	let spookyLathato = defSpookyLathatoIdo * 1000;

	try {
		spookyDiv.remove();
	} catch(err) {
		// Ok, nincs Spo0ky az oldalon.
	}

	megjelentSpookyk += 1;
	localStorage.setItem("megjelentSpookyk", megjelentSpookyk);

	console.log("Spo0ky megjelenítve ekkor: " + d.toLocaleString());
	
	addDiv();
	spkRmvTmr = setTimeout(spookyRemove, spookyLathato, "timeout");	

}

//--------------------------------------------------------------

function addDiv() {

	// DIV létrehozása a megjelenő Spookynak
	let spookyDiv = document.createElement("div");
	
	// Ablak méreteinek beszippantása
	let ablakSzelesseg = window.innerWidth;
	let ablakMagassag = window.innerHeight;
	
	// A Spooky PNG fájlok kezdő / vége sorszáma (img/Spo0ky mappa)
	let minPngNum = 1;
    let maxPngNum = 134;
   
   // Megjelenő Spo0ky pixelben megadott minimális pozíciója (x és y)
	let minPos = 10;

	// Megjelenő Spo0ky pixelben megadott maximális X pozíciója
	let maxPosX = ablakSzelesseg-210;

	// Megjelenő Spo0ky pixelben megadott maximális Y pozíciója
	let maxPosY = ablakMagassag-210;

	// Megjelenő Spo0ky PNG száma (1-134)
	let spookyPngNum = veletlenSzamGen(minPngNum, maxPngNum);

	//Spooky X pozíció
	let posX = veletlenSzamGen(minPos, maxPosX);

	//Spooky Y pozíció
	let posY = veletlenSzamGen(minPos, maxPosY);
	
	// Megjelenő Spo0ky PNG fájl
	let spookyPng = "Spo0ky_" + spookyPngNum + ".png";

    // Spo0ky szöveglnek véletleszerű kiválasztása a tömb elmeinek számából
	// A demoban ez 0-99 érték lehet, mivel 100 db Spo0ky szöveg van beállítva a tömbben
	let minNum = 0;
	let maxNum = spookySzovegek.length-1;
    let spkySzovegNum = veletlenSzamGen(minNum, maxNum);
	let spkySzoveg = spookySzovegek[spkySzovegNum];

	// Létrehozott DIV beállítása (id, css, tartalom, klikk figyelés)
	spookyDiv.setAttribute("id", "spo0kyD");
	spookyDiv.style.cssText = "position: fixed; left:" + posX + "px; top:" + posY + "px; width: 180px; height: 180px; opacity: 1; text-align: center; cursor: pointer; z-index: 1000; background: #00000;";
	spookyDiv.innerHTML = "<div id='spookyTxt' style='width: 180px; height: auto; display: none; background-color: rgba(15, 15, 15, 0.86); border: 1px solid #9066FF;'><p style='padding: 3px; font-size: 11px; color: #ffffff; line-height: 18px; text-align: left;'>"+spkySzoveg+"</p><div>";
	spookyDiv.innerHTML += "<img id='spookyKep' src='img/Spo0ky/"+spookyPng+"' width='180px'>";
	spookyDiv.addEventListener("click", spookyClicked);
	
	// Megjelenítjük a Spookyt
	document.body.append(spookyDiv);

}

//--------------------------------------------------------------

function spookyClicked() {

	let d = new Date();
	let spo0kyDiv = document.getElementById("spo0kyD");
	let spkyPng = document.getElementById("spookyKep");
	let spkyTxt = document.getElementById("spookyTxt");

	elkapottSpookyk += 1;
	localStorage.setItem("elkapottSpookyk", elkapottSpookyk);

	console.log("Spo0ky elkapva ekkor: " + d.toLocaleString());

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

function spookyRemove(proc) {

	let spookyDiv = document.querySelector("#spo0kyD");
	let spookyMinIdo = defSpookyMinIdo*1000;
	let spookyMaxIdo = defSpookyMaxIdo*1000;
	let veletlenNum = veletlenSzamGen(spookyMinIdo, spookyMaxIdo);

	try {
		clearInterval(autoSpookyIdo);
	} catch(err) {
		//hiba
	}

	try {
		spookyDiv.remove();
		if(proc == "timeout") {
			console.log("Spo0ky eltűntetve (nem lett elkapva)");
		} else if (proc == "clicked") {
			console.log("Spo0ky eltűntetve (elkapott!)");
		} else {
			console.log("Spo0ky eltűntetve (???)");
		}
	} catch(err) {
		console.log("Nincs eltűntethető Spo0ky!");
	}

	autoSpookyIdo = setInterval(autoSpooky, veletlenNum);

	console.log("Eddig " + megjelentSpookyk + " db spo0kyt jelent meg összesen, ebből " + elkapottSpookyk + " db lett elkapva.");
	console.log("-----------------------------------------");
	console.log("AutoSpo0ky idő: " + Math.round(veletlenNum/1000) + " mp");
	console.log("-----------------------------------------");
}

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

function spookyStop() {

	let spookyDiv = document.querySelector("#spo0kyD");
	let d = new Date();

	try {
		clearInterval(autoSpookyIdo);
	} catch(err) {
		//hiba
	}

	try {
		clearTimeout(spkRmvTmr);
	} catch(err) {
		//hiba
	}

	try {
		spookyDiv.remove();
	} catch(err) {
		// Nincs Spo0ky az oldalon
	}

	console.log("-----------------------------------------");
	console.log("AutoSpo0ky leállítva! - " + d.toLocaleString());
	console.log("-----------------------------------------");

}

//--------------------------------------------------------------

function eredmenyek() {
	let megjelent = 0;
	let elkapott = 0;

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
		alert("Statisztika:\n\nMegjelent Spo0kyk: " + megjelent + " db\nElkapott Spo0kyk: " + elkapott + " db");
	}
}

//--------------------------------------------------------------

function eredmenyekTorlese() {

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
	
	location.reload();
}

//--------------------------------------------------------------

//---------
// Indítás
//---------

spookyInit();
