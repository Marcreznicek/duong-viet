/* Kapitel 2 – Hanoier Altstadt: Begrüßen & Vorstellen. */
VN.addChapter({
  id: "k02",
  place: "Phố cổ Hà Nội",
  region: "Nordvietnam",
  title: "Begrüßen & Vorstellen",
  intro: "In den engen Gassen der Hanoier Altstadt beziehen Jonas und Linh ihr Gästehaus. Hier lernst du, Menschen mit dem passenden Verwandtschaftsterm anzusprechen, dich und deine Herkunft vorzustellen, nach dem Befinden zu fragen und einfache Fragen mit gì, ai, đâu und nào zu stellen. Am Ende wartet Chị Hương in ihrem Café.",
  lessons: [
    /* ───────────────────────── k02l1 ───────────────────────── */
    {
      id: "k02l1",
      title: "Anrede durch Verwandtschaftstermini",
      goal: "Du wählst die passende Anrede nach Alter und Geschlecht und grüßt höflich mit chào und ạ.",
      vocab: [
        { vi: "tôi", de: "ich (neutral, distanziert)", pos: "Pron", emoji: "🙋", note: "Sachlich-neutral; unter Fremden und im Formellen. Gegenüber Familie und Älteren wirkt es kühl.", ex: { vi: "Tôi xin lỗi.", de: "Ich entschuldige mich." } },
        { vi: "anh", de: "älterer Bruder; du/Sie (zu einem etwas älteren oder gleichaltrigen Mann)", pos: "Pron", emoji: "👨", ex: { vi: "Chào anh!", de: "Hallo! (zu einem jungen Mann)" } },
        { vi: "chị", de: "ältere Schwester; du/Sie (zu einer etwas älteren oder gleichaltrigen Frau)", pos: "Pron", emoji: "👩", ex: { vi: "Chào chị ạ!", de: "Guten Tag! (höflich, zu einer etwas älteren Frau)" } },
        { vi: "em", de: "jüngeres Geschwister; du (zu Jüngeren); ich (gegenüber etwas Älteren)", pos: "Pron", emoji: "🧒", ex: { vi: "Em chào chị ạ.", de: "Guten Tag! (Jüngere/r zu einer etwas älteren Frau)" } },
        { vi: "ông", de: "Großvater; Sie (zu einem alten Herrn)", pos: "Pron", emoji: "👴", ex: { vi: "Cháu chào ông ạ.", de: "Guten Tag! (zu einem alten Herrn)" } },
        { vi: "bà", de: "Großmutter; Sie (zu einer alten Dame)", pos: "Pron", emoji: "👵", ex: { vi: "Cảm ơn bà ạ.", de: "Danke! (zu einer alten Dame)" } },
        { vi: "cô", de: "Tante (Schwester des Vaters); Sie (zu einer Frau der Elterngeneration, jünger als die Eltern); Lehrerin", pos: "Pron", emoji: "👩‍🏫", ex: { vi: "Cháu chào cô ạ.", de: "Guten Tag! (zu einer Frau etwa im Alter der Eltern)" } },
        { vi: "chú", de: "Onkel (jüngerer Bruder des Vaters); Sie (zu einem Mann der Elterngeneration)", pos: "Pron", emoji: "🧔", ex: { vi: "Cảm ơn chú ạ.", de: "Danke! (zu einem Mann etwa im Alter der Eltern)" } },
        { vi: "bác", de: "älteres Geschwister der Eltern; Sie (zu Menschen, die älter als die eigenen Eltern sind)", pos: "Pron", emoji: "🧓", ex: { vi: "Cháu chào bác ạ.", de: "Guten Tag! (zu jemandem, der älter ist als die eigenen Eltern)" } },
        { vi: "bạn", de: "Freund/in; du (zu Gleichaltrigen, neutral)", pos: "Pron", emoji: "🤝", ex: { vi: "Chào bạn!", de: "Hallo! (zu Gleichaltrigen)" } },
        { vi: "cháu", de: "Enkel/in, Neffe/Nichte; ich/du gegenüber der Eltern- und Großelterngeneration", pos: "Pron", emoji: "👶", ex: { vi: "Chào cháu!", de: "Hallo! (Ältere/r zu einem viel jüngeren Menschen)" } },
        { vi: "chào", de: "grüßen; hallo, tschüss", pos: "V", emoji: "👋", note: "Gilt zu jeder Tageszeit und auch zum Abschied.", ex: { vi: "Chào em!", de: "Hallo! (zu einem jüngeren Menschen)" } },
        { vi: "ạ", de: "Höflichkeitspartikel (Satzende, gegenüber Älteren/Höhergestellten)", pos: "Part", emoji: "🙇", ex: { vi: "Cảm ơn anh ạ.", de: "Danke! (höflich, zu einem etwas älteren Mann)" } },
        { vi: "ơi", de: "Vokativpartikel (Rufen, Aufmerksamkeit erregen)", pos: "Part", emoji: "📣", note: "Steht nach dem Anredeterm: chị ơi, em ơi.", ex: { vi: "Chị ơi!", de: "Hallo, Entschuldigung! (Rufen einer jungen Frau)" } }
      ],
      grammar: [
        {
          id: "g-k02-anrede-system",
          title: "Pronomen aus Verwandtschaftstermini",
          term: "Verwandtschaftstermini als Personalpronomen (Pronominalsystem)",
          text: "Das Vietnamesische hat kaum „echte“ Personalpronomen. An ihrer Stelle stehen **Verwandtschaftstermini**: `anh` (älterer Bruder), `chị` (ältere Schwester), `em` (jüngeres Geschwister), `ông`/`bà` (Großvater/-mutter), `chú`/`cô` (Onkel/Tante), `bác`, `cháu` (Enkel, Neffe). Man spricht auch Fremde so an, **als wären sie Verwandte**.\n\nDie Wahl richtet sich nach **Alter, Geschlecht und Beziehung relativ zum Gegenüber**:\n- etwas älterer Mann/Frau → `anh` / `chị`\n- jüngere Person → `em`\n- Elterngeneration → `chú`, `cô`; älter als die eigenen Eltern → `bác`\n- Großelterngeneration → `ông` / `bà`\n\nEntscheidend: Die Terme sind **reziprok** und gelten für **beide Personen**. Wer den anderen `anh` nennt, bezeichnet **sich selbst** als `em`. Wer `bà` sagt, nennt sich `cháu`. Dasselbe Wort kann also „ich“ und „du“ bedeuten – je nachdem, wer spricht: Jonas (30) ist für einen 20-jährigen Kellner `anh`, nennt sich ihm gegenüber aber auch `anh` und den Kellner `em`.\n\nDaneben gibt es zwei „neutrale“ Formen: `tôi` (ich) ist sachlich, aber distanziert – gegenüber Familie und Älteren wirkt es kühl. `bạn` (Freund) ist die neutrale Anrede unter Gleichaltrigen, typisch auch in Lehrbüchern und Werbung.\n\nIm Zweifel gilt: Lieber das Gegenüber **älter** einschätzen (`anh`, `chị`) – das wirkt respektvoll.",
          table: { head: ["Gegenüber", "Anrede (du/Sie)", "ich (Selbstbezeichnung)"], rows: [
            ["etwas älterer Mann", "anh", "em"],
            ["etwas ältere Frau", "chị", "em"],
            ["jüngere Person", "em", "anh / chị"],
            ["Mann der Elterngeneration", "chú (bác, wenn älter als Eltern)", "cháu"],
            ["Frau der Elterngeneration", "cô (bác, wenn älter als Eltern)", "cháu"],
            ["alter Herr / alte Dame", "ông / bà", "cháu"],
            ["Gleichaltrige (neutral)", "bạn", "tôi"]
          ] },
          examples: [
            { vi: "Em chào anh ạ.", de: "Guten Tag! (Jüngere/r zu einem etwas älteren Mann)", gloss: "jüngeres.Geschwister | grüßen | älterer.Bruder | HÖFL" },
            { vi: "Chào em!", de: "Hallo! (zu einer jüngeren Person)", gloss: "grüßen | jüngeres.Geschwister" },
            { vi: "Cháu chào bà ạ.", de: "Guten Tag! (zu einer alten Dame)", gloss: "Enkel | grüßen | Großmutter | HÖFL" },
            { vi: "Cảm ơn chú ạ.", de: "Danke! (zu einem Mann der Elterngeneration)", gloss: "danken | Onkel | HÖFL" }
          ],
          contrast: "Das Deutsche hat ein festes Pronomen „ich“ und eine Zweiteilung du/Sie. Im Vietnamesischen ändert sich auch das „ich“ je nach Gegenüber, und die Anrede kodiert Alter und Geschlecht – eher vergleichbar mit „Onkel“ oder „Oma“ als Anrede für Fremde, nur systematisch."
        },
        {
          id: "g-k02-chao-a",
          title: "Grüßen mit chào, ạ und ơi",
          term: "Höflichkeitspartikel; Vokativpartikel",
          pattern: "(Selbstbezeichnung) + chào + Anredeterm (+ ạ)",
          text: "Der Alltagsgruß besteht aus dem Verb `chào` (grüßen) und dem Anredeterm: `Chào anh!`, `Chào chị!`. Ein `xin chào` ohne Anrede klingt dagegen eher förmlich oder nach Ansage. `chào` gilt **rund um die Uhr** und auch **zum Abschied** – es gibt keine Unterscheidung wie „Guten Morgen/Abend“.\n\nGegenüber Älteren wird der Gruß **vollständig** gebildet, mit Selbstbezeichnung als Subjekt und der Partikel `ạ`: `Cháu chào bà ạ.` (wörtl. „Enkel grüßt Großmutter, ehrerbietig“). So grüßen Kinder in Nordvietnam ihre Großeltern – und so grüßt auch Jonas Linhs Verwandte. Die Kurzform `Chào bà` wirkt gegenüber alten Menschen zu knapp.\n\n**ạ** ist eine **Höflichkeitspartikel** am Satzende. Sie drückt Respekt gegenüber Älteren oder Höhergestellten aus und steht nach Grüßen, Dank, Antworten: `Cảm ơn chị ạ.` Gegenüber Jüngeren oder Gleichrangigen lässt man sie weg.\n\n**ơi** ist eine **Vokativpartikel**: Sie steht nach dem Anredeterm oder Namen und dient zum Rufen: `Chị ơi!` (zur Bedienung), `Linh ơi!`. Sie ersetzt ein deutsches „Entschuldigung!“ oder „Hallo, Sie!“.\n\nAbstufung der Höflichkeit: `Chào anh.` < `Chào anh ạ.` < `Em chào anh ạ.`",
          examples: [
            { vi: "Cháu chào ông ạ.", de: "Guten Tag! (zu einem alten Herrn)", gloss: "Enkel | grüßen | Großvater | HÖFL" },
            { vi: "Chào bạn!", de: "Hallo! (unter Gleichaltrigen)", gloss: "grüßen | Freund" },
            { vi: "Cảm ơn chị ạ.", de: "Danke! (zu einer etwas älteren Frau)", gloss: "danken | ältere.Schwester | HÖFL" },
            { vi: "Em ơi!", de: "Hallo! (Kellner/in rufen)", gloss: "jüngeres.Geschwister | VOK" }
          ],
          contrast: "Im Deutschen wird Höflichkeit vor allem über „Sie“ und Modalverben ausgedrückt („Könnten Sie …“). Im Vietnamesischen tragen Anredeterm und Partikel ạ diese Last; ein Satz ohne beides wirkt schnell schroff."
        }
      ],
      dialogue: {
        setting: "Jonas und Linh kommen in ihrem Gästehaus in der Hàng-Bạc-Straße an. Die Besitzerin Bà Thu (ca. 70) und ihr Enkel Nam (ca. 20) empfangen sie.",
        lines: [
          { who: "Bà Thu", vi: "Chào các cháu!", de: "Hallo, ihr beiden!" },
          { who: "Linh", vi: "Cháu chào bà ạ.", de: "Guten Tag!" },
          { who: "Jonas", vi: "Cháu chào bà ạ.", de: "Guten Tag!" },
          { who: "Nam", vi: "Em chào anh chị ạ.", de: "Guten Tag (euch beiden)!" },
          { who: "Jonas", vi: "Chào em!", de: "Hallo!" },
          { who: "Jonas", vi: "Cảm ơn em.", de: "Danke." },
          { who: "Nam", vi: "Không có gì ạ.", de: "Gern geschehen." },
          { who: "Linh", vi: "Cháu cảm ơn bà ạ.", de: "Vielen Dank!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Cháu chào ___ ạ.", de: "Guten Tag! (Jonas zu einer etwa 70-jährigen Frau)", options: ["bà", "em", "bạn"], answer: "bà", explain: "Eine Frau der Großelterngeneration nennt man bà und sich selbst cháu." },
        { type: "gap", vi: "Em chào ___ ạ.", de: "Guten Tag! (der 20-jährige Kellner zu Jonas)", options: ["anh", "em", "cháu"], answer: "anh", explain: "Jonas ist für den Kellner ein „älterer Bruder“: anh. Der Kellner nennt sich selbst em." },
        { type: "gap", vi: "Cảm ơn ___ ạ.", de: "Danke! (Jonas zu einem etwa 75-jährigen Mann)", options: ["ông", "anh", "em"], answer: "ông", explain: "Ein alter Herr ist ông. anh wäre zu jung, em sogar respektlos." },
        { type: "gap", vi: "Cháu chào bà ___.", de: "Guten Tag! (höflich)", options: ["ạ", "ơi", "không"], answer: "ạ", explain: "ạ ist die Höflichkeitspartikel am Satzende. ơi dient nur zum Rufen." },
        { type: "build", vi: "Cháu chào bà ạ.", de: "Guten Tag! (zu einer alten Dame)", extra: ["anh"] },
        { type: "build", vi: "Em chào anh chị ạ.", de: "Guten Tag! (Jüngere/r zu Jonas und Linh)", extra: ["bạn"] },
        { type: "build", vi: "Cảm ơn chị ạ.", de: "Danke! (zu einer etwas älteren Frau)", extra: ["ơi"] },
        { type: "translate", de: "Hallo! (Jonas zu einem gleichaltrigen Freund)", answers: ["Chào bạn!", "Chào anh!"] },
        { type: "translate", de: "Danke! (Jonas höflich zu einer etwas älteren Frau)", answers: ["Cảm ơn chị ạ.", "Cám ơn chị ạ.", "Em cảm ơn chị ạ.", "Em cám ơn chị ạ.", "Cảm ơn chị."] },
        { type: "mc", q: "Jonas (30) spricht eine Frau von etwa 35 Jahren an. Welcher Term passt?", options: ["chị", "bà", "em"], answer: 0, explain: "Eine etwas ältere Frau ist chị. bà wäre für eine alte Dame, em für Jüngere." },
        { type: "mc", q: "Wie bezeichnet sich Jonas selbst gegenüber Linhs Großmutter?", options: ["cháu", "anh", "tôi"], answer: 0, explain: "Gegenüber bà ist man cháu (Enkel). tôi wäre in der Familie kühl und distanziert." },
        { type: "mc", q: "Was bewirkt ạ am Satzende?", vi: "Cảm ơn bà ạ.", options: ["Es macht den Satz respektvoll.", "Es macht den Satz zur Frage.", "Es verneint den Satz."], answer: 0, explain: "ạ ist eine Höflichkeitspartikel gegenüber Älteren und Höhergestellten." },
        { type: "pairs", pairs: [["ông", "Großvater; alter Herr"], ["bà", "Großmutter; alte Dame"], ["anh", "älterer Bruder"], ["chị", "ältere Schwester"], ["em", "jüngeres Geschwister"], ["cháu", "Enkel/in"]] },
        { type: "listen", vi: "Chào cô ạ.", de: "Guten Tag! (zu einer Frau der Elterngeneration)" },
        { type: "speak", vi: "Cháu chào bác ạ.", de: "Guten Tag! (zu jemandem, der älter ist als die eigenen Eltern)" }
      ]
    },

    /* ───────────────────────── k02l2 ───────────────────────── */
    {
      id: "k02l2",
      title: "Kopula là & Herkunft",
      goal: "Du sagst, wer du bist und woher du kommst, verneinst und fragst nach Herkunft.",
      vocab: [
        { vi: "là", de: "sein (Kopula zwischen zwei Nominalphrasen)", pos: "V", emoji: "🟰", ex: { vi: "Tôi là Jonas.", de: "Ich bin Jonas." } },
        { vi: "người", de: "Mensch, Person; Leute", pos: "N", emoji: "🧑", ex: { vi: "Tôi là người Đức.", de: "Ich bin Deutscher." } },
        { vi: "Đức", de: "Deutschland; deutsch", pos: "N", emoji: "🇩🇪", note: "Kurzform von nước Đức. Sinoviet. đức = Tugend.", ex: { vi: "Jonas là người Đức.", de: "Jonas ist Deutscher." } },
        { vi: "Việt Nam", de: "Vietnam", pos: "N", emoji: "🇻🇳", ex: { vi: "Chị là người Việt Nam.", de: "Ich bin Vietnamesin. (zu Jüngeren)" } },
        { vi: "Pháp", de: "Frankreich", pos: "N", emoji: "🇫🇷", ex: { vi: "Chú là người Pháp, phải không ạ?", de: "Sie sind Franzose, nicht wahr?" } },
        { vi: "Anh", de: "England; Großbritannien", pos: "N", emoji: "🇬🇧", note: "Gleich lautend mit dem Anredeterm anh; großgeschrieben als Ländername.", ex: { vi: "Bạn là người Anh, phải không?", de: "Du bist Engländer/in, oder?" } },
        { vi: "Mỹ", de: "USA, Amerika", pos: "N", emoji: "🇺🇸", ex: { vi: "Bà là người Mỹ, phải không ạ?", de: "Sie sind Amerikanerin, nicht wahr? (zu einer alten Dame)" } },
        { vi: "Nhật Bản", de: "Japan", pos: "N", emoji: "🇯🇵", note: "Kurz: Nhật. „người Nhật“ = Japaner/in.", ex: { vi: "Em là người Nhật.", de: "Ich bin Japaner/in. (zu Älteren)" } },
        { vi: "Hàn Quốc", de: "(Süd-)Korea", pos: "N", emoji: "🇰🇷", ex: { vi: "Cô là người Hàn Quốc, phải không ạ?", de: "Sie sind Koreanerin, nicht wahr?" } },
        { vi: "nước ngoài", de: "Ausland (wörtl. äußeres Land)", pos: "N", emoji: "🌍", ex: { vi: "Tôi là người nước ngoài.", de: "Ich bin Ausländer/in." } },
        { vi: "khách du lịch", de: "Tourist/in", pos: "N", emoji: "🧳", ex: { vi: "Anh là khách du lịch, phải không?", de: "Du bist Tourist, oder?" } },
        { vi: "sinh viên", de: "Student/in", pos: "N", emoji: "🎓", ex: { vi: "Em là sinh viên.", de: "Ich bin Student/in. (zu Älteren)" } },
        { vi: "Việt kiều", de: "Auslandsvietnamese/-vietnamesin", pos: "N", emoji: "✈️", ex: { vi: "Linh là Việt kiều.", de: "Linh ist Auslandsvietnamesin." } },
        { vi: "gốc", de: "Wurzel; Herkunft, Abstammung", pos: "N", emoji: "🌳", ex: { vi: "Linh là người Đức gốc Việt.", de: "Linh ist Deutsche vietnamesischer Herkunft." } },
        { vi: "không phải là", de: "nicht sein (Negation der Kopula)", pos: "Part", emoji: "🚫", note: "là kann nach không phải entfallen.", ex: { vi: "Tôi không phải là người Pháp.", de: "Ich bin kein Franzose." } },
        { vi: "phải không", de: "… nicht wahr? (Frageanhang)", pos: "Part", emoji: "❓", ex: { vi: "Chị là Linh, phải không?", de: "Du bist Linh, oder?" } }
      ],
      grammar: [
        {
          id: "g-k02-kopula-la",
          title: "Die Kopula là",
          term: "Kopula; nominales Prädikat",
          pattern: "NP₁ + là + NP₂",
          text: "`là` verbindet zwei **Nominalphrasen** und drückt **Identität** oder **Klassenzugehörigkeit** aus: `Tôi là Jonas.` (Identität), `Linh là sinh viên.` (Klasse). Es entspricht damit dem deutschen „sein“ – aber nur in dieser Funktion.\n\nWie jedes vietnamesische Verb wird `là` **nicht konjugiert**: Person, Numerus und Zeit spielen keine Rolle. `Tôi là …`, `Anh là …`, `Linh là …` – immer dieselbe Form.\n\nDrei Einschränkungen solltest du dir sofort merken:\n- Nach `là` steht eine **Nominalphrase**, kein Adjektiv. „Ich bin müde“ heißt `Tôi mệt`, ohne `là` (→ Lektion 3).\n- `là` wird nicht mit `không` verneint: *`Tôi không là người Pháp`* ist ungrammatisch. Die Negation lautet `không phải là` (→ unten).\n- Ortsangaben („Ich bin in Hanoi“) verwenden nicht `là`, sondern das Verb `ở` (→ Lektion 4).\n\nIn Namen und Vorstellungen ist `là` fest: `Đây là Linh.` (Das ist Linh.) Auch bei Berufen und Herkunft ist es Pflicht – das Deutsche erlaubt dagegen den Artikel-losen Prädikativ („Ich bin Student“), was gut zur vietnamesischen Struktur passt: `Tôi là sinh viên.` Artikel gibt es im Vietnamesischen ohnehin nicht.",
          examples: [
            { vi: "Tôi là Jonas.", de: "Ich bin Jonas.", gloss: "ich | KOP | Jonas" },
            { vi: "Linh là sinh viên.", de: "Linh ist Studentin.", gloss: "Linh | KOP | Student" },
            { vi: "Anh là khách du lịch.", de: "Ich bin Tourist. (Jonas zu Jüngeren)", gloss: "älterer.Bruder | KOP | Tourist" },
            { vi: "Em là người Nhật.", de: "Ich bin Japaner/in. (zu Älteren)", gloss: "jüngeres.Geschwister | KOP | Mensch | Japan" }
          ],
          contrast: "Deutsch „sein“ steht vor Nomen, Adjektiven und Ortsangaben („ist Lehrer / ist müde / ist in Berlin“). Vietnamesisch verteilt das auf drei Strukturen: là + Nomen, Stativverb allein, ở + Ort."
        },
        {
          id: "g-k02-nguoi-nuoc",
          title: "Herkunft: người + Land",
          term: "Kopf-Modifikator-Komposition (Kopf links)",
          pattern: "người + Land = Nationalität; tiếng + Land = Sprache; nước + Land = Staat",
          text: "Nationalitäten werden nicht wie im Deutschen durch Ableitung (Deutsch**er**, Französ**in**) gebildet, sondern durch **Komposition**: `người` (Mensch) + Ländername: `người Đức` (Deutsche/r), `người Pháp` (Franzose/Französin), `người Việt` oder `người Việt Nam` (Vietnamese/-in). Geschlecht wird nicht markiert.\n\nDasselbe Muster gilt für Sprache und Staat:\n- `tiếng` + Land = Sprache: `tiếng Đức`, `tiếng Việt`, `tiếng Anh` (Englisch)\n- `nước` + Land = Staat: `nước Đức`, `nước Pháp`\n\nDer **Kopf** (das bestimmende Nomen) steht **links**, der Modifikator rechts: `người Đức` ist wörtlich „Mensch-Deutschland“. Diese Reihenfolge **Kopf vor Modifikator** zieht sich durch die ganze Sprache (`cà phê sữa` = Kaffee mit Milch, `phở bò` = Phở mit Rind).\n\nAchtung bei `Anh`: Als Ländername heißt es England/Großbritannien, `người Anh` also Engländer/in, `tiếng Anh` Englisch. Die Homonymie mit dem Anredeterm `anh` (älterer Bruder) löst sich durch den Kontext.\n\nFür Linhs doppelte Herkunft gibt es zwei übliche Ausdrücke: `người Đức gốc Việt` (Deutsche vietnamesischer Abstammung) und `Việt kiều` (Auslandsvietnamesin).",
          table: { head: ["Land", "Nationalität", "Sprache"], rows: [
            ["Đức", "người Đức", "tiếng Đức"],
            ["Việt Nam", "người Việt (Nam)", "tiếng Việt"],
            ["Pháp", "người Pháp", "tiếng Pháp"],
            ["Anh", "người Anh", "tiếng Anh"],
            ["Mỹ", "người Mỹ", "tiếng Anh"],
            ["Nhật Bản", "người Nhật", "tiếng Nhật"],
            ["Hàn Quốc", "người Hàn (Quốc)", "tiếng Hàn"]
          ] },
          examples: [
            { vi: "Jonas là người Đức.", de: "Jonas ist Deutscher.", gloss: "Jonas | KOP | Mensch | Deutschland" },
            { vi: "Linh là người Đức gốc Việt.", de: "Linh ist Deutsche vietnamesischer Herkunft.", gloss: "Linh | KOP | Mensch | Deutschland | Wurzel | Vietnam" },
            { vi: "Bà là người Việt Nam.", de: "Sie sind Vietnamesin. (zu einer alten Dame)", gloss: "Großmutter | KOP | Mensch | Vietnam" }
          ],
          contrast: "Deutsch bildet Nationalitäten durch Suffixe und markiert dabei Genus (Deutscher/Deutsche). Vietnamesisch komponiert transparent und genusneutral – und stellt den Kopf voran, während das Deutsche ihn ans Ende setzt (Milch-kaffee vs. cà phê sữa)."
        },
        {
          id: "g-k02-khong-phai-la",
          title: "Verneinung und Fragen bei là",
          term: "Kopula-Negation; Bestätigungsfrage (Tag-Frage)",
          pattern: "S + không phải (là) + NP │ S + là + NP, phải không? │ Có phải + S + là + NP + không?",
          text: "Ein `là`-Satz wird mit **`không phải là`** verneint, wörtlich „nicht richtig sein“: `Tôi không phải là người Pháp.` In der Umgangssprache fällt `là` oft weg: `Tôi không phải người Pháp.` Ein bloßes `không là` ist dagegen falsch.\n\nFür Fragen gibt es zwei Muster:\n- **Anhängefrage** mit `phải không?` („stimmt’s?“): `Anh là Jonas, phải không?` Der Sprecher vermutet die Antwort und will sie bestätigt haben.\n- **Rahmenfrage** `có phải … không?`: `Có phải chị là Việt kiều không?` („Ist es richtig, dass du Auslandsvietnamesin bist?“). Sie klingt etwas förmlicher und neutraler.\n\nBeide Fragen werden mit `phải` beantwortet:\n- Ja: `Phải.` (bzw. höflich `Phải ạ.`)\n- Nein: `Không phải.` – meist gefolgt von der Korrektur: `Không phải. Tôi là người Đức.`\n\nWichtig: Die Wortstellung ändert sich in Fragen **nicht**. Es gibt keine Inversion wie im Deutschen („Bist du …?“); die Frage entsteht allein durch die Partikeln.",
          examples: [
            { vi: "Tôi không phải là người Mỹ.", de: "Ich bin kein Amerikaner.", gloss: "ich | NEG | richtig | KOP | Mensch | USA" },
            { vi: "Anh là người Đức, phải không?", de: "Du bist Deutscher, oder?", gloss: "älterer.Bruder | KOP | Mensch | Deutschland | richtig | NEG" },
            { vi: "Có phải chị là Việt kiều không?", de: "Bist du Auslandsvietnamesin?", gloss: "haben | richtig | ältere.Schwester | KOP | Auslandsvietnamesin | NEG" },
            { vi: "Không phải. Tôi là người Đức.", de: "Nein. Ich bin Deutscher.", gloss: "NEG | richtig || ich | KOP | Mensch | Deutschland" }
          ],
          contrast: "Deutsch verneint Nomen mit „kein“ und bildet Fragen durch Verbvoranstellung. Vietnamesisch hat eine eigene Kopula-Negation (không phải) und lässt die Wortstellung in Fragen unverändert – vergleichbar mit dem deutschen Anhängsel „…, oder?“."
        }
      ],
      dialogue: {
        setting: "Am Hoàn-Kiếm-See spricht der Student Minh (ca. 20) Jonas und Linh an – er möchte üben, mit Touristen zu sprechen.",
        lines: [
          { who: "Minh", vi: "Em chào anh chị ạ. Anh là khách du lịch, phải không ạ?", de: "Guten Tag! Sie sind Tourist, nicht wahr?" },
          { who: "Jonas", vi: "Phải. Anh là khách du lịch.", de: "Ja. Ich bin Tourist." },
          { who: "Minh", vi: "Anh là người Mỹ, phải không ạ?", de: "Sind Sie Amerikaner?" },
          { who: "Jonas", vi: "Không phải. Anh là người Đức.", de: "Nein. Ich bin Deutscher." },
          { who: "Minh", vi: "Chị là người Việt, phải không ạ?", de: "Und Sie sind Vietnamesin, oder?" },
          { who: "Linh", vi: "Chị là người Đức gốc Việt.", de: "Ich bin Deutsche vietnamesischer Herkunft." },
          { who: "Minh", vi: "Có phải chị là Việt kiều không ạ?", de: "Sind Sie also Auslandsvietnamesin?" },
          { who: "Linh", vi: "Phải. Chị là Việt kiều.", de: "Ja, genau." },
          { who: "Jonas", vi: "Em là sinh viên, phải không?", de: "Du bist Student, oder?" },
          { who: "Minh", vi: "Phải ạ. Em là sinh viên.", de: "Ja, ich bin Student." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Tôi ___ người Đức.", de: "Ich bin Deutscher.", options: ["là", "có", "ở"], answer: "là", explain: "Zwischen zwei Nominalphrasen steht die Kopula là." },
        { type: "gap", vi: "Linh không ___ là người Pháp.", de: "Linh ist keine Französin.", options: ["phải", "có", "là"], answer: "phải", explain: "Die Kopula wird mit không phải (là) verneint, nicht mit bloßem không." },
        { type: "gap", vi: "Anh là người Đức, ___ không?", de: "Du bist Deutscher, oder?", options: ["phải", "là", "có"], answer: "phải", explain: "Der Frageanhang bei là-Sätzen lautet „phải không?“." },
        { type: "gap", vi: "___ phải chị là Việt kiều không?", de: "Bist du Auslandsvietnamesin?", options: ["Có", "Là", "Không"], answer: "Có", explain: "Die Rahmenfrage lautet „Có phải … không?“." },
        { type: "build", vi: "Tôi là người Đức.", de: "Ich bin Deutscher.", extra: ["có", "Việt"] },
        { type: "build", vi: "Linh là người Đức gốc Việt.", de: "Linh ist Deutsche vietnamesischer Herkunft.", extra: ["phải"] },
        { type: "build", vi: "Anh không phải là người Mỹ.", de: "Ich bin kein Amerikaner. (Jonas zu Jüngeren)", extra: ["có"] },
        { type: "translate", de: "Ich bin Deutscher.", answers: ["Tôi là người Đức.", "Anh là người Đức.", "Em là người Đức.", "Cháu là người Đức."] },
        { type: "translate", de: "Ich bin kein Franzose.", answers: ["Tôi không phải là người Pháp.", "Tôi không phải người Pháp.", "Anh không phải là người Pháp.", "Anh không phải người Pháp.", "Em không phải là người Pháp.", "Em không phải người Pháp.", "Cháu không phải là người Pháp.", "Cháu không phải người Pháp."] },
        { type: "translate", de: "Du bist Vietnamesin, oder? (zu einer etwas älteren Frau)", answers: ["Chị là người Việt, phải không?", "Chị là người Việt Nam, phải không?", "Chị là người Việt, phải không ạ?", "Chị là người Việt Nam, phải không ạ?", "Có phải chị là người Việt không?", "Có phải chị là người Việt Nam không?", "Có phải chị là người Việt không ạ?", "Có phải chị là người Việt Nam không ạ?"] },
        { type: "mc", q: "Was bedeutet „người Anh“?", vi: "người Anh", options: ["Engländer/in", "älterer Bruder", "Mensch"], answer: 0, explain: "Anh als Ländername = England; người + Land = Nationalität." },
        { type: "mc", q: "Welcher Satz ist ungrammatisch?", options: ["Tôi là người Đức.", "Tôi không là người Đức.", "Tôi không phải là người Đức."], answer: 1, explain: "là wird nicht mit bloßem không verneint; richtig ist không phải (là)." },
        { type: "mc", q: "Wie bestätigst du die Frage „Anh là Jonas, phải không?“", options: ["Phải.", "Là.", "Có phải."], answer: 0, explain: "Auf phải-Fragen antwortet man mit Phải (ja) oder Không phải (nein)." },
        { type: "pairs", pairs: [["người Đức", "Deutsche/r"], ["người Pháp", "Franzose/Französin"], ["người Mỹ", "Amerikaner/in"], ["người Nhật", "Japaner/in"], ["người Anh", "Engländer/in"]] },
        { type: "listen", vi: "Linh là Việt kiều.", de: "Linh ist Auslandsvietnamesin." },
        { type: "speak", vi: "Tôi là Jonas. Tôi là người Đức.", de: "Ich bin Jonas. Ich bin Deutscher." }
      ]
    },

    /* ───────────────────────── k02l3 ───────────────────────── */
    {
      id: "k02l3",
      title: "Stativverben & Ja/Nein-Fragen",
      goal: "Du sagst, wie es dir geht, fragst nach dem Befinden und beantwortest Ja/Nein-Fragen höflich.",
      vocab: [
        { vi: "khỏe", de: "gesund, wohlauf, kräftig", pos: "Adj", emoji: "💪", ex: { vi: "Tôi khỏe.", de: "Mir geht es gut." } },
        { vi: "mệt", de: "müde, erschöpft", pos: "Adj", emoji: "😩", ex: { vi: "Anh có mệt không?", de: "Bist du müde?" } },
        { vi: "vui", de: "froh, fröhlich, lustig", pos: "Adj", emoji: "😄", ex: { vi: "Em vui.", de: "Ich freue mich. (zu Älteren)" } },
        { vi: "đói", de: "hungrig", pos: "Adj", emoji: "🍽️", ex: { vi: "Chị có đói không?", de: "Hast du Hunger?" } },
        { vi: "nóng", de: "heiß", pos: "Adj", emoji: "🥵", ex: { vi: "Hà Nội nóng.", de: "In Hanoi ist es heiß." } },
        { vi: "lạnh", de: "kalt", pos: "Adj", emoji: "🥶", ex: { vi: "Bia có lạnh không?", de: "Ist das Bier kalt?" } },
        { vi: "bình thường", de: "normal; ganz okay", pos: "Adj", emoji: "🙂", ex: { vi: "Tôi bình thường.", de: "Mir geht es ganz okay." } },
        { vi: "có", de: "(betont) ja; Bejahungs- und Fragemarker vor dem Prädikat", pos: "Part", emoji: "✅", note: "Als Vollverb „haben“ → K04.", ex: { vi: "Có, tôi đói.", de: "Ja, ich habe Hunger." } },
        { vi: "không", de: "nicht; nein; Fragepartikel am Satzende", pos: "Part", emoji: "❌", ex: { vi: "Tôi không mệt.", de: "Ich bin nicht müde." } },
        { vi: "vâng", de: "ja (Nord, höflich)", pos: "Part", emoji: "👍", south: "dạ", ex: { vi: "Vâng, tôi khỏe.", de: "Ja, mir geht es gut." } },
        { vi: "dạ", de: "ja (ehrerbietig); Antwortpartikel, auch „ja, bitte?“ beim Gerufenwerden", pos: "Part", emoji: "🙇", ex: { vi: "Dạ, cháu khỏe ạ.", de: "Ja, mir geht es gut. (zu Älteren)" } },
        { vi: "cũng", de: "auch", pos: "Adv", emoji: "➕", note: "Steht vor dem Prädikat.", ex: { vi: "Em cũng mệt.", de: "Ich bin auch müde." } },
        { vi: "nói", de: "sprechen, sagen", pos: "V", emoji: "🗣️", ex: { vi: "Anh có nói tiếng Việt không?", de: "Sprichst du Vietnamesisch?" } },
        { vi: "uống", de: "trinken", pos: "V", emoji: "🥤", ex: { vi: "Chị có uống bia không?", de: "Trinkst du Bier?" } },
        { vi: "hiểu", de: "verstehen", pos: "V", emoji: "💡", ex: { vi: "Em có hiểu không?", de: "Verstehst du?" } }
      ],
      grammar: [
        {
          id: "g-k02-stativverb",
          title: "Adjektive sind Stativverben",
          term: "Stativverb (Zustandsverb), verbales Prädikat",
          pattern: "S + (không) + Stativverb",
          text: "Wörter wie `khỏe` (gesund), `mệt` (müde) oder `nóng` (heiß) übersetzen wir mit deutschen Adjektiven. Grammatisch verhalten sie sich aber wie **Verben**: Sie bilden **allein** das Prädikat – ohne Kopula. Man nennt sie deshalb **Stativverben** (Zustandsverben).\n\n- `Tôi mệt.` – „Ich bin müde“, wörtlich „Ich müde-sein“.\n- *`Tôi là mệt.`* – **falsch**. `là` verbindet nur Nominalphrasen.\n\nWie andere Verben werden Stativverben direkt mit `không` verneint: `Tôi không mệt.` (Ich bin nicht müde.) Und wie Verben können sie mit `có … không` erfragt werden (→ nächster Punkt).\n\nAuch Wetter- und Ortsaussagen folgen diesem Muster, typischerweise als **Topik-Kommentar-Struktur**: `Hà Nội nóng.` – wörtlich „Hà Nội (betreffend): heiß“. Das Topik nennt, worüber gesprochen wird; der Kommentar sagt etwas darüber aus. Ein Scheinsubjekt wie deutsch „es“ gibt es nicht.\n\nDas Adverb `cũng` (auch) steht direkt **vor dem Prädikat**: `Em cũng mệt.` (Ich bin auch müde.) – nicht am Satzende.\n\nMerke dir: Fehlt im vietnamesischen Satz scheinbar ein „ist“, ist das kein Fehler, sondern Grammatik. Die Kopula `là` steht nur vor Nomen.",
          examples: [
            { vi: "Tôi khỏe.", de: "Mir geht es gut.", gloss: "ich | gesund.sein" },
            { vi: "Tôi không mệt.", de: "Ich bin nicht müde.", gloss: "ich | NEG | müde.sein" },
            { vi: "Hà Nội nóng.", de: "In Hanoi ist es heiß.", gloss: "Hà.Nội | heiß.sein" },
            { vi: "Em cũng đói.", de: "Ich habe auch Hunger.", gloss: "jüngeres.Geschwister | auch | hungrig.sein" }
          ],
          contrast: "Im Deutschen braucht ein prädikatives Adjektiv die Kopula „sein“ („Ich **bin** müde“). Im Vietnamesischen ist das „Adjektiv“ selbst das Verb. Ähnlich im Deutschen nur bei echten Zustandsverben: „Es friert mich“, „Ich hungere“."
        },
        {
          id: "g-k02-co-khong",
          title: "Ja/Nein-Fragen mit (có) … không",
          term: "Entscheidungsfrage mit Rahmenkonstruktion; Antwortpartikeln",
          pattern: "S + (có) + V + (O) + không?",
          text: "Ja/Nein-Fragen zu Verben und Stativverben bildet man mit einem **Rahmen**: `có` vor dem Prädikat, `không` am Satzende. Wörtlich: „Du *haben* müde *nicht*?“ – eine Alternative zwischen Bejahung und Verneinung.\n\n- `Anh có mệt không?` – Bist du müde?\n- `Chị có uống bia không?` – Trinkst du Bier?\n\nDas `có` ist **optional**; ohne es wirkt die Frage etwas lockerer: `Anh mệt không?` Die Wortstellung bleibt wie im Aussagesatz.\n\n**Antworten:**\n- Ja: `Có.` oder Wiederholung des Verbs: `Có, tôi mệt.` / `Mệt.`\n- Nein: `Không.` + verneinter Satz: `Không, tôi không mệt.`\n- Höflich bejahen: `Vâng` (Nord) oder `Dạ` – beide heißen „ja“. `Dạ` ist ehrerbietiger und wird gegenüber Älteren bevorzugt, oft kombiniert: `Dạ, có ạ.` Auch beim Verneinen leitet man gegenüber Älteren mit `Dạ` ein: `Dạ, không ạ.`\n\nAchtung: Bei **là-Sätzen** funktioniert dieser Rahmen nicht. Dort fragt man `… phải không?` oder `Có phải … không?` (→ Lektion 2): *`Anh có là người Đức không?`* ist falsch.\n\nUnd Vorsicht mit dem Satzton: Hebe am Ende nicht die Stimme wie im Deutschen – `không` behält seinen ebenen Ton.",
          table: { head: ["Frage", "Ja", "Nein"], rows: [
            ["Anh có mệt không?", "Có, tôi mệt.", "Không, tôi không mệt."],
            ["Cháu có khỏe không?", "Dạ, cháu khỏe ạ.", "Dạ, cháu không khỏe ạ."],
            ["Anh là Jonas, phải không?", "Phải.", "Không phải."]
          ] },
          examples: [
            { vi: "Anh có mệt không?", de: "Bist du müde?", gloss: "älterer.Bruder | haben | müde | NEG" },
            { vi: "Không, tôi không mệt.", de: "Nein, ich bin nicht müde.", gloss: "nein | ich | NEG | müde" },
            { vi: "Chị có nói tiếng Việt không?", de: "Sprichst du Vietnamesisch?", gloss: "ältere.Schwester | haben | sprechen | Sprache | Vietnam | NEG" },
            { vi: "Dạ, có ạ.", de: "Ja. (ehrerbietig)", gloss: "ja | haben | HÖFL" }
          ],
          contrast: "Deutsch bildet Ja/Nein-Fragen durch Verb-Erststellung („Bist du müde?“) und Intonation. Vietnamesisch behält die Wortstellung und rahmt das Prädikat mit có … không. Ein universelles „Ja“ wie im Deutschen gibt es nicht – man wiederholt meist das Verb oder benutzt có/vâng/dạ.",
          south: "Im Süden antwortet man fast immer mit dạ; vâng ist typisch nördlich. Umgangssprachlich wird không als „hông“ ausgesprochen."
        }
      ],
      dialogue: {
        setting: "Morgens im Gästehaus. Bà Thu fragt Jonas und Linh, wie die erste Nacht war.",
        lines: [
          { who: "Bà Thu", vi: "Chào cháu! Cháu có khỏe không?", de: "Guten Morgen! Geht es dir gut?" },
          { who: "Jonas", vi: "Dạ, cháu khỏe ạ. Cảm ơn bà. Bà có khỏe không ạ?", de: "Ja, danke. Und wie geht es Ihnen?" },
          { who: "Bà Thu", vi: "Cảm ơn cháu, bà bình thường.", de: "Danke, mir geht es ganz gut." },
          { who: "Bà Thu", vi: "Linh có mệt không?", de: "Linh, bist du müde?" },
          { who: "Linh", vi: "Dạ, cháu mệt ạ. Hà Nội nóng!", de: "Ja, ich bin müde. Hanoi ist so heiß!" },
          { who: "Bà Thu", vi: "Jonas có đói không?", de: "Jonas, hast du Hunger?" },
          { who: "Jonas", vi: "Dạ, có ạ. Cháu đói.", de: "Ja, ich habe Hunger." },
          { who: "Bà Thu", vi: "Cháu có uống cà phê không?", de: "Trinkst du Kaffee?" },
          { who: "Linh", vi: "Dạ, cháu cũng uống ạ. Cảm ơn bà!", de: "Ich trinke auch einen. Danke!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Tôi ___ mệt.", de: "Ich bin nicht müde.", options: ["không", "không phải", "là"], answer: "không", explain: "Stativverben werden mit bloßem không verneint; không phải gehört zu là-Sätzen." },
        { type: "gap", vi: "Anh có khỏe ___?", de: "Geht es dir gut?", options: ["không", "phải", "là"], answer: "không", explain: "Der Fragerahmen lautet có … không." },
        { type: "gap", vi: "Em ___ đói.", de: "Ich habe auch Hunger.", options: ["cũng", "là", "có phải"], answer: "cũng", explain: "cũng (auch) steht vor dem Prädikat." },
        { type: "gap", vi: "Dạ, cháu khỏe ___.", de: "Ja, mir geht es gut. (zur Großmutter)", options: ["ạ", "không", "là"], answer: "ạ", explain: "Gegenüber Älteren endet die Antwort mit der Höflichkeitspartikel ạ." },
        { type: "build", vi: "Anh có mệt không?", de: "Bist du müde?", extra: ["là"] },
        { type: "build", vi: "Tôi không đói.", de: "Ich habe keinen Hunger.", extra: ["phải"] },
        { type: "build", vi: "Chị có nói tiếng Việt không?", de: "Sprichst du Vietnamesisch?", extra: ["là"] },
        { type: "translate", de: "Ich bin müde.", answers: ["Tôi mệt.", "Em mệt.", "Cháu mệt.", "Anh mệt."] },
        { type: "translate", de: "Trinkst du Bier? (zu einem gleichaltrigen Mann)", answers: ["Anh có uống bia không?", "Anh uống bia không?", "Bạn có uống bia không?", "Bạn uống bia không?"] },
        { type: "translate", de: "Ich verstehe nicht.", answers: ["Tôi không hiểu.", "Em không hiểu.", "Cháu không hiểu.", "Anh không hiểu."] },
        { type: "mc", q: "Welcher Satz ist korrekt?", options: ["Tôi là khỏe.", "Tôi khỏe.", "Tôi phải khỏe."], answer: 1, explain: "khỏe ist ein Stativverb und braucht keine Kopula. „Tôi là khỏe“ ist ein typischer Lernerfehler." },
        { type: "mc", q: "Chị Hương fragt Jonas: „Em có đói không?“ Wie verneint er korrekt?", options: ["Không, em không đói.", "Không phải, em đói.", "Không, em là không đói."], answer: 0, explain: "Auf có-không-Fragen antwortet man mit không + verneintem Verb. không phải gehört zu là-Sätzen." },
        { type: "mc", q: "Linhs Großmutter fragt: „Cháu có khỏe không?“ Welche Ja-Antwort ist am höflichsten?", options: ["Dạ, có ạ.", "Có.", "Phải."], answer: 0, explain: "Dạ + ạ ist ehrerbietig. Ein bloßes „Có“ wirkt knapp, „Phải“ passt nur auf phải-Fragen." },
        { type: "pairs", pairs: [["khỏe", "gesund"], ["mệt", "müde"], ["đói", "hungrig"], ["nóng", "heiß"], ["lạnh", "kalt"], ["vui", "froh"]] },
        { type: "listen", vi: "Bà có khỏe không ạ?", de: "Geht es Ihnen gut? (zu einer alten Dame)" },
        { type: "speak", vi: "Dạ, cháu khỏe ạ. Cảm ơn bà.", de: "Ja, mir geht es gut. Danke!" }
      ]
    },

    /* ───────────────────────── k02l4 ───────────────────────── */
    {
      id: "k02l4",
      title: "Fragewörter & Pluralpronomen",
      goal: "Du fragst nach Namen, Person, Ort und Herkunft und sprichst über mehrere Personen.",
      vocab: [
        { vi: "gì", de: "was", pos: "QW", emoji: "❓", ex: { vi: "Anh tên là gì?", de: "Wie heißt du?" } },
        { vi: "ai", de: "wer, wen", pos: "QW", emoji: "🧐", ex: { vi: "Chị ấy là ai?", de: "Wer ist sie?" } },
        { vi: "đâu", de: "wo, wohin", pos: "QW", emoji: "📍", ex: { vi: "Chị đi đâu?", de: "Wohin gehst du?" } },
        { vi: "nào", de: "welche/r/s (nach dem Nomen)", pos: "QW", emoji: "🔎", ex: { vi: "Anh là người nước nào?", de: "Aus welchem Land kommst du?" } },
        { vi: "tên", de: "Name; heißen", pos: "N", emoji: "🏷️", ex: { vi: "Tôi tên là Jonas.", de: "Ich heiße Jonas." } },
        { vi: "ở", de: "sich befinden; wohnen", pos: "V", emoji: "🏠", note: "Ausführlich in K07.", ex: { vi: "Tôi ở Berlin.", de: "Ich wohne in Berlin." } },
        { vi: "nước", de: "Land, Staat (auch: Wasser)", pos: "N", emoji: "🗺️", ex: { vi: "Nước Đức đẹp.", de: "Deutschland ist schön." } },
        { vi: "chúng tôi", de: "wir (ohne Angesprochene: exklusiv)", pos: "Pron", emoji: "👥", ex: { vi: "Chúng tôi là người Đức.", de: "Wir sind Deutsche." } },
        { vi: "chúng ta", de: "wir (mit Angesprochenen: inklusiv)", pos: "Pron", emoji: "🫂", ex: { vi: "Chúng ta đi đâu?", de: "Wohin gehen wir (alle)?" } },
        { vi: "các bạn", de: "ihr (Gleichaltrige)", pos: "Pron", emoji: "👫", ex: { vi: "Các bạn có mệt không?", de: "Seid ihr müde?" } },
        { vi: "họ", de: "sie (Plural)", pos: "Pron", emoji: "👨‍👩‍👧", ex: { vi: "Họ là người Pháp.", de: "Sie sind Franzosen." } },
        { vi: "anh ấy", de: "er (junger Mann)", pos: "Pron", emoji: "👨", ex: { vi: "Anh ấy là Jonas.", de: "Er ist Jonas." } },
        { vi: "chị ấy", de: "sie (junge Frau)", pos: "Pron", emoji: "👩", ex: { vi: "Chị ấy tên là Linh.", de: "Sie heißt Linh." } },
        { vi: "đây là", de: "das ist … (beim Vorstellen)", pos: "Phr", emoji: "👉", ex: { vi: "Đây là Linh.", de: "Das ist Linh." } },
        { vi: "người yêu", de: "Partner/in, feste/r Freund/in (wörtl. geliebter Mensch)", pos: "N", emoji: "❤️", note: "„người yêu tôi“ = meine Partnerin: Possessiv durch Nachstellung (→ K04).", ex: { vi: "Đây là người yêu tôi.", de: "Das ist meine Partnerin." } }
      ],
      grammar: [
        {
          id: "g-k02-in-situ",
          title: "Fragewörter bleiben an Ort und Stelle",
          term: "in-situ-Fragewort (W-Frage ohne Bewegung)",
          pattern: "Aussagesatz, erfragte Konstituente → Fragewort",
          text: "Im Vietnamesischen wird eine W-Frage gebildet, indem man die **erfragte Konstituente** im Aussagesatz einfach **durch das Fragewort ersetzt**. Das Fragewort bleibt **in situ** („an seinem Platz“); es wandert nicht an den Satzanfang, und es gibt keine Inversion.\n\n- Aussage: `Anh tên là Jonas.` → Frage: `Anh tên là gì?` (Wie heißt du?)\n- Aussage: `Chị ấy là Linh.` → Frage: `Chị ấy là ai?` (Wer ist sie?)\n- Aussage: `Chị đi Ninh Bình.` → Frage: `Chị đi đâu?` (Wohin gehst du?)\n- Aussage: `Anh là người Đức.` → Frage: `Anh là người nước nào?` (Aus welchem Land bist du?)\n\nDie Antwort funktioniert genau umgekehrt: Man setzt die Information an die Stelle des Fragewortes. Das macht Fragen und Antworten sehr leicht – du musst nur einen Baustein austauschen.\n\nZu den einzelnen Wörtern:\n- `gì` (was) fragt nach Dingen und Namen; nach einem Nomen bedeutet es „was für ein“: `tên gì`.\n- `ai` (wer/wen) fragt nach Personen – in Subjekt- wie Objektposition: `Ai là Linh?` / `Đây là ai?`\n- `đâu` (wo/wohin) steht nach dem Verb: `ở đâu`, `đi đâu`.\n- `nào` (welch-) steht immer **nach einem Nomen**: `nước nào`, `người nào`.\n\nÜbrigens: `Anh tên là gì?` ist eine **Topik-Kommentar-Struktur** – „du (betreffend): Name ist was?“. Daneben ist auch `Anh tên gì?` (ohne `là`) üblich.",
          table: { head: ["Fragewort", "Bedeutung", "Beispiel"], rows: [
            ["gì", "was", "Anh tên là gì?"],
            ["ai", "wer, wen", "Chị ấy là ai?"],
            ["đâu", "wo, wohin", "Chị ở đâu?"],
            ["N + nào", "welche/r/s", "Anh là người nước nào?"]
          ] },
          examples: [
            { vi: "Anh tên là gì?", de: "Wie heißt du?", gloss: "älterer.Bruder | Name | KOP | was" },
            { vi: "Đây là ai?", de: "Wer ist das?", gloss: "hier | KOP | wer" },
            { vi: "Chị ở đâu?", de: "Wo wohnst du?", gloss: "ältere.Schwester | sich.befinden | wo" },
            { vi: "Bạn là người nước nào?", de: "Woher kommst du?", gloss: "Freund | KOP | Mensch | Land | welch" }
          ],
          contrast: "Deutsch stellt das Fragewort an den Satzanfang und das Verb an die zweite Stelle („**Wo** wohnst du?“). Vietnamesisch lässt alles stehen – wie das deutsche Echo-Fragemuster „Du wohnst **wo**?“, nur ohne dessen Überraschungston."
        },
        {
          id: "g-k02-plural-pronomen",
          title: "Plural und dritte Person",
          term: "Pluralmarker chúng/các; Inklusiv-Exklusiv-Distinktion; Demonstrativ ấy",
          text: "**Erste Person Plural:** Das Vietnamesische unterscheidet zwei „wir“:\n- `chúng tôi` – **exklusiv**: wir **ohne** dich. Jonas zu Quang: `Chúng tôi là người Đức.` (Linh und ich, nicht du.)\n- `chúng ta` – **inklusiv**: wir **mit** dir. `Chúng ta đi đâu?` (Wohin gehen wir alle?)\n\nGegenüber Älteren pluralisiert man die bescheidene Selbstbezeichnung: `chúng em`, `chúng cháu`.\n\n**Zweite Person Plural:** `các` + Anredeterm: `các bạn` (ihr, Gleichaltrige), `các anh`, `các chị`, `các em`. `các` bezeichnet die ganze Gruppe der Angesprochenen.\n\n**Dritte Person:** Man nimmt den passenden Anredeterm und fügt das Demonstrativum `ấy` („jener, besagte“) an: `anh ấy` (er, junger Mann), `chị ấy` (sie, junge Frau), `ông ấy`, `bà ấy`, `em ấy`, `cô ấy`. Auch hier kodiert das Pronomen also Alter und Geschlecht. Im Plural steht `họ` (sie).\n\nWichtig: `anh ấy` ist eine Einheit – lässt du `ấy` weg, wird daraus wieder die Anrede „du“: `Anh là Jonas` = „Du bist Jonas“, `Anh ấy là Jonas` = „Er ist Jonas“.",
          table: { head: ["", "Singular", "Plural"], rows: [
            ["1. Person", "tôi / em / cháu …", "chúng tôi (exkl.), chúng ta (inkl.), chúng em …"],
            ["2. Person", "anh, chị, bạn …", "các anh, các chị, các bạn …"],
            ["3. Person", "anh ấy, chị ấy, ông ấy …", "họ"]
          ] },
          examples: [
            { vi: "Chúng tôi là khách du lịch.", de: "Wir (aber nicht du) sind Touristen.", gloss: "PL | ich | KOP | Tourist" },
            { vi: "Chúng ta đi đâu?", de: "Wohin gehen wir (alle)?", gloss: "PL | INKL | gehen | wohin" },
            { vi: "Các bạn có mệt không?", de: "Seid ihr müde?", gloss: "PL | Freund | haben | müde | NEG" },
            { vi: "Chị ấy là người Đức.", de: "Sie ist Deutsche.", gloss: "ältere.Schwester | jene | KOP | Mensch | Deutschland" },
            { vi: "Họ là sinh viên.", de: "Sie sind Studenten.", gloss: "sie.PL | KOP | Student" }
          ],
          contrast: "Deutsches „wir“ ist mehrdeutig: Ob der Angesprochene dazugehört, muss man erraten. Vietnamesisch zwingt zur Entscheidung (chúng tôi vs. chúng ta). Und „er/sie“ trägt neben dem Geschlecht auch Alters- und Beziehungsinformation."
        }
      ],
      dialogue: {
        setting: "An einer Bia-hơi-Ecke in der Altstadt. Am Nachbartisch sitzt Anh Quang (ca. 35) und spricht Jonas an.",
        lines: [
          { who: "Quang", vi: "Chào anh! Anh tên là gì?", de: "Hallo! Wie heißen Sie?" },
          { who: "Jonas", vi: "Chào anh. Tôi tên là Jonas. Anh tên là gì?", de: "Hallo. Ich heiße Jonas. Und Sie?" },
          { who: "Quang", vi: "Tôi tên là Quang. Anh là người nước nào?", de: "Ich heiße Quang. Woher kommen Sie?" },
          { who: "Jonas", vi: "Tôi là người Đức. Tôi ở Berlin.", de: "Ich bin Deutscher. Ich wohne in Berlin." },
          { who: "Quang", vi: "Chị ấy là ai?", de: "Wer ist sie?" },
          { who: "Jonas", vi: "Đây là Linh, người yêu tôi.", de: "Das ist Linh, meine Partnerin." },
          { who: "Linh", vi: "Chào anh. Chúng tôi là khách du lịch.", de: "Hallo. Wir sind Touristen." },
          { who: "Quang", vi: "Anh chị đi đâu?", de: "Wohin fahren Sie beide?" },
          { who: "Linh", vi: "Chúng tôi đi Ninh Bình.", de: "Wir fahren nach Ninh Bình." },
          { who: "Quang", vi: "Ninh Bình đẹp!", de: "Ninh Bình ist schön!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Anh tên là ___?", de: "Wie heißt du?", options: ["gì", "ai", "đâu"], answer: "gì", explain: "Nach dem Namen fragt man mit gì (was)." },
        { type: "gap", vi: "Chị ấy là ___?", de: "Wer ist sie?", options: ["ai", "gì", "nào"], answer: "ai", explain: "Nach Personen fragt man mit ai (wer)." },
        { type: "gap", vi: "Anh là người nước ___?", de: "Aus welchem Land kommst du?", options: ["nào", "gì", "đâu"], answer: "nào", explain: "nào (welch-) steht nach einem Nomen: nước nào = welches Land." },
        { type: "gap", vi: "Chị đi ___?", de: "Wohin gehst du?", options: ["đâu", "ai", "nào"], answer: "đâu", explain: "đâu fragt nach Ort und Richtung und bleibt hinter dem Verb." },
        { type: "gap", vi: "___ là người Đức.", de: "Wir (Jonas und Linh, nicht du) sind Deutsche.", options: ["Chúng tôi", "Chúng ta", "Họ"], answer: "Chúng tôi", explain: "Schließt „wir“ die angesprochene Person aus, nimmt man das exklusive chúng tôi." },
        { type: "build", vi: "Anh tên là gì?", de: "Wie heißt du?", extra: ["ai"] },
        { type: "build", vi: "Chúng tôi là người Đức.", de: "Wir (Linh und ich, nicht du) sind Deutsche.", extra: ["ta"] },
        { type: "build", vi: "Anh ấy là người nước nào?", de: "Aus welchem Land kommt er?", extra: ["gì"] },
        { type: "translate", de: "Wie heißt du? (zu einer etwas älteren Frau)", answers: ["Chị tên là gì?", "Chị tên gì?", "Chị tên là gì ạ?", "Chị tên gì ạ?"] },
        { type: "translate", de: "Wer ist er?", answers: ["Anh ấy là ai?", "Ông ấy là ai?", "Chú ấy là ai?", "Bác ấy là ai?", "Em ấy là ai?"] },
        { type: "translate", de: "Wo wohnst du? (zu einem gleichaltrigen Freund)", answers: ["Bạn ở đâu?", "Anh ở đâu?"] },
        { type: "mc", q: "Wo steht das Fragewort im vietnamesischen Fragesatz?", options: ["immer am Satzanfang", "an der Stelle des erfragten Satzglieds", "immer am Satzende"], answer: 1, explain: "Fragewörter bleiben in situ: Sie ersetzen das erfragte Satzglied an dessen Position." },
        { type: "mc", q: "Jonas erzählt Quang: „___ đi Ninh Bình.“ Gemeint sind Linh und er, nicht Quang.", options: ["Chúng tôi", "Chúng ta", "Các bạn"], answer: 0, explain: "chúng tôi ist exklusiv. Mit chúng ta würde Jonas Quang zur Reise einladen." },
        { type: "listen", vi: "Chị ấy tên là Linh.", de: "Sie heißt Linh." },
        { type: "speak", vi: "Tôi tên là Jonas. Tôi ở Berlin.", de: "Ich heiße Jonas. Ich wohne in Berlin." },
        { type: "pairs", pairs: [["gì", "was"], ["ai", "wer"], ["đâu", "wo"], ["nào", "welche/r/s"], ["họ", "sie (Plural)"]] }
      ]
    }
  ],

  boss: {
    title: "Café in der Altstadt",
    npc: "Chị Hương",
    role: "Café-Besitzerin (ca. 40)",
    setting: "In einem kleinen Café über den Dächern der Altstadt bedient Chị Hương selbst. Sie ist neugierig auf die beiden Gäste. Jonas (30) spricht sie als chị an und nennt sich selbst em.",
    turns: [
      {
        npc: { vi: "Chào em! Em là người nước nào?", de: "Hallo! Woher kommst du?" },
        prompt: "Sag, dass du Deutscher bist – höflich.",
        choices: [
          { vi: "Dạ, em là người Đức ạ.", ok: true, fb: "Richtig: em als Selbstbezeichnung, người + Land, dazu dạ … ạ." },
          { vi: "Dạ, chị là người Đức ạ.", ok: false, fb: "chị ist hier „du“ – du hast gesagt: „Sie sind Deutsche“. Dich selbst nennst du gegenüber chị: em." },
          { vi: "Dạ, em là Đức ạ.", ok: false, fb: "Đức allein ist das Land. Die Nationalität braucht người: người Đức." }
        ]
      },
      {
        npc: { vi: "Em tên là gì?", de: "Wie heißt du?" },
        prompt: "Nenne deinen Namen.",
        choices: [
          { vi: "Dạ, em tên là Jonas ạ.", ok: true, fb: "Genau – das Fragewort gì wird einfach durch die Antwort ersetzt." },
          { vi: "Dạ, Jonas tên là gì ạ?", ok: false, fb: "Du hast die Frage zurückgestellt („Wie heißt Jonas?“). In der Antwort ersetzt der Name das Fragewort." },
          { vi: "Dạ, em là tên Jonas ạ.", ok: false, fb: "Falsche Reihenfolge: tên (Name) gehört vor là – „em tên là Jonas“." }
        ]
      },
      {
        npc: { vi: "Đây là ai?", de: "Wer ist das?" },
        prompt: "Stell Linh vor.",
        choices: [
          { vi: "Dạ, đây là Linh ạ.", ok: true, fb: "Richtig – „đây là …“ ist die Formel beim Vorstellen." },
          { vi: "Dạ, đây là anh Linh ạ.", ok: false, fb: "anh bezeichnet einen Mann. Linh ist eine Frau – und deine Partnerin stellst du einfach mit Namen vor." },
          { vi: "Dạ, Linh là đây ạ.", ok: false, fb: "Wortstellung: Beim Vorstellen steht đây vorn: „Đây là Linh“." }
        ]
      },
      {
        npc: { vi: "Linh là người Việt, phải không?", de: "Linh ist Vietnamesin, oder?" },
        prompt: "Korrigiere freundlich: Linh ist Deutsche vietnamesischer Herkunft.",
        choices: [
          { vi: "Dạ, không phải ạ. Linh là người Đức gốc Việt.", ok: true, fb: "Perfekt – không phải verneint die phải-Frage, danach die Korrektur." },
          { vi: "Dạ, không. Linh là không người Việt.", ok: false, fb: "Die Negation steht nicht nach là. Verneint wird mit „không phải (là)“ vor dem Prädikat." },
          { vi: "Dạ, Linh không là người Việt ạ.", ok: false, fb: "„không là“ gibt es nicht. Die Kopula wird mit không phải (là) verneint." }
        ]
      },
      {
        npc: { vi: "Em có khỏe không?", de: "Geht es dir gut?" },
        prompt: "Sag, dass es dir gut geht, und bedanke dich.",
        choices: [
          { vi: "Dạ, em khỏe ạ. Cảm ơn chị.", ok: true, fb: "Sehr gut – khỏe ist ein Stativverb, ganz ohne là." },
          { vi: "Dạ, em là khỏe ạ. Cảm ơn chị.", ok: false, fb: "là steht nur vor Nomen. khỏe ist ein Stativverb: „em khỏe“." },
          { vi: "Có, chị khỏe. Cảm ơn chị.", ok: false, fb: "chị ist „du“ – du sagst, dass es IHR gut geht. Über dich selbst sprichst du mit em." }
        ]
      },
      {
        npc: { vi: "Hai em có uống cà phê trứng không?", de: "Trinkt ihr zwei Eierkaffee?" },
        prompt: "Sag ja: Ihr beide (nicht Chị Hương) trinkt Eierkaffee.",
        choices: [
          { vi: "Dạ, có ạ. Chúng em uống cà phê trứng.", ok: true, fb: "Richtig – chúng em: das bescheidene „wir“ gegenüber Älteren, ohne die Angesprochene." },
          { vi: "Dạ, có ạ. Chúng ta uống cà phê trứng.", ok: false, fb: "chúng ta ist inklusiv – das hieße, Chị Hương trinkt mit. Gemeint seid nur ihr zwei: chúng em (oder chúng tôi)." },
          { vi: "Dạ, có không ạ.", ok: false, fb: "có … không ist der Fragerahmen. Als Antwort genügt „Dạ, có ạ“." }
        ]
      },
      {
        npc: { vi: "Các em đi đâu?", de: "Wohin geht ihr jetzt?" },
        prompt: "Sag, dass ihr zum Hoàn-Kiếm-See geht.",
        choices: [
          { vi: "Dạ, chúng em đi hồ Hoàn Kiếm ạ.", ok: true, fb: "Genau – der Ort ersetzt das Fragewort đâu an derselben Stelle." },
          { vi: "Dạ, đâu chúng em đi hồ Hoàn Kiếm ạ.", ok: false, fb: "Das Fragewort hat in der Antwort nichts zu suchen – und đâu steht auch in der Frage hinter dem Verb." },
          { vi: "Dạ, chúng em đi đâu hồ Hoàn Kiếm ạ.", ok: false, fb: "In der Antwort wird đâu durch den Ort ERSETZT, nicht ergänzt." }
        ]
      },
      {
        npc: { vi: "Tạm biệt hai em!", de: "Tschüss, ihr zwei!" },
        prompt: "Verabschiede dich höflich und bedanke dich.",
        choices: [
          { vi: "Dạ, em chào chị ạ. Cảm ơn chị!", ok: true, fb: "Perfekt – chào gilt auch zum Abschied, mit em … chị … ạ." },
          { vi: "Chào em! Cảm ơn em!", ok: false, fb: "Falsche Richtung: em sagt man zu Jüngeren. Chị Hương ist älter – sie ist chị." },
          { vi: "Chào bạn! Cảm ơn bạn!", ok: false, fb: "bạn ist die Anrede unter Gleichaltrigen und wirkt gegenüber einer älteren Café-Besitzerin respektlos." }
        ]
      }
    ],
    win: { vi: "Em nói tiếng Việt giỏi quá!", de: "Du sprichst aber gut Vietnamesisch!" }
  }
});
