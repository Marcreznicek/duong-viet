/* Kapitel 1 – Hà Nội: Ankunft. Schrift, Laute, Töne. */
VN.addChapter({
  id: "k01",
  place: "Hà Nội",
  region: "Nordvietnam",
  title: "Ankunft: Schrift, Laute, Töne",
  intro: "Jonas landet mit Linh in Hà Nội. Bevor er das erste Wort sagt, lernst du das Handwerkszeug: die lateinische Schrift Chữ Quốc Ngữ, den Aufbau der vietnamesischen Silbe, die sechs Töne des Nordens und die wichtigsten An- und Auslaute. Am Ende kannst du grüßen, danken und dich entschuldigen – und am Flughafen Nội Bài bestehen.",
  lessons: [
    /* ───────────────────────── k01l1 ───────────────────────── */
    {
      id: "k01l1",
      title: "Chữ Quốc Ngữ & die Silbe",
      goal: "Du kennst die vietnamesischen Buchstaben und kannst eine Silbe in Anlaut, Reim und Ton zerlegen.",
      vocab: [
        { vi: "chữ", de: "Schriftzeichen, Buchstabe; Schrift", pos: "N", emoji: "🔤", note: "Vokal ư [ɯ]: ungerundetes u – Lippen breit wie bei i, Zunge wie bei u.", ex: { vi: "chữ Quốc Ngữ", de: "die Quốc-Ngữ-Schrift (wörtl. Schrift der Landessprache)" } },
        { vi: "tiếng Việt", de: "Vietnamesisch (Sprache)", pos: "N", emoji: "🇻🇳", note: "tiếng = Laut, Stimme, Sprache.", ex: { vi: "học tiếng Việt", de: "Vietnamesisch lernen" } },
        { vi: "ăn", de: "essen", pos: "V", emoji: "🍚", note: "ă = kurzes [a], nie allein am Silbenende.", ex: { vi: "ăn phở", de: "Phở essen" } },
        { vi: "chân", de: "Fuß, Bein", pos: "N", emoji: "🦶", note: "â = kurzes Schwa [ə].", ex: { vi: "chân gà", de: "Hühnerfüße (beliebter Snack)" } },
        { vi: "xe", de: "Fahrzeug", pos: "N", emoji: "🛵", note: "x = stimmloses [s]; e = offenes [ɛ] wie in „Bett“.", ex: { vi: "xe đạp", de: "Fahrrad (wörtl. Tret-Fahrzeug)" } },
        { vi: "cà phê", de: "Kaffee", pos: "N", emoji: "☕", note: "Lehnwort aus frz. café; ê = geschlossenes [e].", ex: { vi: "cà phê sữa", de: "Kaffee mit (Kondens-)Milch" } },
        { vi: "đi", de: "gehen, fahren", pos: "V", emoji: "🚶", note: "đ = implosives [ɗ]; d ohne Strich ist ein ganz anderer Laut.", ex: { vi: "đi bộ", de: "zu Fuß gehen" } },
        { vi: "mì", de: "Weizennudeln", pos: "N", emoji: "🍝", note: "Auch „mỳ“ geschrieben: i und y sind hier gleichwertige Grapheme für [i].", ex: { vi: "mì Ý", de: "Spaghetti (wörtl. italienische Nudeln)" } },
        { vi: "bò", de: "Rind", pos: "N", emoji: "🐄", note: "o = offenes [ɔ] wie in „Sonne“.", ex: { vi: "phở bò", de: "Phở mit Rindfleisch" } },
        { vi: "cô", de: "Tante; Lehrerin; Anrede für Frauen der Elterngeneration", pos: "N", emoji: "👩‍🏫", note: "ô = geschlossenes [o] wie in „Boot“, aber kurz.", ex: { vi: "cô giáo", de: "Lehrerin" } },
        { vi: "cơm", de: "gekochter Reis; Mahlzeit", pos: "N", emoji: "🍚", note: "ơ = langes Schwa [əː].", ex: { vi: "cơm gà", de: "Reis mit Huhn" } },
        { vi: "đu đủ", de: "Papaya", pos: "N", emoji: "🥭", note: "Zwei Silben, zwei Töne: đu (ngang) + đủ (hỏi).", ex: { vi: "sinh tố đu đủ", de: "Papaya-Smoothie" } },
        { vi: "đỏ", de: "rot", pos: "Adj", emoji: "🟥", ex: { vi: "cờ đỏ sao vàng", de: "rote Fahne mit gelbem Stern (Staatsflagge)" } },
        { vi: "Hà Nội", de: "Hanoi (Hauptstadt)", pos: "N", emoji: "🏙️", note: "Wörtl. „innerhalb der Flüsse“ (sinovietnamesisch).", ex: { vi: "phở Hà Nội", de: "Phở nach Hanoier Art" } }
      ],
      grammar: [
        {
          id: "g-k01-quoc-ngu",
          title: "Das Alphabet: 12 Vokalgrapheme und đ",
          term: "Chữ Quốc Ngữ (lateinbasierte Orthographie)",
          text: "Vietnamesisch wird seit dem frühen 20. Jahrhundert offiziell mit **Chữ Quốc Ngữ** geschrieben, einer im 17. Jahrhundert von Missionaren entwickelten Lateinschrift. Sie ist weitgehend **phonemisch**: Wer die Regeln kennt, kann jedes Wort korrekt lesen.\n\nDas Alphabet hat 29 Buchstaben. Es fehlen f, j, w und z; dafür gibt es **12 Vokalgrapheme**, die durch Zusatzzeichen (Diakritika) unterschieden werden:\n- `a` [aː] lang, `ă` [a] kurz, `â` [ə] kurz\n- `e` [ɛ] offen, `ê` [e] geschlossen\n- `i` / `y` [i] – zwei Schreibungen desselben Lauts\n- `o` [ɔ] offen, `ô` [o] geschlossen, `ơ` [əː] langes Schwa\n- `u` [u] gerundet, `ư` [ɯ] ungerundet\n\nDazu kommt der Konsonant `đ` [ɗ], ein **implosiver** Verschlusslaut: Der Kehlkopf senkt sich beim Verschluss, wodurch Luft eher eingesogen als ausgestoßen wird. Das unmarkierte `d` steht dagegen im Norden für [z].\n\nWichtig: Die Hütchen und Haken von `ă â ê ô ơ ư` sind **Vokalzeichen** – sie verändern die Vokalqualität. Davon zu trennen sind die fünf **Tonzeichen** (`à á ả ã ạ`), die in Lektion 2 folgen. Eine Silbe kann beides tragen: In `chữ` ist ư der Vokal und die Tilde der Ton.",
          table: { head: ["Graphem", "IPA (Nord)", "Beispiel", "ungefähr wie im Deutschen"], rows: [
            ["a", "[aː]", "ba", "langes a in „Bahn“"],
            ["ă", "[a]", "ăn", "kurzes a in „Bann“"],
            ["â", "[ə]", "chân", "kurzes Schwa wie in „bitte“"],
            ["e", "[ɛ]", "xe", "„Bett“"],
            ["ê", "[e]", "phê", "„Beet“, kürzer"],
            ["i / y", "[i]", "mì / mỳ", "„Lied“"],
            ["o", "[ɔ]", "bò", "„Sonne“"],
            ["ô", "[o]", "cô", "„Boot“, kürzer"],
            ["ơ", "[əː]", "cơm", "langes Schwa"],
            ["u", "[u]", "đu", "„Mut“"],
            ["ư", "[ɯ]", "chữ", "u mit gespreizten Lippen"]
          ] },
          examples: [
            { vi: "ăn", de: "essen", gloss: "ă = kurzes [a]" },
            { vi: "chân", de: "Fuß", gloss: "â = kurzes [ə]" },
            { vi: "cơm", de: "Reis", gloss: "ơ = langes [əː]" },
            { vi: "chữ", de: "Schrift", gloss: "ư = [ɯ]" },
            { vi: "đi", de: "gehen", gloss: "đ = implosives [ɗ]" }
          ],
          contrast: "Im Deutschen unterscheidet die Schrift Vokallänge kaum (Bahn/Bann); im Vietnamesischen haben a/ă und ơ/â eigene Buchstaben. Umgekehrt kennt das Deutsche gerundete Vorderzungenvokale (ü, ö), das Vietnamesische dagegen ungerundete Hinterzungenvokale (ư, ơ).",
          south: "Im Süden klingt d (und gi) wie [j]; die Vokalgrapheme selbst werden weitgehend gleich gelesen."
        },
        {
          id: "g-k01-silbe",
          title: "Die Silbe als Baustein",
          term: "isolierender Sprachbau; Silbenschema",
          pattern: "(Anlaut) (Gleitlaut) Nukleus (Auslaut) + Ton",
          text: "Vietnamesisch ist eine **isolierende** Sprache: Wörter werden nie flektiert – es gibt keine Kasus-, Numerus-, Person- oder Tempusendungen. Grammatische Beziehungen entstehen durch **Wortstellung** und **Funktionswörter**. Zugleich ist die Sprache weitgehend **monosyllabisch** auf Morphemebene: Fast jede Silbe ist ein bedeutungstragendes Morphem. In der Schrift steht deshalb jede Silbe für sich, auch innerhalb eines Wortes: `cà phê`, `đu đủ`, `Hà Nội`.\n\nJede Silbe folgt dem Schema **(Anlaut)(Gleitlaut) Nukleus (Auslaut) + Ton**. Pflicht sind nur der Nukleus (ein Vokal oder Diphthong) und der Ton:\n- `ăn`: kein Anlaut, Nukleus ă, Auslaut n, Ton ngang\n- `chân`: Anlaut ch, Nukleus â, Auslaut n\n- `phở`: Anlaut ph, Nukleus ơ, Ton hỏi\n- `hòa`: Anlaut h, Gleitlaut o [w], Nukleus a, Ton huyền\n\nDer Teil nach dem Anlaut heißt **Reim** (vần) – so lernen vietnamesische Kinder lesen: Anlaut + Reim + Ton. Konsonantenhäufungen wie im Deutschen („Strumpf“) gibt es nicht; jeder Anlaut ist **ein** Laut, auch wenn er mit zwei oder drei Buchstaben geschrieben wird (`ch`, `ngh`).\n\nDer **Ton** ist Teil jeder Silbe und unterscheidet Bedeutungen genauso wie Konsonanten und Vokale. Eine „tonlose“ Silbe gibt es nicht – auch `ba` ohne Zeichen hat einen Ton, nämlich den ebenen ngang.",
          table: { head: ["Silbe", "Anlaut", "Gleitlaut", "Nukleus", "Auslaut", "Ton"], rows: [
            ["ăn", "–", "–", "ă", "n", "ngang"],
            ["chân", "ch", "–", "â", "n", "ngang"],
            ["phở", "ph", "–", "ơ", "–", "hỏi"],
            ["hòa", "h", "o", "a", "–", "huyền"],
            ["Việt", "v", "–", "iê", "t", "nặng"]
          ] },
          examples: [
            { vi: "cà phê", de: "Kaffee", gloss: "zwei Silben, ein Morphem (Lehnwort)" },
            { vi: "đu đủ", de: "Papaya", gloss: "đu | đủ" },
            { vi: "xe đạp", de: "Fahrrad", gloss: "Fahrzeug | treten" },
            { vi: "Hà Nội", de: "Hanoi", gloss: "Fluss | innen" }
          ],
          contrast: "Das Deutsche ist flektierend: „ich esse, du isst, er aß“. Vietnamesisch `ăn` bleibt in allen Fällen unverändert. Dafür trägt im Deutschen die Silbe keinen lexikalischen Ton – „Bank“ bleibt „Bank“, egal in welcher Tonhöhe."
        }
      ],
      exercises: [
        { type: "mc", q: "Wie viele Vokalgrapheme hat das vietnamesische Alphabet?", options: ["6", "12", "29"], answer: 1, explain: "a ă â e ê i y o ô ơ u ư – zwölf Grapheme für elf Vokalphoneme (i und y stehen für denselben Laut)." },
        { type: "mc", q: "Welcher Buchstabe steht für den implosiven Laut [ɗ]?", options: ["d", "đ", "th"], answer: 1, explain: "đ ist implosiv. Das d ohne Strich steht im Norden für [z]." },
        { type: "mc", q: "Welches Wort enthält das kurze [a]?", options: ["ba", "ăn", "cơm"], answer: 1, explain: "ă ist das kurze a; a in ba ist lang, ơ in cơm ist ein langes Schwa." },
        { type: "mc", q: "Was ist in der Silbe „chân“ der Nukleus?", vi: "chân", options: ["ch", "â", "n"], answer: 1, explain: "ch ist der Anlaut, n der Auslaut, â der Silbenkern (Nukleus)." },
        { type: "mc", q: "Welches Zeichen ist ein VOKALzeichen, kein Tonzeichen?", options: ["der Haken in ư", "der Akzent in á", "die Tilde in ã"], answer: 0, explain: "Der Haken (râu) macht aus u den Vokal ư. Akzent und Tilde markieren dagegen Töne." },
        { type: "mc", q: "Wie viele Silben hat „cà phê sữa“?", vi: "cà phê sữa", options: ["eine", "zwei", "drei"], answer: 2, explain: "Jede Silbe wird getrennt geschrieben: cà | phê | sữa." },
        { type: "gap", vi: "chữ Quốc ___", de: "die Quốc-Ngữ-Schrift", options: ["Ngữ", "Ngư", "Ngừ"], answer: "Ngữ", explain: "Ngữ (Sprache) trägt den Vokal ư und den Ton ngã (Tilde)." },
        { type: "pairs", pairs: [["chữ", "Schrift"], ["cơm", "Reis"], ["xe", "Fahrzeug"], ["đi", "gehen"], ["bò", "Rind"], ["ăn", "essen"]] },
        { type: "tone", word: "chữ" },
        { type: "tone", word: "đỏ" },
        { type: "tone", word: "cà" },
        { type: "listen", vi: "cà phê sữa", de: "Kaffee mit Milch" },
        { type: "listen", vi: "phở Hà_Nội", de: "Phở nach Hanoier Art" },
        { type: "build", vi: "học tiếng Việt", de: "Vietnamesisch lernen", extra: ["chữ"] },
        { type: "speak", vi: "chữ Quốc Ngữ", de: "die Quốc-Ngữ-Schrift" }
      ]
    },

    /* ───────────────────────── k01l2 ───────────────────────── */
    {
      id: "k01l2",
      title: "Die sechs Töne",
      goal: "Du erkennst und sprichst die sechs Töne des Hanoier Vietnamesisch und kennst ihre Zeichen.",
      vocab: [
        { vi: "ma", de: "Geist, Gespenst", pos: "N", emoji: "👻", note: "Ton ngang (33): eben, mittelhoch.", ex: { vi: "phim ma", de: "Gruselfilm (wörtl. Geisterfilm)" } },
        { vi: "má", de: "Wange", pos: "N", emoji: "😊", note: "Ton sắc (35): steigend. Im Süden heißt má auch „Mama“.", ex: { vi: "má hồng", de: "rosige Wangen" } },
        { vi: "mạ", de: "Reissetzling", pos: "N", emoji: "🌱", note: "Ton nặng (21ʔ): tief fallend, abrupt mit Kehlkopfverschluss.", ex: { vi: "cấy mạ", de: "Reissetzlinge pflanzen" } },
        { vi: "mẹ", de: "Mutter, Mama", pos: "N", emoji: "👩", south: "má", ex: { vi: "Mẹ ơi!", de: "Mama! (Ruf)" } },
        { vi: "bố", de: "Vater, Papa", pos: "N", emoji: "👨", south: "ba", ex: { vi: "bố mẹ", de: "Eltern (wörtl. Vater Mutter)" } },
        { vi: "bà", de: "Großmutter; ältere Frau", pos: "N", emoji: "👵", note: "Ton huyền (21): tief fallend, oft behaucht.", ex: { vi: "ông bà", de: "Großeltern" } },
        { vi: "cá", de: "Fisch", pos: "N", emoji: "🐟", ex: { vi: "cá kho", de: "geschmorter Fisch (in Karamell-Fischsauce)" } },
        { vi: "gà", de: "Huhn", pos: "N", emoji: "🐔", ex: { vi: "gà rán", de: "Brathähnchen" } },
        { vi: "phở", de: "Phở (Reisbandnudelsuppe)", pos: "N", emoji: "🍜", note: "Ton hỏi (313): fällt und steigt wieder – nicht „pho“ ohne Ton sagen!", ex: { vi: "phở gà", de: "Phở mit Huhn" } },
        { vi: "chả", de: "gebratene/gegrillte Fleisch- oder Fischfarce", pos: "N", emoji: "🍢", ex: { vi: "chả cá", de: "gebratener Fisch mit Dill (Hanoier Spezialität)" } },
        { vi: "sữa", de: "Milch", pos: "N", emoji: "🥛", note: "Ton ngã (3ʔ5): steigend mit Knarr-Unterbrechung in der Mitte.", ex: { vi: "sữa đậu nành", de: "Sojamilch" } },
        { vi: "mũ", de: "Hut, Mütze, Helm", pos: "N", emoji: "⛑️", south: "nón", ex: { vi: "mũ bảo hiểm", de: "(Moped-)Helm" } },
        { vi: "chợ", de: "Markt", pos: "N", emoji: "🧺", ex: { vi: "chợ Đồng Xuân", de: "der Đồng-Xuân-Markt (Hanoi)" } },
        { vi: "dấu", de: "Zeichen; Tonzeichen", pos: "N", emoji: "✏️", note: "Die Töne heißen nach ihren Zeichen: dấu huyền, dấu sắc, dấu hỏi, dấu ngã, dấu nặng.", ex: { vi: "dấu hỏi", de: "Hỏi-Zeichen; Fragezeichen" } }
      ],
      grammar: [
        {
          id: "g-k01-sechs-toene",
          title: "Sechs Töne (thanh điệu)",
          term: "lexikalischer Ton; Chao-Tonziffern",
          text: "Vietnamesisch ist eine **Tonsprache**: Jede Silbe hat einen von sechs Tönen, und der Ton unterscheidet Wörter so wie im Deutschen ein Vokal („Bett“/„Bitt“). Die Minimalreihe `ma` (Geist), `mà` (aber), `má` (Wange), `mả` (Grab), `mã` (Pferd, Code), `mạ` (Reissetzling) besteht aus sechs verschiedenen Wörtern.\n\nTöne werden mit **Chao-Ziffern** beschrieben: 1 = tiefste, 5 = höchste Lage der Sprechstimme; die Ziffernfolge zeigt den Verlauf. Für Hà Nội gilt:\n- **ngang** (eben) 33 – kein Zeichen: `ma`\n- **huyền** (hängend) 21 – Gravis: `mà`\n- **sắc** (scharf) 35 – Akut: `má`\n- **hỏi** (fragend) 313 – Häkchen: `mả`\n- **ngã** (gebrochen) 3ʔ5 – Tilde: `mã`\n- **nặng** (schwer) 21ʔ – Punkt darunter: `mạ`\n\nTöne sind **relativ**: Eine tiefe Männerstimme und eine hohe Kinderstimme haben verschiedene absolute Frequenzen, aber dieselben Verläufe. Wichtig ist der Kontrast innerhalb einer Stimme.\n\nPraxistipp: Lerne jedes Wort **mit** seinem Ton, nie „erst ohne, dann mit“. Ein falscher Ton ist kein Akzent, sondern ein anderes Wort – `phở` (Suppe) gegen `phố` (Straße).",
          table: { head: ["Ton", "Zeichen", "Chao (Nord)", "Verlauf", "Beispiel"], rows: [
            ["ngang", "–", "33", "eben, mittel", "ma – Geist"],
            ["huyền", "à", "21", "tief fallend, behaucht", "mà – aber"],
            ["sắc", "á", "35", "steigend", "má – Wange"],
            ["hỏi", "ả", "313", "fallend-steigend", "mả – Grab"],
            ["ngã", "ã", "3ʔ5", "steigend, gebrochen", "mã – Pferd"],
            ["nặng", "ạ", "21ʔ", "tief, abrupt abgehackt", "mạ – Setzling"]
          ] },
          examples: [
            { vi: "ma", de: "Geist", gloss: "ngang 33" },
            { vi: "bà", de: "Großmutter", gloss: "huyền 21" },
            { vi: "cá", de: "Fisch", gloss: "sắc 35" },
            { vi: "phở", de: "Phở", gloss: "hỏi 313" },
            { vi: "sữa", de: "Milch", gloss: "ngã 3ʔ5" },
            { vi: "mẹ", de: "Mutter", gloss: "nặng 21ʔ" }
          ],
          contrast: "Im Deutschen ist Tonhöhe **Intonation**: Sie verändert die Satzbedeutung („Du kommst.“ / „Du kommst?“), nicht das Wort. Im Vietnamesischen ist sie **lexikalisch** – deshalb kann man eine Frage nicht einfach durch Anheben der Stimme bilden, ohne die Töne zu zerstören."
        },
        {
          id: "g-k01-phonation",
          title: "Mehr als Tonhöhe: Phonation, Nord und Süd",
          term: "Phonation (Glottalisierung, Behauchung); Tonfusion",
          text: "Die Töne des Nordens unterscheiden sich nicht nur in der **Tonhöhe**, sondern auch in der **Phonation**, also der Art, wie die Stimmlippen schwingen:\n- **ngã** wird in der Mitte durch einen Kehlkopfverschluss [ʔ] oder Knarrstimme (creaky voice) „gebrochen“, danach springt die Stimme nach oben: `sữa`, `mũ`.\n- **nặng** ist kurz, tief und endet mit Glottalisierung – die Silbe wirkt „abgehackt“: `mẹ`, `chợ`.\n- **huyền** ist tief fallend und oft leicht **behaucht** (breathy voice): `bà`, `gà`.\n- **hỏi** fällt im Norden tief ab und steigt am Ende wieder leicht an; die Stimme kann dabei knarren: `phở`, `chả`.\n\nFür Lernende sind deshalb zwei Paare heikel: **hỏi/ngã** (beide haben „etwas Unebenes“) und **huyền/nặng** (beide tief). Merkhilfe: ngã endet hoch, hỏi bleibt eher tief; nặng ist kurz und gepresst, huyền lang und weich.\n\n**Nord/Süd:** Im Süden (Sài Gòn) sind hỏi und ngã zu **einem** Ton verschmolzen, der etwa 214 klingt: `mả` und `mã` werden gleich ausgesprochen. Auch nặng ist dort eher tief-steigend (212) ohne starken Verschluss. Die Schrift unterscheidet die beiden Töne trotzdem überall – Rechtschreibfehler bei hỏi/ngã sind sogar für Muttersprachler aus dem Süden typisch.\n\nWir üben den Hanoier Standard mit sechs Tönen; den Süden verstehst du später mühelos.",
          examples: [
            { vi: "sữa", de: "Milch", gloss: "ngã: mit Bruch in der Mitte" },
            { vi: "mũ", de: "Hut, Helm", gloss: "ngã" },
            { vi: "chợ", de: "Markt", gloss: "nặng: kurz, glottalisiert" },
            { vi: "chả", de: "Fleischfarce", gloss: "hỏi: fallend-steigend" }
          ],
          contrast: "Ein Kehlkopfverschluss kommt auch im Deutschen vor – vor vokalisch anlautenden Silben („be|enden“, „Spiegel|ei“). Im Vietnamesischen sitzt er mitten in der Silbe bzw. am Ende und ist Teil des Tons.",
          south: "Süden: hỏi = ngã (ein Ton, ca. 214); nặng ohne harten Verschluss. „mả“ und „mã“ klingen also gleich."
        },
        {
          id: "g-k01-tonzeichen-position",
          title: "Wohin gehört das Tonzeichen?",
          term: "Orthographie: Tonzeichen auf dem Hauptvokal",
          text: "Pro Silbe gibt es höchstens **ein** Tonzeichen. Es steht auf dem **Hauptvokal** (Nukleus), nicht auf dem Gleitlaut. Die Regeln:\n- **Ein Vokal:** Das Zeichen steht auf ihm, auch wenn er schon ein Vokalzeichen trägt: `phở`, `sữa`, `mẹ`.\n- **Vokalzeichen hat Vorrang:** Enthält die Silbe ê, ô, ơ, ư, â oder ă, steht der Ton dort: `tiếng`, `người`, `muối`.\n- **Gleitlaut + Vokal (oa, oe, uy):** Der erste Buchstabe ist der Gleitlaut [w], der Ton gehört auf den zweiten: `hòa`, `khỏe`, `thủy`.\n- **Fallender Diphthong in offener Silbe (ia, ua, ưa):** Der Ton steht auf dem ersten Teil: `mía`, `của`, `sữa`.\n- **Geschlossene Silbe:** Der Ton steht auf dem Vokal vor dem Endkonsonanten: `Việt`, `nước`.\n\nIn älteren Drucken und manchen Schulbüchern findet man auch `hoà`, `khoẻ`, `thuỷ` (Zeichen auf dem ersten Vokal). Beide Schreibungen sind verbreitet; in dieser App verwenden wir durchgehend die Platzierung auf dem Hauptvokal. Beim Tippen mit Telex ist das ohnehin egal: Du tippst die Tontaste (f, s, r, x, j) einfach am Silbenende – `phowr` → `phở`.",
          table: { head: ["Telex-Taste", "Ton", "Ergebnis"], rows: [
            ["f", "huyền", "bà"],
            ["s", "sắc", "cá"],
            ["r", "hỏi", "phở"],
            ["x", "ngã", "sữa"],
            ["j", "nặng", "mẹ"]
          ] },
          examples: [
            { vi: "hòa", de: "Frieden, Harmonie", gloss: "o = Gleitlaut, Ton auf a" },
            { vi: "khỏe", de: "gesund", gloss: "o = Gleitlaut, Ton auf e" },
            { vi: "thủy", de: "Wasser (sinoviet.)", gloss: "u = Gleitlaut, Ton auf y" },
            { vi: "của", de: "von, gehörig", gloss: "Diphthong ua, Ton auf u" }
          ],
          contrast: "Deutsche Diakritika (ä, ö, ü) betreffen nur den Vokal. Im Vietnamesischen können zwei Zeichen übereinander stehen – Vokalzeichen plus Tonzeichen: ữ, ở, ế."
        }
      ],
      exercises: [
        { type: "tone", word: "ma" },
        { type: "tone", word: "mà" },
        { type: "tone", word: "má" },
        { type: "tone", word: "mả" },
        { type: "tone", word: "mã" },
        { type: "tone", word: "mạ" },
        { type: "tone", word: "phở" },
        { type: "tone", word: "sữa" },
        { type: "tone", word: "chợ" },
        { type: "mc", q: "Welcher Ton ist im Norden glottalisiert und steigt am Ende hoch?", options: ["hỏi", "ngã", "huyền"], answer: 1, explain: "ngã (3ʔ5): steigend mit Bruch. hỏi fällt und steigt nur leicht, huyền fällt tief ohne Bruch." },
        { type: "mc", q: "Welche zwei Töne sind im Süden zusammengefallen?", options: ["sắc und nặng", "hỏi und ngã", "ngang und huyền"], answer: 1, explain: "Im Süden klingen hỏi und ngã gleich (ca. 214); geschrieben werden sie trotzdem verschieden." },
        { type: "mc", q: "Wo steht das Tonzeichen nach der Regel „Zeichen auf den Hauptvokal“?", options: ["hóa", "hoá"], answer: 0, explain: "In oa ist o der Gleitlaut [w]; das Tonzeichen gehört auf den Hauptvokal a: hóa." },
        { type: "gap", vi: "ph___ bò", de: "Phở mit Rind", options: ["ở", "ố", "ơ"], answer: "ở", explain: "phở hat den Ton hỏi (Häkchen). phố mit sắc heißt „Straße“." },
        { type: "pairs", pairs: [["mẹ", "Mutter"], ["bố", "Vater"], ["cá", "Fisch"], ["gà", "Huhn"], ["chợ", "Markt"], ["sữa", "Milch"]] },
        { type: "listen", vi: "bố mẹ", de: "Eltern" },
        { type: "speak", vi: "ma mà má mả mã mạ", de: "Geist – aber – Wange – Grab – Pferd – Reissetzling" }
      ]
    },

    /* ───────────────────────── k01l3 ───────────────────────── */
    {
      id: "k01l3",
      title: "Anlaute",
      goal: "Du liest alle vietnamesischen Anlaute richtig, auch Digraphen wie ng, nh, kh und tr.",
      vocab: [
        { vi: "chè", de: "süßes Dessert (Bohnen, Früchte, Kokos); im Norden auch: grüner Tee", pos: "N", emoji: "🍧", note: "ch = [c], ein t-artiger Laut am harten Gaumen.", ex: { vi: "chè đậu đen", de: "Dessert aus schwarzen Bohnen" } },
        { vi: "trứng", de: "Ei", pos: "N", emoji: "🥚", note: "tr klingt in Hà Nội wie ch.", ex: { vi: "cà phê trứng", de: "Eierkaffee (Hanoier Spezialität)" } },
        { vi: "giò", de: "Schweinewurst (gestampft, gedämpft)", pos: "N", emoji: "🌭", south: "chả lụa", note: "gi = [z] im Norden.", ex: { vi: "giò lụa", de: "feine Schweinewurst (wörtl. Seiden-Wurst)" } },
        { vi: "dưa", de: "Melone; eingelegtes Gemüse", pos: "N", emoji: "🍉", note: "d = [z] im Norden, [j] im Süden.", ex: { vi: "dưa hấu", de: "Wassermelone" } },
        { vi: "rau", de: "Gemüse, Kräuter", pos: "N", emoji: "🥬", note: "r = [z] im Norden.", ex: { vi: "rau muống", de: "Wasserspinat" } },
        { vi: "khoai", de: "Knolle (Kartoffel, Süßkartoffel …)", pos: "N", emoji: "🥔", note: "kh = [x] wie in „Bach“.", ex: { vi: "khoai tây", de: "Kartoffel (wörtl. westliche Knolle)" } },
        { vi: "ngô", de: "Mais", pos: "N", emoji: "🌽", south: "bắp", note: "ng = [ŋ] wie in „singen“, hier am Wortanfang.", ex: { vi: "ngô nướng", de: "gegrillter Mais" } },
        { vi: "nghe", de: "hören", pos: "V", emoji: "👂", note: "ngh vor e, ê, i – gleicher Laut wie ng.", ex: { vi: "nghe nhạc", de: "Musik hören" } },
        { vi: "nhãn", de: "Longan (Drachenauge)", pos: "N", emoji: "🟤", note: "nh = [ɲ] wie in span. „España“.", ex: { vi: "nhãn lồng", de: "Longan (Sorte aus Hưng Yên)" } },
        { vi: "phố", de: "Straße (in der Stadt), Viertel", pos: "N", emoji: "🏘️", note: "ph = [f].", ex: { vi: "phố cổ", de: "Altstadt" } },
        { vi: "thịt", de: "Fleisch", pos: "N", emoji: "🥩", note: "th = behauchtes [tʰ] wie dt. „Tag“.", ex: { vi: "thịt bò", de: "Rindfleisch" } },
        { vi: "tôm", de: "Garnele", pos: "N", emoji: "🦐", note: "t = unbehauchtes [t] wie in „Stein“.", ex: { vi: "bánh tôm", de: "frittierte Garnelenküchlein" } },
        { vi: "đậu", de: "Bohne; Tofu", pos: "N", emoji: "🫘", note: "đ = implosives [ɗ]. Tofu heißt im Süden „đậu hũ“.", ex: { vi: "đậu phụ", de: "Tofu" } },
        { vi: "quả", de: "Frucht", pos: "N", emoji: "🍊", south: "trái", note: "qu = [kw].", ex: { vi: "quả chuối", de: "Banane" } },
        { vi: "kem", de: "Speiseeis", pos: "N", emoji: "🍦", note: "k vor e, ê, i, y – gleicher Laut wie c.", ex: { vi: "kem Tràng Tiền", de: "Eis von der Tràng-Tiền-Straße" } },
        { vi: "xôi", de: "Klebreis", pos: "N", emoji: "🍙", note: "x = [s]; s wird im Norden ebenfalls [s] gesprochen.", ex: { vi: "xôi xéo", de: "Klebreis mit Mungbohnen und Röstzwiebeln" } }
      ],
      grammar: [
        {
          id: "g-k01-digraphen",
          title: "Digraphen und Behauchung",
          term: "Digraph, Aspiration, Implosiv",
          text: "Viele vietnamesische Anlaute werden mit zwei Buchstaben (**Digraph**) oder drei (**Trigraph** `ngh`) geschrieben, stehen aber für **einen** Laut:\n- `ph` [f] – `phố`\n- `kh` [x] (wie „Bach“) – `khoai`\n- `ng`/`ngh` [ŋ] – `ngô`, `nghe`: der „ng“-Laut aus „singen“, aber am Silbenanfang\n- `nh` [ɲ] – `nhãn`\n- `ch` [c] – `chè`\n- `th` [tʰ] – `thịt`\n- `g`/`gh` [ɣ] – stimmhafter Reibelaut\n\nBesonders wichtig ist die **Aspiration** (Behauchung): Vietnamesisch `t` ist **unbehaucht** [t], wie das t in deutsch „Stein“. `th` ist **behaucht** [tʰ], wie das t in „Tag“. Das Paar ist bedeutungsunterscheidend: `tôm` (Garnele) vs. `thơm` (duftend). Deutsche sprechen anlautendes t automatisch behaucht – dadurch klingt `tôm` für Vietnamesen wie *thôm*. Tipp: Halte ein Blatt Papier vor den Mund; bei `t` darf es sich kaum bewegen.\n\nAuch `c/k` [k] ist unbehaucht, `p` kommt im Anlaut fast nur in Lehnwörtern vor.\n\n`đ` [ɗ] und `b` [ɓ] sind **Implosive**: Beim Verschluss senkt sich der Kehlkopf, die Laute klingen „dumpf“ und voll stimmhaft. Ein normales deutsches d oder b wird aber problemlos verstanden.",
          table: { head: ["Schrift", "IPA", "Beispiel", "deutsche Annäherung"], rows: [
            ["ph", "[f]", "phố", "f"],
            ["kh", "[x]", "khoai", "ch in „Bach“"],
            ["ng / ngh", "[ŋ]", "ngô / nghe", "ng in „singen“"],
            ["nh", "[ɲ]", "nhãn", "gn in „Champagner“"],
            ["th", "[tʰ]", "thịt", "t in „Tag“"],
            ["t", "[t]", "tôm", "t in „Stein“"],
            ["đ", "[ɗ]", "đậu", "implosives d"]
          ] },
          examples: [
            { vi: "tôm", de: "Garnele", gloss: "t unbehaucht" },
            { vi: "thịt", de: "Fleisch", gloss: "th behaucht" },
            { vi: "ngô", de: "Mais", gloss: "ng = [ŋ]" },
            { vi: "khoai", de: "Knolle", gloss: "kh = [x]" },
            { vi: "nhãn", de: "Longan", gloss: "nh = [ɲ]" }
          ],
          contrast: "Im Deutschen ist Behauchung automatisch und bedeutungslos (ein unbehauchtes „Tag“ bleibt verständlich). Im Vietnamesischen ist t/th ein Phonemkontrast. Und [ŋ] kommt im Deutschen nie am Wortanfang vor – hier musst du ihn neu üben."
        },
        {
          id: "g-k01-nord-sued-anlaute",
          title: "d, gi, r, tr, ch, s, x: Nord gegen Süd",
          term: "Phonemzusammenfall (Merger), regionale Aussprache",
          text: "Die Schrift spiegelt einen älteren Lautstand. Heute sprechen Nord und Süd mehrere Anlaute unterschiedlich aus – und beide **vereinigen** jeweils verschiedene Buchstaben zu einem Laut.\n\n**Hà Nội (unser Standard):**\n- `d`, `gi` und `r` → alle [z] (stimmhaftes s): `dưa`, `giò`, `rau` beginnen gleich.\n- `tr` und `ch` → beide [c]: `trứng` und `chè` haben denselben Anlaut.\n- `s` und `x` → beide [s]: `xôi`, `sữa`.\n\n**Sài Gòn:**\n- `d`, `gi` → [j] (wie dt. „ja“), `v` oft ebenfalls [j].\n- `r` → [ɹ] oder gerolltes [r].\n- `tr` → retroflexes [ʈ], `ch` → [c] – hier bleiben beide getrennt.\n- `s` → retroflexes [ʂ], `x` → [s].\n\nFür das Schreiben heißt das: Wer nach Gehör schreibt, muss im Norden bei [z] zwischen d, gi und r wählen, bei [c] zwischen tr und ch. Diese Unterscheidungen lernt man wortweise mit.\n\nGenau deshalb ist es sinnvoll, Wörter immer **mit Schriftbild** zu lernen: Die Schrift ist der gemeinsame Nenner aller Dialekte.",
          table: { head: ["Schrift", "Hà Nội", "Sài Gòn", "Beispiel"], rows: [
            ["d", "[z]", "[j]", "dưa"],
            ["gi", "[z]", "[j]", "giò"],
            ["r", "[z]", "[ɹ]/[r]", "rau"],
            ["v", "[v]", "[j]/[v]", "Việt"],
            ["tr", "[c]", "[ʈ]", "trứng"],
            ["ch", "[c]", "[c]", "chè"],
            ["s", "[s]", "[ʂ]", "sữa"],
            ["x", "[s]", "[s]", "xôi"]
          ] },
          examples: [
            { vi: "dưa", de: "Melone", gloss: "Nord [z], Süd [j]" },
            { vi: "giò", de: "Wurst", gloss: "Nord [z], Süd [j]" },
            { vi: "rau", de: "Gemüse", gloss: "Nord [z], Süd [ɹ]" },
            { vi: "trứng", de: "Ei", gloss: "Nord wie ch, Süd retroflex" }
          ],
          contrast: "Ähnliche Zusammenfälle kennt das Deutsche aus den Dialekten (sächsisch „Gardoffeln“ = Kartoffeln) – die Standardschrift bleibt gleich, die Aussprache variiert.",
          south: "Süden: d/gi/v → [j], r → [ɹ], tr ≠ ch, s ≠ x."
        },
        {
          id: "g-k01-c-k-q",
          title: "c, k, q – g, gh – ng, ngh",
          term: "komplementäre Distribution (Orthographie)",
          text: "Einige Laute haben je nach folgendem Vokal **zwei Schreibungen**. Das ist reine Orthographie (aus der portugiesisch-italienischen Tradition der Missionare), keine Aussprachefrage:\n\n**[k]:**\n- `k` vor den Vorderzungenvokalen e, ê, i, y: `kem`, `kế`, `kia`\n- `q` nur in der Verbindung `qu` = [kw]: `quả`\n- `c` überall sonst: `cá`, `cô`, `cơm`\n\n**[ɣ]:**\n- `gh` vor e, ê, i: `ghế` (Stuhl)\n- `g` überall sonst: `gà`, `gò`\n\n**[ŋ]:**\n- `ngh` vor e, ê, i: `nghe`\n- `ng` überall sonst: `ngô`, `ngủ`\n\nMerksatz: **Vor e, ê, i bekommt der Laut ein Extra** – c wird k, g wird gh, ng wird ngh.\n\nSonderfall `gi`: Hier ist das i Teil des Anlauts [z], kein Vokal. In `gì` (was) steht deshalb nur ein i, das zugleich Anlaut-Bestandteil und Vokal ist; in `giò` ist o der Vokal.",
          table: { head: ["Laut", "vor e, ê, i (y)", "sonst", "Beispiele"], rows: [
            ["[k]", "k", "c (qu = [kw])", "kem – cá – quả"],
            ["[ɣ]", "gh", "g", "ghế – gà"],
            ["[ŋ]", "ngh", "ng", "nghe – ngô"]
          ] },
          examples: [
            { vi: "kem", de: "Eis", gloss: "k vor e" },
            { vi: "cá", de: "Fisch", gloss: "c vor a" },
            { vi: "quả", de: "Frucht", gloss: "qu = [kw]" },
            { vi: "nghe", de: "hören", gloss: "ngh vor e" }
          ],
          contrast: "Das kennst du aus dem Italienischen (ce/che) oder dem Deutschen ck/k: dieselbe Lautung, unterschiedliche Schreibung je nach Umgebung."
        }
      ],
      exercises: [
        { type: "mc", q: "Welcher Anlaut ist behaucht?", options: ["t in tôm", "th in thịt", "đ in đậu"], answer: 1, explain: "th = [tʰ] (behaucht). t ist unbehaucht wie in „Stein“, đ ist implosiv." },
        { type: "mc", q: "Welche drei Schreibungen klingen in Hà Nội gleich [z]?", options: ["d, gi, r", "d, đ, t", "ch, tr, x"], answer: 0, explain: "Im Norden sind d, gi und r zu [z] zusammengefallen." },
        { type: "mc", q: "Welche Schreibung ist richtig für [ŋɛ] (hören)?", options: ["nge", "nghe", "nhe"], answer: 1, explain: "Vor e, ê, i schreibt man ngh statt ng. nh wäre ein anderer Laut [ɲ]." },
        { type: "mc", q: "Welcher Buchstabe passt? ___em (Eis)", options: ["c", "k", "q"], answer: 1, explain: "Vor e schreibt man k: kem." },
        { type: "mc", q: "Welches Wortpaar hat in Hà Nội denselben Anlaut?", options: ["trứng – chè", "tôm – thịt", "ngô – nhãn"], answer: 0, explain: "tr und ch sind im Norden zu [c] zusammengefallen. t/th und ng/nh bleiben verschieden." },
        { type: "mc", q: "Wie klingt kh in „khoai“?", vi: "khoai", options: ["wie k in „Kino“", "wie ch in „Bach“", "wie ch in „ich“"], answer: 1, explain: "kh = [x], der hintere Reibelaut wie in „Bach“." },
        { type: "gap", vi: "___ố cổ", de: "Altstadt", options: ["ph", "f", "p"], answer: "ph", explain: "[f] wird immer ph geschrieben; f gibt es im vietnamesischen Alphabet nicht." },
        { type: "pairs", pairs: [["thịt", "Fleisch"], ["tôm", "Garnele"], ["rau", "Gemüse"], ["trứng", "Ei"], ["ngô", "Mais"], ["phố", "Straße"]] },
        { type: "tone", word: "trứng" },
        { type: "tone", word: "giò" },
        { type: "tone", word: "nhãn" },
        { type: "tone", word: "thịt" },
        { type: "listen", vi: "cà phê trứng", de: "Eierkaffee" },
        { type: "build", vi: "rau muống", de: "Wasserspinat", extra: ["dưa"] },
        { type: "speak", vi: "tôm, thịt, trứng", de: "Garnele, Fleisch, Ei" }
      ]
    },

    /* ───────────────────────── k01l4 ───────────────────────── */
    {
      id: "k01l4",
      title: "Reime, Auslaute & erste Formeln",
      goal: "Du sprichst Silben mit Endkonsonanten und Diphthongen richtig aus und kannst grüßen, danken und dich entschuldigen.",
      vocab: [
        { vi: "xin chào", de: "Guten Tag, hallo (neutral-förmlich)", pos: "Phr", emoji: "👋", note: "Im Alltag sagt man meist chào + Anrede (→ K02). xin = bitten (höflich).", ex: { vi: "Xin chào, Hà Nội!", de: "Hallo, Hanoi!" } },
        { vi: "cảm ơn", de: "danke", pos: "Phr", emoji: "🙏", note: "Auch „cám ơn“ geschrieben und gesprochen.", ex: { vi: "Cảm ơn nhiều!", de: "Vielen Dank!" } },
        { vi: "xin lỗi", de: "Entschuldigung; Verzeihung", pos: "Phr", emoji: "🙇", note: "Auch zum Ansprechen Fremder: „Entschuldigen Sie …“.", ex: { vi: "Xin lỗi, xin lỗi!", de: "Entschuldigung, Entschuldigung!" } },
        { vi: "không sao", de: "macht nichts, kein Problem", pos: "Phr", emoji: "👌", note: "Antwort auf eine Entschuldigung – nicht auf ein Angebot!", ex: { vi: "Không sao, không sao.", de: "Macht nichts, macht nichts." } },
        { vi: "không có gì", de: "nichts zu danken, gern geschehen", pos: "Phr", emoji: "😊", note: "Antwort auf cảm ơn.", ex: { vi: "Không có gì!", de: "Gern geschehen!" } },
        { vi: "tạm biệt", de: "auf Wiedersehen", pos: "Phr", emoji: "🖐️", note: "Eher förmlich oder bei längerem Abschied.", ex: { vi: "Tạm biệt Hà Nội!", de: "Auf Wiedersehen, Hanoi!" } },
        { vi: "nước", de: "Wasser; Land", pos: "N", emoji: "💧", note: "Diphthong ươ + ungelöstes -c.", ex: { vi: "nước mắm", de: "Fischsauce" } },
        { vi: "sách", de: "Buch", pos: "N", emoji: "📖", note: "-ach im Norden ≈ [ajk̚].", ex: { vi: "sách tiếng Việt", de: "Vietnamesisch-Buch" } },
        { vi: "Tết", de: "Tết, (Mond-)Neujahrsfest", pos: "N", emoji: "🧧", ex: { vi: "Tết Nguyên Đán", de: "das Mondneujahrsfest" } },
        { vi: "bún", de: "Reisfadennudeln", pos: "N", emoji: "🍜", ex: { vi: "bún chả", de: "Reisnudeln mit gegrilltem Schweinefleisch (Hanoi)" } },
        { vi: "sông", de: "Fluss", pos: "N", emoji: "🏞️", note: "-ông im Norden mit Lippenschluss am Ende (labiovelares [ŋ͡m]).", ex: { vi: "sông Hồng", de: "der Rote Fluss" } },
        { vi: "bánh", de: "Kuchen, Gebäck, Teigware", pos: "N", emoji: "🥟", note: "-anh im Norden ≈ [ajŋ].", ex: { vi: "bánh cuốn", de: "gedämpfte Reisrollen" } },
        { vi: "bia", de: "Bier", pos: "N", emoji: "🍺", note: "Diphthong ia [iə] – offene Silbe.", ex: { vi: "bia hơi", de: "frisches Fassbier (wörtl. Dampf-Bier)" } },
        { vi: "muối", de: "Salz", pos: "N", emoji: "🧂", note: "Diphthong uô [uə] – vor Konsonant/Gleitlaut uô statt ua.", ex: { vi: "muối tiêu", de: "Salz und Pfeffer" } },
        { vi: "mưa", de: "Regen; regnen", pos: "N", emoji: "🌧️", note: "Diphthong ưa [ɯə].", ex: { vi: "mưa phùn", de: "Nieselregen (typisch für den Hanoier Frühling)" } },
        { vi: "đẹp", de: "schön", pos: "Adj", emoji: "✨", note: "Ungelöstes -p: Lippen schließen, nicht öffnen.", ex: { vi: "đẹp trai", de: "gutaussehend (Mann)" } }
      ],
      grammar: [
        {
          id: "g-k01-auslaute",
          title: "Auslaute: ungelöste Plosive und Nasale",
          term: "ungelöste (implodierte) Plosive; Nasalauslaute",
          text: "Am Silbenende sind nur acht Konsonanten möglich: die Plosive `-p -t -c -ch` und die Nasale `-m -n -ng -nh`, dazu die Gleitlaute `-i/-y` und `-o/-u`.\n\nDie Plosive am Ende sind **ungelöst** [p̚ t̚ k̚]: Der Mund schließt sich, aber der Verschluss wird nicht hörbar geöffnet – es gibt keinen Luftstoß danach. `đẹp` endet mit geschlossenen Lippen, `Tết` mit der Zunge am Zahndamm, `nước` mit dem Zungenrücken am Gaumen. Für deutsche Ohren klingen solche Silben „abgeschnitten“.\n\nBesonderheiten des Nordens:\n- `-ch` und `-nh` stehen nur nach a, ê, i. Nach a wird ein [j] eingeschoben: `sách` ≈ [sajk̚], `bánh` ≈ [ɓajŋ].\n- Nach den gerundeten Vokalen o, ô, u werden `-ng` und `-c` mit **Lippenschluss** gesprochen: `sông` endet auf [ŋ͡m], `học` auf [k͡p̚] – die Wangen blähen sich kurz.\n\nDie Unterscheidung `-n/-ng` und `-t/-c` ist im Norden voll erhalten: `bún` (Nudeln) ≠ `búng` (schnipsen).\n\nTipp: Übe die Plosive, indem du die Silbe einfach „anhältst“ und nicht weiteratmest – so wie das deutsche „ap…“ bei „ap|petitlich“, wenn man stockt.",
          table: { head: ["Auslaut", "Hà Nội", "Beispiel", "Hinweis"], rows: [
            ["-p", "[p̚]", "đẹp", "Lippen bleiben zu"],
            ["-t", "[t̚]", "Tết", "Zunge bleibt am Zahndamm"],
            ["-c", "[k̚]", "nước", "nach o/ô/u: [k͡p̚]"],
            ["-ch", "[k̚] nach [j]", "sách", "nur nach a, ê, i"],
            ["-m", "[m]", "tôm", ""],
            ["-n", "[n]", "bún", ""],
            ["-ng", "[ŋ]", "sông", "nach o/ô/u: [ŋ͡m]"],
            ["-nh", "[ŋ] nach [j]", "bánh", "nur nach a, ê, i"]
          ] },
          examples: [
            { vi: "đẹp", de: "schön", gloss: "-p ungelöst" },
            { vi: "Tết", de: "Neujahrsfest", gloss: "-t ungelöst" },
            { vi: "sách", de: "Buch", gloss: "-ach ≈ [ajk̚]" },
            { vi: "bánh", de: "Kuchen", gloss: "-anh ≈ [ajŋ]" },
            { vi: "sông", de: "Fluss", gloss: "-ông mit Lippenschluss" }
          ],
          contrast: "Deutsche Endplosive werden gelöst, oft sogar behaucht („Bad“ [baːtʰ]). Im Vietnamesischen bleibt der Verschluss stumm – ein hörbares „t-h“ am Ende klingt fremd.",
          south: "Im Süden fallen -n/-ng und -t/-c oft zusammen (bún ≈ búng), -nh wird zu [n]."
        },
        {
          id: "g-k01-diphthonge",
          title: "Diphthonge: ia/iê, ua/uô, ưa/ươ",
          term: "fallende Diphthonge; orthographische Alternation",
          text: "Vietnamesisch hat drei **fallende Diphthonge** – der erste Teil ist betont, der zweite ein schwaches Schwa: [iə], [uə], [ɯə]. Jeder hat **zwei Schreibungen**, je nachdem, ob die Silbe offen oder geschlossen ist:\n\n- **Offene Silbe** (nichts folgt): Der Diphthong wird mit **-a** geschrieben: `bia`, `mua`, `mưa`.\n- **Geschlossene Silbe** (ein Konsonant oder Gleitlaut folgt): Er wird mit **ê/ô/ơ** geschrieben: `tiếng`, `muối`, `nước`.\n\nBeim Diphthong [iə] gibt es noch eine dritte Variante: `yê` steht, wenn kein Anlaut vorausgeht oder ein Gleitlaut u davorsteht: `yêu` (lieben), `chuyện` (Geschichte). In offener Silbe nach Gleitlaut schreibt man `ya`: `khuya` (spät nachts).\n\nDas **Tonzeichen** steht in offener Silbe auf dem ersten Bestandteil (`mía`, `mùa`, `cửa`), in geschlossener auf dem zweiten (`tiếng`, `muối`, `nước`).\n\nAchtung: Das `a` in `bia` ist **kein** volles [a], sondern nur ein Schwa-Abglitt. „Bi-a“ mit zwei Silben wäre falsch (und klingt wie das Wort für Billard, `bi-a`).",
          table: { head: ["Laut", "offene Silbe", "geschlossene Silbe", "Beispiele"], rows: [
            ["[iə]", "ia (ya)", "iê (yê)", "bia – tiếng – yêu"],
            ["[uə]", "ua", "uô", "mua – muối"],
            ["[ɯə]", "ưa", "ươ", "mưa – nước"]
          ] },
          examples: [
            { vi: "bia hơi", de: "Fassbier", gloss: "ia in offener Silbe" },
            { vi: "tiếng Việt", de: "Vietnamesisch", gloss: "iê in geschlossener Silbe" },
            { vi: "muối", de: "Salz", gloss: "uô vor Gleitlaut i" },
            { vi: "mưa", de: "Regen", gloss: "ưa offen" },
            { vi: "nước", de: "Wasser", gloss: "ươ vor -c" }
          ],
          contrast: "Deutsche Diphthonge (ei, au, eu) sind steigend-gleitend zu i/u hin. Vietnamesisch [iə] ähnelt eher dem bairischen „Bia“ (Bier) oder norddeutschem „hier“ mit vokalisiertem r."
        },
        {
          id: "g-k01-tonrestriktion",
          title: "Tonrestriktion bei Plosivauslaut",
          term: "Tonbeschränkung in geschlossenen (Checked-)Silben",
          text: "Silben, die auf einen Plosiv `-p -t -c -ch` enden, heißen **geschlossene** oder **„checked“ Silben**. In ihnen sind nur **zwei** der sechs Töne möglich:\n- **sắc** (steigend): `sách`, `nước`, `Tết`\n- **nặng** (tief, glottalisiert): `đẹp`, `Việt`, `thịt`\n\nngang, huyền, hỏi und ngã kommen vor -p, -t, -c, -ch nicht vor. Das liegt daran, dass die Stimme nach dem stummen Verschluss keine Zeit für einen langen Verlauf hat. Historisch bilden diese beiden „Eingangstöne“ (wie im Chinesischen) sogar eine eigene Tonklasse.\n\nPraktische Folgen:\n- Siehst du eine Silbe auf -t, -c, -p oder -ch, weißt du: Ton ist entweder sắc oder nặng. `bat` ohne Zeichen oder `bàt` ist schlicht kein mögliches Wort.\n- Beim Hören: Klingt eine abgeschnittene Silbe hoch, ist es sắc; tief, ist es nặng.\n\nNasale Auslaute (`-m -n -ng -nh`) erlauben dagegen alle sechs Töne: `bún`, `bùn`, `sông`, `sống`.",
          examples: [
            { vi: "sách", de: "Buch", gloss: "-ch + sắc" },
            { vi: "nước", de: "Wasser", gloss: "-c + sắc" },
            { vi: "đẹp", de: "schön", gloss: "-p + nặng" },
            { vi: "Việt", de: "vietnamesisch (in Namen)", gloss: "-t + nặng" }
          ],
          contrast: "Das Deutsche kennt keine Abhängigkeit zwischen Silbenende und Tonhöhe. Für Lernende ist die Restriktion eine Erleichterung: Bei Plosivauslaut gibt es nur zwei Möglichkeiten."
        }
      ],
      dialogue: {
        setting: "Abends an einer Bún-chả-Garküche in der Hanoier Altstadt. Jonas stößt beim Hinsetzen einen Plastikhocker um. Die Verkäuferin heißt Cô Hà.",
        lines: [
          { who: "Jonas", vi: "Xin chào!", de: "Guten Abend!" },
          { who: "Cô Hà", vi: "Xin chào!", de: "Guten Abend!" },
          { who: "Jonas", vi: "Ôi, xin lỗi!", de: "Oh, Entschuldigung!" },
          { who: "Cô Hà", vi: "Không sao, không sao.", de: "Macht nichts, macht nichts." },
          { who: "Linh", vi: "Cảm ơn!", de: "Danke!" },
          { who: "Cô Hà", vi: "Không có gì.", de: "Gern geschehen." },
          { who: "Jonas", vi: "Tạm biệt!", de: "Auf Wiedersehen!" },
          { who: "Cô Hà", vi: "Tạm biệt!", de: "Auf Wiedersehen!" }
        ]
      },
      exercises: [
        { type: "mc", q: "Welche Töne sind in einer Silbe auf -t möglich?", options: ["alle sechs", "nur sắc und nặng", "nur ngang und huyền"], answer: 1, explain: "Vor -p, -t, -c, -ch stehen nur sắc und nặng (Tonrestriktion)." },
        { type: "mc", q: "Jemand sagt „Cảm ơn!“ zu dir. Was antwortest du?", options: ["Không sao.", "Không có gì.", "Xin lỗi."], answer: 1, explain: "Auf Dank antwortet man „không có gì“ (nichts zu danken). „Không sao“ ist die Antwort auf eine Entschuldigung." },
        { type: "mc", q: "Warum schreibt man „muối“ mit uô, aber „mua“ mit ua?", options: ["wegen des Tons", "muối ist eine geschlossene Silbe (Gleitlaut i folgt)", "Nord/Süd-Unterschied"], answer: 1, explain: "Derselbe Diphthong [uə] wird in offener Silbe ua, in geschlossener uô geschrieben." },
        { type: "mc", q: "Wie wird das -p in „đẹp“ gesprochen?", vi: "đẹp", options: ["mit hörbarem Luftstoß", "ungelöst: Lippen schließen und bleiben zu", "gar nicht"], answer: 1, explain: "Endplosive sind ungelöst [p̚]: Der Verschluss wird gebildet, aber nicht gelöst." },
        { type: "gap", vi: "Xin ___!", de: "Entschuldigung!", options: ["lỗi", "chào", "ơn"], answer: "lỗi", explain: "xin lỗi = Entschuldigung; xin chào = hallo; cảm ơn = danke." },
        { type: "gap", vi: "Cảm ___!", de: "Danke!", options: ["ơn", "ớn", "ởn"], answer: "ơn", explain: "ơn trägt den Ton ngang. „ớn“ (sắc) bedeutet etwa „Schauder haben / genug haben“." },
        { type: "pairs", pairs: [["xin chào", "hallo"], ["cảm ơn", "danke"], ["xin lỗi", "Entschuldigung"], ["không sao", "macht nichts"], ["tạm biệt", "auf Wiedersehen"]] },
        { type: "tone", word: "sách" },
        { type: "tone", word: "Việt" },
        { type: "tone", word: "đẹp" },
        { type: "tone", word: "nước" },
        { type: "listen", vi: "Xin lỗi, không sao.", de: "Entschuldigung. – Macht nichts." },
        { type: "build", vi: "Cảm ơn nhiều!", de: "Vielen Dank!", extra: ["lỗi"] },
        { type: "translate", de: "Danke!", answers: ["Cảm ơn!", "Cám ơn!", "Cảm ơn nhiều!", "Cám ơn nhiều!"] },
        { type: "translate", de: "Entschuldigung!", answers: ["Xin lỗi!"] },
        { type: "speak", vi: "Xin chào! Cảm ơn! Tạm biệt!", de: "Hallo! Danke! Auf Wiedersehen!" }
      ]
    }
  ],

  boss: {
    title: "Ankunft am Flughafen Nội Bài",
    npc: "Chị Hằng / Chú Tuấn",
    role: "Grenzbeamtin / Taxifahrer",
    setting: "Jonas und Linh landen in Nội Bài. Zuerst die Passkontrolle bei Chị Hằng, dann die Taxifahrt mit Chú Tuấn in die Altstadt. Du hast nur deine Formeln – aber die sitzen!",
    turns: [
      {
        npc: { vi: "Xin chào.", de: "Guten Tag." },
        prompt: "Die Grenzbeamtin grüßt dich. Grüße zurück.",
        choices: [
          { vi: "Xin chào.", ok: true, fb: "Richtig – neutral und höflich." },
          { vi: "Tạm biệt.", ok: false, fb: "tạm biệt heißt „auf Wiedersehen“ – du verabschiedest dich, bevor du überhaupt angekommen bist." },
          { vi: "Không sao.", ok: false, fb: "không sao („macht nichts“) antwortet auf eine Entschuldigung, nicht auf einen Gruß." }
        ]
      },
      {
        npc: { vi: "Hộ chiếu đây.", de: "Hier ist Ihr Pass." },
        prompt: "Sie gibt dir den Pass zurück. Bedanke dich.",
        choices: [
          { vi: "Cảm ơn.", ok: true, fb: "Genau – cảm ơn mit ngang auf ơn." },
          { vi: "Cảm ớn.", ok: false, fb: "Falscher Ton: ớn (sắc) heißt etwa „Schauder haben, genug haben“. Danke ist cảm ơn mit ebenem Ton auf ơn." },
          { vi: "Không có gì.", ok: false, fb: "„Gern geschehen“ sagt die Person, die dir geholfen hat – nicht du." }
        ]
      },
      {
        npc: { vi: "Ối!", de: "Autsch!" },
        prompt: "Beim Gepäckband trittst du einem Mann auf den Fuß. Entschuldige dich.",
        choices: [
          { vi: "Xin lỗi!", ok: true, fb: "Richtig – xin lỗi ist die Entschuldigung." },
          { vi: "Không sao!", ok: false, fb: "Das ist die Antwort des Mannes („macht nichts“) – nicht deine." },
          { vi: "Xin chào!", ok: false, fb: "Ein freundlicher Gruß, aber keine Entschuldigung." }
        ]
      },
      {
        npc: { vi: "Chào anh! Xin lỗi, anh chờ một chút nhé.", de: "Hallo! Entschuldigung, warten Sie bitte einen Moment." },
        prompt: "Taxifahrer Chú Tuấn entschuldigt sich, weil er noch das Auto holen muss. Sag, dass das kein Problem ist.",
        choices: [
          { vi: "Không sao.", ok: true, fb: "Perfekt – die passende Antwort auf eine Entschuldigung." },
          { vi: "Xin lỗi.", ok: false, fb: "Jetzt entschuldigst du dich – obwohl er derjenige war, der warten lässt." },
          { vi: "Không có gì.", ok: false, fb: "„Gern geschehen“ antwortet auf Dank, nicht auf eine Entschuldigung." }
        ]
      },
      {
        npc: { vi: "Anh đi đâu?", de: "Wohin fahren Sie?" },
        prompt: "Nenne dein Ziel: die Altstadt (phố cổ).",
        choices: [
          { vi: "Phố cổ.", ok: true, fb: "Richtig: phố (sắc) = Straße, cổ (hỏi) = alt." },
          { vi: "Phở cổ.", ok: false, fb: "phở mit hỏi ist die Nudelsuppe – „alte Suppe“ ist kein Fahrziel. Straße heißt phố (sắc)." },
          { vi: "Pho co.", ok: false, fb: "Ohne Töne ist das kein Wort: Töne sind Teil der Silbe, nicht Verzierung." }
        ]
      },
      {
        npc: { vi: "Anh uống nước không?", de: "Möchten Sie Wasser?" },
        prompt: "Er bietet dir eine Flasche Wasser an. Nimm dankend an.",
        choices: [
          { vi: "Cảm ơn!", ok: true, fb: "Genau – cảm ơn ist Dank und Annahme zugleich." },
          { vi: "Không sao!", ok: false, fb: "„Macht nichts“ – passt nicht auf ein Angebot. Viele Lernende verwechseln das mit „nein danke“." },
          { vi: "Xin lỗi!", ok: false, fb: "Wofür entschuldigst du dich? Hier ist Dank gefragt." }
        ]
      },
      {
        npc: { vi: "Đến phố cổ rồi.", de: "Wir sind in der Altstadt." },
        prompt: "Ihr seid angekommen. Bedanke dich und verabschiede dich.",
        choices: [
          { vi: "Cảm ơn! Tạm biệt!", ok: true, fb: "Super – Dank und Abschied in der richtigen Reihenfolge." },
          { vi: "Xin chào! Tạm biệt!", ok: false, fb: "xin chào ist ein Gruß zur Begrüßung – zum Dank passt cảm ơn." },
          { vi: "Không có gì! Tạm biệt!", ok: false, fb: "„Gern geschehen“ sagt der Fahrer, wenn du dich bedankst – nicht umgekehrt." }
        ]
      }
    ],
    win: { vi: "Chào mừng anh đến Hà Nội!", de: "Willkommen in Hanoi!" }
  }
});
