/* K10 Sài Gòn – Großstadt, Wohnen, Gesundheit */
VN.addChapter({
  id: "k10",
  place: "Sài Gòn",
  region: "Südvietnam",
  title: "Großstadt, Wohnen, Gesundheit",
  intro: "Sài Gòn – offiziell Thành phố Hồ Chí Minh – ist die größte Stadt Vietnams: laut, schnell, voller Gassen (hẻm) und Garküchen. Jonas und Linh mieten hier für einen Monat eine Wohnung. Du lernst, eine Wohnung zu beschreiben, über Beschwerden zu sprechen (bị und được), Bedingungen und Gründe auszudrücken – und das Südvietnamesische zu verstehen, das man hier überall hört.",
  lessons: [
    // ───────────────────────────── k10l1 ─────────────────────────────
    {
      id: "k10l1",
      title: "Wohnen",
      goal: "Du kannst eine Wohnung beschreiben, sagen, was es in einem Raum gibt, und nach Miete und Stockwerk fragen.",
      vocab: [
        { vi: "căn hộ", de: "Wohnung, Apartment", pos: "N", emoji: "🏢", ex: { vi: "Chúng tôi thuê một căn hộ ở Sài Gòn.", de: "Wir mieten eine Wohnung in Sài Gòn." } },
        { vi: "căn", de: "Klassifikator für Wohneinheiten, Zimmer, Häuser", pos: "CL", ex: { vi: "Căn nhà này nhỏ quá.", de: "Dieses Haus ist zu klein." } },
        { vi: "ngôi", de: "Klassifikator für Gebäude, Tempel, Sterne (gehoben)", pos: "CL", ex: { vi: "Ngôi nhà kia rất đẹp.", de: "Jenes Haus ist sehr schön." } },
        { vi: "phòng", de: "Zimmer, Raum", pos: "N", cls: "căn", emoji: "🚪", ex: { vi: "Căn hộ có ba phòng.", de: "Die Wohnung hat drei Zimmer." } },
        { vi: "tầng", de: "Stockwerk, Etage", pos: "N", south: "lầu", note: "Nord: tầng một = Erdgeschoss; Süd: tầng trệt = Erdgeschoss, lầu một = 1. OG", ex: { vi: "Căn hộ ở tầng năm.", de: "Die Wohnung ist im fünften Stock (Nordzählung)." } },
        { vi: "thuê", de: "mieten", pos: "V", emoji: "🔑", ex: { vi: "Jonas và Linh muốn thuê một căn hộ.", de: "Jonas und Linh wollen eine Wohnung mieten." } },
        { vi: "hẻm", de: "Gasse (Süd)", pos: "N", note: "Nord: ngõ", emoji: "🛵", ex: { vi: "Nhà cô Sáu ở trong hẻm.", de: "Cô Sáus Haus liegt in einer Gasse." } },
        { vi: "chung cư", de: "Wohnblock, Mehrfamilienhaus", pos: "N", emoji: "🏬", ex: { vi: "Chung cư này có hai mươi tầng.", de: "Dieser Wohnblock hat zwanzig Stockwerke." } },
        { vi: "phòng ngủ", de: "Schlafzimmer", pos: "N", emoji: "🛏️", ex: { vi: "Căn hộ có hai phòng ngủ.", de: "Die Wohnung hat zwei Schlafzimmer." } },
        { vi: "giường", de: "Bett", pos: "N", cls: "cái", emoji: "🛏️", ex: { vi: "Trong phòng ngủ có một cái giường.", de: "Im Schlafzimmer steht ein Bett." } },
        { vi: "bếp", de: "Küche; Herd", pos: "N", emoji: "🍳", ex: { vi: "Bếp hơi nhỏ.", de: "Die Küche ist etwas klein." } },
        { vi: "nhà vệ sinh", de: "Toilette, Bad", pos: "N", emoji: "🚽", ex: { vi: "Nhà vệ sinh ở đâu ạ?", de: "Wo ist die Toilette?" } },
        { vi: "tiền thuê", de: "Miete", pos: "N", emoji: "💵", ex: { vi: "Tiền thuê một tháng là mười triệu đồng.", de: "Die Miete beträgt zehn Millionen Đồng im Monat." } },
        { vi: "chủ nhà", de: "Vermieter/in, Hausbesitzer/in", pos: "N", ex: { vi: "Chủ nhà là cô Sáu.", de: "Die Vermieterin ist Cô Sáu." } },
        { vi: "yên tĩnh", de: "ruhig, still", pos: "Adj", emoji: "🤫", ex: { vi: "Hẻm này rất yên tĩnh.", de: "Diese Gasse ist sehr ruhig." } },
        { vi: "ồn", de: "laut", pos: "Adj", emoji: "📢", ex: { vi: "Đường lớn ồn quá!", de: "Die große Straße ist so laut!" } }
      ],
      grammar: [
        {
          id: "g-k10-existenz-lokativ",
          title: "„Im Zimmer gibt es …“: Ort als Topik + có",
          term: "Existenzialkonstruktion mit lokativem Topik",
          pattern: "(Lokalnomen +) Ort + có + (Num + CL) + N",
          text: "Du kennst `có` als Besitzverb (K04) und die Lokalnomen `trong, trên, dưới, bên cạnh …` (K07). Kombiniert ergeben sie den **Existenzsatz**: Der Ort steht als **Topik** am Satzanfang, danach folgt `có` und das, was es dort gibt.\n\n`Trong phòng có một cái giường.` – „Im Zimmer gibt es/steht ein Bett.“\n\nDie Informationsstruktur ist klar: Der Ort ist bekannt (thematisch), das neue Element (rhematisch) steht hinten. Der Existenzsatz **führt neue Referenten ein**. Ist das Ding dagegen schon bekannt und man sagt, *wo* es ist, verwendet man `ở` (K07): `Cái giường ở trong phòng.` – „Das Bett ist im Zimmer.“\n\nDas Lokalnomen kann bei Räumen und Gebäuden fehlen; dann verschwimmt Existenz mit Besitz: `Căn hộ có hai phòng ngủ.` – „Die Wohnung hat zwei Schlafzimmer.“\n\nNegation und Frage folgen dem bekannten Muster: `Trong bếp không có tủ lạnh.` – `Trong phòng có điều hòa không?` Nach dem Inventar fragt man mit `gì`: `Trong phòng có gì?` – „Was gibt es im Zimmer?“\n\nAuch Zeitangaben können Topik sein: `Chín giờ có cuộc họp.` (K09).",
          table: {
            head: ["Konstruktion", "Funktion", "Beispiel", "Deutsch"],
            rows: [
              ["Ort + có + N", "neues Element einführen", "Trong phòng có một cái giường.", "Im Zimmer steht ein Bett."],
              ["N + ở + Ort", "bekanntes Element lokalisieren", "Cái giường ở trong phòng.", "Das Bett ist im Zimmer."],
              ["Ort + không có + N", "Nicht-Existenz", "Trong bếp không có bàn.", "In der Küche gibt es keinen Tisch."],
              ["Ort + có gì?", "Inventar erfragen", "Trong phòng có gì?", "Was gibt es im Zimmer?"]
            ]
          },
          examples: [
            { vi: "Trong phòng ngủ có một cái giường lớn.", de: "Im Schlafzimmer steht ein großes Bett.", gloss: "in | Schlafzimmer | EXIST | ein | CL | Bett | groß" },
            { vi: "Trên bàn có hai cốc cà phê.", de: "Auf dem Tisch stehen zwei Tassen Kaffee." },
            { vi: "Bên cạnh nhà vệ sinh có một phòng nhỏ.", de: "Neben dem Bad gibt es ein kleines Zimmer." },
            { vi: "Nhà vệ sinh ở bên cạnh bếp.", de: "Das Bad ist neben der Küche." }
          ],
          contrast: "Das Deutsche verwendet „es gibt“ oder Positionsverben (stehen, liegen, hängen) und markiert Neues mit dem unbestimmten Artikel. Das Vietnamesische braucht nur có – und die Wortstellung zeigt, was neu ist."
        },
        {
          id: "g-k10-cl-wohnen",
          title: "căn, ngôi, cái – Klassifikatoren für Gebäude und Räume",
          term: "Klassifikatorwahl nach Semantik und Register",
          pattern: "Num + căn / ngôi / cái + N (+ Attribut) (+ Demonstrativ)",
          text: "Für Gebäude und Räume stehen drei Klassifikatoren (K04) zur Wahl. Sie unterscheiden sich in Bedeutung und **Registerebene**:\n\n- `căn` – für **Wohneinheiten**: Häuser, Wohnungen, Zimmer. Neutral, typisch für Immobilien und Alltag: `một căn nhà`, `hai căn phòng`. In `căn hộ` („Wohnung“) ist `căn` fest mit dem Nomen verschmolzen; gezählt wird direkt: `hai căn hộ`.\n- `ngôi` – **gehoben, ästhetisch**: für Gebäude als Ganzes, besonders Tempel, Gräber und – übertragen – Sterne: `ngôi nhà cổ` („altes Haus“), `ngôi chùa` („Pagode“), `ngôi sao` („Stern“). Häufig in Literatur und Reiseführern.\n- `cái` – **allgemein, umgangssprachlich**: `cái nhà này`, `cái phòng kia`. Neutral bis salopp.\n\nDie Nominalphrase folgt dem Schema aus K06: (Num) + CL + N + Attribut + Demonstrativ: `hai căn phòng nhỏ này` – „diese zwei kleinen Zimmer“. Der Klassifikator kann auch allein als Pronomen dienen: `Căn này rẻ hơn.` – „Diese (Wohnung) ist billiger.“\n\nDie Wahl hat also stilistische Wirkung: Ein Makler sagt `căn hộ đẹp`, ein Dichter `ngôi nhà nhỏ bên sông`, der Nachbar `cái nhà kia`.",
          table: {
            head: ["Klassifikator", "Domäne", "Register", "Beispiel"],
            rows: [
              ["căn", "Haus, Wohnung, Zimmer", "neutral", "một căn nhà, ba căn phòng"],
              ["ngôi", "Gebäude, Tempel, Grab, Stern", "gehoben", "ngôi nhà, ngôi chùa, ngôi sao"],
              ["cái", "fast alles", "umgangssprachlich", "cái nhà này, cái phòng kia"]
            ]
          },
          examples: [
            { vi: "Cô Sáu có hai căn hộ ở Sài Gòn.", de: "Cô Sáu hat zwei Wohnungen in Sài Gòn." },
            { vi: "Ngôi chùa kia rất đẹp.", de: "Jene Pagode ist sehr schön." },
            { vi: "Căn phòng nhỏ này yên tĩnh lắm.", de: "Dieses kleine Zimmer ist sehr ruhig.", gloss: "CL | Zimmer | klein | dies | ruhig | sehr" },
            { vi: "Căn này rẻ hơn căn kia.", de: "Diese (Wohnung) ist billiger als jene." }
          ],
          contrast: "Im Deutschen gibt es keine Klassifikatoren; Registerunterschiede liegen dort im Nomen selbst (Haus – Gebäude – Bude). Im Vietnamesischen kann derselbe Nomen nhà durch căn, ngôi oder cái stilistisch eingefärbt werden."
        },
        {
          id: "g-k10-tang-so",
          title: "tầng ba vs. ba tầng: Zahl vor oder nach dem Nomen",
          term: "Benennende (ordinale) Lesart nachgestellter Kardinalzahlen",
          pattern: "Num + N = Anzahl · N + Num = Nummer/Bezeichnung",
          text: "Die Stellung der Kardinalzahl entscheidet über die Bedeutung:\n\n- **Num + N** = Anzahl (K04): `ba tầng` – „drei Stockwerke“, `hai phòng` – „zwei Zimmer“.\n- **N + Num** = Bezeichnung, Nummer: `tầng ba` – „der dritte Stock“, `phòng 305` – „Zimmer 305“, `nhà số 12` – „Hausnummer 12“.\n\nBei Stockwerken, Zimmern, Buslinien und Hausnummern genügt die nachgestellte Kardinalzahl; das Ordinalpräfix `thứ` (K03) ist hier unüblich.\n\nAchtung, **Stockwerkzählung**: Im Norden ist `tầng một` das Erdgeschoss, `tầng hai` das 1. Obergeschoss usw. Im Süden heißt das Erdgeschoss `tầng trệt`, die Obergeschosse heißen `lầu`: `lầu một` = 1. OG. `Tầng ba` (Hà Nội) und `lầu hai` (Sài Gòn) bezeichnen also dasselbe Stockwerk – das deutsche 2. OG. Wer in Sài Gòn eine Wohnung „im zweiten Stock“ sucht, sollte nachfragen, welche Zählung gemeint ist.\n\nDie Frage nach dem Stockwerk lautet `Căn hộ ở tầng mấy?` – mit `mấy` an der Stelle der Zahl (Fragewort in situ).",
          table: {
            head: ["Deutsch", "Nord (Hà Nội)", "Süd (Sài Gòn)"],
            rows: [
              ["Erdgeschoss", "tầng một", "tầng trệt"],
              ["1. Obergeschoss", "tầng hai", "lầu một"],
              ["2. Obergeschoss", "tầng ba", "lầu hai"],
              ["3. Obergeschoss", "tầng bốn", "lầu ba"]
            ]
          },
          examples: [
            { vi: "Nhà này có ba tầng.", de: "Dieses Haus hat drei Stockwerke.", gloss: "Haus | dies | haben | drei | Stockwerk" },
            { vi: "Căn hộ ở tầng ba.", de: "Die Wohnung ist im dritten Stock (Nord: 2. OG).", gloss: "Wohnung | sich befinden | Stockwerk | drei" },
            { vi: "Căn hộ ở tầng mấy?", de: "In welchem Stock ist die Wohnung?" },
            { vi: "Phòng của tôi là phòng 305.", de: "Mein Zimmer ist Zimmer 305." }
          ],
          contrast: "Das Deutsche braucht für die Nummer eine Ordinalzahl („der dritte Stock“) oder nachgestellte Ziffer („Zimmer 305“). Das Vietnamesische unterscheidet Anzahl und Nummer allein durch die Wortstellung."
        }
      ],
      dialogue: {
        setting: "Jonas und Linh besichtigen eine Wohnung in einer ruhigen Gasse in Sài Gòn. Die Vermieterin Cô Sáu stammt aus dem Süden.",
        lines: [
          { who: "Cô Sáu", vi: "Mời hai cháu lên. Căn hộ ở lầu hai.", de: "Kommt bitte hoch, ihr beiden. Die Wohnung ist im zweiten Stock." },
          { who: "Jonas", vi: "Lầu hai là tầng hai ạ?", de: "Ist „lầu hai“ der zweite Stock?" },
          { who: "Linh", vi: "Không phải anh ạ. Ở Sài Gòn, lầu hai là tầng ba.", de: "Nein. In Sài Gòn ist „lầu hai“ der „tầng ba“ (nach Nordzählung)." },
          { who: "Jonas", vi: "Căn hộ có mấy phòng ạ?", de: "Wie viele Zimmer hat die Wohnung?" },
          { who: "Cô Sáu", vi: "Có hai phòng ngủ, một bếp và một nhà vệ sinh.", de: "Zwei Schlafzimmer, eine Küche und ein Bad." },
          { who: "Linh", vi: "Trong phòng ngủ có giường không cô?", de: "Gibt es im Schlafzimmer ein Bett?" },
          { who: "Cô Sáu", vi: "Có, trong phòng có một cái giường lớn.", de: "Ja, im Zimmer steht ein großes Bett." },
          { who: "Jonas", vi: "Tiền thuê một tháng bao nhiêu ạ?", de: "Wie hoch ist die Miete pro Monat?" },
          { who: "Cô Sáu", vi: "Mười hai triệu. Hẻm này yên tĩnh lắm.", de: "Zwölf Millionen. Diese Gasse ist sehr ruhig." },
          { who: "Linh", vi: "Dạ, chúng cháu thuê căn hộ này ạ.", de: "Gut, wir nehmen die Wohnung." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Trong phòng ___ một cái giường.", de: "Im Zimmer steht ein Bett.", options: ["có", "là", "ở"], answer: "có", explain: "Existenzsatz: Ort als Topik + có + neues Element." },
        { type: "gap", vi: "Cái giường ___ trong phòng ngủ.", de: "Das Bett ist im Schlafzimmer.", options: ["ở", "có", "là"], answer: "ở", explain: "Ein bekanntes Ding wird mit ở lokalisiert." },
        { type: "gap", vi: "Chúng tôi thuê một ___ hộ ở Sài Gòn.", de: "Wir mieten eine Wohnung in Sài Gòn.", options: ["căn", "con", "quyển"], answer: "căn", explain: "căn ist der Klassifikator für Wohneinheiten; in căn hộ ist er fester Bestandteil." },
        { type: "gap", vi: "___ chùa kia rất đẹp.", de: "Jene Pagode ist sehr schön.", options: ["Ngôi", "Con", "Quyển"], answer: "Ngôi", explain: "ngôi ist der gehobene Klassifikator für Gebäude, besonders Tempel." },
        { type: "build", vi: "Trong phòng ngủ có một cái giường.", de: "Im Schlafzimmer steht ein Bett.", extra: ["là", "ở"] },
        { type: "build", vi: "Căn hộ của chúng tôi ở tầng năm.", de: "Unsere Wohnung ist im fünften Stock.", extra: ["có", "mấy"] },
        { type: "build", vi: "Hẻm này rất yên tĩnh.", de: "Diese Gasse ist sehr ruhig.", extra: ["là", "ồn"] },
        { type: "translate", de: "Im Zimmer gibt es kein Bett.", answers: ["Trong phòng không có giường.", "Phòng không có giường.", "Trong phòng không có cái giường nào."] },
        { type: "translate", de: "Wie hoch ist die Miete pro Monat?", answers: ["Tiền thuê một tháng bao nhiêu?", "Tiền thuê một tháng là bao nhiêu?", "Tiền thuê bao nhiêu một tháng?", "Một tháng tiền thuê bao nhiêu?", "Tiền thuê một tháng bao nhiêu tiền?"] },
        { type: "mc", q: "„Nhà này có ba tầng“ und „Căn hộ ở tầng ba“ – was stimmt?", options: ["ba tầng = drei Stockwerke; tầng ba = Stockwerk Nr. 3", "Beides heißt „drei Stockwerke“.", "ba tầng = Stockwerk Nr. 3; tầng ba = drei Stockwerke"], answer: 0, explain: "Num + N = Anzahl, N + Num = Nummer." },
        { type: "mc", q: "Cô Sáu sagt „lầu một“. Welches Stockwerk meint sie (deutsche Zählung)?", options: ["1. Obergeschoss", "Erdgeschoss", "2. Obergeschoss"], answer: 0, explain: "Im Süden ist tầng trệt das Erdgeschoss, lầu một das 1. OG." },
        { type: "mc", q: "Welcher Satz führt das Bett als neue Information ein?", options: ["Trong phòng có một cái giường.", "Cái giường ở trong phòng.", "Cái giường là trong phòng."], answer: 0, explain: "Der Existenzsatz mit có stellt Neues hinten vor; ở lokalisiert Bekanntes; là ist hier falsch." },
        { type: "listen", vi: "Nhà vệ sinh ở bên cạnh bếp.", de: "Das Bad ist neben der Küche." },
        { type: "speak", vi: "Chúng tôi muốn thuê một căn hộ yên tĩnh.", de: "Wir möchten eine ruhige Wohnung mieten." },
        { type: "pairs", pairs: [["căn hộ", "Wohnung"], ["tầng", "Stockwerk"], ["thuê", "mieten"], ["hẻm", "Gasse"], ["chủ nhà", "Vermieter/in"], ["ồn", "laut"]] }
      ]
    },

    // ───────────────────────────── k10l2 ─────────────────────────────
    {
      id: "k10l2",
      title: "Körper & Gesundheit",
      goal: "Du kannst Beschwerden beschreiben und mit bị und được ausdrücken, ob dir etwas Unangenehmes oder Angenehmes widerfährt.",
      vocab: [
        { vi: "đau", de: "wehtun, schmerzen", pos: "Adj", emoji: "🤕", note: "Stativverb: đau + Körperteil", ex: { vi: "Tôi đau đầu.", de: "Ich habe Kopfschmerzen." } },
        { vi: "đầu", de: "Kopf", pos: "N", emoji: "🗣️", ex: { vi: "Anh ấy đau đầu quá.", de: "Er hat starke Kopfschmerzen." } },
        { vi: "bụng", de: "Bauch", pos: "N", ex: { vi: "Linh đau bụng.", de: "Linh hat Bauchschmerzen." } },
        { vi: "họng", de: "Hals, Rachen", pos: "N", ex: { vi: "Em bị đau họng.", de: "Ich habe Halsschmerzen." } },
        { vi: "răng", de: "Zahn", pos: "N", cls: "cái", emoji: "🦷", ex: { vi: "Bố tôi đau răng.", de: "Mein Vater hat Zahnschmerzen." } },
        { vi: "ốm", de: "krank (Nord)", pos: "Adj", south: "bệnh", emoji: "🤒", ex: { vi: "Hôm nay Jonas bị ốm.", de: "Heute ist Jonas krank." } },
        { vi: "sốt", de: "Fieber haben; Fieber", pos: "V", emoji: "🌡️", ex: { vi: "Huy bị sốt.", de: "Huy hat Fieber." } },
        { vi: "ho", de: "husten", pos: "V", emoji: "😷", ex: { vi: "Tối qua Linh ho nhiều.", de: "Gestern Abend hat Linh viel gehustet." } },
        { vi: "cảm", de: "Erkältung; erkältet sein", pos: "N", emoji: "🤧", ex: { vi: "Em bị cảm rồi.", de: "Ich habe mich erkältet." } },
        { vi: "thuốc", de: "Medikament, Arznei", pos: "N", emoji: "💊", note: "uống thuốc = Medikament einnehmen", ex: { vi: "Anh nên uống thuốc.", de: "Du solltest ein Medikament nehmen." } },
        { vi: "bệnh viện", de: "Krankenhaus", pos: "N", emoji: "🏥", ex: { vi: "Bệnh viện ở đường Lê Lợi.", de: "Das Krankenhaus ist in der Lê-Lợi-Straße." } },
        { vi: "hiệu thuốc", de: "Apotheke (Nord)", pos: "N", south: "nhà thuốc", emoji: "⚕️", ex: { vi: "Hiệu thuốc ở đâu ạ?", de: "Wo ist die Apotheke?" } },
        { vi: "khám", de: "(ärztlich) untersuchen", pos: "V", note: "đi khám = zum Arzt gehen", ex: { vi: "Ngày mai tôi đi khám.", de: "Morgen gehe ich zum Arzt." } },
        { vi: "mắng", de: "ausschimpfen, tadeln", pos: "V", emoji: "😠", ex: { vi: "Huy bị anh Minh mắng.", de: "Huy wurde von Anh Minh ausgeschimpft." } },
        { vi: "khen", de: "loben", pos: "V", emoji: "👏", ex: { vi: "Jonas được chị Thảo khen.", de: "Jonas wurde von Chị Thảo gelobt." } },
        { vi: "mất", de: "verlieren; verloren gehen", pos: "V", ex: { vi: "Jonas bị mất điện thoại.", de: "Jonas hat sein Handy verloren." } }
      ],
      grammar: [
        {
          id: "g-k10-dau-benh",
          title: "Beschwerden ausdrücken: đau + Körperteil, bị + Krankheit",
          term: "Stativverb mit Körperteil-Komplement; Malfaktiv bei Krankheiten",
          pattern: "S + (bị) + đau + Körperteil · S + bị + sốt / ho / cảm / ốm",
          text: "Schmerzen drückt man mit dem Stativverb `đau` aus, dem der Körperteil **unmittelbar folgt**: `Tôi đau đầu.` – wörtlich „Ich schmerze Kopf“. Ein Possessivum („mein Kopf“) ist überflüssig, denn das Subjekt ist der Betroffene. Möglich, aber seltener ist die Topik-Kommentar-Variante `Đầu tôi đau.`\n\nKrankheiten und Symptome werden typischerweise mit `bị` eingeleitet: `bị sốt` (Fieber haben), `bị ho` (Husten haben), `bị cảm` (erkältet sein), `bị ốm` (krank sein; Süd: `bị bệnh`). `bị` markiert, dass dem Subjekt etwas **Unangenehmes widerfährt** (Malfaktiv, siehe nächster Punkt). Auch `đau` verbindet sich gern mit `bị`: `Tôi bị đau họng.` – beides ist korrekt.\n\nNach Beschwerden fragt man im Norden `Anh bị làm sao?` – „Was fehlt dir?“, im Süden `Anh bị sao vậy?`. Die Antwort nennt das Symptom: `Tôi bị sốt.` Mit Aspekt und Dauer (K08): `Tôi bị sốt hai ngày rồi.` – „Ich habe seit zwei Tagen Fieber.“\n\nEmpfehlungen formuliert man mit den Modalen aus K09: `Anh nên uống thuốc.` – `Anh phải đi khám.` Das Gegenteil von krank ist das Stativverb `khỏe` (K02).",
          table: {
            head: ["Deutsch", "Vietnamesisch", "Struktur"],
            rows: [
              ["Ich habe Kopfschmerzen.", "Tôi (bị) đau đầu.", "đau + Körperteil"],
              ["Ich habe Bauchweh.", "Tôi (bị) đau bụng.", "đau + Körperteil"],
              ["Ich habe Fieber.", "Tôi bị sốt.", "bị + Symptom"],
              ["Ich bin erkältet.", "Tôi bị cảm.", "bị + Krankheit"],
              ["Ich bin krank.", "Tôi bị ốm. (Süd: bị bệnh)", "bị + Zustand"],
              ["Was fehlt dir?", "Anh bị làm sao? (Süd: bị sao vậy?)", "Frage"]
            ]
          },
          examples: [
            { vi: "Tôi đau đầu quá.", de: "Ich habe furchtbare Kopfschmerzen.", gloss: "ich | schmerzen | Kopf | sehr" },
            { vi: "Linh bị đau họng và bị ho.", de: "Linh hat Halsschmerzen und Husten." },
            { vi: "Anh bị làm sao?", de: "Was fehlt dir?" },
            { vi: "Em bị sốt hai ngày rồi.", de: "Ich habe seit zwei Tagen Fieber." }
          ],
          contrast: "Das Deutsche verwendet „Ich habe Kopfschmerzen“ (Besitz) oder „Mir tut der Kopf weh“ (Dativ des Betroffenen). Das Vietnamesische macht den Betroffenen zum Subjekt und hängt den Körperteil direkt an: Tôi đau đầu."
        },
        {
          id: "g-k10-bi-duoc",
          title: "Malfaktiv bị und Benefaktiv được",
          term: "Adversativ- und Benefaktivkonstruktion (passivähnlich)",
          pattern: "Betroffener + bị / được + (Agens) + V",
          text: "Vietnamesisch hat **kein morphologisches Passiv**. Seine Aufgabe übernehmen zwei ursprüngliche Vollverben: `bị` („erleiden“) und `được` („erhalten“). Sie nehmen einen Satz als Komplement; das Subjekt ist der **Betroffene**:\n\n`Huy bị anh Minh mắng.` – „Huy wurde von Anh Minh ausgeschimpft.“\n`Jonas được chị Thảo khen.` – „Jonas wurde von Chị Thảo gelobt.“\n\nDer **Agensanschluss** ist einfach: Das Agens steht **direkt nach** `bị`/`được`, ohne Präposition (deutsch „von“). Es kann auch fehlen: `Huy bị mắng.` – „Huy wurde ausgeschimpft.“\n\nEntscheidend ist die **Bewertung aus Sicht des Subjekts**:\n- `bị` = Malfaktiv: Das Geschehen ist für den Betroffenen **nachteilig** (getadelt, bestraft, bestohlen, krank).\n- `được` = Benefaktiv: Das Geschehen ist **vorteilhaft** (gelobt, eingeladen, beschenkt).\n\n`*Jonas bị khen` wäre daher widersprüchlich (allenfalls ironisch). Neutrale Ereignisse stehen meist im Aktiv.\n\n`bị` erscheint auch ohne passivische Lesart vor Verben des Widerfahrens: `Tôi bị mất điện thoại.` – „Mir ist das Handy abhandengekommen.“\n\n`được` kennst du bereits in drei anderen Funktionen: als Potentialis nach dem Verb (K05: `ăn được`), bei Dauer (K08: `được ba tháng`) und als „dürfen“ vor dem Verb (K09). Die Benefaktivlesung ist eng verwandt mit Letzterem: `Em được nghỉ.` – „Du darfst/bekommst frei.“",
          table: {
            head: ["Satz", "Bewertung", "Deutsch"],
            rows: [
              ["Huy bị anh Minh mắng.", "nachteilig (bị)", "Huy wurde von Anh Minh ausgeschimpft."],
              ["Jonas được chị Thảo khen.", "vorteilhaft (được)", "Jonas wurde von Chị Thảo gelobt."],
              ["Huy bị phạt.", "nachteilig (bị)", "Huy wurde bestraft."],
              ["Linh được mời.", "vorteilhaft (được)", "Linh wurde eingeladen."],
              ["Tôi bị mất ví.", "Widerfahrnis (bị)", "Mir wurde/ist die Geldbörse abhandengekommen."]
            ]
          },
          examples: [
            { vi: "Huy bị anh Minh mắng.", de: "Huy wurde von Anh Minh ausgeschimpft.", gloss: "Huy | MAL | Anh Minh | schimpfen" },
            { vi: "Jonas được chị Thảo khen.", de: "Jonas wurde von Chị Thảo gelobt.", gloss: "Jonas | BEN | Chị Thảo | loben" },
            { vi: "Hôm qua tôi bị mất điện thoại.", de: "Gestern habe ich mein Handy verloren." },
            { vi: "Hôm nay anh được nghỉ ở nhà.", de: "Heute darf ich zu Hause bleiben." }
          ],
          contrast: "Das deutsche Passiv ist wertneutral („Er wurde gelobt / getadelt“) und schließt das Agens mit „von“ an. Im Vietnamesischen muss man bei jedem passivähnlichen Satz bewerten (bị oder được), das Agens steht dafür ohne Präposition direkt nach dem Marker."
        }
      ],
      dialogue: {
        setting: "Morgens in der Wohnung in Sài Gòn. Jonas fühlt sich schlecht; Linh fragt nach.",
        lines: [
          { who: "Linh", vi: "Anh bị làm sao?", de: "Was ist los mit dir?" },
          { who: "Jonas", vi: "Anh đau đầu quá. Anh bị sốt, em ạ.", de: "Ich habe furchtbare Kopfschmerzen. Ich habe Fieber." },
          { who: "Linh", vi: "Anh có ho không?", de: "Hustest du?" },
          { who: "Jonas", vi: "Có, anh ho nhiều và đau họng.", de: "Ja, ich huste viel und habe Halsschmerzen." },
          { who: "Linh", vi: "Anh bị cảm rồi. Anh nên uống thuốc và nghỉ.", de: "Du hast dich erkältet. Du solltest ein Medikament nehmen und dich ausruhen." },
          { who: "Jonas", vi: "Hôm qua anh bị mất ví. Hôm nay anh bị ốm!", de: "Gestern habe ich meine Geldbörse verloren. Heute bin ich krank!" },
          { who: "Linh", vi: "Không sao. Em đi hiệu thuốc mua thuốc nhé.", de: "Macht nichts. Ich gehe in die Apotheke und kaufe ein Medikament." },
          { who: "Jonas", vi: "Cảm ơn em. Hôm nay anh được nghỉ ở nhà.", de: "Danke. Heute darf ich wenigstens zu Hause bleiben." },
          { who: "Linh", vi: "Anh phải ngủ nhiều nhé. Chiều nay anh nên đi khám.", de: "Du musst viel schlafen. Heute Nachmittag solltest du zum Arzt gehen." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Huy ___ anh Minh mắng.", de: "Huy wurde von Anh Minh ausgeschimpft.", options: ["bị", "được", "là"], answer: "bị", explain: "Ausgeschimpft werden ist nachteilig → Malfaktiv bị." },
        { type: "gap", vi: "Jonas ___ chị Thảo khen.", de: "Jonas wurde von Chị Thảo gelobt.", options: ["được", "bị", "có"], answer: "được", explain: "Gelobt werden ist vorteilhaft → Benefaktiv được." },
        { type: "gap", vi: "Tôi ___ đầu quá.", de: "Ich habe starke Kopfschmerzen.", options: ["đau", "ốm", "sốt"], answer: "đau", explain: "đau + Körperteil: đau đầu." },
        { type: "gap", vi: "Linh ___ cảm rồi.", de: "Linh hat sich erkältet.", options: ["bị", "được", "là"], answer: "bị", explain: "Krankheiten werden mit bị eingeleitet." },
        { type: "gap", vi: "Hôm qua tôi bị ___ điện thoại.", de: "Gestern habe ich mein Handy verloren.", options: ["mất", "khen", "đau"], answer: "mất", explain: "bị mất = (leider) verlieren – ein Widerfahrnis." },
        { type: "build", vi: "Tôi bị đau họng.", de: "Ich habe Halsschmerzen.", extra: ["được", "của"] },
        { type: "build", vi: "Huy bị anh Minh mắng.", de: "Huy wurde von Anh Minh ausgeschimpft.", extra: ["của", "được"] },
        { type: "build", vi: "Jonas được chị Thảo khen.", de: "Jonas wurde von Chị Thảo gelobt.", extra: ["bị", "của"] },
        { type: "translate", de: "Ich habe Fieber.", answers: ["Tôi bị sốt.", "Tôi sốt.", "Anh bị sốt.", "Em bị sốt."] },
        { type: "translate", de: "Linh hat Bauchschmerzen.", answers: ["Linh đau bụng.", "Linh bị đau bụng."] },
        { type: "translate", de: "Huy wurde vom Chef gelobt. (Chef = sếp)", answers: ["Huy được sếp khen.", "Huy đã được sếp khen.", "Huy được sếp khen rồi.", "Huy đã được sếp khen rồi."] },
        { type: "mc", q: "Warum ist „Jonas bị khen“ normalerweise falsch?", options: ["Loben ist für Jonas vorteilhaft – das verlangt được.", "bị braucht immer ein Agens.", "khen ist kein Verb."], answer: 0, explain: "bị steht für Nachteiliges, được für Vorteilhaftes. Die Bewertung ist Pflicht." },
        { type: "mc", q: "Wo steht das Agens in „Huy bị anh Minh mắng“?", options: ["Direkt nach bị, ohne Präposition", "Am Satzende mit của", "Vor dem Subjekt"], answer: 0, explain: "Agensanschluss: bị/được + Agens + Verb, ohne ein Wort für „von“." },
        { type: "listen", vi: "Anh nên uống thuốc và ngủ sớm.", de: "Du solltest ein Medikament nehmen und früh schlafen." },
        { type: "speak", vi: "Tôi bị cảm, tôi đau đầu và ho.", de: "Ich bin erkältet, ich habe Kopfschmerzen und Husten." },
        { type: "pairs", pairs: [["đầu", "Kopf"], ["bụng", "Bauch"], ["họng", "Hals"], ["răng", "Zahn"], ["thuốc", "Medikament"], ["bệnh viện", "Krankenhaus"]] }
      ]
    },

    // ───────────────────────────── k10l3 ─────────────────────────────
    {
      id: "k10l3",
      title: "Bedingung & Grund",
      goal: "Du kannst Bedingungen und Gründe ausdrücken und nach dem Warum fragen.",
      vocab: [
        { vi: "nếu", de: "wenn, falls", pos: "Konj", ex: { vi: "Nếu mưa thì chúng ta ở nhà.", de: "Wenn es regnet, bleiben wir zu Hause." } },
        { vi: "thì", de: "dann (Korrelat im Hauptsatz)", pos: "Konj", ex: { vi: "Nếu anh mệt thì anh nên nghỉ.", de: "Wenn du müde bist, solltest du dich ausruhen." } },
        { vi: "vì", de: "weil, da", pos: "Konj", ex: { vi: "Vì trời mưa nên tôi ở nhà.", de: "Weil es regnet, bleibe ich zu Hause." } },
        { vi: "nên", de: "deshalb, daher (Korrelat zu vì)", pos: "Konj", note: "≠ Modal nên „sollte“", ex: { vi: "Trời mưa nên chúng tôi ở nhà.", de: "Es regnet, deshalb bleiben wir zu Hause." } },
        { vi: "tại vì", de: "weil (umgangssprachlich)", pos: "Konj", ex: { vi: "Tôi đến muộn tại vì tắc đường.", de: "Ich komme zu spät, weil Stau ist." } },
        { vi: "do", de: "aufgrund, wegen (formell)", pos: "Konj", ex: { vi: "Do tắc đường, nhiều người đi làm muộn.", de: "Wegen des Staus kommen viele Leute zu spät zur Arbeit." } },
        { vi: "cho nên", de: "deshalb, darum", pos: "Konj", ex: { vi: "Hẻm này nhỏ, cho nên ô tô không vào được.", de: "Diese Gasse ist schmal, darum kommen Autos nicht hinein." } },
        { vi: "tại sao", de: "warum", pos: "QW", ex: { vi: "Tại sao anh học tiếng Việt?", de: "Warum lernst du Vietnamesisch?" } },
        { vi: "vì sao", de: "warum (eher gehoben)", pos: "QW", ex: { vi: "Vì sao em đến muộn?", de: "Warum kommst du zu spät?" } },
        { vi: "tắc đường", de: "Stau; im Stau stehen (Nord)", pos: "V", south: "kẹt xe", emoji: "🚦", ex: { vi: "Buổi chiều ở Sài Gòn hay tắc đường.", de: "Nachmittags gibt es in Sài Gòn oft Stau." } },
        { vi: "đông", de: "voll, überfüllt (mit Menschen)", pos: "Adj", emoji: "👥", ex: { vi: "Chợ Bến Thành đông quá!", de: "Der Bến-Thành-Markt ist so voll!" } },
        { vi: "ô", de: "Regenschirm (Nord)", pos: "N", south: "dù", cls: "cái", emoji: "☂️", ex: { vi: "Anh mang ô nhé.", de: "Nimm einen Regenschirm mit." } },
        { vi: "điều hòa", de: "Klimaanlage (Nord)", pos: "N", south: "máy lạnh", emoji: "❄️", ex: { vi: "Phòng này có điều hòa.", de: "Dieses Zimmer hat eine Klimaanlage." } },
        { vi: "vội", de: "in Eile, eilig", pos: "Adj", emoji: "🏃", ex: { vi: "Xin lỗi, tôi đang vội.", de: "Entschuldigung, ich habe es eilig." } },
        { vi: "khỏi", de: "genesen, wieder gesund werden", pos: "V", ex: { vi: "Jonas khỏi ốm rồi.", de: "Jonas ist wieder gesund." } }
      ],
      grammar: [
        {
          id: "g-k10-neu-thi",
          title: "Bedingung: nếu … thì",
          term: "Konditionalgefüge mit korrelativem Konnektor",
          pattern: "Nếu + Bedingung + thì + Folge",
          text: "Ein Bedingungssatz besteht aus der **Protasis** (Bedingung) mit `nếu` und der **Apodosis** (Folge), die mit `thì` eingeleitet wird. `nếu` und `thì` sind **korrelative Konnektoren**: Sie markieren beide Teilsätze.\n\n`Nếu trời mưa thì chúng ta ở nhà.` – „Wenn es regnet, (dann) bleiben wir zu Hause.“\n\nRegeln:\n- Die Bedingung steht in der Regel **vorn**. In der gesprochenen Sprache kann `nếu` entfallen, `thì` bleibt dann als Grenzsignal zwischen Topik und Kommentar: `Mưa thì ở nhà.`\n- Steht die Bedingung **hinten**, entfällt `thì`: `Chúng ta ở nhà nếu trời mưa.`\n- Das Subjekt der Apodosis steht **nach** `thì`: `Nếu anh mệt thì anh nên nghỉ.` Ist es dasselbe wie in der Protasis, kann es wegfallen.\n- Beide Teilsätze behalten die normale Wortstellung S–V–O. Es gibt keine Verbendstellung und keine Inversion.\n\nVietnamesisch unterscheidet **reale und irreale** Bedingungen grammatisch nicht: `Nếu tôi có tiền thì tôi mua nhà.` kann „Wenn ich Geld habe, kaufe ich ein Haus“ oder „Wenn ich Geld hätte, würde ich ein Haus kaufen“ bedeuten. Der Kontext entscheidet; `sẽ` in der Apodosis betont die Folge in der Zukunft: `Nếu anh uống thuốc thì anh sẽ khỏi.`",
          table: {
            head: ["Muster", "Beispiel", "Deutsch"],
            rows: [
              ["Nếu A thì B", "Nếu mưa thì tôi ở nhà.", "Wenn es regnet, bleibe ich zu Hause."],
              ["A thì B (umgangssprachlich)", "Mưa thì tôi ở nhà.", "Wenn’s regnet, bleib ich zu Hause."],
              ["B nếu A", "Tôi ở nhà nếu mưa.", "Ich bleibe zu Hause, wenn es regnet."],
              ["Nếu A thì sẽ B", "Nếu uống thuốc thì anh sẽ khỏi.", "Wenn du das Medikament nimmst, wirst du gesund."]
            ]
          },
          examples: [
            { vi: "Nếu trời mưa thì chúng ta ở nhà.", de: "Wenn es regnet, bleiben wir zu Hause.", gloss: "wenn | Himmel | regnen | dann | wir | bleiben | Haus" },
            { vi: "Nếu anh mệt thì anh nên nghỉ.", de: "Wenn du müde bist, solltest du dich ausruhen." },
            { vi: "Chúng ta đi bộ nếu trời không mưa.", de: "Wir gehen zu Fuß, wenn es nicht regnet." },
            { vi: "Nếu tôi có tiền thì tôi sẽ thuê căn hộ này.", de: "Wenn ich Geld habe/hätte, miete ich/würde ich diese Wohnung mieten." }
          ],
          contrast: "Im Deutschen ist „dann“ optional, der wenn-Satz hat Verbendstellung und der Hauptsatz Inversion („…, bleiben wir“). Im Vietnamesischen bleibt die Wortstellung gleich, thì ist (bei vorangestellter Bedingung) fast obligatorisch, und Irrealis wird nicht markiert."
        },
        {
          id: "g-k10-vi-nen",
          title: "Grund und Folge: vì … nên, tại vì, do, cho nên",
          term: "Kausale korrelative Konnektoren",
          pattern: "Vì + Grund + (cho) nên + Folge · Folge + vì / tại vì / do + Grund",
          text: "Auch kausale Gefüge sind im Vietnamesischen oft **korrelativ**: Der Grund wird mit `vì`, die Folge mit `nên` markiert – beide im selben Satzgefüge:\n\n`Vì tắc đường nên tôi đến muộn.` – „Weil Stau ist, komme ich zu spät.“\n\n- **Grund vorn**: `vì … nên` (oder `vì … cho nên`). Einer der beiden Konnektoren kann fehlen: `Tắc đường nên tôi đến muộn.`\n- **Folge vorn**: nur `vì` vor dem Grund, **kein** `nên`: `Tôi đến muộn vì tắc đường.` *`Tôi đến muộn nên vì tắc đường`* ist falsch.\n\nRegister:\n- `vì` – neutral, Standard.\n- `tại vì` (oder nur `tại`) – umgangssprachlich, oft mit leichtem Vorwurf („schuld ist …“).\n- `do` – formell, Nachrichten- und Schriftsprache; steht oft vor einer Nominalphrase: `Do tắc đường, …` – „Aufgrund des Staus …“.\n- `cho nên` – wie `nên`, etwas nachdrücklicher, erzählend.\n\nVorsicht vor dem Homonym: Das Konnektor-`nên` („deshalb“) leitet einen Teilsatz ein; das Modal-`nên` („sollte“, K09) steht vor dem Verb. `Anh mệt nên anh nên nghỉ.` – „Du bist müde, deshalb solltest du dich ausruhen“ – enthält beide.",
          table: {
            head: ["Konnektor", "Position", "Register", "Beispiel"],
            rows: [
              ["vì … nên", "Grund – Folge", "neutral", "Vì mưa nên tôi ở nhà."],
              ["… vì …", "Folge – Grund", "neutral", "Tôi ở nhà vì mưa."],
              ["tại vì", "vor dem Grund", "umgangssprachlich", "Tôi muộn tại vì tắc đường."],
              ["do", "vor dem Grund (oft NP)", "formell", "Do tắc đường, …"],
              ["cho nên", "vor der Folge", "nachdrücklich", "Hẻm nhỏ, cho nên ô tô không vào được."]
            ]
          },
          examples: [
            { vi: "Vì tắc đường nên tôi đến muộn.", de: "Weil Stau ist, komme ich zu spät.", gloss: "weil | Stau | deshalb | ich | kommen | spät" },
            { vi: "Tôi đến muộn vì tắc đường.", de: "Ich komme zu spät, weil Stau ist." },
            { vi: "Do mưa lớn, nhiều người ở nhà.", de: "Wegen des starken Regens bleiben viele Leute zu Hause." },
            { vi: "Anh mệt nên anh nên nghỉ.", de: "Du bist müde, also solltest du dich ausruhen." }
          ],
          contrast: "Im Standarddeutschen schließen sich „weil“ und „deshalb“ im selben Gefüge aus („*Weil es regnet, deshalb bleiben wir“). Im Vietnamesischen ist genau diese doppelte Markierung (vì … nên) der Normalfall."
        },
        {
          id: "g-k10-tai-sao",
          title: "Warum-Fragen: tại sao, vì sao, sao",
          term: "Kausale Interrogativa (satzinitial)",
          pattern: "Tại sao / Vì sao / Sao + S + V? – Vì / Tại vì + Grund.",
          text: "Anders als `gì`, `ai` oder `đâu` (in situ, K02) stehen die Warum-Fragewörter am **Satzanfang**:\n\n`Tại sao anh học tiếng Việt?` – „Warum lernst du Vietnamesisch?“\n\n- `tại sao` – neutral, sehr häufig.\n- `vì sao` – etwas gehobener, oft in Schrift und Medien.\n- `sao` – kurz und umgangssprachlich: `Sao em đến muộn?` Im Süden sehr häufig, auch als `Sao vậy?` – „Was ist los?“\n\nGeantwortet wird mit `vì` oder `tại vì` + Grund. Ein Fragment genügt: `Vì bạn gái tôi là người Việt.` – „Weil meine Freundin Vietnamesin ist.“ Die Verneinung steht wie gewohnt vor dem Verb: `Tại sao anh không đi xe buýt?` – „Warum fährst du nicht mit dem Bus?“\n\nDie Konnektoren `vì` und `tại vì` sind also gleichzeitig die Bausteine der Fragewörter (`vì sao`, `tại sao`), mit `sao` („wie“) kombiniert – wörtlich etwa „aus welchem Grund“.",
          table: {
            head: ["Fragewort", "Register", "Beispiel"],
            rows: [
              ["tại sao", "neutral", "Tại sao anh không đi?"],
              ["vì sao", "gehoben", "Vì sao Sài Gòn hay tắc đường?"],
              ["sao", "umgangssprachlich", "Sao em đến muộn?"]
            ]
          },
          examples: [
            { vi: "Tại sao anh học tiếng Việt?", de: "Warum lernst du Vietnamesisch?" },
            { vi: "Vì bạn gái tôi là người Việt.", de: "Weil meine Freundin Vietnamesin ist." },
            { vi: "Sao em đến muộn?", de: "Warum kommst du zu spät?" },
            { vi: "Tại vì tắc đường, anh ạ.", de: "Weil Stau war." }
          ],
          contrast: "Wie „warum“ stehen tại sao/vì sao am Satzanfang. Im Unterschied zum Deutschen ändert sich danach aber nichts an der Wortstellung: kein Verb an zweiter Stelle."
        }
      ],
      dialogue: {
        setting: "Jonas ist wieder gesund. Linh und er planen den Nachmittag in Sài Gòn.",
        lines: [
          { who: "Linh", vi: "Hôm nay anh khỏe chưa?", de: "Geht es dir heute wieder gut?" },
          { who: "Jonas", vi: "Anh khỏe rồi. Vì uống thuốc nên anh khỏi nhanh.", de: "Ja, mir geht’s gut. Weil ich das Medikament genommen habe, bin ich schnell gesund geworden." },
          { who: "Linh", vi: "Chiều nay chúng ta đi chợ Bến Thành nhé?", de: "Gehen wir heute Nachmittag zum Bến-Thành-Markt?" },
          { who: "Jonas", vi: "Được. Nếu trời không mưa thì chúng ta đi bộ.", de: "Gern. Wenn es nicht regnet, gehen wir zu Fuß." },
          { who: "Linh", vi: "Đi bộ xa lắm anh ạ. Chúng ta nên đi Grab.", de: "Zu Fuß ist es sehr weit. Wir sollten Grab nehmen." },
          { who: "Jonas", vi: "Tại sao không đi xe buýt?", de: "Warum nehmen wir nicht den Bus?" },
          { who: "Linh", vi: "Tại vì buổi chiều hay tắc đường, xe buýt chậm lắm.", de: "Weil nachmittags oft Stau ist – der Bus ist sehr langsam." },
          { who: "Jonas", vi: "Nếu tắc đường thì Grab chậm như xe buýt.", de: "Wenn Stau ist, ist Grab genauso langsam wie der Bus." },
          { who: "Linh", vi: "Grab xe máy nhanh hơn anh ạ. Anh mang ô nhé. Đi thôi!", de: "Grab mit dem Moped ist schneller. Nimm einen Schirm mit. Los geht’s!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "___ trời mưa thì chúng ta ở nhà.", de: "Wenn es regnet, bleiben wir zu Hause.", options: ["Nếu", "Vì", "Tại sao"], answer: "Nếu", explain: "Bedingung: nếu … thì. vì … nên wäre ein Grund (Faktum)." },
        { type: "gap", vi: "Vì tắc đường ___ tôi đến muộn.", de: "Weil Stau ist, komme ich zu spät.", options: ["nên", "thì", "nếu"], answer: "nên", explain: "Korrelat zu vì ist nên; thì gehört zu nếu." },
        { type: "gap", vi: "Nếu anh mệt ___ anh nên nghỉ.", de: "Wenn du müde bist, solltest du dich ausruhen.", options: ["thì", "nên", "vì"], answer: "thì", explain: "Korrelat zu nếu ist thì." },
        { type: "gap", vi: "Tôi ở nhà ___ trời mưa.", de: "Ich bleibe zu Hause, weil es regnet.", options: ["vì", "nên", "thì"], answer: "vì", explain: "Steht die Folge vorn, wird nur der Grund mit vì markiert." },
        { type: "gap", vi: "___ anh học tiếng Việt?", de: "Warum lernst du Vietnamesisch?", options: ["Tại sao", "Nếu", "Cho nên"], answer: "Tại sao", explain: "Warum-Fragewörter stehen satzinitial." },
        { type: "build", vi: "Nếu trời mưa thì chúng tôi ở nhà.", de: "Wenn es regnet, bleiben wir zu Hause.", extra: ["vì", "nên"] },
        { type: "build", vi: "Vì tắc đường nên tôi đến muộn.", de: "Weil Stau ist, komme ich zu spät.", extra: ["thì", "nếu"] },
        { type: "build", vi: "Tại sao em không đi xe buýt?", de: "Warum fährst du nicht mit dem Bus?", extra: ["vì", "thì"] },
        { type: "translate", de: "Wenn du müde bist, solltest du dich ausruhen. (zu Jonas)", answers: ["Nếu anh mệt thì anh nên nghỉ.", "Nếu anh mệt thì nên nghỉ.", "Nếu anh mệt, anh nên nghỉ.", "Anh mệt thì anh nên nghỉ.", "Anh mệt thì nên nghỉ.", "Anh nên nghỉ nếu anh mệt."] },
        { type: "translate", de: "Weil Stau ist, komme ich zu spät.", answers: ["Vì tắc đường nên tôi đến muộn.", "Tôi đến muộn vì tắc đường.", "Tại vì tắc đường nên tôi đến muộn.", "Tôi đến muộn tại vì tắc đường.", "Do tắc đường nên tôi đến muộn.", "Tôi đến muộn do tắc đường.", "Vì kẹt xe nên tôi đến muộn.", "Tôi đến muộn vì kẹt xe.", "Vì tắc đường, tôi đến muộn.", "Tắc đường nên tôi đến muộn.", "Vì tắc đường cho nên tôi đến muộn."] },
        { type: "mc", q: "Welcher Satz ist falsch?", options: ["Tôi đến muộn nên vì tắc đường.", "Vì tắc đường nên tôi đến muộn.", "Tôi đến muộn vì tắc đường."], answer: 0, explain: "Steht die Folge vorn, folgt nur vì + Grund; nên markiert die Folge und kann nicht vor vì stehen." },
        { type: "mc", q: "In welchem Satz ist nên ein Modalauxiliar („sollte“)?", options: ["Anh nên uống thuốc.", "Trời mưa nên tôi ở nhà.", "Vì mệt nên anh ấy ngủ sớm."], answer: 0, explain: "Modal-nên steht direkt vor dem Verb; Konnektor-nên leitet den Folgesatz ein." },
        { type: "mc", q: "Welcher Konnektor klingt am formellsten (Nachrichten, Schrift)?", options: ["do", "tại vì", "tại"], answer: 0, explain: "do ist formell; tại vì und tại sind umgangssprachlich." },
        { type: "listen", vi: "Nếu trời mưa thì anh mang ô nhé.", de: "Wenn es regnet, nimm einen Schirm mit." },
        { type: "speak", vi: "Vì trời nắng nên chúng tôi đi biển.", de: "Weil die Sonne scheint, gehen wir an den Strand." }
      ]
    },

    // ───────────────────────────── k10l4 ─────────────────────────────
    {
      id: "k10l4",
      title: "Südvietnamesisch verstehen",
      goal: "Du verstehst typische südvietnamesische Aussprache, Wörter, Partikeln und Pronomen und kannst sie den Nordformen zuordnen.",
      vocab: [
        { vi: "tui", de: "ich (Süd, umgangssprachlich)", pos: "Pron", note: "Nord: tôi", ex: { vi: "Tui là người Sài Gòn.", de: "Ich bin aus Sài Gòn." } },
        { vi: "mình", de: "ich; wir (inklusiv); du (unter Partnern)", pos: "Pron", ex: { vi: "Mình đi ăn nha!", de: "Lass uns essen gehen!" } },
        { vi: "ổng", de: "er (= ông ấy)", pos: "Pron", note: "Tonfusion: ông + ấy → ổng", ex: { vi: "Ổng là bác sĩ.", de: "Er ist Arzt." } },
        { vi: "bả", de: "sie (= bà ấy)", pos: "Pron", note: "Tonfusion: bà + ấy → bả", ex: { vi: "Bả bán trái cây ở chợ.", de: "Sie verkauft Obst auf dem Markt." } },
        { vi: "hông", de: "nicht; Fragepartikel (= không)", pos: "Part", ex: { vi: "Em ăn cay được hông?", de: "Kannst du scharf essen?" } },
        { vi: "nha", de: "ja?, okay? (= nhé)", pos: "Part", ex: { vi: "Mai gặp lại nha!", de: "Bis morgen, ja?" } },
        { vi: "nè", de: "hier!, schau mal! (= này)", pos: "Part", ex: { vi: "Cái này nè, đẹp lắm!", de: "Schau mal, das hier – sehr schön!" } },
        { vi: "vậy", de: "so; Fragepartikel (Nord: thế)", pos: "Part", ex: { vi: "Sao vậy?", de: "Was ist los?" } },
        { vi: "heo", de: "Schwein (Nord: lợn)", pos: "N", cls: "con", emoji: "🐖", ex: { vi: "Tui thích ăn thịt heo.", de: "Ich esse gern Schweinefleisch." } },
        { vi: "bông", de: "Blume (Nord: hoa)", pos: "N", emoji: "🌸", ex: { vi: "Bông này đẹp quá!", de: "Diese Blume ist wunderschön!" } },
        { vi: "trái", de: "Frucht (Nord: quả)", pos: "N", emoji: "🥭", note: "trái cây = Obst", ex: { vi: "Trái này ngọt lắm.", de: "Diese Frucht ist sehr süß." } },
        { vi: "kêu", de: "rufen; bestellen (Nord: gọi)", pos: "V", ex: { vi: "Em kêu một ly cà phê sữa đá.", de: "Ich bestelle einen Eiskaffee mit Milch." } },
        { vi: "vô", de: "hinein (Nord: vào)", pos: "V", note: "gesprochen [jo], oft „dzô“ geschrieben", ex: { vi: "Mời anh vô!", de: "Komm bitte herein!" } },
        { vi: "ly", de: "Glas (Nord: cốc)", pos: "N", emoji: "🥤", ex: { vi: "Cho tui một ly trà đá.", de: "Ein Glas Eistee für mich, bitte." } },
        { vi: "má", de: "Mama (Nord: mẹ)", pos: "N", ex: { vi: "Má tui ở Cần Thơ.", de: "Meine Mama wohnt in Cần Thơ." } }
      ],
      grammar: [
        {
          id: "g-k10-nam-lautung",
          title: "Südliche Lautung",
          term: "Diatopische (regionale) phonologische Variation",
          table: {
            head: ["Merkmal", "Nord (Hà Nội)", "Süd (Sài Gòn)", "Beispiel"],
            rows: [
              ["v-", "[v]", "[j] (oft „dz“ geschrieben)", "vô → „dzô“"],
              ["d-, gi-", "[z]", "[j]", "dạ, gì"],
              ["r-", "[z]", "[ɹ] ~ [r] (oft auch [ɣ])", "rồi"],
              ["tr- / ch-", "beide [c]", "[ʈ] vs. [c] getrennt", "trà ≠ chà"],
              ["s- / x-", "beide [s]", "[ʂ] vs. [s] getrennt", "sinh ≠ xinh"],
              ["-n / -ng", "getrennt", "oft zusammengefallen", "lan ≈ lang"],
              ["-t / -c", "getrennt", "oft zusammengefallen [k]", "mặt ≈ mặc"],
              ["-nh / -ch", "[ɲ], [c]", "[n], [t]", "anh ≈ [an]"],
              ["hỏi / ngã", "verschieden", "zusammengefallen", "mả = mã"],
              ["nặng", "tief, glottalisiert", "tief-steigend, ohne Knarren", "mạ"]
            ]
          },
          text: "In Sài Gòn hörst du ein anderes Vietnamesisch als in Hà Nội. Die Schrift ist dieselbe; die **Lautung** unterscheidet sich systematisch. Die wichtigsten Merkmale:\n\n**Anlaute.** `v`, `d` und `gi` werden im Süden alle als [j] gesprochen: `vô` klingt wie „dzô“ oder „jo“, `dạ` wie „ja“. `r` ist im Süden ein echter r-Laut (Nord: [z]). Umgekehrt **trennt** der Süden, was der Norden zusammenlegt: `tr` (retroflex) ≠ `ch`, `s` (retroflex) ≠ `x`. Die Schreibung des Südens ist hier also „näher an der Aussprache“.\n\n**Auslaute.** `-n` und `-ng` sowie `-t` und `-c` fallen nach vielen Vokalen zusammen: `lan` ≈ `lang`, `mặt` ≈ `mặc`. `anh` klingt wie [an], `ách` wie [at].\n\n**Töne.** Der Süden hat nur **fünf** Töne: `hỏi` und `ngã` sind zu einem fallend-steigenden Ton verschmolzen (K01). `nặng` wird ohne Glottalisierung gesprochen.\n\nFür das Verstehen heißt das: Bei südlicher Aussprache ist der Kontext wichtiger, weil mehr Wörter gleich klingen. Für das eigene Sprechen bleibt der Nordstandard dieses Kurses gültig – beide Varianten sind gleichwertig und landesweit verständlich.",
          examples: [
            { vi: "Mời anh vô nhà.", de: "Komm bitte herein. (gesprochen etwa „dzô“)" },
            { vi: "Dạ, anh muốn uống gì?", de: "Was möchtest du trinken? (d- und gi- als [j])" },
            { vi: "Anh ăn cơm chưa?", de: "Hast du schon gegessen? (anh ≈ [an], ăn ≈ [ăng])" }
          ],
          contrast: "Ähnlich wie Hochdeutsch in München und Hamburg unterschiedlich klingt (z. B. -ig als [ɪç] oder [ɪk]), verschiebt das Südvietnamesische Laute systematisch – mit dem Unterschied, dass auch Töne betroffen sind."
        },
        {
          id: "g-k10-nam-lexik",
          title: "Südlicher Wortschatz und Satzendpartikeln",
          term: "Lexikalische Variation (regionale Dubletten); Diskurspartikeln",
          table: {
            head: ["Nord", "Süd", "Deutsch"],
            rows: [
              ["bố, mẹ", "ba, má", "Vater, Mutter"],
              ["lợn", "heo", "Schwein"],
              ["hoa", "bông", "Blume"],
              ["quả", "trái", "Frucht"],
              ["cốc", "ly", "Glas"],
              ["bát", "tô", "Schale"],
              ["thìa", "muỗng", "Löffel"],
              ["gọi", "kêu", "rufen, bestellen"],
              ["vào", "vô", "hinein"],
              ["ốm", "bệnh", "krank"],
              ["ngõ", "hẻm", "Gasse"],
              ["tầng", "lầu", "Stockwerk"],
              ["ô", "dù", "Regenschirm"],
              ["tắc đường", "kẹt xe", "Stau"],
              ["điều hòa", "máy lạnh", "Klimaanlage"],
              ["nghìn", "ngàn", "tausend"],
              ["thế", "vậy", "so (Partikel)"],
              ["nhé", "nha", "ja?, okay?"],
              ["này (Partikel)", "nè", "hier!, schau!"],
              ["không (Frage)", "hông", "nicht / Fragepartikel"]
            ]
          },
          text: "Neben der Lautung unterscheidet sich der **Wortschatz**. Viele Alltagswörter haben ein nördliches und ein südliches Gegenstück (regionale Dubletten). Einige kennst du schon (K03 `ngàn`, K04 `ba/má`, K05 `ly/tô`). Die Liste in der Tabelle deckt das Wichtigste ab; in Sài Gòn wirst du fast nur die rechte Spalte hören.\n\nBesonders auffällig sind die **Satzendpartikeln**:\n\n- `nha` entspricht `nhé`: freundliche Aufforderung oder Bitte um Zustimmung. `Mai gặp lại nha!`\n- `nè` entspricht der Partikel `này`: lenkt die Aufmerksamkeit („hier, schau!“), auch nach Anreden: `Anh nè!` – „Du, hör mal!“\n- `hông` ist die südliche, reduzierte Form von `không` – sowohl als Negation (`Tui hông biết.`) als auch als Fragepartikel (`Em ăn cay được hông?`).\n- `vậy` entspricht `thế`: `Sao vậy?` – „Was ist los?“; `Vậy hả?` – „Ach so?“\n\nDie Partikeln sind stark **registermarkiert**: Sie wirken warm und informell. In formellen Kontexten (E-Mail, Behörde) benutzen auch Südvietnamesen eher die Standardformen. Als Lernender verstehst du sie, sprichst selbst aber weiter Standard – Imitation kann aus dem Mund eines Ausländers schnell gekünstelt wirken.",
          examples: [
            { vi: "Mai gặp lại nha!", de: "Bis morgen, ja? (Nord: Mai gặp lại nhé!)" },
            { vi: "Em ăn cay được hông?", de: "Kannst du scharf essen? (Nord: … được không?)" },
            { vi: "Cho tui một ly cà phê sữa đá nha.", de: "Einen Eiskaffee mit Milch für mich, bitte." },
            { vi: "Sao vậy?", de: "Was ist los? (Nord: Sao thế?)" }
          ],
          contrast: "Vergleichbar mit deutschen Dubletten wie Brötchen/Semmel, Sonnabend/Samstag oder dem schwäbischen „gell?“ statt „ne?“. Wie dort gelten beide Formen als korrekt; sie markieren Herkunft und Nähe."
        },
        {
          id: "g-k10-nam-pronomen",
          title: "Pronomen im Süden: tui, mình, ổng, bả",
          term: "Pronominale Kontraktion mit Tonfusion",
          pattern: "Anredeterm + ấy → Anredeterm mit hỏi-Ton (ông ấy → ổng)",
          table: {
            head: ["Nord / Standard", "Süd", "Deutsch"],
            rows: [
              ["tôi", "tui", "ich"],
              ["anh ấy", "ảnh", "er (jüngerer Mann)"],
              ["chị ấy", "chỉ", "sie (ältere Frau)"],
              ["ông ấy", "ổng", "er (älterer Herr)"],
              ["bà ấy", "bả", "sie (ältere Dame)"],
              ["cô ấy", "cổ", "sie (junge Frau)"],
              ["em ấy", "ẻm", "er/sie (jünger)"]
            ]
          },
          text: "In K02 hast du gelernt, dass die 3. Person mit Anredeterm + `ấy` gebildet wird: `anh ấy`, `bà ấy`. Im Süden **verschmelzen** die beiden Silben zu einer: Der Anredeterm erhält den Ton `hỏi`, `ấy` fällt weg. Man spricht von **Tonfusion** oder pronominaler Kontraktion:\n\n`ông ấy` → `ổng`, `bà ấy` → `bả`, `anh ấy` → `ảnh`, `chị ấy` → `chỉ`, `cô ấy` → `cổ`, `em ấy` → `ẻm`.\n\nDasselbe Muster gibt es bei Ortsangaben: `trong ấy` → `trỏng` („dort drinnen“), `ngoài ấy` → `ngoải` („dort draußen“).\n\nWeitere Pronomen:\n- `tui` – südliche Form von `tôi`; freundlich, weniger distanziert als `tôi`.\n- `mình` – „ich“ (weich, unter Freunden), inklusives „wir“ (`Mình đi nha!` – „Lass uns gehen!“) und unter Partnern auch „du“. Welche Lesart gemeint ist, zeigt der Kontext.\n\nAchtung, **Homonymie**: `chỉ` heißt auch „nur“, `ảnh` auch „Foto“. `Chỉ đi chợ.` kann im Süden „Sie geht auf den Markt“ heißen. Der Kontext löst das fast immer auf.",
          examples: [
            { vi: "Ổng là bác sĩ.", de: "Er (der ältere Herr) ist Arzt. (= Ông ấy là bác sĩ.)" },
            { vi: "Bả bán trái cây ở chợ.", de: "Sie verkauft Obst auf dem Markt. (= Bà ấy bán quả ở chợ.)" },
            { vi: "Ảnh là người Đức.", de: "Er ist Deutscher. (= Anh ấy là người Đức.)" },
            { vi: "Mình đi ăn nha!", de: "Lass uns essen gehen!" }
          ],
          contrast: "Ähnlich wie das gesprochene Deutsch „haste“ (hast du) oder „isser“ (ist er) Silben verschmilzt, kontrahiert der Süden Anredeterm und ấy – mit einer Besonderheit: Das Ergebnis trägt einen eigenen Ton (hỏi)."
        }
      ],
      dialogue: {
        setting: "Jonas und Linh an einem Obststand auf einem Markt in Sài Gòn. Die Verkäuferin Cô Ba spricht Südvietnamesisch.",
        lines: [
          { who: "Cô Ba", vi: "Hai đứa mua gì nè? Trái cây tươi lắm nha!", de: "Na, ihr zwei, was kauft ihr? Das Obst ist ganz frisch!" },
          { who: "Jonas", vi: "Cô ơi, trái này bao nhiêu tiền ạ?", de: "Entschuldigung, was kostet diese Frucht?" },
          { who: "Cô Ba", vi: "Ba chục ngàn một ký. Ngọt lắm, ăn thử hông?", de: "Dreißigtausend das Kilo. Sehr süß – willst du probieren?" },
          { who: "Jonas", vi: "Dạ, xin lỗi cô, em không hiểu.", de: "Entschuldigung, ich verstehe nicht." },
          { who: "Linh", vi: "„Hông“ là „không“, anh ạ. Cô mời anh ăn thử.", de: "„Hông“ heißt „không“. Sie lädt dich zum Probieren ein." },
          { who: "Jonas", vi: "Dạ, cảm ơn cô. Ngọt quá!", de: "Danke. Wie süß!" },
          { who: "Cô Ba", vi: "Ảnh là người nước nào vậy con?", de: "Woher kommt er denn, Kind?" },
          { who: "Linh", vi: "Dạ, ảnh là người Đức.", de: "Er ist Deutscher." },
          { who: "Cô Ba", vi: "Dễ thương quá! Mua hai ký đi, cô bớt cho nha.", de: "Wie nett! Kauft zwei Kilo, dann mache ich euch einen besseren Preis." },
          { who: "Jonas", vi: "Dạ, cho em hai ký ạ.", de: "Gut, dann zwei Kilo, bitte." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Em ăn cay được ___?", de: "Kannst du scharf essen? (Süd)", options: ["hông", "nha", "nè"], answer: "hông", explain: "hông = südliches không, hier als Fragepartikel." },
        { type: "gap", vi: "Mai gặp lại ___!", de: "Bis morgen, ja? (Süd)", options: ["nha", "hông", "vậy"], answer: "nha", explain: "nha entspricht nhé: freundliche Bitte um Zustimmung." },
        { type: "gap", vi: "___ bán trái cây ở chợ.", de: "Sie (die ältere Dame) verkauft Obst auf dem Markt. (Süd)", options: ["Bả", "Bà", "Bá"], answer: "Bả", explain: "bà ấy → bả: Kontraktion mit hỏi-Ton. bà allein hieße „Sie/die Dame“ als Anrede." },
        { type: "gap", vi: "Cho tui một ___ cà phê sữa đá.", de: "Einen Eiskaffee mit Milch für mich (im Glas).", options: ["ly", "tô", "bông"], answer: "ly", explain: "ly = Glas (Nord: cốc); tô = Schale, bông = Blume." },
        { type: "build", vi: "Tui hông ăn thịt heo.", de: "Ich esse kein Schweinefleisch. (Süd)", extra: ["lợn", "bông"] },
        { type: "build", vi: "Ổng là bác sĩ ở Sài_Gòn.", de: "Er ist Arzt in Sài Gòn. (Süd)", extra: ["ông", "bả"] },
        { type: "build", vi: "Mời anh vô nhà nha!", de: "Komm doch herein! (Süd)", extra: ["ổng", "tô"] },
        { type: "translate", de: "Er (= ông ấy) ist Arzt.", answers: ["Ông ấy là bác sĩ.", "Ổng là bác sĩ."] },
        { type: "translate", de: "Kannst du scharf essen? (südlich mit hông, zu einer jüngeren Person)", answers: ["Em ăn cay được hông?", "Em có ăn cay được hông?", "Em ăn được cay hông?"] },
        { type: "mc", q: "Welche Nordform entspricht dem südlichen „trái“?", options: ["quả", "hoa", "cốc"], answer: 0, explain: "trái = quả (Frucht). hoa entspricht bông, cốc entspricht ly." },
        { type: "mc", q: "Ein Saigoner sagt über Jonas „ảnh“. Was meint er?", options: ["anh ấy (er)", "Foto – immer", "anh (du)"], answer: 0, explain: "ảnh = anh ấy durch Tonfusion. ảnh kann zwar auch „Foto“ heißen, aber nicht in dieser Funktion." },
        { type: "mc", q: "Wie klingt „vô“ in Sài Gòn typischerweise?", options: ["[jo] (oft „dzô“ geschrieben)", "[vo] wie im Norden", "[zo] wie das nördliche d"], answer: 0, explain: "Im Süden werden v, d und gi als [j] gesprochen." },
        { type: "mc", q: "Welche zwei Töne fallen im Süden zusammen?", options: ["hỏi und ngã", "sắc und nặng", "huyền und ngang"], answer: 0, explain: "Der Süden hat fünf Töne: hỏi und ngã sind verschmolzen." },
        { type: "listen", vi: "Tui ở trong hẻm này nè.", de: "Ich wohne hier in dieser Gasse." },
        { type: "speak", vi: "Dạ, cho em một ly trà đá ạ.", de: "Ein Glas Eistee für mich, bitte." },
        { type: "pairs", pairs: [["heo", "lợn"], ["bông", "hoa"], ["trái", "quả"], ["kêu", "gọi"], ["vô", "vào"], ["má", "mẹ"]] }
      ]
    }
  ],

  // ───────────────────────────── Boss ─────────────────────────────
  boss: {
    title: "In der Apotheke in Sài Gòn",
    npc: "Chị Ngọc",
    role: "Apothekerin (dược sĩ) in einem nhà thuốc in Sài Gòn",
    setting: "Jonas hat Halsschmerzen und Fieber. Linh ist unterwegs, also geht er allein in die kleine Apotheke an der Ecke seiner Gasse. Die Apothekerin Chị Ngọc spricht Südvietnamesisch – du antwortest im Standard.",
    turns: [
      {
        npc: { vi: "Em bị sao vậy? Em cần gì nè?", de: "Was fehlt dir denn? Was brauchst du?" },
        prompt: "Sag, dass du Halsschmerzen und Fieber hast.",
        choices: [
          { vi: "Dạ, em bị đau họng và bị sốt ạ.", ok: true, fb: "Richtig: bị für Beschwerden, đau + Körperteil, höflich mit dạ … ạ." },
          { vi: "Dạ, em được đau họng và được sốt ạ.", ok: false, fb: "được ist Benefaktiv – für Erfreuliches. Krankheit ist nachteilig, also bị." },
          { vi: "Dạ, em là đau họng và sốt ạ.", ok: false, fb: "đau und sốt sind Stativ- bzw. Vollverben – kein là davor (K02)." }
        ]
      },
      {
        npc: { vi: "Em bị bệnh mấy ngày rồi?", de: "Seit wie vielen Tagen bist du krank?" },
        prompt: "Antworte: seit zwei Tagen.",
        choices: [
          { vi: "Dạ, hai ngày rồi ạ.", ok: true, fb: "Gut: Dauer bis jetzt mit … rồi (K08). bệnh ist übrigens die südliche Form von ốm." },
          { vi: "Dạ, hai ngày sau ạ.", ok: false, fb: "hai ngày sau heißt „zwei Tage später“. Eine Dauer bis jetzt drückt … rồi aus." },
          { vi: "Dạ, em sẽ bị bệnh hai ngày ạ.", ok: false, fb: "sẽ ist Futur – du kündigst an, dass du krank sein wirst." }
        ]
      },
      {
        npc: { vi: "Em có ho hông?", de: "Hustest du?" },
        prompt: "„hông“ ist südlich für „không“. Antworte: Nein, du hustest nicht.",
        choices: [
          { vi: "Dạ, em không ho ạ.", ok: true, fb: "Genau – du hast hông als Fragepartikel erkannt und mit der Standardnegation geantwortet." },
          { vi: "Dạ, có, em không ho ạ.", ok: false, fb: "Widersprüchlich: có bestätigt („ja“), dann verneinst du. Auf die Frage mit hông antwortet man mit có oder không." },
          { vi: "Dạ, em ho hông ạ.", ok: false, fb: "Mit hông am Satzende hast du die Frage nur wiederholt – das ist keine Antwort." }
        ]
      },
      {
        npc: { vi: "Vậy em uống thuốc này nha. Ngày uống ba lần.", de: "Dann nimm dieses Medikament, ja? Dreimal am Tag." },
        prompt: "Frag höflich, ob du Kaffee trinken darfst.",
        choices: [
          { vi: "Dạ, em có được uống cà phê không ạ?", ok: true, fb: "Richtig: Erlaubnisfrage mit có được … không (K09)." },
          { vi: "Dạ, em có cần uống cà phê không ạ?", ok: false, fb: "cần = nötig sein. Du fragst, ob du Kaffee trinken musst." },
          { vi: "Dạ, em biết uống cà phê không ạ?", ok: false, fb: "biết + V = gelernt haben. Ob du Kaffeetrinken kannst, weiß Chị Ngọc nicht." }
        ]
      },
      {
        npc: { vi: "Hông nên uống cà phê nha.", de: "Lieber keinen Kaffee trinken, ja?" },
        prompt: "Frag nach dem Grund.",
        choices: [
          { vi: "Dạ, tại sao em không nên uống cà phê ạ?", ok: true, fb: "Gut: tại sao steht am Satzanfang, danach die normale Wortstellung." },
          { vi: "Dạ, em không nên uống cà phê tại sao ạ?", ok: false, fb: "tại sao ist eine Ausnahme vom in-situ-Prinzip: Es steht satzinitial." },
          { vi: "Dạ, vì sao nên em không uống cà phê ạ?", ok: false, fb: "Hier vermischst du das Fragewort vì sao mit dem Konnektor nên." }
        ]
      },
      {
        npc: { vi: "Tại vì em bị sốt, em phải ngủ nhiều. Uống cà phê thì khó ngủ đó.", de: "Weil du Fieber hast, musst du viel schlafen. Mit Kaffee schläft man schlecht." },
        prompt: "Sag: Wenn ich morgen noch nicht gesund bin, gehe ich zum Arzt.",
        choices: [
          { vi: "Dạ, nếu ngày mai em chưa khỏi thì em sẽ đi khám ạ.", ok: true, fb: "Perfekt: Bedingung mit nếu … thì, Folge mit sẽ." },
          { vi: "Dạ, vì ngày mai em chưa khỏi thì em đi khám ạ.", ok: false, fb: "vì nennt einen Grund (eine Tatsache). Eine Bedingung braucht nếu – und zu thì gehört nếu, nicht vì." },
          { vi: "Dạ, nếu ngày mai em chưa khỏi nên em đi khám ạ.", ok: false, fb: "nên ist das Korrelat zu vì. Zu nếu gehört thì." }
        ]
      },
      {
        npc: { vi: "Đúng rồi. Của em tám mươi lăm ngàn nha.", de: "Genau. Das macht 85.000 Đồng." },
        prompt: "Bezahle und bedanke dich höflich.",
        choices: [
          { vi: "Dạ, em gửi chị tám mươi lăm nghìn. Em cảm ơn chị ạ.", ok: true, fb: "Sehr gut: gửi (übergeben) beim Bezahlen, Dank mit em/chị und ạ. ngàn (Süd) = nghìn (Nord)." },
          { vi: "Tám mươi lăm nghìn đắt quá! Bớt đi!", ok: false, fb: "In der Apotheke gibt es Festpreise – Handeln wie auf dem Markt (K06) wirkt hier unpassend und unhöflich." },
          { vi: "Cảm ơn mày nhé.", ok: false, fb: "mày ist grob und herabsetzend. Gegenüber der Apothekerin: chị + ạ." }
        ]
      }
    ],
    win: { vi: "Em uống thuốc rồi ngủ nhiều nha. Mau khỏe nha em!", de: "Nimm das Medikament und schlaf viel. Gute Besserung!" }
  }
});
