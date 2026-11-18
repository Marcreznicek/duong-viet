VN.addChapter({
  id: "k03",
  place: "Sa Pa",
  region: "Nordwestliches Bergland (Lào Cai)",
  title: "Zahlen, Uhrzeit, Datum",
  intro: "Mit dem Nachtbus geht es von Hà Nội hinauf nach Sa Pa, zu den Reisterrassen und Dörfern der Hmong und Dao. Jonas und Linh kaufen Tickets, planen eine Wanderung und buchen ein Homestay – dafür brauchst du Zahlen, Preise, Uhrzeiten und Daten. Du lernst das dezimale Zahlensystem mit seinen Lautwechseln, große Beträge in Đồng und die Reihenfolge Tag – Monat – Jahr.",
  lessons: [
    // ───────────────────────── k03l1 ─────────────────────────
    {
      id: "k03l1",
      title: "Zahlen 0–99",
      goal: "Du kannst die Zahlen von 0 bis 99 verstehen und sagen, einschließlich der Lautwechsel mốt, lăm und tư.",
      vocab: [
        { vi: "không", de: "null", pos: "Num", emoji: "0️⃣", note: "Dieselbe Form wie die Negation „không“.", ex: { vi: "Không cộng hai là hai.", de: "Null plus zwei ist zwei." } },
        { vi: "một", de: "eins", pos: "Num", emoji: "1️⃣", note: "Nach mươi (ab 21) wird es zu mốt.", ex: { vi: "Một cộng một là hai.", de: "Eins plus eins ist zwei." } },
        { vi: "hai", de: "zwei", pos: "Num", emoji: "2️⃣", ex: { vi: "Hai cộng hai là bốn.", de: "Zwei plus zwei ist vier." } },
        { vi: "ba", de: "drei", pos: "Num", emoji: "3️⃣", ex: { vi: "Ba cộng ba là sáu.", de: "Drei plus drei ist sechs." } },
        { vi: "bốn", de: "vier", pos: "Num", emoji: "4️⃣", note: "Ab 24 im Norden oft tư: hai mươi tư.", ex: { vi: "Bốn cộng năm là chín.", de: "Vier plus fünf ist neun." } },
        { vi: "năm", de: "fünf", pos: "Num", emoji: "5️⃣", note: "Nach mười/mươi wird es zu lăm (Nord auch nhăm). Homonym: năm = Jahr.", ex: { vi: "Năm cộng năm là mười.", de: "Fünf plus fünf ist zehn." } },
        { vi: "sáu", de: "sechs", pos: "Num", emoji: "6️⃣", ex: { vi: "Sáu cộng một là bảy.", de: "Sechs plus eins ist sieben." } },
        { vi: "bảy", de: "sieben", pos: "Num", emoji: "7️⃣", ex: { vi: "Bảy cộng một là tám.", de: "Sieben plus eins ist acht." } },
        { vi: "tám", de: "acht", pos: "Num", emoji: "8️⃣", ex: { vi: "Tám cộng hai là mười.", de: "Acht plus zwei ist zehn." } },
        { vi: "chín", de: "neun", pos: "Num", emoji: "9️⃣", ex: { vi: "Chín cộng một là mười.", de: "Neun plus eins ist zehn." } },
        { vi: "mười", de: "zehn (alleinstehend und in 11–19)", pos: "Num", emoji: "🔟", note: "Huyền-Ton. Als Zehnerbasis ab 20: mươi (ngang).", ex: { vi: "Mười cộng một là mười một.", de: "Zehn plus eins ist elf." } },
        { vi: "mươi", de: "-zig (Zehner ab 20)", pos: "Num", note: "Ngang-Ton! hai mươi = 20, ba mươi = 30. Umgangssprachlich oft weggelassen: ba mốt = 31.", ex: { vi: "Mười cộng mười là hai mươi.", de: "Zehn plus zehn ist zwanzig." } },
        { vi: "mốt", de: "eins (als Einer nach mươi: 21, 31 …)", pos: "Num", note: "Nur nach mươi! 11 = mười một, nicht *mười mốt.", ex: { vi: "Hai mươi cộng một là hai mươi mốt.", de: "Zwanzig plus eins ist einundzwanzig." } },
        { vi: "lăm", de: "fünf (als Einer nach mười/mươi: 15, 25 …)", pos: "Num", note: "Im Norden ab 25 auch nhăm (hai mươi nhăm).",ex: { vi: "Mười cộng năm là mười lăm.", de: "Zehn plus fünf ist fünfzehn." } },
        { vi: "tư", de: "vier (als Einer nach mươi, Nord: 24, 34 …)", pos: "Num", note: "Fakultativ: hai mươi tư = hai mươi bốn. Auch in thứ tư (Mittwoch).", ex: { vi: "Hai mươi cộng bốn là hai mươi tư.", de: "Zwanzig plus vier ist vierundzwanzig." } },
        { vi: "cộng", de: "plus (addieren)", pos: "V", emoji: "➕", ex: { vi: "Ba cộng bốn là bảy.", de: "Drei plus vier ist sieben." } }
      ],
      grammar: [
        {
          id: "g-k03-zahlsystem",
          title: "Das Zahlensystem: Bausteine statt Wörter",
          term: "Dezimales Zahlsystem, multiplikative und additive Juxtaposition",
          pattern: "Zehner + mươi + Einer",
          text: `Vietnamesisch zählt streng dezimal und **regelmäßig**. Es gibt nur zehn Grundzahlwörter (\`một\` bis \`mười\`) und \`không\` für die Null; alle weiteren Zahlen entstehen durch **Juxtaposition**, also bloßes Nebeneinanderstellen, ohne „und“ oder Endungen.

Dabei gelten zwei Prinzipien:

- **Additiv**: Steht die kleinere Zahl *nach* der größeren, wird addiert: \`mười hai\` = 10 + 2 = 12.
- **Multiplikativ**: Steht die kleinere Zahl *vor* dem Zehner, wird multipliziert: \`hai mươi\` = 2 × 10 = 20.

Kombiniert ergibt sich \`ba mươi hai\` = 3 × 10 + 2 = 32. Die Reihenfolge ist immer **groß vor klein**, genau wie beim Schreiben der Ziffern.

Achte auf den Ton des Zehners: Allein und in 11–19 heißt er \`mười\` (huyền), als Multiplikand ab 20 \`mươi\` (ngang). Diese tonale Unterscheidung ist bedeutungstragend: \`mười hai\` = 12, aber \`hai mươi\` = 20.

In der Umgangssprache fällt \`mươi\` vor einem Einer oft weg: \`ba mốt\` (31), \`bốn lăm\` (45). Im Norden hört man für 20 außerdem die Kontraktion \`hăm\` (\`hăm mốt\` = 21). Für den Anfang lernst du die vollständigen Formen.

Rechenaufgaben formulierst du mit der Kopula: \`Hai cộng ba là năm.\` – wörtlich „zwei addiert drei ist fünf“.`,
          table: {
            head: ["Zahl", "Vietnamesisch", "Bauprinzip"],
            rows: [
              ["10", "mười", "Grundzahl"],
              ["12", "mười hai", "10 + 2"],
              ["20", "hai mươi", "2 × 10"],
              ["32", "ba mươi hai", "3 × 10 + 2"],
              ["99", "chín mươi chín", "9 × 10 + 9"]
            ]
          },
          examples: [
            { vi: "Mười cộng hai là mười hai.", de: "Zehn plus zwei ist zwölf.", gloss: "zehn | addieren | zwei | sein | zehn | zwei" },
            { vi: "Hai mươi cộng ba là hai mươi ba.", de: "Zwanzig plus drei ist dreiundzwanzig.", gloss: "zwei | -zig | addieren | drei | sein | zwei | -zig | drei" },
            { vi: "Chín mươi chín.", de: "Neunundneunzig." },
            { vi: "Ba mươi cộng ba mươi là sáu mươi.", de: "Dreißig plus dreißig ist sechzig." }
          ],
          contrast: "Das Deutsche dreht bei 21–99 die Reihenfolge um („einundzwanzig“ = 1 + 20) und hat Sonderwörter wie „elf“, „zwölf“, „-zig“. Vietnamesisch spricht die Ziffern in Schreibreihenfolge – Zahlendreher wie im Deutschen gibt es nicht."
        },
        {
          id: "g-k03-lautwechsel",
          title: "Lautwechsel: mốt, lăm, tư",
          term: "Lautalternation (kontextbedingte Allomorphie)",
          text: `Drei Grundzahlen haben **Allomorphe**, also andere Lautformen, sobald sie als Einer in einer zusammengesetzten Zahl stehen. Das ist keine Willkür: Die Wechsel vermeiden Verwechslungen.

**1 → mốt**: Nach \`mươi\` (also ab 21) heißt die Eins \`mốt\`: \`hai mươi mốt\` (21), \`chín mươi mốt\` (91). Aber **nicht** nach \`mười\`: 11 ist \`mười một\`. Der Wechsel ist an den Zehner \`mươi\` gebunden, nicht an „Einer allgemein“.

**5 → lăm / nhăm**: Nach \`mười\` und \`mươi\` heißt die Fünf \`lăm\`: \`mười lăm\` (15), \`hai mươi lăm\` (25). Im Norden ist ab 25 auch \`nhăm\` verbreitet (\`hai mươi nhăm\`). So wird \`năm\` „fünf“ nicht mit \`năm\` „Jahr“ verwechselt. Als Multiplikand bleibt es \`năm\`: \`năm mươi lăm\` (55).

**4 → tư**: Nach \`mươi\` sagt man im Norden häufig \`tư\` (sinovietnamesischen Ursprungs): \`hai mươi tư\` (24). \`hai mươi bốn\` ist ebenfalls korrekt. 14 heißt normalerweise \`mười bốn\`.

Merke: Der Wechsel betrifft **nur die Einerstelle**. Am Anfang einer Zahl stehen immer die Grundformen \`một\`, \`năm\`, \`bốn\`.`,
          table: {
            head: ["Zahl", "richtig", "typischer Fehler"],
            rows: [
              ["11", "mười một", "*mười mốt"],
              ["21", "hai mươi mốt", "*hai mươi một"],
              ["15", "mười lăm", "*mười năm"],
              ["25", "hai mươi lăm / nhăm", "*hai mươi năm"],
              ["24", "hai mươi tư / bốn", "–"],
              ["55", "năm mươi lăm", "*lăm mươi năm"]
            ]
          },
          examples: [
            { vi: "Mười một cộng mười là hai mươi mốt.", de: "Elf plus zehn ist einundzwanzig." },
            { vi: "Mười lăm cộng mười là hai mươi lăm.", de: "Fünfzehn plus zehn ist fünfundzwanzig." },
            { vi: "Hai mươi cộng bốn là hai mươi tư.", de: "Zwanzig plus vier ist vierundzwanzig." },
            { vi: "Năm mươi cộng năm là năm mươi lăm.", de: "Fünfzig plus fünf ist fünfundfünfzig." }
          ],
          contrast: "Auch das Deutsche kennt Allomorphie bei Zahlen: „zwei“ – „zwanzig“, „drei“ – „dreißig“, „sieben“ – „siebzig“. Im Vietnamesischen hängt die Form aber von der Position *hinter* dem Zehner ab, nicht vom Stamm.",
          south: "Im Süden ist lăm die Regel, nhăm kommt kaum vor; tư nach mươi ist dort ebenfalls häufig (hai mươi tư)."
        }
      ],
      dialogue: {
        setting: "Im Schlafbus von Hà Nội nach Sa Pa. Linh liest Jonas die Liegeplatznummern auf den Tickets vor.",
        lines: [
          { who: "Linh", vi: "Anh Jonas, số giường là hai mươi mốt.", de: "Jonas, die Liegeplatznummer ist einundzwanzig." },
          { who: "Jonas", vi: "Hai mươi một?", de: "Zwanzig-eins?" },
          { who: "Linh", vi: "Không phải hai mươi một. Hai mươi mốt!", de: "Nicht „hai mươi một“. „Hai mươi mốt“!" },
          { who: "Jonas", vi: "À, hai mươi mốt. Em là số hai mươi hai, phải không?", de: "Ah, einundzwanzig. Du hast die Nummer zweiundzwanzig, oder?" },
          { who: "Linh", vi: "Không phải. Em là số hai mươi lăm.", de: "Nein. Ich habe die Nummer fünfundzwanzig." },
          { who: "Jonas", vi: "Hai mươi năm?", de: "Zwanzig-fünf?" },
          { who: "Linh", vi: "Không. Hai mươi lăm! Mười lăm, hai mươi lăm, ba mươi lăm.", de: "Nein. Fünfundzwanzig! Fünfzehn, fünfundzwanzig, fünfunddreißig." },
          { who: "Jonas", vi: "Tiếng Việt khó!", de: "Vietnamesisch ist schwer!" },
          { who: "Linh", vi: "Không khó. Anh giỏi!", de: "Nicht schwer. Du bist gut!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "21 = hai mươi ___", de: "einundzwanzig", options: ["mốt", "một", "mươi"], answer: "mốt", explain: "Nach mươi wird một zu mốt: hai mươi mốt." },
        { type: "gap", vi: "11 = mười ___", de: "elf", options: ["một", "mốt", "lăm"], answer: "một", explain: "Nach mười (huyền-Ton) bleibt một unverändert: mười một. mốt gibt es nur nach mươi." },
        { type: "gap", vi: "15 = mười ___", de: "fünfzehn", options: ["lăm", "năm", "mốt"], answer: "lăm", explain: "Nach mười/mươi wird năm zu lăm – sonst klänge es wie „zehn Jahre“." },
        { type: "gap", vi: "40 = bốn ___", de: "vierzig", options: ["mươi", "mười", "tư"], answer: "mươi", explain: "Als Multiplikator-Basis ab 20 heißt der Zehner mươi (ngang-Ton). mười steht nur allein und in 11–19." },
        { type: "build", vi: "Hai cộng ba là năm.", de: "Zwei plus drei ist fünf.", extra: ["lăm", "mười"] },
        { type: "build", vi: "Số giường là hai mươi mốt.", de: "Die Liegeplatznummer ist einundzwanzig.", extra: ["một", "mười"] },
        { type: "build", vi: "Mười cộng năm là mười lăm.", de: "Zehn plus fünf ist fünfzehn.", extra: ["nhăm", "mươi"] },
        { type: "translate", de: "vierundzwanzig", answers: ["hai mươi tư", "hai mươi bốn", "hai tư", "hăm tư"] },
        { type: "translate", de: "fünfundfünfzig", answers: ["năm mươi lăm", "năm mươi nhăm", "năm lăm"] },
        { type: "translate", de: "Zwei plus zwei ist vier.", answers: ["Hai cộng hai là bốn.", "Hai cộng hai bằng bốn."] },
        { type: "mc", q: "Wie sagt man 31?", options: ["ba mươi mốt", "ba mươi một", "ba mười một"], answer: 0, explain: "Zehner ab 20 = mươi (ngang), und nach mươi wird một zu mốt." },
        { type: "mc", q: "Welche Zahl ist `mười hai` – und welche `hai mươi`?", options: ["12 und 20", "20 und 12", "beide 12"], answer: 0, explain: "Klein nach groß = Addition (10 + 2), klein vor groß = Multiplikation (2 × 10). Auch der Ton unterscheidet: mười vs. mươi." },
        { type: "listen", vi: "Hai mươi lăm cộng năm là ba mươi.", de: "Fünfundzwanzig plus fünf ist dreißig." },
        { type: "speak", vi: "Mười, hai mươi, ba mươi, bốn mươi, năm mươi.", de: "Zehn, zwanzig, dreißig, vierzig, fünfzig." },
        { type: "pairs", pairs: [["sáu", "6"], ["bảy", "7"], ["tám", "8"], ["chín", "9"], ["mười", "10"]] }
      ]
    },

    // ───────────────────────── k03l2 ─────────────────────────
    {
      id: "k03l2",
      title: "Große Zahlen & Geld",
      goal: "Du kannst Preise in Đồng verstehen und nennen und nach Menge und Preis fragen.",
      vocab: [
        { vi: "trăm", de: "hundert", pos: "Num", note: "Immer mit Zahl davor: một trăm (100).", ex: { vi: "Một trăm cộng một trăm là hai trăm.", de: "Hundert plus hundert ist zweihundert." } },
        { vi: "nghìn", de: "tausend", pos: "Num", south: "ngàn", ex: { vi: "Một vé năm mươi nghìn đồng.", de: "Ein Ticket kostet 50.000 Đồng." } },
        { vi: "triệu", de: "Million", pos: "Num", ex: { vi: "Hai vé một triệu sáu trăm nghìn đồng.", de: "Zwei Tickets kosten 1.600.000 Đồng." } },
        { vi: "tỷ", de: "Milliarde", pos: "Num", note: "Auch geschrieben: tỉ.", ex: { vi: "Một tỷ là một nghìn triệu.", de: "Eine Milliarde sind tausend Millionen." } },
        { vi: "linh", de: "null (an Zehnerstelle: 101, 205 …)", pos: "Num", south: "lẻ", ex: { vi: "Phòng số một trăm linh năm.", de: "Zimmer Nummer 105." } },
        { vi: "đồng", de: "Đồng (vietnamesische Währung)", pos: "N", emoji: "💵", note: "Wird direkt gezählt, ohne Klassifikator. Abkürzung: đ, VND.", ex: { vi: "Hai trăm nghìn đồng.", de: "200.000 Đồng." } },
        { vi: "tiền", de: "Geld", pos: "N", emoji: "💰", ex: { vi: "Vé xe bao nhiêu tiền?", de: "Wie viel kostet das Busticket?" } },
        { vi: "bao nhiêu", de: "wie viel(e) (offen, beliebige Menge)", pos: "QW", ex: { vi: "Tất cả bao nhiêu tiền?", de: "Wie viel kostet alles zusammen?" } },
        { vi: "mấy", de: "wie viele (kleine Anzahl erwartet)", pos: "QW", note: "Präsupposition: Antwort meist unter 10.", ex: { vi: "Anh mua mấy vé?", de: "Wie viele Tickets kaufst du?" } },
        { vi: "Bao nhiêu tiền?", de: "Wie viel kostet das?", pos: "Phr", emoji: "🏷️", ex: { vi: "Một đêm bao nhiêu tiền?", de: "Wie viel kostet eine Nacht?" } },
        { vi: "tất cả", de: "alles, insgesamt", pos: "N", ex: { vi: "Tất cả là chín trăm nghìn đồng.", de: "Insgesamt sind es 900.000 Đồng." } },
        { vi: "mua", de: "kaufen", pos: "V", emoji: "🛒", ex: { vi: "Tôi mua hai vé.", de: "Ich kaufe zwei Tickets." } },
        { vi: "vé", de: "Ticket, Fahrkarte", pos: "N", emoji: "🎫", ex: { vi: "Một vé tám trăm nghìn đồng.", de: "Ein Ticket kostet 800.000 Đồng." } },
        { vi: "người", de: "Person, Mensch", pos: "N", emoji: "🧑", note: "Wird direkt gezählt: ba người.", ex: { vi: "Một phòng, hai người.", de: "Ein Zimmer, zwei Personen." } },
        { vi: "đêm", de: "Nacht", pos: "N", emoji: "🌙", ex: { vi: "Hai đêm bao nhiêu tiền?", de: "Wie viel kosten zwei Nächte?" } },
        { vi: "phòng", de: "Zimmer, Raum", pos: "N", emoji: "🛏️", ex: { vi: "Phòng số hai mươi mốt.", de: "Zimmer Nummer 21." } }
      ],
      grammar: [
        {
          id: "g-k03-grosse-zahlen",
          title: "Hunderter, Tausender, Millionen",
          term: "Dreiergruppierung, Nullstellen mit linh / không trăm",
          pattern: "Num + triệu + Num + nghìn + Num + trăm + Num + mươi + Num",
          text: `Große Zahlen werden wie im Deutschen in **Dreiergruppen** gebaut: \`nghìn\` (10³), \`triệu\` (10⁶), \`tỷ\` (10⁹). Jede Gruppe wird wie eine Zahl von 1–999 gelesen und mit ihrem Stellenwort verbunden: 350.000 = \`ba trăm năm mươi nghìn\` (350 × 1000). Auch die Schreibweise mit Punkt als Tausendertrenner ist dieselbe wie im Deutschen.

**Nullen in der Mitte** müssen hörbar gemacht werden:

- Fehlt nur der Zehner, steht \`linh\` (Nord) bzw. \`lẻ\` (Süd): 105 = \`một trăm linh năm\`. Hier bleibt \`năm\` unverändert, weil kein \`mươi\` vorausgeht.
- Fehlt eine ganze Hundertergruppe, sagt man \`không trăm\`: 2.050 = \`hai nghìn không trăm năm mươi\`.

**Verkürzung** im Alltag: Folgt nach dem höchsten Stellenwert nur noch *eine* Ziffer, nennt man diese ohne Stellenwort: \`một triệu sáu\` = 1.600.000, \`hai nghìn rưỡi\` = 2.500 (\`rưỡi\` = „und halb“, siehe Uhrzeit).

Bei Preisen spricht man fast immer in Tausendern: Ein Phở kostet z. B. \`năm mươi nghìn\` (50.000 đ). Die kleinste gängige Banknote ist heute 1.000 Đồng.`,
          table: {
            head: ["Zahl", "Vietnamesisch"],
            rows: [
              ["105", "một trăm linh năm"],
              ["250", "hai trăm năm mươi"],
              ["2.050", "hai nghìn không trăm năm mươi"],
              ["350.000", "ba trăm năm mươi nghìn"],
              ["1.600.000", "một triệu sáu trăm nghìn (ugs. một triệu sáu)"],
              ["1.000.000.000", "một tỷ"]
            ]
          },
          examples: [
            { vi: "Một vé tám trăm nghìn đồng.", de: "Ein Ticket kostet 800.000 Đồng.", gloss: "ein | Ticket | acht | hundert | tausend | Đồng" },
            { vi: "Phòng số một trăm linh một.", de: "Zimmer Nummer 101." },
            { vi: "Tất cả là một triệu sáu trăm nghìn đồng.", de: "Insgesamt 1.600.000 Đồng." },
            { vi: "Hai nghìn không trăm hai mươi sáu.", de: "Zweitausendsechsundzwanzig (2026)." }
          ],
          contrast: "Vorsicht bei „Billion“: Deutsch 10¹² entspricht `nghìn tỷ`, nicht einem eigenen Wort. `tỷ` ist die deutsche Milliarde. Anders als im Deutschen muss eine Null an der Zehnerstelle ausgesprochen werden (*hundertfünf* vs. `một trăm linh năm`).",
          south: "Süd: ngàn statt nghìn, lẻ statt linh (một trăm lẻ năm)."
        },
        {
          id: "g-k03-bao-nhieu-may",
          title: "bao nhiêu oder mấy?",
          term: "Quantitatives Fragewort mit Präsupposition",
          pattern: "(S) + V + mấy / bao nhiêu + N",
          text: `Beide Wörter fragen nach einer Anzahl, unterscheiden sich aber in ihrer **Präsupposition**, also der Erwartung des Sprechers:

- \`mấy\` erwartet eine **kleine Zahl**, typischerweise unter 10: \`Anh mua mấy vé?\` – „Wie viele Tickets (ein, zwei, drei …)?“ Auch bei Uhrzeit (\`mấy giờ\`) und Wochentag (\`thứ mấy\`) steht \`mấy\`, weil die Menge begrenzt ist.
- \`bao nhiêu\` ist **offen** und neutral; man nimmt es für große oder unbekannte Mengen und vor allem für **Preise**: \`Bao nhiêu tiền?\`

Wie alle Fragewörter (K02) steht das Fragewort **in situ**, also genau dort, wo in der Antwort die Zahl steht:

- \`Anh mua mấy vé?\` → \`Tôi mua hai vé.\`
- \`Một đêm bao nhiêu tiền?\` → \`Một đêm năm trăm nghìn đồng.\`

Bei Preisangaben fehlt oft ein Verb: \`Một vé tám trăm nghìn đồng.\` Die Preisangabe ist selbst das Prädikat des Satzes (Topik „ein Ticket“ – Kommentar „800.000 Đồng“). \`là\` ist hier möglich, aber nicht nötig.

**Num + N ohne Klassifikator**: Maß- und Zähleinheiten wie \`đồng\`, \`đêm\`, \`người\`, \`vé\` stehen direkt nach der Zahl. Ein Pluralsuffix gibt es nicht: \`hai vé\` = „zwei Ticket“. Für die meisten anderen Nomen braucht man einen Klassifikator – das lernst du in Ninh Bình (K04).`,
          examples: [
            { vi: "Anh mua mấy vé?", de: "Wie viele Tickets kaufst du?", gloss: "du | kaufen | wie_viele | Ticket" },
            { vi: "Tôi mua ba vé.", de: "Ich kaufe drei Tickets." },
            { vi: "Một đêm bao nhiêu tiền?", de: "Wie viel kostet eine Nacht?", gloss: "eine | Nacht | wie_viel | Geld" },
            { vi: "Một phòng bốn người.", de: "Ein Zimmer für vier Personen." }
          ],
          contrast: "Das Deutsche unterscheidet „wie viel“ (Masse) und „wie viele“ (zählbar), aber keine Größenerwartung. Vietnamesisch markiert stattdessen, ob man eine kleine Zahl erwartet. Und: „zwei Tickets“ hat im Deutschen eine Pluralendung, `hai vé` nicht – die Zahl allein zeigt die Menge.",
          south: "Im Süden hört man umgangssprachlich auch die Kurzform „nhiêu tiền?“ für den Preis; im Norden gilt bao nhiêu tiền als Standard."
        }
      ],
      dialogue: {
        setting: "An der Kasse der Seilbahn auf den Fansipan, den höchsten Berg Indochinas (3.143 m). Jonas kauft Tickets bei einer Verkäuferin.",
        lines: [
          { who: "Verkäuferin", vi: "Chào anh ạ. Anh mua mấy vé?", de: "Guten Tag. Wie viele Tickets kaufen Sie?" },
          { who: "Jonas", vi: "Chào chị. Tôi mua hai vé.", de: "Guten Tag. Ich kaufe zwei Tickets." },
          { who: "Verkäuferin", vi: "Hai vé, phải không anh?", de: "Zwei Tickets, richtig?" },
          { who: "Jonas", vi: "Vâng. Một vé bao nhiêu tiền?", de: "Ja. Wie viel kostet ein Ticket?" },
          { who: "Verkäuferin", vi: "Một vé tám trăm nghìn đồng.", de: "Ein Ticket kostet 800.000 Đồng." },
          { who: "Jonas", vi: "Tất cả là một triệu sáu trăm nghìn, phải không?", de: "Zusammen sind es 1.600.000, richtig?" },
          { who: "Verkäuferin", vi: "Vâng, một triệu sáu ạ.", de: "Ja, eine Million sechshunderttausend." },
          { who: "Linh", vi: "Anh Jonas giỏi!", de: "Jonas, du bist gut!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Một vé ___ tiền?", de: "Wie viel kostet ein Ticket?", options: ["bao nhiêu", "ai", "nào"], answer: "bao nhiêu", explain: "Preise fragt man mit bao nhiêu tiền – offen, weil die Zahl groß sein kann." },
        { type: "gap", vi: "Chị mua ___ vé?", de: "Wie viele Tickets kaufst du (ein paar)?", options: ["mấy", "ai", "đâu"], answer: "mấy", explain: "mấy fragt nach einer kleinen Anzahl; es steht in situ vor dem gezählten Nomen." },
        { type: "gap", vi: "105 = một trăm ___ năm", de: "hundertfünf", options: ["linh", "mười", "không"], answer: "linh", explain: "Eine leere Zehnerstelle wird mit linh (Süd: lẻ) gefüllt. năm bleibt năm, da kein mươi davorsteht." },
        { type: "gap", vi: "2.050 = hai nghìn ___ trăm năm mươi", de: "zweitausendfünfzig", options: ["không", "linh", "một"], answer: "không", explain: "Fehlt eine ganze Hunderterstelle, sagt man không trăm." },
        { type: "build", vi: "Một vé tám trăm nghìn đồng.", de: "Ein Ticket kostet 800.000 Đồng.", extra: ["mươi", "triệu"] },
        { type: "build", vi: "Tất cả là một triệu đồng.", de: "Insgesamt ist es eine Million Đồng.", extra: ["mấy", "trăm"] },
        { type: "build", vi: "Tôi mua ba vé.", de: "Ich kaufe drei Tickets.", extra: ["mấy", "nghìn"] },
        { type: "translate", de: "Wie viel kostet ein Ticket?", answers: ["Một vé bao nhiêu tiền?", "Một vé là bao nhiêu tiền?", "Vé bao nhiêu tiền?", "Bao nhiêu tiền một vé?"] },
        { type: "translate", de: "350.000 Đồng", answers: ["ba trăm năm mươi nghìn đồng", "ba trăm năm mươi ngàn đồng", "ba trăm năm mươi nghìn"] },
        { type: "translate", de: "zwei Personen, zwei Nächte", answers: ["hai người, hai đêm", "hai người hai đêm"] },
        { type: "mc", q: "Was bedeutet `một triệu sáu`?", options: ["1.600.000", "1.000.006", "1.060.000"], answer: 0, explain: "Folgt nur eine Ziffer nach dem höchsten Stellenwert, gilt sie für die nächstniedrigere Stelle: sáu = sáu trăm nghìn." },
        { type: "mc", q: "Wie sagt man 1.000.000.000?", options: ["một tỷ", "một triệu", "một trăm triệu"], answer: 0, explain: "tỷ = Milliarde (10⁹). Eine deutsche Billion (10¹²) wäre nghìn tỷ." },
        { type: "listen", vi: "Hai vé là một triệu sáu trăm nghìn đồng.", de: "Zwei Tickets sind 1.600.000 Đồng." },
        { type: "speak", vi: "Một vé bao nhiêu tiền?", de: "Wie viel kostet ein Ticket?" },
        { type: "pairs", pairs: [["trăm", "hundert"], ["nghìn", "tausend"], ["triệu", "Million"], ["tỷ", "Milliarde"], ["đồng", "Đồng"]] }
      ]
    },

    // ───────────────────────── k03l3 ─────────────────────────
    {
      id: "k03l3",
      title: "Uhrzeit & Tageszeiten",
      goal: "Du kannst nach der Uhrzeit fragen, sie nennen und Tätigkeiten zeitlich einordnen.",
      vocab: [
        { vi: "giờ", de: "Uhr (Uhrzeit); Stunde", pos: "N", emoji: "🕖", ex: { vi: "Bây giờ là bảy giờ.", de: "Jetzt ist es sieben Uhr." } },
        { vi: "phút", de: "Minute", pos: "N", ex: { vi: "Bảy giờ mười phút.", de: "Sieben Uhr zehn." } },
        { vi: "rưỡi", de: "halb (… und eine halbe)", pos: "Num", note: "Steht nach der Stunde: bảy giờ rưỡi = 7:30 (nicht „halb sieben“!).", ex: { vi: "Bây giờ là sáu giờ rưỡi.", de: "Jetzt ist es halb sieben (6:30)." } },
        { vi: "kém", de: "vor (bei Uhrzeit: weniger)", pos: "V", south: "thiếu", ex: { vi: "Chín giờ kém mười lăm.", de: "Viertel vor neun (8:45)." } },
        { vi: "mấy giờ", de: "wie viel Uhr; um wie viel Uhr", pos: "QW", ex: { vi: "Bây giờ là mấy giờ?", de: "Wie spät ist es jetzt?" } },
        { vi: "bây giờ", de: "jetzt", pos: "Adv", ex: { vi: "Bây giờ là tám giờ tối.", de: "Jetzt ist es acht Uhr abends." } },
        { vi: "Mấy giờ rồi?", de: "Wie spät ist es (schon)?", pos: "Phr", note: "Feste Formel; rồi wird in K08 erklärt.", ex: { vi: "Mấy giờ rồi? – Mười giờ.", de: "Wie spät ist es? – Zehn Uhr." } },
        { vi: "đúng", de: "genau, pünktlich (Punkt …)", pos: "Adj", ex: { vi: "Bây giờ là đúng chín giờ.", de: "Jetzt ist es Punkt neun." } },
        { vi: "lúc", de: "um (Zeitpunkt)", pos: "Präp", note: "lúc ist eigentlich ein Nomen „Zeitpunkt“.", ex: { vi: "Tàu đi lúc chín giờ tối.", de: "Der Zug fährt um neun Uhr abends." } },
        { vi: "khoảng", de: "ungefähr, etwa", pos: "Adv", ex: { vi: "Khoảng mười giờ.", de: "Etwa zehn Uhr." } },
        { vi: "sáng", de: "Morgen, Vormittag (ca. 4–11 Uhr)", pos: "N", emoji: "🌅", ex: { vi: "Sáu giờ sáng, tôi uống cà phê.", de: "Um sechs Uhr morgens trinke ich Kaffee." } },
        { vi: "trưa", de: "Mittag (ca. 11–13 Uhr)", pos: "N", emoji: "☀️", ex: { vi: "Mười hai giờ trưa, chúng tôi ăn cơm.", de: "Um zwölf Uhr mittags essen wir." } },
        { vi: "chiều", de: "Nachmittag (ca. 13–18 Uhr)", pos: "N", emoji: "🌤️", ex: { vi: "Bây giờ là ba giờ chiều.", de: "Jetzt ist es drei Uhr nachmittags." } },
        { vi: "tối", de: "Abend (ca. 18–22 Uhr)", pos: "N", emoji: "🌆", ex: { vi: "Bảy giờ tối, chúng ta ăn cơm.", de: "Um sieben Uhr abends essen wir." } },
        { vi: "tàu", de: "Zug (auch: Schiff)", pos: "N", emoji: "🚆", ex: { vi: "Tàu đi lúc mấy giờ?", de: "Um wie viel Uhr fährt der Zug?" } },
        { vi: "ăn", de: "essen", pos: "V", emoji: "🍚", note: "ăn cơm = (eine Mahlzeit) essen, wörtlich „Reis essen“.", ex: { vi: "Mấy giờ chúng ta ăn trưa?", de: "Um wie viel Uhr essen wir zu Mittag?" } }
      ],
      grammar: [
        {
          id: "g-k03-uhrzeit",
          title: "Die Uhrzeit angeben",
          term: "Zeitangabe: Num + giờ (+ Num + phút)",
          pattern: "Num + giờ + (Num + phút / rưỡi / kém + Num) + (Tageszeit)",
          text: `Die Uhrzeit ist eine einfache Nominalphrase: **Zahl + \`giờ\`**, danach optional die Minuten (+ \`phút\`) und die Tageszeit. Gefragt wird mit \`mấy giờ\`, weil die Antwort aus einer kleinen, geschlossenen Menge kommt (1–12):

- \`Bây giờ là mấy giờ?\` – \`Bây giờ là bảy giờ.\`
- \`bảy giờ mười (phút)\` = 7:10
- \`bảy giờ rưỡi\` = 7:30 – \`rưỡi\` heißt „und eine halbe“ und **folgt** der Stunde.
- \`tám giờ kém mười lăm\` = 7:45 – \`kém\` bedeutet „fehlen, weniger sein“: „acht Uhr, es fehlen fünfzehn“.
- \`đúng chín giờ\` = Punkt neun.

Im Alltag zählt man im **12-Stunden-System** und präzisiert mit der Tageszeit, die **nach** der Uhrzeit steht: \`hai giờ chiều\` (14 Uhr), \`tám giờ tối\` (20 Uhr), \`mười hai giờ trưa\` (12 Uhr mittags). Das 24-Stunden-System (\`mười bốn giờ\`) gibt es in Fahrplänen und Behörden.

Achtung Mehrdeutigkeit: \`hai giờ\` ist „zwei Uhr“, kann aber auch „zwei Stunden“ heißen. Im Norden sagt man für die Dauer deshalb meist \`hai tiếng\`.

\`rưỡi\` funktioniert auch bei anderen Einheiten: \`hai nghìn rưỡi\` = 2.500.`,
          table: {
            head: ["Uhrzeit", "Nord", "Süd"],
            rows: [
              ["7:00", "bảy giờ (đúng)", "bảy giờ"],
              ["7:15", "bảy giờ mười lăm", "bảy giờ mười lăm"],
              ["7:30", "bảy giờ rưỡi", "bảy giờ rưỡi"],
              ["7:45", "tám giờ kém mười lăm", "tám giờ thiếu mười lăm / bảy giờ bốn mươi lăm"],
              ["20:00", "tám giờ tối", "tám giờ tối"]
            ]
          },
          examples: [
            { vi: "Bây giờ là mấy giờ?", de: "Wie spät ist es jetzt?", gloss: "jetzt | sein | wie_viel | Uhr" },
            { vi: "Bây giờ là chín giờ mười lăm.", de: "Jetzt ist es Viertel nach neun." },
            { vi: "Bảy giờ rưỡi sáng.", de: "Halb acht morgens (7:30)." },
            { vi: "Mười giờ kém năm.", de: "Fünf vor zehn (9:55).", gloss: "zehn | Uhr | fehlen | fünf" }
          ],
          contrast: "Deutsches „halb acht“ meint 7:30 – also die halbe Stunde *vor* acht. `tám giờ rưỡi` ist dagegen 8:30: „acht Uhr und eine halbe“. Diese Falle kostet deutsche Lernende manchen verpassten Bus!",
          south: "Süd: thiếu statt kém (tám giờ thiếu mười lăm); häufig auch einfach bảy giờ bốn mươi lăm."
        },
        {
          id: "g-k03-zeit-topik",
          title: "Zeitangaben am Satzanfang",
          term: "Topikalisierung von Zeitadverbialen",
          pattern: "Zeitangabe, + S + V (+ O)  |  S + V (+ O) + lúc + Zeit",
          text: `Eine Zeitangabe steht im Vietnamesischen bevorzugt **am Satzanfang** – als **Topik**, das den zeitlichen Rahmen für den folgenden Kommentar setzt. Der Rest des Satzes behält seine normale Wortstellung Subjekt – Verb – Objekt:

- \`Bảy giờ sáng, tôi uống cà phê.\` – „Sieben Uhr morgens: Ich trinke Kaffee.“

Alternativ kann der Zeitpunkt mit \`lúc\` („Zeitpunkt“, hier wie „um“) **ans Satzende** treten:

- \`Tôi uống cà phê lúc bảy giờ sáng.\`

Die erste Variante rahmt den ganzen Satz („Was passiert um sieben?“), die zweite liefert die Uhrzeit als neue Information („Wann trinkst du Kaffee?“). Am Satzanfang kann \`lúc\` stehen oder wegfallen.

Auch die Frage folgt diesem Muster, das Fragewort bleibt in situ:

- \`Mấy giờ chúng ta ăn trưa?\` – \`Mười hai giờ trưa.\`
- \`Tàu đi lúc mấy giờ?\` – \`Lúc chín giờ tối.\`

Die Tageszeitwörter \`sáng\`, \`trưa\`, \`chiều\`, \`tối\`, \`đêm\` sind Nomen. Mit Verben wie \`ăn\` bilden sie feste Verbindungen: \`ăn sáng\` (frühstücken), \`ăn trưa\` (zu Mittag essen), \`ăn tối\` (zu Abend essen).`,
          examples: [
            { vi: "Bảy giờ sáng, tôi uống cà phê.", de: "Um sieben Uhr morgens trinke ich Kaffee.", gloss: "sieben | Uhr | Morgen | ich | trinken | Kaffee" },
            { vi: "Tôi uống cà phê lúc bảy giờ sáng.", de: "Ich trinke um sieben Uhr morgens Kaffee." },
            { vi: "Mấy giờ chúng ta ăn trưa?", de: "Um wie viel Uhr essen wir zu Mittag?" },
            { vi: "Tàu đi lúc chín giờ tối.", de: "Der Zug fährt um neun Uhr abends." }
          ],
          contrast: "Im Deutschen löst eine Zeitangabe am Satzanfang Inversion aus (Verbzweitstellung: „Um sieben *trinke ich* …“). Im Vietnamesischen gibt es keine Inversion: Nach dem Zeit-Topik folgt unverändert `tôi uống`."
        }
      ],
      dialogue: {
        setting: "Früh am Morgen im Homestay. Jonas und Linh planen mit ihrem Hmong-Wanderführer Anh Sử die Tour durch die Reisterrassen.",
        lines: [
          { who: "Jonas", vi: "Anh Sử, bây giờ là mấy giờ?", de: "Sử, wie spät ist es jetzt?" },
          { who: "Sử", vi: "Bây giờ là sáu giờ rưỡi.", de: "Es ist halb sieben (6:30)." },
          { who: "Jonas", vi: "Sáu giờ rưỡi sáng! Chúng ta đi lúc mấy giờ?", de: "Halb sieben morgens! Um wie viel Uhr gehen wir los?" },
          { who: "Sử", vi: "Bảy giờ kém mười lăm.", de: "Um Viertel vor sieben." },
          { who: "Linh", vi: "Mấy giờ chúng ta ăn trưa?", de: "Um wie viel Uhr essen wir zu Mittag?" },
          { who: "Sử", vi: "Khoảng mười hai giờ trưa.", de: "Ungefähr um zwölf Uhr mittags." },
          { who: "Jonas", vi: "Tối, mấy giờ chúng ta ăn cơm?", de: "Und abends, um wie viel Uhr essen wir?" },
          { who: "Sử", vi: "Bảy giờ tối. Đúng bảy giờ!", de: "Um sieben Uhr abends. Pünktlich um sieben!" },
          { who: "Jonas", vi: "Vâng. Cảm ơn anh Sử.", de: "Alles klar. Danke, Sử." }
        ]
      },
      exercises: [
        { type: "gap", vi: "7:30 = bảy giờ ___", de: "halb acht (7:30)", options: ["rưỡi", "kém", "đúng"], answer: "rưỡi", explain: "rưỡi = „und eine halbe“ und folgt der Stunde: bảy giờ rưỡi = 7:30." },
        { type: "gap", vi: "8:45 = chín giờ ___ mười lăm", de: "Viertel vor neun", options: ["kém", "rưỡi", "phút"], answer: "kém", explain: "kém = „es fehlen“: neun Uhr weniger fünfzehn. Süd: thiếu." },
        { type: "gap", vi: "20:00 = tám giờ ___", de: "acht Uhr abends", options: ["tối", "sáng", "trưa"], answer: "tối", explain: "Im 12-Stunden-System präzisiert die nachgestellte Tageszeit: tối = Abend." },
        { type: "gap", vi: "Bây giờ là ___ giờ?", de: "Wie spät ist es jetzt?", options: ["mấy", "bao nhiêu", "gì"], answer: "mấy", explain: "Uhrzeiten kommen aus einer kleinen, geschlossenen Menge – daher mấy giờ. bao nhiêu giờ fragt eher nach einer Dauer." },
        { type: "build", vi: "Bây giờ là bảy giờ rưỡi.", de: "Jetzt ist es halb acht (7:30).", extra: ["kém", "mấy"] },
        { type: "build", vi: "Sáu giờ sáng, tôi uống cà phê.", de: "Um sechs Uhr morgens trinke ich Kaffee.", extra: ["tối", "kém"] },
        { type: "build", vi: "Tàu đi lúc chín giờ tối.", de: "Der Zug fährt um neun Uhr abends.", extra: ["sáng", "mấy"] },
        { type: "translate", de: "Wie spät ist es jetzt?", answers: ["Bây giờ là mấy giờ?", "Bây giờ mấy giờ?", "Mấy giờ rồi?", "Bây giờ là mấy giờ rồi?", "Bây giờ mấy giờ rồi?"] },
        { type: "translate", de: "Es ist Viertel nach neun (9:15).", answers: ["Bây giờ là chín giờ mười lăm.", "Chín giờ mười lăm.", "Bây giờ là chín giờ mười lăm phút.", "Chín giờ mười lăm phút.", "Bây giờ chín giờ mười lăm."] },
        { type: "translate", de: "Um sieben Uhr morgens trinke ich Kaffee.", answers: ["Bảy giờ sáng, tôi uống cà phê.", "Bảy giờ sáng tôi uống cà phê.", "Lúc bảy giờ sáng, tôi uống cà phê.", "Lúc bảy giờ sáng tôi uống cà phê.", "Tôi uống cà phê lúc bảy giờ sáng."] },
        { type: "mc", q: "Was bedeutet `hai giờ chiều`?", options: ["14:00", "2:00", "12:00"], answer: 0, explain: "chiều = Nachmittag; zwei Uhr nachmittags = 14 Uhr." },
        { type: "mc", q: "Wie sagt man 6:55 im Norden?", options: ["bảy giờ kém năm", "sáu giờ kém năm", "bảy giờ thiếu năm"], answer: 0, explain: "„Sieben Uhr, es fehlen fünf“. thiếu ist die südliche Variante." },
        { type: "listen", vi: "Tàu đi lúc tám giờ kém mười lăm.", de: "Der Zug fährt um Viertel vor acht." },
        { type: "speak", vi: "Bây giờ là mấy giờ?", de: "Wie spät ist es jetzt?" },
        { type: "pairs", pairs: [["sáng", "Morgen"], ["trưa", "Mittag"], ["chiều", "Nachmittag"], ["tối", "Abend"], ["đêm", "Nacht"]] }
      ]
    },

    // ───────────────────────── k03l4 ─────────────────────────
    {
      id: "k03l4",
      title: "Wochentage & Datum",
      goal: "Du kannst Wochentage und Daten nennen und erfragen sowie über heute, gestern und morgen sprechen.",
      vocab: [
        { vi: "thứ", de: "Rang; Ordinalpräfix (der …te)", pos: "N", note: "thứ + Zahl = Ordinalzahl bzw. Wochentag.", ex: { vi: "Hôm nay là thứ ba.", de: "Heute ist Dienstag." } },
        { vi: "thứ hai", de: "Montag", pos: "N", note: "Wörtlich „der zweite (Tag)“ – der Sonntag gilt als erster.", ex: { vi: "Hôm qua là thứ hai.", de: "Gestern war Montag." } },
        { vi: "chủ nhật", de: "Sonntag", pos: "N", note: "Sinovietnamesisch „Tag des Herrn“.", ex: { vi: "Ngày mai là chủ nhật.", de: "Morgen ist Sonntag." } },
        { vi: "thứ mấy", de: "welcher Wochentag", pos: "QW", ex: { vi: "Hôm nay là thứ mấy?", de: "Welcher Wochentag ist heute?" } },
        { vi: "thứ nhất", de: "der/die/das erste", pos: "Num", note: "Unregelmäßig: nicht *thứ một. Ebenso thứ tư (vierte), nicht *thứ bốn.", ex: { vi: "Ngày thứ nhất là thứ sáu.", de: "Der erste Tag ist Freitag." } },
        { vi: "ngày", de: "Tag; Datum", pos: "N", emoji: "📅", ex: { vi: "Hôm nay là ngày bao nhiêu?", de: "Den Wievielten haben wir heute?" } },
        { vi: "mồng", de: "Präfix für die Tage 1–10 des Monats", pos: "N", south: "mùng", ex: { vi: "Ngày mai là mồng một.", de: "Morgen ist der Erste." } },
        { vi: "tháng", de: "Monat", pos: "N", ex: { vi: "Hôm nay là ngày mười hai tháng mười một.", de: "Heute ist der 12. November." } },
        { vi: "năm", de: "Jahr", pos: "N", note: "Homonym zu năm „fünf“.", ex: { vi: "Năm nay là năm hai nghìn không trăm hai mươi sáu.", de: "Dieses Jahr ist 2026." } },
        { vi: "hôm nay", de: "heute", pos: "N", ex: { vi: "Hôm nay là thứ năm.", de: "Heute ist Donnerstag." } },
        { vi: "hôm qua", de: "gestern", pos: "N", ex: { vi: "Hôm qua là thứ tư.", de: "Gestern war Mittwoch." } },
        { vi: "ngày mai", de: "morgen", pos: "N", ex: { vi: "Ngày mai là thứ sáu.", de: "Morgen ist Freitag." } },
        { vi: "tuần", de: "Woche", pos: "N", ex: { vi: "Một tuần là bảy ngày.", de: "Eine Woche hat sieben Tage." } },
        { vi: "tháng Giêng", de: "erster Mondmonat (auch: Januar)", pos: "N", emoji: "🧧", note: "Traditioneller Name; der Sonnenkalender-Januar heißt meist tháng một.", ex: { vi: "Tết là ngày mồng một tháng Giêng.", de: "Tết ist der 1. Tag des ersten Mondmonats." } },
        { vi: "tháng Chạp", de: "zwölfter Mondmonat", pos: "N", note: "Monat der Tết-Vorbereitungen.", ex: { vi: "Tháng Chạp là tháng mười hai.", de: "Tháng Chạp ist der zwölfte Monat." } },
        { vi: "đặt", de: "buchen, reservieren", pos: "V", note: "đặt phòng = ein Zimmer buchen.", ex: { vi: "Hôm nay, chúng tôi đặt phòng.", de: "Heute buchen wir ein Zimmer." } }
      ],
      grammar: [
        {
          id: "g-k03-thu-ordinal",
          title: "thứ: Ordinalzahlen und Wochentage",
          term: "Ordinalbildung mit Präfixnomen thứ",
          pattern: "thứ + Num",
          text: `Ordinalzahlen entstehen, indem man das Nomen \`thứ\` („Rang, Reihenfolge“) **vor** die Kardinalzahl setzt: \`thứ hai\` = „der zweite“, \`thứ ba\` = „der dritte“. Zwei Formen sind unregelmäßig, weil hier sinovietnamesische Zahlwörter erhalten sind: \`thứ nhất\` (der erste, nicht *thứ một) und \`thứ tư\` (der vierte, nicht *thứ bốn).

Die **Wochentage** sind genau diese Ordinalzahlen – gezählt ab Sonntag als erstem Tag. Darum heißt Montag \`thứ hai\` („zweiter Tag“) und Samstag \`thứ bảy\` („siebter Tag“). Der Sonntag selbst hat einen eigenen sinovietnamesischen Namen: \`chủ nhật\` („Tag des Herrn“), eine Lehnübersetzung aus der Missionszeit.

Gefragt wird mit \`thứ mấy\` (\`mấy\`, weil die Auswahl klein ist): \`Hôm nay là thứ mấy?\` – \`Hôm nay là thứ năm.\`

**Wortstellung ist Bedeutung**: Steht die Zahl *nach* einem Zeitnomen, bezeichnet sie einen Namen oder Rang; steht sie *davor*, zählt sie eine Menge (Num + N, siehe Lektion 2):

- \`tháng hai\` = Februar ↔ \`hai tháng\` = zwei Monate
- \`thứ ba\` = Dienstag ↔ \`ba ngày\` = drei Tage

Ausnahme: Bei der Uhrzeit steht die Zahl vorn (\`hai giờ\` = zwei Uhr).`,
          table: {
            head: ["Vietnamesisch", "wörtlich", "Deutsch"],
            rows: [
              ["thứ hai", "zweiter", "Montag"],
              ["thứ ba", "dritter", "Dienstag"],
              ["thứ tư", "vierter", "Mittwoch"],
              ["thứ năm", "fünfter", "Donnerstag"],
              ["thứ sáu", "sechster", "Freitag"],
              ["thứ bảy", "siebter", "Samstag"],
              ["chủ nhật", "Tag des Herrn", "Sonntag"]
            ]
          },
          examples: [
            { vi: "Hôm nay là thứ mấy?", de: "Welcher Wochentag ist heute?", gloss: "heute | sein | Rang | wie_viel" },
            { vi: "Hôm nay là thứ tư.", de: "Heute ist Mittwoch." },
            { vi: "Ngày thứ nhất là chủ nhật.", de: "Der erste Tag ist Sonntag." },
            { vi: "Tháng hai không phải là hai tháng.", de: "„Februar“ ist nicht „zwei Monate“." }
          ],
          contrast: "Deutsche Wochentage tragen Götter- und Planetennamen (Donnerstag = Donars Tag); vietnamesische sind schlicht durchnummeriert. Deutsch bildet Ordinalzahlen mit Suffix (zwei → zwei-te), Vietnamesisch mit dem vorangestellten Nomen thứ."
        },
        {
          id: "g-k03-datum",
          title: "Das Datum: vom Kleinen zum Großen",
          term: "Datumsreihenfolge Tag – Monat – Jahr; deiktische Zeitnomina",
          pattern: "(Wochentag,) ngày + Num + tháng + Num + năm + Num",
          text: `Ein vollständiges Datum wird **vom Kleinen zum Großen** aufgebaut, jede Einheit als Nomen + Zahl:

\`thứ năm, ngày mười hai tháng mười một năm hai nghìn không trăm hai mươi sáu\` – Donnerstag, 12. November 2026.

- **Tage 1–10** erhalten das Präfix \`mồng\` (Süd \`mùng\`): \`mồng một\`, \`mồng mười\`. Ab dem 11. sagt man \`ngày mười một\`. Das \`ngày\` kann vor \`mồng\` stehen oder wegfallen.
- **Monate** werden gezählt: \`tháng một\` … \`tháng mười hai\`; April ist \`tháng tư\`. Im Mondkalender heißen der erste und zwölfte Monat traditionell \`tháng Giêng\` und \`tháng Chạp\` – Tết fällt auf \`mồng một tháng Giêng\`.
- **Jahre**: \`năm hai nghìn không trăm hai mươi sáu\`; im Alltag kürzer \`năm hai nghìn hai mươi sáu\` oder ziffernweise \`năm hai không hai sáu\`.

Gefragt wird mit \`Hôm nay là ngày bao nhiêu?\` (Nord) oder \`ngày mấy?\`.

Die **deiktischen Zeitnomina** \`hôm nay\` (heute), \`hôm qua\` (gestern), \`ngày mai\` (morgen) sind Nomen; sie stehen als Subjekt (\`Hôm nay là thứ năm.\`) oder als Topik am Satzanfang (\`Ngày mai, chúng ta đặt phòng.\`). Ein Tempus braucht der Satz nicht: \`Hôm qua là thứ tư.\` = „Gestern *war* Mittwoch“ – die Vergangenheit ergibt sich allein aus \`hôm qua\`.`,
          table: {
            head: ["Datum", "Vietnamesisch"],
            rows: [
              ["1. Januar", "mồng một tháng một"],
              ["10. April", "mồng mười tháng tư"],
              ["15. November", "ngày mười lăm tháng mười một"],
              ["2. September 1945", "ngày mồng hai tháng chín năm một nghìn chín trăm bốn mươi lăm"]
            ]
          },
          examples: [
            { vi: "Hôm nay là ngày bao nhiêu?", de: "Den Wievielten haben wir heute?" },
            { vi: "Hôm nay là ngày mười hai tháng mười một.", de: "Heute ist der 12. November.", gloss: "heute | sein | Tag | zehn | zwei | Monat | zehn | eins" },
            { vi: "Hôm qua là mồng mười.", de: "Gestern war der Zehnte." },
            { vi: "Ngày mai là thứ sáu, ngày mười ba.", de: "Morgen ist Freitag, der 13." }
          ],
          contrast: "Die Reihenfolge Tag – Monat – Jahr ist dieselbe wie im Deutschen (anders als im Englischen). Aber Deutsch braucht ein Tempus („war“, „ist“), Vietnamesisch nicht: Das Zeitnomen allein verankert die Aussage zeitlich.",
          south: "Süd: mùng statt mồng; die Frage lautet meist „Hôm nay là ngày mấy?“."
        }
      ],
      dialogue: {
        setting: "Abends in Sa Pa. Jonas und Linh sitzen am Kamin und klären, welcher Tag eigentlich ist.",
        lines: [
          { who: "Linh", vi: "Anh Jonas, hôm nay là thứ mấy?", de: "Jonas, welcher Wochentag ist heute?" },
          { who: "Jonas", vi: "Hôm nay là thứ tư.", de: "Heute ist Mittwoch." },
          { who: "Linh", vi: "Không phải. Hôm qua là thứ tư. Hôm nay là thứ năm!", de: "Nein. Gestern war Mittwoch. Heute ist Donnerstag!" },
          { who: "Jonas", vi: "À, vâng. Hôm nay là ngày bao nhiêu?", de: "Ah, stimmt. Und den Wievielten haben wir heute?" },
          { who: "Linh", vi: "Hôm nay là ngày mười hai tháng mười một.", de: "Heute ist der 12. November." },
          { who: "Jonas", vi: "Ngày mai là thứ sáu, ngày mười ba!", de: "Morgen ist Freitag, der Dreizehnte!" },
          { who: "Linh", vi: "Không sao, anh. Hôm nay, chúng ta đặt phòng homestay.", de: "Macht nichts. Heute buchen wir das Homestay-Zimmer." },
          { who: "Jonas", vi: "Vâng. Thứ sáu, thứ bảy – hai đêm.", de: "Okay. Freitag und Samstag – zwei Nächte." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Montag = ___ hai", de: "Montag", options: ["thứ", "ngày", "tháng"], answer: "thứ", explain: "Wochentage sind Ordinalzahlen mit thứ: thứ hai = „der zweite (Tag)“. tháng hai wäre Februar." },
        { type: "gap", vi: "Mittwoch = thứ ___", de: "Mittwoch", options: ["tư", "bốn", "ba"], answer: "tư", explain: "Der vierte heißt thứ tư (sinovietnamesisch), nicht *thứ bốn." },
        { type: "gap", vi: "der 5. = ___ năm", de: "der Fünfte (Tag des Monats)", options: ["mồng", "thứ", "tháng"], answer: "mồng", explain: "Die Monatstage 1–10 bekommen das Präfix mồng (Süd mùng). thứ năm wäre Donnerstag, tháng năm Mai." },
        { type: "gap", vi: "Sonntag = ___", de: "Sonntag", options: ["chủ nhật", "thứ một", "thứ tám"], answer: "chủ nhật", explain: "Der Sonntag hat einen eigenen Namen. Er gilt als erster Tag – darum ist Montag thứ hai." },
        { type: "gap", vi: "der Erste = thứ ___", de: "der Erste (Ordinalzahl)", options: ["nhất", "một", "mốt"], answer: "nhất", explain: "Unregelmäßig: thứ nhất. *thứ một gibt es nicht." },
        { type: "build", vi: "Hôm nay là thứ năm.", de: "Heute ist Donnerstag.", extra: ["tháng", "mấy"] },
        { type: "build", vi: "Ngày mai là ngày mười ba tháng mười một.", de: "Morgen ist der 13. November.", extra: ["thứ"] },
        { type: "build", vi: "Hôm qua là chủ_nhật.", de: "Gestern war Sonntag.", extra: ["thứ", "mai"] },
        { type: "translate", de: "Heute ist Samstag.", answers: ["Hôm nay là thứ bảy.", "Hôm nay thứ bảy."] },
        { type: "translate", de: "der 2. September 1945", answers: ["ngày mồng hai tháng chín năm một nghìn chín trăm bốn mươi lăm", "ngày mùng hai tháng chín năm một nghìn chín trăm bốn mươi lăm", "mồng hai tháng chín năm một nghìn chín trăm bốn mươi lăm", "mùng hai tháng chín năm một nghìn chín trăm bốn mươi lăm", "ngày hai tháng chín năm một nghìn chín trăm bốn mươi lăm"] },
        { type: "mc", q: "Was bedeuten `hai tháng` und `tháng hai`?", options: ["zwei Monate / Februar", "Februar / zwei Monate", "beides: Februar"], answer: 0, explain: "Zahl vor dem Nomen = Menge (Num + N), Zahl nach dem Nomen = Name/Rang." },
        { type: "mc", q: "Welcher Tag ist `thứ hai`?", options: ["Montag", "Dienstag", "Sonntag"], answer: 0, explain: "Gezählt wird ab Sonntag (chủ nhật) als erstem Tag – Montag ist der zweite." },
        { type: "listen", vi: "Ngày mai là thứ sáu, ngày mười ba.", de: "Morgen ist Freitag, der 13." },
        { type: "speak", vi: "Hôm nay là ngày bao nhiêu?", de: "Den Wievielten haben wir heute?" },
        { type: "pairs", pairs: [["thứ hai", "Montag"], ["thứ tư", "Mittwoch"], ["thứ bảy", "Samstag"], ["chủ nhật", "Sonntag"], ["hôm qua", "gestern"], ["ngày mai", "morgen"]] }
      ]
    }
  ],

  boss: {
    title: "Homestay in Tả Van",
    npc: "Chị Mỷ",
    role: "Hmong-Gastgeberin eines Homestays",
    setting: "Donnerstagabend, 12. November. Jonas ruft im Homestay von Chị Mỷ im Dorf Tả Van an, um ab morgen ein Zimmer für sich und Linh zu buchen. Er muss Nächte, Datum, Personen, Preis und Essenszeit klären.",
    turns: [
      {
        npc: { vi: "Chào anh! Anh đặt phòng mấy đêm?", de: "Hallo! Für wie viele Nächte möchtest du buchen?" },
        prompt: "Sag: zwei Nächte.",
        choices: [
          { vi: "Hai đêm ạ.", ok: true, fb: "Richtig – Num + N, und ạ macht es höflich." },
          { vi: "Đêm hai ạ.", ok: false, fb: "Nomen + Zahl bezeichnet einen Rang („die zweite Nacht“). Für eine Menge steht die Zahl vorn: hai đêm." },
          { vi: "Hai mươi đêm ạ.", ok: false, fb: "hai mươi = 20 – du hättest zwanzig Nächte gebucht!" }
        ]
      },
      {
        npc: { vi: "Anh đặt ngày nào?", de: "Ab welchem Tag?" },
        prompt: "Ab morgen: Freitag, 13. November.",
        choices: [
          { vi: "Thứ sáu, ngày mười ba tháng mười một ạ.", ok: true, fb: "Perfekt: Wochentag, dann Tag – Monat, vom Kleinen zum Großen." },
          { vi: "Tháng mười một, ngày mười ba, thứ sáu ạ.", ok: false, fb: "Die Reihenfolge ist vom Kleinen zum Großen: ngày … tháng … – nicht umgekehrt." },
          { vi: "Thứ sáu, mười ba ngày tháng mười một ạ.", ok: false, fb: "mười ba ngày = „dreizehn Tage“ (Num + N). Das Datum heißt ngày mười ba." }
        ]
      },
      {
        npc: { vi: "Mấy người ạ?", de: "Wie viele Personen?" },
        prompt: "Antworte: zwei Personen.",
        choices: [
          { vi: "Hai người ạ.", ok: true, fb: "Richtig – người wird direkt gezählt." },
          { vi: "Người hai ạ.", ok: false, fb: "Bei Mengenangaben steht die Zahl vor dem Nomen: hai người." },
          { vi: "Tôi là hai người ạ.", ok: false, fb: "„Ich bin zwei Personen“ – mit tôi sprichst du nur von dir. Richtig ist kurz: Hai người ạ." }
        ]
      },
      {
        npc: { vi: "Vâng, hai người, hai đêm.", de: "Gut, zwei Personen, zwei Nächte." },
        prompt: "Frag nach dem Preis pro Nacht.",
        choices: [
          { vi: "Một đêm bao nhiêu tiền ạ?", ok: true, fb: "Genau – Topik „eine Nacht“, Fragewort bao nhiêu in situ." },
          { vi: "Một đêm là mấy giờ ạ?", ok: false, fb: "mấy giờ fragt nach der Uhrzeit, nicht nach dem Preis." },
          { vi: "Bao nhiêu một đêm tiền ạ?", ok: false, fb: "bao nhiêu tiền gehört zusammen: Một đêm bao nhiêu tiền? (oder: Bao nhiêu tiền một đêm?)" }
        ]
      },
      {
        npc: { vi: "Một đêm bốn trăm năm mươi nghìn đồng.", de: "Eine Nacht kostet 450.000 Đồng." },
        prompt: "Rechne nach und frag zur Sicherheit: Insgesamt 900.000, richtig?",
        choices: [
          { vi: "Tất cả là chín trăm nghìn đồng, phải không chị?", ok: true, fb: "Richtig gerechnet: 2 × 450.000 = 900.000." },
          { vi: "Tất cả là chín mươi nghìn đồng, phải không chị?", ok: false, fb: "chín mươi nghìn = 90.000. Du brauchst trăm: chín trăm nghìn." },
          { vi: "Tất cả là chín nghìn đồng, phải không chị?", ok: false, fb: "chín nghìn = 9.000 – da fehlen zwei Stellen: chín trăm nghìn." }
        ]
      },
      {
        npc: { vi: "Vâng. Ngày mai, anh chị ăn tối lúc mấy giờ?", de: "Ja. Um wie viel Uhr wollt ihr morgen zu Abend essen?" },
        prompt: "Sag: um halb sieben abends (18:30).",
        choices: [
          { vi: "Sáu giờ rưỡi tối ạ.", ok: true, fb: "Richtig: sechs Uhr und eine halbe, abends." },
          { vi: "Sáu giờ rưỡi sáng ạ.", ok: false, fb: "sáng = morgens. Zum Abendessen brauchst du tối." },
          { vi: "Bảy giờ rưỡi tối ạ.", ok: false, fb: "Typische Falle: Deutsches „halb sieben“ ist 6:30 = sáu giờ rưỡi. Bảy giờ rưỡi wäre 7:30." }
        ]
      },
      {
        npc: { vi: "Vậy chủ nhật anh chị trả phòng, phải không?", de: "Dann checkt ihr am Sonntag aus, richtig?" },
        prompt: "Bestätige: Ja, Sonntag, den 15.",
        choices: [
          { vi: "Vâng, chủ nhật, ngày mười lăm ạ.", ok: true, fb: "Richtig – nach mười wird năm zu lăm." },
          { vi: "Vâng, chủ nhật, ngày mười năm ạ.", ok: false, fb: "Nach mười heißt die Fünf lăm: mười lăm. mười năm klingt wie „zehn Jahre“." },
          { vi: "Vâng, thứ một, ngày mười lăm ạ.", ok: false, fb: "*thứ một gibt es nicht. Sonntag heißt chủ nhật." }
        ]
      }
    ],
    win: { vi: "Cảm ơn anh! Hẹn gặp anh chị ngày mai.", de: "Danke! Bis morgen, ihr beiden." }
  }
});
