/* Sammelkarten: Kultur & Geschichte (36 Karten, 3 pro Kapitel). Schema: docs/SCHEMA.md */
VN.addCards([
  // ── K01 Hà Nội ─────────────────────────────────────────────
  {
    id: "c-quoc-ngu",
    chapter: "k01",
    unlock: "k01l2",
    cat: "Sprache",
    title: "Vom Chữ Nôm zum Quốc Ngữ",
    emoji: "✍️",
    text: "Über tausend Jahre lang schrieb man in Vietnam vor allem Chinesisch: Verwaltung, Beamtenprüfungen und Gelehrsamkeit nutzten `chữ Hán`, die klassischen chinesischen Schriftzeichen. Gesprochen wurde aber Vietnamesisch – und dafür entstand spätestens ab dem 13. Jahrhundert eine eigene Zeichenschrift, das `chữ Nôm`. Es setzte chinesische Bestandteile für Bedeutung und Aussprache zu neuen Zeichen zusammen. Wer Nôm lesen wollte, musste allerdings zuerst Chinesisch beherrschen; Schriftkenntnis blieb ein Privileg einer kleinen Elite. Trotzdem entstanden in Nôm große Werke wie Nguyễn Dus `Truyện Kiều`.\n\nDas heutige Alphabet, `chữ Quốc Ngữ` („Schrift der Landessprache“), geht auf katholische Missionare im 17. Jahrhundert zurück. Portugiesische und italienische Jesuiten wie Francisco de Pina entwickelten gemeinsam mit vietnamesischen Helfern eine Lateinschrift. Der Franzose Alexandre de Rhodes veröffentlichte 1651 in Rom ein vietnamesisch-portugiesisch-lateinisches Wörterbuch, das die Schreibung bekannt machte. Diakritische Zeichen markieren Vokale wie ă, â, ơ, ư und die sechs Töne.\n\nLange blieb Quốc Ngữ eine Schrift der Mission. Erst die französische Kolonialverwaltung förderte sie ab dem späten 19. Jahrhundert – auch, um die chinesisch geprägte Gelehrtenschicht zu schwächen. Vietnamesische Reformer griffen das Alphabet dennoch auf: Die Schule `Đông Kinh Nghĩa Thục` in Hà Nội warb 1907 dafür als Werkzeug der Volksbildung. 1919 fand in Huế die letzte konfuzianische Hauptprüfung statt. Nach der Unabhängigkeitserklärung 1945 startete die Alphabetisierungskampagne `Bình dân học vụ`. Heute können nur noch wenige Fachleute Nôm lesen.",
    terms: [
      { vi: "chữ Hán", de: "chinesische Schriftzeichen" },
      { vi: "chữ Nôm", de: "vietnamesische Zeichenschrift" },
      { vi: "chữ Quốc Ngữ", de: "lateinisches Alphabet des Vietnamesischen" },
      { vi: "bảng chữ cái", de: "Alphabet" },
      { vi: "dấu thanh", de: "Tonzeichen" }
    ],
    quiz: { q: "Wer veröffentlichte 1651 in Rom ein Wörterbuch, das die lateinische Schreibung bekannt machte?", options: ["Nguyễn Du", "Alexandre de Rhodes", "Phan Bội Châu"], answer: 1 }
  },
  {
    id: "c-hoan-kiem",
    chapter: "k01",
    unlock: "k01l4",
    cat: "Geschichte",
    title: "Der See des zurückgegebenen Schwerts",
    emoji: "🐢",
    text: "Mitten in Hà Nội liegt der `Hồ Hoàn Kiếm`, der „See des zurückgegebenen Schwerts“, kurz `Hồ Gươm`. Sein Name geht auf eine Legende aus dem 15. Jahrhundert zurück.\n\nDer historische Hintergrund ist gut belegt: Von 1407 bis 1427 hielt die chinesische Ming-Dynastie Đại Việt besetzt. Der Grundbesitzer Lê Lợi aus Lam Sơn in der heutigen Provinz Thanh Hóa führte ab 1418 einen zehnjährigen Aufstand an, den `khởi nghĩa Lam Sơn`. 1428 bestieg er als Kaiser Lê Thái Tổ den Thron und begründete die Spätere Lê-Dynastie.\n\nDie Legende erzählt, ein Fischer habe eine Schwertklinge in seinem Netz gefunden, Lê Lợi selbst später den passenden Griff in einem Baum. Mit diesem Wunderschwert sei er unbesiegbar gewesen. Nach dem Sieg fuhr er im Boot über den See, der damals `Lục Thủy` („grünes Wasser“) hieß. Da tauchte eine goldene Schildkröte auf und forderte das Schwert zurück – es habe dem Drachenkönig nur geliehen gehört. Lê Lợi gab es ihr, und der See erhielt seinen neuen Namen.\n\nHeute steht auf einer kleinen Insel der `Tháp Rùa`, der Schildkrötenturm aus dem 19. Jahrhundert. Über die rote Brücke `cầu Thê Húc` erreicht man den Ngọc-Sơn-Tempel. Im See lebten tatsächlich Riesen-Weichschildkröten; das letzte bekannte Tier, liebevoll `Cụ Rùa` („Urgroßvater Schildkröte“) genannt, starb im Januar 2016. Sein präparierter Körper ist im Tempel ausgestellt. Am Wochenende ist das Seeufer Fußgängerzone und einer der beliebtesten Treffpunkte der Stadt.",
    terms: [
      { vi: "hồ", de: "See" },
      { vi: "rùa", de: "Schildkröte" },
      { vi: "gươm", de: "Schwert" },
      { vi: "trả lại", de: "zurückgeben" },
      { vi: "khởi nghĩa", de: "Aufstand" }
    ],
    quiz: { q: "Wem gab Lê Lợi der Legende nach das Schwert zurück?", options: ["einem Fischer", "einem Drachen am Fluss", "einer goldenen Schildkröte"], answer: 2 }
  },
  {
    id: "c-van-mieu",
    chapter: "k01",
    unlock: "k01boss",
    cat: "Geschichte",
    title: "Literaturtempel & Konfuzianismus",
    emoji: "🎓",
    text: "Der `Văn Miếu`, der Literaturtempel in Hà Nội, wurde 1070 unter Kaiser Lý Thánh Tông gegründet und dem chinesischen Philosophen Konfuzius (`Khổng Tử`) geweiht. 1076 entstand daneben der `Quốc Tử Giám`, die kaiserliche Akademie – oft als erste Universität Vietnams bezeichnet. Zunächst lernten hier nur Prinzen und Söhne hoher Beamter, später auch begabte Kandidaten aus dem ganzen Land.\n\nDie Anlage ist in fünf Höfe gegliedert. Das Wahrzeichen ist der `Khuê Văn Các`, ein Pavillon von 1805, der heute das Stadtwappen von Hà Nội ziert. Berühmt sind die 82 steinernen Stelen (`bia đá`) auf Schildkrötenrücken. Sie verzeichnen die Namen der Absolventen der höchsten Staatsprüfung, der `tiến sĩ` („Doktoren“), aus den Prüfungen von 1442 bis 1779. Die Schildkröte steht für Langlebigkeit und Weisheit. Lange rieben Studierende vor Prüfungen den Schildkröten die Köpfe für Glück; zum Schutz der Stelen sind diese heute abgesperrt. Die Stelen gehören seit 2011 zum UNESCO-Weltdokumentenerbe.\n\nDer Konfuzianismus prägte Staat und Familie Vietnams über Jahrhunderte: Respekt vor Älteren, Kindespflicht (`hiếu`), Loyalität gegenüber dem Herrscher und hohe Achtung vor Bildung. Das Sprichwort `Tôn sư trọng đạo` („Den Lehrer ehren, die Lehre achten“) gilt bis heute; am 20. November feiert Vietnam den Tag der Lehrer. Kritiker sehen im konfuzianischen Erbe auch starre Hierarchien und eine Benachteiligung von Frauen. Heute besuchen Schulklassen und Abiturjahrgänge den Tempel, um für Prüfungserfolg zu beten und Abschlussfotos zu machen.",
    terms: [
      { vi: "Văn Miếu", de: "Literaturtempel" },
      { vi: "Quốc Tử Giám", de: "kaiserliche Akademie" },
      { vi: "tiến sĩ", de: "Doktor (Prüfungsgrad)" },
      { vi: "Khổng Tử", de: "Konfuzius" },
      { vi: "bia đá", de: "Steinstele" },
      { vi: "hiếu", de: "Kindespflicht" }
    ],
    quiz: { q: "In welchem Jahr wurde der Literaturtempel gegründet?", options: ["1070", "1442", "1805"], answer: 0 }
  },

  // ── K02 ────────────────────────────────────────────────────
  {
    id: "c-anrede",
    chapter: "k02",
    unlock: "k02l2",
    cat: "Sprache",
    title: "Anrede als soziales System",
    emoji: "👪",
    text: "Im Deutschen wählt man zwischen „du“ und „Sie“. Im Vietnamesischen gibt es kein neutrales Wort für „du“ oder „ich“, das in jeder Situation passt. Stattdessen verwendet man meist Verwandtschaftswörter – auch gegenüber Fremden. Dieses System heißt `xưng hô`: wie man sich selbst nennt (`xưng`) und wie man andere anredet (`hô`).\n\nEntscheidend sind Alter, Geschlecht und Beziehung. Einen etwas älteren Mann nennt man `anh` („älterer Bruder“), eine etwas ältere Frau `chị` („ältere Schwester“), Jüngere `em`. Personen in der Generation der eigenen Eltern heißen `cô` (Tante), `chú` (jüngerer Onkel) oder `bác` (älter als die Eltern), Ältere in Großelterngeneration `ông` und `bà`. Das Besondere: Man spricht auch von sich selbst in der passenden Rolle. Eine junge Frau sagt zur Kellnerin, die älter ist: „`Chị ơi, em muốn gọi món`“ – wörtlich „Ältere Schwester, die jüngere Schwester möchte bestellen.“\n\nDeshalb fragen Vietnamesen beim Kennenlernen oft nach dem Alter oder dem Geburtsjahr. Das ist nicht indiskret, sondern nötig, um die richtigen Wörter zu wählen. Das neutrale `tôi` („ich“) klingt eher formell oder distanziert und wird in Reden, Medien oder im Umgang mit Unbekannten gebraucht.\n\nHöflichkeit entsteht zusätzlich durch Partikeln wie `ạ` am Satzende oder `dạ` als respektvolles „Ja“. Das Paar `mày – tao` ist dagegen sehr vertraut oder grob. Es gibt regionale Unterschiede: Im Süden sagt man für Vater meist `ba`, im Norden `bố`. Lernende, die sich bemühen, richtig anzureden, werden fast immer mit Wärme belohnt.",
    terms: [
      { vi: "xưng hô", de: "Anrede-System" },
      { vi: "anh", de: "älterer Bruder / du (zu älterem Mann)" },
      { vi: "chị", de: "ältere Schwester / du (zu älterer Frau)" },
      { vi: "em", de: "jüngeres Geschwister / du (zu Jüngeren)" },
      { vi: "bác", de: "Onkel/Tante (älter als die Eltern)" },
      { vi: "ạ", de: "Höflichkeitspartikel" }
    ],
    quiz: { q: "Warum fragen Vietnamesen beim Kennenlernen oft nach dem Alter?", options: ["um die passende Anrede zu wählen", "weil Ältere zuerst bestellen müssen", "aus reiner Neugier am Horoskop"], answer: 0 }
  },
  {
    id: "c-ca-phe",
    chapter: "k02",
    unlock: "k02l4",
    cat: "Essen",
    title: "Kaffeekultur",
    emoji: "☕",
    text: "Kaffee kam im 19. Jahrhundert mit französischen Missionaren nach Vietnam; als Jahr wird oft 1857 genannt, belegt ist das nicht sicher. Großflächig angebaut wurde er unter der Kolonialherrschaft, vor allem im Hochland `Tây Nguyên`. Nach den Reformen der 1980er-Jahre wuchs der Anbau rasant: Heute ist Vietnam nach Brasilien der zweitgrößte Kaffeeproduzent der Welt, vor allem für die kräftige Sorte Robusta. Die Stadt Buôn Ma Thuột gilt als Kaffeehauptstadt.\n\nGetrunken wird Kaffee traditionell aus dem `phin`, einem kleinen Metallfilter, der direkt auf dem Glas sitzt und langsam tropft. Weil Frischmilch lange knapp war, nimmt man gezuckerte Kondensmilch (`sữa đặc`). So entsteht `cà phê sữa đá`, Kaffee mit Milch auf Eis. In Hà Nội heißt er schlicht `nâu đá` („braun mit Eis“), schwarzer Eiskaffee `đen đá`.\n\nEine Hanoier Erfindung ist `cà phê trứng`, Eierkaffee: Eigelb wird mit Zucker und Kondensmilch zu einer cremigen Schicht aufgeschlagen und auf starken Kaffee gegeben. Nach der Überlieferung erfand ihn 1946 Nguyễn Văn Giảng, damals Barkeeper im Hotel Metropole, weil Milch fehlte. Seine Familie betreibt bis heute das Café Giảng. In Huế wurde in den letzten Jahren `cà phê muối` mit gesalzener Sahne populär.\n\nKaffeetrinken ist vor allem sozial: Man sitzt auf niedrigen Plastikhockern am Straßenrand, beobachtet den Verkehr und redet stundenlang. Daneben boomen moderne Ketten und Specialty-Cafés, die auch Arabica aus Đà Lạt anbieten.",
    terms: [
      { vi: "cà phê sữa đá", de: "Eiskaffee mit Kondensmilch" },
      { vi: "nâu đá", de: "Eiskaffee mit Milch (Hà Nội)" },
      { vi: "đen đá", de: "schwarzer Eiskaffee" },
      { vi: "phin", de: "Kaffeefilter aus Metall" },
      { vi: "cà phê trứng", de: "Eierkaffee" },
      { vi: "sữa đặc", de: "Kondensmilch" }
    ],
    quiz: { q: "Warum nimmt man für vietnamesischen Kaffee oft Kondensmilch?", options: ["weil sie gesünder ist", "weil Frischmilch lange knapp war", "weil der Kaffee sonst nicht tropft"], answer: 1 }
  },
  {
    id: "c-pho",
    chapter: "k02",
    unlock: "k02boss",
    cat: "Essen",
    title: "Die Geschichte des Phở",
    emoji: "🍜",
    text: "`Phở` ist heute das bekannteste Gericht Vietnams – und dabei erstaunlich jung. Die Nudelsuppe entstand Anfang des 20. Jahrhunderts in Nordvietnam, in der Provinz Nam Định und in Hà Nội. Wer sie genau erfunden hat, ist nicht geklärt. Eine Theorie verweist auf den französischen Eintopf pot-au-feu, dessen „feu“ ähnlich wie phở klingt. Eine andere sieht chinesische Rindfleisch-Nudelsuppen als Vorbild. Wahrscheinlich ist eine Mischung: Die Franzosen aßen viel Rindfleisch, so wurden Knochen für Brühe billig verfügbar; Gewürze und Reisnudeln stammen aus der einheimischen Küche.\n\nDie Brühe (`nước dùng`) kocht stundenlang aus Rinderknochen, gewürzt mit Sternanis, Zimt, Kardamom sowie gerösteten Zwiebeln und Ingwer. Dazu kommen flache Reisnudeln (`bánh phở`) und Fleisch: `tái` ist rohes, in der heißen Brühe gegartes Rindfleisch, `chín` durchgegartes. Später kam `phở gà` mit Huhn dazu.\n\nAnfangs trugen Straßenhändler Phở an Schulterstangen durch die Gassen. Nach der Teilung des Landes 1954 zogen rund eine Million Menschen aus dem Norden in den Süden und brachten die Suppe mit. Dort entwickelte sie sich weiter: süßer, mit Sojasprossen, frischen Kräutern, Hoisin- und Chilisauce. Hanoier schwören dagegen auf klare Brühe und wenig Beilagen.\n\nIn der Mangelzeit nach 1975 sprach man spöttisch von `phở không người lái`, „Phở ohne Pilot“ – also ohne Fleisch. Mit vietnamesischen Flüchtlingen gelangte Phở ab den späten 1970er-Jahren in die ganze Welt.",
    terms: [
      { vi: "phở bò", de: "Phở mit Rind" },
      { vi: "phở gà", de: "Phở mit Huhn" },
      { vi: "nước dùng", de: "Brühe" },
      { vi: "bánh phở", de: "flache Reisnudeln" },
      { vi: "tái", de: "roh / kurz gegart" },
      { vi: "chín", de: "durchgegart" }
    ],
    quiz: { q: "Wo entstand Phở?", options: ["im Mekongdelta", "in Huế am Kaiserhof", "in Nordvietnam (Nam Định / Hà Nội)"], answer: 2 }
  },

  // ── K03 Sa Pa ──────────────────────────────────────────────
  {
    id: "c-dan-toc",
    chapter: "k03",
    unlock: "k03l2",
    cat: "Gesellschaft",
    title: "54 Ethnien – Hmong & Dao in Sa Pa",
    emoji: "🏔️",
    text: "Vietnam erkennt offiziell 54 Ethnien (`dân tộc`) an. Die größte Gruppe sind die `người Kinh`, auch Việt genannt; sie stellen laut Volkszählung 2019 rund 85 Prozent der Bevölkerung. Die übrigen 53 Gruppen werden als `dân tộc thiểu số` („ethnische Minderheiten“) bezeichnet. Zu den größten gehören Tày, Thái, Mường, Khmer, Hoa (Chinesischstämmige) und Hmong. Viele sprechen eigene Sprachen aus ganz unterschiedlichen Sprachfamilien; Vietnamesisch ist für sie oft Zweitsprache.\n\nRund um Sa Pa in der Provinz Lào Cai leben vor allem Hmong (vietnamesisch `người Mông`) und Dao (`người Dao`). Die Vorfahren der Hmong wanderten größtenteils im 18. und 19. Jahrhundert aus Südchina ein. Die sogenannten Schwarzen Hmong tragen Kleidung aus Hanf, die mit Indigo tiefblau gefärbt wird – an den blauen Händen der Frauen erkennt man die Arbeit. Die Roten Dao fallen durch ihre leuchtend roten Kopftücher auf und sind für Kräutermedizin bekannt, etwa Kräuterbäder. Typisch für viele Gruppen ist gewebter und bestickter Stoff, `thổ cẩm`.\n\nDie Bergregionen gehören zu den ärmsten des Landes. Tourismus bringt Einkommen durch Homestays, Trekking-Führungen und Kunsthandwerk, hat aber Schattenseiten: Kinder verkaufen Souvenirs statt zur Schule zu gehen, Traditionen werden zur Kulisse. Der einst lokale „Liebesmarkt“ (`chợ tình`) ist heute vor allem eine Touristenattraktion. Respektvoll reist, wer vor dem Fotografieren fragt, faire Preise zahlt und lokale Anbieter wählt.",
    terms: [
      { vi: "dân tộc", de: "Ethnie, Volk" },
      { vi: "dân tộc thiểu số", de: "ethnische Minderheit" },
      { vi: "người Kinh", de: "Kinh (Mehrheitsbevölkerung)" },
      { vi: "người Mông", de: "Hmong" },
      { vi: "người Dao", de: "Dao" },
      { vi: "thổ cẩm", de: "gewebter Brokatstoff" }
    ],
    quiz: { q: "Wie viele Ethnien erkennt Vietnam offiziell an?", options: ["12", "54", "85"], answer: 1 }
  },
  {
    id: "c-am-lich",
    chapter: "k03",
    unlock: "k03l4",
    cat: "Kultur",
    title: "Mondkalender & Tierkreis",
    emoji: "🐱",
    text: "Im Alltag nutzt Vietnam den gregorianischen Kalender, `dương lịch` („Sonnenkalender“). Für Feste und Familienrituale zählt aber der `âm lịch`, wörtlich „Mondkalender“. Genau genommen ist er ein Lunisolarkalender: Jeder Monat beginnt mit dem Neumond, der 15. Tag (`rằm`) ist Vollmond. Damit die Jahre nicht gegen die Jahreszeiten wandern, wird etwa alle drei Jahre ein Schaltmonat eingefügt. Deshalb fällt Tết jedes Jahr auf ein anderes Datum zwischen Ende Januar und Mitte Februar – 2026 auf den 17. Februar.\n\nNach dem Mondkalender richten sich Tết, das Mittherbstfest, Todestage der Ahnen und oft auch die Wahl eines glücksverheißenden Hochzeitstermins. Weil Vietnam seinen Kalender für die eigene Zeitzone berechnet, weicht er gelegentlich vom chinesischen ab: 1985 lag Tết in Vietnam einen Monat vor dem chinesischen Neujahr.\n\nDie Jahre werden in einem 60er-Zyklus (`can chi`) benannt, der zehn „Himmelsstämme“ mit zwölf Tierkreiszeichen (`con giáp`) kombiniert. 2026 ist ein Jahr `Bính Ngọ`, ein Pferdejahr. Die Tiere ähneln denen des chinesischen Tierkreises, mit Unterschieden: Statt des Rinds steht der Wasserbüffel (`trâu`), statt des Schafs die Ziege (`dê`) – und statt des Hasen die Katze (`mèo`). Warum, ist nicht sicher geklärt. Eine verbreitete Erklärung: Das Zeichen heißt `Mão`, was ähnlich wie mèo klingt. Wer im Katzenjahr geboren ist, gilt als gesellig, vorsichtig und kultiviert – zumindest im Volksglauben.",
    terms: [
      { vi: "âm lịch", de: "Mondkalender" },
      { vi: "dương lịch", de: "Sonnenkalender" },
      { vi: "con giáp", de: "Tierkreiszeichen" },
      { vi: "mèo", de: "Katze" },
      { vi: "rằm", de: "Vollmondtag (15.)" },
      { vi: "trâu", de: "Wasserbüffel" }
    ],
    quiz: { q: "Welches Tier steht im vietnamesischen Tierkreis an Stelle des Hasen?", options: ["die Katze", "die Ziege", "der Büffel"], answer: 0 }
  },
  {
    id: "c-ruong-bac-thang",
    chapter: "k03",
    unlock: "k03boss",
    cat: "Kultur",
    title: "Reisterrassen & Nassreis",
    emoji: "🌾",
    text: "An den steilen Hängen Nordvietnams ziehen sich Reisterrassen (`ruộng bậc thang`) wie Treppen bis in die Wolken. Besonders berühmt sind die Terrassen von Mù Cang Chải, seit 2007 national geschützte Landschaft, sowie die um Sa Pa und Hoàng Su Phì. Angelegt haben sie über Generationen Hmong, Dao, Hà Nhì und andere Bergvölker – mit Hacke, Büffel und viel Gemeinschaftsarbeit. Wasser aus Bergbächen wird über Bambusrinnen und kleine Kanäle von Stufe zu Stufe geleitet.\n\nZwei Jahreszeiten locken Fotografen: Im Mai und Juni, der „Saison des fließenden Wassers“ (`mùa nước đổ`), spiegeln die gefluteten Felder den Himmel. Im September und Oktober leuchten die reifen Felder golden (`mùa vàng`).\n\nNassreis (`lúa nước`) ist seit Jahrtausenden die Grundlage der vietnamesischen Kultur, vom Delta des Roten Flusses bis zum Mekong. Heute gehört Vietnam zu den größten Reisexporteuren der Welt. Wie wichtig Reis ist, zeigt die Sprache: Die Pflanze heißt `lúa`, das ungekochte Korn `gạo`, der gekochte Reis `cơm`. `Ăn cơm` („Reis essen“) bedeutet einfach „essen“, und eine Einladung zum Essen lautet „Mời anh ăn cơm“.\n\nDer Wasserbüffel (`con trâu`) war lange das wichtigste Arbeitstier. Ein altes Sprichwort sagt: `Con trâu là đầu cơ nghiệp` – „Der Büffel ist der Anfang allen Besitzes.“ Heute ersetzen in den Ebenen oft Maschinen die Büffel, und viele junge Menschen verlassen die Dörfer für Fabrikjobs in der Stadt.",
    terms: [
      { vi: "ruộng bậc thang", de: "Reisterrassen" },
      { vi: "lúa", de: "Reispflanze" },
      { vi: "gạo", de: "ungekochter Reis" },
      { vi: "cơm", de: "gekochter Reis, Mahlzeit" },
      { vi: "con trâu", de: "Wasserbüffel" },
      { vi: "lúa nước", de: "Nassreis" }
    ],
    quiz: { q: "Was bedeutet „gạo“?", options: ["gekochter Reis", "die Reispflanze", "ungekochter Reis"], answer: 2 }
  },

  // ── K04 Ninh Bình / Hạ Long ────────────────────────────────
  {
    id: "c-tho-cung",
    chapter: "k04",
    unlock: "k04l2",
    cat: "Religion",
    title: "Ahnenverehrung & Hausaltar",
    emoji: "🕯️",
    text: "In fast jedem vietnamesischen Haushalt steht ein Ahnenaltar (`bàn thờ tổ tiên`), meist an der höchsten, würdigsten Stelle des Hauptraums oder im obersten Stockwerk. Darauf stehen Fotos oder Namenstafeln verstorbener Eltern und Großeltern, ein Räuchergefäß, Kerzen, Blumen, Wasser oder Reisschnaps und eine Schale mit Früchten. Zu Tết wird sie zur `mâm ngũ quả` erweitert, einer Platte mit fünf Früchten.\n\nDie Ahnenverehrung (`thờ cúng tổ tiên`) ist weniger eine eigene Religion als eine Lebenshaltung. Viele Vietnamesen bezeichnen sich in Umfragen als religionslos und praktizieren sie dennoch selbstverständlich, oft neben Buddhismus, Katholizismus oder Volksglauben. Dahinter steht die Vorstellung, dass die Verstorbenen weiter zur Familie gehören, über sie wachen und geehrt werden wollen – eine Verbindung von alten Volkstraditionen und konfuzianischer Kindespflicht.\n\nAm 1. und 15. Tag jedes Mondmonats zündet man Räucherstäbchen an (`thắp hương`) und bringt Gaben dar. Der wichtigste Termin ist der `giỗ`, der Todestag eines Ahnen: Die Familie versammelt sich, kocht Lieblingsgerichte des Verstorbenen, stellt sie zuerst auf den Altar und isst dann gemeinsam. Bei manchen Anlässen wird Votivpapier (`vàng mã`) verbrannt – Geldscheine, Kleidung, heute sogar Papier-Smartphones für das Jenseits. Wegen Umweltbelastung und Kosten wird dieser Brauch zunehmend kritisch diskutiert.\n\nAuf nationaler Ebene ehrt man die legendären Hùng-Könige als gemeinsame Urahnen. Ihr Gedenktag am 10. Tag des 3. Mondmonats ist seit 2007 Feiertag; die Verehrung in Phú Thọ ist seit 2012 immaterielles UNESCO-Kulturerbe.",
    terms: [
      { vi: "bàn thờ", de: "Altar" },
      { vi: "tổ tiên", de: "Ahnen" },
      { vi: "thắp hương", de: "Räucherstäbchen anzünden" },
      { vi: "giỗ", de: "Todestag-Gedenkfeier" },
      { vi: "mâm ngũ quả", de: "Fünf-Früchte-Platte" },
      { vi: "vàng mã", de: "Votivpapier" }
    ],
    quiz: { q: "Was ist ein „giỗ“?", options: ["die Gedenkfeier am Todestag eines Ahnen", "das Neujahrsfest", "ein buddhistisches Kloster"], answer: 0 }
  },
  {
    id: "c-rong-tien",
    chapter: "k04",
    unlock: "k04l4",
    cat: "Kultur",
    title: "Con Rồng cháu Tiên",
    emoji: "🐉",
    text: "Vietnamesen nennen sich gern `con Rồng cháu Tiên`, „Kinder des Drachen, Enkel der Fee“. Der Ausdruck geht auf den bekanntesten Ursprungsmythos des Landes zurück – eine Legende, keine historische Überlieferung.\n\nDer Drachenkönig `Lạc Long Quân` stammte aus dem Meer, die Fee `Âu Cơ` aus den Bergen. Sie heirateten, und Âu Cơ brachte einen Beutel mit hundert Eiern zur Welt, aus denen hundert Söhne schlüpften. Doch Meer und Berge passten auf Dauer nicht zusammen: Das Paar trennte sich, fünfzig Söhne folgten dem Vater ans Meer, fünfzig der Mutter in die Berge. Der älteste Sohn wurde der erste `Hùng Vương`, König des Reiches `Văn Lang`. Achtzehn Hùng-Könige sollen der Überlieferung nach regiert haben. Historisch fassbar ist in dieser Region die bronzezeitliche Đông-Sơn-Kultur des ersten Jahrtausends v. Chr., bekannt für ihre verzierten Bronzetrommeln.\n\nAus dem Mythos stammt auch das Wort `đồng bào`, „aus demselben Beutel“: Es bedeutet Landsleute und wird bis heute in Reden verwendet, etwa bei Spendenaufrufen nach Fluten.\n\nAuch die Bucht von Hạ Long hat ihre Legende. `Hạ Long` heißt „herabsteigender Drache“: Als Feinde vom Meer angriffen, sollen die Götter eine Drachenfamilie geschickt haben. Die Drachen spuckten Juwelen und Jade, die zu Inseln wurden und eine Mauer gegen die Angreifer bildeten. Tatsächlich ragen in der Bucht rund 2.000 Kalksteininseln aus dem Wasser, geformt durch Erosion über Jahrmillionen. Seit 1994 ist sie UNESCO-Weltnaturerbe.",
    terms: [
      { vi: "rồng", de: "Drache" },
      { vi: "tiên", de: "Fee" },
      { vi: "đồng bào", de: "Landsleute" },
      { vi: "Hùng Vương", de: "Hùng-König" },
      { vi: "vịnh Hạ Long", de: "Hạ-Long-Bucht" }
    ],
    quiz: { q: "Wie viele Eier legte Âu Cơ der Legende nach?", options: ["18", "54", "100"], answer: 2 }
  },
  {
    id: "c-hoa-lu",
    chapter: "k04",
    unlock: "k04boss",
    cat: "Geschichte",
    title: "Hoa Lư – die erste Hauptstadt",
    emoji: "🏯",
    text: "938 besiegte Ngô Quyền am Fluss Bạch Đằng eine chinesische Flotte – er ließ Pfähle mit Eisenspitzen ins Flussbett rammen, an denen die Schiffe bei Ebbe aufliefen. Damit endete nach rund tausend Jahren die chinesische Herrschaft. Nach Ngô Quyềns Tod zerfiel das Land jedoch in die Gebiete von zwölf Kriegsherren, die `Loạn 12 sứ quân`.\n\nDiese Zersplitterung beendete Đinh Bộ Lĩnh. Der Legende nach führte er schon als Büffelhirte Kinder mit Fahnen aus Schilfrohr in Scheinschlachten an. 968 ließ er sich als `Đinh Tiên Hoàng` zum Kaiser ausrufen und nannte sein Reich `Đại Cồ Việt`. Als Hauptstadt wählte er Hoa Lư in der heutigen Provinz Ninh Bình. Der Ort war eine natürliche Festung: Steile Kalksteinberge (`núi đá vôi`) und Flüsse umschlossen ihn, nur wenige Mauern mussten die Lücken schließen.\n\n979 wurde Đinh Tiên Hoàng ermordet. Der General Lê Hoàn übernahm die Macht, wurde 980 als Lê Đại Hành Kaiser und schlug 981 einen Angriff der chinesischen Song-Dynastie zurück. 1010 verlegte Kaiser Lý Thái Tổ die Hauptstadt in die weite Ebene am Roten Fluss und nannte sie `Thăng Long`, „aufsteigender Drache“ – das heutige Hà Nội. Sein Erlass dazu, der `Chiếu dời đô`, ist ein bekannter Text der vietnamesischen Geschichte.\n\nIn Hoa Lư stehen heute Tempel für die Kaiser Đinh und Lê, deren Bauten aus dem 17. Jahrhundert stammen. Die umgebende Karstlandschaft Tràng An ist seit 2014 UNESCO-Welterbe.",
    terms: [
      { vi: "kinh đô", de: "Hauptstadt (eines Reiches)" },
      { vi: "hoàng đế", de: "Kaiser" },
      { vi: "núi đá vôi", de: "Kalksteinberg" },
      { vi: "Thăng Long", de: "alter Name von Hà Nội" },
      { vi: "đền", de: "Tempel (für Helden, Könige)" }
    ],
    quiz: { q: "Wohin verlegte Lý Thái Tổ 1010 die Hauptstadt?", options: ["nach Huế", "nach Thăng Long (Hà Nội)", "nach Hội An"], answer: 1 }
  },

  // ── K05 Huế ────────────────────────────────────────────────
  {
    id: "c-nguyen",
    chapter: "k05",
    unlock: "k05l2",
    cat: "Geschichte",
    title: "Nguyễn-Dynastie & Zitadelle Huế",
    emoji: "👑",
    text: "Im 17. und 18. Jahrhundert war Vietnam faktisch geteilt: Im Norden herrschten die Trịnh-Fürsten, im Süden die Nguyễn-Fürsten. Ab 1771 fegte der Tây-Sơn-Aufstand beide Häuser hinweg. Der überlebende Nguyễn-Prinz Nguyễn Ánh eroberte das Land mit Unterstützung unter anderem des französischen Bischofs Pigneau de Béhaine zurück und bestieg 1802 als Kaiser Gia Long den Thron. Zum ersten Mal reichte ein vietnamesischer Staat vom chinesischen Grenzgebiet bis zum Golf von Thailand. Ab 1804 hieß er offiziell `Việt Nam`.\n\nHauptstadt wurde Huế am Parfümfluss (`sông Hương`). Ab 1805 entstand die Zitadelle (`Kinh thành`): eine Festung mit sternförmigen Bastionen nach europäischem Vorbild, ausgerichtet nach chinesischer Geomantie. Darin liegen die Kaiserstadt und die Verbotene Purpurstadt (`Tử Cấm Thành`), der private Bereich des Kaisers. Außerhalb der Stadt ließen sich die Herrscher prachtvolle Grabanlagen (`lăng`) bauen, etwa Minh Mạng, Tự Đức und Khải Định.\n\nDie Dynastie stellte 13 Kaiser, verlor aber ab 1858 Schritt für Schritt ihre Macht an Frankreich. Ab 1883/84 regierten die Kaiser nur noch unter französischem Protektorat; einige, die Widerstand leisteten, wurden abgesetzt und verbannt. Der letzte Kaiser, Bảo Đại, dankte am 30. August 1945 zugunsten der Việt Minh ab.\n\nDie Bauten von Huế sind seit 1993 UNESCO-Welterbe. Viele wurden in Kriegen beschädigt, besonders 1968 in der Schlacht um Huế, und werden seither restauriert. Auch die höfische Musik `nhã nhạc` ist von der UNESCO anerkannt.",
    terms: [
      { vi: "triều Nguyễn", de: "Nguyễn-Dynastie" },
      { vi: "Kinh thành", de: "Zitadelle (Huế)" },
      { vi: "Tử Cấm Thành", de: "Verbotene Purpurstadt" },
      { vi: "lăng", de: "Kaisergrab, Mausoleum" },
      { vi: "sông Hương", de: "Parfümfluss" },
      { vi: "nhã nhạc", de: "höfische Musik" }
    ],
    quiz: { q: "Wann dankte der letzte Kaiser Bảo Đại ab?", options: ["1802", "1883", "1945"], answer: 2 }
  },
  {
    id: "c-nuoc-mam",
    chapter: "k05",
    unlock: "k05l4",
    cat: "Essen",
    title: "Fischsauce & Tischsitten",
    emoji: "🐟",
    text: "Ohne `nước mắm` keine vietnamesische Küche. Die Fischsauce entsteht aus kleinen Sardellen (`cá cơm`), die schichtweise mit Salz in große Holzfässer gefüllt werden. Ein Jahr oder länger fermentieren sie, bis eine klare, bernsteinfarbene Flüssigkeit abgelassen werden kann. Der erste Abzug, `nước mắm nhỉ`, gilt als der beste. Die Qualität wird am Eiweißgehalt gemessen, angegeben in `độ đạm`. Berühmt sind die Saucen von der Insel Phú Quốc und aus Phan Thiết. Pur ist sie sehr salzig; auf den Tisch kommt meist `nước chấm`, ein Dip aus Fischsauce, Wasser, Zucker, Limette, Knoblauch und Chili.\n\nAuch das gemeinsame Essen folgt Regeln. Alle Gerichte stehen in der Mitte, jede Person hat eine eigene Reisschale (`bát`, im Süden `chén`) und Stäbchen (`đũa`). Bevor man beginnt, lädt man die Älteren ein: „`Mời ông bà ăn cơm`“ – „Bitte, Großvater und Großmutter, esst.“ Kinder lernen diese Formel früh. Oft beginnen die Ältesten zuerst.\n\nMan hebt die Reisschale zum Mund, statt sich weit über den Tisch zu beugen. Stäbchen steckt man nicht senkrecht in den Reis – das erinnert an Räucherstäbchen beim Totengedenken. Wer anderen ein gutes Stück auf den Teller legt (`gắp thức ăn`), zeigt Fürsorge; Gäste werden so oft reichlich versorgt. Beim Bezahlen im Restaurant teilt man selten auf: Meist zahlt eine Person, oft die älteste oder die einladende, und beim nächsten Mal jemand anderes.",
    terms: [
      { vi: "nước mắm", de: "Fischsauce" },
      { vi: "nước chấm", de: "Dip-Sauce" },
      { vi: "cá cơm", de: "Sardelle" },
      { vi: "đũa", de: "Essstäbchen" },
      { vi: "bát", de: "Schale (Norden)" },
      { vi: "mời", de: "einladen, bitten" }
    ],
    quiz: { q: "Warum steckt man Stäbchen nicht senkrecht in den Reis?", options: ["Es erinnert an Räucherstäbchen beim Totengedenken.", "Es bedeutet, dass man satt ist.", "Es gilt als Aufforderung zu bezahlen."], answer: 0 }
  },
  {
    id: "c-am-thuc-hue",
    chapter: "k05",
    unlock: "k05boss",
    cat: "Essen",
    title: "Kaiserliche Küche Huế",
    emoji: "🍲",
    text: "Als Hauptstadt der Nguyễn-Dynastie von 1802 bis 1945 entwickelte Huế eine eigene, raffinierte Küche. Für den Hof kochte eine eigene Behörde; Zutaten und Spezialitäten kamen als Tribut aus dem ganzen Land. Oft erzählt wird, Kaiser Tự Đức habe zu jeder Mahlzeit 50 Gerichte von 50 Köchen verlangt – eine Überlieferung, deren Details sich kaum überprüfen lassen. Sicher ist: Die Hofküche legte großen Wert auf kleine Portionen, kunstvolle Präsentation und Harmonie von Farben und Geschmäckern.\n\nViele Gerichte aus Huế sind heute Alltagsküche. Kleine gedämpfte Reisküchlein in Schälchen, `bánh bèo`, werden mit getrockneten Garnelen und Schweineschwarte bestreut. `Bánh lọc` sind durchsichtige Tapioka-Taschen mit Garnelen und Schweinefleisch, `bánh nậm` flache, in Bananenblatt gedämpfte Fladen. Ein ausgesprochenes Volksgericht ist `cơm hến`: Reis mit winzigen Muscheln aus dem Parfümfluss, Kräutern, Erdnüssen und Chili.\n\nDas berühmteste Gericht ist `bún bò Huế`, eine kräftige Nudelsuppe mit runden Reisnudeln, Rind und Schwein. Ihr Aroma kommt von Zitronengras und `mắm ruốc`, einer fermentierten Garnelenpaste. Überhaupt gilt die Küche von Huế als die schärfste (`cay`) Vietnams.\n\nEine zweite Tradition ist die vegetarische Küche (`chay`). Huế ist ein Zentrum des Buddhismus mit vielen Pagoden; dort und in Familien wird an Vollmond- und Neumondtagen fleischlos gekocht – oft so geschickt, dass Gerichte wie Fleisch aussehen. Und zum Nachtisch gibt es eine riesige Auswahl süßer Suppen, `chè`.",
    terms: [
      { vi: "bún bò Huế", de: "Rindfleisch-Nudelsuppe aus Huế" },
      { vi: "bánh bèo", de: "gedämpfte Reisküchlein" },
      { vi: "bánh lọc", de: "Tapioka-Taschen" },
      { vi: "cơm hến", de: "Reis mit Flussmuscheln" },
      { vi: "cay", de: "scharf" },
      { vi: "chay", de: "vegetarisch" }
    ],
    quiz: { q: "Welche Würzpaste gibt bún bò Huế sein Aroma (neben Zitronengras)?", options: ["mắm ruốc (Garnelenpaste)", "Sojasauce", "Kokosmilch"], answer: 0 }
  },

  // ── K06 Hội An ─────────────────────────────────────────────
  {
    id: "c-ao-dai",
    chapter: "k06",
    unlock: "k06l2",
    cat: "Kultur",
    title: "Geschichte des Áo dài",
    emoji: "👘",
    text: "Das `áo dài`, wörtlich „langes Hemd“, ist ein knöchellanges Gewand mit hohem Kragen, das an beiden Seiten ab der Taille geschlitzt ist und über einer weiten Hose (`quần`) getragen wird. Es gilt als Nationalkleidung – ist in seiner heutigen Form aber erst rund hundert Jahre alt.\n\nAls Vorläufer gilt eine Kleiderordnung von 1744: Der Nguyễn-Fürst Nguyễn Phúc Khoát schrieb im Süden Hosen und ein durchgeknöpftes Obergewand vor, auch um sich vom Norden abzugrenzen. Später verbreitete sich das weite Fünfbahnen-Gewand `áo ngũ thân`.\n\nIn den 1930er-Jahren entwarf der Hanoier Maler Nguyễn Cát Tường, der seine Mode unter dem Namen „Le Mur“ verkaufte, eine eng anliegende, figurbetonte Variante mit europäischen Einflüssen. Sie wurde zunächst als gewagt kritisiert, prägte aber das moderne Áo dài. In Sài Gòn kamen ab den 1950er-Jahren Raglanärmel hinzu, die den Schnitt noch eleganter machten.\n\nNach 1975 galt das Áo dài in der Mangelzeit als unpraktisch und wurde seltener getragen. Seit den späten 1980er-Jahren erlebt es ein Comeback. Heute tragen es Schülerinnen vieler Oberschulen als Uniform, oft in Weiß (`áo dài trắng`), dazu Stewardessen, Bankangestellte, Bräute und viele Frauen zu Tết. Auch Männer tragen bei Zeremonien wieder ein Áo dài, traditionell mit einem Turban, dem `khăn đóng`. Ein gutes Áo dài wird maßgeschneidert (`may đo`) – in Hội An fertigen Schneider es oft innerhalb eines Tages.",
    terms: [
      { vi: "áo dài", de: "langes Gewand, Nationalkleidung" },
      { vi: "quần", de: "Hose" },
      { vi: "áo dài trắng", de: "weißes Áo dài (Schuluniform)" },
      { vi: "khăn đóng", de: "Turban (zum Áo dài der Männer)" },
      { vi: "may đo", de: "maßschneidern" }
    ],
    quiz: { q: "Wer entwarf in den 1930er-Jahren die eng anliegende moderne Form?", options: ["Nguyễn Phúc Khoát", "Nguyễn Cát Tường", "Kaiser Gia Long"], answer: 1 }
  },
  {
    id: "c-hoi-an",
    chapter: "k06",
    unlock: "k06l4",
    cat: "Geschichte",
    title: "Handelshafen Hội An",
    emoji: "⛵",
    text: "Hội An liegt nahe der Mündung des Flusses Thu Bồn. Schon zur Zeit des Reiches Champa war die Gegend ein Hafen. Seine große Blüte erlebte er im 16. bis 18. Jahrhundert unter den Nguyễn-Fürsten, die den Süden (`Đàng Trong`) beherrschten und den Außenhandel förderten. Europäische Händler nannten die Stadt „Faifo“.\n\nMit den Monsunwinden kamen jedes Jahr Schiffe aus China, Japan, Siam, Portugal und den Niederlanden. Gehandelt wurden Seide, Porzellan, Zimt, Pfeffer, Zucker und Adlerholz. Japanische und chinesische Kaufleute siedelten in eigenen Vierteln. Die Japanische Brücke, `Chùa Cầu`, stammt der Überlieferung nach aus dem frühen 17. Jahrhundert und ist auf dem 20.000-Đồng-Schein abgebildet. Als Japan in den 1630er-Jahren seine Grenzen schloss, verschwand die japanische Gemeinde allmählich. Die Chinesen blieben; ihre Versammlungshallen (`hội quán`), etwa die der Kaufleute aus Fujian, prägen bis heute das Stadtbild.\n\nIm späten 18. Jahrhundert setzten die Tây-Sơn-Kriege der Stadt zu, später versandete der Fluss, und im 19. Jahrhundert übernahm Đà Nẵng die Rolle des Haupthafens. Gerade dieser Niedergang bewahrte die Altstadt (`phố cổ`) vor Modernisierung: Über tausend historische Holz- und Ziegelhäuser sind erhalten. Seit 1999 ist Hội An UNESCO-Welterbe.\n\nHeute leben viele Bewohner vom Tourismus – von Schneidereien, Laternenläden und Restaurants. Typisches Gericht ist `cao lầu`, dicke Nudeln mit Schweinefleisch und Kräutern. Fast jedes Jahr steht die Altstadt in der Regenzeit unter Wasser.",
    terms: [
      { vi: "phố cổ", de: "Altstadt" },
      { vi: "Chùa Cầu", de: "Japanische Brücke" },
      { vi: "hội quán", de: "Versammlungshalle" },
      { vi: "thương cảng", de: "Handelshafen" },
      { vi: "cao lầu", de: "Nudelgericht aus Hội An" }
    ],
    quiz: { q: "Auf welcher Banknote ist die Japanische Brücke abgebildet?", options: ["10.000 Đồng", "20.000 Đồng", "500.000 Đồng"], answer: 1 }
  },
  {
    id: "c-den-long",
    chapter: "k06",
    unlock: "k06boss",
    cat: "Feste",
    title: "Laternen & Vollmondnächte",
    emoji: "🏮",
    text: "Seidenlaternen (`đèn lồng`) sind das Wahrzeichen von Hội An. Sie bestehen aus einem Gerüst aus gespaltenem Bambus, das mit farbiger Seide oder Stoff bespannt wird. Viele lassen sich zusammenklappen und sind daher beliebte Mitbringsel. Woher die Tradition genau stammt, ist nicht eindeutig belegt; meist wird sie mit chinesischen und japanischen Kaufleuten in Verbindung gebracht, die sich hier im 16. und 17. Jahrhundert niederließen.\n\nBesonders stimmungsvoll ist Hội An am Vorabend des Vollmonds. Seit Ende der 1990er-Jahre feiert die Stadt jeden Monat am 14. Tag des Mondkalenders eine „Nacht der Altstadt“: Elektrisches Licht wird in vielen Straßen gedämpft, Laternen leuchten, Motorräder bleiben draußen. Auf Plätzen werden traditionelle Spiele und Musik aufgeführt, etwa `bài chòi`, ein Volkslied-Spiel aus Zentralvietnam, das seit 2017 immaterielles UNESCO-Kulturerbe ist.\n\nAuf dem Fluss Hoài setzen Besucher und Einheimische kleine Papierlaternen mit Kerzen aus, `hoa đăng` genannt. Das Aussetzen (`thả đèn`) ist mit einem Wunsch verbunden oder mit dem Gedenken an Verstorbene. Ursprünglich ein buddhistischer Brauch, ist es heute auch ein Touristenmagnet; Umweltschützer mahnen, die Laternen wieder einzusammeln.\n\nVollmondtage (`rằm`) haben allgemein eine besondere Bedeutung: Viele Familien bringen den Ahnen Opfer dar, gläubige Buddhisten essen vegetarisch und besuchen Pagoden. Den Höhepunkt der Laternenkultur bildet das Mittherbstfest, wenn Kinder mit Sternlaternen (`đèn ông sao`) durch die Straßen ziehen.",
    terms: [
      { vi: "đèn lồng", de: "Laterne" },
      { vi: "hoa đăng", de: "schwimmende Laterne" },
      { vi: "thả đèn", de: "Laternen aussetzen" },
      { vi: "rằm", de: "Vollmondtag" },
      { vi: "đèn ông sao", de: "Sternlaterne" },
      { vi: "bài chòi", de: "Volkslied-Spiel aus Zentralvietnam" }
    ],
    quiz: { q: "Was setzt man in Hội An auf dem Fluss aus?", options: ["Reisschiffchen", "kleine Laternen mit Kerzen (hoa đăng)", "Räucherstäbchen"], answer: 1 }
  },

  // ── K07 Đà Nẵng / Nha Trang ───────────────────────────────
  {
    id: "c-champa",
    chapter: "k07",
    unlock: "k07l2",
    cat: "Geschichte",
    title: "Champa & Mỹ Sơn",
    emoji: "🛕",
    text: "Lange bevor Vietnamesen das heutige Zentralvietnam besiedelten, lag hier Champa – eine Folge von Königreichen der Cham, eines Volkes, das eine austronesische Sprache spricht, verwandt mit Malaiisch. Chinesische Quellen berichten ab dem späten 2. Jahrhundert von einem Reich an dieser Küste. Champa lebte vom Seehandel und war stark von Indien geprägt: Die Herrscher verehrten vor allem den Hindu-Gott Shiva, schrieben in Sanskrit und Cham, später kam auch der Islam hinzu.\n\nDas wichtigste Heiligtum war Mỹ Sơn in der Provinz Quảng Nam. Vom 4. bis zum 13. Jahrhundert entstanden in einem Talkessel über 70 Tempel aus gebranntem Ziegel. Wie die Ziegel so fugenlos verbunden wurden, ist bis heute nicht vollständig geklärt. 1969 zerstörten US-Bombenangriffe viele Bauten. Seit 1999 ist Mỹ Sơn UNESCO-Welterbe; Restaurierungen laufen, unter anderem mit internationaler Hilfe.\n\nÜber Jahrhunderte kämpften Champa und Đại Việt gegeneinander. Im Zuge des `Nam tiến`, der „Ausdehnung nach Süden“, verlor Champa schrittweise Gebiet: 1306 gingen zwei Provinzen als Brautgabe für die Heirat der Prinzessin Huyền Trân mit dem Cham-König an Đại Việt, 1471 eroberte Kaiser Lê Thánh Tông die Hauptstadt Vijaya. Den letzten Rest gliederte Kaiser Minh Mạng 1832 ein.\n\nHeute leben rund 180.000 Cham (`người Chăm`) in Vietnam, vor allem in den Küstenprovinzen um Phan Rang. Ihr wichtigstes Fest ist das Katê-Fest. Cham-Türme (`tháp Chăm`) wie die Po-Nagar-Türme in Nha Trang sind bis heute religiöse Stätten.",
    terms: [
      { vi: "người Chăm", de: "Cham (Volk)" },
      { vi: "tháp Chăm", de: "Cham-Turm" },
      { vi: "Nam tiến", de: "Ausdehnung nach Süden" },
      { vi: "đền tháp", de: "Tempelturm" },
      { vi: "di sản thế giới", de: "Welterbe" }
    ],
    quiz: { q: "Welcher Gott wurde in Champa vor allem verehrt?", options: ["Buddha Amitabha", "Shiva", "Konfuzius"], answer: 1 }
  },
  {
    id: "c-ra-vao",
    chapter: "k07",
    unlock: "k07l4",
    cat: "Sprache",
    title: "„ra Bắc, vào Nam“",
    emoji: "🧭",
    text: "Wer im Vietnamesischen reist, braucht Richtungsverben. Man „geht“ nicht einfach nach Hà Nội, sondern man geht „hinaus“: `ra Hà Nội`. Nach Sài Gòn geht man „hinein“: `vào Sài Gòn`. Die Formel `ra Bắc, vào Nam` – „hinaus in den Norden, hinein in den Süden“ – gilt im ganzen Land, unabhängig davon, wo man gerade ist.\n\nWarum das so ist, ist nicht eindeutig geklärt. Eine verbreitete Erklärung verweist auf die Geschichte: Die Vietnamesen dehnten sich über Jahrhunderte vom Delta des Roten Flusses nach Süden aus (`Nam tiến`) und zogen gewissermaßen „hinein“ in neues Land. Andere Deutungen beziehen sich auf die Lage der alten Hauptstädte oder die Form des Landes.\n\nAuch andere Richtungswörter spiegeln die Geografie. Ins Hochland oder in eine größere Stadt fährt man „hinauf“: `lên Đà Lạt`, und aus dem Mekongdelta auch `lên Sài Gòn`. In Richtung Küste, Delta oder Dorf geht es „hinunter“: `xuống Cần Thơ`. Und nach Hause fährt man mit `về`: `về quê` heißt „in die Heimat, ins Heimatdorf fahren“.\n\nDie Sprache selbst unterscheidet sich zwischen Nord, Mitte und Süd. Im Norden gilt der Dialekt von Hà Nội als Standard. In Huế und Zentralvietnam klingen die Töne anders, und es gibt eigene Wörter: `mô, tê, răng, rứa` statt `đâu, kia, sao, thế` („wo, dort, wie, so“). Im Süden sagt man `heo` statt `lợn` für Schwein, `bắp` statt `ngô` für Mais, und das v wird oft wie ein j ausgesprochen. Verstehen tun sich alle – mit etwas Übung.",
    terms: [
      { vi: "ra", de: "hinaus (z. B. nach Norden)" },
      { vi: "vào", de: "hinein (z. B. nach Süden)" },
      { vi: "lên", de: "hinauf" },
      { vi: "xuống", de: "hinunter" },
      { vi: "về quê", de: "in die Heimat fahren" },
      { vi: "răng", de: "wie, warum (Zentralvietnam)" }
    ],
    quiz: { q: "Wie sagt man, wenn man nach Hà Nội reist?", options: ["vào Hà Nội", "xuống Hà Nội", "ra Hà Nội"], answer: 2 }
  },
  {
    id: "c-xe-may",
    chapter: "k07",
    unlock: "k07boss",
    cat: "Gesellschaft",
    title: "Mopedkultur",
    emoji: "🛵",
    text: "In Vietnam sind über 70 Millionen Motorräder und Mopeds registriert – bei rund 100 Millionen Einwohnern. Die `xe máy` ist Familienauto, Lieferwagen und Wohnzimmer zugleich. Eine vierköpfige Familie auf einem Sitz, ein Kühlschrank auf dem Gepäckträger, ein Stapel lebender Enten oder zwei Meter Rohre: Alles wird transportiert.\n\nSeit den 1990er-Jahren dominieren japanische Marken. Der Name „Honda“ wurde zeitweise zum Gattungsbegriff, und eine Honda Dream galt als Statussymbol, für das Familien jahrelang sparten. Heute setzen Städte zunehmend auf Elektromopeds, etwa vom vietnamesischen Hersteller VinFast. Hà Nội und Thành phố Hồ Chí Minh planen, Verbrennerfahrzeuge in den Innenstädten schrittweise einzuschränken.\n\nDer Verkehr folgt eigenen Regeln. Gehupt (`bóp còi`) wird nicht aus Ärger, sondern als Hinweis: „Ich bin hier.“ Statt an Kreuzungen anzuhalten, fließen die Ströme ineinander. Fußgänger überqueren die Straße am besten langsam und gleichmäßig – nicht rennen, nicht stehen bleiben –, damit die Fahrer sie umfahren können. Staus (`tắc đường` im Norden, `kẹt xe` im Süden) gehören zum Alltag, ebenso die Abgase; viele Menschen tragen deshalb Masken.\n\nSeit Dezember 2007 gilt auf allen Straßen Helmpflicht (`mũ bảo hiểm`), was die Zahl der Kopfverletzungen deutlich senkte. Trotzdem fordern Verkehrsunfälle jedes Jahr viele Tausend Todesopfer. Das Motorradtaxi, `xe ôm` („Fahrzeug zum Festhalten“), wird heute meist per App bestellt. Wer selbst fahren will, braucht einen gültigen Führerschein – ohne ihn zahlt im Ernstfall keine Versicherung.",
    terms: [
      { vi: "xe máy", de: "Motorrad, Moped" },
      { vi: "xe ôm", de: "Motorradtaxi" },
      { vi: "mũ bảo hiểm", de: "Helm" },
      { vi: "bóp còi", de: "hupen" },
      { vi: "tắc đường", de: "Stau (Norden)" },
      { vi: "kẹt xe", de: "Stau (Süden)" }
    ],
    quiz: { q: "Seit wann gilt in Vietnam auf allen Straßen Helmpflicht?", options: ["seit 1995", "seit 2007", "seit 2020"], answer: 1 }
  },

  // ── K08 Đà Lạt ─────────────────────────────────────────────
  {
    id: "c-phap-thuoc",
    chapter: "k08",
    unlock: "k08l2",
    cat: "Geschichte",
    title: "Französische Kolonialzeit & Điện Biên Phủ",
    emoji: "⚔️",
    text: "1858 griffen französische und spanische Truppen Đà Nẵng an – offiziell zum Schutz katholischer Missionare, tatsächlich auch aus Handels- und Machtinteressen. Schritt für Schritt eroberte Frankreich das Land: Der Süden wurde 1867 zur Kolonie Cochinchina, Zentral- und Nordvietnam (Annam und Tonkin) 1883/84 zu Protektoraten. 1887 entstand Französisch-Indochina, zu dem später auch Laos gehörte. Vietnamesisch heißt diese Zeit `Pháp thuộc`.\n\nDie Kolonialherrschaft brachte Eisenbahnen, Häfen, Schulen und Krankenhäuser – vor allem aber Ausbeutung: hohe Steuern, Staatsmonopole auf Salz, Alkohol und Opium, harte Arbeit auf Kautschukplantagen. Widerstand gab es von Anfang an, von der kaisertreuen Cần-Vương-Bewegung ab 1885 über Reformer wie Phan Bội Châu und Phan Châu Trinh bis zum Aufstand von Yên Bái 1930. Im selben Jahr entstand unter Hồ Chí Minhs Leitung die Kommunistische Partei, die sich bald darauf Kommunistische Partei Indochinas nannte.\n\nWährend des Zweiten Weltkriegs besetzte Japan das Land. In der Hungersnot 1944/45 starben je nach Schätzung mehrere Hunderttausend bis zwei Millionen Menschen. Am 2. September 1945 verkündete Hồ Chí Minh in Hà Nội die Unabhängigkeit (`độc lập`). Frankreich wollte seine Kolonie zurück; es folgte der Indochinakrieg 1946–1954, in Vietnam `Kháng chiến chống Pháp` genannt.\n\nDie Entscheidung fiel in Điện Biên Phủ. General Võ Nguyên Giáp ließ Artillerie in Einzelteilen über Bergpfade schleppen und die französische Festung im Tal einkreisen. Nach 56 Tagen ergab sie sich am 7. Mai 1954. Die Genfer Konferenz teilte Vietnam daraufhin vorläufig am 17. Breitengrad.",
    terms: [
      { vi: "Pháp thuộc", de: "französische Kolonialzeit" },
      { vi: "thực dân", de: "Kolonialherren, kolonial" },
      { vi: "Kháng chiến chống Pháp", de: "Widerstandskrieg gegen Frankreich" },
      { vi: "độc lập", de: "Unabhängigkeit" },
      { vi: "Điện Biên Phủ", de: "Ort der Entscheidungsschlacht 1954" }
    ],
    quiz: { q: "Wann ergab sich die französische Festung Điện Biên Phủ?", options: ["am 2. September 1945", "am 7. Mai 1954", "am 30. April 1975"], answer: 1 }
  },
  {
    id: "c-da-lat",
    chapter: "k08",
    unlock: "k08l4",
    cat: "Geschichte",
    title: "Đà Lạt, die Bergstation",
    emoji: "🌲",
    text: "Đà Lạt liegt auf rund 1.500 Metern Höhe auf dem Lâm-Viên-Plateau im südlichen Hochland. Die Durchschnittstemperatur beträgt nur etwa 18 Grad – für Vietnam ungewöhnlich kühl. Ursprünglich lebten hier Angehörige der Ethnie Cơ Ho (`người Cơ Ho`). Der Name geht vermutlich auf ihre Sprache zurück, etwa „Fluss der Lạch“, einer Untergruppe. Die lateinische Deutung „Dat Aliis Laetitiam Aliis Temperiem“ („Den einen gibt sie Freude, den anderen Frische“) ist ein später erfundenes Wortspiel.\n\n1893 erkundete der schweizerisch-französische Arzt Alexandre Yersin das Plateau. Er empfahl es als Erholungsort für Kolonialbeamte, die im heißen Tiefland an Malaria und Erschöpfung litten. Generalgouverneur Paul Doumer griff die Idee 1897 auf. So entstand eine Bergstation nach europäischem Vorbild: Villen im Stil französischer Kurorte, ein Gymnasium, ein Bahnhof im Art-déco-Stil und später ein Sommerpalast des Kaisers Bảo Đại. Yersin, der auch den Pest-Erreger entdeckte, wird in Vietnam bis heute hoch geachtet; Straßen und Schulen tragen weiter seinen Namen.\n\nDas kühle Klima macht Đà Lạt zum Gemüse- und Blumengarten des Landes. Erdbeeren, Artischocken, Kohl und Schnittblumen aus Gewächshäusern werden ins ganze Land geliefert; daher der Beiname `thành phố ngàn hoa`, „Stadt der tausend Blumen“. Für Vietnamesen ist Đà Lạt ein romantisches Reiseziel mit Pinienwäldern, Nebel (`sương mù`) am Morgen und dem See Xuân Hương im Zentrum – beliebt für Hochzeitsreisen und Wochenendausflüge. Die Kehrseite des Booms sind wachsende Gewächshausflächen und Bauprojekte, die Wälder verdrängen.",
    terms: [
      { vi: "cao nguyên", de: "Hochland, Plateau" },
      { vi: "sương mù", de: "Nebel" },
      { vi: "thành phố ngàn hoa", de: "Stadt der tausend Blumen" },
      { vi: "biệt thự", de: "Villa" },
      { vi: "lạnh", de: "kalt" }
    ],
    quiz: { q: "Wer erkundete 1893 das Plateau von Đà Lạt?", options: ["Alexandre Yersin", "Paul Doumer", "Kaiser Bảo Đại"], answer: 0 }
  },
  {
    id: "c-gio-cao-su",
    chapter: "k08",
    unlock: "k08boss",
    cat: "Gesellschaft",
    title: "„Gummizeit“: Zeitverständnis",
    emoji: "⏰",
    text: "Vietnamesen haben ein selbstironisches Wort für dehnbare Pünktlichkeit: `giờ cao su`, „Gummizeit“. Gemeint ist eine Uhrzeit, die sich wie Gummi ziehen lässt. Wer zu einem Treffen um sieben eingeladen ist und um halb acht kommt, ist bei privaten Anlässen oft noch nicht der Letzte. Hochzeitsfeiern beginnen meist deutlich später als auf der Einladung steht – manche Gastgeber schreiben deshalb gleich eine frühere Zeit auf die Karte.\n\nDahinter steht weniger Nachlässigkeit als eine andere Gewichtung: Beziehungen und Situationen gehen oft vor dem Zeitplan. Ein Gespräch mit Nachbarn abzubrechen, nur um pünktlich zu sein, kann unhöflicher wirken als eine Verspätung. Dazu kommt der Verkehr: Ein Regenguss oder Stau (`kẹt xe`) verlängert jede Fahrt unvorhersehbar. Auch Zeitangaben im Alltag sind dehnbar: `lát nữa` oder `chút nữa` („gleich“) kann fünf Minuten, aber auch eine Stunde bedeuten.\n\nGeneralisieren sollte man das aber nicht. Züge, Flüge, Prüfungen und offizielle Termine beginnen pünktlich. In internationalen Firmen und bei jungen Leuten in den Großstädten gilt Pünktlichkeit (`đúng giờ`) zunehmend als Zeichen von Professionalität, und viele kritisieren die Gummizeit offen als schlechte Angewohnheit.\n\nFür deutsche Gäste empfiehlt sich Gelassenheit und Höflichkeit: selbst pünktlich sein, aber Wartezeiten nicht persönlich nehmen. Wer sich verspätet (`muộn` im Norden, `trễ` im Süden), kündigt es freundlich an, etwa mit „`Em đến muộn mười phút ạ`“ – „Ich komme zehn Minuten später.“ Bei der Verabredung (`hẹn`) hilft es, nachzufragen, ob eine Zeit fest gemeint ist.",
    terms: [
      { vi: "giờ cao su", de: "„Gummizeit“, dehnbare Pünktlichkeit" },
      { vi: "đúng giờ", de: "pünktlich" },
      { vi: "muộn", de: "spät (Norden)" },
      { vi: "trễ", de: "spät (Süden)" },
      { vi: "hẹn", de: "verabreden, Verabredung" },
      { vi: "lát nữa", de: "gleich, nachher" }
    ],
    quiz: { q: "Was bedeutet „giờ cao su“?", options: ["Arbeitszeit auf der Kautschukplantage", "dehnbare Pünktlichkeit („Gummizeit“)", "die Mittagspause"], answer: 1 }
  },

  // ── K09 ────────────────────────────────────────────────────
  {
    id: "c-doi-moi",
    chapter: "k09",
    unlock: "k09l2",
    cat: "Geschichte",
    title: "Đổi Mới (1986)",
    emoji: "📈",
    text: "Nach der Wiedervereinigung 1975 übertrug die Führung in Hà Nội die Planwirtschaft des Nordens auf das ganze Land. Landwirtschaft wurde kollektiviert, Privathandel weitgehend verboten. Die folgenden Jahre nennt man `thời bao cấp`, die „Subventionszeit“: Lebensmittel, Stoff und Benzin gab es nur gegen Bezugsmarken (`tem phiếu`), vor den staatlichen Läden bildeten sich lange Schlangen. Dazu kamen der Krieg in Kambodscha ab 1978, der Grenzkrieg mit China 1979, ein US-Embargo und sinkende Hilfe aus dem Ostblock. 1986 lag die Inflation bei mehreren hundert Prozent, zeitweise drohte Hunger.\n\nSchon vorher hatten Bauern und Betriebe heimlich Regeln umgangen – man sprach vom „Zaunbrechen“ (`xé rào`). Einige Provinzen ließen Familien Felder auf eigene Rechnung bewirtschaften. Im Dezember 1986 beschloss der 6. Parteitag der Kommunistischen Partei unter Generalsekretär Nguyễn Văn Linh die Politik der Erneuerung, `Đổi Mới`. Ziel war eine „sozialistisch orientierte Marktwirtschaft“: Privatunternehmen und ausländische Investitionen wurden erlaubt, Preise freigegeben, Bauernfamilien erhielten mit der Resolution 10 von 1988 langfristige Nutzungsrechte am Boden. Die politische Ordnung mit der Einparteienherrschaft blieb unverändert.\n\nDie Folgen waren enorm. Schon 1989 wurde Vietnam vom Reisimporteur zum Reisexporteur. 1994 hoben die USA das Embargo auf, 1995 folgten diplomatische Beziehungen und der Beitritt zur ASEAN, 2007 zur Welthandelsorganisation. Der Anteil der Armen sank von über der Hälfte Anfang der 1990er-Jahre auf einen kleinen Bruchteil. Kritisch gesehen werden wachsende Ungleichheit, Korruption und Umweltschäden.",
    terms: [
      { vi: "Đổi Mới", de: "Erneuerung (Reformpolitik)" },
      { vi: "thời bao cấp", de: "Subventionszeit" },
      { vi: "tem phiếu", de: "Bezugsmarken" },
      { vi: "kinh tế thị trường", de: "Marktwirtschaft" },
      { vi: "xuất khẩu", de: "Export, exportieren" },
      { vi: "xé rào", de: "„Zaunbrechen“, Regeln umgehen" }
    ],
    quiz: { q: "Was waren „tem phiếu“?", options: ["Bezugsmarken für Lebensmittel und Waren", "Aktien der ersten Privatfirmen", "Eintrittskarten für den Parteitag"], answer: 0 }
  },
  {
    id: "c-viet-duc",
    chapter: "k09",
    unlock: "k09l4",
    cat: "Gesellschaft",
    title: "Vietnamesen in Deutschland",
    emoji: "🤝",
    text: "In Deutschland leben heute rund 200.000 Menschen vietnamesischer Herkunft. Ihre Geschichte hat zwei Wurzeln – eine westdeutsche und eine ostdeutsche.\n\nNach 1975 flohen Hunderttausende über das Südchinesische Meer, viele kamen dabei ums Leben. Sie werden `thuyền nhân` genannt, Bootsflüchtlinge oder „Boatpeople“. Ab 1979 rettete das Schiff Cap Anamur, initiiert von Rupert Neudeck, über 10.000 Menschen. Die Bundesrepublik nahm insgesamt rund 30.000 bis 40.000 als Kontingentflüchtlinge auf, die sofort ein Bleiberecht erhielten.\n\nDie DDR holte ab 1980 auf Grundlage eines Regierungsabkommens Vertragsarbeiter (`lao động hợp tác`), 1989 waren es knapp 60.000. Sie arbeiteten in Fabriken, lebten in Wohnheimen unter strengen Regeln; Familiennachzug war nicht vorgesehen, schwangere Frauen wurden vor die Wahl zwischen Abtreibung und Rückkehr gestellt. Nach der Wende verloren die meisten ihre Arbeit, viele kehrten zurück. Die Gebliebenen lebten jahrelang mit unsicherem Aufenthaltsstatus und verdienten ihr Geld oft mit Imbissen, Blumen- oder Textilhandel. 1992 griffen Rechtsextreme in Rostock-Lichtenhagen tagelang ein Wohnheim an, in dem vietnamesische Familien lebten.\n\nHeute ist die Gemeinschaft (`cộng đồng người Việt`) vielfältig: ehemalige Bootsflüchtlinge, frühere Vertragsarbeiter, Studierende, Fachkräfte und ihre in Deutschland geborenen Kinder. Ein Treffpunkt ist das `Đồng Xuân Center` in Berlin-Lichtenberg, seit 2005 ein großer Großmarkt mit Läden, Friseuren und Restaurants. Oft wird der Bildungserfolg vietnamesischstämmiger Jugendlicher hervorgehoben, die in Ostdeutschland überdurchschnittlich oft das Gymnasium besuchen. Das Bild der „Vorzeige-Migranten“ verdeckt aber Leistungsdruck, psychische Belastung und Familien, die in Armut oder ohne sicheren Aufenthalt leben.",
    terms: [
      { vi: "thuyền nhân", de: "Bootsflüchtlinge" },
      { vi: "lao động hợp tác", de: "Vertragsarbeiter" },
      { vi: "cộng đồng", de: "Gemeinschaft, Community" },
      { vi: "người Việt ở Đức", de: "Vietnamesen in Deutschland" },
      { vi: "Đồng Xuân", de: "Name des Großmarkts in Berlin" }
    ],
    quiz: { q: "Wo liegt das Đồng Xuân Center?", options: ["in Berlin-Lichtenberg", "in Rostock-Lichtenhagen", "in Hamburg-Altona"], answer: 0 }
  },
  {
    id: "c-van-hoa-cong-so",
    chapter: "k09",
    unlock: "k09boss",
    cat: "Gesellschaft",
    title: "Arbeitskultur, Hierarchie, Gesicht",
    emoji: "💼",
    text: "Im vietnamesischen Arbeitsleben spielen Hierarchie, Beziehungen und das „Gesicht“ eine große Rolle. Die Vorgesetzte oder der Chef heißt umgangssprachlich `sếp` – vom französischen „chef“. Angesprochen wird er oder sie aber meist mit Verwandtschaftswörtern wie `anh` oder `chị`, je nach Alter. Auch unter Kolleginnen und Kollegen (`đồng nghiệp`) bestimmt das Alter die Anrede.\n\nZentral ist das Konzept `thể diện`, das Ansehen oder Gesicht. Niemand möchte vor anderen bloßgestellt werden (`mất mặt`, „das Gesicht verlieren“). Kritik äußert man deshalb lieber unter vier Augen und indirekt. Ein direktes „Nein“ gilt schnell als unhöflich. Wenn jemand `dạ` oder `vâng` sagt, heißt das oft nur „Ich höre Sie“ – nicht zwingend „Ich bin einverstanden“. Für deutsche Kolleginnen und Kollegen, die Direktheit gewohnt sind, ist das eine häufige Quelle von Missverständnissen; offene Fragen und Nachhaken in ruhigem Rahmen helfen.\n\nGute Beziehungen (`quan hệ`) sind oft wichtiger als Verträge. Sie entstehen auch nach Feierabend beim gemeinsamen Essen und Trinken, dem `nhậu`, mit lautem Anstoßen: „Một, hai, ba, dô!“ Wer keinen Alkohol trinkt, kann das freundlich erklären. In vielen Büros gibt es eine lange Mittagspause, in der man am Schreibtisch ein Nickerchen macht (`ngủ trưa`). Vor Tết bekommen Angestellte häufig einen Bonus, das „13. Monatsgehalt“.\n\nDas Bild wandelt sich: Startups, internationale Konzerne und eine junge, gut ausgebildete Generation setzen auf flachere Hierarchien und offenere Kommunikation. In Behörden und traditionellen Familienbetrieben gelten die alten Regeln aber oft weiter.",
    terms: [
      { vi: "sếp", de: "Chef(in)" },
      { vi: "đồng nghiệp", de: "Kollege, Kollegin" },
      { vi: "thể diện", de: "Ansehen, Gesicht" },
      { vi: "mất mặt", de: "das Gesicht verlieren" },
      { vi: "quan hệ", de: "Beziehungen" },
      { vi: "ngủ trưa", de: "Mittagsschlaf" }
    ],
    quiz: { q: "Was bedeutet ein „dạ“ im Gespräch mit dem Chef oft?", options: ["„Nein, auf keinen Fall.“", "„Ich höre Sie.“ – nicht unbedingt Zustimmung", "„Ich kündige.“"], answer: 1 }
  },

  // ── K10 Sài Gòn ────────────────────────────────────────────
  {
    id: "c-sai-gon",
    chapter: "k10",
    unlock: "k10l2",
    cat: "Geschichte",
    title: "Gia Định → Sài Gòn → TP HCM",
    emoji: "🏙️",
    text: "Wo heute Vietnams größte Stadt steht, lag ursprünglich eine Siedlung der Khmer namens Prey Nokor. Ab dem 17. Jahrhundert ließen sich vietnamesische Siedler und chinesische Flüchtlinge nieder, darunter Anhänger der gestürzten Ming-Dynastie. 1698 richtete Nguyễn Hữu Cảnh im Auftrag der Nguyễn-Fürsten hier die Verwaltung `Gia Định` ein – dieses Jahr gilt als Gründungsdatum der Stadt. Die Chinesen gründeten nebenan `Chợ Lớn`, den „großen Markt“, bis heute das Chinesenviertel.\n\n1859 eroberten französische Truppen die Stadt. Als Hauptstadt der Kolonie Cochinchina wurde Sài Gòn nach französischem Plan umgebaut: breite Boulevards, die Kathedrale Notre-Dame (1877–1880), das Hauptpostamt (1886–1891) und das Opernhaus (1900). Man nannte sie bald „Paris des Ostens“. Der Markt `chợ Bến Thành` erhielt 1914 sein heutiges Gebäude.\n\nVon 1955 bis 1975 war Sài Gòn Hauptstadt der Republik Vietnam (Südvietnam). Am 30. April 1975 nahmen nordvietnamesische Truppen die Stadt ein. Dieses Datum wird in Vietnam als Tag der Befreiung und Wiedervereinigung gefeiert; für viele Auslandsvietnamesen ist es dagegen ein Tag der Trauer, der „Schwarze April“. 1976 erhielt die Stadt den Namen `Thành phố Hồ Chí Minh`. Im Alltag sagen die meisten Menschen trotzdem weiter `Sài Gòn`, vor allem für das Zentrum.\n\nHeute ist die Stadt das wirtschaftliche Zentrum des Landes. Nach der Verwaltungsreform von 2025, bei der Bình Dương und Bà Rịa–Vũng Tàu eingegliedert wurden, leben hier über 13 Millionen Menschen.",
    terms: [
      { vi: "Sài Gòn", de: "Saigon" },
      { vi: "Gia Định", de: "historischer Name der Region" },
      { vi: "Chợ Lớn", de: "Chinesenviertel („großer Markt“)" },
      { vi: "Thành phố Hồ Chí Minh", de: "Hồ-Chí-Minh-Stadt" },
      { vi: "chợ Bến Thành", de: "Bến-Thành-Markt" }
    ],
    quiz: { q: "Seit wann heißt die Stadt offiziell Thành phố Hồ Chí Minh?", options: ["seit 1698", "seit 1955", "seit 1976"], answer: 2 }
  },
  {
    id: "c-chien-tranh",
    chapter: "k10",
    unlock: "k10l4",
    cat: "Geschichte",
    title: "Der Krieg 1955–1975 und die Folgen",
    emoji: "🕊️",
    text: "Im Westen heißt er „Vietnamkrieg“, in Vietnam offiziell `Kháng chiến chống Mỹ`, „Widerstandskrieg gegen Amerika“. Für viele Menschen im Süden und in der Diaspora war er zugleich ein Bürgerkrieg, den sie verloren haben. Alle Bezeichnungen spiegeln unterschiedliche Erfahrungen.\n\nNach der Genfer Konferenz 1954 war Vietnam am 17. Breitengrad geteilt. Die für 1956 vorgesehenen gesamtvietnamesischen Wahlen fanden nicht statt. Im Norden regierte die Demokratische Republik Vietnam unter Hồ Chí Minh, im Süden die Republik Vietnam unter Ngô Đình Diệm, unterstützt von den USA. Ab 1960 kämpfte im Süden die Nationale Befreiungsfront gegen die Regierung in Sài Gòn. Nach dem Tonkin-Zwischenfall 1964 griffen die USA direkt ein; 1968 waren über eine halbe Million US-Soldaten im Land. Die Tết-Offensive und das Massaker von Mỹ Lai im selben Jahr veränderten die Stimmung in den USA. Nach dem Pariser Abkommen 1973 zogen die US-Truppen ab, am 30. April 1975 endete der Krieg mit der Einnahme Sài Gòns.\n\nDie Opferzahlen sind gewaltig: Vietnam schätzt rund drei Millionen tote Vietnamesen aus Nord und Süd, darunter sehr viele Zivilisten; die USA verloren etwa 58.000 Soldaten. Die Folgen reichen bis heute. Das Entlaubungsmittel Agent Orange (`chất độc da cam`) wird mit Krankheiten und Fehlbildungen in Verbindung gebracht; das Ausmaß ist umstritten. Blindgänger (`bom mìn`) töten noch immer Menschen. Nach 1975 kamen Hunderttausende frühere Soldaten und Beamte des Südens in Umerziehungslager, viele flohen übers Meer.\n\nSeit 1995 unterhalten Vietnam und die USA diplomatische Beziehungen; heute arbeiten beide Länder eng zusammen. Frieden (`hòa bình`) ist ein Wort, das viele Ältere mit großer Ernsthaftigkeit aussprechen.",
    terms: [
      { vi: "Kháng chiến chống Mỹ", de: "Widerstandskrieg gegen Amerika" },
      { vi: "chiến tranh", de: "Krieg" },
      { vi: "hòa bình", de: "Frieden" },
      { vi: "thống nhất", de: "Wiedervereinigung, vereinigen" },
      { vi: "chất độc da cam", de: "Agent Orange" },
      { vi: "bom mìn", de: "Blindgänger, Minen" }
    ],
    quiz: { q: "Wie heißt der Krieg in Vietnam offiziell?", options: ["Kháng chiến chống Pháp", "Kháng chiến chống Mỹ", "Đổi Mới"], answer: 1 }
  },
  {
    id: "c-hem",
    chapter: "k10",
    unlock: "k10boss",
    cat: "Gesellschaft",
    title: "Gassenleben & Straßenküche",
    emoji: "🍢",
    text: "Hinter den großen Straßen von Sài Gòn beginnt eine zweite Stadt: das Labyrinth der Gassen, im Süden `hẻm`, im Norden `ngõ` und deren Seitengassen `ngách` genannt. Manche sind so schmal, dass zwei Mopeds kaum aneinander vorbeikommen. Adressen wie „123/45/6“ verraten den Weg: Haus 6 in der Gasse 45, die bei Hausnummer 123 von der Hauptstraße abzweigt.\n\nIn den Hẻm spielt sich das Leben vor der Haustür ab. Die Erdgeschosse sind oft offen, Wohnzimmer, Laden und Moped-Parkplatz zugleich. Kinder spielen Federball, Nachbarn sitzen auf Plastikhockern (`ghế nhựa`) und reden, Großmütter schälen Gemüse. Mobile Händler rufen ihre Waren aus, heute oft per Lautsprecher-Aufnahme: „Bánh mì nóng giòn đây!“ – „Heißes, knuspriges Brot!“\n\nDie Straßenküche ist der Stolz der Stadt. An kleinen Ständen (`quán ăn vỉa hè`) gibt es zum Frühstück `cơm tấm`, Bruchreis mit gegrilltem Schweinekotelett, einst ein Essen der Armen und heute ein Klassiker Sài Gòns. Dazu `bánh mì`, das Baguette-Sandwich mit Pastete, Kräutern und Chili, das aus der französischen Zeit stammt, oder `hủ tiếu`, eine Nudelsuppe mit chinesisch-khmerischen Wurzeln. Viele Garküchen verkaufen nur ein einziges Gericht – das aber seit Jahrzehnten.\n\nDer Gehweg ist allerdings umkämpft. Behörden starteten wiederholt Kampagnen, um Fußwege für Fußgänger frei zu räumen, zuletzt besonders sichtbar ab 2017. Für viele Familien hängt das Einkommen jedoch genau an diesen wenigen Quadratmetern Asphalt.",
    terms: [
      { vi: "hẻm", de: "Gasse (Süden)" },
      { vi: "ngõ", de: "Gasse (Norden)" },
      { vi: "quán ăn vỉa hè", de: "Garküche am Gehweg" },
      { vi: "ghế nhựa", de: "Plastikhocker" },
      { vi: "cơm tấm", de: "Bruchreis-Gericht" },
      { vi: "bánh mì", de: "Baguette-Sandwich" }
    ],
    quiz: { q: "Wie nennt man eine Gasse in Sài Gòn?", options: ["hẻm", "phố cổ", "chợ"], answer: 0 }
  },

  // ── K11 Mekongdelta ────────────────────────────────────────
  {
    id: "c-tet",
    chapter: "k11",
    unlock: "k11l2",
    cat: "Feste",
    title: "Tết Nguyên Đán",
    emoji: "🧧",
    text: "`Tết Nguyên Đán`, kurz `Tết`, ist das Neujahrsfest nach dem Mondkalender und das wichtigste Fest des Jahres. Es fällt zwischen Ende Januar und Mitte Februar. Millionen Menschen fahren dann in ihre Heimatorte (`về quê`); Züge und Busse sind Wochen im Voraus ausgebucht, Städte wie Sài Gòn wirken plötzlich leer.\n\nDie Vorbereitungen beginnen am 23. Tag des 12. Mondmonats: Dann reisen die Küchengötter `Ông Công Ông Táo` auf einem Karpfen zum Jadekaiser, um über die Familie zu berichten. Viele Familien lassen dafür lebende Karpfen in Seen und Flüssen frei. Danach wird das Haus geputzt, Schulden werden beglichen, Streit soll beigelegt werden. Im Norden schmückt man die Wohnung mit Pfirsichblüten (`hoa đào`), im Süden mit gelben Aprikosenblüten (`hoa mai`), dazu Kumquat-Bäumchen.\n\nTypisch ist `bánh chưng`, ein quadratischer Kuchen aus Klebreis, Mungbohnen und Schweinefleisch in Blättern; im Süden isst man die zylindrische Variante `bánh tét`. Einer Legende nach erfand ihn der Prinz Lang Liêu zur Zeit der Hùng-Könige; die quadratische Form steht für die Erde.\n\nIn der Silvesternacht (`giao thừa`) ehrt man die Ahnen. Wichtig ist, wer am Neujahrsmorgen als Erster das Haus betritt: Dieses `xông đất` soll das Glück des ganzen Jahres bestimmen, darum lädt man dafür gezielt fröhliche, erfolgreiche Menschen ein. Kinder bekommen Glücksgeld in roten Umschlägen (`lì xì`). Man wünscht „`Chúc mừng năm mới`“. Ein Spruch regelt die Besuche: `Mùng một Tết cha, mùng hai Tết mẹ, mùng ba Tết thầy` – am ersten Tag die Familie des Vaters, am zweiten die der Mutter, am dritten die Lehrer.",
    terms: [
      { vi: "Tết", de: "Neujahrsfest" },
      { vi: "bánh chưng", de: "quadratischer Klebreiskuchen" },
      { vi: "giao thừa", de: "Silvesternacht, Jahreswechsel" },
      { vi: "xông đất", de: "erster Besuch im neuen Jahr" },
      { vi: "lì xì", de: "Glücksgeld im roten Umschlag" },
      { vi: "Chúc mừng năm mới", de: "Frohes neues Jahr" }
    ],
    quiz: { q: "Was bedeutet „xông đất“?", options: ["das Freilassen von Karpfen", "der erste Besuch, der Glück fürs Jahr bringen soll", "das Kochen von bánh chưng"], answer: 1 }
  },
  {
    id: "c-trung-thu",
    chapter: "k11",
    unlock: "k11l4",
    cat: "Feste",
    title: "Mittherbstfest",
    emoji: "🥮",
    text: "Am 15. Tag des 8. Mondmonats, wenn der Mond im Jahr besonders hell und rund erscheint, feiert Vietnam `Tết Trung Thu`, das Mittherbstfest. Ursprünglich war es ein Erntedankfest der Reisbauern. Heute ist es vor allem ein Fest für Kinder.\n\nSchon Wochen vorher verwandeln sich Straßen wie die Hàng Mã in Hà Nội in ein Meer aus Laternen, Masken und Spielzeug. Am Festabend ziehen Kinder mit Sternlaternen (`đèn ông sao`) durch die Nachbarschaft. Löwentanzgruppen (`múa lân`) mit Trommeln und Becken tanzen vor Häusern und Geschäften und sollen Glück bringen. Zu Hause stellen Familien ein festliches Tablett mit Früchten, Süßigkeiten und Mondkuchen auf, betrachten gemeinsam den Mond und essen danach die Leckereien.\n\nEs gibt zwei Arten Mondkuchen: `bánh nướng`, gebacken, mit goldbrauner Kruste, gefüllt etwa mit Lotossamen, Bohnenpaste oder einer Mischung aus Nüssen, kandierten Früchten und Speck; und `bánh dẻo`, ein weicher, weißer Klebreiskuchen.\n\nZum Fest gehören Legenden. Auf dem Mond sitzt der Überlieferung nach `chú Cuội` unter einem Banyanbaum (`cây đa`). Der Holzfäller soll sich an seinen magischen Baum geklammert haben, als dieser zum Himmel aufstieg, und sehnt sich seither nach der Erde. Neben ihm wohnt die Mondfee `chị Hằng`. Ältere Menschen verbinden das Fest auch mit den Briefen, die Hồ Chí Minh seit 1946 an die Kinder zum Mittherbstfest schrieb. In vielen Schulen und Wohnvierteln werden bis heute Feste für Kinder organisiert, auch für Kinder aus armen Familien.",
    terms: [
      { vi: "Tết Trung Thu", de: "Mittherbstfest" },
      { vi: "bánh nướng", de: "gebackener Mondkuchen" },
      { vi: "bánh dẻo", de: "weicher Klebreis-Mondkuchen" },
      { vi: "múa lân", de: "Löwentanz" },
      { vi: "chú Cuội", de: "Cuội, der Mann im Mond" },
      { vi: "chị Hằng", de: "Mondfee Hằng" }
    ],
    quiz: { q: "Wer sitzt der Legende nach unter dem Banyanbaum auf dem Mond?", options: ["chị Hằng", "Lạc Long Quân", "chú Cuội"], answer: 2 }
  },
  {
    id: "c-cho-noi",
    chapter: "k11",
    unlock: "k11boss",
    cat: "Gesellschaft",
    title: "Schwimmende Märkte am Mekong",
    emoji: "🛶",
    text: "Der Mekong teilt sich vor seiner Mündung in viele Arme; die Vietnamesen nennen ihn deshalb `sông Cửu Long`, „Fluss der neun Drachen“. Das Delta, im Volksmund einfach `miền Tây` („der Westen“), ist die Reiskammer des Landes und ein riesiger Obstgarten: Mangos, Rambutan, Pomelos und Durian wachsen hier. Lange waren Flüsse und Kanäle die wichtigsten Verkehrswege – und so entstanden die schwimmenden Märkte (`chợ nổi`).\n\nDer bekannteste ist der Markt von Cái Răng bei Cần Thơ, daneben Cái Bè und Ngã Bảy. Das Geschäft beginnt im Morgengrauen, oft schon gegen fünf Uhr. Größere Boote (`ghe`) sind schwimmende Großhandelslager voller Kürbisse, Kohl oder Ananas. Was verkauft wird, zeigen die Händler mit einer langen Stange am Bug, der `cây bẹo`: Daran hängt ein Muster der Ware – eine Ananas, eine Zwiebel, ein Kohlkopf. So erkennt man das Angebot schon von Weitem, ohne rufen zu müssen. Zwischen den Booten paddeln kleine Kähne (`xuồng`), die Kaffee, Nudelsuppe oder Getränke an die Händler verkaufen. Viele Händlerfamilien leben dauerhaft auf ihren Booten.\n\nDie Märkte schrumpfen allerdings. Seit neue Straßen und Brücken das Delta erschließen, transportieren viele Händler ihre Ware lieber per Lastwagen, und manche Märkte bestehen vor allem noch für Touristen. Cái Răng wurde 2016 als nationales immaterielles Kulturerbe anerkannt. Das Delta selbst ist bedroht: durch Staudämme flussaufwärts, Sandabbau, Absinken des Bodens und eindringendes Salzwasser infolge des Klimawandels.",
    terms: [
      { vi: "chợ nổi", de: "schwimmender Markt" },
      { vi: "sông Cửu Long", de: "Mekong („Fluss der neun Drachen“)" },
      { vi: "miền Tây", de: "Mekongdelta („der Westen“)" },
      { vi: "ghe", de: "größeres Boot" },
      { vi: "xuồng", de: "kleiner Kahn" },
      { vi: "cây bẹo", de: "Warenstange am Boot" }
    ],
    quiz: { q: "Wozu dient die „cây bẹo“?", options: ["zum Festmachen des Bootes", "zum Zeigen der angebotenen Ware", "zum Fischen"], answer: 1 }
  },

  // ── K12 Cà Mau ─────────────────────────────────────────────
  {
    id: "c-truyen-kieu",
    chapter: "k12",
    unlock: "k12l2",
    cat: "Literatur",
    title: "Truyện Kiều (Nguyễn Du)",
    emoji: "📜",
    text: "`Truyện Kiều`, „Die Geschichte von Kiều“, gilt als das bedeutendste Werk der vietnamesischen Literatur. Der Dichter Nguyễn Du (1766–1820) stammte aus einer Gelehrten- und Beamtenfamilie und erlebte die Umbrüche zwischen dem Ende der Lê-Dynastie, dem Tây-Sơn-Aufstand und der Nguyễn-Dynastie. Wann genau er das Werk schrieb, ist umstritten; meist wird das frühe 19. Jahrhundert angenommen. Der ursprüngliche Titel lautet `Đoạn trường tân thanh`, „Neuer Schrei eines gebrochenen Herzens“.\n\nDie Handlung übernahm Nguyễn Du aus einem chinesischen Roman. Die schöne und begabte Thúy Kiều verkauft sich, um ihren Vater aus dem Gefängnis freizukaufen, und gibt dafür ihre Liebe zu dem Studenten Kim Trọng auf. Es folgen fünfzehn Jahre voller Leid: Sie wird in ein Bordell gezwungen, als Dienerin gedemütigt, findet Schutz bei dem Rebellen Từ Hải und verliert ihn wieder. Erst am Ende kehrt sie zu ihrer Familie zurück.\n\nGeschrieben ist das Werk in `chữ Nôm` und im volkstümlichen Versmaß `lục bát`, in dem Zeilen mit sechs und acht Silben abwechseln – 3.254 Verse lang. Berühmt ist der Anfang: `Trăm năm trong cõi người ta, / Chữ tài chữ mệnh khéo là ghét nhau.` – „Hundert Jahre in dieser Menschenwelt: Talent und Schicksal hassen einander so geschickt.“\n\nViele Vietnamesen können ganze Passagen auswendig. Man zitiert Kiều in Alltagsgesprächen, und beim `bói Kiều` schlägt man das Buch zufällig auf, um aus dem Vers die Zukunft zu deuten. Der Publizist Phạm Quỳnh schrieb 1924: Solange Truyện Kiều besteht, besteht auch unsere Sprache.",
    terms: [
      { vi: "Truyện Kiều", de: "Die Geschichte von Kiều" },
      { vi: "lục bát", de: "Sechs-Acht-Versmaß" },
      { vi: "thơ", de: "Gedicht, Dichtung" },
      { vi: "tài", de: "Talent" },
      { vi: "mệnh", de: "Schicksal" },
      { vi: "nhà thơ", de: "Dichter(in)" }
    ],
    quiz: { q: "In welchem Versmaß ist Truyện Kiều geschrieben?", options: ["lục bát (6 und 8 Silben)", "Sonett", "freie Verse"], answer: 0 }
  },
  {
    id: "c-ca-dao",
    chapter: "k12",
    unlock: "k12l4",
    cat: "Literatur",
    title: "Ca dao & Sprichwörter",
    emoji: "💬",
    text: "Lange bevor die meisten Menschen lesen konnten, gaben sie Weisheiten mündlich weiter. Zwei Formen sind bis heute lebendig: `ca dao`, kurze, oft gesungene Volksverse, und `tục ngữ`, knappe Sprichwörter. Ihre Verfasser sind unbekannt. Viele ca dao stehen im Versmaß `lục bát`, mit sechs und acht Silben pro Zeile, das sich leicht merken und singen lässt. Sie erzählen von Liebe und Sehnsucht, von Feldarbeit, Familie und Heimat (`quê hương`). Mütter singen sie als Wiegenlieder, Schulkinder lernen sie auswendig, Politiker zitieren sie in Reden.\n\nDas wohl bekannteste Sprichwort lautet `Uống nước nhớ nguồn` – „Wenn du Wasser trinkst, denk an die Quelle.“ Es mahnt zur Dankbarkeit gegenüber Eltern, Ahnen, Lehrern und allen, denen man etwas verdankt.\n\nDie Elternliebe besingt dieser ca dao: `Công cha như núi Thái Sơn, / Nghĩa mẹ như nước trong nguồn chảy ra.` – „Die Mühe des Vaters ist wie der Berg Thái Sơn, die Liebe der Mutter wie das Wasser, das aus der Quelle strömt.“\n\nZum Zusammenhalt ruft dieser Vers auf: `Bầu ơi thương lấy bí cùng, / Tuy rằng khác giống nhưng chung một giàn.` – „Flaschenkürbis, hab den Kürbis lieb: Ihr seid zwar verschiedene Sorten, aber teilt dasselbe Rankgerüst.“ Er wird oft zitiert, wenn Menschen verschiedener Herkunft einander helfen sollen.\n\nUnd ganz praktisch: `Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.` – „Ein Baum allein macht noch keinen Berg; drei Bäume zusammen werden zum hohen Berg.“ Gemeinsam ist man stark.",
    terms: [
      { vi: "ca dao", de: "Volksverse" },
      { vi: "tục ngữ", de: "Sprichwort" },
      { vi: "Uống nước nhớ nguồn", de: "Wenn du Wasser trinkst, denk an die Quelle." },
      { vi: "quê hương", de: "Heimat" },
      { vi: "nguồn", de: "Quelle" }
    ],
    quiz: { q: "Wozu mahnt das Sprichwort „Uống nước nhớ nguồn“?", options: ["zum Sparen von Wasser", "zur Dankbarkeit gegenüber denen, denen man etwas verdankt", "zu Fleiß bei der Feldarbeit"], answer: 1 }
  },
  {
    id: "c-dat-mui",
    chapter: "k12",
    unlock: "k12boss",
    cat: "Kultur",
    title: "Mũi Cà Mau & Mangroven",
    emoji: "🌳",
    text: "Am Ende der Reise liegt `Mũi Cà Mau`, die Südspitze des vietnamesischen Festlands. Das kleine Gebiet ringsum heißt `Đất Mũi`, „Land der Spitze“. Drei Seiten sind von Wasser umgeben: im Osten das Südchinesische Meer, im Westen der Golf von Thailand. Ein Denkmal in Form eines Schiffsbugs und ein nationaler Koordinaten-Grenzstein (`cột mốc`) markieren den Ort, an dem Vietnamesen gern ein Erinnerungsfoto machen. Der Name Cà Mau geht vermutlich auf ein Khmer-Wort für „schwarzes Wasser“ zurück – das Wasser ist durch Pflanzenreste dunkel gefärbt.\n\nDie Küste wird von Mangrovenwäldern (`rừng ngập mặn`) gesäumt. Die wichtigsten Bäume sind `cây đước` mit ihren gebogenen Stelzwurzeln und `cây mắm`. Ihre Wurzeln halten Schlamm fest, den der Mekong und die Meeresströmungen heranbringen. An manchen Abschnitten wächst das Land deshalb Jahr für Jahr ins Meer hinaus, an anderen frisst die Erosion Meter für Meter Küste. Die Mangroven sind Kinderstube für Fische, Krebse und Garnelen und schützen das Hinterland vor Sturmfluten.\n\nIm Krieg wurden große Teile der Wälder mit Entlaubungsmitteln zerstört und später mühsam wieder aufgeforstet. Seit 2009 ist die Region UNESCO-Biosphärenreservat, seit 2013 ist der Nationalpark Mũi Cà Mau ein Ramsar-Feuchtgebiet von internationaler Bedeutung.\n\nDie größte Bedrohung kommt heute von Garnelenfarmen (`nuôi tôm`), für die Wald gerodet wurde, und vom steigenden Meeresspiegel. Viele Projekte setzen deshalb auf Mischsysteme, in denen Garnelen unter Mangroven gezüchtet werden – ein Versuch, Einkommen und Küstenschutz zu verbinden.",
    terms: [
      { vi: "Đất Mũi", de: "Land der Spitze (Südspitze)" },
      { vi: "rừng ngập mặn", de: "Mangrovenwald" },
      { vi: "cây đước", de: "Mangrovenbaum mit Stelzwurzeln" },
      { vi: "nuôi tôm", de: "Garnelenzucht" },
      { vi: "cột mốc", de: "Grenz-, Markierungsstein" }
    ],
    quiz: { q: "Wie heißen die Mangrovenwälder auf Vietnamesisch?", options: ["rừng ngập mặn", "ruộng bậc thang", "chợ nổi"], answer: 0 }
  }
]);
