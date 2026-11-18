VN.addChapter({
  id: "k08",
  place: "Đà Lạt",
  region: "Zentrales Hochland",
  title: "Tagesablauf & Aspekt",
  intro: "Đà Lạt liegt auf 1.500 Metern im Zentralen Hochland: Kiefernwälder, Morgennebel, Erdbeeren und Kaffee. Im kühlen Klima sprichst du über deinen Tagesablauf und lernst das Herzstück der vietnamesischen Verbgrammatik kennen – Aspektmarker statt Tempus: đã, đang, sẽ, sắp, rồi, chưa, vừa/mới. Dazu kommen Wetter, Zeitsätze und Dauerangaben.",
  lessons: [
    // ───────────────────────────── k08l1 ─────────────────────────────
    {
      id: "k08l1",
      title: "Tagesroutine & Frequenz",
      goal: "Du kannst deinen Tagesablauf beschreiben und sagen, wie oft du etwas tust.",
      vocab: [
        { vi: "dậy", de: "aufstehen, aufwachen", pos: "V", emoji: "⏰", ex: { vi: "Jonas dậy lúc bảy giờ.", de: "Jonas steht um sieben Uhr auf." } },
        { vi: "đánh răng", de: "Zähne putzen", pos: "V", emoji: "🪥", note: "wörtl. ‚Zähne schlagen/reiben‘", ex: { vi: "Tôi đánh răng, rồi ăn sáng.", de: "Ich putze die Zähne und frühstücke dann." } },
        { vi: "tắm", de: "duschen, baden", pos: "V", emoji: "🚿", ex: { vi: "Buổi tối Linh tắm.", de: "Abends duscht Linh." } },
        { vi: "ăn sáng", de: "frühstücken", pos: "V", emoji: "🍳", ex: { vi: "Chúng tôi ăn sáng ở khách sạn.", de: "Wir frühstücken im Hotel." } },
        { vi: "ăn tối", de: "zu Abend essen", pos: "V", emoji: "🍲", ex: { vi: "Bảy giờ tối, chúng tôi ăn tối.", de: "Um sieben Uhr abends essen wir zu Abend." } },
        { vi: "đi làm", de: "zur Arbeit gehen, arbeiten gehen", pos: "V", emoji: "💼", note: "Serialverb: đi + làm", ex: { vi: "Ở Berlin, Jonas đi làm bằng xe đạp.", de: "In Berlin fährt Jonas mit dem Fahrrad zur Arbeit." } },
        { vi: "nghỉ", de: "sich ausruhen, Pause/frei machen", pos: "V", emoji: "🛋️", ex: { vi: "Buổi trưa chúng tôi nghỉ.", de: "Mittags ruhen wir uns aus." } },
        { vi: "ngủ", de: "schlafen", pos: "V", emoji: "😴", note: "đi ngủ = schlafen gehen", ex: { vi: "Linh đi ngủ lúc mười một giờ.", de: "Linh geht um elf Uhr schlafen." } },
        { vi: "lúc", de: "um (Uhrzeit), Zeitpunkt", pos: "N", note: "lúc + Uhrzeit", ex: { vi: "Tôi ăn trưa lúc mười hai giờ.", de: "Ich esse um zwölf Uhr zu Mittag." } },
        { vi: "mỗi ngày", de: "jeden Tag", pos: "N", note: "mỗi = jede(r); auch hằng ngày", ex: { vi: "Mỗi ngày Linh uống cà phê.", de: "Linh trinkt jeden Tag Kaffee." } },
        { vi: "luôn luôn", de: "immer", pos: "Adv", note: "auch kurz: luôn", ex: { vi: "Jonas luôn luôn uống trà đá.", de: "Jonas trinkt immer Eistee." } },
        { vi: "thường", de: "gewöhnlich, meistens", pos: "Adv", note: "auch thường thường", ex: { vi: "Tôi thường ăn sáng ở nhà.", de: "Ich frühstücke gewöhnlich zu Hause." } },
        { vi: "hay", de: "oft (umgangssprachlich)", pos: "Adv", note: "Homonym: hay = ‚oder‘ (K05), ‚gut, interessant‘", ex: { vi: "Linh hay ăn bánh mì.", de: "Linh isst oft Bánh mì." } },
        { vi: "thỉnh thoảng", de: "manchmal, ab und zu", pos: "Adv", ex: { vi: "Thỉnh thoảng chúng tôi ăn phở.", de: "Ab und zu essen wir Phở." } },
        { vi: "ít khi", de: "selten", pos: "Adv", note: "wörtl. ‚wenige Male‘", ex: { vi: "Jonas ít khi uống bia.", de: "Jonas trinkt selten Bier." } },
        { vi: "không bao giờ", de: "nie", pos: "Adv", emoji: "🚫", ex: { vi: "Linh không bao giờ ăn cay.", de: "Linh isst nie scharf." } }
      ],
      grammar: [
        {
          id: "g-k08-tagesablauf",
          title: "Tagesablauf: Uhrzeit, Verb-Objekt-Verbindungen",
          term: "Zeitangabe als Topik / lúc-Phrase; Verb-Objekt-Komposita",
          pattern: "(Zeit,) S + V (+ O) (+ lúc + Uhrzeit)",
          text: "Für den Tagesablauf brauchst du vor allem zwei Muster:\n\n- **Zeitangabe als Topik** am Satzanfang (K03): `Bảy giờ sáng, tôi dậy.` – „Um sieben Uhr morgens stehe ich auf.“\n- **lúc + Uhrzeit** nach der Verbalphrase: `Tôi dậy lúc bảy giờ.` `lúc` ist ein Nomen („Zeitpunkt, Moment“) und funktioniert wie eine Präposition.\n\nBeide Varianten sind gleich gut; die Topik-Variante betont den Zeitrahmen. Gefragt wird mit `mấy giờ`: `Anh dậy lúc mấy giờ?`\n\nViele Alltagsverben sind **Verb-Objekt-Verbindungen**, die wie ein Wort funktionieren: `ăn sáng` (essen + Morgen = frühstücken), `ăn tối`, `đánh răng` (schlagen/reiben + Zahn). `đi làm` und `đi ngủ` sind kleine Serialverbkonstruktionen (K07l3): „gehen + arbeiten“, „gehen + schlafen“.\n\nHandlungsfolgen verbindest du mit `rồi` „dann“ (K07): `Tôi đánh răng, rồi tắm.` Das Subjekt muss nicht wiederholt werden.\n\nDa vietnamesische Verben nicht konjugiert werden, ist ein Satz wie `Jonas dậy lúc bảy giờ` zeitlich unbestimmt: gewohnheitsmäßig, heute, gestern? Der Kontext entscheidet – mehr dazu in K08l2.",
          examples: [
            { vi: "Bảy giờ sáng, tôi dậy.", de: "Um sieben Uhr morgens stehe ich auf.", gloss: "sieben | Uhr | Morgen | ich | aufstehen" },
            { vi: "Tôi dậy lúc bảy giờ.", de: "Ich stehe um sieben Uhr auf.", gloss: "ich | aufstehen | Zeitpunkt | sieben | Uhr" },
            { vi: "Anh ăn sáng lúc mấy giờ?", de: "Um wie viel Uhr frühstückst du?", gloss: "du | frühstücken | Zeitpunkt | wie viel | Uhr" },
            { vi: "Tôi đánh răng, rồi tắm.", de: "Ich putze die Zähne und dusche dann.", gloss: "ich | Zähne putzen | dann | duschen" }
          ],
          contrast: "Deutsch hat trennbare Verben mit Satzklammer („Ich stehe um sieben auf“). Vietnamesisch kennt keine Satzklammer: `dậy` bleibt ungeteilt, die Zeitangabe steht am Anfang oder Ende."
        },
        {
          id: "g-k08-frequenz",
          title: "Frequenzadverbien",
          term: "Frequenzadverb (präverbal)",
          pattern: "S + Frequenzadverb + V (+ O)",
          text: "Wie oft etwas geschieht, drücken **Frequenzadverbien** aus. Sie stehen **zwischen Subjekt und Verb**: `Tôi thường dậy lúc sáu giờ.`\n\nDie Skala von „immer“ bis „nie“:\n\n- `luôn luôn` / `luôn` – immer\n- `thường` / `thường thường` – gewöhnlich, meistens\n- `hay` – oft (umgangssprachlich, sehr häufig)\n- `thỉnh thoảng` – manchmal\n- `ít khi` – selten\n- `không bao giờ` – nie\n\n`thỉnh thoảng` darf auch satzinitial stehen: `Thỉnh thoảng chúng tôi ăn phở.` `không bao giờ` kann zur Betonung ebenfalls vorne stehen, dann aber mit einem Fokus-Effekt, den du erst später brauchst – bleib bei der präverbalen Stellung.\n\nIn **Ja/Nein-Fragen** steht das Adverb innerhalb des Rahmens `có … không` (K02): `Anh có hay uống cà phê không?` – „Trinkst du oft Kaffee?“\n\nVorsicht mit `luôn` **nach** dem Verb: `Tôi ăn luôn.` bedeutet „Ich esse gleich/sofort“ – eine ganz andere Lesart. Und `hay` hat drei Gesichter: vor dem Verb „oft“, zwischen Alternativen „oder“ (K05), als Prädikat „gut, interessant“ (`Phim này hay.`).\n\n`mỗi ngày` „jeden Tag“ ist dagegen eine Nominalphrase und steht am Satzanfang oder -ende: `Mỗi ngày tôi uống cà phê.`",
          table: { head: ["Vietnamesisch", "Deutsch", "Stellung"], rows: [["luôn luôn", "immer", "vor V"], ["thường", "gewöhnlich", "vor V"], ["hay", "oft", "vor V"], ["thỉnh thoảng", "manchmal", "vor V oder satzinitial"], ["ít khi", "selten", "vor V"], ["không bao giờ", "nie", "vor V"], ["mỗi ngày", "jeden Tag", "satzinitial/-final"]] },
          examples: [
            { vi: "Tôi thường dậy lúc sáu giờ.", de: "Ich stehe gewöhnlich um sechs auf.", gloss: "ich | gewöhnlich | aufstehen | um | sechs | Uhr" },
            { vi: "Linh không bao giờ uống bia.", de: "Linh trinkt nie Bier.", gloss: "Linh | nie | trinken | Bier" },
            { vi: "Anh có hay uống cà phê không?", de: "Trinkst du oft Kaffee?", gloss: "du | FRAGE | oft | trinken | Kaffee | FRAGE" },
            { vi: "Thỉnh thoảng chúng tôi ăn phở.", de: "Manchmal essen wir Phở.", gloss: "manchmal | wir | essen | Phở" }
          ],
          contrast: "Im deutschen Hauptsatz steht das Adverb nach dem finiten Verb (V2: „Ich trinke oft Kaffee“). Im Vietnamesischen steht es vor dem Verb: „Ich oft trinke Kaffee“ – `Tôi hay uống cà phê`."
        }
      ],
      dialogue: {
        setting: "Abends im Homestay in Đà Lạt. Jonas und Linh planen den nächsten Morgen.",
        lines: [
          { who: "Linh", vi: "Ngày mai anh dậy lúc mấy giờ?", de: "Um wie viel Uhr stehst du morgen auf?" },
          { who: "Jonas", vi: "Anh thường dậy lúc bảy giờ.", de: "Ich stehe normalerweise um sieben auf." },
          { who: "Linh", vi: "Ở Đà Lạt, chúng ta dậy lúc năm giờ rưỡi nhé!", de: "In Đà Lạt stehen wir um halb sechs auf!" },
          { who: "Jonas", vi: "Năm giờ rưỡi? Anh không bao giờ dậy lúc năm giờ rưỡi!", de: "Halb sechs? Ich stehe nie um halb sechs auf!" },
          { who: "Linh", vi: "Buổi sáng Đà Lạt đẹp lắm. Có sương mù.", de: "Morgens ist Đà Lạt wunderschön. Es gibt Nebel." },
          { who: "Jonas", vi: "Em thường dậy lúc mấy giờ?", de: "Und wann stehst du normalerweise auf?" },
          { who: "Linh", vi: "Em hay dậy lúc sáu giờ, đánh răng, rồi ăn sáng.", de: "Ich stehe meist um sechs auf, putze die Zähne und frühstücke dann." },
          { who: "Jonas", vi: "Anh thỉnh thoảng không ăn sáng.", de: "Ich frühstücke manchmal nicht." },
          { who: "Linh", vi: "Người Việt luôn luôn ăn sáng!", de: "Vietnamesen frühstücken immer!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Tôi ___ uống cà phê buổi sáng.", de: "Ich trinke morgens gewöhnlich Kaffee.", options: ["thường", "lúc", "mỗi"], answer: "thường", explain: "Frequenzadverb thường ‚gewöhnlich‘ steht vor dem Verb." },
        { type: "gap", vi: "Jonas dậy ___ bảy giờ.", de: "Jonas steht um sieben Uhr auf.", options: ["lúc", "ở", "bằng"], answer: "lúc", explain: "Uhrzeitpunkt nach dem Verb: lúc + Uhrzeit." },
        { type: "gap", vi: "Linh ___ uống bia.", de: "Linh trinkt nie Bier.", options: ["không bao giờ", "luôn luôn", "hay"], answer: "không bao giờ", explain: "„nie“ = không bao giờ, vor dem Verb." },
        { type: "gap", vi: "Chúng tôi ___ đi Đà Lạt.", de: "Wir fahren selten nach Đà Lạt.", options: ["ít khi", "hay", "luôn luôn"], answer: "ít khi", explain: "ít khi = selten (wörtlich ‚wenige Male‘)." },
        { type: "build", vi: "Tôi thường dậy lúc sáu giờ.", de: "Ich stehe gewöhnlich um sechs Uhr auf.", extra: ["ở", "bằng"] },
        { type: "build", vi: "Linh không bao_giờ uống bia.", de: "Linh trinkt nie Bier.", extra: ["có", "đừng"] },
        { type: "build", vi: "Thỉnh_thoảng chúng tôi ăn sáng ở quán.", alts: ["Chúng tôi thỉnh_thoảng ăn sáng ở quán."], de: "Manchmal frühstücken wir in einem Lokal.", extra: ["lúc", "là"] },
        { type: "translate", de: "Ich stehe immer um sechs Uhr auf.", answers: ["Tôi luôn luôn dậy lúc sáu giờ.", "Tôi luôn dậy lúc sáu giờ.", "Sáu giờ tôi luôn luôn dậy.", "Tôi luôn luôn dậy lúc 6 giờ.", "Tôi luôn dậy lúc 6 giờ."] },
        { type: "translate", de: "Trinkst du (Anrede anh) oft Kaffee?", answers: ["Anh có hay uống cà phê không?", "Anh hay uống cà phê không?", "Anh có thường uống cà phê không?", "Anh thường uống cà phê không?"] },
        { type: "mc", q: "Wo steht ein Frequenzadverb wie thường?", options: ["zwischen Subjekt und Verb", "direkt nach dem Verb", "immer am Satzende"], answer: 0, explain: "S + Frequenzadverb + V: Tôi thường dậy sớm." },
        { type: "mc", q: "Welcher Satz ist korrekt?", options: ["Tôi ăn thường sáng ở nhà.", "Tôi thường ăn sáng ở nhà.", "Tôi ăn sáng ở nhà thường."], answer: 1, explain: "Das Adverb steht vor der ganzen Verbalphrase ăn sáng." },
        { type: "mc", q: "Was bedeutet „hay“ in diesem Satz?", vi: "Anh hay uống cà phê.", options: ["oft", "oder", "interessant"], answer: 0, explain: "Vor dem Verb ist hay ein Frequenzadverb: ‚oft‘." },
        { type: "listen", vi: "Buổi sáng tôi đánh răng, rồi tắm.", de: "Morgens putze ich die Zähne und dusche dann." },
        { type: "speak", vi: "Tôi thường đi ngủ lúc mười một giờ.", de: "Ich gehe gewöhnlich um elf Uhr schlafen." },
        { type: "pairs", pairs: [["luôn luôn", "immer"], ["thường", "gewöhnlich"], ["hay", "oft"], ["thỉnh thoảng", "manchmal"], ["ít khi", "selten"], ["không bao giờ", "nie"]] }
      ]
    },

    // ───────────────────────────── k08l2 ─────────────────────────────
    {
      id: "k08l2",
      title: "Aspektmarker: đã, đang, sẽ, sắp",
      goal: "Du kannst Handlungen als abgeschlossen, laufend, zukünftig oder unmittelbar bevorstehend markieren.",
      vocab: [
        { vi: "đã", de: "(Aspektmarker: Vollzug, Vergangenheit)", pos: "Part", ex: { vi: "Linh đã đi chợ.", de: "Linh war auf dem Markt." } },
        { vi: "đang", de: "(Aspektmarker: Verlauf, gerade)", pos: "Part", ex: { vi: "Jonas đang ăn sáng.", de: "Jonas frühstückt gerade." } },
        { vi: "sẽ", de: "(Aspektmarker: Zukunft, werden)", pos: "Part", ex: { vi: "Tuần sau chúng tôi sẽ đi Nha Trang.", de: "Nächste Woche fahren wir nach Nha Trang." } },
        { vi: "sắp", de: "(Aspektmarker: gleich, bald)", pos: "Part", note: "unmittelbar bevorstehend", ex: { vi: "Xe buýt sắp chạy.", de: "Der Bus fährt gleich ab." } },
        { vi: "bây giờ", de: "jetzt", pos: "N", south: "bây giờ (gespr. bi giờ)", ex: { vi: "Bây giờ là năm giờ.", de: "Jetzt ist es fünf Uhr." } },
        { vi: "sáng nay", de: "heute Morgen", pos: "N", ex: { vi: "Sáng nay hồ Xuân Hương đẹp lắm.", de: "Heute Morgen ist der Xuân-Hương-See wunderschön." } },
        { vi: "tối nay", de: "heute Abend", pos: "N", ex: { vi: "Tối nay chúng ta đi chợ đêm nhé.", de: "Heute Abend gehen wir auf den Nachtmarkt." } },
        { vi: "tuần trước", de: "letzte Woche", pos: "N", note: "trước = vorher (zeitlich)", ex: { vi: "Tuần trước chúng tôi ở Huế.", de: "Letzte Woche waren wir in Huế." } },
        { vi: "tuần sau", de: "nächste Woche", pos: "N", note: "sau = danach (zeitlich)", ex: { vi: "Tuần sau Linh về Berlin.", de: "Nächste Woche fliegt Linh zurück nach Berlin." } },
        { vi: "chụp ảnh", de: "fotografieren", pos: "V", emoji: "📷", south: "chụp hình", ex: { vi: "Jonas thích chụp ảnh.", de: "Jonas fotografiert gern." } },
        { vi: "thăm", de: "besuchen", pos: "V", ex: { vi: "Chúng tôi đi thăm bà ngoại.", de: "Wir besuchen Oma." } },
        { vi: "xem", de: "ansehen, anschauen", pos: "V", emoji: "👀", ex: { vi: "Linh xem bản đồ.", de: "Linh schaut auf die Karte." } },
        { vi: "đọc", de: "lesen", pos: "V", emoji: "📖", ex: { vi: "Jonas đọc sách.", de: "Jonas liest ein Buch." } },
        { vi: "hồ", de: "See", pos: "N", emoji: "🏞️", note: "hồ Xuân Hương im Zentrum von Đà Lạt", ex: { vi: "Hồ Xuân Hương đẹp quá!", de: "Der Xuân-Hương-See ist so schön!" } }
      ],
      grammar: [
        {
          id: "g-k08-aspekt",
          title: "Aspektmarker statt Tempus",
          term: "Aspektmarker (präverbal)",
          pattern: "S + đã / đang / sẽ / sắp + V",
          text: "Vietnamesische Verben werden nie konjugiert. Statt eines grammatischen Tempus gibt es **Aspektmarker** – kleine Wörter direkt vor dem Verb, die die Handlung zeitlich verorten oder ihre innere Struktur beschreiben:\n\n- `đã` – **Vollzug / Vergangenheit** (Anterior, oft perfektiv): Die Handlung liegt vor dem Bezugszeitpunkt. `Linh đã đi chợ.`\n- `đang` – **Progressiv**: Die Handlung ist im Verlauf. `Jonas đang chụp ảnh.`\n- `sẽ` – **Futur / Prospektiv**: Die Handlung liegt nach dem Bezugszeitpunkt. `Chúng tôi sẽ đi Nha Trang.`\n- `sắp` – **Proximativ**: Die Handlung steht unmittelbar bevor („gleich, bald“). `Xe buýt sắp chạy.`\n\nDie Marker stehen nach dem Subjekt (und nach einem Frequenzadverb) direkt vor dem Verb. Negiert wird Vergangenes im Alltag einfach mit `không`: `Hôm qua tôi không đi chợ.` – `đã không` ist möglich, aber markiert („hat es tatsächlich nicht getan“).\n\nMit Stativverben bekommt `đã` oft eine **Zustandswechsel**-Lesart: `Bà ấy đã già.` „Sie ist (inzwischen) alt geworden.“ `đang` mit Stativverb betont den momentanen Zustand: `Tôi đang mệt.` „Ich bin gerade müde.“",
          table: { head: ["Marker", "Fachbegriff", "Deutsch (ungefähr)", "Beispiel"], rows: [["đã", "Anterior / Perfektiv", "Präteritum/Perfekt", "Tôi đã ăn phở."], ["đang", "Progressiv", "gerade, ist am …", "Tôi đang ăn phở."], ["sẽ", "Futur / Prospektiv", "werden", "Tôi sẽ ăn phở."], ["sắp", "Proximativ", "gleich, bald", "Tôi sắp ăn phở."]] },
          examples: [
            { vi: "Jonas đang chụp ảnh hồ Xuân Hương.", de: "Jonas fotografiert gerade den Xuân-Hương-See.", gloss: "Jonas | PROG | fotografieren | See | Xuân Hương" },
            { vi: "Linh đã thăm chợ Đà Lạt.", de: "Linh hat den Markt von Đà Lạt besucht.", gloss: "Linh | ANT | besuchen | Markt | Đà Lạt" },
            { vi: "Chúng tôi sẽ đi thác Datanla.", de: "Wir werden zum Datanla-Wasserfall fahren.", gloss: "wir | FUT | gehen | Wasserfall | Datanla" },
            { vi: "Nhanh lên! Xe buýt sắp chạy.", de: "Schnell! Der Bus fährt gleich ab.", gloss: "schnell | hinauf | Bus | PROX | fahren" }
          ],
          contrast: "Deutsch hat obligatorisches Tempus am finiten Verb („ging“, „geht“, „wird gehen“), aber keinen grammatischen Progressiv („ist am Gehen“ ist umgangssprachlich). Vietnamesisch hat kein Tempus, dafür einen voll grammatikalisierten Progressiv (`đang`)."
        },
        {
          id: "g-k08-fakultativ",
          title: "Wann braucht man die Marker? Zeitadverbien",
          term: "Fakultativität der Aspektmarker",
          pattern: "Zeitadverb + S + (Marker) + V",
          text: "Die Aspektmarker sind **fakultativ**: Wenn der Kontext oder ein **Zeitadverb** die Zeit schon klarmacht, lässt man sie meist weg.\n\n- `Hôm qua tôi đi chợ.` – „Gestern ging ich auf den Markt.“ (kein `đã` nötig)\n- `Ngày mai chúng tôi đi Nha Trang.` – „Morgen fahren wir nach Nha Trang.“ (kein `sẽ` nötig)\n- `Bây giờ Linh làm gì?` – „Was macht Linh jetzt?“\n\nMarker setzt man, wenn **kein** Zeitadverb da ist (`Tôi đã ăn.` vs. `Tôi ăn.` „Ich esse“) oder wenn man den Aspekt hervorheben will (`Bây giờ tôi đang học.` „Ich bin gerade beim Lernen“).\n\nWichtig: Marker und Zeitadverb dürfen sich **nicht widersprechen**. *`Ngày mai tôi đã đi Huế.` ist ungrammatisch – `đã` verlangt Vorzeitigkeit, `ngày mai` Zukunft. Ebenso *`Hôm qua tôi sẽ đi.` Zulässig ist dagegen die Kombination mit gleicher Richtung: `Tuần sau chúng tôi sẽ đi Nha Trang.`\n\nZeitwörter stehen meist **satzinitial** als Topik (K03) oder ganz am Ende: `Chúng tôi đi Nha Trang tuần sau.` Die Wörter `trước` und `sau` kennst du schon als Lokalnomen (K07: „vor, hinter“) – zeitlich bedeuten sie „vorher, letzte“ und „danach, nächste“: `tuần trước`, `tuần sau`.",
          table: { head: ["Zeitadverb", "passender Marker", "unmöglich"], rows: [["hôm qua, tuần trước", "(đã)", "sẽ, sắp"], ["bây giờ", "(đang)", "–"], ["ngày mai, tuần sau, tối nay", "(sẽ)", "đã"]] },
          examples: [
            { vi: "Hôm qua tôi đi chợ.", de: "Gestern war ich auf dem Markt.", gloss: "gestern | ich | gehen | Markt" },
            { vi: "Tuần sau chúng tôi sẽ xuống Nha Trang.", de: "Nächste Woche fahren wir hinunter nach Nha Trang.", gloss: "Woche | nach | wir | FUT | hinunter | Nha Trang" },
            { vi: "Bây giờ Linh đang đọc sách.", de: "Linh liest gerade ein Buch.", gloss: "jetzt | Linh | PROG | lesen | Buch" },
            { vi: "Tuần trước chúng tôi ở Đà Nẵng.", de: "Letzte Woche waren wir in Đà Nẵng.", gloss: "Woche | vorher | wir | sich befinden | Đà Nẵng" }
          ],
          contrast: "Das Deutsche kennt das Phänomen ansatzweise: „Morgen fahre ich“ (Präsens statt Futur, weil „morgen“ die Zeit trägt). Vietnamesisch geht konsequent so vor – auch für die Vergangenheit, wo Deutsch immer Präteritum/Perfekt verlangt."
        }
      ],
      dialogue: {
        setting: "Nachmittags am Xuân-Hương-See. Linh ruft Jonas, der irgendwo am Ufer unterwegs ist.",
        lines: [
          { who: "Linh", vi: "Anh ơi, anh đang làm gì?", de: "Schatz, was machst du gerade?" },
          { who: "Jonas", vi: "Anh đang chụp ảnh hồ Xuân Hương.", de: "Ich fotografiere gerade den Xuân-Hương-See." },
          { who: "Linh", vi: "Đẹp không?", de: "Ist es schön?" },
          { who: "Jonas", vi: "Đẹp lắm! Sáng nay anh đã chụp nhiều ảnh lắm.", de: "Sehr schön! Heute Morgen habe ich schon richtig viele Fotos gemacht." },
          { who: "Linh", vi: "Tối nay chúng ta sẽ đi chợ đêm nhé.", de: "Heute Abend gehen wir auf den Nachtmarkt, ja?" },
          { who: "Jonas", vi: "Ừ. Tuần sau chúng ta đi đâu?", de: "Okay. Wohin fahren wir nächste Woche?" },
          { who: "Linh", vi: "Tuần sau chúng ta sẽ xuống Nha Trang.", de: "Nächste Woche fahren wir runter nach Nha Trang." },
          { who: "Linh", vi: "Bây giờ là năm giờ. Xe buýt sắp đến. Đi thôi anh!", de: "Jetzt ist es fünf. Der Bus kommt gleich. Los, gehen wir!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Bây giờ Jonas ___ chụp ảnh.", de: "Jonas fotografiert gerade.", options: ["đang", "đã", "sẽ"], answer: "đang", explain: "bây giờ + Verlauf → đang (Progressiv)." },
        { type: "gap", vi: "Tuần sau chúng tôi ___ đi Nha Trang.", de: "Nächste Woche fahren wir nach Nha Trang.", options: ["sẽ", "đã", "đang"], answer: "sẽ", explain: "Zukunft → sẽ (hier fakultativ). đã widerspräche tuần sau." },
        { type: "gap", vi: "Nhanh lên! Xe buýt ___ chạy.", de: "Schnell! Der Bus fährt gleich ab.", options: ["sắp", "đã", "không"], answer: "sắp", explain: "„gleich, unmittelbar bevorstehend“ → sắp." },
        { type: "gap", vi: "Hôm qua Linh ___ thăm bà ngoại.", de: "Gestern hat Linh ihre Oma besucht.", options: ["đã", "sẽ", "sắp"], answer: "đã", explain: "Vergangenheit/Vollzug → đã; mit hôm qua wäre es auch weglassbar, aber sẽ/sắp widersprechen." },
        { type: "build", vi: "Tối nay chúng ta sẽ đi chợ đêm.", de: "Heute Abend gehen wir auf den Nachtmarkt.", extra: ["đã", "đang"] },
        { type: "build", vi: "Jonas đang đọc sách.", de: "Jonas liest gerade ein Buch.", extra: ["sắp", "là"] },
        { type: "build", vi: "Sáng nay Linh đã đi chợ.", de: "Heute Morgen war Linh auf dem Markt.", extra: ["sẽ", "đang"] },
        { type: "translate", de: "Ich lerne gerade Vietnamesisch.", answers: ["Tôi đang học tiếng Việt.", "Bây giờ tôi đang học tiếng Việt.", "Bây giờ tôi học tiếng Việt."] },
        { type: "translate", de: "Morgen fahren wir nach Nha Trang.", answers: ["Ngày mai chúng tôi sẽ đi Nha Trang.", "Ngày mai chúng tôi đi Nha Trang.", "Ngày mai chúng ta sẽ đi Nha Trang.", "Ngày mai chúng ta đi Nha Trang.", "Ngày mai chúng tôi sẽ xuống Nha Trang.", "Ngày mai chúng tôi xuống Nha Trang.", "Ngày mai chúng ta sẽ xuống Nha Trang.", "Ngày mai chúng ta xuống Nha Trang.", "Chúng tôi sẽ đi Nha Trang ngày mai.", "Chúng tôi đi Nha Trang ngày mai.", "Chúng ta sẽ đi Nha Trang ngày mai.", "Chúng ta đi Nha Trang ngày mai."] },
        { type: "translate", de: "Gestern habe ich Oma besucht.", answers: ["Hôm qua tôi đã thăm bà.", "Hôm qua tôi thăm bà.", "Hôm qua tôi đi thăm bà.", "Hôm qua tôi đã đi thăm bà.", "Hôm qua tôi đã thăm bà ngoại.", "Hôm qua tôi thăm bà ngoại.", "Hôm qua tôi đi thăm bà ngoại.", "Hôm qua tôi đã đi thăm bà ngoại.", "Hôm qua tôi đã thăm bà nội.", "Hôm qua tôi thăm bà nội.", "Hôm qua tôi đi thăm bà nội.", "Hôm qua tôi đã đi thăm bà nội."] },
        { type: "mc", q: "Warum ist dieser Satz falsch?", vi: "Ngày mai tôi đã đi Huế.", options: ["đã (Vollzug) widerspricht ngày mai (Zukunft)", "ngày mai muss am Satzende stehen", "đi braucht die Präposition bằng"], answer: 0, explain: "Marker und Zeitadverb müssen zusammenpassen: Ngày mai tôi (sẽ) đi Huế." },
        { type: "mc", q: "Welcher Satz bedeutet „Wir fahren gleich los“?", options: ["Chúng tôi đã đi.", "Chúng tôi sắp đi.", "Chúng tôi đang đi."], answer: 1, explain: "sắp = unmittelbar bevorstehend (Proximativ)." },
        { type: "mc", q: "„Hôm qua tôi đi chợ.“ – Ist der Satz ohne đã korrekt?", options: ["Ja – hôm qua markiert die Zeit, đã ist fakultativ", "Nein – Vergangenheit braucht immer đã", "Nein – es muss sẽ heißen"], answer: 0, explain: "Aspektmarker sind fakultativ, wenn ein Zeitadverb die Zeit festlegt." },
        { type: "listen", vi: "Chị Linh đang chụp ảnh ở hồ.", de: "Linh fotografiert gerade am See." },
        { type: "speak", vi: "Tuần sau chúng tôi sẽ xuống Nha Trang.", de: "Nächste Woche fahren wir hinunter nach Nha Trang." }
      ]
    },

    // ───────────────────────────── k08l3 ─────────────────────────────
    {
      id: "k08l3",
      title: "Schon, noch nicht, gerade erst: rồi, chưa, vừa, mới",
      goal: "Du kannst fragen und sagen, ob etwas schon geschehen ist, und von gerade Geschehenem berichten.",
      vocab: [
        { vi: "rồi", de: "schon, bereits (Satzende)", pos: "Part", note: "vgl. K07: rồi = dann (zwischen Handlungen)", ex: { vi: "Tôi ăn rồi.", de: "Ich habe schon gegessen." } },
        { vi: "chưa", de: "noch nicht; (Frage) schon?", pos: "Part", ex: { vi: "Jonas chưa ăn sáng.", de: "Jonas hat noch nicht gefrühstückt." } },
        { vi: "vừa", de: "soeben, gerade (erst)", pos: "Adv", note: "auch vừa mới", ex: { vi: "Linh vừa đến.", de: "Linh ist gerade angekommen." } },
        { vi: "mới", de: "gerade erst; erst (spät)", pos: "Adv", south: "mới (häufiger als vừa)", ex: { vi: "Chúng tôi mới đến Đà Lạt.", de: "Wir sind gerade erst in Đà Lạt angekommen." } },
        { vi: "gặp", de: "treffen, begegnen", pos: "V", ex: { vi: "Jonas vừa gặp chị Hoa.", de: "Jonas hat gerade Frau Hoa getroffen." } },
        { vi: "ăn cơm", de: "essen (wörtl. Reis essen), eine Mahlzeit einnehmen", pos: "V", emoji: "🍚", ex: { vi: "Anh ăn cơm chưa?", de: "Hast du schon gegessen?" } },
        { vi: "nhận phòng", de: "einchecken (Zimmer beziehen)", pos: "V", emoji: "🔑", ex: { vi: "Chúng tôi nhận phòng lúc hai giờ.", de: "Wir checken um zwei Uhr ein." } },
        { vi: "trả phòng", de: "auschecken", pos: "V", ex: { vi: "Ngày mai chúng tôi trả phòng.", de: "Morgen checken wir aus." } },
        { vi: "đặt", de: "buchen, reservieren; legen", pos: "V", ex: { vi: "Linh đặt phòng rồi.", de: "Linh hat das Zimmer schon gebucht." } },
        { vi: "thử", de: "probieren, versuchen", pos: "V", ex: { vi: "Anh thử dâu tây Đà Lạt chưa?", de: "Hast du schon die Erdbeeren aus Đà Lạt probiert?" } },
        { vi: "dâu tây", de: "Erdbeere", pos: "N", emoji: "🍓", cls: "quả", ex: { vi: "Dâu tây Đà Lạt ngon lắm.", de: "Die Erdbeeren aus Đà Lạt sind sehr lecker." } },
        { vi: "lâu", de: "lange (Zeit)", pos: "Adj", ex: { vi: "Anh đến Đà Lạt lâu chưa?", de: "Bist du schon lange in Đà Lạt?" } },
        { vi: "hiểu", de: "verstehen", pos: "V", emoji: "💡", ex: { vi: "Tôi chưa hiểu.", de: "Ich verstehe (das) noch nicht." } },
        { vi: "lấy vợ", de: "heiraten (vom Mann gesagt)", pos: "V", emoji: "💍", note: "Frau: lấy chồng; neutral: kết hôn", ex: { vi: "Anh Tuấn lấy vợ rồi.", de: "Tuấn ist schon verheiratet." } }
      ],
      grammar: [
        {
          id: "g-k08-roi-chua",
          title: "rồi und chưa: schon / noch nicht",
          term: "Perfektmarker rồi, Negator chưa",
          pattern: "S + V (+ O) + rồi  |  S + chưa + V  |  S + (đã) + V (+ O) + chưa?",
          text: "`rồi` am **Satzende** markiert, dass eine Handlung vollzogen bzw. ein **neuer Zustand eingetreten** ist, der für jetzt relevant ist: `Tôi ăn rồi.` „Ich habe schon gegessen (und bin satt).“ Mit Stativverben: `Tôi mệt rồi.` „Jetzt bin ich müde.“ Häufig steht `đã` zusätzlich vor dem Verb: `Tôi đã ăn rồi.`\n\nDas Gegenstück ist `chưa` „noch nicht“ vor dem Verb: `Tôi chưa ăn.` Anders als `không` impliziert `chưa`, dass das Ereignis **erwartet** wird oder noch eintreten kann.\n\nAls **Frage** steht `chưa` am Satzende: `Anh (đã) ăn cơm chưa?` „Hast du schon gegessen?“ Die Antwort ist **nicht** `có`/`không`, sondern:\n\n- Ja: `Rồi.` / `Ăn rồi.` / `Rồi, tôi ăn rồi.`\n- Nein: `Chưa.` / `Chưa, tôi chưa ăn.`\n\nJetzt verstehst du auch die Formel aus K04: `đã có gia đình chưa?` „Hast du schon eine Familie?“ – Antwort `Rồi` oder `Chưa`. Und `Anh ăn cơm chưa?` ist in Vietnam zugleich ein Gruß, ähnlich wie „Na, alles klar?“.\n\nAchte auf die Stellung: Satzfinales `rồi` = „schon“; `rồi` zwischen zwei Handlungen = „dann“ (K07).",
          table: { head: ["", "Vietnamesisch", "Deutsch"], rows: [["Aussage", "Tôi ăn rồi.", "Ich habe schon gegessen."], ["Negation", "Tôi chưa ăn.", "Ich habe noch nicht gegessen."], ["Frage", "Anh ăn chưa?", "Hast du schon gegessen?"], ["Ja", "Rồi.", "Ja (schon)."], ["Nein", "Chưa.", "Noch nicht."]] },
          examples: [
            { vi: "Linh đặt phòng rồi.", de: "Linh hat das Zimmer schon gebucht.", gloss: "Linh | buchen | Zimmer | PRF" },
            { vi: "Anh đã thử dâu tây Đà Lạt chưa?", de: "Hast du schon die Erdbeeren aus Đà Lạt probiert?", gloss: "du | ANT | probieren | Erdbeere | Đà Lạt | noch nicht(FRAGE)" },
            { vi: "Chưa, anh chưa thử.", de: "Nein, noch nicht.", gloss: "noch nicht | ich | noch nicht | probieren" },
            { vi: "Tôi mệt rồi.", de: "Jetzt bin ich müde.", gloss: "ich | müde | PRF" }
          ],
          contrast: "Das deutsche Perfekt ist ein Tempus („Ich habe gegessen“ – egal ob gestern oder eben). `rồi` entspricht eher dem Adverb „schon“: Es betont die Relevanz für die Gegenwart. Deutschsprachige antworten auf `… chưa?` gern mit „Ja“ = `có` – das ist falsch; richtig ist `rồi`."
        },
        {
          id: "g-k08-vua-moi",
          title: "vừa, mới: soeben, gerade erst",
          term: "Aspektmarker der unmittelbaren Vergangenheit (Rezentiv)",
          pattern: "S + vừa / mới / vừa mới + V",
          text: "`vừa`, `mới` und die verstärkte Form `vừa mới` stehen vor dem Verb und zeigen an, dass eine Handlung **gerade eben** abgeschlossen wurde: `Chúng tôi vừa đến.` „Wir sind gerade angekommen.“ Man nennt das einen *Rezentiv*.\n\nUnterschiede:\n\n- `vừa` betont die zeitliche Nähe („soeben“).\n- `mới` betont oft zusätzlich, dass etwas **erst** jetzt bzw. erst spät geschieht. In `Chín giờ Jonas mới dậy.` heißt es „Jonas steht erst um neun auf“ – also später als erwartet.\n- Im Süden ist `mới` deutlich häufiger als `vừa`.\n\nDiese Marker lassen sich nicht mit `sẽ` oder `sắp` kombinieren, wohl aber mit Zeitangaben der nahen Vergangenheit: `Anh mới đến hôm qua.` „Ich bin erst gestern angekommen.“\n\nFrage nach der Länge: `Anh đến Đà Lạt lâu chưa?` „Bist du schon lange hier?“ – Antwort `Chưa lâu, anh mới đến.` oder `Lâu rồi.`",
          table: { head: ["Deutsch „gerade“", "Vietnamesisch", "Aspekt"], rows: [["Ich esse gerade.", "Tôi đang ăn.", "Progressiv"], ["Ich habe gerade gegessen.", "Tôi vừa ăn.", "Rezentiv"], ["Ich esse gleich.", "Tôi sắp ăn.", "Proximativ"]] },
          examples: [
            { vi: "Chúng tôi vừa nhận phòng.", de: "Wir haben gerade eingecheckt.", gloss: "wir | REZ | einchecken" },
            { vi: "Linh vừa mới gặp chị Hoa.", de: "Linh hat gerade eben Frau Hoa getroffen.", gloss: "Linh | REZ | REZ | treffen | Frau | Hoa" },
            { vi: "Anh mới đến hôm qua.", de: "Ich bin erst gestern angekommen.", gloss: "ich | erst | ankommen | gestern" },
            { vi: "Chín giờ Jonas mới dậy.", de: "Jonas steht erst um neun auf.", gloss: "neun | Uhr | Jonas | erst | aufstehen" }
          ],
          contrast: "Deutsches „gerade“ ist doppeldeutig: „Ich esse gerade“ (Verlauf → `đang`) vs. „Ich habe gerade gegessen“ (eben abgeschlossen → `vừa`). Vietnamesisch trennt die beiden Bedeutungen strikt.",
          south: "Im Süden: `mới` statt `vừa`, oft auch `mới vừa`."
        }
      ],
      dialogue: {
        setting: "Ankunft im Homestay in Đà Lạt. Gastgeberin Cô Hoa (etwa 55) begrüßt Jonas und Linh.",
        lines: [
          { who: "Cô Hoa", vi: "Chào hai cháu! Hai cháu đến Đà Lạt lâu chưa?", de: "Hallo, ihr zwei! Seid ihr schon lange in Đà Lạt?" },
          { who: "Jonas", vi: "Dạ, chưa lâu ạ. Chúng cháu vừa đến.", de: "Nein, noch nicht lange. Wir sind gerade angekommen." },
          { who: "Cô Hoa", vi: "Hai cháu ăn cơm chưa?", de: "Habt ihr schon gegessen?" },
          { who: "Linh", vi: "Dạ, chưa ạ.", de: "Nein, noch nicht." },
          { who: "Cô Hoa", vi: "Cô vừa nấu phở. Mời hai cháu ăn nhé.", de: "Ich habe gerade Phở gekocht. Esst doch etwas." },
          { who: "Jonas", vi: "Cảm ơn cô ạ. Chúng cháu nhận phòng được không ạ?", de: "Danke schön. Können wir einchecken?" },
          { who: "Cô Hoa", vi: "Được. Phòng sạch rồi. Cháu lấy vợ chưa?", de: "Ja. Das Zimmer ist schon sauber. Bist du schon verheiratet?" },
          { who: "Jonas", vi: "Dạ, chưa ạ.", de: "Nein, noch nicht." },
          { who: "Linh", vi: "Chưa, cô ạ. Năm sau ạ!", de: "Noch nicht. Nächstes Jahr!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Anh ăn cơm ___?", de: "Hast du schon gegessen?", options: ["chưa", "không", "rồi"], answer: "chưa", explain: "„schon …?“ = Frage mit satzfinalem chưa." },
        { type: "gap", vi: "Tôi ăn ___.", de: "Ich habe schon gegessen.", options: ["rồi", "chưa", "đang"], answer: "rồi", explain: "Satzfinales rồi = Vollzug, ‚schon‘." },
        { type: "gap", vi: "Linh ___ đến Đà Lạt.", de: "Linh ist gerade in Đà Lạt angekommen.", options: ["vừa", "sắp", "đang"], answer: "vừa", explain: "„gerade (eben) angekommen“ → vừa. sắp wäre ‚kommt gleich an‘." },
        { type: "gap", vi: "Tôi ___ hiểu.", de: "Ich verstehe (das) noch nicht.", options: ["chưa", "không phải", "rồi"], answer: "chưa", explain: "„noch nicht“ = chưa vor dem Verb." },
        { type: "gap", vi: "Chín giờ Jonas ___ dậy.", de: "Jonas steht erst um neun auf.", options: ["mới", "đã", "sẽ"], answer: "mới", explain: "mới = ‚erst (später als erwartet)‘." },
        { type: "build", vi: "Chúng tôi vừa nhận phòng.", de: "Wir haben gerade eingecheckt.", extra: ["sắp", "chưa"] },
        { type: "build", vi: "Anh đã lấy vợ chưa?", de: "Bist du schon verheiratet?", extra: ["không", "có"] },
        { type: "build", vi: "Tôi chưa thử dâu_tây Đà_Lạt.", de: "Ich habe die Erdbeeren aus Đà Lạt noch nicht probiert.", extra: ["rồi", "không"] },
        { type: "translate", de: "Hast du (Anrede em) schon gegessen?", answers: ["Em ăn cơm chưa?", "Em đã ăn cơm chưa?", "Em ăn chưa?", "Em đã ăn chưa?"] },
        { type: "translate", de: "Wir sind gerade angekommen.", answers: ["Chúng tôi vừa đến.", "Chúng tôi mới đến.", "Chúng tôi vừa mới đến.", "Chúng tôi vừa tới.", "Chúng tôi mới tới.", "Chúng tôi vừa mới tới."] },
        { type: "mc", q: "Linh fragt Jonas: „Anh đã đi Hội An chưa?“ Er war schon dort. Was antwortet er?", options: ["Có, anh đi chưa.", "Rồi, anh đi rồi.", "Vâng, anh không đi."], answer: 1, explain: "Auf … chưa? antwortet man mit rồi (ja, schon) oder chưa (noch nicht) – nicht mit có." },
        { type: "mc", q: "Worin unterscheiden sich „Tôi chưa ăn“ und „Tôi không ăn“?", options: ["chưa: noch nicht (wird erwartet); không: nicht / will nicht", "Kein Unterschied", "chưa ist Futur, không ist Präsens"], answer: 0, explain: "chưa lässt das Ereignis offen; không verneint es schlicht." },
        { type: "mc", q: "Deutsch „Ich esse gerade.“ – welches Vietnamesisch?", options: ["Tôi vừa ăn.", "Tôi ăn rồi.", "Tôi đang ăn."], answer: 2, explain: "Verlauf → đang. vừa ăn hieße ‚habe gerade gegessen‘." },
        { type: "listen", vi: "Chúng cháu vừa đến Đà Lạt.", de: "Wir sind gerade in Đà Lạt angekommen." },
        { type: "speak", vi: "Dạ, cháu chưa lấy vợ ạ.", de: "Nein, ich bin noch nicht verheiratet." }
      ]
    },

    // ───────────────────────────── k08l4 ─────────────────────────────
    {
      id: "k08l4",
      title: "Wetter, Zeitsätze, Dauer",
      goal: "Du kannst über das Wetter sprechen, Handlungen mit khi, trước khi, sau khi zeitlich verknüpfen und sagen, seit wann du etwas tust.",
      vocab: [
        { vi: "trời", de: "Himmel; Wetter", pos: "N", emoji: "🌤️", ex: { vi: "Hôm nay trời đẹp.", de: "Heute ist schönes Wetter." } },
        { vi: "mưa", de: "regnen; Regen", pos: "V", emoji: "🌧️", ex: { vi: "Trời đang mưa.", de: "Es regnet gerade." } },
        { vi: "nắng", de: "sonnig; Sonnenschein", pos: "Adj", emoji: "☀️", ex: { vi: "Hôm nay trời nắng.", de: "Heute ist es sonnig." } },
        { vi: "lạnh", de: "kalt", pos: "Adj", emoji: "🥶", ex: { vi: "Buổi tối Đà Lạt hơi lạnh.", de: "Abends ist es in Đà Lạt etwas kalt." } },
        { vi: "nóng", de: "heiß, warm", pos: "Adj", emoji: "🥵", ex: { vi: "Sài Gòn nóng hơn Đà Lạt.", de: "Saigon ist heißer als Đà Lạt." } },
        { vi: "mát", de: "kühl, angenehm frisch", pos: "Adj", ex: { vi: "Trời Đà Lạt mát lắm.", de: "In Đà Lạt ist es sehr angenehm kühl." } },
        { vi: "sương mù", de: "Nebel", pos: "N", emoji: "🌫️", ex: { vi: "Buổi sáng có sương mù.", de: "Morgens gibt es Nebel." } },
        { vi: "gió", de: "Wind", pos: "N", emoji: "💨", ex: { vi: "Hôm nay gió to.", de: "Heute ist der Wind stark." } },
        { vi: "mùa", de: "Jahreszeit, Saison", pos: "N", note: "mùa mưa = Regenzeit, mùa khô = Trockenzeit", ex: { vi: "Bây giờ là mùa mưa.", de: "Jetzt ist Regenzeit." } },
        { vi: "độ", de: "Grad", pos: "N", ex: { vi: "Hôm nay mười tám độ.", de: "Heute sind es achtzehn Grad." } },
        { vi: "khi", de: "wenn, als (Zeitpunkt)", pos: "Konj", ex: { vi: "Khi trời mưa, tôi ở nhà.", de: "Wenn es regnet, bleibe ich zu Hause." } },
        { vi: "trước khi", de: "bevor", pos: "Konj", ex: { vi: "Trước khi ngủ, tôi đánh răng.", de: "Bevor ich schlafe, putze ich die Zähne." } },
        { vi: "sau khi", de: "nachdem", pos: "Konj", ex: { vi: "Sau khi ăn sáng, chúng tôi đi hồ.", de: "Nach dem Frühstück gehen wir zum See." } },
        { vi: "thế nào", de: "wie (Art und Weise, Zustand)", pos: "QW", south: "sao, như thế nào", ex: { vi: "Hôm nay trời thế nào?", de: "Wie ist das Wetter heute?" } },
        { vi: "được", de: "(Dauer bis jetzt: seit …)", pos: "Part", note: "V + được + Dauer + rồi", ex: { vi: "Tôi học tiếng Việt được ba tháng rồi.", de: "Ich lerne seit drei Monaten Vietnamesisch." } },
        { vi: "ô", de: "Regenschirm", pos: "N", emoji: "☂️", cls: "cái", south: "dù", ex: { vi: "Linh mang ô.", de: "Linh nimmt einen Regenschirm mit." } }
      ],
      grammar: [
        {
          id: "g-k08-wetter",
          title: "Wetter: trời als Subjekt",
          term: "Wetterprädikation mit trời",
          pattern: "(Zeit,) trời + Wetterverb / Stativverb",
          text: "Wetteraussagen haben im Vietnamesischen ein echtes Subjekt: `trời` „Himmel“. `Trời mưa.` heißt wörtlich „Der Himmel regnet.“ Dahinter steht ein Wetterverb (`mưa` „regnen“) oder ein Stativverb (`nắng`, `lạnh`, `nóng`, `mát`). Ein `là` ist wie immer bei Stativverben ausgeschlossen: *`Trời là lạnh`.\n\nOft fällt `trời` auch weg, besonders bei Ausrufen: `Mưa rồi!` „Es regnet (jetzt)!“ – ein schönes Beispiel für `rồi` als Zustandswechsel.\n\nAlle Aspektmarker funktionieren auch hier: `Trời đang mưa.` (gerade), `Trời sắp mưa.` (gleich), `Chiều nay trời sẽ mưa.` (heute Nachmittag).\n\nNach dem Wetter fragt man mit `thế nào` „wie“: `Hôm nay trời thế nào?` Antwort: `Trời nắng, hơi nóng.` Temperaturen: Zahl + `độ`: `hai mươi độ`.\n\nNebel, Wind usw. sind Nomen; ihr Vorhandensein drückt `có` aus (K04): `Buổi sáng có sương mù.` – „Morgens gibt es Nebel.“ Die Windstärke wird mit Stativverben prädiziert: `Gió to.` „Der Wind ist stark.“",
          table: { head: ["Vietnamesisch", "Deutsch"], rows: [["Trời mưa.", "Es regnet."], ["Trời nắng.", "Die Sonne scheint."], ["Trời lạnh / nóng / mát.", "Es ist kalt / heiß / kühl."], ["Có sương mù.", "Es ist neblig."], ["Hai mươi độ.", "Zwanzig Grad."]] },
          examples: [
            { vi: "Hôm nay trời thế nào?", de: "Wie ist das Wetter heute?", gloss: "heute | Himmel | wie" },
            { vi: "Trời đang mưa.", de: "Es regnet gerade.", gloss: "Himmel | PROG | regnen" },
            { vi: "Buổi tối Đà Lạt hơi lạnh.", de: "Abends ist es in Đà Lạt etwas kalt.", gloss: "Abend | Đà Lạt | etwas | kalt" },
            { vi: "Chiều nay trời sẽ mưa.", de: "Heute Nachmittag wird es regnen.", gloss: "Nachmittag-dieser | Himmel | FUT | regnen" }
          ],
          contrast: "Deutsch braucht ein inhaltsleeres Expletivum: „**Es** regnet“. Vietnamesisch hat ein inhaltliches Subjekt (`trời`) oder gar keins – ein „es“ gibt es nicht.",
          south: "Im Süden fragt man oft `Trời sao?` oder `Trời như thế nào?`"
        },
        {
          id: "g-k08-zeitsaetze",
          title: "Zeitsätze: khi, trước khi, sau khi",
          term: "Temporale Adverbialsätze",
          pattern: "khi / trước khi / sau khi + Satz₁, Satz₂",
          text: "Mit den Konjunktionen `khi` „wenn, als“, `trước khi` „bevor“ und `sau khi` „nachdem“ bildest du **temporale Nebensätze**. `trước` und `sau` kennst du als Lokalnomen (K07) und aus `tuần trước/sau`; `khi` bedeutet „Zeitpunkt“.\n\nDer Zeitsatz steht meist **vorne** als Topik, durch Komma abgetrennt: `Trước khi ngủ, tôi đánh răng.` Er kann auch nachgestellt werden: `Tôi đánh răng trước khi ngủ.`\n\nDrei Eigenschaften, die sich vom Deutschen unterscheiden:\n\n- **Keine Inversion** im Hauptsatz: `Khi trời mưa, tôi ở nhà.` – nicht *„…, ở nhà tôi“.\n- **Keine Verbendstellung** im Nebensatz – die Wortstellung ist in beiden Sätzen S-V-O.\n- Das Subjekt des Nebensatzes **entfällt**, wenn es mit dem Hauptsatzsubjekt identisch ist: `Sau khi ăn sáng, chúng tôi đi hồ.` – deutsch eher „Nach dem Frühstück …“.\n\n`khi` deckt sowohl wiederholte („wenn“) als auch einmalige („als“) Ereignisse ab; die Unterscheidung ergibt sich aus Kontext oder Aspektmarkern. Ein Tempus müssen die Sätze nicht tragen.",
          examples: [
            { vi: "Khi trời mưa, tôi ở nhà.", de: "Wenn es regnet, bleibe ich zu Hause.", gloss: "wenn | Himmel | regnen | ich | sich befinden | Haus" },
            { vi: "Trước khi ngủ, tôi đánh răng.", de: "Bevor ich schlafe, putze ich die Zähne.", gloss: "vor | Zeitpunkt | schlafen | ich | Zähne putzen" },
            { vi: "Sau khi ăn sáng, chúng tôi đi hồ.", de: "Nach dem Frühstück gehen wir zum See.", gloss: "nach | Zeitpunkt | frühstücken | wir | gehen | See" },
            { vi: "Linh uống cà phê khi đọc sách.", de: "Linh trinkt Kaffee, wenn sie liest.", gloss: "Linh | trinken | Kaffee | wenn | lesen | Buch" }
          ],
          contrast: "Deutsch: Nebensatz mit Verbletztstellung, danach Inversion im Hauptsatz („Wenn es regnet, **bleibe ich** …“). Vietnamesisch: zwei gewöhnliche S-V-O-Sätze nebeneinander, die Konjunktion steht am Anfang des Nebensatzes."
        },
        {
          id: "g-k08-dauer",
          title: "Dauer bis jetzt: V + được + Dauer + rồi",
          term: "Durativkonstruktion mit được",
          pattern: "S + V (+ O) + được + Dauer + rồi",
          text: "Für „seit + Zeitraum“ hat Vietnamesisch keine Präposition. Stattdessen folgt dem Verb `được` + Zeitdauer + `rồi`: `Tôi học tiếng Việt được ba tháng rồi.` „Ich lerne seit drei Monaten Vietnamesisch.“\n\n- `được` (Grundbedeutung „erhalten, erreichen“) markiert hier, dass eine Dauer **erreicht** ist – wörtlich „Ich lerne Vietnamesisch, habe drei Monate erreicht“.\n- `rồi` (K08l3) zeigt, dass der Zustand bis jetzt andauert und relevant ist.\n\nGefragt wird mit `bao lâu` oder `mấy` + Zeiteinheit: `Anh ở Đà Lạt được mấy ngày rồi?` „Wie viele Tage bist du schon in Đà Lạt?“ oder `Anh học tiếng Việt bao lâu rồi?`\n\nOhne `rồi` beschreibt die Dauer einen **abgeschlossenen** Zeitraum: `Tôi ở Huế hai ngày.` „Ich war zwei Tage in Huế.“\n\nFür einen **Zeitpunkt** (seit Montag, seit 2024) steht dagegen `từ` „ab, von“ (K07): `Tôi ở Đà Lạt từ thứ hai.` „Ich bin seit Montag in Đà Lạt.“ *`từ ba tháng` ist eine Lehnübersetzung aus dem Deutschen und falsch.",
          table: { head: ["Deutsch", "Vietnamesisch", "Typ"], rows: [["seit drei Monaten", "được ba tháng rồi", "Zeitraum"], ["seit Montag", "từ thứ hai", "Zeitpunkt"], ["(war) zwei Tage (lang)", "hai ngày", "abgeschlossene Dauer"]] },
          examples: [
            { vi: "Tôi học tiếng Việt được ba tháng rồi.", de: "Ich lerne seit drei Monaten Vietnamesisch.", gloss: "ich | lernen | Vietnamesisch | erreichen | drei | Monat | PRF" },
            { vi: "Anh ở Đà Lạt được mấy ngày rồi?", de: "Wie viele Tage bist du schon in Đà Lạt?", gloss: "du | sich befinden | Đà Lạt | erreichen | wie viele | Tag | PRF" },
            { vi: "Jonas ở Việt Nam được hai tuần rồi.", de: "Jonas ist seit zwei Wochen in Vietnam.", gloss: "Jonas | sich befinden | Vietnam | erreichen | zwei | Woche | PRF" },
            { vi: "Tôi ở Đà Lạt từ thứ hai.", de: "Ich bin seit Montag in Đà Lạt.", gloss: "ich | sich befinden | Đà Lạt | ab | Montag" }
          ],
          contrast: "Deutsch: „seit“ + Dativ mit Präsens („Ich lerne seit drei Monaten“). Vietnamesisch trennt Zeitraum (`được … rồi`) und Zeitpunkt (`từ …`) – und das Verb bleibt wie immer unverändert."
        }
      ],
      dialogue: {
        setting: "Im Café am Xuân-Hương-See. Die Inhaberin Chị Mai (etwa 40) plaudert mit Jonas und Linh.",
        lines: [
          { who: "Chị Mai", vi: "Hai em ở Đà Lạt được mấy ngày rồi?", de: "Wie viele Tage seid ihr schon in Đà Lạt?" },
          { who: "Linh", vi: "Dạ, được ba ngày rồi ạ.", de: "Seit drei Tagen." },
          { who: "Chị Mai", vi: "Trời Đà Lạt thế nào? Lạnh không?", de: "Wie findet ihr das Wetter in Đà Lạt? Ist es kalt?" },
          { who: "Jonas", vi: "Hơi lạnh ạ. Buổi sáng có sương mù, đẹp lắm.", de: "Etwas kalt. Morgens gibt es Nebel, sehr schön." },
          { who: "Chị Mai", vi: "Chiều nay trời sẽ mưa. Khi đi chơi, hai em mang ô nhé.", de: "Heute Nachmittag wird es regnen. Nehmt einen Schirm mit, wenn ihr unterwegs seid." },
          { who: "Jonas", vi: "Vâng. Trước khi đi hồ Tuyền Lâm, chúng em uống cà phê ở đây.", de: "Ja. Bevor wir zum Tuyền-Lâm-See fahren, trinken wir hier Kaffee." },
          { who: "Linh", vi: "Cà phê Đức không ngon bằng cà phê Đà Lạt!", de: "Deutscher Kaffee ist nicht so gut wie der aus Đà Lạt!" },
          { who: "Chị Mai", vi: "Cảm ơn em! Sau khi uống cà phê, hai em thử dâu tây nhé.", de: "Danke! Probiert nach dem Kaffee noch die Erdbeeren." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Hôm nay ___ mưa.", de: "Heute regnet es.", options: ["trời", "là", "ở"], answer: "trời", explain: "Wettersubjekt ist trời ‚Himmel‘; ein ‚es‘ gibt es nicht, là passt nicht vor Verben." },
        { type: "gap", vi: "___ ăn sáng, tôi uống cà phê.", de: "Nach dem Frühstück trinke ich Kaffee.", options: ["Sau khi", "Trước khi", "Khi"], answer: "Sau khi", explain: "„nachdem“ = sau khi." },
        { type: "gap", vi: "Tôi học tiếng Việt ___ sáu tháng rồi.", de: "Ich lerne seit sechs Monaten Vietnamesisch.", options: ["được", "từ", "khi"], answer: "được", explain: "Zeitraum bis jetzt: V + được + Dauer + rồi. từ nur für Zeitpunkte." },
        { type: "gap", vi: "Hôm nay trời ___?", de: "Wie ist das Wetter heute?", options: ["thế nào", "đâu", "bao lâu"], answer: "thế nào", explain: "Nach Zustand/Art fragt thế nào." },
        { type: "build", vi: "Trời Đà_Lạt hơi lạnh.", alts: ["Đà_Lạt trời hơi lạnh."], de: "In Đà Lạt ist es etwas kalt.", extra: ["là", "có"] },
        { type: "build", vi: "Trước_khi ngủ tôi đánh_răng.", alts: ["Tôi đánh_răng trước_khi ngủ."], de: "Bevor ich schlafe, putze ich die Zähne.", extra: ["Sau_khi", "là"] },
        { type: "build", vi: "Jonas ở Việt_Nam được hai tuần rồi.", de: "Jonas ist seit zwei Wochen in Vietnam.", extra: ["từ", "đã"] },
        { type: "translate", de: "Es regnet gerade.", answers: ["Trời đang mưa.", "Đang mưa.", "Bây giờ trời đang mưa.", "Bây giờ trời mưa."] },
        { type: "translate", de: "Ich bin seit drei Tagen in Đà Lạt.", answers: ["Tôi ở Đà Lạt được ba ngày rồi.", "Tôi ở Đà Lạt ba ngày rồi.", "Tôi đến Đà Lạt được ba ngày rồi.", "Tôi đến Đà Lạt ba ngày rồi."] },
        { type: "mc", q: "Wie übersetzt man „seit drei Monaten“?", vi: "Tôi học tiếng Việt ___.", options: ["từ ba tháng", "được ba tháng rồi", "ba tháng sau"], answer: 1, explain: "Zeitraum bis jetzt → được … rồi. „từ ba tháng“ ist eine Lehnübersetzung von „seit“." },
        { type: "mc", q: "„Wenn es regnet, bleibe ich zu Hause.“", options: ["Khi trời mưa, tôi ở nhà.", "Khi trời mưa, ở nhà tôi.", "Khi mưa là trời, tôi ở nhà."], answer: 0, explain: "Keine Inversion im Hauptsatz: beide Teilsätze S-V(-O)." },
        { type: "mc", q: "Was bedeutet „Trời nắng“?", options: ["Die Sonne scheint.", "Es ist neblig.", "Es ist windig."], answer: 0, explain: "nắng = Sonnenschein, sonnig. Nebel = sương mù, Wind = gió." },
        { type: "listen", vi: "Sau khi ăn sáng, chúng ta đi hồ nhé.", de: "Lass uns nach dem Frühstück zum See gehen." },
        { type: "speak", vi: "Hôm nay trời Đà Lạt mát lắm.", de: "Heute ist es in Đà Lạt sehr angenehm kühl." },
        { type: "pairs", pairs: [["mưa", "regnen"], ["nắng", "sonnig"], ["lạnh", "kalt"], ["nóng", "heiß"], ["sương mù", "Nebel"], ["gió", "Wind"]] }
      ]
    }
  ],

  boss: {
    title: "Morgens im Café in Đà Lạt",
    npc: "Em Minh",
    role: "Student an der Universität Đà Lạt, etwa 20 Jahre",
    setting: "Früh am Morgen sitzt Jonas allein in einem kleinen Café mit Blick auf den Nebel über dem See. Am Nachbartisch sitzt Minh, ein Student, der sein Englisch – und lieber noch Jonas' Vietnamesisch – testen will. Minh ist jünger: Er nennt Jonas anh und sich selbst em.",
    turns: [
      {
        npc: { vi: "Chào anh! Anh dậy sớm quá! Anh thường dậy lúc mấy giờ ạ?", de: "Hallo! Du bist aber früh auf! Wann stehst du normalerweise auf?" },
        prompt: "Sag, dass du normalerweise um sieben aufstehst.",
        choices: [
          { vi: "Anh dậy thường lúc bảy giờ.", ok: false, fb: "Das Frequenzadverb steht vor dem Verb, nicht danach wie im deutschen V2-Satz: anh thường dậy." },
          { vi: "Anh thường dậy lúc bảy giờ.", ok: true, fb: "Richtig: S + thường + V + lúc + Uhrzeit." },
          { vi: "Anh là thường dậy bảy giờ.", ok: false, fb: "là ist Kopula und gehört nicht vor Verben." }
        ]
      },
      {
        npc: { vi: "Anh đến Đà Lạt lâu chưa ạ?", de: "Bist du schon lange in Đà Lạt?" },
        prompt: "Sag: Noch nicht lange, du bist erst gestern angekommen.",
        choices: [
          { vi: "Chưa lâu, anh mới đến hôm qua.", ok: true, fb: "Genau: chưa beantwortet die chưa-Frage, mới = erst (kürzlich)." },
          { vi: "Có, anh đến lâu.", ok: false, fb: "Auf eine … chưa?-Frage antwortet man mit rồi oder chưa, nicht mit có. Und es stimmt inhaltlich nicht." },
          { vi: "Chưa lâu, anh sắp đến hôm qua.", ok: false, fb: "sắp = gleich, bevorstehend – das widerspricht hôm qua (gestern)." }
        ]
      },
      {
        npc: { vi: "Anh ăn sáng chưa ạ? Bánh mì ở đây ngon lắm.", de: "Hast du schon gefrühstückt? Das Bánh mì hier ist sehr gut." },
        prompt: "Du hast schon gefrühstückt – bedanke dich.",
        choices: [
          { vi: "Có, anh ăn sáng. Cảm ơn em.", ok: false, fb: "Die Antwort auf … chưa? ist rồi (‚ja, schon‘), nicht có." },
          { vi: "Anh chưa ăn rồi. Cảm ơn em.", ok: false, fb: "chưa (noch nicht) und rồi (schon) widersprechen sich." },
          { vi: "Anh ăn rồi. Cảm ơn em.", ok: true, fb: "Richtig: V + rồi = schon erledigt." }
        ]
      },
      {
        npc: { vi: "Anh nói tiếng Việt hay quá! Anh học tiếng Việt lâu chưa?", de: "Du sprichst toll Vietnamesisch! Lernst du schon lange?" },
        prompt: "Sag, dass du seit sechs Monaten Vietnamesisch lernst.",
        choices: [
          { vi: "Anh học tiếng Việt từ sáu tháng.", ok: false, fb: "Lehnübersetzung von „seit“. từ steht nur vor Zeitpunkten (từ thứ hai); für Zeiträume: được … rồi." },
          { vi: "Anh học tiếng Việt được sáu tháng rồi.", ok: true, fb: "Perfekt: V + được + Dauer + rồi." },
          { vi: "Anh học tiếng Việt sáu tháng sau.", ok: false, fb: "sáu tháng sau heißt „sechs Monate später / in sechs Monaten“." }
        ]
      },
      {
        npc: { vi: "Ôi, bên ngoài trời thế nào ạ?", de: "Oh, wie ist das Wetter draußen?" },
        prompt: "Es regnet gerade.",
        choices: [
          { vi: "Trời đang mưa.", ok: true, fb: "Richtig: trời als Subjekt + Progressiv đang." },
          { vi: "Đang trời mưa.", ok: false, fb: "Aspektmarker stehen direkt vor dem Verb, nicht vor dem Subjekt." },
          { vi: "Trời là mưa.", ok: false, fb: "mưa ist ein Verb – kein là davor. Wörtlich: „Der Himmel ist Regen.“" }
        ]
      },
      {
        npc: { vi: "Ngày mai anh làm gì ạ?", de: "Was machst du morgen?" },
        prompt: "Sag, dass du morgen auf den Berg Langbiang hinaufsteigen wirst.",
        choices: [
          { vi: "Ngày mai anh đã lên núi Langbiang.", ok: false, fb: "đã markiert Vollzug/Vergangenheit und widerspricht ngày mai. Zukunft: sẽ (oder ohne Marker)." },
          { vi: "Ngày mai anh sẽ xuống núi Langbiang.", ok: false, fb: "xuống = hinunter. Auf einen Berg hinauf geht es mit lên." },
          { vi: "Ngày mai anh sẽ lên núi Langbiang.", ok: true, fb: "Richtig: sẽ (Futur) + lên (hinauf)." }
        ]
      },
      {
        npc: { vi: "Anh có hay uống cà phê không?", de: "Trinkst du oft Kaffee?" },
        prompt: "Sag, dass du immer vor dem Frühstück Kaffee trinkst.",
        choices: [
          { vi: "Anh luôn luôn uống cà phê trước khi ăn sáng.", ok: true, fb: "Genau: Frequenzadverb vor dem Verb, trước khi = bevor." },
          { vi: "Anh uống cà phê luôn luôn trước khi ăn sáng.", ok: false, fb: "Nach dem Verb bekommt luôn eine andere Lesart (‚gleich, sofort‘). Frequenzadverbien stehen vor dem Verb." },
          { vi: "Anh luôn luôn uống cà phê sau khi ăn sáng.", ok: false, fb: "sau khi = nachdem. „Vor dem Frühstück“ ist trước khi ăn sáng." }
        ]
      },
      {
        npc: { vi: "Chị Linh đâu ạ?", de: "Wo ist denn Linh?" },
        prompt: "Sag, dass sie gleich kommt.",
        choices: [
          { vi: "Chị ấy vừa đến.", ok: false, fb: "vừa đến = ist gerade angekommen – sie ist aber noch nicht da. „Gleich“ = sắp." },
          { vi: "Chị ấy sắp đến.", ok: true, fb: "Richtig: sắp = unmittelbar bevorstehend." },
          { vi: "Chị ấy đến rồi.", ok: false, fb: "rồi heißt, dass sie schon da ist – dann hätte Minh nicht gefragt." }
        ]
      }
    ],
    win: { vi: "Chị Linh đến rồi! Hẹn gặp lại anh chị nhé!", de: "Da ist Linh ja! Bis bald, ihr beiden!" }
  }
});
