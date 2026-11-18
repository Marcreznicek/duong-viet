/* K06 Hội An – Markt & Einkaufen */
VN.addChapter({
  id: "k06",
  place: "Hội An",
  region: "Zentralvietnam",
  title: "Markt & Einkaufen",
  intro: "Hội An, der alte Handelshafen am Thu-Bồn-Fluss, leuchtet nachts im Licht tausender Seidenlaternen. Zwischen Schneiderläden, Laternengeschäften und dem Markt lernst du Farben und Kleidung, baust Nominalphrasen mit Demonstrativa, vergleichst Dinge und handelst um den Preis – und probierst nebenbei Cao lầu, Mì Quảng und Bánh mì Phượng.",
  lessons: [
    // ───────────────────────────── k06l1 ─────────────────────────────
    {
      id: "k06l1",
      title: "Farben & Kleidung",
      goal: "Du kannst Kleidungsstücke mit Farben beschreiben und sagen, was jemand trägt.",
      vocab: [
        { vi: "màu", de: "Farbe", pos: "N", emoji: "🎨", ex: { vi: "Linh thích màu đỏ.", de: "Linh mag die Farbe Rot." } },
        { vi: "đỏ", de: "rot", pos: "Adj", emoji: "🔴", ex: { vi: "Áo dài đỏ rất đẹp.", de: "Rote Áo dài sind sehr schön." } },
        { vi: "xanh", de: "blau; grün", pos: "Adj", emoji: "🔵", note: "Präzisierung: xanh da trời / xanh dương (blau), xanh lá cây (grün).", ex: { vi: "Jonas mặc áo xanh.", de: "Jonas trägt ein blaues Hemd." } },
        { vi: "vàng", de: "gelb; Gold", pos: "Adj", emoji: "🟡", ex: { vi: "Đèn lồng vàng đẹp lắm.", de: "Gelbe Laternen sind sehr schön." } },
        { vi: "trắng", de: "weiß", pos: "Adj", emoji: "⚪", ex: { vi: "Linh mặc áo dài trắng.", de: "Linh trägt ein weißes Áo dài." } },
        { vi: "đen", de: "schwarz", pos: "Adj", emoji: "⚫", ex: { vi: "Tôi muốn mua giày đen.", de: "Ich möchte schwarze Schuhe kaufen." } },
        { vi: "hồng", de: "rosa", pos: "Adj", emoji: "🌸", ex: { vi: "Áo hồng đẹp quá!", de: "Wie schön das rosa Oberteil ist!" } },
        { vi: "áo", de: "Oberteil, Hemd, Bluse, Jacke", pos: "N", emoji: "👕", cls: "cái / chiếc", ex: { vi: "Tôi muốn mua một cái áo.", de: "Ich möchte ein Oberteil kaufen." } },
        { vi: "áo dài", de: "Áo dài (langes vietnamesisches Gewand)", pos: "N", emoji: "👘", cls: "chiếc / cái", ex: { vi: "Linh muốn mua một chiếc áo dài.", de: "Linh möchte ein Áo dài kaufen." } },
        { vi: "quần", de: "Hose", pos: "N", emoji: "👖", cls: "cái / chiếc", ex: { vi: "Jonas mặc quần đen.", de: "Jonas trägt eine schwarze Hose." } },
        { vi: "giày", de: "Schuh(e)", pos: "N", emoji: "👟", cls: "đôi (Paar) / chiếc (einzeln)", ex: { vi: "Giày trắng đẹp lắm.", de: "Weiße Schuhe sind sehr schön." } },
        { vi: "mũ", de: "Mütze, Hut", pos: "N", emoji: "🧢", south: "nón", cls: "cái / chiếc", ex: { vi: "Jonas đội mũ.", de: "Jonas trägt eine Mütze." } },
        { vi: "nón lá", de: "kegelförmiger Palmblatthut", pos: "N", emoji: "👒", cls: "cái / chiếc", ex: { vi: "Nón lá Hội An rất đẹp.", de: "Die Nón lá aus Hội An sind sehr schön." } },
        { vi: "mua", de: "kaufen", pos: "V", emoji: "🛍️", ex: { vi: "Tôi muốn mua áo dài.", de: "Ich möchte ein Áo dài kaufen." } },
        { vi: "mặc", de: "(Kleidung) tragen, anziehen", pos: "V", ex: { vi: "Linh mặc áo dài đỏ.", de: "Linh trägt ein rotes Áo dài." } },
        { vi: "đẹp", de: "schön", pos: "Adj", emoji: "✨", ex: { vi: "Áo dài đẹp quá!", de: "Wie schön das Áo dài ist!" } }
      ],
      grammar: [
        {
          id: "g-k06-attribut",
          title: "Das Attribut steht nach dem Nomen",
          term: "Postnominales Attribut (Kopf-Modifikator-Abfolge)",
          pattern: "N + Adj  ·  N + màu + Farbe",
          text: "Im Vietnamesischen steht das attributive Adjektiv **hinter** dem Nomen, das es näher bestimmt: `áo đỏ` „rotes Oberteil“, `nhà to` „großes Haus“, `giày đen` „schwarze Schuhe“. Die Nominalphrase ist **kopfinitial**: Erst kommt der Kopf (das Ding), dann der Modifikator (die Eigenschaft). Die Abfolge *đỏ áo* ist ungrammatisch.\n\nDas Adjektiv bleibt dabei **unverändert** – keine Endungen für Genus, Kasus oder Numerus: `áo đỏ` kann „ein rotes Hemd“, „das rote Hemd“ oder „rote Hemden“ heißen.\n\nWeil Adjektive Stativverben sind, kann dieselbe Wortfolge auch ein **Satz** sein: `Áo đỏ.` „Das Hemd ist rot.“ Ob Nominalphrase oder Satz vorliegt, zeigen Kontext, Klassifikator oder Gradadverb: `một cái áo đỏ` (NP: „ein rotes Hemd“) vs. `Cái áo rất đỏ.` (Satz: „Das Hemd ist sehr rot.“).\n\nMehrere Modifikatoren reihen sich nach rechts: `áo dài lụa trắng` „weißes Seiden-Áo-dài“ – das Kompositum `áo dài` bildet den Kopf, `lụa` (Material) steht näher am Kopf als die Farbe.",
          examples: [
            { vi: "Tôi muốn mua một cái áo đỏ.", de: "Ich möchte ein rotes Oberteil kaufen.", gloss: "ich | wollen | kaufen | ein | CL | Oberteil | rot" },
            { vi: "Linh mặc áo dài trắng.", de: "Linh trägt ein weißes Áo dài.", gloss: "Linh | tragen | Áo dài | weiß" },
            { vi: "Giày đen đẹp lắm.", de: "Schwarze Schuhe sind sehr schön.", gloss: "Schuhe | schwarz | schön | sehr" },
            { vi: "Cái áo rất đỏ.", de: "Das Oberteil ist sehr rot.", gloss: "CL | Oberteil | sehr | rot" }
          ],
          contrast: "Deutsch: Adjektiv vor dem Nomen und flektiert („ein rotes Hemd“, „die roten Hemden“). Vietnamesisch: Adjektiv nach dem Nomen und unveränderlich – wie im Französischen („une robe rouge“), nur ohne jede Kongruenz."
        },
        {
          id: "g-k06-mau",
          title: "Farben benennen: màu + Farbwort",
          term: "Klassifizierendes Nomen màu; Farbterminologie",
          pattern: "N + (màu) + Farbe  ·  màu gì?",
          text: "Farbwörter können direkt hinter dem Nomen stehen (`áo đỏ`) oder mit dem Nomen `màu` „Farbe“ eingeleitet werden: `áo màu đỏ` „ein Oberteil in Rot“. Mit `màu` klingt die Angabe etwas expliziter; bei Farben, die eigentlich Dinge bezeichnen, ist es fast obligatorisch: `màu cam` „orange“ (wörtl. „Farbe der Orange“), `màu nâu` „braun“.\n\nNach der Farbe fragt man mit `màu gì?`: `Áo dài của chị màu gì?` „Welche Farbe hat dein Áo dài?“ – das Fragewort bleibt an der Stelle der erfragten Konstituente (in situ, K02).\n\nBesonderheit: `xanh` deckt **Blau und Grün** ab. Bei Bedarf präzisiert man: `xanh da trời` / `xanh dương` „himmelblau, blau“, `xanh lá cây` „blattgrün“. Viele Sprachen Ostasiens haben eine solche „grue“-Kategorie. Grün an der Ampel heißt im Vietnamesischen `đèn xanh` – „blaues/grünes Licht“.",
          table: {
            head: ["Vietnamesisch", "Deutsch", "Bemerkung"],
            rows: [
              ["đỏ", "rot", "Farbe des Glücks"],
              ["vàng", "gelb", "auch: Gold"],
              ["xanh (da trời / dương)", "blau", "dương v. a. im Süden"],
              ["xanh lá cây", "grün", "wörtl. Blätter-xanh"],
              ["trắng", "weiß", "traditionell Trauerfarbe"],
              ["đen", "schwarz", ""],
              ["hồng", "rosa", ""],
              ["màu nâu / màu cam", "braun / orange", "meist mit màu"]
            ]
          },
          examples: [
            { vi: "Áo dài của chị màu gì?", de: "Welche Farbe hat dein Áo dài?", gloss: "Áo dài | von | du | Farbe | was" },
            { vi: "Màu đỏ.", de: "Rot.", gloss: "Farbe | rot" },
            { vi: "Jonas mua một cái áo màu xanh lá cây.", de: "Jonas kauft ein grünes Oberteil.", gloss: "Jonas | kaufen | ein | CL | Oberteil | Farbe | grün" }
          ],
          contrast: "Das Deutsche trennt Blau und Grün strikt. Im Vietnamesischen ist `xanh` zunächst eine gemeinsame Kategorie; die genaue Nuance ergibt sich aus Kontext oder Zusatz."
        },
        {
          id: "g-k06-tragen",
          title: "Tragen: mặc, đội, đi",
          term: "Verben des Tragens (lexikalische Differenzierung nach Körperteil)",
          pattern: "mặc + Kleidung  ·  đội + Kopfbedeckung  ·  đi + Schuhe",
          text: "Wo das Deutsche ein einziges Verb „tragen“ (oder „anhaben“) benutzt, unterscheidet das Vietnamesische nach dem **Körperteil**:\n\n- `mặc` für Kleidung am Körper: `mặc áo`, `mặc quần`, `mặc áo dài`.\n- `đội` für Kopfbedeckungen (wörtl. „auf dem Kopf tragen“): `đội mũ`, `đội nón lá`.\n- `đi` für Schuhe im Norden (`đi giày`), im Süden `mang` (`mang giày`).\n\nAlle drei Verben bezeichnen sowohl den Vorgang („anziehen, aufsetzen“) als auch den Zustand („anhaben“); den Unterschied macht erst die Aspektmarkierung (K08) oder der Kontext. Kleidung zählt man mit `cái` oder `chiếc`, Schuhe paarweise mit `đôi`: `một đôi giày` „ein Paar Schuhe“.\n\nFür Accessoires, die man anhängt oder umlegt – Brille, Uhr, Schmuck, Maske –, gibt es ein viertes Verb: `đeo` (`đeo kính` „eine Brille tragen“). Eine Tasche trägt man dagegen mit `xách` (in der Hand) oder `đeo` (über der Schulter). Wer das falsche Verb wählt, wird zwar verstanden, klingt aber sofort fremd.",
          table: {
            head: ["Verb", "Objekt", "Beispiel", "Deutsch"],
            rows: [
              ["mặc", "Kleidung", "mặc áo dài", "ein Áo dài tragen"],
              ["đội", "Kopfbedeckung", "đội nón lá", "einen Nón lá tragen"],
              ["đi (Nord) / mang (Süd)", "Schuhe", "đi giày", "Schuhe tragen"]
            ]
          },
          examples: [
            { vi: "Linh mặc áo dài đỏ.", de: "Linh trägt ein rotes Áo dài.", gloss: "Linh | tragen(Körper) | Áo dài | rot" },
            { vi: "Jonas đội nón lá.", de: "Jonas trägt einen Nón lá.", gloss: "Jonas | tragen(Kopf) | Nón lá" },
            { vi: "Linh đi giày trắng.", de: "Linh trägt weiße Schuhe.", gloss: "Linh | tragen(Füße) | Schuhe | weiß" }
          ],
          contrast: "Deutsch: „tragen“ für alles. Vietnamesisch verlangt das passende Verb – *mặc mũ* klingt so falsch wie „einen Hut anziehen“ statt „aufsetzen“.",
          south: "Süden: `mang giày` statt `đi giày`, `nón` statt `mũ` für jede Kopfbedeckung."
        }
      ],
      dialogue: {
        setting: "In einer Schneiderei in der Altstadt von Hội An. Die Verkäuferin Chị Mai (35) begrüßt Jonas (30) und Linh (28).",
        lines: [
          { who: "Chị Mai", vi: "Chào anh chị! Anh chị muốn mua gì ạ?", de: "Hallo! Was möchten Sie kaufen?" },
          { who: "Linh", vi: "Em muốn mua một cái áo dài.", de: "Ich möchte ein Áo dài kaufen." },
          { who: "Chị Mai", vi: "Dạ, em thích màu gì?", de: "Gern. Welche Farbe magst du?" },
          { who: "Linh", vi: "Em thích màu đỏ. Áo dài đỏ đẹp lắm.", de: "Ich mag Rot. Rote Áo dài sind sehr schön." },
          { who: "Jonas", vi: "Anh muốn mua một cái áo trắng và một cái quần đen.", de: "Ich möchte ein weißes Hemd und eine schwarze Hose kaufen." },
          { who: "Chị Mai", vi: "Dạ. Anh có muốn mua nón lá không? Nón lá Hội An rất đẹp.", de: "Gern. Möchtest du auch einen Nón lá kaufen? Die Nón lá aus Hội An sind sehr schön." },
          { who: "Jonas", vi: "Có! Anh muốn mua một cái nón lá.", de: "Ja! Ich möchte einen Nón lá kaufen." },
          { who: "Linh", vi: "Anh mặc áo dài xanh nhé!", de: "Trag du doch ein blaues Áo dài, ja?" },
          { who: "Jonas", vi: "Áo dài xanh? Đẹp quá!", de: "Ein blaues Áo dài? Wie schön!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Linh muốn mua áo dài màu ___.", de: "Linh möchte ein rosa Áo dài kaufen.", options: ["hồng", "mặc", "mũ"], answer: "hồng", explain: "Nach màu steht das Farbwort: màu hồng = rosa." },
        { type: "gap", vi: "Jonas ___ áo trắng.", de: "Jonas trägt ein weißes Hemd.", options: ["mặc", "đội", "đi"], answer: "mặc", explain: "Kleidung am Körper: mặc. đội ist für Kopfbedeckungen, đi (Nord) für Schuhe." },
        { type: "gap", vi: "Cô ấy ___ nón lá.", de: "Sie trägt einen Nón lá.", options: ["đội", "mặc", "uống"], answer: "đội", explain: "Kopfbedeckungen „trägt man auf dem Kopf“: đội." },
        { type: "gap", vi: "Áo dài của chị ___ gì?", de: "Welche Farbe hat dein Áo dài?", options: ["màu", "là", "rất"], answer: "màu", explain: "Nach der Farbe fragt man mit màu gì?" },
        { type: "build", vi: "Tôi muốn mua một cái áo đỏ.", de: "Ich möchte ein rotes Oberteil kaufen.", extra: ["là", "rất"] },
        { type: "build", vi: "Linh mặc áo_dài trắng.", de: "Linh trägt ein weißes Áo dài.", extra: ["đội", "là"] },
        { type: "build", vi: "Giày màu đen đẹp lắm.", de: "Schwarze Schuhe sind sehr schön.", extra: ["là", "đội"] },
        { type: "translate", de: "ein rotes Hemd", answers: ["một cái áo đỏ", "một chiếc áo đỏ", "một cái áo màu đỏ", "một chiếc áo màu đỏ", "cái áo đỏ", "chiếc áo đỏ", "áo đỏ", "áo màu đỏ"] },
        { type: "translate", de: "Ich möchte einen Nón lá kaufen.", answers: ["Tôi muốn mua một cái nón lá.", "Tôi muốn mua một chiếc nón lá.", "Tôi muốn mua nón lá."] },
        { type: "mc", q: "Welche Nominalphrase bedeutet „blaue Schuhe“?", options: ["giày xanh", "xanh giày", "giày là xanh"], answer: 0, explain: "Das Attribut folgt dem Nomen: giày xanh. là gehört nicht vor Adjektive." },
        { type: "mc", q: "Was bedeutet „xanh lá cây“?", options: ["grün (wie Blätter)", "hellblau", "gelb"], answer: 0, explain: "xanh = blau oder grün; lá cây (Blätter) präzisiert: grün." },
        { type: "listen", vi: "Linh mặc áo_dài đỏ.", de: "Linh trägt ein rotes Áo dài." },
        { type: "speak", vi: "Tôi thích màu xanh.", de: "Ich mag Blau." },
        { type: "pairs", pairs: [["đỏ", "rot"], ["trắng", "weiß"], ["đen", "schwarz"], ["vàng", "gelb"], ["hồng", "rosa"], ["xanh", "blau/grün"]] }
      ]
    },

    // ───────────────────────────── k06l2 ─────────────────────────────
    {
      id: "k06l2",
      title: "Demonstrativa & Nominalphrase",
      goal: "Du kannst auf Dinge zeigen (dieses, jenes), komplexe Nominalphrasen bilden und fragen, welches gemeint ist.",
      vocab: [
        { vi: "này", de: "dieser, diese, dieses (hier)", pos: "Pron", note: "Demonstrativ, nur attributiv: cái áo này. Allein stehend: đây.", ex: { vi: "Cái áo này đẹp lắm.", de: "Dieses Oberteil ist sehr schön." } },
        { vi: "kia", de: "jener, jene, jenes (dort drüben)", pos: "Pron", note: "Demonstrativ für Entferntes, auch allein: Kia là …", ex: { vi: "Cái đèn lồng kia rất đẹp.", de: "Die Laterne dort drüben ist sehr schön." } },
        { vi: "đó", de: "der/die/das da (beim Hörer oder schon erwähnt)", pos: "Pron", ex: { vi: "Cái túi đó bao nhiêu tiền?", de: "Wie viel kostet die Tasche da?" } },
        { vi: "đấy", de: "der/die/das da (Nord, umgangssprachlich)", pos: "Pron", note: "Nördliche Entsprechung zu đó.", ex: { vi: "Cái mũ đấy đẹp quá!", de: "Wie schön die Mütze da ist!" } },
        { vi: "đây", de: "hier; das hier (allein stehend)", pos: "Pron", ex: { vi: "Đây là đèn lồng Hội An.", de: "Das hier ist eine Laterne aus Hội An." } },
        { vi: "cái nào", de: "welcher, welche, welches (Ding)?", pos: "QW", ex: { vi: "Em thích cái nào?", de: "Welches gefällt dir?" } },
        { vi: "đôi", de: "Paar (Klassifikator)", pos: "CL", ex: { vi: "Tôi muốn mua một đôi giày.", de: "Ich möchte ein Paar Schuhe kaufen." } },
        { vi: "bộ", de: "Satz, Set, Garnitur (Klassifikator)", pos: "CL", ex: { vi: "Jonas muốn mua một bộ quần áo.", de: "Jonas möchte einen Anzug (ein Outfit) kaufen." } },
        { vi: "quần áo", de: "Kleidung", pos: "N", emoji: "👔", ex: { vi: "Hội An có nhiều quần áo đẹp.", de: "In Hội An gibt es viel schöne Kleidung." } },
        { vi: "túi", de: "Tasche, Beutel", pos: "N", emoji: "👜", cls: "cái / chiếc", ex: { vi: "Cái túi này đẹp quá!", de: "Wie schön diese Tasche ist!" } },
        { vi: "khăn", de: "Tuch, Schal", pos: "N", emoji: "🧣", cls: "cái / chiếc", ex: { vi: "Linh thích cái khăn lụa này.", de: "Linh mag diesen Seidenschal." } },
        { vi: "lụa", de: "Seide", pos: "N", ex: { vi: "Áo dài lụa rất đẹp.", de: "Áo dài aus Seide sind sehr schön." } },
        { vi: "đèn lồng", de: "Laterne", pos: "N", emoji: "🏮", cls: "cái / chiếc", ex: { vi: "Tôi muốn mua hai cái đèn lồng.", de: "Ich möchte zwei Laternen kaufen." } },
        { vi: "tất cả", de: "alle, alles (Quantor)", pos: "Pron", ex: { vi: "Tôi thích tất cả những cái đèn lồng này.", de: "Mir gefallen alle diese Laternen." } }
      ],
      grammar: [
        {
          id: "g-k06-demonstrativ",
          title: "Demonstrativa: này, kia, đó/đấy, ấy",
          term: "Demonstrativ (postnominales Deiktikum)",
          pattern: "(CL) + N + này / kia / đó / đấy / ấy",
          text: "Demonstrativa stehen im Vietnamesischen **am rechten Rand** der Nominalphrase, nach Nomen und Attribut: `cái áo đỏ này` „dieses rote Oberteil“. Das System ist **dreistufig** nach Entfernung:\n\n- `này`: nah beim Sprecher („dies hier“)\n- `đó` / `đấy`: beim Hörer oder in mittlerer Entfernung; außerdem **anaphorisch** für schon Erwähntes („das da, das besagte“). `đấy` ist nördlich-umgangssprachlich, `đó` neutral und im Süden üblich.\n- `kia`: weit weg von beiden („das dort drüben“)\n- `ấy`: rein anaphorisch – kennst du aus `anh ấy`, `chị ấy` (K02): „der Bewusste“.\n\nWichtig ist der Unterschied zwischen **attributiver** und **pronominaler** Form: `này` kann nicht allein stehen. „Das hier ist …“ heißt `Đây là …`, nicht *Này là …*. Ebenso: `đấy`/`đó` und `kia` können allein stehen (`Đó là …`, `Kia là …`).\n\nBei zählbaren Nomen steht vor dem Nomen in der Regel ein **Klassifikator**: `cái túi này`, `con mèo kia`, `quyển sách đó`.",
          table: {
            head: ["Demonstrativ", "Entfernung", "allein stehend", "Beispiel"],
            rows: [
              ["này", "beim Sprecher", "đây", "cái áo này – dieses Oberteil"],
              ["đó / đấy", "beim Hörer, schon erwähnt", "đó / đấy", "cái túi đó – die Tasche da"],
              ["kia", "weit weg", "kia", "cái đèn lồng kia – die Laterne dort"],
              ["ấy", "anaphorisch", "–", "chị ấy – sie (die Bewusste)"]
            ]
          },
          examples: [
            { vi: "Cái áo này đẹp lắm.", de: "Dieses Oberteil ist sehr schön.", gloss: "CL | Oberteil | dies | schön | sehr" },
            { vi: "Cái đèn lồng kia bao nhiêu tiền?", de: "Wie viel kostet die Laterne dort drüben?", gloss: "CL | Laterne | jene | wie viel | Geld" },
            { vi: "Đây là lụa Hội An.", de: "Das hier ist Seide aus Hội An.", gloss: "hier | sein | Seide | Hội An" },
            { vi: "Cái túi đó đẹp quá!", de: "Wie schön die Tasche da ist!", gloss: "CL | Tasche | die da | schön | so" }
          ],
          contrast: "Im Deutschen steht „dieser“ vor dem Nomen und flektiert („dieses Hemd“, „diese Hemden“). Im Vietnamesischen steht das Demonstrativ ganz am Ende und bleibt unveränderlich. Das Deutsche unterscheidet im Alltag nur zwei Stufen („dies“/„das da“), das Vietnamesische drei."
        },
        {
          id: "g-k06-np-schema",
          title: "Das Schema der Nominalphrase",
          term: "Nominalphrasen-Schema (feste Konstituentenabfolge)",
          pattern: "(Quantor) (Num) (CL) N (Attribut) (Demonstrativ)",
          text: "Die vietnamesische Nominalphrase hat eine **feste Abfolge**, die sich um den Kopf (das Nomen) aufbaut. **Links** vom Nomen stehen die quantifizierenden Elemente, **rechts** die qualifizierenden:\n\n- **Quantor**: `tất cả` „alle“, `các`, `những` (Plural, K04), `mỗi` „jeder“\n- **Numerale**: `hai`, `ba` …\n- **Klassifikator**: `cái`, `chiếc`, `con`, `đôi`, `bộ` …\n- **Nomen** (Kopf)\n- **Attribut**: Adjektiv, Material, Farbe\n- **Demonstrativ**: `này`, `kia`, `đó` – immer ganz rechts\n\nSo entsteht: `hai cái áo đỏ này` „diese zwei roten Oberteile“. Im Deutschen ist die Reihenfolge fast spiegelbildlich: Demonstrativ – Zahl – Adjektiv – Nomen.\n\nNicht alle Positionen müssen besetzt sein. Steht aber ein Numerale oder ein Demonstrativ, ist bei zählbaren Nomen der Klassifikator in der Regel nötig: `hai cái áo`, `cái áo này`. Kollektivnomen wie `quần áo` „Kleidung“ zählt man mit `bộ` („Garnitur“). Bei Paaren steht `đôi`: `một đôi giày đen` „ein Paar schwarze Schuhe“.",
          table: {
            head: ["Quantor", "Num", "CL", "N", "Attribut", "Demonstrativ"],
            rows: [
              ["", "hai", "cái", "áo", "đỏ", "này"],
              ["", "một", "đôi", "giày", "đen", "kia"],
              ["", "ba", "chiếc", "đèn lồng", "vàng", "đó"],
              ["tất cả", "", "", "khăn", "lụa", "này"],
              ["những", "", "cái", "túi", "trắng", "kia"]
            ]
          },
          examples: [
            { vi: "Hai cái áo đỏ này đẹp lắm.", de: "Diese zwei roten Oberteile sind sehr schön.", gloss: "zwei | CL | Oberteil | rot | dies | schön | sehr" },
            { vi: "Tôi muốn mua một đôi giày đen.", de: "Ich möchte ein Paar schwarze Schuhe kaufen.", gloss: "ich | wollen | kaufen | ein | Paar | Schuh | schwarz" },
            { vi: "Ba chiếc đèn lồng vàng kia rất đẹp.", de: "Die drei gelben Laternen dort drüben sind sehr schön.", gloss: "drei | CL | Laterne | gelb | jene | sehr | schön" }
          ],
          contrast: "Deutsch: „diese zwei roten Hemden“ – Determinativ, Zahl, Adjektiv, Nomen. Vietnamesisch: `hai cái áo đỏ này` – Zahl, Klassifikator, Nomen, Adjektiv, Demonstrativ. Nur Zahl-vor-Nomen ist gleich."
        },
        {
          id: "g-k06-cl-pronomen",
          title: "Klassifikator ohne Nomen: cái này, cái nào?",
          term: "Pronominaler Gebrauch des Klassifikators (Nomenellipse)",
          pattern: "CL + Demonstrativ / Attribut / nào",
          text: "Ist aus dem Kontext klar, worum es geht, kann das Nomen **wegfallen**; der **Klassifikator** übernimmt dann die Rolle eines Pronomens:\n\n- `cái này` „dieses (Ding) hier“, `cái kia` „jenes dort“\n- `cái đỏ` „das rote“, `cái lụa` „das aus Seide“\n- `đôi này` „dieses Paar“ (Schuhe), `con kia` „das (Tier) dort“\n\nDer Klassifikator verrät dabei, **welche Art von Ding** gemeint ist: `con này` kann nur ein Tier sein, `đôi này` nur ein Paar. `cái` ist der allgemeinste und deshalb häufigste Klassifikator für unbelebte Gegenstände.\n\nDie Frage nach der Auswahl lautet CL + `nào`: `cái nào?` „welches?“, `đôi nào?` „welches Paar?“. Das Fragewort bleibt wie immer in situ: `Em thích cái nào?` „Welches gefällt dir?“ – Antwort: `Em thích cái này.`\n\nAllein, ohne Klassifikator, funktionieren die Demonstrativa nicht als Objekt: *Em thích này* ist falsch.",
          examples: [
            { vi: "Em thích cái nào?", de: "Welches gefällt dir?", gloss: "du | mögen | CL | welch-" },
            { vi: "Em thích cái đỏ.", de: "Mir gefällt das rote.", gloss: "ich | mögen | CL | rot" },
            { vi: "Cho anh cái này nhé.", de: "Dieses hier für mich, ja?", gloss: "geben | (ich) | CL | dies | PART" },
            { vi: "Đôi kia bao nhiêu tiền?", de: "Wie viel kostet das Paar dort drüben?", gloss: "Paar | jenes | wie viel | Geld" }
          ],
          contrast: "Auch das Deutsche lässt das Nomen weg („das rote“, „welches?“), markiert die Bezugsklasse aber über das Genus des Artikels. Im Vietnamesischen leistet der Klassifikator diese Arbeit."
        }
      ],
      dialogue: {
        setting: "Ein Laternengeschäft an der Japanischen Brücke in Hội An. Jonas und Linh sprechen mit Vy, einer jungen Verkäuferin (ca. 20).",
        lines: [
          { who: "Jonas", vi: "Em ơi, cái đèn lồng này bao nhiêu tiền?", de: "Hallo, wie viel kostet diese Laterne?" },
          { who: "Vy", vi: "Dạ, cái này một trăm nghìn ạ.", de: "Diese kostet hunderttausend." },
          { who: "Jonas", vi: "Cái kia bao nhiêu?", de: "Und die dort drüben?" },
          { who: "Vy", vi: "Dạ, cái nào ạ?", de: "Welche denn?" },
          { who: "Jonas", vi: "Cái đèn lồng vàng kia.", de: "Die gelbe Laterne dort drüben." },
          { who: "Vy", vi: "Dạ, cái đó hai trăm nghìn ạ. Đèn lồng lụa.", de: "Die kostet zweihunderttausend. Eine Seidenlaterne." },
          { who: "Linh", vi: "Anh ơi, em thích cái đỏ này.", de: "Schatz, mir gefällt die rote hier." },
          { who: "Jonas", vi: "Em ơi, cho anh hai cái đèn lồng đỏ này nhé.", de: "Dann nehme ich diese zwei roten Laternen, ja?" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Cái áo ___ đẹp lắm.", de: "Dieses Oberteil ist sehr schön.", options: ["này", "đây", "nào"], answer: "này", explain: "Attributiv steht này nach dem Nomen. đây steht nur allein (Đây là …), nào fragt „welches?“." },
        { type: "gap", vi: "___ là đèn lồng Hội An.", de: "Das hier ist eine Laterne aus Hội An.", options: ["Đây", "Này", "Nào"], answer: "Đây", explain: "Allein stehend heißt „das hier“ đây; *Này là … ist falsch." },
        { type: "gap", vi: "Chị muốn mua cái ___?", de: "Welches möchtest du kaufen?", options: ["nào", "đây", "này"], answer: "nào", explain: "Auswahlfrage: CL + nào = „welches?“. đây steht nur allein (Đây là …), này zeigt auf etwas, fragt aber nicht." },
        { type: "gap", vi: "Tôi muốn mua hai ___ giày.", de: "Ich möchte zwei Paar Schuhe kaufen.", options: ["đôi", "con", "bát"], answer: "đôi", explain: "Schuhe zählt man paarweise mit dem Klassifikator đôi. con ist für Tiere, bát für Schalen." },
        { type: "build", vi: "Hai cái áo đỏ này đẹp lắm.", de: "Diese zwei roten Oberteile sind sehr schön.", extra: ["là", "nào"] },
        { type: "build", vi: "Tôi thích cái đèn_lồng vàng kia.", de: "Mir gefällt die gelbe Laterne dort drüben.", extra: ["là", "đây"] },
        { type: "build", vi: "Đôi giày đen này bao_nhiêu tiền?", de: "Wie viel kostet dieses Paar schwarze Schuhe?", extra: ["đây", "con"] },
        { type: "translate", de: "Diese zwei roten Laternen, bitte.", answers: ["Cho tôi hai cái đèn lồng đỏ này.", "Cho tôi hai cái đèn lồng đỏ này nhé.", "Cho tôi hai chiếc đèn lồng đỏ này.", "Cho tôi hai chiếc đèn lồng đỏ này nhé.", "Cho anh hai cái đèn lồng đỏ này.", "Cho anh hai cái đèn lồng đỏ này nhé.", "Cho em hai cái đèn lồng đỏ này.", "Cho em hai cái đèn lồng đỏ này nhé."] },
        { type: "translate", de: "Welches gefällt dir? (zu Linh, em)", answers: ["Em thích cái nào?"] },
        { type: "mc", q: "Welche Nominalphrase folgt dem Schema?", options: ["hai cái áo đỏ này", "này hai cái áo đỏ", "hai cái đỏ áo này"], answer: 0, explain: "Num – CL – N – Attribut – Demonstrativ: hai cái áo đỏ này." },
        { type: "mc", q: "Was unterscheidet „kia“ von „này“?", options: ["kia: weit weg (dort drüben), này: nah beim Sprecher", "kia: Plural, này: Singular", "kein Unterschied"], answer: 0, explain: "Die Demonstrativa sind nach Entfernung gestuft; Numerus markieren sie nicht." },
        { type: "mc", q: "Linh zeigt auf die Laternen und sagt: „Em thích cái đỏ.“ Was meint sie?", options: ["Mir gefällt die rote (Laterne).", "Ich mag Rot allgemein.", "Ich bin rot."], answer: 0, explain: "cái + Attribut ohne Nomen = „das rote (Ding)“ – Nomenellipse." },
        { type: "listen", vi: "Cái túi lụa này đẹp quá!", de: "Wie schön diese Seidentasche ist!" },
        { type: "speak", vi: "Cho anh cái này nhé.", de: "Dieses hier für mich, ja?" },
        { type: "pairs", pairs: [["này", "dies hier"], ["kia", "das dort drüben"], ["đó", "das da"], ["đây", "hier (allein)"], ["cái nào", "welches?"]] }
      ]
    },

    // ───────────────────────────── k06l3 ─────────────────────────────
    {
      id: "k06l3",
      title: "Vergleich",
      goal: "Du kannst Dinge vergleichen: schöner als, am schönsten, genauso wie, ähnlich und anders.",
      vocab: [
        { vi: "hơn", de: "mehr; -er als (Komparativ)", pos: "Adv", ex: { vi: "Áo đỏ đẹp hơn áo trắng.", de: "Das rote Oberteil ist schöner als das weiße." } },
        { vi: "nhất", de: "am meisten; -ste (Superlativ)", pos: "Adv", ex: { vi: "Cái này đẹp nhất.", de: "Dieses ist das schönste." } },
        { vi: "bằng", de: "so … wie, gleich (Äquativ)", pos: "Präp", ex: { vi: "Linh cao bằng mẹ.", de: "Linh ist so groß wie ihre Mutter." } },
        { vi: "giống", de: "ähneln, gleichen; ähnlich", pos: "V", ex: { vi: "Linh giống mẹ.", de: "Linh ähnelt ihrer Mutter." } },
        { vi: "khác", de: "anders, verschieden; sich unterscheiden", pos: "Adj", ex: { vi: "Cái này khác cái kia.", de: "Dieses ist anders als das dort." } },
        { vi: "như", de: "wie (Vergleich)", pos: "Präp", ex: { vi: "Linh đẹp như hoa.", de: "Linh ist schön wie eine Blume." } },
        { vi: "nhau", de: "einander (reziprok)", pos: "Pron", ex: { vi: "Hai cái áo này giống nhau.", de: "Diese zwei Oberteile gleichen einander." } },
        { vi: "dài", de: "lang", pos: "Adj", ex: { vi: "Cái khăn này dài quá!", de: "Dieser Schal ist so lang!" } },
        { vi: "ngắn", de: "kurz", pos: "Adj", ex: { vi: "Cái quần này hơi ngắn.", de: "Diese Hose ist etwas kurz." } },
        { vi: "cao", de: "hoch; groß (Person)", pos: "Adj", ex: { vi: "Jonas cao hơn Linh.", de: "Jonas ist größer als Linh." } },
        { vi: "thấp", de: "niedrig; klein (Person)", pos: "Adj", ex: { vi: "Linh thấp hơn Jonas.", de: "Linh ist kleiner als Jonas." } },
        { vi: "mềm", de: "weich", pos: "Adj", ex: { vi: "Lụa Hội An rất mềm.", de: "Seide aus Hội An ist sehr weich." } },
        { vi: "mới", de: "neu", pos: "Adj", note: "Als Aspektadverb „gerade erst“ in K08.", ex: { vi: "Tôi muốn mua giày mới.", de: "Ich möchte neue Schuhe kaufen." } },
        { vi: "bánh mì Phượng", de: "Bánh mì vom berühmten Stand „Phượng“ in Hội An", pos: "N", emoji: "🥖", ex: { vi: "Bánh mì Phượng ngon nhất Hội An.", de: "Bánh mì Phượng ist das leckerste in Hội An." } },
        { vi: "một chút", de: "ein bisschen, ein wenig", pos: "Adv", ex: { vi: "Cái này dài hơn một chút.", de: "Dieses ist ein bisschen länger." } }
      ],
      grammar: [
        {
          id: "g-k06-komparativ",
          title: "Komparativ und Superlativ: hơn, nhất",
          term: "Komparativkonstruktion; Superlativ",
          pattern: "A + Adj + hơn + B  ·  A + Adj + nhất",
          text: "Das Vietnamesische steigert Adjektive nicht morphologisch, sondern **syntaktisch** mit nachgestellten Gradwörtern:\n\n- **Komparativ**: A + Adj + `hơn` + B: `Áo đỏ đẹp hơn áo trắng.` „Das rote Oberteil ist schöner als das weiße.“ `hơn` entspricht zugleich der Endung „-er“ und dem „als“. Das Vergleichsglied B kann fehlen: `Cái này đẹp hơn.` „Dieses ist schöner.“\n- **Superlativ**: A + Adj + `nhất`: `Cái này đẹp nhất.` „Dieses ist das schönste.“ Den Bereich nennt man einfach dahinter: `ngon nhất Hội An` „das leckerste in Hội An“.\n\nDen **Unterschiedsgrad** setzt man hinter das Vergleichsglied oder direkt hinter `hơn`: `đắt hơn một chút` „ein bisschen teurer“, `cao hơn nhiều` „viel größer“.\n\nWie bei allen Stativverben gilt: **kein `là`**. *Áo đỏ là đẹp hơn* ist falsch. Und `nhất` verträgt sich nicht mit `rất`: *rất đẹp nhất* ist ungrammatisch.\n\nFragen: `Cái nào đẹp hơn?` „Welches ist schöner?“ – `Cái nào rẻ nhất?` „Welches ist das billigste?“",
          table: {
            head: ["Stufe", "Muster", "Beispiel", "Deutsch"],
            rows: [
              ["Positiv", "A + Adj", "Áo này đẹp.", "Dieses Oberteil ist schön."],
              ["Komparativ", "A + Adj + hơn + B", "Áo này đẹp hơn áo kia.", "… schöner als jenes."],
              ["Superlativ", "A + Adj + nhất", "Áo này đẹp nhất.", "… das schönste."]
            ]
          },
          examples: [
            { vi: "Jonas cao hơn Linh.", de: "Jonas ist größer als Linh.", gloss: "Jonas | groß | mehr | Linh" },
            { vi: "Cái túi đen này đẹp nhất.", de: "Diese schwarze Tasche ist die schönste.", gloss: "CL | Tasche | schwarz | dies | schön | am meisten" },
            { vi: "Cái này dài hơn một chút.", de: "Dieses ist ein bisschen länger.", gloss: "CL | dies | lang | mehr | ein | bisschen" },
            { vi: "Cái nào đẹp hơn?", de: "Welches ist schöner?", gloss: "CL | welch- | schön | mehr" }
          ],
          contrast: "Deutsch steigert durch Endungen und Umlaut („groß – größer – am größten“) und braucht „sein“. Vietnamesisch: Grundform bleibt, `hơn`/`nhất` werden nachgestellt, keine Kopula."
        },
        {
          id: "g-k06-aequativ",
          title: "Gleichheit: bằng und như",
          term: "Äquativkonstruktion; Vergleichspartikel",
          pattern: "A + Adj + bằng + B  ·  A + không + Adj + bằng + B  ·  A + Adj + như + B",
          text: "Für **Gleichheit messbarer Eigenschaften** (Größe, Länge, Preis) benutzt man `bằng`: `Linh cao bằng mẹ.` „Linh ist so groß wie ihre Mutter.“ `bằng` bedeutet ursprünglich „gleich, eben“ – A ist „gleich B“ in Bezug auf die Eigenschaft.\n\nBesonders häufig ist die **negierte Form**: A + `không` + Adj + `bằng` + B „A ist nicht so … wie B“. Sie ist die höfliche Art, einen Nachteil auszudrücken: `Áo này không đẹp bằng áo kia.` „Dieses Oberteil ist nicht so schön wie jenes.“\n\n`như` „wie“ vergleicht eher **qualitativ oder bildhaft**: `đẹp như hoa` „schön wie eine Blume“, `đỏ như máu` „rot wie Blut“. Hier geht es nicht um exaktes Messen, sondern um Ähnlichkeit oder einen Vergleich.\n\nZusammengefasst: `bằng` = „genauso … wie“ (Maß), `như` = „wie“ (Art, Bild).",
          examples: [
            { vi: "Linh cao bằng mẹ.", de: "Linh ist so groß wie ihre Mutter.", gloss: "Linh | groß | gleich | Mutter" },
            { vi: "Áo này không đẹp bằng áo kia.", de: "Dieses Oberteil ist nicht so schön wie jenes.", gloss: "Oberteil | dies | nicht | schön | gleich | Oberteil | jenes" },
            { vi: "Linh không cao bằng Jonas.", de: "Linh ist nicht so groß wie Jonas.", gloss: "Linh | nicht | groß | gleich | Jonas" },
            { vi: "Em đẹp như hoa.", de: "Du bist schön wie eine Blume.", gloss: "du | schön | wie | Blume" }
          ],
          contrast: "Deutsch: „so … wie“ umklammert das Adjektiv. Vietnamesisch: nur ein Wort hinter dem Adjektiv (`bằng` oder `như`), das Adjektiv bleibt unverändert."
        },
        {
          id: "g-k06-giong-khac",
          title: "Ähnlich und anders: giống, khác, nhau",
          term: "Vergleichsverben; Reziprokpronomen",
          pattern: "A + giống / khác + B  ·  A và B + giống / khác + nhau",
          text: "`giống` „ähneln, gleichen“ und `khác` „anders sein, sich unterscheiden“ sind **Vergleichsverben**: Sie nehmen das Vergleichsglied direkt als Objekt, ohne Präposition: `Linh giống mẹ.` „Linh ähnelt ihrer Mutter.“ – `Cái này khác cái kia.` „Dieses ist anders als jenes.“\n\nWerden beide Vergleichsglieder zusammen im Subjekt genannt, steht das **Reziprokpronomen** `nhau` „einander“ als Objekt: `Hai cái áo này giống nhau.` „Diese beiden Oberteile gleichen einander.“ – `Cái đỏ và cái trắng khác nhau.` „Das rote und das weiße sind verschieden.“\n\nAuch hier gilt: Graduierung und Negation wie bei Stativverben: `rất giống`, `không giống`, `khác lắm`. Die Kombination `giống như` „genauso wie“ verstärkt den Vergleich: `Áo này giống như áo kia.`\n\nOptional kann die Präposition `với` „mit“ eingefügt werden: `Linh giống với mẹ.`, `Cái này khác với cái kia.` Ein eigenes Wort für dt. „als“ nach „anders“ gibt es dagegen nicht – ein typischer Lernerfehler ist, hier `hơn` einzusetzen (*khác hơn cái kia*).",
          examples: [
            { vi: "Linh giống mẹ.", de: "Linh ähnelt ihrer Mutter.", gloss: "Linh | ähneln | Mutter" },
            { vi: "Hai cái áo này giống nhau.", de: "Diese zwei Oberteile sind gleich.", gloss: "zwei | CL | Oberteil | dies | ähneln | einander" },
            { vi: "Cái đỏ và cái trắng khác nhau.", de: "Das rote und das weiße sind verschieden.", gloss: "CL | rot | und | CL | weiß | anders | einander" }
          ],
          contrast: "Deutsch: „anders als“, „ähnlich wie“, „einander ähnlich“ – mit Präposition oder Partikel. Vietnamesisch: `khác`/`giống` + Objekt direkt; „einander“ wird mit `nhau` ausgedrückt."
        }
      ],
      dialogue: {
        setting: "Zurück in der Schneiderei von Chị Mai. Linh probiert zwei Áo dài an – ein rotes und ein weißes. Jonas soll entscheiden.",
        lines: [
          { who: "Linh", vi: "Anh ơi, cái đỏ đẹp hơn hay cái trắng đẹp hơn?", de: "Schatz, ist das rote schöner oder das weiße?" },
          { who: "Jonas", vi: "Cái đỏ đẹp hơn. Cái trắng hơi dài.", de: "Das rote ist schöner. Das weiße ist etwas lang." },
          { who: "Linh", vi: "Hai cái này có giống nhau không chị?", de: "Sind die beiden gleich?" },
          { who: "Chị Mai", vi: "Không, khác nhau. Cái đỏ là lụa Hội An.", de: "Nein, sie sind verschieden. Das rote ist Hội-An-Seide." },
          { who: "Chị Mai", vi: "Lụa Hội An mềm hơn. Mềm nhất!", de: "Hội-An-Seide ist weicher. Die weichste!" },
          { who: "Linh", vi: "Cái trắng không mềm bằng cái đỏ.", de: "Das weiße ist nicht so weich wie das rote." },
          { who: "Jonas", vi: "Cái đỏ đẹp nhất. Em đẹp như hoa!", de: "Das rote ist das schönste. Du bist schön wie eine Blume!" },
          { who: "Linh", vi: "Anh nói hay quá!", de: "Wie schön du das sagst!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Áo dài đỏ đẹp ___ áo dài trắng.", de: "Das rote Áo dài ist schöner als das weiße.", options: ["hơn", "nhất", "như"], answer: "hơn", explain: "Komparativ: A + Adj + hơn + B." },
        { type: "gap", vi: "Cái đèn lồng này to ___.", de: "Diese Laterne ist die größte.", options: ["nhất", "hơn", "bằng"], answer: "nhất", explain: "Superlativ: Adj + nhất." },
        { type: "gap", vi: "Linh không cao ___ Jonas.", de: "Linh ist nicht so groß wie Jonas.", options: ["bằng", "nhất", "giống"], answer: "bằng", explain: "„nicht so … wie“ = không + Adj + bằng + B." },
        { type: "gap", vi: "Hai cái áo này giống ___.", de: "Diese zwei Oberteile gleichen einander.", options: ["nhau", "hơn", "nhất"], answer: "nhau", explain: "Reziprok „einander“ = nhau." },
        { type: "build", vi: "Áo đỏ đẹp hơn áo trắng.", de: "Das rote Oberteil ist schöner als das weiße.", extra: ["là", "nhất"] },
        { type: "build", vi: "Cái túi đen này đẹp nhất.", de: "Diese schwarze Tasche ist die schönste.", extra: ["hơn", "là"] },
        { type: "build", vi: "Jonas cao hơn Linh.", de: "Jonas ist größer als Linh.", extra: ["bằng", "là"] },
        { type: "translate", de: "Der rote Schal ist länger als der weiße.", answers: ["Khăn đỏ dài hơn khăn trắng.", "Cái khăn đỏ dài hơn cái khăn trắng.", "Cái khăn đỏ dài hơn cái trắng.", "Chiếc khăn đỏ dài hơn chiếc khăn trắng.", "Chiếc khăn đỏ dài hơn chiếc trắng."] },
        { type: "translate", de: "Linh ähnelt ihrer Mutter.", answers: ["Linh giống mẹ.", "Linh giống với mẹ.", "Linh giống mẹ cô ấy.", "Linh trông giống mẹ."] },
        { type: "mc", q: "Was bedeutet der Satz?", vi: "Áo này không đẹp bằng áo kia.", options: ["Dieses Oberteil ist nicht so schön wie jenes.", "Dieses Oberteil ist schöner als jenes.", "Dieses Oberteil ist genauso schön wie jenes."], answer: 0, explain: "không + Adj + bằng = „nicht so … wie“ – die höfliche Form, einen Nachteil zu nennen." },
        { type: "mc", q: "Welcher Superlativ ist korrekt?", options: ["Cái này đẹp nhất.", "Cái này nhất đẹp.", "Cái này rất đẹp nhất."], answer: 0, explain: "nhất steht nach dem Adjektiv und verträgt sich nicht mit rất." },
        { type: "listen", vi: "Cái đỏ và cái trắng khác nhau.", de: "Das rote und das weiße sind verschieden." },
        { type: "speak", vi: "Em đẹp như hoa.", de: "Du bist schön wie eine Blume." },
        { type: "pairs", pairs: [["hơn", "-er als"], ["nhất", "am -sten"], ["bằng", "so … wie"], ["giống", "ähneln"], ["khác", "anders"]] }
      ]
    },

    // ───────────────────────────── k06l4 ─────────────────────────────
    {
      id: "k06l4",
      title: "Handeln",
      goal: "Du kannst auf dem Markt nach Preisen fragen, Preise in Marktsprache verstehen und erfolgreich handeln.",
      vocab: [
        { vi: "chợ", de: "Markt", pos: "N", emoji: "🧺", ex: { vi: "Tôi thích chợ Hội An.", de: "Ich mag den Markt von Hội An." } },
        { vi: "bán", de: "verkaufen", pos: "V", ex: { vi: "Cô ấy bán đèn lồng.", de: "Sie verkauft Laternen." } },
        { vi: "đắt", de: "teuer", pos: "Adj", south: "mắc", ex: { vi: "Đắt quá!", de: "Zu teuer! / So teuer!" } },
        { vi: "rẻ", de: "billig, günstig", pos: "Adj", ex: { vi: "Bánh mì Phượng rẻ lắm.", de: "Bánh mì Phượng ist sehr günstig." } },
        { vi: "bớt", de: "(Preis) nachlassen, reduzieren", pos: "V", ex: { vi: "Chị bớt một chút đi!", de: "Gehen Sie ein bisschen runter!" } },
        { vi: "giảm giá", de: "Rabatt geben; reduziert", pos: "V", note: "Auf Schildern: GIẢM GIÁ 20% = 20 % Rabatt.", ex: { vi: "Áo dài này có giảm giá không chị?", de: "Ist dieses Áo dài reduziert?" } },
        { vi: "mặc cả", de: "feilschen, handeln", pos: "V", south: "trả giá", ex: { vi: "Linh mặc cả giỏi lắm.", de: "Linh kann sehr gut feilschen." } },
        { vi: "lấy", de: "nehmen", pos: "V", ex: { vi: "Em lấy cái này.", de: "Ich nehme dieses." } },
        { vi: "… được không?", de: "Geht …? Ist … in Ordnung?", pos: "Phr", ex: { vi: "Một trăm được không?", de: "Geht hunderttausend?" } },
        { vi: "đi", de: "Satzendpartikel: Aufforderung („doch!, los!“)", pos: "Part", note: "Als Verb „gehen“ (K07) steht đi vor dem Ziel, als Partikel am Satzende.", ex: { vi: "Anh ăn đi!", de: "Iss doch!" } },
        { vi: "thôi", de: "Satzendpartikel: nur, bloß; (allein) genug, schon gut", pos: "Part", ex: { vi: "Năm mươi nghìn thôi.", de: "Nur fünfzigtausend." } },
        { vi: "nhiều", de: "viel, viele", pos: "Adj", ex: { vi: "Chợ có nhiều đèn lồng.", de: "Auf dem Markt gibt es viele Laternen." } },
        { vi: "cao lầu", de: "Cao lầu (Nudelgericht aus Hội An)", pos: "N", emoji: "🍜", ex: { vi: "Cao lầu là món ăn Hội An.", de: "Cao lầu ist ein Gericht aus Hội An." } },
        { vi: "mì Quảng", de: "Mì Quảng (Nudeln nach Quảng-Nam-Art)", pos: "N", emoji: "🍜", ex: { vi: "Mì Quảng rất ngon và rẻ.", de: "Mì Quảng ist sehr lecker und günstig." } }
      ],
      grammar: [
        {
          id: "g-k06-handeln",
          title: "Handeln: bớt, giảm giá, … được không?",
          term: "Verhandlungsformeln; Potentialis in der Rückfrage",
          pattern: "Preis + được không?  ·  (Anrede) + bớt + (Menge) + đi",
          text: "Auf Märkten in Vietnam wird gehandelt – in Geschäften mit festen Preisschildern (`giá cố định`) dagegen nicht. Die wichtigsten Bausteine:\n\n- `Bao nhiêu tiền?` „Wie viel kostet es?“ (K03) – mit Demonstrativ: `Cái này bao nhiêu?`\n- `Đắt quá!` „Zu teuer!“ – der Klassiker, mit exklamativem `quá` (K05).\n- `bớt` „nachlassen“: `Chị bớt một chút đi!` „Gehen Sie ein bisschen runter!“ Achtung: `bớt` + Betrag heißt „um diesen Betrag senken“: `bớt năm mươi` = „50.000 nachlassen“, nicht „für 50.000“.\n- **Preis + `được không?`** ist das Gegenangebot: `Một trăm được không?` „Geht hunderttausend?“ Hier kehrt das **Potentialis-`được`** aus K05 wieder: „Ist das möglich?“ Antworten: `Được.` „Geht.“ / `Không được.` „Geht nicht.“\n- `giảm giá` „Rabatt geben“ ist eher Laden- und Schildsprache.\n\nHöflich handelt man mit Lächeln und korrekter Anrede; Verkäuferinnen nennen Kunden oft schmeichelnd `em` oder `anh/chị`. Faustregel für Touristen: Das erste Angebot liegt oft deutlich über dem üblichen Preis.",
          examples: [
            { vi: "Cái này bao nhiêu tiền?", de: "Wie viel kostet das hier?", gloss: "CL | dies | wie viel | Geld" },
            { vi: "Đắt quá! Một trăm được không?", de: "Zu teuer! Geht hunderttausend?", gloss: "teuer | so | hundert | können | nicht?" },
            { vi: "Chị bớt một chút đi!", de: "Gehen Sie ein bisschen runter!", gloss: "du | nachlassen | ein | bisschen | PART" },
            { vi: "Không được.", de: "Geht nicht.", gloss: "nicht | können" }
          ],
          contrast: "In Deutschland ist Handeln außerhalb von Flohmärkten unüblich und gilt schnell als unhöflich. In Vietnam gehört es auf dem Markt zum Gespräch – wer gar nicht handelt, zahlt meist einen Touristenpreis."
        },
        {
          id: "g-k06-partikeln",
          title: "Satzendpartikeln nhé, đi, thôi",
          term: "Satzendpartikel (pragmatische Modalpartikel)",
          pattern: "Satz + nhé / đi / thôi",
          text: "Satzendpartikeln verändern nicht den Inhalt, sondern die **Sprechhandlung**. Drei davon brauchst du beim Handeln:\n\n- `nhé` (Süd `nha`): **Vorschlag mit Einladung zur Zustimmung**, „…, ja? / …, okay?“ – `Một trăm hai mươi nhé.` „Hundertzwanzig, okay?“\n- `đi`: **drängende Aufforderung**, „doch!, los!, mach schon!“ – `Chị bớt đi!` „Nun gehen Sie doch runter!“, `Anh mua đi!` „Kauf doch!“ Gegenüber Älteren mit `ạ` abmildern (`Cô bớt đi ạ.`) oder lieber `… được không ạ?` benutzen.\n- `thôi`: **Begrenzung** „nur, bloß“ – `Năm mươi nghìn thôi.` „Nur 50.000.“ Satzinitial bedeutet `Thôi,` „Schon gut, lass mal / genug“: `Thôi, được.` „Na gut, geht klar.“\n\nAlle drei stehen **satzfinal** (bzw. `thôi` auch als Einleitung) und tragen keine eigene Betonung. Das `đi` am Satzende ist nicht das Bewegungsverb „gehen“ (K07) – die Position entscheidet.",
          table: {
            head: ["Partikel", "Funktion", "Beispiel", "Deutsch"],
            rows: [
              ["nhé", "Vorschlag, Zustimmung einholen", "Một trăm nhé.", "Hundert, okay?"],
              ["đi", "drängende Aufforderung", "Chị bớt đi!", "Gehen Sie doch runter!"],
              ["thôi", "nur, bloß", "Năm mươi thôi.", "Nur fünfzig."],
              ["Thôi, …", "genug, schon gut", "Thôi, được.", "Na gut, geht klar."]
            ]
          },
          examples: [
            { vi: "Anh lấy cái này đi!", de: "Nimm doch dieses!", gloss: "du | nehmen | CL | dies | PART(Aufforderung)" },
            { vi: "Một trăm hai mươi nhé.", de: "Hundertzwanzig, okay?", gloss: "hundert | zwei | zehn | PART(Vorschlag)" },
            { vi: "Năm mươi nghìn thôi.", de: "Nur fünfzigtausend.", gloss: "fünf | zehn | tausend | nur" },
            { vi: "Thôi, được.", de: "Na gut, einverstanden.", gloss: "genug | können" }
          ],
          contrast: "Das Deutsche hat ähnliche Modalpartikeln im Mittelfeld („Kauf *doch*!“, „Nimm *halt* das!“). Im Vietnamesischen stehen sie am Satzende – wie ein angehängtes „…, ja?“."
        },
        {
          id: "g-k06-preis",
          title: "Preise in Marktsprache",
          term: "Verkürzte Zahlausdrücke (Ellipse von nghìn)",
          pattern: "năm mươi (= 50.000)  ·  trăm rưỡi (= 150.000)  ·  triệu hai (= 1.200.000)",
          text: "Da es im Alltag kaum Beträge unter 1.000 Đồng gibt, lässt man auf dem Markt `nghìn` (Süd `ngàn`) und `đồng` meist weg: `Năm mươi.` bedeutet „50.000 Đồng“, `Hai trăm.` „200.000 Đồng“.\n\nAußerdem verkürzt man runde Folgezahlen nach `trăm` und `triệu`: Die nächstkleinere Stelle wird ohne `mươi` bzw. `trăm` angehängt.\n\n- `trăm hai` = `một trăm hai mươi` (nghìn) = 120.000\n- `trăm rưỡi` = 150.000 (`rưỡi` „und eine Hälfte“, K03)\n- `hai trăm tám` = 280.000\n- `triệu hai` = 1.200.000; `triệu rưỡi` = 1.500.000\n\nIn Schrift und SMS schreibt man oft `k` für tausend: `50k`, `120k`. Im Norden hört man umgangssprachlich auch `lít` für 100.000 (`hai lít` = 200.000) und `củ` für eine Million – das solltest du verstehen, aber nicht unbedingt selbst benutzen.",
          table: {
            head: ["Marktsprache", "vollständig", "Betrag"],
            rows: [
              ["năm mươi", "năm mươi nghìn đồng", "50.000 ₫"],
              ["trăm hai", "một trăm hai mươi nghìn", "120.000 ₫"],
              ["trăm rưỡi", "một trăm năm mươi nghìn", "150.000 ₫"],
              ["triệu hai", "một triệu hai trăm nghìn", "1.200.000 ₫"],
              ["triệu rưỡi", "một triệu năm trăm nghìn", "1.500.000 ₫"]
            ]
          },
          examples: [
            { vi: "Cái nón lá này trăm rưỡi.", de: "Dieser Nón lá kostet 150.000.", gloss: "CL | Nón lá | dies | hundert | halb" },
            { vi: "Trăm hai được không?", de: "Geht 120.000?", gloss: "hundert | zwei | können | nicht?" },
            { vi: "Áo dài này triệu rưỡi.", de: "Dieses Áo dài kostet 1,5 Millionen.", gloss: "Áo dài | dies | Million | halb" }
          ],
          contrast: "Auch im Deutschen kürzt man („Das macht zwölf fuffzig“). Im Vietnamesischen ist die Auslassung von `nghìn` aber so normal, dass ein vollständiger Betrag fast förmlich wirkt. Beachte: Ein Preis braucht kein Verb – `Cái này trăm rưỡi.` ist ein vollständiger Satz.",
          south: "Im Süden `ngàn` statt `nghìn`; umgangssprachlich `xị` für 100.000."
        }
      ],
      dialogue: {
        setting: "Auf dem Markt von Hội An. Jonas möchte einen Nón lá kaufen. Die Händlerin Cô Hoa (55) ist im Alter seiner Eltern; er nennt sie cô und sich selbst cháu.",
        lines: [
          { who: "Jonas", vi: "Cô ơi, cái nón lá này bao nhiêu tiền ạ?", de: "Entschuldigung, wie viel kostet dieser Nón lá?" },
          { who: "Cô Hoa", vi: "Trăm rưỡi cháu ạ.", de: "Hundertfünfzigtausend, mein Junge." },
          { who: "Jonas", vi: "Đắt quá cô ơi! Một trăm được không ạ?", de: "Das ist zu teuer! Geht hunderttausend?" },
          { who: "Cô Hoa", vi: "Không được. Trăm hai nhé.", de: "Geht nicht. Hundertzwanzig, okay?" },
          { who: "Jonas", vi: "Trăm mốt được không cô?", de: "Geht hundertzehn?" },
          { who: "Cô Hoa", vi: "Thôi, được. Cháu lấy đi!", de: "Na gut, geht klar. Nimm ihn!" },
          { who: "Linh", vi: "Anh mặc cả giỏi quá!", de: "Du handelst aber gut!" },
          { who: "Jonas", vi: "Cô ơi, cháu lấy hai cái nhé.", de: "Dann nehme ich zwei, ja?" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Đắt quá! Chị ___ đi.", de: "Zu teuer! Gehen Sie doch runter.", options: ["bớt", "bán", "lấy"], answer: "bớt", explain: "bớt = (Preis) nachlassen; bán = verkaufen, lấy = nehmen." },
        { type: "gap", vi: "Năm mươi ___?", de: "Geht fünfzigtausend?", options: ["được không", "thôi", "hay"], answer: "được không", explain: "Gegenangebot: Preis + được không? („Ist das möglich?“)." },
        { type: "gap", vi: "Năm mươi nghìn ___.", de: "Nur fünfzigtausend.", options: ["thôi", "đi", "nhé"], answer: "thôi", explain: "thôi am Satzende = „nur, bloß“." },
        { type: "gap", vi: "Ngon lắm, anh ăn ___!", de: "Sehr lecker, iss doch!", options: ["đi", "thôi", "không"], answer: "đi", explain: "đi am Satzende drückt eine drängende Aufforderung aus." },
        { type: "build", vi: "Đắt quá, chị bớt đi!", de: "Zu teuer, gehen Sie doch runter!", extra: ["thôi", "rẻ"] },
        { type: "build", vi: "Hai trăm nghìn được không?", de: "Geht zweihunderttausend?", extra: ["thôi", "đi"] },
        { type: "build", vi: "Em lấy cái nón_lá này.", de: "Ich nehme diesen Nón lá.", extra: ["bán", "nào"] },
        { type: "translate", de: "Zu teuer!", answers: ["Đắt quá!", "Quá đắt!", "Đắt lắm!"] },
        { type: "translate", de: "Geht hunderttausend?", answers: ["Một trăm được không?", "Một trăm nghìn được không?", "Một trăm nghìn đồng được không?", "Trăm nghìn được không?"] },
        { type: "mc", q: "Die Händlerin sagt „Năm mươi.“ Was meint sie?", options: ["50.000 Đồng", "50 Đồng", "5.000 Đồng"], answer: 0, explain: "Auf dem Markt fällt nghìn weg: năm mươi = 50.000 Đồng." },
        { type: "mc", q: "Welche Partikel drückt eine drängende Aufforderung aus?", options: ["đi", "thôi", "ạ"], answer: 0, explain: "đi = „doch!, los!“; thôi = „nur/genug“, ạ = Respekt." },
        { type: "mc", q: "Was bedeutet „trăm rưỡi“ auf dem Markt?", options: ["150.000 Đồng", "100.500 Đồng", "1.500 Đồng"], answer: 0, explain: "trăm rưỡi = (một) trăm + rưỡi (halb) = 150, nghìn ergänzt man im Kopf." },
        { type: "mc", q: "Jonas sagt „Chị bớt năm mươi được không?“ Was schlägt er vor?", options: ["50.000 weniger als der genannte Preis", "einen Preis von 50.000", "fünfzig Stück zu kaufen"], answer: 0, explain: "bớt + Betrag = um diesen Betrag nachlassen." },
        { type: "listen", vi: "Trăm rưỡi thôi, rẻ lắm!", de: "Nur hundertfünfzigtausend, sehr günstig!" },
        { type: "speak", vi: "Đắt quá! Chị bớt một chút đi!", de: "Zu teuer! Gehen Sie ein bisschen runter!" },
        { type: "pairs", pairs: [["đắt", "teuer"], ["rẻ", "billig"], ["bớt", "nachlassen"], ["chợ", "Markt"], ["bán", "verkaufen"], ["mặc cả", "feilschen"]] }
      ]
    }
  ],

  // ───────────────────────────── Boss ─────────────────────────────
  boss: {
    title: "Seidenladen in Hội An",
    npc: "Chị Thu",
    role: "Inhaberin eines Seidenladens (ca. 38)",
    setting: "Ein Seidenladen in der Altstadt von Hội An, an der Decke hängen bunte Laternen. Chị Thu ist etwas älter als Jonas: Er nennt sie chị und sich selbst em. Handle um ein Áo dài für Linh und eine Laterne.",
    turns: [
      {
        npc: { vi: "Chào em! Em muốn mua gì?", de: "Hallo! Was möchtest du kaufen?" },
        prompt: "Sag, dass du ein rotes Áo dài kaufen möchtest.",
        choices: [
          { vi: "Dạ, em muốn mua một cái áo dài đỏ.", ok: true, fb: "Richtig – das Attribut đỏ steht nach dem Nomen, em gegenüber der älteren chị." },
          { vi: "Dạ, em muốn mua một cái đỏ áo dài.", ok: false, fb: "Das Attribut folgt dem Nomen: áo dài đỏ, nicht *đỏ áo dài." },
          { vi: "Tao muốn mua một cái áo dài đỏ.", ok: false, fb: "tao ist grob – nur unter engen Freunden oder im Streit. Gegenüber chị bist du em." }
        ]
      },
      {
        npc: { vi: "Em thích cái nào? Cái này hay cái kia?", de: "Welches gefällt dir? Dieses hier oder das dort drüben?" },
        prompt: "Sag, dass dir das dort drüben gefällt.",
        choices: [
          { vi: "Dạ, em thích cái kia.", ok: true, fb: "Genau – CL + kia: „das dort drüben“." },
          { vi: "Dạ, em thích kia cái.", ok: false, fb: "Das Demonstrativ steht am Ende der Nominalphrase: cái kia." },
          { vi: "Dạ, em thích cái đây.", ok: false, fb: "đây steht nur allein (Đây là …). Attributiv: cái này – und gemeint war ohnehin das entfernte: cái kia." }
        ]
      },
      {
        npc: { vi: "Cái kia là lụa Hội An, đẹp nhất. Hai triệu.", de: "Das ist Hội-An-Seide, die schönste. Zwei Millionen." },
        prompt: "Sag, dass das zu teuer ist.",
        choices: [
          { vi: "Ôi, đắt quá chị ơi!", ok: true, fb: "Richtig – exklamatives quá, freundlich mit chị ơi." },
          { vi: "Ôi, là đắt quá chị ơi!", ok: false, fb: "đắt ist ein Stativverb – kein là davor." },
          { vi: "Ôi, rẻ quá chị ơi!", ok: false, fb: "rẻ heißt „billig“. Damit hast du gerade jede Verhandlungsposition verschenkt!" }
        ]
      },
      {
        npc: { vi: "Lụa này mềm lắm em ạ. Mềm hơn lụa Trung Quốc.", de: "Diese Seide ist sehr weich. Weicher als chinesische Seide." },
        prompt: "Mache ein Gegenangebot: 1,5 Millionen.",
        choices: [
          { vi: "Triệu rưỡi được không chị?", ok: true, fb: "Perfekt – Marktsprache triệu rưỡi und das Gegenangebot mit … được không?" },
          { vi: "Chị bớt triệu rưỡi được không?", ok: false, fb: "bớt + Betrag heißt „um diesen Betrag senken“ – du verlangst 1,5 Millionen Nachlass, also einen Preis von 500.000!" },
          { vi: "Triệu rưỡi hay không chị?", ok: false, fb: "hay bildet Alternativfragen zwischen zwei Möglichkeiten. Für „Geht das?“ sagt man … được không?" }
        ]
      },
      {
        npc: { vi: "Thôi, triệu tám nhé.", de: "Na gut, 1,8 Millionen, okay?" },
        prompt: "Dränge freundlich auf noch etwas Nachlass.",
        choices: [
          { vi: "Chị bớt chút nữa đi!", ok: true, fb: "Gut – bớt + nữa (noch mehr) und die drängende Satzendpartikel đi." },
          { vi: "Đi bớt chút nữa chị!", ok: false, fb: "Als Partikel steht đi am Satzende. Am Satzanfang wird es als Verb „gehen“ verstanden." },
          { vi: "Cô bớt chút nữa đi!", ok: false, fb: "Plötzlich cô? Damit machst du die 38-Jährige zur Frau im Alter deiner Eltern – nicht charmant. Bleib bei chị." }
        ]
      },
      {
        npc: { vi: "Triệu sáu thôi. Giá rẻ nhất!", de: "Nur 1,6 Millionen. Der niedrigste Preis!" },
        prompt: "Nimm an und kaufe zusätzlich eine Laterne.",
        choices: [
          { vi: "Dạ, em lấy cái áo dài và một cái đèn lồng nhé.", ok: true, fb: "Sehr gut – lấy „nehmen“, cái für die Laterne, freundliches nhé." },
          { vi: "Dạ, em lấy cái áo dài và một con đèn lồng nhé.", ok: false, fb: "con ist der Klassifikator für Tiere. Laternen sind Gegenstände: cái oder chiếc." },
          { vi: "Dạ, em lấy cái áo dài hoặc một cái đèn lồng nhé.", ok: false, fb: "hoặc heißt „oder“ – du willst aber beides kaufen: và." }
        ]
      },
      {
        npc: { vi: "Đèn lồng màu gì em? Đỏ, vàng hay xanh?", de: "Welche Farbe soll die Laterne haben? Rot, gelb oder blau?" },
        prompt: "Wähle die gelbe und sag, dass sie die schönste ist.",
        choices: [
          { vi: "Dạ, cái vàng. Cái vàng đẹp nhất.", ok: true, fb: "Richtig – cái + Farbe als Pronomen, Superlativ mit nachgestelltem nhất." },
          { vi: "Dạ, cái vàng. Cái vàng nhất đẹp.", ok: false, fb: "nhất steht nach dem Adjektiv: đẹp nhất." },
          { vi: "Dạ, cái vàng. Cái vàng đẹp hơn nhất.", ok: false, fb: "hơn (Komparativ) und nhất (Superlativ) schließen sich aus. Superlativ: đẹp nhất." }
        ]
      }
    ],
    win: { vi: "Em mặc cả giỏi quá! Cảm ơn em nhé.", de: "Du handelst aber gut! Danke dir." }
  }
});
