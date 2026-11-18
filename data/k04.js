VN.addChapter({
  id: "k04",
  place: "Ninh Bình",
  region: "Delta des Roten Flusses (Nordvietnam)",
  title: "Familie",
  intro: "Zwischen Karstkegeln und Reisfeldern liegt Ninh Bình, die Heimat von Linhs Familie. Hier lernt Jonas Linhs Bruder Nam, ihre Großmutter und schließlich ihre Eltern kennen. Du lernst Verwandtschaftsbezeichnungen mit der Unterscheidung nội/ngoại, Besitz und Existenz mit có, die ersten Klassifikatoren und wie sich die Anrede innerhalb der Familie verschiebt.",
  lessons: [
    // ───────────────────────── k04l1 ─────────────────────────
    {
      id: "k04l1",
      title: "Verwandtschaft",
      goal: "Du kannst Familienmitglieder benennen und unterscheidest ältere/jüngere Geschwister sowie väterliche und mütterliche Großeltern.",
      vocab: [
        { vi: "bố", de: "Vater", pos: "N", emoji: "👨", south: "ba", ex: { vi: "Bố là người Việt.", de: "Der Vater ist Vietnamese." } },
        { vi: "mẹ", de: "Mutter", pos: "N", emoji: "👩", south: "má", ex: { vi: "Đây là mẹ.", de: "Das ist (meine) Mutter." } },
        { vi: "ông nội", de: "Großvater väterlicherseits", pos: "N", emoji: "👴", ex: { vi: "Đây là ông nội.", de: "Das ist der Opa väterlicherseits." } },
        { vi: "bà nội", de: "Großmutter väterlicherseits", pos: "N", emoji: "👵", ex: { vi: "Bà nội là người Ninh Bình.", de: "Die Oma väterlicherseits stammt aus Ninh Bình." } },
        { vi: "ông ngoại", de: "Großvater mütterlicherseits", pos: "N", emoji: "👴", ex: { vi: "Ông ngoại là người Hà Nội.", de: "Der Opa mütterlicherseits stammt aus Hà Nội." } },
        { vi: "bà ngoại", de: "Großmutter mütterlicherseits", pos: "N", emoji: "👵", ex: { vi: "Đây là bà ngoại.", de: "Das ist die Oma mütterlicherseits." } },
        { vi: "anh trai", de: "älterer Bruder", pos: "N", ex: { vi: "Anh Minh là anh trai.", de: "Minh ist der ältere Bruder." } },
        { vi: "chị gái", de: "ältere Schwester", pos: "N", ex: { vi: "Đây là chị gái, chị Lan.", de: "Das ist die ältere Schwester, Lan." } },
        { vi: "em trai", de: "jüngerer Bruder", pos: "N", ex: { vi: "Đây là em trai. Em ấy tên là Nam.", de: "Das ist der jüngere Bruder. Er heißt Nam." } },
        { vi: "em gái", de: "jüngere Schwester", pos: "N", ex: { vi: "Em gái là người Đức.", de: "Die jüngere Schwester ist Deutsche." } },
        { vi: "vợ", de: "Ehefrau", pos: "N", ex: { vi: "Bà nội là vợ, ông nội là chồng.", de: "Die Oma ist die Ehefrau, der Opa der Ehemann." } },
        { vi: "chồng", de: "Ehemann", pos: "N", ex: { vi: "Anh ấy là chồng, chị ấy là vợ.", de: "Er ist der Ehemann, sie die Ehefrau." } },
        { vi: "con", de: "Kind (Sohn/Tochter)", pos: "N", emoji: "🧒", note: "Auch Klassifikator für Tiere (Lektion 3) und Pronomen für Kinder (Lektion 4).", ex: { vi: "Linh là con, bác Hùng là bố.", de: "Linh ist das Kind, Herr Hùng der Vater." } },
        { vi: "cháu", de: "Enkel(in); Neffe, Nichte", pos: "N", note: "Ein Wort für die Generation(en) unterhalb.", ex: { vi: "Linh là cháu nội.", de: "Linh ist Enkelin väterlicherseits." } },
        { vi: "gia đình", de: "Familie", pos: "N", emoji: "👨‍👩‍👧‍👦", note: "Sinovietnamesisch (家庭).", ex: { vi: "Bố, mẹ, con – đây là gia đình.", de: "Vater, Mutter, Kind – das ist die Familie." } },
        { vi: "đây", de: "hier; dies (hier)", pos: "Pron", note: "Deiktisch: Đây là … = „Das (hier) ist …“. Weitere Demonstrativa in K06.", ex: { vi: "Đây là ai?", de: "Wer ist das?" } }
      ],
      grammar: [
        {
          id: "g-k04-geschwister",
          title: "Alter vor Geschlecht: Geschwisterbezeichnungen",
          term: "Komposition Verwandtschaftsterm + Geschlechtsmodifikator (Kopf links)",
          pattern: "Verwandtschaftsterm + trai / gái",
          text: `Das vietnamesische Verwandtschaftssystem kodiert zuerst das **relative Alter** (Seniorität) und erst in zweiter Linie das Geschlecht:

- \`anh\` = älterer Bruder, \`chị\` = ältere Schwester – hier ist das Geschlecht schon enthalten.
- \`em\` = jüngeres Geschwister – **geschlechtsneutral**.

Will man das Geschlecht ausdrücklich nennen, hängt man den Modifikator \`trai\` (männlich) oder \`gái\` (weiblich) an: \`em trai\`, \`em gái\`. Bei \`anh\` und \`chị\` ist das eigentlich redundant, aber üblich, um sie vom Pronomen zu unterscheiden: \`anh trai\`, \`chị gái\`. Genauso bildet man \`con trai\` (Sohn) und \`con gái\` (Tochter).

Strukturell sind das **Komposita mit Kopf links**: Der Kopf (\`em\` „Jüngeres“) bestimmt die Kategorie, der rechte Teil (\`trai\`) modifiziert ihn. Das ist die Grundregel der nativen vietnamesischen Wortbildung.

Der Sammelbegriff für Geschwister lautet \`anh chị em\` („ältere Brüder, ältere Schwestern, Jüngere“) – eine Koordination durch reine Juxtaposition.

Viele dieser Wörter kennst du schon als **Anredepronomen** (K02): \`anh\`, \`chị\`, \`em\` sind ursprünglich Verwandtschaftsterme, die auf Nicht-Verwandte übertragen werden.`,
          table: {
            head: ["Vietnamesisch", "Kopf", "Modifikator", "Deutsch"],
            rows: [
              ["anh trai", "anh (älter, m.)", "trai", "älterer Bruder"],
              ["chị gái", "chị (älter, w.)", "gái", "ältere Schwester"],
              ["em trai", "em (jünger)", "trai", "jüngerer Bruder"],
              ["em gái", "em (jünger)", "gái", "jüngere Schwester"],
              ["con trai", "con (Kind)", "trai", "Sohn"],
              ["con gái", "con (Kind)", "gái", "Tochter"]
            ]
          },
          examples: [
            { vi: "Đây là em trai.", de: "Das ist der jüngere Bruder.", gloss: "hier | sein | jünger | männlich" },
            { vi: "Chị Lan là chị gái.", de: "Lan ist die ältere Schwester." },
            { vi: "Đây là ai? – Đây là em gái.", de: "Wer ist das? – Das ist die jüngere Schwester." },
            { vi: "Anh Minh không phải là em trai. Anh Minh là anh trai.", de: "Minh ist nicht der jüngere, sondern der ältere Bruder." }
          ],
          contrast: "Das Deutsche hat „Bruder“ und „Schwester“, unterscheidet also nach Geschlecht, aber nicht nach Alter. Im Vietnamesischen ist es umgekehrt: Ohne Altersangabe kann man ein Geschwister gar nicht benennen. Außerdem steht der Kopf links, im deutschen Kompositum rechts (Haus-*tür*)."
        },
        {
          id: "g-k04-noi-ngoai",
          title: "nội und ngoại: Vaterseite und Mutterseite",
          term: "Lineare Unterscheidung patrilinear (nội) vs. matrilinear (ngoại)",
          pattern: "ông / bà / cháu + nội / ngoại",
          text: `Großeltern und Enkel werden danach unterschieden, über **welchen Elternteil** die Verwandtschaft läuft. Die Modifikatoren stammen aus dem Sinovietnamesischen:

- \`nội\` (內 „innen“) = **väterlicherseits**: \`ông nội\`, \`bà nội\`.
- \`ngoại\` (外 „außen“) = **mütterlicherseits**: \`ông ngoại\`, \`bà ngoại\`.

Die Bildsprache spiegelt das traditionell **patrilineare** Familienmodell wider: Die Frau zieht in die Familie des Mannes; seine Seite ist „innen“, ihre „außen“. Auch die Seiten selbst heißen so: \`bên nội\` (Vaterseite), \`bên ngoại\` (Mutterseite). Umgekehrt ist Linh für die Eltern ihres Vaters \`cháu nội\`, für die Eltern ihrer Mutter \`cháu ngoại\`.

Auch Onkel und Tanten werden nach Seite und Alter unterschieden. Im Norden gilt:

- \`bác\` = älteres Geschwister von Vater **oder** Mutter (und dessen Ehepartner)
- \`chú\` = jüngerer Bruder des Vaters, \`cô\` = jüngere Schwester des Vaters
- \`cậu\` = jüngerer Bruder der Mutter, \`dì\` = jüngere Schwester der Mutter

Wichtig für Ninh Bình: Weil \`bác\` die Generation der Eltern mit einem Plus an Seniorität bezeichnet, spricht man auch nicht verwandte Personen im Alter der eigenen Eltern respektvoll mit \`bác\` an – so wird Jonas Linhs Eltern nennen.`,
          table: {
            head: ["", "Vaterseite (nội)", "Mutterseite (ngoại)"],
            rows: [
              ["Großvater", "ông nội", "ông ngoại"],
              ["Großmutter", "bà nội", "bà ngoại"],
              ["Enkel aus Sicht der Großeltern", "cháu nội", "cháu ngoại"],
              ["jüngerer Onkel", "chú", "cậu"],
              ["jüngere Tante", "cô", "dì"],
              ["älterer Onkel / ältere Tante", "bác", "bác"]
            ]
          },
          examples: [
            { vi: "Đây là ông bà nội.", de: "Das sind die Großeltern väterlicherseits.", gloss: "hier | sein | Großvater | Großmutter | innen" },
            { vi: "Ông bà ngoại là người Hà Nội.", de: "Die Großeltern mütterlicherseits stammen aus Hà Nội." },
            { vi: "Ông bà nội – bên bố.", de: "Die Großeltern „nội“ – Vaterseite." },
            { vi: "Linh là cháu ngoại.", de: "Linh ist Enkelin mütterlicherseits." }
          ],
          contrast: "Im Deutschen ist „Oma“ einfach „Oma“; man präzisiert höchstens umständlich („die Mutter meiner Mutter“). Vietnamesisch zwingt dazu, die Linie lexikalisch zu markieren – ähnlich wie das Schwedische (farmor / mormor).",
          south: "Süd: ba/má für Vater/Mutter; Onkel und Tanten werden teils anders verteilt (z. B. bác seltener, oft chú/cô bzw. cậu/dì unabhängig vom Alter)."
        }
      ],
      dialogue: {
        setting: "Im Taxi nach Ninh Bình zeigt Linh Jonas auf dem Handy Familienfotos.",
        lines: [
          { who: "Linh", vi: "Anh Jonas, đây là ông bà nội.", de: "Jonas, das sind meine Großeltern väterlicherseits." },
          { who: "Jonas", vi: "Ông bà nội – bên bố, phải không?", de: "„Nội“ – das ist die Vaterseite, oder?" },
          { who: "Linh", vi: "Vâng. Đây là ông bà ngoại – bên mẹ.", de: "Ja. Und das sind die Großeltern mütterlicherseits – Mutterseite." },
          { who: "Jonas", vi: "Đây là ai?", de: "Wer ist das?" },
          { who: "Linh", vi: "Đây là em trai. Em ấy tên là Nam.", de: "Das ist mein jüngerer Bruder. Er heißt Nam." },
          { who: "Jonas", vi: "Đây là chị gái, phải không?", de: "Und das ist deine ältere Schwester, oder?" },
          { who: "Linh", vi: "Không phải chị gái! Đây là mẹ!", de: "Doch nicht meine Schwester! Das ist meine Mutter!" },
          { who: "Jonas", vi: "Mẹ? Ôi, xin lỗi!", de: "Deine Mutter? Oh, Entschuldigung!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "jüngerer Bruder = em ___", de: "jüngerer Bruder", options: ["trai", "gái", "anh"], answer: "trai", explain: "em ist geschlechtsneutral; trai präzisiert „männlich“." },
        { type: "gap", vi: "ältere Schwester = ___ gái", de: "ältere Schwester", options: ["chị", "em", "anh"], answer: "chị", explain: "chị = älteres weibliches Geschwister. em gái wäre die jüngere Schwester." },
        { type: "gap", vi: "Großvater mütterlicherseits = ông ___", de: "Opa mütterlicherseits", options: ["ngoại", "nội", "trai"], answer: "ngoại", explain: "ngoại („außen“) = Mutterseite, nội („innen“) = Vaterseite." },
        { type: "gap", vi: "Ông bà nội: bên ___", de: "Die Großeltern „nội“: Seite des …", options: ["bố", "mẹ", "con"], answer: "bố", explain: "nội bezeichnet die väterliche Linie – im traditionell patrilinearen System die „innere“ Familie." },
        { type: "build", vi: "Đây là ông bà ngoại.", de: "Das sind die Großeltern mütterlicherseits.", extra: ["nội", "ai"] },
        { type: "build", vi: "Đây là ai? Đây là em trai.", de: "Wer ist das? Das ist der jüngere Bruder.", extra: ["gái", "nội"] },
        { type: "build", vi: "Bà nội là người Việt.", de: "Die Oma väterlicherseits ist Vietnamesin.", extra: ["ngoại", "ông"] },
        { type: "translate", de: "Das ist die Oma väterlicherseits.", answers: ["Đây là bà nội."] },
        { type: "translate", de: "Die Großeltern mütterlicherseits sind Vietnamesen.", answers: ["Ông bà ngoại là người Việt.", "Ông bà ngoại là người Việt Nam."] },
        { type: "mc", q: "Linh hat einen jüngeren Bruder. Wie heißt er als Verwandter?", options: ["em trai", "anh trai", "em gái"], answer: 0, explain: "jünger = em, männlich = trai." },
        { type: "mc", q: "Wer ist `bà nội`?", options: ["die Mutter des Vaters", "die Mutter der Mutter", "die ältere Schwester"], answer: 0, explain: "nội = väterliche Linie. Die Mutter der Mutter ist bà ngoại." },
        { type: "mc", q: "Was kann `cháu` bedeuten?", options: ["Enkel, Neffe oder Nichte", "nur Sohn", "nur ältere Schwester"], answer: 0, explain: "cháu deckt die nachfolgenden Generationen außer den eigenen Kindern (con) ab." },
        { type: "listen", vi: "Đây là ông bà nội, bên bố.", de: "Das sind die Großeltern väterlicherseits, Vaterseite." },
        { type: "speak", vi: "Đây là bố mẹ.", de: "Das sind (meine) Eltern." },
        { type: "pairs", pairs: [["vợ", "Ehefrau"], ["chồng", "Ehemann"], ["con", "Kind"], ["cháu", "Enkel"], ["gia đình", "Familie"]] }
      ]
    },

    // ───────────────────────── k04l2 ─────────────────────────
    {
      id: "k04l2",
      title: "có: Besitz & Existenz",
      goal: "Du kannst sagen, was du hast und nicht hast, danach fragen und Besitz ausdrücken.",
      vocab: [
        { vi: "có", de: "haben; es gibt; vorhanden sein", pos: "V", ex: { vi: "Tôi có một em gái.", de: "Ich habe eine jüngere Schwester." } },
        { vi: "của", de: "von (Besitz, Zugehörigkeit)", pos: "Präp", ex: { vi: "Đây là xe máy của bố.", de: "Das ist Vaters Motorrad." } },
        { vi: "nhà", de: "Haus; Zuhause; Familie", pos: "N", emoji: "🏠", ex: { vi: "Nhà bà nội có chó.", de: "Bei Oma gibt es einen Hund." } },
        { vi: "xe máy", de: "Motorrad, Moped", pos: "N", emoji: "🛵", ex: { vi: "Nam có xe máy không?", de: "Hat Nam ein Moped?" } },
        { vi: "điện thoại", de: "Telefon, Handy", pos: "N", emoji: "📱", ex: { vi: "Đây là điện thoại của tôi.", de: "Das ist mein Handy." } },
        { vi: "ảnh", de: "Foto", pos: "N", emoji: "📷", south: "hình", ex: { vi: "Linh có ảnh gia đình.", de: "Linh hat Familienfotos." } },
        { vi: "sách", de: "Buch", pos: "N", emoji: "📖", ex: { vi: "Đây là sách của Linh.", de: "Das ist Linhs Buch." } },
        { vi: "quà", de: "Geschenk", pos: "N", emoji: "🎁", ex: { vi: "Đây là quà của Jonas.", de: "Das ist Jonas' Geschenk." } },
        { vi: "con trai", de: "Sohn", pos: "N", emoji: "👦", ex: { vi: "Bác Hùng có một con trai.", de: "Herr Hùng hat einen Sohn." } },
        { vi: "con gái", de: "Tochter", pos: "N", emoji: "👧", ex: { vi: "Linh là con gái bác Hùng.", de: "Linh ist die Tochter von Herrn Hùng." } },
        { vi: "anh chị em", de: "Geschwister", pos: "N", ex: { vi: "Anh có anh chị em không?", de: "Hast du Geschwister?" } },
        { vi: "bạn trai", de: "fester Freund", pos: "N", ex: { vi: "Chị có bạn trai không?", de: "Hast du einen Freund?" } },
        { vi: "bạn gái", de: "feste Freundin", pos: "N", ex: { vi: "Linh là bạn gái anh Jonas.", de: "Linh ist Jonas' Freundin." } },
        { vi: "người yêu", de: "Partner(in), Liebste(r)", pos: "N", emoji: "❤️", note: "Wörtlich „Mensch, den man liebt“.", ex: { vi: "Jonas là người yêu của Linh.", de: "Jonas ist Linhs Partner." } },
        { vi: "chó", de: "Hund", pos: "N", emoji: "🐕", ex: { vi: "Bà nội không có chó.", de: "Oma hat keinen Hund." } },
        { vi: "có nhà", de: "zu Hause sein", pos: "Phr", note: "Wörtlich „Haus haben“ – Existenz am Ort.", ex: { vi: "Mẹ có nhà không?", de: "Ist Mama zu Hause?" } }
      ],
      grammar: [
        {
          id: "g-k04-co",
          title: "có – haben und es gibt",
          term: "Possessiv- und Existenzverb có",
          pattern: "S + (không) có + N  |  S + có + N + không?",
          text: `\`có\` ist ein Vollverb mit zwei eng verwandten Bedeutungen:

- **Besitz** („haben“): \`Tôi có xe máy.\` – Ich habe ein Moped.
- **Existenz** („es gibt / vorhanden sein“): \`Nhà bà nội có chó.\` – Bei Oma (wörtlich: Omas Haus) gibt es einen Hund. Hier ist das Satzsubjekt ein Ort; mehr dazu in K10.

Verneint wird wie jedes Verb mit vorangestelltem \`không\`: \`Tôi không có xe máy.\` Die Kopula-Negation \`không phải\` ist hier **falsch** (*Tôi không phải có …*), denn \`có\` ist kein \`là\`.

Die Ja/Nein-Frage folgt dem Rahmen aus K02: \`Anh có xe máy không?\` Geantwortet wird mit dem Verb selbst: \`Có.\` bzw. \`Không (có).\`

Achte auf den Unterschied zu K02: Dort stand \`có\` als **Affirmationspartikel** vor einem anderen Verb (\`Anh có khỏe không?\`). Hier ist \`có\` selbst das Prädikat und hat ein Objekt.

Weil Nomen keinen Numerus markieren, ist \`Tôi có anh chị em\` neutral: Ein oder mehrere Geschwister. Mit Zahl werden Verwandte und Personen direkt gezählt: \`Tôi có một em gái.\`, \`Chị ấy có hai con.\`

Idiomatisch: \`Mẹ có nhà không?\` – „Ist Mama zu Hause?“ (wörtlich: „Hat Mama Haus?“).`,
          examples: [
            { vi: "Anh có anh chị em không?", de: "Hast du Geschwister?", gloss: "du | haben | Geschwister | nicht" },
            { vi: "Có. Tôi có một chị gái.", de: "Ja. Ich habe eine ältere Schwester." },
            { vi: "Em không có xe máy.", de: "Ich habe kein Moped." },
            { vi: "Nhà bà nội có chó.", de: "Bei Oma gibt es einen Hund.", gloss: "Haus | Oma | haben | Hund" }
          ],
          contrast: "Deutsch trennt „haben“ (Besitz) und „es gibt“ (Existenz); Vietnamesisch nutzt für beides có – wie das Französische „il y a“ / „avoir“ zusammenfällt. „Nicht haben“ wird mit không vor dem Verb gebildet, nicht mit „kein“ vor dem Nomen."
        },
        {
          id: "g-k04-possession",
          title: "Possession: mẹ tôi oder mẹ của tôi?",
          term: "Adnominale Possession durch Juxtaposition bzw. Präposition của",
          pattern: "N (Besitztum) + (của) + Besitzer",
          text: `Der Besitzer steht im Vietnamesischen **nach** dem Besessenen – wie ein Genitivattribut. Es gibt zwei Konstruktionen:

**1. Juxtaposition** (bloßes Nebeneinander): \`mẹ tôi\` „meine Mutter“, \`nhà Linh\` „Linhs Haus/Familie“, \`bố em\` „mein Vater“ (wenn der Sprecher sich \`em\` nennt). Das ist der **Normalfall bei Verwandten**, Körperteilen und engen Zugehörigkeiten – also bei **inalienabler** (unveräußerlicher) Possession.

**2. Mit \`của\`** („Besitz von“): \`sách của tôi\` „mein Buch“. \`của\` wird gewählt,

- wenn es um **veräußerlichen Besitz** (Gegenstände) geht und der Besitz betont wird,
- bei **Kontrast**: \`Đây là xe máy của bố, không phải của em.\`
- wenn die Phrase ohne \`của\` **mehrdeutig** wäre: \`ảnh Linh\` kann „Linhs Foto“ oder „ein Foto von Linh“ sein; \`ảnh của Linh\` ist eindeutig „Linh gehört es“.

\`mẹ của tôi\` ist nicht falsch, klingt aber distanziert oder kontrastiv („*meine* Mutter, nicht deine“). Umgekehrt ist \`sách tôi\` möglich, aber umgangssprachlich.

Da Pronomen relational sind (K02), richtet sich die Besitzerform nach dem Gesprächspartner: Linh sagt zu Jonas \`bố em\`, zu ihrem Bruder \`bố chị\` – beides heißt „mein Vater“.`,
          table: {
            head: ["Typ", "Beispiel", "Deutsch"],
            rows: [
              ["Juxtaposition (Verwandte)", "mẹ tôi", "meine Mutter"],
              ["Juxtaposition (Name)", "nhà Linh", "Linhs Zuhause"],
              ["của (Gegenstand)", "xe máy của bố", "Vaters Moped"],
              ["của (Kontrast)", "của tôi, không phải của anh", "meins, nicht deins"]
            ]
          },
          examples: [
            { vi: "Mẹ tôi là người Ninh Bình.", de: "Meine Mutter stammt aus Ninh Bình.", gloss: "Mutter | ich | sein | Mensch | Ninh_Bình" },
            { vi: "Đây là xe máy của bố em.", de: "Das ist das Moped meines Vaters." },
            { vi: "Linh là con gái bác Hùng.", de: "Linh ist die Tochter von Herrn Hùng." },
            { vi: "Đây không phải là điện thoại của tôi.", de: "Das ist nicht mein Handy." }
          ],
          contrast: "Im Deutschen steht das Possessivum vor dem Nomen („*meine* Mutter“), der Genitiv meist danach („die Mutter *Linhs*“). Vietnamesisch kennt nur die Nachstellung – `mẹ tôi` ist wörtlich „Mutter ich“. Ein eigenes Possessivpronomen („mein“) gibt es nicht."
        }
      ],
      dialogue: {
        setting: "Ankunft in Ninh Bình. Linhs jüngerer Bruder Nam (24) holt die beiden mit dem Moped vom Bus ab.",
        lines: [
          { who: "Nam", vi: "Chào anh Jonas! Em là Nam, em trai chị Linh.", de: "Hallo Jonas! Ich bin Nam, Linhs jüngerer Bruder." },
          { who: "Jonas", vi: "Chào em! Đây là xe máy của em, phải không?", de: "Hallo! Ist das dein Moped?" },
          { who: "Nam", vi: "Không phải. Đây là xe máy của bố em.", de: "Nein. Das ist das Moped meines Vaters." },
          { who: "Jonas", vi: "Em có xe máy không?", de: "Hast du ein Moped?" },
          { who: "Nam", vi: "Không, em không có. Anh có anh chị em không?", de: "Nein, habe ich nicht. Hast du Geschwister?" },
          { who: "Jonas", vi: "Có. Anh có một chị gái. Chị ấy có hai con.", de: "Ja. Ich habe eine ältere Schwester. Sie hat zwei Kinder." },
          { who: "Linh", vi: "Nam, mẹ có nhà không?", de: "Nam, ist Mama zu Hause?" },
          { who: "Nam", vi: "Có, bố mẹ có nhà.", de: "Ja, Papa und Mama sind zu Hause." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Tôi ___ một em gái.", de: "Ich habe eine jüngere Schwester.", options: ["có", "là", "của"], answer: "có", explain: "Besitz wird mit dem Vollverb có ausgedrückt. là würde gleichsetzen: „Ich bin eine Schwester“." },
        { type: "gap", vi: "Đây là xe máy ___ tôi.", de: "Das ist mein Moped.", options: ["của", "có", "là"], answer: "của", explain: "Bei Gegenständen markiert của den Besitzer, der nach dem Besitztum steht." },
        { type: "gap", vi: "Anh có xe máy ___?", de: "Hast du ein Moped?", options: ["không", "là", "của"], answer: "không", explain: "Ja/Nein-Frage: S + có + N + không?" },
        { type: "gap", vi: "Tôi ___ có anh trai.", de: "Ich habe keinen älteren Bruder.", options: ["không", "không phải", "là"], answer: "không", explain: "có ist ein Verb und wird mit không verneint. không phải verneint nur die Kopula là." },
        { type: "build", vi: "Mẹ tôi là người Ninh_Bình.", de: "Meine Mutter stammt aus Ninh Bình.", extra: ["gì", "có"] },
        { type: "build", vi: "Anh có anh chị em không?", de: "Hast du Geschwister?", extra: ["là", "gì"] },
        { type: "build", vi: "Đây là quà của tôi.", de: "Das ist mein Geschenk.", extra: ["có", "gì"] },
        { type: "translate", de: "Hast du (anh) ein Moped?", answers: ["Anh có xe máy không?"] },
        { type: "translate", de: "Ich habe keine Geschwister.", answers: ["Tôi không có anh chị em.", "Em không có anh chị em.", "Anh không có anh chị em.", "Cháu không có anh chị em."] },
        { type: "translate", de: "Linhs Vater ist Vietnamese.", answers: ["Bố Linh là người Việt.", "Bố của Linh là người Việt.", "Bố Linh là người Việt Nam.", "Bố của Linh là người Việt Nam."] },
        { type: "mc", q: "Welche Form ist für „meine Mutter“ am natürlichsten?", options: ["mẹ tôi", "mẹ của tôi", "tôi mẹ"], answer: 0, explain: "Verwandte stehen meist in Juxtaposition. mẹ của tôi ist möglich, klingt aber kontrastiv/distanziert; tôi mẹ hat die falsche Reihenfolge." },
        { type: "mc", q: "Wie verneint man `Tôi có xe máy`?", options: ["Tôi không có xe máy.", "Tôi không phải có xe máy.", "Tôi có không xe máy."], answer: 0, explain: "Negation steht direkt vor dem Verb có. không phải gehört nur zu là." },
        { type: "listen", vi: "Em không có xe máy.", de: "Ich habe kein Moped." },
        { type: "speak", vi: "Anh có anh chị em không?", de: "Hast du Geschwister?" },
        { type: "pairs", pairs: [["con trai", "Sohn"], ["con gái", "Tochter"], ["bạn gái", "Freundin"], ["người yêu", "Partner(in)"], ["quà", "Geschenk"]] }
      ]
    },

    // ───────────────────────── k04l3 ─────────────────────────
    {
      id: "k04l3",
      title: "Klassifikatoren I",
      goal: "Du kannst Personen, Tiere und Gegenstände mit dem passenden Klassifikator zählen und danach fragen.",
      vocab: [
        { vi: "con", de: "Klassifikator für Tiere (und Bewegtes)", pos: "CL", ex: { vi: "Bà có hai con trâu.", de: "Oma hat zwei Wasserbüffel." } },
        { vi: "cái", de: "Klassifikator für unbelebte Gegenstände", pos: "CL", ex: { vi: "Nhà bà có ba cái bàn.", de: "Bei Oma gibt es drei Tische." } },
        { vi: "người", de: "Klassifikator für Menschen", pos: "CL", ex: { vi: "Jonas có ba người bạn Việt Nam.", de: "Jonas hat drei vietnamesische Freunde." } },
        { vi: "quyển", de: "Klassifikator für Bücher, Hefte", pos: "CL", south: "cuốn", ex: { vi: "Linh có năm quyển sách tiếng Đức.", de: "Linh hat fünf deutsche Bücher." } },
        { vi: "chiếc", de: "Klassifikator für Einzelstücke, Fahrzeuge", pos: "CL", ex: { vi: "Bố có một chiếc xe máy.", de: "Papa hat ein Moped." } },
        { vi: "những", de: "Pluralmarker (eine Teilmenge, „einige“)", pos: "Part", ex: { vi: "Đây là những quyển sách tiếng Việt.", de: "Das sind (einige) vietnamesische Bücher." } },
        { vi: "các", de: "Pluralmarker (alle einer bestimmten Gruppe)", pos: "Part", ex: { vi: "Chào các bạn!", de: "Hallo zusammen (an euch alle)!" } },
        { vi: "mèo", de: "Katze", pos: "N", emoji: "🐈", cls: "con", ex: { vi: "Bà có một con mèo.", de: "Oma hat eine Katze." } },
        { vi: "gà", de: "Huhn", pos: "N", emoji: "🐔", cls: "con", ex: { vi: "Bà nội có mười con gà.", de: "Oma hat zehn Hühner." } },
        { vi: "trâu", de: "Wasserbüffel", pos: "N", emoji: "🐃", cls: "con", ex: { vi: "Nhà ông bà có hai con trâu.", de: "Bei den Großeltern gibt es zwei Wasserbüffel." } },
        { vi: "thuyền", de: "Boot", pos: "N", emoji: "🛶", cls: "chiếc", note: "Auch con thuyền (Boot als „Bewegtes“).", ex: { vi: "Chúng tôi có một chiếc thuyền.", de: "Wir haben ein Boot." } },
        { vi: "bàn", de: "Tisch", pos: "N", cls: "cái", ex: { vi: "Đây là cái bàn của ông.", de: "Das ist Opas Tisch." } },
        { vi: "ghế", de: "Stuhl", pos: "N", emoji: "🪑", cls: "cái", ex: { vi: "Nhà có bốn cái ghế.", de: "Im Haus gibt es vier Stühle." } },
        { vi: "bạn", de: "Freund(in)", pos: "N", cls: "người", ex: { vi: "Tôi có một người bạn Việt Nam.", de: "Ich habe einen vietnamesischen Freund." } },
        { vi: "xe đạp", de: "Fahrrad", pos: "N", emoji: "🚲", cls: "chiếc", ex: { vi: "Nam có một chiếc xe đạp.", de: "Nam hat ein Fahrrad." } },
        { vi: "nón", de: "Hut; nón lá = Kegelhut", pos: "N", cls: "chiếc", note: "Nord: mũ = Kappe, Helm; im Süden heißt auch der Helm nón.", ex: { vi: "Mẹ có hai chiếc nón lá.", de: "Mama hat zwei Kegelhüte." } }
      ],
      grammar: [
        {
          id: "g-k04-klassifikatoren",
          title: "Zählen mit Klassifikatoren",
          term: "Numeralklassifikator (Zählwort)",
          pattern: "Num + CL + N",
          text: `Vietnamesisch ist eine **Klassifikatorsprache**: Zwischen Zahl und Nomen steht ein **Numeralklassifikator**, der das Gezählte einer semantischen Klasse zuordnet. Nomen bezeichnen nämlich zunächst nur eine *Art* (\`mèo\` = „Katze als solche“); erst der Klassifikator macht daraus zählbare Einzelexemplare.

Die wichtigsten:

- \`con\` – **Tiere** (\`con mèo\`, \`con trâu\`) und manches „Bewegte“ (\`con thuyền\`).
- \`cái\` – **unbelebte Gegenstände** allgemein (\`cái bàn\`, \`cái ghế\`).
- \`chiếc\` – **Einzelstücke**, Fahrzeuge und Dinge, die man aus einem Paar herausgreift (\`chiếc xe đạp\`, \`chiếc nón\`); oft etwas gehobener als \`cái\`.
- \`người\` – **Menschen** in neutraler Sicht (\`một người bạn\`).
- \`quyển\` (Süd \`cuốn\`) – **Bücher**, Hefte.

Fragen: \`mấy\` oder \`bao nhiêu\` nehmen die Zahlposition ein, der Klassifikator bleibt: \`Bà có mấy con trâu?\`

**Numerus ist unmarkiert**: \`mèo\` heißt „Katze“ oder „Katzen“. Ohne Zahl ist auch kein Klassifikator nötig, wenn man generisch spricht (\`Bà có mèo.\` – „Oma hat Katze(n)“).

**Keinen Klassifikator** brauchen Maß- und Zeiteinheiten (\`hai đêm\`, \`ba ngày\`, \`năm trăm nghìn đồng\`, K03) sowie Verwandtschaftsterme in Familienkontexten (\`hai con\`, \`một em gái\`). Achtung: \`con\` vor Menschen statt \`người\` wirkt herablassend oder abwertend.`,
          table: {
            head: ["CL", "Klasse", "Beispiel"],
            rows: [
              ["con", "Tiere, Bewegtes", "hai con mèo"],
              ["cái", "Gegenstände allgemein", "ba cái bàn"],
              ["chiếc", "Einzelstücke, Fahrzeuge", "một chiếc xe đạp"],
              ["người", "Menschen", "một người bạn"],
              ["quyển / cuốn", "Bücher, Hefte", "năm quyển sách"]
            ]
          },
          examples: [
            { vi: "Bà có hai con trâu.", de: "Oma hat zwei Wasserbüffel.", gloss: "Oma | haben | zwei | CL(Tier) | Büffel" },
            { vi: "Nhà có bốn cái ghế.", de: "Im Haus gibt es vier Stühle.", gloss: "Haus | haben | vier | CL(Ding) | Stuhl" },
            { vi: "Anh có mấy quyển sách?", de: "Wie viele Bücher hast du?" },
            { vi: "Tôi có một người bạn Việt Nam.", de: "Ich habe einen vietnamesischen Freund." }
          ],
          contrast: "Das Deutsche kennt Klassifikatoren nur bei Stoffnamen und als Option: „zwei *Stück* Kuchen“, „drei *Blatt* Papier“, „fünf *Kopf* Vieh“. Im Vietnamesischen ist das Zählwort bei fast allen zählbaren Nomen Pflicht – dafür entfällt die Pluralendung (zwei Katze*n*)."
        },
        {
          id: "g-k04-nhung-cac",
          title: "những und các: Plural, wenn nötig",
          term: "Pluralmarker (Quantoren) những / các",
          pattern: "những / các + (CL) + N",
          text: `Wenn man Mehrzahl ausdrücklich markieren will, ohne eine Zahl zu nennen, stehen \`những\` und \`các\` **vor** dem Nomen bzw. vor dem Klassifikator – also an der Stelle der Zahl.

- \`các\` bezeichnet die **Gesamtheit** einer bestimmten, abgegrenzten Menge: \`các bạn\` „ihr (alle)“, \`các con\` „(alle) meine Kinder“. Es ist darum typisch für die **Anrede einer Gruppe**: \`Chào các bạn!\`
- \`những\` greift eine **Teilmenge** heraus oder betont die Vielzahl einzelner Exemplare: \`Đây là những quyển sách tiếng Việt.\` „Das sind (ein paar) vietnamesische Bücher.“ \`những\` erscheint häufig, wenn das Nomen näher bestimmt wird.

Beide sind mit Zahlen **unverträglich**: *những hai con mèo ist falsch. Und sie sind nie Pflicht – \`Bà có hai con mèo\` ist durch die Zahl schon eindeutig plural.

Merksatz: \`các\` = „alle (die gemeint sind)“, \`những\` = „einige, mehrere (davon)“.`,
          table: {
            head: ["Phrase", "Deutung"],
            rows: [
              ["các bạn", "ihr alle (Anrede an die Gruppe)"],
              ["những người bạn", "(einige) Freunde"],
              ["các con", "alle Kinder (einer Familie)"],
              ["những quyển sách", "(mehrere) Bücher"]
            ]
          },
          examples: [
            { vi: "Chào các bạn!", de: "Hallo zusammen!", gloss: "grüßen | PL(alle) | Freund" },
            { vi: "Đây là những quyển sách tiếng Việt.", de: "Das sind vietnamesische Bücher.", gloss: "hier | sein | PL | CL(Buch) | Buch | Sprache | Viet" },
            { vi: "Các con bác Hùng khỏe.", de: "Den Kindern von Herrn Hùng geht es (allen) gut." }
          ],
          contrast: "Im Deutschen ist Plural Pflicht und wird am Nomen markiert („Bücher“). Vietnamesisch markiert Plural nur, wenn es kommunikativ wichtig ist – und unterscheidet dann zusätzlich zwischen Gesamt- und Teilmenge, was das Deutsche mit „die“ vs. „einige“ ausdrücken müsste."
        }
      ],
      dialogue: {
        setting: "Auf dem Hof von Linhs Großmutter väterlicherseits (Bà nội) am Rand von Tam Cốc. Bà nội zeigt Jonas die Tiere.",
        lines: [
          { who: "Bà nội", vi: "Cháu Jonas, đây là nhà bà.", de: "Jonas, mein Junge, das ist mein Haus." },
          { who: "Jonas", vi: "Dạ. Bà có mấy con trâu ạ?", de: "Ja. Wie viele Wasserbüffel haben Sie?" },
          { who: "Bà nội", vi: "Bà có hai con trâu, mười con gà.", de: "Ich habe zwei Büffel und zehn Hühner." },
          { who: "Jonas", vi: "Bà có chó không ạ?", de: "Haben Sie einen Hund?" },
          { who: "Bà nội", vi: "Không có. Bà có một con mèo.", de: "Nein. Ich habe eine Katze." },
          { who: "Linh", vi: "Bà, đây là hai quyển sách ảnh – quà của anh Jonas.", de: "Oma, das sind zwei Bildbände – ein Geschenk von Jonas." },
          { who: "Bà nội", vi: "Hai quyển sách! Cảm ơn cháu.", de: "Zwei Bücher! Danke dir." },
          { who: "Jonas", vi: "Dạ, sách ảnh Berlin ạ.", de: "Bitte, das sind Bildbände über Berlin." }
        ]
      },
      exercises: [
        { type: "gap", vi: "hai ___ mèo", de: "zwei Katzen", options: ["con", "cái", "người"], answer: "con", explain: "Tiere werden mit con gezählt." },
        { type: "gap", vi: "ba ___ bàn", de: "drei Tische", options: ["cái", "con", "quyển"], answer: "cái", explain: "Unbelebte Gegenstände: cái." },
        { type: "gap", vi: "một ___ bạn", de: "ein Freund", options: ["người", "con", "cái"], answer: "người", explain: "Menschen: người. con vor Menschen wirkt abwertend." },
        { type: "gap", vi: "hai ___ sách", de: "zwei Bücher", options: ["quyển", "con", "người"], answer: "quyển", explain: "Bücher: quyển (Süd: cuốn)." },
        { type: "gap", vi: "Chào ___ bạn!", de: "Hallo zusammen (an alle)!", options: ["các", "những", "mấy"], answer: "các", explain: "các umfasst die ganze angesprochene Gruppe – typisch für die Anrede." },
        { type: "build", vi: "Bà có hai con trâu.", de: "Oma hat zwei Wasserbüffel.", extra: ["cái", "người"] },
        { type: "build", vi: "Jonas có ba người bạn Việt_Nam.", de: "Jonas hat drei vietnamesische Freunde.", extra: ["con", "cái"] },
        { type: "build", vi: "Anh có mấy quyển sách?", de: "Wie viele Bücher hast du?", extra: ["con", "cái"] },
        { type: "translate", de: "Ich habe zwei Katzen.", answers: ["Tôi có hai con mèo.", "Em có hai con mèo.", "Anh có hai con mèo.", "Chị có hai con mèo."] },
        { type: "translate", de: "Wie viele Bücher hast du (chị)?", answers: ["Chị có mấy quyển sách?", "Chị có bao nhiêu quyển sách?", "Chị có mấy cuốn sách?", "Chị có bao nhiêu cuốn sách?"] },
        { type: "mc", q: "Welcher Klassifikator passt zu `trâu` (Wasserbüffel)?", vi: "hai ___ trâu", options: ["con", "cái", "chiếc"], answer: 0, explain: "Lebewesen (außer Menschen) werden mit con gezählt." },
        { type: "mc", q: "Welcher Satz ist korrekt?", options: ["Tôi có ba con gà.", "Tôi có ba gà.", "Tôi có ba cái gà."], answer: 0, explain: "Zwischen Zahl und Nomen steht der Klassifikator; für Tiere con. cái gà wäre ein „Huhn-Gegenstand“." },
        { type: "listen", vi: "Bà nội có mười con gà.", de: "Oma hat zehn Hühner." },
        { type: "speak", vi: "Tôi có một con mèo.", de: "Ich habe eine Katze." },
        { type: "pairs", pairs: [["con", "CL für Tiere"], ["cái", "CL für Gegenstände"], ["người", "CL für Menschen"], ["quyển", "CL für Bücher"], ["chiếc", "CL für Fahrzeuge"]] }
      ]
    },

    // ───────────────────────── k04l4 ─────────────────────────
    {
      id: "k04l4",
      title: "Familienanrede & Alter",
      goal: "Du kannst dich in einer vietnamesischen Familie richtig anreden lassen und anreden, nach dem Alter fragen und es angeben.",
      vocab: [
        { vi: "tuổi", de: "Lebensjahr; Alter", pos: "N", note: "Wird direkt gezählt: ba mươi tuổi.", ex: { vi: "Jonas ba mươi tuổi.", de: "Jonas ist dreißig Jahre alt." } },
        { vi: "năm nay", de: "dieses Jahr", pos: "N", ex: { vi: "Năm nay Linh hai mươi tám tuổi.", de: "Linh ist dieses Jahr 28." } },
        { vi: "bao nhiêu tuổi", de: "wie alt (Erwachsene)", pos: "QW", ex: { vi: "Bác năm nay bao nhiêu tuổi ạ?", de: "Wie alt sind Sie dieses Jahr?" } },
        { vi: "mấy tuổi", de: "wie alt (Kinder)", pos: "QW", ex: { vi: "Cháu mấy tuổi?", de: "Wie alt bist du, Kleines?" } },
        { vi: "già", de: "alt (Lebewesen)", pos: "Adj", emoji: "🧓", ex: { vi: "Ông nội già, Nam trẻ.", de: "Opa ist alt, Nam ist jung." } },
        { vi: "trẻ", de: "jung", pos: "Adj", ex: { vi: "Mẹ Linh trẻ.", de: "Linhs Mutter ist jung." } },
        { vi: "lớn", de: "groß; älter (Kinder)", pos: "Adj", note: "con lớn = ältestes Kind.", ex: { vi: "Linh là con lớn.", de: "Linh ist das älteste Kind." } },
        { vi: "nhỏ", de: "klein; jung (Kinder)", pos: "Adj", ex: { vi: "Bin nhỏ, Nam lớn.", de: "Bin ist klein, Nam ist groß." } },
        { vi: "bác", de: "Onkel/Tante (älter als die Eltern); respektvolle Anrede für die Elterngeneration", pos: "Pron", ex: { vi: "Cháu chào bác ạ.", de: "Guten Tag (zu einer Person der Elterngeneration)." } },
        { vi: "bác gái", de: "„Tante“ – Anrede für die Ehefrau eines bác", pos: "N", note: "Paar: bác trai (er) / bác gái (sie); beide zusammen: hai bác.", ex: { vi: "Bác gái là mẹ Linh.", de: "Die „Tante“ ist Linhs Mutter." } },
        { vi: "đã có gia đình chưa?", de: "Bist du schon verheiratet?", pos: "Phr", note: "Feste Formel; die Aspektlogik von đã/chưa folgt in K08.", ex: { vi: "Anh đã có gia đình chưa?", de: "Bist du schon verheiratet?" } },
        { vi: "rồi", de: "ja, schon (Antwort auf … chưa?)", pos: "Phr", ex: { vi: "Chị đã có gia đình chưa? – Rồi.", de: "Bist du schon verheiratet? – Ja." } },
        { vi: "chưa", de: "noch nicht", pos: "Adv", ex: { vi: "Dạ, cháu chưa có gia đình ạ.", de: "Nein, ich bin noch nicht verheiratet." } },
        { vi: "biếu", de: "(respektvoll) schenken, überreichen (an Ältere)", pos: "V", emoji: "🎁", note: "Höflichkeitsverb: nach oben biếu, nicht cho.", ex: { vi: "Cháu biếu hai bác chút quà ạ.", de: "Ich habe ein kleines Geschenk für Sie beide." } },
        { vi: "làm nghề gì?", de: "Was sind Sie von Beruf?", pos: "Phr", note: "Feste Formel; Berufe ausführlich in K09.", ex: { vi: "Cháu làm nghề gì?", de: "Was machst du beruflich?" } },
        { vi: "kỹ sư", de: "Ingenieur(in)", pos: "N", emoji: "👷", ex: { vi: "Jonas là kỹ sư.", de: "Jonas ist Ingenieur." } }
      ],
      grammar: [
        {
          id: "g-k04-familienanrede",
          title: "Wer bin ich gerade? Pronomenwechsel in der Familie",
          term: "Relationale (reziproke) Personaldeixis mit Verwandtschaftstermini",
          pattern: "Sprecher = Term A, Hörer = Term B (Paar)",
          text: `Wie du aus K02 weißt, gibt es im Vietnamesischen kein festes „ich“ und „du“. In der Familie wird das System konsequent angewandt: Sprecher und Hörer bezeichnen sich mit **komplementären Verwandtschaftstermini**, die ihre Beziehung abbilden.

Linhs Vater sagt zu Linh \`Bố\` für „ich“ und \`con\` für „du“; Linh antwortet mit \`con\` für „ich“ und \`bố\` für „du“. Dasselbe Wort \`con\` bedeutet also je nach Sprecher „ich“ oder „du“ – entscheidend ist allein die Rolle im Paar.

Für Jonas heißt das: Gegenüber Linhs Eltern nennt er sich **\`cháu\`** und spricht sie mit **\`bác\`** an, beide zusammen mit **\`hai bác\`**; unterscheiden kann er \`bác trai\` (Vater) und \`bác gái\` (Mutter). Wird er Schwiegersohn oder rückt er sehr nah, darf er sich \`con\` nennen und \`bố\`/\`mẹ\` sagen – aber erst, wenn die Eltern es anbieten. Gegenüber Linhs jüngerem Bruder Nam ist Jonas \`anh\`, Nam ist \`em\`. Ein kleines Kind nennt Jonas \`chú\` (Onkel), sich selbst \`cháu\`.

\`tôi\` gilt in der Familie als kühl und distanziert; \`mày\`/\`tao\` sind nur unter sehr Vertrauten oder grob.`,
          table: {
            head: ["Beziehung", "Sprecher sagt für „ich“", "… und für „du“"],
            rows: [
              ["Kind → Eltern", "con", "bố / mẹ"],
              ["Eltern → Kind", "bố / mẹ", "con"],
              ["Jonas → Linhs Eltern", "cháu", "bác / hai bác"],
              ["Linhs Eltern → Jonas", "bác", "cháu"],
              ["Enkel → Großeltern", "cháu", "ông / bà"],
              ["Kind → Jonas", "cháu", "chú"],
              ["Jonas → Nam (jünger)", "anh", "em"]
            ]
          },
          examples: [
            { vi: "Dạ, cháu chào hai bác ạ.", de: "Guten Tag (Ihnen beiden).", gloss: "ja | Neffe(ich) | grüßen | zwei | Onkel/Tante(Sie) | HÖFL" },
            { vi: "Con chào bố ạ.", de: "(Linh:) Hallo, Papa." },
            { vi: "Bác chào cháu.", de: "(Linhs Vater:) Hallo (zu Jonas)." },
            { vi: "Cháu chào chú ạ!", de: "(Ein Kind zu Jonas:) Hallo, Onkel!" }
          ],
          contrast: "Im Deutschen bleiben „ich“ und „du/Sie“ in jeder Beziehung gleich; Respekt zeigt sich am Siezen. Vietnamesisch kodiert Respekt und Nähe in der *Wahl* der Personenbezeichnung – „Sie“ ist für Jonas hier `bác`, und sein „ich“ wird zu `cháu`, wörtlich „Neffe/Enkel“."
        },
        {
          id: "g-k04-alter",
          title: "Nach dem Alter fragen",
          term: "Numerales Prädikat ohne Kopula; Stativverben già/trẻ",
          pattern: "S + (năm nay) + Num + tuổi  |  S + bao nhiêu / mấy tuổi?",
          text: `Das Alter ist in Vietnam eine ganz normale Frage, denn erst sie verrät, welches Anredepaar passt.

**Frage**: \`(Năm nay) anh bao nhiêu tuổi?\` – bei Erwachsenen. Bei Kindern (unter etwa zehn Jahren) nimmt man \`mấy tuổi\`, weil eine kleine Zahl erwartet wird (vgl. K03). Einen Erwachsenen mit \`mấy tuổi\` zu fragen, behandelt ihn wie ein Kind. \`năm nay\` („dieses Jahr“) steht oft als Topik davor.

**Antwort**: \`Tôi ba mươi tuổi.\` Die Altersangabe ist selbst das **Prädikat** – **ohne** \`là\` (*Tôi là ba mươi tuổi* ist falsch) und ohne \`có\` (*Tôi có ba mươi tuổi* wäre eine Übertragung aus „tener“). \`tuổi\` wird wie eine Maßeinheit direkt gezählt, ohne Klassifikator.

**Alt und jung** sind Stativverben (K02): \`Ông nội già.\`, \`Mẹ Linh trẻ.\` – ebenfalls ohne \`là\`. \`già\` ist dabei direkter als das deutsche „alt“; höflich sagt man von Älteren lieber nichts. Bei Kindern und Geschwistern beschreibt man das Alter auch mit \`lớn\` (groß/älter) und \`nhỏ\` (klein/jünger): \`con lớn\` = ältestes Kind.

Die Formel \`… đã có gia đình chưa?\` („Hast du schon eine Familie?“ = „Bist du verheiratet?“) gehört zur gleichen Kennenlern-Routine. Antwort: \`Rồi.\` (ja, schon) oder \`Chưa.\` (noch nicht) – nicht \`không\`, das klänge nach „nie“.`,
          examples: [
            { vi: "Bác năm nay bao nhiêu tuổi ạ?", de: "Wie alt sind Sie dieses Jahr?", gloss: "Onkel(Sie) | Jahr | dies | wie_viel | Lebensjahr | HÖFL" },
            { vi: "Cháu ba mươi tuổi ạ.", de: "Ich bin dreißig." },
            { vi: "Bin mấy tuổi? – Bin năm tuổi.", de: "Wie alt ist Bin? – Bin ist fünf." },
            { vi: "Cháu đã có gia đình chưa? – Dạ, chưa ạ.", de: "Bist du verheiratet? – Noch nicht." }
          ],
          contrast: "Deutsch „Ich *bin* dreißig (Jahre alt)“ braucht die Kopula. Vietnamesisch nicht: `ba mươi tuổi` ist schon ein Prädikat, wie ein Stativverb. Und anders als in Deutschland gilt die Altersfrage nicht als indiskret."
        }
      ],
      dialogue: {
        setting: "Familienessen in Ninh Bình. Linhs Tante Cô Hằng (die jüngere Schwester ihres Vaters) fragt Jonas aus. Ihr Sohn Bin (5) ist dabei.",
        lines: [
          { who: "Cô Hằng", vi: "Cháu năm nay bao nhiêu tuổi?", de: "Wie alt bist du dieses Jahr?" },
          { who: "Jonas", vi: "Dạ, cháu ba mươi tuổi ạ.", de: "Ich bin dreißig." },
          { who: "Cô Hằng", vi: "Cháu đã có gia đình chưa?", de: "Bist du schon verheiratet?" },
          { who: "Jonas", vi: "Dạ, chưa ạ.", de: "Nein, noch nicht." },
          { who: "Cô Hằng", vi: "Cháu làm nghề gì?", de: "Was machst du beruflich?" },
          { who: "Jonas", vi: "Dạ, cháu là kỹ sư ạ. Con cô mấy tuổi ạ?", de: "Ich bin Ingenieur. Wie alt ist Ihr Sohn?" },
          { who: "Cô Hằng", vi: "Bin năm tuổi. Bin, chào chú Jonas!", de: "Bin ist fünf. Bin, sag Onkel Jonas Hallo!" },
          { who: "Bin", vi: "Cháu chào chú ạ!", de: "Hallo, Onkel!" },
          { who: "Jonas", vi: "Chú chào cháu!", de: "Hallo, Kleiner!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Cháu năm nay ___ tuổi?", de: "Wie alt bist du dieses Jahr? (zu Jonas)", options: ["bao nhiêu", "gì", "nào"], answer: "bao nhiêu", explain: "Bei Erwachsenen fragt man bao nhiêu tuổi. mấy tuổi ist für Kinder." },
        { type: "gap", vi: "Dạ, ___ chào bác ạ.", de: "(Jonas zu Linhs Vater:) Guten Tag.", options: ["cháu", "tôi", "mày"], answer: "cháu", explain: "Gegenüber der Elterngeneration (bác) ist man selbst cháu. tôi wirkt distanziert, mày ist grob." },
        { type: "gap", vi: "Cháu đã có gia đình ___?", de: "Bist du schon verheiratet?", options: ["chưa", "không", "rồi"], answer: "chưa", explain: "Die feste Formel endet auf chưa („schon … oder noch nicht?“)." },
        { type: "gap", vi: "(Linhs Vater zu Linh:) ___ khỏe không?", de: "Geht es dir gut, Kind?", options: ["Con", "Cháu", "Em"], answer: "Con", explain: "Eltern sprechen ihre Kinder mit con an. cháu wäre Enkel/Neffe." },
        { type: "gap", vi: "Ông nội già, Nam ___.", de: "Opa ist alt, Nam ist jung.", options: ["trẻ", "già", "lớn"], answer: "trẻ", explain: "trẻ ist das Gegenteil von già – beide sind Stativverben ohne là." },
        { type: "build", vi: "Cháu ba mươi tuổi ạ.", de: "Ich bin dreißig (zu Älteren).", extra: ["là", "mấy"] },
        { type: "build", vi: "Bác năm nay bao nhiêu tuổi ạ?", de: "Wie alt sind Sie dieses Jahr? (zu Linhs Vater)", extra: ["là", "nào"] },
        { type: "build", vi: "Dạ, cháu chưa có gia đình ạ.", de: "Nein, ich bin noch nicht verheiratet.", extra: ["rồi", "là"] },
        { type: "translate", de: "Wie alt bist du? (zu einem Kind)", answers: ["Cháu mấy tuổi?", "Con mấy tuổi?", "Em mấy tuổi?", "Cháu năm nay mấy tuổi?", "Con năm nay mấy tuổi?", "Em năm nay mấy tuổi?"] },
        { type: "translate", de: "Ich bin noch nicht verheiratet.", answers: ["Tôi chưa có gia đình.", "Cháu chưa có gia đình.", "Em chưa có gia đình.", "Anh chưa có gia đình.", "Con chưa có gia đình."] },
        { type: "mc", q: "Welcher Satz ist korrekt?", options: ["Tôi ba mươi tuổi.", "Tôi là ba mươi tuổi.", "Tôi có ba mươi tuổi."], answer: 0, explain: "Die Altersangabe ist selbst Prädikat – ohne là und ohne có." },
        { type: "mc", q: "Jonas spricht Linhs Eltern gemeinsam an. Wie?", options: ["hai bác", "hai ông", "các bạn"], answer: 0, explain: "bác = respektvolle Anrede für die Elterngeneration; hai bác = Sie beide. ông wäre Großelterngeneration, bạn gleichrangig." },
        { type: "listen", vi: "Bố cháu năm nay sáu mươi lăm tuổi.", de: "Mein Vater ist dieses Jahr 65." },
        { type: "speak", vi: "Dạ, cháu chào hai bác ạ.", de: "Guten Tag, Ihnen beiden." },
        { type: "pairs", pairs: [["già", "alt"], ["trẻ", "jung"], ["lớn", "groß"], ["nhỏ", "klein"], ["tuổi", "Lebensjahr"]] }
      ]
    }
  ],

  boss: {
    title: "Zu Besuch bei Linhs Eltern",
    npc: "Bác Hùng",
    role: "Linhs Vater, pensionierter Lehrer in Ninh Bình",
    setting: "Linh bringt Jonas zum ersten Mal mit nach Hause. Im Wohnzimmer warten ihr Vater Bác Hùng und ihre Mutter Bác Hoa. Jonas hat ein Geschenk dabei und muss die Fragen der Eltern höflich beantworten – mit der richtigen Anrede.",
    turns: [
      {
        npc: { vi: "Chào cháu! Cháu là Jonas, phải không?", de: "Hallo! Du bist Jonas, nicht wahr?" },
        prompt: "Begrüße beide Eltern höflich und bestätige.",
        choices: [
          { vi: "Dạ, cháu chào hai bác ạ. Cháu là Jonas.", ok: true, fb: "Perfekt: cháu für dich, hai bác für beide Eltern, dazu dạ und ạ." },
          { vi: "Chào anh chị! Tôi là Jonas.", ok: false, fb: "anh/chị sind Anreden für nur wenig Ältere – für Linhs Eltern viel zu vertraulich. Und tôi wirkt in der Familie kühl." },
          { vi: "Dạ, cháu chào hai ông bà ạ.", ok: false, fb: "ông bà sind die Großelterngeneration – du machst die Eltern älter, als sie sind. Richtig: hai bác." }
        ]
      },
      {
        npc: { vi: "Mời cháu vào nhà.", de: "Komm doch herein." },
        prompt: "Überreiche dein Geschenk respektvoll.",
        choices: [
          { vi: "Dạ, cháu biếu hai bác chút quà ạ.", ok: true, fb: "Sehr höflich: biếu ist das Verb für das Schenken „nach oben“." },
          { vi: "Dạ, cháu cho hai bác quà.", ok: false, fb: "cho „geben“ wirkt hier herablassend – so gibt man etwas an Jüngere. An Ältere: biếu." },
          { vi: "Dạ, tôi biếu bác chút quà.", ok: false, fb: "tôi passt nicht zum Paar mit bác (richtig: cháu), und mit nur bác sprichst du bloß einen Elternteil an." }
        ]
      },
      {
        npc: { vi: "Cảm ơn cháu. Cháu năm nay bao nhiêu tuổi?", de: "Danke dir. Wie alt bist du dieses Jahr?" },
        prompt: "Du bist 30.",
        choices: [
          { vi: "Dạ, cháu ba mươi tuổi ạ.", ok: true, fb: "Richtig – Altersangabe als Prädikat, ohne là." },
          { vi: "Dạ, cháu là ba mươi tuổi ạ.", ok: false, fb: "là ist hier falsch: Num + tuổi ist selbst das Prädikat." },
          { vi: "Dạ, cháu ba mười tuổi ạ.", ok: false, fb: "Zehner ab 20 heißen mươi (ngang-Ton), nicht mười: ba mươi." }
        ]
      },
      {
        npc: { vi: "Cháu làm nghề gì?", de: "Was machst du beruflich?" },
        prompt: "Sag, dass du Ingenieur bist.",
        choices: [
          { vi: "Dạ, cháu là kỹ sư ạ.", ok: true, fb: "Richtig: Kopula là zwischen zwei Nominalphrasen." },
          { vi: "Dạ, cháu có kỹ sư ạ.", ok: false, fb: "có heißt „haben“ – „ich habe einen Ingenieur“. Für den Beruf: là." },
          { vi: "Dạ, cháu kỹ sư là ạ.", ok: false, fb: "là steht zwischen Subjekt und Prädikatsnomen: cháu là kỹ sư." }
        ]
      },
      {
        npc: { vi: "Bố mẹ cháu khỏe không?", de: "Geht es deinen Eltern gut?" },
        prompt: "Antworte: Ja, meinen Eltern geht es gut.",
        choices: [
          { vi: "Dạ, bố mẹ cháu khỏe ạ.", ok: true, fb: "Richtig: Possession durch Juxtaposition (bố mẹ cháu) und khỏe ohne là." },
          { vi: "Dạ, bố mẹ cháu là khỏe ạ.", ok: false, fb: "khỏe ist ein Stativverb – kein là davor." },
          { vi: "Dạ, cháu bố mẹ khỏe ạ.", ok: false, fb: "Der Besitzer steht nach dem Nomen: bố mẹ cháu, nicht cháu bố mẹ." }
        ]
      },
      {
        npc: { vi: "Cháu có anh chị em không?", de: "Hast du Geschwister?" },
        prompt: "Du hast eine ältere Schwester und einen jüngeren Bruder.",
        choices: [
          { vi: "Dạ, cháu có một chị gái, một em trai ạ.", ok: true, fb: "Genau: chị gái = ältere Schwester, em trai = jüngerer Bruder; Verwandte direkt gezählt." },
          { vi: "Dạ, cháu có một em gái, một anh trai ạ.", ok: false, fb: "Vertauscht: em gái ist die jüngere Schwester, anh trai der ältere Bruder." },
          { vi: "Dạ, cháu có một con chị gái, một con em trai ạ.", ok: false, fb: "con ist der Klassifikator für Tiere – vor Menschen wirkt er abwertend. Verwandte zählt man direkt." }
        ]
      },
      {
        npc: { vi: "Cháu đã có gia đình chưa?", de: "Bist du schon verheiratet?" },
        prompt: "Antworte: noch nicht.",
        choices: [
          { vi: "Dạ, chưa ạ.", ok: true, fb: "Richtig: chưa = noch nicht. Die Tür bleibt offen – die Eltern lächeln." },
          { vi: "Dạ, rồi ạ.", ok: false, fb: "rồi heißt „ja, schon“ – du hättest gerade gesagt, dass du verheiratet bist!" },
          { vi: "Dạ, không ạ.", ok: false, fb: "Auf … chưa? antwortet man mit chưa. không klingt hier nach „nein, niemals“." }
        ]
      },
      {
        npc: { vi: "Bác có hai con: Linh, Nam.", de: "Wir haben zwei Kinder: Linh und Nam." },
        prompt: "Frag höflich, wie alt Nam (24, jünger als du) ist.",
        choices: [
          { vi: "Dạ, em Nam năm nay bao nhiêu tuổi ạ?", ok: true, fb: "Richtig: Nam ist jünger als du, also em Nam; bao nhiêu tuổi für Erwachsene." },
          { vi: "Dạ, anh Nam năm nay bao nhiêu tuổi ạ?", ok: false, fb: "Nam ist jünger als du – anh Nam würde ihn über dich stellen. Richtig: em Nam." },
          { vi: "Dạ, em Nam mấy tuổi ạ?", ok: false, fb: "mấy tuổi fragt nach dem Alter von Kindern – Nam ist erwachsen. Besser: bao nhiêu tuổi." }
        ]
      }
    ],
    win: { vi: "Cháu nói tiếng Việt giỏi quá! Mời cháu ăn cơm.", de: "Du sprichst aber gut Vietnamesisch! Komm, lass uns essen." }
  }
});
