/* K05 Huế – Essen & Trinken */
VN.addChapter({
  id: "k05",
  place: "Huế",
  region: "Zentralvietnam",
  title: "Essen & Trinken",
  intro: "Huế, die alte Kaiserstadt der Nguyễn-Dynastie am Parfümfluss (sông Hương), ist berühmt für ihre scharfe und raffinierte Küche. Mit Jonas und Linh probierst du Bún bò Huế, Cơm hến und Bánh khoái. Du lernst, Geschmack mit Gradadverbien zu beschreiben, im Lokal mit Behälterklassifikatoren zu bestellen, Vorlieben und Fähigkeiten auszudrücken (ăn được cay) und dich am Tisch höflich zu verhalten.",
  lessons: [
    // ───────────────────────────── k05l1 ─────────────────────────────
    {
      id: "k05l1",
      title: "Gerichte & Geschmack",
      goal: "Du kannst sagen, wie ein Gericht schmeckt, und den Grad mit rất, lắm, quá und hơi abstufen.",
      vocab: [
        { vi: "ăn", de: "essen", pos: "V", emoji: "🍽️", ex: { vi: "Tôi ăn bún bò Huế.", de: "Ich esse Bún bò Huế." } },
        { vi: "uống", de: "trinken", pos: "V", emoji: "🥤", ex: { vi: "Linh uống cà phê.", de: "Linh trinkt Kaffee." } },
        { vi: "món", de: "Gericht, Speise (auch Klassifikator für Gerichte)", pos: "N", note: "Auch als Klassifikator: hai món = zwei Gerichte. món ăn = Gericht.", ex: { vi: "Huế có nhiều món ngon.", de: "Huế hat viele leckere Gerichte." } },
        { vi: "ngon", de: "lecker, schmackhaft", pos: "Adj", emoji: "😋", ex: { vi: "Phở rất ngon.", de: "Phở ist sehr lecker." } },
        { vi: "cay", de: "scharf", pos: "Adj", emoji: "🌶️", ex: { vi: "Bún bò Huế cay lắm.", de: "Bún bò Huế ist sehr scharf." } },
        { vi: "ngọt", de: "süß", pos: "Adj", emoji: "🍬", ex: { vi: "Chè Huế hơi ngọt.", de: "Die Chè (Süßspeise) aus Huế ist etwas süß." } },
        { vi: "mặn", de: "salzig", pos: "Adj", emoji: "🧂", ex: { vi: "Nước mắm hơi mặn.", de: "Die Fischsauce ist etwas salzig." } },
        { vi: "chua", de: "sauer", pos: "Adj", emoji: "🍋", ex: { vi: "Chanh chua lắm.", de: "Limetten sind sehr sauer." } },
        { vi: "nhạt", de: "fade, ungewürzt; (Farbe) blass", pos: "Adj", ex: { vi: "Phở hơi nhạt.", de: "Die Phở ist etwas fade." } },
        { vi: "bún bò Huế", de: "Reisnudelsuppe mit Rind nach Huế-Art (mit Zitronengras, scharf)", pos: "N", emoji: "🍜", cls: "bát", ex: { vi: "Bún bò Huế rất ngon.", de: "Bún bò Huế ist sehr lecker." } },
        { vi: "cơm hến", de: "Reis mit Körbchenmuscheln (Huế-Spezialität)", pos: "N", emoji: "🍚", ex: { vi: "Cơm hến là món ăn Huế.", de: "Cơm hến ist ein Gericht aus Huế." } },
        { vi: "bánh khoái", de: "knuspriger Reismehl-Pfannkuchen aus Huế", pos: "N", emoji: "🥞", ex: { vi: "Bánh khoái ngon lắm.", de: "Bánh khoái ist sehr lecker." } },
        { vi: "rất", de: "sehr (vor dem Adjektiv)", pos: "Adv", ex: { vi: "Bún bò Huế rất cay.", de: "Bún bò Huế ist sehr scharf." } },
        { vi: "lắm", de: "sehr (nach dem Adjektiv, umgangssprachlich)", pos: "Adv", ex: { vi: "Cơm hến ngon lắm.", de: "Cơm hến ist sehr lecker." } },
        { vi: "quá", de: "so …!, wie …! (nachgestellt); zu (vorangestellt)", pos: "Adv", ex: { vi: "Ngon quá!", de: "Wie lecker!" } },
        { vi: "hơi", de: "etwas, ein bisschen (vor dem Adjektiv)", pos: "Adv", ex: { vi: "Phở hơi mặn.", de: "Die Phở ist etwas salzig." } }
      ],
      grammar: [
        {
          id: "g-k05-gradadverb",
          title: "Gradadverbien: rất, lắm, quá, hơi",
          term: "Gradadverb (Intensifikator) beim Stativverb",
          pattern: "rất / hơi / quá + Adj  ·  Adj + lắm / quá",
          text: "Geschmacksadjektive wie `ngon`, `cay` oder `mặn` sind im Vietnamesischen **Stativverben**: Sie bilden allein das Prädikat, ganz ohne Kopula (`Phở ngon.` – nicht *Phở là ngon*). Den Grad einer Eigenschaft gibt ein **Gradadverb** an. Entscheidend ist seine **Position**, denn sie ist lexikalisch festgelegt:\n\n- `rất` + Adj: neutrales „sehr“, in Schrift und Rede gleichermaßen, steht immer **vor** dem Adjektiv.\n- Adj + `lắm`: „sehr“, umgangssprachlich und wärmer, steht immer **nach** dem Adjektiv.\n- Adj + `quá`: **exklamativ** „so …!/wie …!“ – spontaner Gefühlsausdruck: `Ngon quá!` „Wie lecker!“. Vorangestellt (`quá cay`) betont `quá` eher das Übermaß: „zu scharf“.\n- `hơi` + Adj: „etwas, ein bisschen“, häufig bei unerwünschten Eigenschaften: `hơi mặn` „etwas (zu) salzig“.\n\nZwei Gradadverbien werden im Standard nicht kombiniert: *rất ngon lắm* gilt als fehlerhaft – entweder `rất ngon` oder `ngon lắm`. Das Adjektiv selbst bleibt dabei völlig unverändert: keine Flexion, keine Kongruenz mit dem Nomen, keine Steigerungsendung. Auch das Subjekt kann wegfallen, wenn es aus dem Kontext klar ist – `Cay quá!` ist ein vollständiger Satz.",
          table: {
            head: ["Gradadverb", "Position", "Bedeutung", "Beispiel"],
            rows: [
              ["rất", "vor Adj", "sehr (neutral)", "rất ngon"],
              ["lắm", "nach Adj", "sehr (umgangssprachlich)", "ngon lắm"],
              ["quá", "nach Adj", "so …! (Ausruf)", "ngon quá!"],
              ["quá", "vor Adj", "zu (Übermaß)", "quá cay"],
              ["hơi", "vor Adj", "etwas, ein bisschen", "hơi mặn"]
            ]
          },
          examples: [
            { vi: "Bún bò Huế rất cay.", de: "Bún bò Huế ist sehr scharf.", gloss: "Bún bò Huế | sehr | scharf" },
            { vi: "Cơm hến ngon lắm.", de: "Cơm hến ist sehr lecker.", gloss: "Cơm hến | lecker | sehr" },
            { vi: "Cay quá!", de: "So scharf!", gloss: "scharf | so" },
            { vi: "Nước mắm hơi mặn.", de: "Die Fischsauce ist etwas salzig.", gloss: "Fischsauce | etwas | salzig" }
          ],
          contrast: "Im Deutschen stehen Gradpartikeln immer vor dem Adjektiv („sehr lecker“, „etwas salzig“). Im Vietnamesischen hängt die Position vom einzelnen Adverb ab – `rất` und `hơi` vorn, `lắm` hinten, `quá` an beiden Stellen mit unterschiedlicher Nuance.",
          south: "Im Süden hört man umgangssprachlich auch `quá trời` als starke Steigerung: `ngon quá trời` „unglaublich lecker“."
        },
        {
          id: "g-k05-khong-lam",
          title: "Nicht sehr …: Negation und Frage mit Gradangabe",
          term: "Negation von Stativverben; abgeschwächte Negation",
          pattern: "không + Adj + lắm  ·  (có) + Adj + không?",
          text: "Stativverben werden wie alle Verben mit `không` verneint: `Phở không cay.` „Phở ist nicht scharf.“ Will man eine Eigenschaft nur **abschwächen**, setzt man `lắm` hinter das Adjektiv: `không cay lắm` „nicht sehr scharf, nicht besonders scharf“. Diese **abgeschwächte Negation** ist die höfliche Standardform für Kritik am Essen – ein glattes `không ngon` wäre unfreundlich.\n\nWichtig: `rất` kann **nicht** im Skopus der Negation stehen. *không rất cay* ist ungrammatisch; „nicht sehr“ heißt immer `không … lắm`.\n\nDie Ja/Nein-Frage kennst du aus K02: `(có) + Adj + không?` – `Bún bò có cay không?` „Ist die Bún bò scharf?“ Auch Gradadverbien passen in die Frage: `Có cay lắm không?` „Ist sie sehr scharf?“\n\nBei der Antwort wiederholt man im Vietnamesischen typischerweise das **Prädikat**, statt nur „ja“ zu sagen: `Cay.` „(Ja,) scharf.“ – `Không cay lắm.` „Nicht sehr scharf.“ Gegenüber Älteren hängt man `ạ` an: `Dạ, ngon lắm ạ.`",
          examples: [
            { vi: "Bún bò Huế không cay lắm.", de: "Die Bún bò Huế ist nicht sehr scharf.", gloss: "Bún bò Huế | nicht | scharf | sehr" },
            { vi: "Bánh khoái có ngọt không?", de: "Ist Bánh khoái süß?", gloss: "Bánh khoái | (có) | süß | nicht?" },
            { vi: "Có cay lắm không?", de: "Ist es sehr scharf?", gloss: "(có) | scharf | sehr | nicht?" },
            { vi: "Dạ, ngon lắm ạ.", de: "Ja, sehr lecker.", gloss: "ja | lecker | sehr | (höflich)" }
          ],
          contrast: "Das Deutsche antwortet oft nur mit „Ja“ oder „Nein“. Im Vietnamesischen ist die Wiederholung des Prädikats („Lecker!“, „Nicht scharf.“) die natürlichste Antwortform."
        }
      ],
      dialogue: {
        setting: "Jonas und Linh sitzen an einer Garküche in der Nähe der Zitadelle von Huế. Cô Tâm, die Köchin, bringt das Essen.",
        lines: [
          { who: "Linh", vi: "Anh ơi, bún bò Huế có ngon không?", de: "Schatz, ist die Bún bò Huế lecker?" },
          { who: "Jonas", vi: "Ngon lắm! Hơi cay.", de: "Sehr lecker! Etwas scharf." },
          { who: "Linh", vi: "Có cay lắm không?", de: "Ist sie sehr scharf?" },
          { who: "Jonas", vi: "Không cay lắm. Cơm hến có ngon không?", de: "Nicht sehr scharf. Ist der Cơm hến lecker?" },
          { who: "Linh", vi: "Ngon quá! Hơi mặn.", de: "Wie lecker! Etwas salzig." },
          { who: "Cô Tâm", vi: "Bánh khoái cũng rất ngon.", de: "Bánh khoái ist auch sehr lecker." },
          { who: "Jonas", vi: "Bánh khoái có ngọt không ạ?", de: "Ist Bánh khoái süß?" },
          { who: "Cô Tâm", vi: "Không ngọt. Nước chấm hơi ngọt.", de: "Nicht süß. Die Dipsauce ist etwas süß." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Bún bò Huế ___ ngon.", de: "Bún bò Huế ist sehr lecker.", options: ["rất", "là", "lắm"], answer: "rất", explain: "rất steht vor dem Adjektiv; lắm stünde dahinter. là ist Kopula und steht nie vor einem Stativverb." },
        { type: "gap", vi: "Phở ngon ___!", de: "Wie lecker die Phở ist!", options: ["quá", "rất", "hơi"], answer: "quá", explain: "Nachgestelltes quá ist exklamativ: „so …!/wie …!“. rất und hơi stehen nur vor dem Adjektiv." },
        { type: "gap", vi: "Cơm hến không mặn ___.", de: "Der Cơm hến ist nicht sehr salzig.", options: ["lắm", "rất", "hơi"], answer: "lắm", explain: "„Nicht sehr“ = không + Adj + lắm. *không rất mặn ist ungrammatisch." },
        { type: "gap", vi: "Bánh khoái ___ ngọt.", de: "Bánh khoái ist etwas süß.", options: ["hơi", "lắm", "là"], answer: "hơi", explain: "hơi „etwas, ein bisschen“ steht vor dem Adjektiv." },
        { type: "build", vi: "Bún_bò_Huế cay lắm.", de: "Bún bò Huế ist sehr scharf.", extra: ["là", "ngọt"] },
        { type: "build", vi: "Cơm hến hơi mặn.", de: "Der Cơm hến ist etwas salzig.", extra: ["là", "lắm"] },
        { type: "build", vi: "Bánh khoái không ngọt lắm.", de: "Bánh khoái ist nicht sehr süß.", extra: ["rất", "là"] },
        { type: "translate", de: "Phở ist sehr lecker.", answers: ["Phở rất ngon.", "Phở ngon lắm.", "Phở ngon quá."] },
        { type: "translate", de: "Die Bún bò Huế ist nicht sehr scharf.", answers: ["Bún bò Huế không cay lắm.", "Bún bò không cay lắm."] },
        { type: "mc", q: "Welcher Satz ist korrekt?", options: ["Phở là ngon.", "Phở rất ngon.", "Phở ngon rất."], answer: 1, explain: "Adjektive sind Stativverben – kein là. rất steht vor dem Adjektiv." },
        { type: "mc", q: "Was bedeutet der Ausruf?", vi: "Cay quá!", options: ["So scharf!", "Nicht scharf.", "Ein bisschen scharf."], answer: 0, explain: "Nachgestelltes quá drückt einen spontanen Ausruf aus: „So scharf!“" },
        { type: "mc", q: "Welches Gradadverb steht NACH dem Adjektiv?", options: ["rất", "hơi", "lắm"], answer: 2, explain: "lắm folgt dem Adjektiv (ngon lắm); rất und hơi gehen ihm voraus." },
        { type: "listen", vi: "Cơm hến ngon lắm.", de: "Der Cơm hến ist sehr lecker." },
        { type: "speak", vi: "Bún bò Huế ngon quá!", de: "Wie lecker die Bún bò Huế ist!" },
        { type: "pairs", pairs: [["cay", "scharf"], ["ngọt", "süß"], ["mặn", "salzig"], ["chua", "sauer"], ["nhạt", "fade"]] }
      ]
    },

    // ───────────────────────────── k05l2 ─────────────────────────────
    {
      id: "k05l2",
      title: "Bestellen",
      goal: "Du kannst im Lokal die Bedienung rufen und Speisen und Getränke mit den passenden Behältern bestellen.",
      vocab: [
        { vi: "muốn", de: "wollen, möchten", pos: "V", ex: { vi: "Tôi muốn ăn phở.", de: "Ich möchte Phở essen." } },
        { vi: "cho tôi …", de: "Geben Sie mir …, ich hätte gern …", pos: "Phr", note: "Bestellformel; tôi wird durch die passende Selbstbezeichnung ersetzt (cho anh, cho em, cho cháu).", ex: { vi: "Cho tôi một bát phở.", de: "Eine Schale Phở, bitte." } },
        { vi: "bát", de: "Schale, Schüssel (auch Behälterklassifikator)", pos: "N", emoji: "🥣", south: "tô", ex: { vi: "Cho tôi hai bát bún bò.", de: "Zwei Schalen Bún bò, bitte." } },
        { vi: "cốc", de: "Glas, Becher (auch Behälterklassifikator)", pos: "N", emoji: "🥛", south: "ly", ex: { vi: "Cho tôi một cốc cà phê.", de: "Einen Kaffee, bitte." } },
        { vi: "đĩa", de: "Teller (auch Behälterklassifikator)", pos: "N", emoji: "🍽️", south: "dĩa", ex: { vi: "Cho tôi một đĩa bánh khoái.", de: "Einen Teller Bánh khoái, bitte." } },
        { vi: "chai", de: "Flasche (auch Behälterklassifikator)", pos: "N", emoji: "🍾", ex: { vi: "Cho tôi một chai nước.", de: "Eine Flasche Wasser, bitte." } },
        { vi: "suất", de: "Portion (Nord)", pos: "CL", note: "Mensurativ-Klassifikator für Essensportionen; landesweit auch phần.", ex: { vi: "Cho anh hai suất cơm.", de: "Zwei Portionen Reis(gericht), bitte." } },
        { vi: "phần", de: "Portion, Teil", pos: "CL", note: "Im Süden üblich, im Norden ebenfalls verstanden.", ex: { vi: "Cho em một phần cơm hến.", de: "Eine Portion Cơm hến, bitte." } },
        { vi: "nước", de: "Wasser; Getränk", pos: "N", emoji: "💧", ex: { vi: "Tôi muốn uống nước.", de: "Ich möchte Wasser trinken." } },
        { vi: "trà đá", de: "Eistee (kalter grüner Tee, Hà-Nội-Straßengetränk)", pos: "N", emoji: "🧊", ex: { vi: "Cho anh một cốc trà đá.", de: "Ein Glas Eistee, bitte." } },
        { vi: "bia", de: "Bier", pos: "N", emoji: "🍺", note: "Huda ist die bekannte Biermarke aus Huế.", ex: { vi: "Jonas muốn uống bia Huda.", de: "Jonas möchte Huda-Bier trinken." } },
        { vi: "nhé", de: "Satzendpartikel: …, ja? / …, okay? (macht Bitten freundlich)", pos: "Part", ex: { vi: "Cho anh một chai bia nhé.", de: "Eine Flasche Bier für mich, ja?" } },
        { vi: "làm ơn", de: "bitte (wörtl. „eine Gefälligkeit tun“)", pos: "Phr", note: "Eher förmlich oder gegenüber Fremden; im Lokal genügt meist cho + nhé.", ex: { vi: "Làm ơn cho tôi một cốc nước.", de: "Bitte ein Glas Wasser." } },
        { vi: "em ơi", de: "Hallo! (Ruf an jüngere Bedienung)", pos: "Phr", note: "ơi ist eine Vokativpartikel; je nach Alter auch chị ơi, anh ơi, cô ơi.", ex: { vi: "Em ơi, cho anh một bát phở!", de: "Hallo, eine Schale Phở für mich, bitte!" } },
        { vi: "thực đơn", de: "Speisekarte", pos: "N", emoji: "📋", south: "menu", ex: { vi: "Em ơi, cho anh thực đơn.", de: "Hallo, die Speisekarte bitte." } },
        { vi: "nữa", de: "noch (ein/eine), mehr", pos: "Adv", ex: { vi: "Cho tôi một bát nữa.", de: "Noch eine Schale, bitte." } }
      ],
      grammar: [
        {
          id: "g-k05-behaelter-cl",
          title: "Behälter als Klassifikatoren",
          term: "Mensurativ- bzw. Behälterklassifikator",
          pattern: "Num + Behälter + N",
          text: "In K04 hast du **sortale Klassifikatoren** kennengelernt (`con`, `cái`, `quyển`): Sie ordnen ein Nomen einer Klasse zu. Bei Speisen und Getränken zählt man dagegen **Mengen**. Dann besetzt ein **Behälter- oder Mensurativklassifikator** die Klassifikatorposition: `hai bát phở` „zwei Schalen Phở“, `một cốc trà đá` „ein Glas Eistee“.\n\nDer Behälter **ersetzt** den sortalen Klassifikator – es steht also kein zusätzliches `cái` davor. Vergleiche:\n\n- `hai bát phở` – zwei Schalen Phở (Menge: Behälter = Klassifikator)\n- `hai cái bát` – zwei Schüsseln (Gegenstände: `bát` ist hier das Nomen, `cái` sein Klassifikator)\n\nDasselbe Wort ist also einmal Klassifikator, einmal Kopfnomen. `suất` und `phần` („Portion“) sind keine Behälter, sondern reine Maßeinheiten des Servierens; `món` zählt Gerichte (`hai món` „zwei Gerichte“).\n\nWelcher Behälter passt, ist Weltwissen: Suppen und Nudeln kommen in die `bát`, Getränke in `cốc` oder `chai`, Gebratenes und Pfannkuchen auf den `đĩa`. Ein falscher Behälter klingt so komisch wie im Deutschen „eine Tasse Pfannkuchen“.",
          table: {
            head: ["Nord", "Süd", "Deutsch", "typisch für"],
            rows: [
              ["bát", "tô", "Schale, Schüssel", "phở, bún bò, cơm hến"],
              ["cốc", "ly", "Glas, Becher", "trà đá, cà phê, nước"],
              ["đĩa", "dĩa", "Teller", "bánh khoái, cơm rang"],
              ["chai", "chai", "Flasche", "bia, nước"],
              ["lon", "lon", "Dose", "bia, nước ngọt"],
              ["suất", "phần", "Portion", "cơm, bún chả"]
            ]
          },
          examples: [
            { vi: "Cho tôi hai bát phở.", de: "Zwei Schalen Phở, bitte.", gloss: "geben | ich | zwei | Schale | Phở" },
            { vi: "Cho anh một cốc trà đá.", de: "Ein Glas Eistee für mich, bitte.", gloss: "geben | (ich, älterer Mann) | ein | Glas | Eistee" },
            { vi: "Cho em một đĩa bánh khoái.", de: "Einen Teller Bánh khoái, bitte.", gloss: "geben | (ich, jünger) | ein | Teller | Bánh khoái" },
            { vi: "Tôi muốn hai cái bát.", de: "Ich möchte zwei Schüsseln (leeres Geschirr).", gloss: "ich | wollen | zwei | CL | Schüssel" }
          ],
          contrast: "Das Deutsche kennt dasselbe Muster bei Maßnomen: „zwei Glas Bier“, „eine Tasse Kaffee“. Der Unterschied: Im Deutschen ist das ein Sonderfall, im Vietnamesischen nur eine Variante des allgemeinen Klassifikatorsystems – gezählt wird nie ohne Klassifikator.",
          south: "Im Süden: `tô` statt `bát`, `ly` statt `cốc`, `dĩa` statt `đĩa`, meist `phần` statt `suất`. Im Norden bezeichnet `tô` eine besonders große Schüssel."
        },
        {
          id: "g-k05-muon-cho",
          title: "Wünschen und Bestellen: muốn und cho tôi",
          term: "Volitionales Verb; Bittformel mit cho",
          pattern: "S + muốn + V / N  ·  Cho + Selbstbezeichnung + Num + CL + N",
          text: "`muốn` „wollen, möchten“ ist ein **volitionales Verb**. Es steht vor einem weiteren Verb (`Tôi muốn ăn phở.` „Ich möchte Phở essen.“) oder umgangssprachlich direkt vor einem Nomen (`Tôi muốn một cốc trà đá.`). Ein Infinitivmarker wie dt. „zu“ fehlt. Verneint wird mit `không muốn`, gefragt mit `(có) muốn … không?`.\n\nDie eigentliche Bestellformel ist `cho` + Sprecher + Bestelltes, wörtlich „gib mir …“: `Cho tôi một bát phở.` Das ist **nicht unhöflich**, sondern der normale Imperativ ohne Subjekt. Die Höflichkeit steckt in der **Selbstbezeichnung**: Jonas (30) sagt gegenüber einer jungen Bedienung `cho anh …`, Linh `cho chị …`, gegenüber einer älteren Köchin `cho cháu …`. Das neutrale `tôi` ist korrekt, wirkt aber distanziert.\n\n`nữa` „noch, mehr“ steht am Ende der Mengenangabe: `Cho anh một chai bia nữa.` „Noch eine Flasche Bier.“",
          examples: [
            { vi: "Tôi muốn uống bia.", de: "Ich möchte Bier trinken.", gloss: "ich | wollen | trinken | Bier" },
            { vi: "Anh có muốn ăn bánh khoái không?", de: "Möchtest du Bánh khoái essen?", gloss: "du | (có) | wollen | essen | Bánh khoái | nicht?" },
            { vi: "Cho cháu một bát bún bò ạ.", de: "Eine Schale Bún bò für mich, bitte.", gloss: "geben | (ich, Neffe/Nichte) | eine | Schale | Bún bò | (höflich)" },
            { vi: "Cho anh một chai bia nữa.", de: "Noch eine Flasche Bier für mich.", gloss: "geben | (ich) | eine | Flasche | Bier | noch" }
          ],
          contrast: "„Gib mir ein Bier!“ klingt im Deutschen barsch; man sagt „Ich hätte gern …“. Im Vietnamesischen ist `cho tôi …` neutral – entscheidend sind die richtige Anrede und Partikeln wie `nhé` oder `ạ`."
        },
        {
          id: "g-k05-goi-nhe",
          title: "Bedienung rufen und abschwächen: ơi, nhé, làm ơn",
          term: "Vokativpartikel; Satzendpartikel zur Abschwächung",
          pattern: "Anredeterm + ơi!  ·  Bitte + nhé",
          text: "Um jemanden anzusprechen, hängt man die **Vokativpartikel** `ơi` an den Anredeterm: `Em ơi!` ruft eine jüngere Bedienung, `Chị ơi!` eine etwas ältere Frau, `Cô ơi!` eine Frau im Alter der eigenen Eltern. Im vietnamesischen Lokal ist lautes Rufen völlig normal – Winken oder Warten wie in Deutschland funktioniert oft nicht.\n\nDie **Satzendpartikel** `nhé` (Süd `nha`) macht aus einer Aufforderung einen freundlichen Vorschlag, der auf Zustimmung zielt – etwa „…, ja?“ oder „…, okay?“: `Cho anh hai bát phở nhé.` Gegenüber Älteren ist `ạ` die passendere Partikel, `nhé` wirkt dort zu vertraulich.\n\n`làm ơn` (wörtlich „eine Gefälligkeit tun“) entspricht etwa „bitte“, steht am Satzanfang und klingt förmlich oder eindringlich: `Làm ơn cho tôi một cốc nước.` Man hört es eher gegenüber Fremden, auf Schildern oder bei dringenden Bitten. Im Lokal wirkt es leicht steif – Einheimische sagen einfach `Em ơi, cho anh …`.",
          table: {
            head: ["Element", "Position", "Funktion"],
            rows: [
              ["ơi", "nach Anredeterm", "Ruf, Aufmerksamkeit"],
              ["nhé", "satzfinal", "freundliche Bitte, Zustimmung einholen"],
              ["ạ", "satzfinal", "Respekt gegenüber Älteren"],
              ["làm ơn", "satzinitial", "förmliches „bitte“"]
            ]
          },
          examples: [
            { vi: "Em ơi, cho anh thực đơn!", de: "Hallo, die Speisekarte bitte!", gloss: "jüngere Person | VOK | geben | (ich) | Speisekarte" },
            { vi: "Cho chị một cốc trà đá nhé.", de: "Ein Glas Eistee für mich, ja?", gloss: "geben | (ich, ältere Frau) | ein | Glas | Eistee | PART" },
            { vi: "Làm ơn cho tôi một chai nước.", de: "Bitte eine Flasche Wasser.", gloss: "bitte | geben | ich | eine | Flasche | Wasser" }
          ],
          contrast: "Deutsch „bitte“ ist eine Partikel, die fast überall stehen kann. Im Vietnamesischen verteilt sich Höflichkeit auf Anredeterm, `ơi` am Anfang und `nhé`/`ạ` am Ende.",
          south: "Im Süden lautet `nhé` meist `nha` (`Cho anh hai tô phở nha.`)."
        }
      ],
      dialogue: {
        setting: "Ein volles Bún-bò-Lokal in Huế. Jonas (30) und Linh (28) bestellen bei Minh, einem jungen Kellner (ca. 20).",
        lines: [
          { who: "Jonas", vi: "Em ơi!", de: "Hallo, junger Mann!" },
          { who: "Minh", vi: "Dạ, anh chị ăn gì ạ?", de: "Ja, was möchten Sie essen?" },
          { who: "Jonas", vi: "Cho anh hai bát bún bò Huế nhé.", de: "Zwei Schalen Bún bò Huế für uns, ja?" },
          { who: "Minh", vi: "Dạ. Anh chị uống gì ạ?", de: "Gern. Was trinken Sie?" },
          { who: "Linh", vi: "Cho chị một cốc trà đá.", de: "Für mich ein Glas Eistee." },
          { who: "Jonas", vi: "Anh muốn uống bia. Cho anh một chai bia Huda nhé.", de: "Ich möchte Bier trinken. Eine Flasche Huda für mich, ja?" },
          { who: "Minh", vi: "Dạ. Anh chị có muốn ăn bánh khoái không ạ?", de: "Gern. Möchten Sie auch Bánh khoái essen?" },
          { who: "Linh", vi: "Có. Cho chị một đĩa bánh khoái.", de: "Ja. Einen Teller Bánh khoái für mich." },
          { who: "Jonas", vi: "Em ơi, cho anh một chai bia nữa nhé!", de: "Hallo, noch eine Flasche Bier für mich, ja?" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Cho tôi hai ___ phở.", de: "Zwei Schalen Phở, bitte.", options: ["bát", "cốc", "chai"], answer: "bát", explain: "Suppen werden in der Schale (bát) serviert; cốc und chai sind Behälter für Getränke." },
        { type: "gap", vi: "Cho anh một ___ trà đá.", de: "Ein Glas Eistee, bitte.", options: ["cốc", "đĩa", "bát"], answer: "cốc", explain: "Getränke im Glas: cốc (Süd ly)." },
        { type: "gap", vi: "Cho em một ___ bánh khoái.", de: "Einen Teller Bánh khoái, bitte.", options: ["đĩa", "cốc", "chai"], answer: "đĩa", explain: "Pfannkuchen kommen auf den Teller: đĩa (Süd dĩa)." },
        { type: "gap", vi: "Em ___! Cho anh một chai bia.", de: "Hallo! Eine Flasche Bier, bitte.", options: ["ơi", "nhé", "ạ"], answer: "ơi", explain: "ơi ist die Vokativpartikel nach dem Anredeterm: Em ơi! nhé und ạ stehen am Satzende." },
        { type: "build", vi: "Cho tôi một bát bún_bò.", de: "Eine Schale Bún bò, bitte.", extra: ["cốc", "là"] },
        { type: "build", vi: "Tôi muốn uống bia.", de: "Ich möchte Bier trinken.", extra: ["cho", "là"] },
        { type: "build", vi: "Cho anh hai chai bia nhé.", de: "Zwei Flaschen Bier für mich, ja?", extra: ["bát", "ơi"] },
        { type: "translate", de: "Ich möchte Tee trinken.", answers: ["Tôi muốn uống trà."] },
        { type: "translate", de: "Zwei Gläser Eistee, bitte.", answers: ["Cho tôi hai cốc trà đá.", "Cho tôi hai cốc trà đá nhé.", "Làm ơn cho tôi hai cốc trà đá.", "Cho anh hai cốc trà đá.", "Cho anh hai cốc trà đá nhé.", "Cho em hai cốc trà đá.", "Cho em hai cốc trà đá nhé.", "Cho chị hai cốc trà đá.", "Cho chị hai cốc trà đá nhé."] },
        { type: "mc", q: "Was bedeutet „hai cái bát“ im Unterschied zu „hai bát phở“?", vi: "hai cái bát", options: ["zwei (leere) Schüsseln als Gegenstände", "zwei Schalen Phở", "zwei Portionen Reis"], answer: 0, explain: "Mit cái ist bát das gezählte Nomen (Geschirr). Ohne cái ist bát Behälterklassifikator für den Inhalt." },
        { type: "mc", q: "Wie ruft Jonas (30) die junge Bedienung?", options: ["Em ơi!", "Mày ơi!", "Ông ơi!"], answer: 0, explain: "em für Jüngere. mày ist grob, ông für alte Männer." },
        { type: "mc", q: "Wie heißt „cốc“ im Süden?", options: ["ly", "tô", "dĩa"], answer: 0, explain: "cốc (Nord) = ly (Süd); tô entspricht bát, dĩa entspricht đĩa." },
        { type: "listen", vi: "Cho anh một chai bia nữa nhé.", de: "Noch eine Flasche Bier für mich, ja?" },
        { type: "speak", vi: "Em ơi, cho anh hai bát bún bò nhé!", de: "Hallo, zwei Schalen Bún bò für mich, ja?" },
        { type: "pairs", pairs: [["bát", "Schale"], ["cốc", "Glas"], ["đĩa", "Teller"], ["chai", "Flasche"], ["suất", "Portion"]] }
      ]
    },

    // ───────────────────────────── k05l3 ─────────────────────────────
    {
      id: "k05l3",
      title: "Vorlieben & Potentialis",
      goal: "Du kannst sagen, was du gern isst, was du (nicht) essen kannst und dass du vegetarisch isst.",
      vocab: [
        { vi: "thích", de: "mögen, gern haben, gern tun", pos: "V", emoji: "❤️", ex: { vi: "Tôi thích bún bò Huế.", de: "Ich mag Bún bò Huế." } },
        { vi: "được", de: "(nach dem Verb) können, möglich sein", pos: "Part", note: "Potentialis-Komplement: ăn được = essen können. Vor dem Verb hat được eine andere Bedeutung (K10).", ex: { vi: "Tôi ăn được cay.", de: "Ich kann scharf essen." } },
        { vi: "ăn chay", de: "vegetarisch essen", pos: "V", emoji: "🥦", ex: { vi: "Hôm nay tôi ăn chay.", de: "Heute esse ich vegetarisch." } },
        { vi: "chay", de: "vegetarisch (buddhistisch, ohne Fleisch)", pos: "Adj", note: "Huế ist für seine buddhistische Klosterküche berühmt.", ex: { vi: "Huế có nhiều món chay.", de: "Huế hat viele vegetarische Gerichte." } },
        { vi: "thịt", de: "Fleisch", pos: "N", emoji: "🥩", ex: { vi: "Tôi không ăn thịt.", de: "Ich esse kein Fleisch." } },
        { vi: "thịt bò", de: "Rindfleisch", pos: "N", emoji: "🐄", ex: { vi: "Bún bò Huế có thịt bò.", de: "In Bún bò Huế ist Rindfleisch." } },
        { vi: "thịt lợn", de: "Schweinefleisch", pos: "N", emoji: "🐖", south: "thịt heo", ex: { vi: "Tôi không ăn được thịt lợn.", de: "Ich kann kein Schweinefleisch essen." } },
        { vi: "gà", de: "Huhn, Hähnchen", pos: "N", emoji: "🐔", cls: "con", ex: { vi: "Tôi thích ăn gà.", de: "Ich esse gern Hähnchen." } },
        { vi: "cá", de: "Fisch", pos: "N", emoji: "🐟", cls: "con", ex: { vi: "Linh rất thích cá.", de: "Linh mag Fisch sehr." } },
        { vi: "tôm", de: "Garnele", pos: "N", emoji: "🦐", cls: "con", ex: { vi: "Bánh khoái có tôm.", de: "In Bánh khoái sind Garnelen." } },
        { vi: "rau", de: "Gemüse, Kräuter", pos: "N", emoji: "🥬", ex: { vi: "Tôi thích ăn rau.", de: "Ich esse gern Gemüse." } },
        { vi: "đậu phụ", de: "Tofu", pos: "N", south: "đậu hũ", ex: { vi: "Đậu phụ rất ngon.", de: "Tofu ist sehr lecker." } },
        { vi: "ớt", de: "Chili", pos: "N", emoji: "🌶️", ex: { vi: "Em không ăn được ớt.", de: "Ich kann keine Chili essen." } },
        { vi: "hành", de: "Frühlingszwiebel, Zwiebel", pos: "N", emoji: "🧅", ex: { vi: "Phở có hành.", de: "In der Phở sind Frühlingszwiebeln." } },
        { vi: "sả", de: "Zitronengras", pos: "N", emoji: "🌿", ex: { vi: "Bún bò Huế có sả.", de: "In Bún bò Huế ist Zitronengras." } }
      ],
      grammar: [
        {
          id: "g-k05-thich-muon",
          title: "Vorlieben: thích – und der Unterschied zu muốn",
          term: "Präferenzverb vs. volitionales Verb",
          pattern: "S + thích + N / V (+ O)",
          text: "`thích` „mögen, gern haben“ nimmt entweder ein **Nomen** oder ein **Verb (mit Objekt)** als Komplement: `Tôi thích cá.` „Ich mag Fisch.“ – `Tôi thích ăn cá.` „Ich esse gern Fisch.“ Ein deutsches „gern“ als eigenes Adverb gibt es nicht; die Bedeutung steckt im Verb `thích`.\n\nWie Stativverben lässt sich `thích` **graduieren**: `rất thích`, `thích … lắm` (`lắm` steht am Satzende, hinter dem Objekt: `Tôi thích cá lắm.`). Verneint wird mit `không thích`, gefragt mit `(có) thích … không?`.\n\n**muốn vs. thích**: `muốn` drückt einen **momentanen Wunsch** aus („jetzt möchte ich“), `thích` eine **dauerhafte Vorliebe** („generell mag ich“). Beim Bestellen heißt es also `Tôi muốn ăn bún bò.` – nicht `Tôi thích ăn bún bò.`, was eine allgemeine Aussage über deinen Geschmack wäre.\n\n`ăn chay` „vegetarisch essen“ ist ein Verb-Objekt-Kompositum. Viele Buddhisten essen am 1. und 15. Tag des Mondmonats (`mùng một`, `rằm`) vegetarisch; Huế ist für seine Klosterküche berühmt.",
          table: {
            head: ["", "thích", "muốn"],
            rows: [
              ["Bedeutung", "mögen, gern tun", "wollen, möchten"],
              ["Zeitbezug", "dauerhaft, generisch", "aktuell, situativ"],
              ["Beispiel", "Tôi thích ăn cá.", "Tôi muốn ăn cá."],
              ["Deutsch", "Ich esse gern Fisch.", "Ich möchte (jetzt) Fisch essen."]
            ]
          },
          examples: [
            { vi: "Tôi thích bún bò Huế.", de: "Ich mag Bún bò Huế.", gloss: "ich | mögen | Bún bò Huế" },
            { vi: "Linh thích ăn rau lắm.", de: "Linh isst sehr gern Gemüse.", gloss: "Linh | mögen | essen | Gemüse | sehr" },
            { vi: "Anh có thích ăn cá không?", de: "Isst du gern Fisch?", gloss: "du | (có) | mögen | essen | Fisch | nicht?" },
            { vi: "Hôm nay tôi muốn ăn chay.", de: "Heute möchte ich vegetarisch essen.", gloss: "heute | ich | wollen | essen | vegetarisch" }
          ],
          contrast: "Deutsch drückt Vorliebe oft mit dem Adverb „gern“ aus („Ich esse gern Fisch“). Im Vietnamesischen ist `thích` das Hauptverb, und die eigentliche Handlung (`ăn`) folgt ihm."
        },
        {
          id: "g-k05-potentialis",
          title: "V + được: etwas tun können",
          term: "Potentialis-Komplement (postverbales được)",
          pattern: "S + (không) + V + được + (O)  ·  S + V + O + được",
          text: "Ob man etwas tun **kann** – weil man es verträgt, darf oder weil es möglich ist –, drückt das Vietnamesische mit einem **postverbalen** `được` aus, einem sogenannten **Potentialis-Komplement**: `Tôi ăn được cay.` „Ich kann scharf essen.“\n\n`được` steht direkt nach dem Verb oder nach dem Objekt; beide Stellungen sind üblich:\n\n- `Tôi ăn được cay.`\n- `Tôi ăn cay được.`\n\n**Negation**: `không` steht vor dem Verb, nicht vor `được`: `Tôi không ăn được ớt.` „Ich kann keine Chili essen.“ **Frage**: `Anh ăn được cay không?` oder `Anh có ăn cay được không?` Die Kurzantwort lautet `Được.` „Geht/Kann ich.“ bzw. `Không được.` „Geht nicht.“\n\nVorsicht: **Vor** dem Verb hat `được` eine ganz andere Funktion (`được ăn` „essen dürfen, in den Genuss kommen“, Benefaktiv, K10). Für „können“ steht es immer **hinter** dem Verb.\n\nIm Deutschen ist „können“ ein Modalverb mit Infinitiv; im Vietnamesischen ist die Fähigkeit ein Komplement zum Vollverb – ähnlich wie bei Ergebnisangaben („auf-essen“).",
          examples: [
            { vi: "Tôi ăn được cay.", de: "Ich kann scharf essen.", gloss: "ich | essen | können | scharf" },
            { vi: "Linh không ăn được ớt.", de: "Linh kann keine Chili essen.", gloss: "Linh | nicht | essen | können | Chili" },
            { vi: "Anh ăn cay được không?", de: "Kannst du scharf essen?", gloss: "du | essen | scharf | können | nicht?" },
            { vi: "Được. Tôi ăn được thịt bò.", de: "Ja. Ich kann Rindfleisch essen.", gloss: "können | ich | essen | können | Rindfleisch" }
          ],
          contrast: "Deutsch: Modalverb + Infinitiv am Satzende („Ich kann scharf essen“). Vietnamesisch: Vollverb + Komplement `được` – die Fähigkeit wird dem Verb nachgestellt, nicht vorangestellt."
        }
      ],
      dialogue: {
        setting: "Abends in einem vegetarischen Restaurant in Huế. Linhs Cousin Tuấn (35) hat Jonas und Linh eingeladen. Jonas nennt ihn anh und sich selbst em.",
        lines: [
          { who: "Tuấn", vi: "Jonas ăn được cay không?", de: "Jonas, kannst du scharf essen?" },
          { who: "Jonas", vi: "Dạ, em ăn được cay. Em thích ăn cay lắm.", de: "Ja, ich kann scharf essen. Ich esse sehr gern scharf." },
          { who: "Tuấn", vi: "Linh có ăn được cay không?", de: "Und Linh, kannst du scharf essen?" },
          { who: "Linh", vi: "Em không ăn được cay. Em thích ăn ngọt.", de: "Ich kann nicht scharf essen. Ich esse gern süß." },
          { who: "Tuấn", vi: "Hôm nay anh muốn ăn chay.", de: "Heute möchte ich vegetarisch essen." },
          { who: "Jonas", vi: "Anh có thích ăn thịt không?", de: "Isst du (sonst) gern Fleisch?" },
          { who: "Tuấn", vi: "Có, anh thích. Hôm nay là ngày rằm.", de: "Ja, schon. Heute ist der 15. des Mondmonats." },
          { who: "Jonas", vi: "Em cũng muốn ăn chay. Đậu phụ sả ớt ngon lắm!", de: "Ich möchte auch vegetarisch essen. Tofu mit Zitronengras und Chili ist sehr lecker!" },
          { who: "Linh", vi: "Ớt? Em không ăn được ớt!", de: "Chili? Ich kann keine Chili essen!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Tôi ăn ___ cay.", de: "Ich kann scharf essen.", options: ["được", "là", "lắm"], answer: "được", explain: "Potentialis: V + được = etwas tun können." },
        { type: "gap", vi: "Anh có ___ ăn cá không?", de: "Isst du gern Fisch?", options: ["thích", "được", "là"], answer: "thích", explain: "Vorliebe = thích + V. được stünde hinter dem Verb." },
        { type: "gap", vi: "Hôm nay tôi ăn ___.", de: "Heute esse ich vegetarisch.", options: ["chay", "được", "lắm"], answer: "chay", explain: "ăn chay = vegetarisch essen." },
        { type: "gap", vi: "Anh ăn được cay ___?", de: "Kannst du scharf essen?", options: ["không", "là", "được"], answer: "không", explain: "Ja/Nein-Frage: … không? am Satzende." },
        { type: "build", vi: "Tôi không ăn_được cay.", de: "Ich kann nicht scharf essen.", extra: ["là", "rất"] },
        { type: "build", vi: "Linh thích ăn đậu_phụ.", de: "Linh isst gern Tofu.", extra: ["được", "là"] },
        { type: "build", vi: "Anh có thích ăn cá không?", de: "Isst du gern Fisch?", extra: ["được", "là"] },
        { type: "translate", de: "Ich esse sehr gern Fisch.", answers: ["Tôi rất thích ăn cá.", "Tôi thích ăn cá lắm.", "Tôi rất thích cá.", "Tôi thích cá lắm."] },
        { type: "translate", de: "Kannst du scharf essen? (zu einem Mann, anh)", answers: ["Anh ăn được cay không?", "Anh có ăn được cay không?", "Anh ăn cay được không?", "Anh có ăn cay được không?"] },
        { type: "mc", q: "Was drückt „ăn được“ aus?", vi: "Tôi ăn được thịt bò.", options: ["Fähigkeit/Möglichkeit: essen können", "Passiv: gegessen werden", "Vergangenheit: gegessen haben"], answer: 0, explain: "Postverbales được ist ein Potentialis-Komplement: „können“." },
        { type: "mc", q: "Jonas bestellt im Restaurant. Welches Verb passt für den momentanen Wunsch?", vi: "Tôi ___ ăn bún bò.", options: ["muốn", "thích", "được"], answer: 0, explain: "muốn = aktueller Wunsch. thích wäre eine allgemeine Vorliebe, được (vor dem Verb) bedeutet „dürfen“." },
        { type: "mc", q: "Wo steht die Negation in „Ich kann keine Chili essen“?", options: ["Tôi không ăn được ớt.", "Tôi ăn không được ớt.", "Tôi ăn được không ớt."], answer: 0, explain: "Im Standard steht không vor dem Verb: không ăn được." },
        { type: "listen", vi: "Em không ăn được ớt.", de: "Ich kann keine Chili essen." },
        { type: "speak", vi: "Tôi ăn chay.", de: "Ich esse vegetarisch." },
        { type: "pairs", pairs: [["thịt bò", "Rindfleisch"], ["thịt lợn", "Schweinefleisch"], ["gà", "Huhn"], ["cá", "Fisch"], ["rau", "Gemüse"], ["tôm", "Garnele"]] }
      ]
    },

    // ───────────────────────────── k05l4 ─────────────────────────────
    {
      id: "k05l4",
      title: "Am Tisch",
      goal: "Du kannst zum Essen einladen, Speisen verbinden, Alternativen erfragen und die Rechnung verlangen.",
      vocab: [
        { vi: "mời", de: "einladen; bitten (zum Essen); anbieten", pos: "V", ex: { vi: "Mời anh uống trà.", de: "Bitte, trink Tee." } },
        { vi: "cơm", de: "gekochter Reis; Mahlzeit", pos: "N", emoji: "🍚", ex: { vi: "Con mời bố mẹ ăn cơm.", de: "Liebe Eltern, bitte esst. (Formel vor dem Essen)" } },
        { vi: "cả nhà", de: "die ganze Familie; alle (am Tisch)", pos: "N", ex: { vi: "Mời cả nhà ăn cơm.", de: "Guten Appetit, alle zusammen! (wörtl. „Ich bitte die ganze Familie zu essen.“)" } },
        { vi: "đũa", de: "Essstäbchen", pos: "N", emoji: "🥢", cls: "đôi", ex: { vi: "Em ơi, cho anh đũa.", de: "Hallo, Stäbchen für mich, bitte." } },
        { vi: "thìa", de: "Löffel", pos: "N", emoji: "🥄", south: "muỗng", cls: "cái", ex: { vi: "Em ơi, cho chị một cái thìa.", de: "Hallo, einen Löffel für mich, bitte." } },
        { vi: "nước mắm", de: "Fischsauce", pos: "N", ex: { vi: "Tôi thích nước mắm.", de: "Ich mag Fischsauce." } },
        { vi: "gắp", de: "(mit Stäbchen) greifen, nehmen", pos: "V", ex: { vi: "Linh gắp rau.", de: "Linh nimmt sich (mit Stäbchen) Gemüse." } },
        { vi: "no", de: "satt", pos: "Adj", ex: { vi: "Tôi no quá!", de: "Ich bin so satt!" } },
        { vi: "và", de: "und", pos: "Konj", ex: { vi: "Tôi ăn cơm và cá.", de: "Ich esse Reis und Fisch." } },
        { vi: "với", de: "mit; (umgangssprachlich) und", pos: "Präp", ex: { vi: "Jonas ăn phở với Linh.", de: "Jonas isst Phở mit Linh." } },
        { vi: "cùng", de: "zusammen, gemeinsam; mit", pos: "Adv", ex: { vi: "Jonas và Linh cùng ăn bún bò.", de: "Jonas und Linh essen zusammen Bún bò." } },
        { vi: "hay", de: "oder (in Fragen)", pos: "Konj", note: "Als Häufigkeitsadverb „oft“ erst in K08.", ex: { vi: "Anh uống trà hay cà phê?", de: "Trinkst du Tee oder Kaffee?" } },
        { vi: "hoặc", de: "oder (in Aussagen)", pos: "Konj", ex: { vi: "Tôi uống trà hoặc nước.", de: "Ich trinke Tee oder Wasser." } },
        { vi: "tính tiền", de: "die Rechnung machen, abrechnen", pos: "Phr", ex: { vi: "Em ơi, tính tiền!", de: "Hallo, die Rechnung bitte!" } },
        { vi: "trăm phần trăm", de: "„hundert Prozent“ – ex! (Trinkspruch)", pos: "Phr", emoji: "🍻", ex: { vi: "Trăm phần trăm nhé!", de: "Auf ex, ja?" } }
      ],
      grammar: [
        {
          id: "g-k05-moi",
          title: "mời – Einladung und Essensformel",
          term: "Performatives Verb der Einladung",
          pattern: "(S) + mời + Adressat + V (+ O)",
          text: "`mời` heißt „einladen, (höflich) bitten, anbieten“. Mit `mời` führt man die Handlung nicht selbst aus, sondern **bietet sie dem Gegenüber an**: `Mời anh uống trà.` „Bitte, trink (doch) Tee.“ Das Verb ist **performativ** – mit dem Aussprechen ist die Einladung vollzogen.\n\nAm Familientisch ist `mời` eine feste **Essensformel**: Bevor man isst, „lädt“ man alle Anwesenden ein, und zwar **von den Ältesten abwärts**: `Con mời ông bà ăn cơm. Con mời bố mẹ ăn cơm.` Erst danach greift man zu. Die Älteren antworten knapp mit `Ừ` oder `Mời …`. Ein pauschales `Mời cả nhà ăn cơm.` ist der moderne Kurzweg.\n\nDie Selbstbezeichnung zeigt dabei die Beziehung: Kinder sagen `con`, Neffen und Nichten `cháu`. Jonas sagt zu Linhs Tante also `Cháu mời cô ăn cơm ạ.`\n\nWichtig: `mời` heißt auch „spendieren, einladen = bezahlen“. `Hôm nay cô mời!` bedeutet „Heute lade ich ein!“ – wer einlädt, zahlt. Getrennte Rechnungen sind in Vietnam unüblich.",
          examples: [
            { vi: "Cháu mời cô ăn cơm ạ.", de: "(Tante,) bitte, iss. (Essensformel)", gloss: "(ich, Neffe) | einladen | Tante | essen | Reis | (höflich)" },
            { vi: "Mời anh uống trà.", de: "Bitte, trink Tee.", gloss: "einladen | du | trinken | Tee" },
            { vi: "Mời cả nhà ăn cơm.", de: "Guten Appetit, alle zusammen!", gloss: "einladen | ganze | Familie | essen | Reis" },
            { vi: "Hôm nay cô mời!", de: "Heute lade ich (die Tante) ein!", gloss: "heute | (ich, Tante) | einladen" }
          ],
          contrast: "„Guten Appetit“ wünscht dem anderen etwas. `mời` dagegen bietet das Essen hierarchisch geordnet an – es ist eine Respektgeste. `Chúc ngon miệng` („Guten Appetit“) gibt es auch, wirkt aber eher übersetzt oder förmlich."
        },
        {
          id: "g-k05-koordination",
          title: "und/mit: và, với, cùng",
          term: "Koordination und Komitativ",
          pattern: "A và B  ·  A với B  ·  A cùng B + V  ·  A + V + cùng/với + B",
          text: "Das Vietnamesische hat drei häufige Wörter, die dem deutschen „und/mit“ entsprechen:\n\n- `và` ist die **neutrale koordinierende Konjunktion** „und“. Sie verbindet Nomen (`cơm và cá`), Adjektive (`ngon và rẻ`) und ganze Sätze. In Aufzählungen steht sie vor dem letzten Glied: `cá, rau và cơm`.\n- `với` ist ursprünglich eine **komitative Präposition** „mit“: `Jonas ăn phở với Linh.` „Jonas isst Phở mit Linh.“ Umgangssprachlich verbindet `với` auch zwei Nomen wie „und“: `cơm với cá` „Reis und Fisch“ – sehr typisch beim Bestellen.\n- `cùng` betont das **Gemeinsame**: als Adverb vor dem Verb „zusammen“ (`Jonas và Linh cùng ăn.` „…essen zusammen“) oder als Präposition „mit, zusammen mit“ (`Linh ăn cùng Jonas.`).\n\nFaustregel: `và` für neutrale Aufzählung, `với` für Begleitung und lockere Verbindung, `cùng` für gemeinsames Handeln.",
          table: {
            head: ["Wort", "Wortart", "Bedeutung", "Beispiel"],
            rows: [
              ["và", "Konjunktion", "und (neutral)", "cơm và cá"],
              ["với", "Präposition / ugs. Konj.", "mit; und", "ăn với Linh; cơm với cá"],
              ["cùng", "Adverb / Präposition", "zusammen (mit)", "cùng ăn; ăn cùng Linh"]
            ]
          },
          examples: [
            { vi: "Tôi ăn cá và rau.", de: "Ich esse Fisch und Gemüse.", gloss: "ich | essen | Fisch | und | Gemüse" },
            { vi: "Cho anh cơm với cá.", de: "Reis und Fisch für mich.", gloss: "geben | (ich) | Reis | mit | Fisch" },
            { vi: "Jonas ăn bún bò với Linh.", de: "Jonas isst Bún bò mit Linh.", gloss: "Jonas | essen | Bún bò | mit | Linh" },
            { vi: "Jonas và Linh cùng uống trà.", de: "Jonas und Linh trinken zusammen Tee.", gloss: "Jonas | und | Linh | zusammen | trinken | Tee" }
          ],
          contrast: "Im Deutschen trennen sich „und“ (Konjunktion) und „mit“ (Präposition mit Dativ) klar. Im Vietnamesischen überlappen sich `và` und `với`, und Kasusendungen gibt es ohnehin nicht."
        },
        {
          id: "g-k05-hay-hoac",
          title: "oder: hay (Frage) vs. hoặc (Aussage)",
          term: "Alternativfrage vs. Disjunktion",
          pattern: "A hay B?  ·  A hoặc B.",
          text: "Das Deutsche hat ein einziges „oder“. Das Vietnamesische unterscheidet:\n\n- `hay` (auch `hay là`) bildet **Alternativfragen**: Der Sprecher bietet zwei Möglichkeiten an und erwartet, dass eine gewählt wird: `Anh uống trà hay cà phê?` „Trinkst du Tee oder Kaffee?“ Die Antwort ist eine der Alternativen – `Cà phê.` –, nicht „ja“ oder „nein“. Deshalb steht am Ende **kein** `không`.\n- `hoặc` ist die **Disjunktion in Aussagen**: „das eine oder das andere, beides möglich“: `Tôi uống trà hoặc nước.` „Ich trinke Tee oder Wasser.“\n\nTypischer Fehler: *Anh uống trà hoặc cà phê?* – mit `hoặc` klingt das wie eine Aussage, die man nur mit Frageintonation versieht. Ebenso falsch ist die Mischung aus Alternativ- und Ja/Nein-Frage (*Anh uống trà hay cà phê không?*).\n\nUmgangssprachlich hört man `hay` gelegentlich auch in Aussagen (`trà hay cà phê cũng được` „Tee oder Kaffee, beides geht“). Für Lernende gilt: in Fragen `hay`, in Aussagen `hoặc`.",
          examples: [
            { vi: "Anh uống bia hay trà?", de: "Trinkst du Bier oder Tee?", gloss: "du | trinken | Bier | oder(FRAGE) | Tee" },
            { vi: "Chị ăn phở hay bún bò?", de: "Isst du Phở oder Bún bò?", gloss: "du | essen | Phở | oder(FRAGE) | Bún bò" },
            { vi: "Tôi uống trà hoặc nước.", de: "Ich trinke Tee oder Wasser.", gloss: "ich | trinken | Tee | oder | Wasser" }
          ],
          contrast: "Deutsch unterscheidet die Alternativfrage („Tee oder Kaffee?“ – fallende Intonation) von der Ja/Nein-Frage („Möchtest du Tee oder Kaffee?“ – steigend) nur durch die Intonation. Das Vietnamesische trennt sie lexikalisch: `hay` vs. `… không?`."
        }
      ],
      dialogue: {
        setting: "Familienessen in einem Restaurant am Parfümfluss. Linhs Tante, Cô Hạnh (55), hat eingeladen. Jonas spricht sie wie Linh mit cô an und nennt sich cháu.",
        lines: [
          { who: "Linh", vi: "Cháu mời cô ăn cơm ạ.", de: "Tante, bitte iss. (Essensformel)" },
          { who: "Jonas", vi: "Cháu mời cô ăn cơm ạ.", de: "Tante, bitte iss." },
          { who: "Cô Hạnh", vi: "Ừ, mời hai cháu. Jonas ăn được nước mắm không?", de: "Ja, bitte, ihr beiden. Jonas, kannst du Fischsauce essen?" },
          { who: "Jonas", vi: "Dạ, được ạ. Cháu thích nước mắm lắm.", de: "Ja, kann ich. Ich mag Fischsauce sehr." },
          { who: "Cô Hạnh", vi: "Jonas uống bia hay nước ngọt?", de: "Jonas, trinkst du Bier oder Limonade?" },
          { who: "Jonas", vi: "Dạ, cháu uống bia ạ. Một, hai, ba, dô!", de: "Ich trinke Bier. Eins, zwei, drei – prost!" },
          { who: "Cô Hạnh", vi: "Cháu ăn cá với rau nhé.", de: "Iss Fisch und Gemüse, ja?" },
          { who: "Jonas", vi: "Dạ, cháu no quá! Em ơi, tính tiền!", de: "Ich bin so satt! Hallo, die Rechnung bitte!" },
          { who: "Cô Hạnh", vi: "Không, hôm nay cô mời!", de: "Nein, heute lade ich ein!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Anh uống trà ___ cà phê?", de: "Trinkst du Tee oder Kaffee?", options: ["hay", "hoặc", "và"], answer: "hay", explain: "In der Alternativfrage steht hay; hoặc gehört in Aussagen." },
        { type: "gap", vi: "Tôi uống trà ___ cà phê.", de: "Ich trinke Tee oder Kaffee.", options: ["hoặc", "với", "mời"], answer: "hoặc", explain: "Aussage mit „oder“: hoặc. với hieße „mit/und“." },
        { type: "gap", vi: "Con ___ bố mẹ ăn cơm.", de: "Liebe Eltern, bitte esst.", options: ["mời", "cho", "muốn"], answer: "mời", explain: "Die Essensformel lautet mời + Adressat + ăn cơm." },
        { type: "gap", vi: "Jonas ăn bún bò ___ Linh.", de: "Jonas isst Bún bò mit Linh.", options: ["với", "hay", "hoặc"], answer: "với", explain: "Komitativ „mit (jemandem)“: với." },
        { type: "build", vi: "Mời cô ăn cơm.", de: "Tante, bitte iss.", extra: ["cho", "hay"] },
        { type: "build", vi: "Em ơi, tính tiền!", alts: ["Tính tiền, em ơi!"], de: "Hallo, die Rechnung bitte!", extra: ["mời", "hay"] },
        { type: "build", vi: "Anh ăn phở hay bún_bò?", de: "Isst du Phở oder Bún bò?", extra: ["hoặc", "không"] },
        { type: "translate", de: "Ich esse Fisch und Gemüse.", answers: ["Tôi ăn cá và rau.", "Tôi ăn cá với rau."] },
        { type: "translate", de: "Trinkst du (anh) Bier oder Tee?", answers: ["Anh uống bia hay trà?", "Anh uống bia hay là trà?", "Anh uống bia hay uống trà?"] },
        { type: "mc", q: "Welcher Satz ist eine korrekte Alternativfrage?", options: ["Chị ăn cơm hay phở?", "Chị ăn cơm hoặc phở?", "Chị ăn cơm hay phở không?"], answer: 0, explain: "Alternativfrage = hay, ohne không am Ende. hoặc steht in Aussagen." },
        { type: "mc", q: "Die Tante sagt am Ende „Hôm nay cô mời!“. Was meint sie?", options: ["Heute lade ich ein (ich zahle).", "Heute komme ich nicht mit.", "Heute ist das Essen scharf."], answer: 0, explain: "mời heißt auch „spendieren“: Wer einlädt, zahlt." },
        { type: "mc", q: "Was ruft man beim Anstoßen mit „Trăm phần trăm!“?", options: ["Hundert Prozent – auf ex!", "Hundert Đồng, bitte!", "Auf die Gesundheit der Eltern!"], answer: 0, explain: "„Hundert Prozent“ heißt: Glas ganz leer trinken." },
        { type: "listen", vi: "Cháu mời cô ăn cơm ạ.", de: "Tante, bitte iss." },
        { type: "speak", vi: "Mời cả nhà ăn cơm.", de: "Guten Appetit, alle zusammen!" },
        { type: "pairs", pairs: [["đũa", "Essstäbchen"], ["thìa", "Löffel"], ["nước mắm", "Fischsauce"], ["tính tiền", "abrechnen"], ["no", "satt"]] }
      ]
    }
  ],

  // ───────────────────────────── Boss ─────────────────────────────
  boss: {
    title: "Garküche in Huế",
    npc: "Cô Tâm",
    role: "Garküchenbesitzerin (ca. 55)",
    setting: "Mittagszeit an einer kleinen Garküche an der Stadtmauer von Huế. Cô Tâm kocht seit dreißig Jahren Bún bò. Jonas spricht sie mit cô an und nennt sich cháu – bestelle, kläre die Schärfe und bezahle.",
    turns: [
      {
        npc: { vi: "Chào cháu! Cháu ăn gì?", de: "Hallo! Was möchtest du essen?" },
        prompt: "Bestelle höflich eine Schale Bún bò Huế.",
        choices: [
          { vi: "Dạ, cho cháu một bát bún bò Huế ạ.", ok: true, fb: "Richtig – bát als Behälterklassifikator, cháu und ạ gegenüber der älteren Köchin." },
          { vi: "Dạ, cho cháu một cốc bún bò Huế ạ.", ok: false, fb: "cốc ist ein Glas für Getränke. Suppe kommt in die Schale: một bát bún bò." },
          { vi: "Dạ, cháu là bún bò Huế ạ.", ok: false, fb: "là ist Kopula – du hast gesagt „Ich bin Bún bò Huế“. Bestellen: cho cháu …" }
        ]
      },
      {
        npc: { vi: "Cháu ăn được cay không?", de: "Kannst du scharf essen?" },
        prompt: "Sag, dass du scharf essen kannst.",
        choices: [
          { vi: "Dạ, cháu ăn được cay ạ.", ok: true, fb: "Genau – Potentialis-Komplement V + được hinter dem Verb." },
          { vi: "Dạ, cháu được ăn cay ạ.", ok: false, fb: "Vor dem Verb bedeutet được „dürfen/in den Genuss kommen“. „Können“ = ăn được." },
          { vi: "Dạ, cháu là cay ạ.", ok: false, fb: "Das heißt „Ich bin scharf“. Kein là vor Stativverben – und du willst über das Essen sprechen." }
        ]
      },
      {
        npc: { vi: "Cháu uống gì? Trà đá hay bia?", de: "Was trinkst du? Eistee oder Bier?" },
        prompt: "Bestelle eine Flasche Bier.",
        choices: [
          { vi: "Dạ, cho cháu một chai bia ạ.", ok: true, fb: "Richtig – chai ist der Behälterklassifikator für Flaschen." },
          { vi: "Dạ, cho cháu một bát bia ạ.", ok: false, fb: "Bier in der Suppenschale? bát passt für Suppen, für Bier chai oder cốc." },
          { vi: "Dạ, cho cháu một con bia ạ.", ok: false, fb: "con ist der Klassifikator für Tiere. Getränke zählt man mit Behältern: một chai bia." }
        ]
      },
      {
        npc: { vi: "Bún bò có ngon không cháu?", de: "Schmeckt die Bún bò?" },
        prompt: "Sag, dass sie sehr lecker ist.",
        choices: [
          { vi: "Dạ, ngon lắm ạ!", ok: true, fb: "Perfekt – Antwort durch Wiederholung des Prädikats, lắm nachgestellt." },
          { vi: "Dạ, là ngon lắm ạ!", ok: false, fb: "ngon ist ein Stativverb und braucht keine Kopula: ngon lắm, ohne là." },
          { vi: "Dạ, rất ngon lắm ạ!", ok: false, fb: "rất und lắm doppeln sich. Entweder rất ngon oder ngon lắm." }
        ]
      },
      {
        npc: { vi: "Có cay quá không?", de: "Ist es zu scharf?" },
        prompt: "Sag, dass es nur ein bisschen scharf ist.",
        choices: [
          { vi: "Dạ, hơi cay ạ.", ok: true, fb: "Richtig – hơi steht vor dem Adjektiv: „etwas scharf“." },
          { vi: "Dạ, cay hơi ạ.", ok: false, fb: "hơi steht vor dem Adjektiv, nicht danach: hơi cay." },
          { vi: "Dạ, cháu hơi cay ạ.", ok: false, fb: "Mit cháu als Subjekt sagst du „Ich bin etwas scharf“. Das Essen ist gemeint – lass das Subjekt weg." }
        ]
      },
      {
        npc: { vi: "Cháu ăn bánh khoái không? Ngon lắm!", de: "Isst du auch Bánh khoái? Sehr lecker!" },
        prompt: "Bestelle einen Teller Bánh khoái und noch ein Bier.",
        choices: [
          { vi: "Dạ, cho cháu một đĩa bánh khoái và một chai bia nữa ạ.", ok: true, fb: "Sehr gut – đĩa für den Pfannkuchen, và verbindet, nữa = noch eins." },
          { vi: "Dạ, cho cháu một đĩa bánh khoái hay một chai bia nữa ạ.", ok: false, fb: "hay ist „oder“ in Fragen. Du willst beides: và (oder umgangssprachlich với)." },
          { vi: "Dạ, cho em một đĩa bánh khoái và một chai bia nữa ạ.", ok: false, fb: "em passt nicht gegenüber einer Frau im Alter deiner Eltern – sie ist cô, du bist cháu." }
        ]
      },
      {
        npc: { vi: "Cháu muốn uống gì nữa không?", de: "Möchtest du noch etwas trinken?" },
        prompt: "Lehne ab und bitte höflich um die Rechnung.",
        choices: [
          { vi: "Dạ không ạ. Cô ơi, tính tiền ạ.", ok: true, fb: "Richtig – cô ơi ruft respektvoll, tính tiền verlangt die Rechnung." },
          { vi: "Dạ không. Em ơi, tính tiền!", ok: false, fb: "em ơi ruft eine jüngere Person. Die ältere Besitzerin so zu rufen, ist respektlos – cô ơi." },
          { vi: "Dạ không ạ. Cô ơi, mời tiền ạ.", ok: false, fb: "mời heißt „einladen“. Die Rechnung verlangt man mit tính tiền." }
        ]
      }
    ],
    win: { vi: "Cháu nói tiếng Việt giỏi quá! Cảm ơn cháu nhé.", de: "Du sprichst aber gut Vietnamesisch! Danke dir." }
  }
});
