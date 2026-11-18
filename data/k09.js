/* K09 Nha Trang – Arbeit & Beruf */
VN.addChapter({
  id: "k09",
  place: "Nha Trang",
  region: "Südliche Zentralküste",
  title: "Arbeit & Beruf",
  intro: "In der Küstenstadt Nha Trang arbeitet Jonas einige Tage bei einem Partnerunternehmen – mit Teamleiter Anh Minh, Chị Thảo und Em Huy. Du lernst, über Berufe zu sprechen, Modalität auszudrücken (müssen, sollen, können, dürfen), Termine am Telefon zu vereinbaren und im Büro das richtige Register gegenüber Vorgesetzten zu treffen.",
  lessons: [
    // ───────────────────────────── k09l1 ─────────────────────────────
    {
      id: "k09l1",
      title: "Berufe & Arbeitsplatz",
      goal: "Du kannst nach Beruf und Arbeitsplatz fragen und über deine eigene Arbeit sprechen.",
      vocab: [
        { vi: "nghề", de: "Beruf, Handwerk", pos: "N", emoji: "🧰", ex: { vi: "Tôi thích nghề này.", de: "Ich mag diesen Beruf." } },
        { vi: "làm nghề gì?", de: "Was machst du beruflich?", pos: "Phr", note: "wörtlich „welchen Beruf machen?“", ex: { vi: "Chị Thảo làm nghề gì?", de: "Was ist Chị Thảo von Beruf?" } },
        { vi: "làm việc", de: "arbeiten", pos: "V", emoji: "💼", ex: { vi: "Tôi làm việc ở Berlin.", de: "Ich arbeite in Berlin." } },
        { vi: "công ty", de: "Firma, Unternehmen", pos: "N", emoji: "🏢", ex: { vi: "Công ty này ở Nha Trang.", de: "Diese Firma ist in Nha Trang." } },
        { vi: "văn phòng", de: "Büro", pos: "N", emoji: "🖥️", ex: { vi: "Văn phòng của anh Minh ở đâu?", de: "Wo ist das Büro von Anh Minh?" } },
        { vi: "kỹ sư", de: "Ingenieur/in", pos: "N", emoji: "👷", note: "sinovietn.: kỹ „Technik“ + sư „Meister“", ex: { vi: "Jonas là kỹ sư.", de: "Jonas ist Ingenieur." } },
        { vi: "giáo viên", de: "Lehrer/in", pos: "N", emoji: "👩‍🏫", ex: { vi: "Mẹ của Linh là giáo viên.", de: "Linhs Mutter ist Lehrerin." } },
        { vi: "bác sĩ", de: "Arzt/Ärztin", pos: "N", emoji: "🩺", ex: { vi: "Anh trai tôi là bác sĩ.", de: "Mein älterer Bruder ist Arzt." } },
        { vi: "nhân viên", de: "Angestellte/r, Mitarbeiter/in", pos: "N", emoji: "🧑‍💼", ex: { vi: "Công ty có năm mươi nhân viên.", de: "Die Firma hat fünfzig Mitarbeiter." } },
        { vi: "quản lý", de: "Manager/in, Leiter/in; leiten", pos: "N", ex: { vi: "Anh Minh là quản lý của nhóm này.", de: "Anh Minh ist der Leiter dieses Teams." } },
        { vi: "nhóm", de: "Gruppe, Team", pos: "N", emoji: "👥", ex: { vi: "Nhóm của anh Minh có sáu người.", de: "Anh Minhs Team hat sechs Leute." } },
        { vi: "đồng nghiệp", de: "Kollege/Kollegin", pos: "N", emoji: "🤝", ex: { vi: "Chị Thảo là đồng nghiệp của Jonas.", de: "Chị Thảo ist Jonas’ Kollegin." } },
        { vi: "nhà báo", de: "Journalist/in", pos: "N", emoji: "📰", ex: { vi: "Bạn của Linh là nhà báo.", de: "Linhs Freundin ist Journalistin." } },
        { vi: "thợ", de: "Handwerker/in (+ Fachgebiet)", pos: "N", emoji: "🔧", note: "thợ điện = Elektriker, thợ may = Schneider", ex: { vi: "Bố của Huy là thợ điện.", de: "Huys Vater ist Elektriker." } },
        { vi: "nghỉ hưu", de: "in Rente gehen, pensioniert sein", pos: "V", emoji: "🏖️", ex: { vi: "Bố mẹ Linh đã nghỉ hưu rồi.", de: "Linhs Eltern sind schon in Rente." } },
        { vi: "công việc", de: "Arbeit, Aufgabe(n)", pos: "N", ex: { vi: "Công việc của anh có vui không?", de: "Macht dir deine Arbeit Spaß?" } }
      ],
      grammar: [
        {
          id: "g-k09-nghe-nghiep",
          title: "Nach dem Beruf fragen: là, làm, làm việc ở",
          term: "Kopula vs. Vollverb mit Berufsnomen",
          pattern: "S + là + Beruf · S + làm + Beruf · S + làm việc ở + Ort",
          text: "Für Berufsangaben hat das Vietnamesische zwei Strategien. Die **Kopulakonstruktion** `là` + Nomen (K02) ordnet das Subjekt einer Klasse zu: `Tôi là kỹ sư.` – „Ich bin Ingenieur.“ Daneben steht das Vollverb `làm` („machen, tätig sein als“) direkt mit dem Berufsnomen: `Tôi làm kỹ sư.` Wörtlich „Ich mache Ingenieur“ – gemeint ist die ausgeübte Tätigkeit oder Rolle. Beide Varianten sind korrekt; `là` ist identifizierend, `làm` betont die Funktion. Falsch ist die Kombination *`Tôi là làm kỹ sư`*.\n\nGefragt wird mit dem Fragewort in situ (K02): `Anh làm nghề gì?` – wörtlich „Du machst welchen Beruf?“. `nghề gì` steht dort, wo in der Antwort das Berufsnomen steht. Umgangssprachlich genügt `Anh làm gì?`, das aber mehrdeutig ist: „Was arbeitest du?“ oder „Was machst du (gerade)?“ – der Kontext entscheidet.\n\nDen Arbeitsort schließt die Präposition `ở` an (K07): `Tôi làm việc ở công ty này.` Die Frage dazu lautet `Anh làm việc ở đâu?`. Die Ortsangabe steht **nach** dem Verb, nicht davor.\n\nBerufsnomen sind genusneutral: `giáo viên` ist Lehrer wie Lehrerin; bei Bedarf wird mit `nam`/`nữ` präzisiert.",
          table: {
            head: ["Frage", "Antwort", "Deutsch"],
            rows: [
              ["Anh làm nghề gì?", "Tôi là kỹ sư.", "Ich bin Ingenieur."],
              ["Chị làm gì?", "Tôi làm giáo viên.", "Ich arbeite als Lehrerin."],
              ["Em làm việc ở đâu?", "Em làm việc ở Nha Trang.", "Ich arbeite in Nha Trang."],
              ["Anh làm ở công ty nào?", "Tôi làm ở công ty này.", "Ich arbeite bei dieser Firma."]
            ]
          },
          examples: [
            { vi: "Anh làm nghề gì?", de: "Was bist du von Beruf?", gloss: "du | machen | Beruf | was" },
            { vi: "Tôi là kỹ sư.", de: "Ich bin Ingenieur.", gloss: "ich | sein | Ingenieur" },
            { vi: "Chị Thảo làm việc ở văn phòng.", de: "Chị Thảo arbeitet im Büro.", gloss: "Chị Thảo | arbeiten | in | Büro" },
            { vi: "Bố tôi làm bác sĩ ở Hà Nội.", de: "Mein Vater arbeitet als Arzt in Hà Nội.", gloss: "Vater | ich | machen | Arzt | in | Hà Nội" }
          ],
          contrast: "Wie im Deutschen („Ich bin Ingenieur“) steht vor Berufsbezeichnungen kein Artikel – anders als im Englischen („I am an engineer“). Das Deutsche markiert aber das Genus (Ingenieur/Ingenieurin), das Vietnamesische nicht."
        },
        {
          id: "g-k09-berufsbezeichnung",
          title: "Wie Berufsbezeichnungen gebildet werden",
          term: "Wortbildung: sinovietnamesische Formative vs. native Komposita",
          pattern: "X + viên / sư / sĩ · nhà / thợ + X",
          text: "Viele Berufsbezeichnungen sind **sinovietnamesisch** (aus chinesischen Morphemen) und folgen der chinesischen Wortstellung **Modifikator – Kopf**: Das bedeutungstragende Element steht vorn, das Formativ für „Person“ hinten.\n\n- `-viên` (員, „Mitglied“): `giáo viên` (Lehrer), `nhân viên` (Angestellter), `sinh viên` (Student)\n- `-sư` (師, „Meister“): `kỹ sư` (Ingenieur), `luật sư` (Anwalt), `giáo sư` (Professor)\n- `-sĩ` (士, „Gelehrter“): `bác sĩ` (Arzt), `nha sĩ` (Zahnarzt), `ca sĩ` (Sänger)\n\nNative Bildungen folgen dagegen der vietnamesischen Ordnung **Kopf – Modifikator** wie in jeder Nominalphrase (K06: `áo đỏ`): `thợ điện` („Handwerker + Strom“ = Elektriker), `thợ may` (Schneider), `nhà báo` („Haus/Person + Zeitung“ = Journalist), `nhà văn` (Schriftsteller). Das Präfix `nhà` signalisiert dabei oft Prestige (Experte, Künstler), `thợ` dagegen handwerkliche Tätigkeit.\n\nDiese Formative sind nicht frei produktiv wie das deutsche *-er*; man lernt die Wörter am besten als Ganzes. Sie helfen aber beim Erschließen unbekannter Wörter: Ein Wort auf `-viên` bezeichnet fast immer eine Person in einer Institution. Mehr zur Kopfstellung folgt in K12.",
          table: {
            head: ["Formativ", "Beispiel", "Deutsch", "Stellung"],
            rows: [
              ["-viên", "giáo viên, nhân viên", "Lehrer/in, Angestellte/r", "Modifikator – Kopf (sinovietn.)"],
              ["-sư", "kỹ sư, luật sư", "Ingenieur/in, Anwalt/Anwältin", "Modifikator – Kopf (sinovietn.)"],
              ["-sĩ", "bác sĩ, ca sĩ", "Arzt/Ärztin, Sänger/in", "Modifikator – Kopf (sinovietn.)"],
              ["nhà-", "nhà báo, nhà văn", "Journalist/in, Schriftsteller/in", "Kopf – Modifikator (nativ)"],
              ["thợ-", "thợ điện, thợ may", "Elektriker/in, Schneider/in", "Kopf – Modifikator (nativ)"]
            ]
          },
          examples: [
            { vi: "Chị ấy là luật sư.", de: "Sie ist Anwältin." },
            { vi: "Anh Minh không phải là nhà báo.", de: "Anh Minh ist kein Journalist." },
            { vi: "Công ty có ba thợ điện.", de: "Die Firma hat drei Elektriker.", gloss: "Firma | haben | drei | Handwerker | Strom" },
            { vi: "Huy là kỹ sư, giống Jonas.", de: "Huy ist Ingenieur, wie Jonas." }
          ],
          contrast: "Das Deutsche bildet Personenbezeichnungen mit Suffixen (Lehr-er, Journal-ist) und markiert das Femininum mit -in. Im Vietnamesischen gibt es dafür keine Movierung; die Formative -viên, -sư, -sĩ sind genusneutral."
        }
      ],
      dialogue: {
        setting: "Jonas’ erster Morgen im Büro des Partnerunternehmens in Nha Trang. Em Huy, ein junger Kollege, begrüßt ihn.",
        lines: [
          { who: "Huy", vi: "Chào anh! Em là Huy. Anh là anh Jonas, phải không ạ?", de: "Hallo! Ich bin Huy. Du bist Jonas, oder?" },
          { who: "Jonas", vi: "Phải, anh là Jonas. Em làm nghề gì?", de: "Ja, ich bin Jonas. Was machst du beruflich?" },
          { who: "Huy", vi: "Dạ, em là kỹ sư, giống anh. Em làm việc ở nhóm của anh Minh.", de: "Ich bin Ingenieur, wie du. Ich arbeite in Anh Minhs Team." },
          { who: "Jonas", vi: "Anh Minh là quản lý nhóm, phải không?", de: "Anh Minh ist der Teamleiter, richtig?" },
          { who: "Huy", vi: "Dạ, phải. Chị Thảo làm việc ở văn phòng bên cạnh.", de: "Ja, genau. Chị Thảo arbeitet im Büro nebenan." },
          { who: "Jonas", vi: "Công ty có bao nhiêu nhân viên?", de: "Wie viele Mitarbeiter hat die Firma?" },
          { who: "Huy", vi: "Dạ, tám mươi người ạ. Anh làm việc ở Berlin, phải không ạ?", de: "Achtzig Leute. Du arbeitest in Berlin, oder?" },
          { who: "Jonas", vi: "Phải. Văn phòng của anh ở Berlin. Công việc ở đây rất vui!", de: "Ja. Mein Büro ist in Berlin. Die Arbeit hier macht großen Spaß!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Anh Minh ___ quản lý nhóm.", de: "Anh Minh ist Teamleiter.", options: ["là", "có", "ở"], answer: "là", explain: "Identifizierende Berufsangabe mit der Kopula là + Nomen." },
        { type: "gap", vi: "Chị Thảo làm việc ___ công ty này.", de: "Chị Thảo arbeitet bei dieser Firma.", options: ["ở", "là", "của"], answer: "ở", explain: "Der Arbeitsort wird mit der Präposition ở nach dem Verb angeschlossen." },
        { type: "gap", vi: "Em làm nghề ___?", de: "Was machst du beruflich?", options: ["gì", "ai", "đâu"], answer: "gì", explain: "nghề gì = welcher Beruf; das Fragewort bleibt in situ hinter dem Nomen." },
        { type: "gap", vi: "Bố của Huy là ___ điện.", de: "Huys Vater ist Elektriker.", options: ["thợ", "nhà", "viên"], answer: "thợ", explain: "thợ + Fachgebiet bezeichnet Handwerksberufe (native Bildung: Kopf vorn)." },
        { type: "build", vi: "Tôi làm việc ở Berlin.", de: "Ich arbeite in Berlin.", extra: ["là", "đâu"] },
        { type: "build", vi: "Chị Thảo làm nghề gì?", de: "Was ist Chị Thảo von Beruf?", extra: ["ai", "là"] },
        { type: "build", vi: "Công ty này có năm mươi nhân viên.", de: "Diese Firma hat fünfzig Mitarbeiter.", extra: ["là", "con"] },
        { type: "build", vi: "Anh Minh là quản lý của nhóm.", de: "Anh Minh ist der Leiter des Teams.", extra: ["có", "ở"] },
        { type: "translate", de: "Ich bin Ingenieur.", answers: ["Tôi là kỹ sư.", "Tôi làm kỹ sư.", "Anh là kỹ sư.", "Em là kỹ sư.", "Tôi là kĩ sư."] },
        { type: "translate", de: "Wo arbeitest du? (zu einem etwas älteren Mann)", answers: ["Anh làm việc ở đâu?", "Anh làm ở đâu?"] },
        { type: "mc", q: "Was bedeutet „Anh làm gì?“ ohne weiteren Kontext?", options: ["„Was arbeitest du?“ oder „Was machst du gerade?“ – beides möglich", "„Wer bist du?“", "„Wo arbeitest du?“"], answer: 0, explain: "làm gì ist mehrdeutig; eindeutig nach dem Beruf fragt làm nghề gì." },
        { type: "mc", q: "Welches Wort ist sinovietnamesisch gebildet (Modifikator vor Kopf)?", options: ["kỹ sư", "thợ điện", "nhà báo"], answer: 0, explain: "kỹ sư: kỹ „Technik“ modifiziert sư „Meister“. thợ điện und nhà báo sind nativ: Kopf vorn." },
        { type: "mc", q: "Welcher Satz ist falsch?", options: ["Tôi là làm kỹ sư.", "Tôi là kỹ sư.", "Tôi làm kỹ sư."], answer: 0, explain: "Entweder Kopula là oder Vollverb làm – nicht beides." },
        { type: "listen", vi: "Mẹ của Linh là giáo viên.", de: "Linhs Mutter ist Lehrerin." },
        { type: "speak", vi: "Tôi là kỹ sư, tôi làm việc ở Berlin.", de: "Ich bin Ingenieur, ich arbeite in Berlin." },
        { type: "pairs", pairs: [["kỹ sư", "Ingenieur/in"], ["giáo viên", "Lehrer/in"], ["bác sĩ", "Arzt/Ärztin"], ["nhân viên", "Angestellte/r"], ["đồng nghiệp", "Kollege/Kollegin"]] }
      ]
    },

    // ───────────────────────────── k09l2 ─────────────────────────────
    {
      id: "k09l2",
      title: "Modalität",
      goal: "Du kannst ausdrücken, was man muss, soll, kann, darf und nicht braucht – etwa bei Regeln im Büro.",
      vocab: [
        { vi: "phải", de: "müssen", pos: "V", note: "Modalauxiliar vor dem Verb", ex: { vi: "Tôi phải đi làm sớm.", de: "Ich muss früh zur Arbeit." } },
        { vi: "cần", de: "brauchen; nötig sein", pos: "V", ex: { vi: "Tôi cần một cốc cà phê.", de: "Ich brauche einen Kaffee." } },
        { vi: "nên", de: "sollte(n); es ist ratsam", pos: "V", ex: { vi: "Anh nên ngủ sớm.", de: "Du solltest früh schlafen." } },
        { vi: "có thể", de: "können; möglich sein", pos: "V", ex: { vi: "Ngày mai tôi có thể đến.", de: "Morgen kann ich kommen." } },
        { vi: "biết", de: "wissen; (gelernt) können", pos: "V", note: "biết + V = erlernte Fertigkeit", ex: { vi: "Jonas biết nói tiếng Việt.", de: "Jonas kann Vietnamesisch sprechen." } },
        { vi: "được", de: "dürfen; bekommen", pos: "V", note: "vor dem Verb: Erlaubnis", ex: { vi: "Thứ sáu, nhân viên được về sớm.", de: "Freitags dürfen die Mitarbeiter früh gehen." } },
        { vi: "không được", de: "nicht dürfen, verboten", pos: "Phr", emoji: "🚫", ex: { vi: "Ở đây không được hút thuốc.", de: "Hier darf man nicht rauchen." } },
        { vi: "không cần", de: "nicht nötig, nicht brauchen", pos: "Phr", ex: { vi: "Anh không cần đến sớm.", de: "Du musst nicht früh kommen." } },
        { vi: "hút thuốc", de: "rauchen", pos: "V", emoji: "🚬", ex: { vi: "Anh Minh không hút thuốc.", de: "Anh Minh raucht nicht." } },
        { vi: "máy tính", de: "Computer, Rechner", pos: "N", cls: "cái", emoji: "💻", ex: { vi: "Tôi cần một cái máy tính.", de: "Ich brauche einen Computer." } },
        { vi: "quy định", de: "Vorschrift, Regel", pos: "N", emoji: "📋", ex: { vi: "Đây là quy định của công ty.", de: "Das ist eine Vorschrift der Firma." } },
        { vi: "lái xe", de: "(ein Fahrzeug) fahren, lenken", pos: "V", emoji: "🚗", ex: { vi: "Huy biết lái xe máy.", de: "Huy kann Moped fahren." } },
        { vi: "bơi", de: "schwimmen", pos: "V", emoji: "🏊", ex: { vi: "Jonas biết bơi.", de: "Jonas kann schwimmen." } },
        { vi: "biển", de: "Meer, Strand", pos: "N", emoji: "🌊", ex: { vi: "Biển ở Nha Trang rất đẹp.", de: "Das Meer in Nha Trang ist sehr schön." } },
        { vi: "giờ làm việc", de: "Arbeitszeit", pos: "N", emoji: "🕗", ex: { vi: "Giờ làm việc từ tám giờ đến năm giờ.", de: "Die Arbeitszeit ist von acht bis fünf Uhr." } }
      ],
      grammar: [
        {
          id: "g-k09-modal-noetig",
          title: "phải, cần, nên – Notwendigkeit und Empfehlung",
          term: "Modalauxiliar (deontische Modalität)",
          pattern: "S + (Aspekt) + phải / cần / nên + V",
          text: "Modalauxiliare stehen im Vietnamesischen **vor dem Hauptverb**, direkt nach dem Subjekt bzw. nach einem Aspektmarker. Sie werden nicht flektiert und brauchen keine Infinitivpartikel. Alle drei hier drücken **deontische** Modalität aus, d. h. Notwendigkeit oder Verpflichtung aus Sicht von Regeln, Bedürfnissen oder Ratschlägen.\n\n- `phải` – „müssen“: äußerer Zwang, Pflicht, Regel. `Tôi phải đi làm.`\n- `cần` – „brauchen, nötig sein“: Bedarf. Anders als `phải` kann `cần` auch direkt ein Nomen regieren: `Tôi cần một cái máy tính.` – „Ich brauche einen Computer.“\n- `nên` – „sollte“: Empfehlung, Rat; schwächer als `phải`. `Anh nên nghỉ.`\n\nAspektmarker (K08) stehen **vor** dem Modal: `Ngày mai tôi sẽ phải đi sớm.` – „Morgen werde ich früh gehen müssen.“ Die Entscheidungsfrage wird wie bei jedem Verb mit `có … không` gebildet: `Em có phải đi làm không?` – „Musst du arbeiten?“, `Anh có cần gì không?` – „Brauchst du etwas?“.\n\nDie Stellung bleibt in allen Satzarten gleich – es gibt keine Satzklammer und keine Verbzweitstellung. Wer Deutsch denkt („Ich muss morgen früh arbeiten“), darf das Hauptverb also nicht ans Satzende schieben.",
          table: {
            head: ["Modal", "Bedeutung", "Beispiel", "Deutsch"],
            rows: [
              ["phải", "Pflicht, Zwang", "Tôi phải đi làm.", "Ich muss zur Arbeit."],
              ["cần", "Bedarf", "Em cần nghỉ.", "Du musst dich ausruhen (brauchst Ruhe)."],
              ["cần + N", "brauchen", "Tôi cần máy tính.", "Ich brauche einen Computer."],
              ["nên", "Rat, Empfehlung", "Anh nên đi biển.", "Du solltest an den Strand gehen."]
            ]
          },
          examples: [
            { vi: "Hôm nay tôi phải làm việc đến bảy giờ tối.", de: "Heute muss ich bis sieben Uhr abends arbeiten.", gloss: "heute | ich | müssen | arbeiten | bis | sieben | Uhr | abends" },
            { vi: "Em có cần máy tính không?", de: "Brauchst du einen Computer?" },
            { vi: "Anh mệt quá, anh nên nghỉ.", de: "Du bist sehr müde, du solltest dich ausruhen." },
            { vi: "Ngày mai chúng tôi sẽ phải họp.", de: "Morgen werden wir eine Besprechung haben müssen.", gloss: "morgen | wir | FUT | müssen | Besprechung haben" }
          ],
          contrast: "Im Deutschen bildet das Modalverb mit dem Infinitiv am Satzende eine Klammer („Ich muss morgen früh arbeiten“). Im Vietnamesischen stehen Modal und Hauptverb immer direkt nebeneinander: Tôi phải làm việc sớm."
        },
        {
          id: "g-k09-modal-koennen",
          title: "Können und Dürfen: có thể, biết, V + được, được + V",
          term: "Modalität: dynamisch, epistemisch, deontisch",
          pattern: "có thể + V · biết + V · V + được · được + V",
          text: "Das deutsche *können* deckt mehrere Modalitätstypen ab. Das Vietnamesische trennt sie lexikalisch:\n\n- `biết` + V: **erlernte Fertigkeit** (dynamische Modalität). `Tôi biết bơi.` – „Ich kann schwimmen (habe es gelernt).“ Ohne Verb heißt `biết` „wissen, kennen“.\n- V + `được` (K05): **Fähigkeit im konkreten Fall**, Machbarkeit. `Hôm nay tôi bơi được.` – „Heute kann ich schwimmen (es geht).“ Negiert: `không bơi được` – „kann nicht schwimmen (jetzt, aus einem Grund)“.\n- `có thể` + V: **allgemeine Möglichkeit**. Sie ist auch **epistemisch** verwendbar, d. h. als Einschätzung der Wahrscheinlichkeit: `Chiều nay có thể mưa.` – „Heute Nachmittag könnte es regnen.“ Häufig wird `có thể` mit nachgestelltem `được` verstärkt: `Anh có thể đến được không?`\n- `được` + V (**vor** dem Verb): **Erlaubnis** (deontisch, „dürfen“) oder ein günstiger Umstand („die Gelegenheit haben“). `Nhân viên được về sớm.` – „Die Mitarbeiter dürfen früh gehen.“\n\nDie Stellung von `được` ist also bedeutungsunterscheidend: vor dem Verb = Erlaubnis, nach dem Verb = Machbarkeit. Die Frage nach einer Erlaubnis lautet `Ở đây có được hút thuốc không?` – „Darf man hier rauchen?“ Das Subjekt kann dabei fehlen, wenn eine allgemeine Regel gemeint ist (deutsch: *man*).",
          table: {
            head: ["Form", "Modalität", "Beispiel", "Deutsch"],
            rows: [
              ["biết + V", "erlernte Fertigkeit", "Huy biết lái xe.", "Huy kann Auto fahren."],
              ["V + được", "konkret machbar", "Tôi ăn cay được.", "Ich kann scharf essen."],
              ["có thể + V", "möglich (auch: vermutlich)", "Chiều nay có thể mưa.", "Heute Nachmittag könnte es regnen."],
              ["được + V", "Erlaubnis", "Em được về sớm.", "Du darfst früh gehen."]
            ]
          },
          examples: [
            { vi: "Jonas biết nói tiếng Việt.", de: "Jonas kann Vietnamesisch (sprechen)." },
            { vi: "Ngày mai tôi có thể đến sớm.", de: "Morgen kann ich früh kommen." },
            { vi: "Thứ sáu, nhân viên được về sớm.", de: "Freitags dürfen die Mitarbeiter früher gehen.", gloss: "Freitag | Mitarbeiter | dürfen | heimgehen | früh" },
            { vi: "Ở văn phòng có được hút thuốc không?", de: "Darf man im Büro rauchen?" }
          ],
          contrast: "„Ich kann schwimmen“ (gelernt), „Ich kann heute nicht schwimmen“ (geht nicht) und „Du kannst jetzt gehen“ (Erlaubnis) sind im Deutschen alle *können*. Vietnamesisch braucht drei Formen: biết bơi, không bơi được, được về."
        },
        {
          id: "g-k09-modal-negation",
          title: "Verbot oder Nicht-Müssen? Modale verneinen",
          term: "Skopus der Negation bei Modalauxiliaren",
          pattern: "không được + V (Verbot) · không cần / không phải + V (nicht nötig)",
          text: "Die Negation `không` steht immer **vor dem Modal**, nicht vor dem Hauptverb. Was dabei herauskommt, ist je nach Modal sehr verschieden – und genau hier liegen typische Fehler:\n\n- `không được` + V: **Verbot** – „nicht dürfen“. `Ở đây không được hút thuốc.`\n- `không cần` + V oder `không cần phải` + V: **keine Notwendigkeit** – „nicht müssen, nicht brauchen“. `Anh không cần đến sớm.`\n- `không phải` + V: ebenfalls „nicht müssen“. Vorsicht vor Verwechslung mit `không phải là` (K02, „nicht sein“): Folgt ein Verb, ist es das Modal.\n- `không nên` + V: Abraten – „sollte nicht“.\n- `không thể` + V: Unmöglichkeit – „kann nicht“.\n- `không biết` + V: nicht gelernt – „kann nicht (schwimmen usw.)“.\n\nAls Kurzantwort genügt das Modal allein: `Được.` – „Geht/Darf man.“ – `Không được.` – „Geht nicht./Verboten.“ – `Không cần.` – „Nicht nötig.“ Wer statt `không cần` versehentlich `không được` sagt, verbietet etwas, das nur unnötig ist – im Büro ein unangenehmes Missverständnis.",
          table: {
            head: ["Negiertes Modal", "Bedeutung", "Beispiel"],
            rows: [
              ["không được", "nicht dürfen (Verbot)", "Không được hút thuốc."],
              ["không cần (phải)", "nicht müssen, nicht nötig", "Em không cần mang máy tính."],
              ["không phải + V", "nicht müssen", "Mai anh không phải đi làm."],
              ["không nên", "sollte nicht", "Anh không nên uống nhiều cà phê."],
              ["không thể", "kann nicht (unmöglich)", "Hôm nay tôi không thể đến."],
              ["không biết + V", "kann nicht (nicht gelernt)", "Tôi không biết lái xe."]
            ]
          },
          examples: [
            { vi: "Trong văn phòng không được hút thuốc.", de: "Im Büro ist Rauchen verboten." },
            { vi: "Em không cần mang máy tính.", de: "Du musst keinen Computer mitbringen." },
            { vi: "Ngày mai anh không phải đi làm.", de: "Morgen muss ich nicht arbeiten." },
            { vi: "Tôi không biết lái xe máy.", de: "Ich kann nicht Moped fahren." }
          ],
          contrast: "Auch im Deutschen sind „nicht müssen“ und „nicht dürfen“ verschieden; Englischlernende kennen die Falle „must not“ = „nicht dürfen“. Im Vietnamesischen gilt: không được = nicht dürfen, không cần/không phải = nicht müssen."
        }
      ],
      dialogue: {
        setting: "Chị Thảo zeigt Jonas das Büro und erklärt die Regeln. Sie ist etwas älter als Jonas.",
        lines: [
          { who: "Thảo", vi: "Đây là văn phòng của nhóm. Em có thể ngồi ở đây.", de: "Das ist das Büro des Teams. Du kannst hier sitzen." },
          { who: "Jonas", vi: "Cảm ơn chị. Ở văn phòng có được hút thuốc không ạ?", de: "Danke. Darf man im Büro rauchen?" },
          { who: "Thảo", vi: "Không được em ạ. Em phải ra ngoài.", de: "Nein, das ist verboten. Du musst nach draußen gehen." },
          { who: "Jonas", vi: "Mấy giờ em phải đến văn phòng ạ?", de: "Um wie viel Uhr muss ich im Büro sein?" },
          { who: "Thảo", vi: "Giờ làm việc từ tám giờ. Em không cần đến sớm hơn.", de: "Die Arbeitszeit beginnt um acht. Du musst nicht früher kommen." },
          { who: "Jonas", vi: "Em có cần mang máy tính không ạ?", de: "Muss ich einen Computer mitbringen?" },
          { who: "Thảo", vi: "Không cần, ở đây có máy tính rồi. Thứ sáu, nhân viên được về sớm. Em có biết bơi không?", de: "Nicht nötig, hier gibt es Computer. Freitags dürfen die Mitarbeiter früh gehen. Kannst du schwimmen?" },
          { who: "Jonas", vi: "Dạ, em biết bơi.", de: "Ja, ich kann schwimmen." },
          { who: "Thảo", vi: "Em nên đi biển nhé. Biển Nha Trang đẹp lắm!", de: "Dann solltest du an den Strand gehen. Das Meer in Nha Trang ist wunderschön!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Ở đây không ___ hút thuốc.", de: "Hier darf man nicht rauchen.", options: ["được", "cần", "nên"], answer: "được", explain: "Verbot = không được + V. không cần hieße „man muss nicht rauchen“." },
        { type: "gap", vi: "Jonas ___ bơi.", de: "Jonas kann schwimmen (hat es gelernt).", options: ["biết", "phải", "được"], answer: "biết", explain: "Erlernte Fertigkeit: biết + V." },
        { type: "gap", vi: "Anh mệt quá, anh ___ ngủ sớm.", de: "Du bist sehr müde, du solltest früh schlafen.", options: ["nên", "biết", "không được"], answer: "nên", explain: "Rat, Empfehlung: nên + V." },
        { type: "gap", vi: "Em không ___ mang máy tính, ở đây có máy tính rồi.", de: "Du musst keinen Computer mitbringen, hier gibt es Computer.", options: ["cần", "được", "biết"], answer: "cần", explain: "Keine Notwendigkeit: không cần. không được wäre ein Verbot." },
        { type: "gap", vi: "Chiều nay ___ mưa.", de: "Heute Nachmittag könnte es regnen.", options: ["có thể", "biết", "cần"], answer: "có thể", explain: "Epistemisches có thể: Einschätzung einer Möglichkeit." },
        { type: "build", vi: "Tôi phải đi làm sớm.", de: "Ich muss früh zur Arbeit.", extra: ["được", "là"] },
        { type: "build", vi: "Ở đây không được hút thuốc.", de: "Hier darf man nicht rauchen.", extra: ["cần", "biết"] },
        { type: "build", vi: "Huy biết lái xe máy.", de: "Huy kann Moped fahren.", extra: ["phải", "nên"] },
        { type: "translate", de: "Ich muss morgen arbeiten.", answers: ["Ngày mai tôi phải làm việc.", "Ngày mai tôi phải đi làm.", "Tôi phải làm việc ngày mai.", "Tôi phải đi làm ngày mai.", "Mai tôi phải đi làm.", "Mai tôi phải làm việc.", "Ngày mai tôi sẽ phải đi làm.", "Ngày mai tôi sẽ phải làm việc."] },
        { type: "translate", de: "Du musst nicht früh kommen. (zu einem jüngeren Kollegen)", answers: ["Em không cần đến sớm.", "Em không phải đến sớm.", "Em không cần phải đến sớm."] },
        { type: "mc", q: "„Hier darf man nicht rauchen.“ – welcher Satz passt?", options: ["Ở đây không được hút thuốc.", "Ở đây không cần hút thuốc.", "Ở đây không biết hút thuốc."], answer: 0, explain: "Verbot = không được. không cần = nicht nötig, không biết = nicht gelernt." },
        { type: "mc", q: "Worin unterscheiden sich „Tôi biết bơi“ und „Hôm nay tôi bơi được“?", options: ["biết = erlernte Fertigkeit; V + được = heute konkret machbar", "Kein Unterschied", "biết = Erlaubnis; V + được = Pflicht"], answer: 0, explain: "biết + V ist dynamische Modalität (gelernt), V + được die Machbarkeit im konkreten Fall." },
        { type: "mc", q: "„Nhân viên được về sớm.“ – was bedeutet được hier?", options: ["dürfen (Erlaubnis)", "können (Fähigkeit)", "müssen (Pflicht)"], answer: 0, explain: "được vor dem Verb = Erlaubnis bzw. günstiger Umstand; nach dem Verb = Machbarkeit." },
        { type: "listen", vi: "Em nên đi biển ở Nha_Trang.", de: "Du solltest in Nha Trang an den Strand gehen." },
        { type: "speak", vi: "Ngày mai tôi có thể đến sớm.", de: "Morgen kann ich früh kommen." },
        { type: "pairs", pairs: [["phải", "müssen"], ["nên", "sollte"], ["cần", "brauchen"], ["không được", "nicht dürfen"], ["không cần", "nicht nötig"], ["biết + V", "(gelernt) können"]] }
      ]
    },

    // ───────────────────────────── k09l3 ─────────────────────────────
    {
      id: "k09l3",
      title: "Termine & Telefon",
      goal: "Du kannst Termine vereinbaren und verschieben, telefonieren und mit khi nào/bao giờ nach Vergangenem und Zukünftigem fragen.",
      vocab: [
        { vi: "hẹn", de: "sich verabreden; Verabredung, Termin", pos: "V", emoji: "📅", ex: { vi: "Tôi có hẹn với anh Minh.", de: "Ich habe einen Termin mit Anh Minh." } },
        { vi: "cuộc họp", de: "Besprechung, Meeting", pos: "N", emoji: "🗓️", note: "cuộc = Klassifikator für Ereignisse", ex: { vi: "Chín giờ sáng có cuộc họp.", de: "Um neun Uhr morgens ist eine Besprechung." } },
        { vi: "họp", de: "eine Besprechung haben, tagen", pos: "V", ex: { vi: "Chiều nay nhóm họp.", de: "Heute Nachmittag hat das Team eine Besprechung." } },
        { vi: "bận", de: "beschäftigt, keine Zeit haben", pos: "Adj", ex: { vi: "Hôm nay anh Minh rất bận.", de: "Heute ist Anh Minh sehr beschäftigt." } },
        { vi: "rảnh", de: "frei, Zeit haben", pos: "Adj", ex: { vi: "Tối mai em có rảnh không?", de: "Hast du morgen Abend Zeit?" } },
        { vi: "gọi điện", de: "anrufen, telefonieren", pos: "V", emoji: "📞", note: "gọi điện cho + Person", ex: { vi: "Linh gọi điện cho Jonas.", de: "Linh ruft Jonas an." } },
        { vi: "nhắn tin", de: "eine Nachricht schreiben (SMS, Chat)", pos: "V", emoji: "💬", note: "nhắn tin cho + Person", ex: { vi: "Tối nay anh nhắn tin cho em nhé.", de: "Ich schreibe dir heute Abend eine Nachricht." } },
        { vi: "A-lô", de: "Hallo? (am Telefon)", pos: "Phr", emoji: "☎️", ex: { vi: "A-lô, ai đấy ạ?", de: "Hallo, wer ist da?" } },
        { vi: "điện thoại", de: "Telefon, Handy", pos: "N", cls: "cái", emoji: "📱", ex: { vi: "Số điện thoại của anh là gì?", de: "Wie ist deine Telefonnummer?" } },
        { vi: "khi nào", de: "wann", pos: "QW", note: "satzinitial = Zukunft, satzfinal = Vergangenheit", ex: { vi: "Khi nào anh về Berlin?", de: "Wann fährst du zurück nach Berlin?" } },
        { vi: "bao giờ", de: "wann", pos: "QW", note: "wie khi nào; eher nördlich-umgangssprachlich", ex: { vi: "Chị đến Nha Trang bao giờ?", de: "Wann bist du nach Nha Trang gekommen?" } },
        { vi: "lùi", de: "(zeitlich) verschieben, nach hinten verlegen", pos: "V", south: "dời", ex: { vi: "Anh Minh lùi cuộc họp sang thứ năm.", de: "Anh Minh verschiebt die Besprechung auf Donnerstag." } },
        { vi: "tuần sau", de: "nächste Woche", pos: "N", ex: { vi: "Tuần sau tôi về Đức.", de: "Nächste Woche fahre ich zurück nach Deutschland." } },
        { vi: "tuần trước", de: "letzte Woche", pos: "N", ex: { vi: "Tuần trước Linh đi Hà Nội.", de: "Letzte Woche ist Linh nach Hà Nội gefahren." } },
        { vi: "cho tôi gặp …", de: "Kann ich bitte … sprechen? (Telefon)", pos: "Phr", ex: { vi: "A-lô, cho tôi gặp chị Thảo ạ.", de: "Hallo, kann ich bitte Chị Thảo sprechen?" } },
        { vi: "lịch", de: "Kalender, Terminplan", pos: "N", emoji: "📆", ex: { vi: "Tuần này lịch của tôi rất bận.", de: "Diese Woche ist mein Terminkalender sehr voll." } }
      ],
      grammar: [
        {
          id: "g-k09-khi-nao-bao-gio",
          title: "khi nào / bao giờ: Die Position bestimmt die Zeit",
          term: "Positionsabhängige temporale Interpretation von Interrogativa",
          pattern: "Khi nào / Bao giờ + S + V? (Zukunft) · S + V + khi nào / bao giờ? (Vergangenheit)",
          text: "In K02 hast du gelernt: Fragewörter bleiben **in situ**. Die Temporalfragewörter `khi nào` und `bao giờ` („wann“) haben aber zwei mögliche Positionen – und die Position trägt Bedeutung:\n\n- **Satzinitial** (vor dem Subjekt) bezieht sich die Frage auf die **Zukunft**: `Khi nào anh về Berlin?` – „Wann fährst du nach Berlin zurück?“\n- **Satzfinal** (nach dem Prädikat) bezieht sie sich auf die **Vergangenheit**: `Anh đến Nha Trang khi nào?` – „Wann bist du nach Nha Trang gekommen?“\n\nDa Vietnamesisch kein Tempus hat (K08), übernimmt hier die Wortstellung die Zeitreferenz. Aspektmarker können die Lesart zusätzlich stützen: `Bao giờ anh sẽ đi?` (Zukunft), `Chị đã đến bao giờ?` (Vergangenheit); nötig sind sie nicht.\n\nDie Antwort spiegelt die Frage: Auf die Zukunftsfrage folgt eine Zeitangabe mit Zukunftsbezug (`Tuần sau anh về.`), auf die Vergangenheitsfrage eine vergangene (`Anh đến hôm thứ hai.`). `hôm` + Wochentag bezeichnet dabei einen vergangenen Tag.\n\n`khi nào` ist neutral und im Süden üblicher, `bao giờ` im Norden sehr häufig. Neutrale Fragewörter wie `mấy giờ` („um wie viel Uhr“) oder `hôm nào` („an welchem Tag“) folgen dieser Regel nicht streng. Bekannt ist dir `bao giờ` schon aus `không bao giờ` („nie“, K08).",
          table: {
            head: ["Position", "Zeitbezug", "Frage", "Mögliche Antwort"],
            rows: [
              ["satzinitial", "Zukunft", "Khi nào anh về Đức?", "Tuần sau anh về."],
              ["satzinitial", "Zukunft", "Bao giờ chị đi Huế?", "Thứ bảy chị đi."],
              ["satzfinal", "Vergangenheit", "Anh đến Nha Trang khi nào?", "Anh đến hôm thứ hai."],
              ["satzfinal", "Vergangenheit", "Em gọi điện bao giờ?", "Em gọi điện hôm qua."]
            ]
          },
          examples: [
            { vi: "Khi nào anh về Berlin?", de: "Wann fährst du zurück nach Berlin?", gloss: "wann | du | zurückkehren | Berlin" },
            { vi: "Anh về Berlin khi nào?", de: "Wann bist du nach Berlin zurückgekehrt?", gloss: "du | zurückkehren | Berlin | wann" },
            { vi: "Bao giờ chúng ta họp?", de: "Wann haben wir die Besprechung?" },
            { vi: "Chị Thảo đến công ty bao giờ?", de: "Wann ist Chị Thảo in die Firma gekommen?" }
          ],
          contrast: "Im Deutschen steht „wann“ immer vorn; die Zeit zeigt das Verb („Wann kommst du?“ – „Wann bist du gekommen?“). Im Vietnamesischen bleibt das Verb unverändert – die Position von khi nào/bao giờ übernimmt diese Aufgabe."
        },
        {
          id: "g-k09-telefon",
          title: "Telefonieren und Termine: Formeln und der Adressat mit cho",
          term: "Verbvalenz (Adressat mit cho) und Routineformeln",
          pattern: "gọi điện / nhắn tin + cho + Person · lùi + N + sang + Zeitpunkt",
          text: "Kommunikationsverben schließen den **Adressaten** mit `cho` an: `gọi điện cho anh Minh` („Anh Minh anrufen“), `nhắn tin cho Linh` („Linh schreiben“). `cho` bedeutet hier „an, zu jemandem hin“ und steht immer **vor** der Person. Ohne `cho` kann `gọi` auch direkt ein Objekt nehmen (`gọi anh Minh`), dann eher „jemanden rufen“.\n\nAm Telefon gelten feste Formeln:\n\n- `A-lô` – Gesprächseröffnung beim Abheben und beim Anrufen\n- `Ai đấy ạ?` – „Wer ist da?“\n- `Cho tôi gặp …` – „Kann ich bitte … sprechen?“ (wörtlich „lass mich … treffen“)\n- `Tôi gọi lại sau.` – „Ich rufe später zurück.“\n\nTermine: `có hẹn` (wörtlich „Verabredung haben“) ist ein Existenzsatz mit `có`. Einen Termin verschiebt man mit `lùi` („nach hinten rücken“) oder dem formelleren `hoãn` („aufschieben“); das Ziel wird mit dem Richtungsverb `sang` (K07) angeschlossen: `lùi cuộc họp sang thứ năm`. Im Süden sagt man `dời`.\n\nNach Verfügbarkeit fragt man mit den Stativverben `bận` und `rảnh`: `Chiều mai anh có rảnh không?` – ein Adjektiv mit `có … không` wie in K02.",
          table: {
            head: ["Formel", "Funktion", "Deutsch"],
            rows: [
              ["A-lô", "Eröffnung", "Hallo?"],
              ["Ai đấy ạ?", "Nach dem Anrufer fragen", "Wer ist da?"],
              ["Cho tôi gặp chị Thảo ạ.", "Gesprächspartner verlangen", "Kann ich bitte Chị Thảo sprechen?"],
              ["Tôi gọi lại sau.", "Rückruf ankündigen", "Ich rufe später zurück."],
              ["Anh có rảnh không?", "Verfügbarkeit erfragen", "Hast du Zeit?"],
              ["Lùi cuộc họp sang thứ năm.", "Termin verschieben", "Die Besprechung auf Donnerstag verschieben."]
            ]
          },
          examples: [
            { vi: "Tối nay tôi gọi điện cho Linh.", de: "Heute Abend rufe ich Linh an.", gloss: "heute Abend | ich | anrufen | an | Linh" },
            { vi: "A-lô, cho tôi gặp anh Minh ạ.", de: "Hallo, kann ich bitte Anh Minh sprechen?" },
            { vi: "Chúng ta lùi cuộc họp sang thứ năm, được không?", de: "Verschieben wir die Besprechung auf Donnerstag, geht das?" },
            { vi: "Chiều mai chị có rảnh không?", de: "Hast du morgen Nachmittag Zeit?" }
          ],
          contrast: "Im Deutschen ist „jemanden anrufen“ akkusativisch, „jemandem schreiben“ dativisch. Im Vietnamesischen werden beide Adressaten gleich mit cho angeschlossen."
        }
      ],
      dialogue: {
        setting: "Am Abend ruft Teamleiter Anh Minh Jonas auf dem Handy an.",
        lines: [
          { who: "Minh", vi: "A-lô, em Jonas phải không?", de: "Hallo, ist da Jonas?" },
          { who: "Jonas", vi: "Dạ, em đây anh ạ.", de: "Ja, hier ist Jonas." },
          { who: "Minh", vi: "Ngày mai anh bận quá. Chúng ta lùi cuộc họp sang thứ năm, được không em?", de: "Morgen bin ich sehr beschäftigt. Verschieben wir die Besprechung auf Donnerstag, geht das?" },
          { who: "Jonas", vi: "Dạ, được ạ. Thứ năm mấy giờ ạ?", de: "Ja, das geht. Um wie viel Uhr am Donnerstag?" },
          { who: "Minh", vi: "Mười giờ sáng. Em đến Nha Trang bao giờ?", de: "Um zehn Uhr morgens. Wann bist du in Nha Trang angekommen?" },
          { who: "Jonas", vi: "Dạ, em đến hôm thứ hai ạ.", de: "Ich bin am Montag angekommen." },
          { who: "Minh", vi: "Khi nào em về Berlin?", de: "Wann fährst du zurück nach Berlin?" },
          { who: "Jonas", vi: "Dạ, thứ bảy tuần sau em về ạ.", de: "Nächsten Samstag fahre ich zurück." },
          { who: "Minh", vi: "Được. Tối nay anh nhắn tin cho em nhé.", de: "Gut. Ich schreibe dir heute Abend eine Nachricht." },
          { who: "Jonas", vi: "Dạ, em cảm ơn anh. Chào anh ạ.", de: "Danke. Auf Wiederhören." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Chị đến Nha Trang ___?", de: "Wann bist du nach Nha Trang gekommen?", options: ["bao giờ", "bao nhiêu", "mấy"], answer: "bao giờ", explain: "bao giờ am Satzende fragt nach einem vergangenen Zeitpunkt." },
        { type: "gap", vi: "Tôi gọi điện ___ anh Minh.", de: "Ich rufe Anh Minh an.", options: ["cho", "với", "của"], answer: "cho", explain: "Der Adressat von gọi điện und nhắn tin wird mit cho angeschlossen." },
        { type: "gap", vi: "Ngày mai anh Minh rất ___, anh ấy có ba cuộc họp.", de: "Morgen ist Anh Minh sehr beschäftigt, er hat drei Besprechungen.", options: ["bận", "rảnh", "vui"], answer: "bận", explain: "bận = beschäftigt; rảnh wäre das Gegenteil." },
        { type: "gap", vi: "Chúng ta lùi cuộc họp ___ thứ năm.", de: "Wir verschieben die Besprechung auf Donnerstag.", options: ["sang", "ở", "của"], answer: "sang", explain: "Das Ziel der Verschiebung wird mit dem Richtungsverb sang angeschlossen." },
        { type: "build", vi: "Khi nào anh về Berlin?", de: "Wann fährst du zurück nach Berlin?", extra: ["đã", "rồi"] },
        { type: "build", vi: "Em đến Nha_Trang bao giờ?", de: "Wann bist du nach Nha Trang gekommen?", extra: ["sẽ", "sắp"] },
        { type: "build", vi: "Tôi có hẹn với anh Minh.", de: "Ich habe einen Termin mit Anh Minh.", extra: ["cho", "là"] },
        { type: "build", vi: "Chiều nay nhóm họp ở văn phòng.", de: "Heute Nachmittag hat das Team eine Besprechung im Büro.", extra: ["cuộc", "là"] },
        { type: "translate", de: "Wann fährst du zurück nach Berlin? (Zukunft, zu einem Mann)", answers: ["Khi nào anh về Berlin?", "Bao giờ anh về Berlin?", "Khi nào anh sẽ về Berlin?", "Bao giờ anh sẽ về Berlin?"] },
        { type: "translate", de: "Wann ist sie nach Nha Trang gekommen? (sie = chị ấy)", answers: ["Chị ấy đến Nha Trang khi nào?", "Chị ấy đến Nha Trang bao giờ?", "Chị ấy đã đến Nha Trang khi nào?", "Chị ấy đã đến Nha Trang bao giờ?"] },
        { type: "mc", q: "„Bao giờ chị đi Huế?“ – wie ist die Frage zu verstehen?", options: ["Wann fährst du nach Huế? (Zukunft)", "Wann bist du nach Huế gefahren? (Vergangenheit)", "Fährst du oft nach Huế?"], answer: 0, explain: "bao giờ am Satzanfang = Zukunft." },
        { type: "mc", q: "„Anh đến Nha Trang khi nào?“ – welche Antwort passt?", options: ["Anh đến hôm thứ hai.", "Thứ hai tuần sau anh sẽ đến.", "Anh sắp đến."], answer: 0, explain: "khi nào am Satzende = Vergangenheit; gefragt ist, wann du angekommen bist." },
        { type: "mc", q: "Du rufst an und möchtest Chị Thảo sprechen. Was sagst du?", options: ["A-lô, cho tôi gặp chị Thảo ạ.", "A-lô, tôi là chị Thảo ạ.", "A-lô, cho chị Thảo gặp tôi ạ."], answer: 0, explain: "Formel: Cho tôi gặp + Person. Die anderen Sätze heißen „Ich bin Thảo“ bzw. vertauschen die Rollen." },
        { type: "listen", vi: "Tối nay anh nhắn tin cho em nhé.", de: "Ich schreibe dir heute Abend eine Nachricht." },
        { type: "speak", vi: "A-lô, cho tôi gặp anh Minh ạ.", de: "Hallo, kann ich bitte Anh Minh sprechen?" },
        { type: "pairs", pairs: [["bận", "beschäftigt"], ["rảnh", "frei"], ["cuộc họp", "Besprechung"], ["gọi điện", "anrufen"], ["nhắn tin", "Nachricht schreiben"], ["tuần sau", "nächste Woche"]] }
      ]
    },

    // ───────────────────────────── k09l4 ─────────────────────────────
    {
      id: "k09l4",
      title: "Höflichkeit & Register",
      goal: "Du kannst Vorgesetzte und Ältere höflich bitten, dich entschuldigen und eine formelle E-Mail beginnen und beenden.",
      vocab: [
        { vi: "dạ", de: "ja (ehrerbietig); höfliche Rückmeldung", pos: "Part", note: "auch Antwort, wenn man gerufen wird", ex: { vi: "Dạ, em biết rồi ạ.", de: "Ja, ich weiß schon Bescheid." } },
        { vi: "thưa", de: "(ehrerbietig vor der Anrede)", pos: "Part", note: "formell: Thưa anh, Thưa quý vị", ex: { vi: "Thưa chị, em là Jonas ạ.", de: "Verzeihung, ich bin Jonas." } },
        { vi: "xin", de: "bitten; (Höflichkeit vor dem Verb)", pos: "V", ex: { vi: "Tôi xin giới thiệu, đây là anh Jonas.", de: "Darf ich vorstellen: Das ist Jonas." } },
        { vi: "vui lòng", de: "bitte (formell, schriftlich)", pos: "Phr", ex: { vi: "Anh vui lòng gọi lại sau.", de: "Bitte rufen Sie später zurück." } },
        { vi: "làm ơn", de: "bitte (seien Sie so gut)", pos: "Phr", ex: { vi: "Làm ơn cho tôi một cốc nước.", de: "Ein Glas Wasser, bitte." } },
        { vi: "xin lỗi", de: "Entschuldigung; sich entschuldigen", pos: "Phr", ex: { vi: "Em xin lỗi anh, em đến muộn.", de: "Entschuldige, ich bin zu spät." } },
        { vi: "xin phép", de: "um Erlaubnis bitten; sich verabschieden", pos: "V", ex: { vi: "Em xin phép về trước ạ.", de: "Darf ich schon gehen?" } },
        { vi: "giới thiệu", de: "vorstellen", pos: "V", emoji: "🙋", ex: { vi: "Em xin giới thiệu, đây là chị Linh.", de: "Darf ich vorstellen: Das ist Linh." } },
        { vi: "chờ", de: "warten", pos: "V", emoji: "⏳", note: "Nord auch: đợi", ex: { vi: "Anh chờ em một chút nhé.", de: "Warte bitte einen Moment auf mich." } },
        { vi: "muộn", de: "spät", pos: "Adj", south: "trễ", emoji: "⏰", ex: { vi: "Hôm nay Huy đến muộn.", de: "Heute kommt Huy zu spät." } },
        { vi: "Kính gửi …", de: "Sehr geehrte/r … (Briefanrede)", pos: "Phr", emoji: "✉️", ex: { vi: "Kính gửi anh Minh,", de: "Sehr geehrter Herr Minh," } },
        { vi: "Trân trọng", de: "Mit freundlichen Grüßen", pos: "Phr", ex: { vi: "Trân trọng, Jonas Weber", de: "Mit freundlichen Grüßen, Jonas Weber" } },
        { vi: "gửi", de: "schicken, senden", pos: "V", emoji: "📤", ex: { vi: "Tôi gửi email cho chị Thảo.", de: "Ich schicke Chị Thảo eine E-Mail." } },
        { vi: "sếp", de: "Chef/in (umgangssprachlich)", pos: "N", ex: { vi: "Anh Minh là sếp của Huy.", de: "Anh Minh ist Huys Chef." } },
        { vi: "lịch sự", de: "höflich", pos: "Adj", ex: { vi: "Chị Thảo rất lịch sự.", de: "Chị Thảo ist sehr höflich." } }
      ],
      grammar: [
        {
          id: "g-k09-hoeflichkeit-bitten",
          title: "Bitten nach Registerstufen",
          term: "Höflichkeitsskala; Abschwächung (Mitigation) von Direktiva",
          pattern: "(Xin) + Anrede + (vui lòng) / có thể + V + được không + ạ?",
          text: "Das Deutsche macht Bitten höflich vor allem morphologisch und pronominal: *Siezen*, Konjunktiv II („Könnten Sie …?“), „bitte“. Das Vietnamesische hat weder ein Sie noch einen Konjunktiv. Höflichkeit entsteht durch die Kombination mehrerer Mittel:\n\n- die richtige **Anrede** (Verwandtschaftsterm statt `bạn` oder `tôi`, K02),\n- die Satzendpartikel `ạ`,\n- eine **Modalisierung** als Frage: `Anh có thể … được không ạ?` – „Könntest du …?“,\n- höfliche Einleitungen: `làm ơn` (Bitte an Fremde, Dienstleistung), `vui lòng` (formell, schriftlich, Ansagen), `xin` (vor dem Verb; der Sprecher stellt sich bescheiden dar: `Em xin cảm ơn.`).\n\nDie Mittel lassen sich zu einer **Skala** ordnen (siehe Tabelle). Gegenüber Vorgesetzten wie Anh Minh ist mindestens Stufe 4 üblich. Ein nackter Imperativ, auch mit `đi`, wirkt als Anweisung und ist nur gegenüber Jüngeren oder sehr Vertrauten möglich. Vorsicht auch mit `phải`: `Anh phải …` gegenüber einem Vorgesetzten verpflichtet ihn und bedroht sein Gesicht – egal wie viele `ạ` folgen.\n\nIm Büro gilt: Man spricht **nach oben** mit `anh/chị` + `ạ` und bezeichnet sich als `em`; **nach unten** reicht `em` + `nhé`.",
          table: {
            head: ["Stufe", "Form", "Beispiel", "Verwendung"],
            rows: [
              ["1", "Imperativ", "Chờ một chút.", "nur Jüngere, Vertraute"],
              ["2", "Anrede + nhé", "Em chờ một chút nhé.", "Jüngere, freundlich"],
              ["3", "làm ơn", "Làm ơn chờ một chút.", "Fremde, Dienstleistung"],
              ["4", "có thể … được không ạ", "Anh có thể chờ một chút được không ạ?", "Ältere, Vorgesetzte"],
              ["5", "xin + vui lòng", "Xin anh vui lòng chờ một chút.", "sehr formell, schriftlich"]
            ]
          },
          examples: [
            { vi: "Anh có thể gọi lại được không ạ?", de: "Könntest du bitte zurückrufen?", gloss: "du | können | anrufen | zurück | gehen | nicht | HÖFL" },
            { vi: "Xin anh vui lòng chờ một chút.", de: "Bitte warten Sie einen Moment." },
            { vi: "Em xin cảm ơn chị ạ.", de: "Ich danke Ihnen vielmals." },
            { vi: "Huy, em gửi email cho chị Thảo nhé.", de: "Huy, schick bitte Chị Thảo eine E-Mail." }
          ],
          contrast: "Wo das Deutsche „Könnten Sie bitte …?“ sagt, kombiniert das Vietnamesische Anrede (anh/chị), Modalfrage (có thể … được không) und Partikel ạ. Fehlt die richtige Anrede, hilft auch ạ nicht."
        },
        {
          id: "g-k09-da-thua",
          title: "dạ, vâng, thưa, ạ – Ehrerbietung markieren",
          term: "Deferenzmarker (Honorifika)",
          pattern: "Dạ, … ạ · Thưa + Anrede, …",
          text: "Vier kleine Wörter zeigen Respekt gegenüber Älteren und Ranghöheren:\n\n- `dạ` – Rückmeldepartikel. Sie heißt „ja“, signalisiert aber vor allem „ich höre respektvoll zu“. Ruft der Chef `Huy ơi!`, antwortet man `Dạ!`, nicht `Có!` oder `Gì?`. Auch ein höfliches Nein beginnt mit `dạ`: `Dạ, không ạ.`\n- `vâng` – „ja“ als Zustimmung, im Norden üblich und etwas neutraler als `dạ`. Kombiniert: `Dạ, vâng ạ.`\n- `thưa` – steht **vor** der Anrede und eröffnet eine Äußerung feierlich-formell: `Thưa anh, …`, in Reden `Thưa quý vị` („Meine Damen und Herren“).\n- `ạ` – Satzendpartikel (K02), macht Aussagen, Fragen und Bitten respektvoll.\n\nDiese Marker sind **Honorifika auf Diskursebene**: Sie ändern nicht den propositionalen Inhalt, sondern die soziale Beziehung. Das umgangssprachliche `ừ` („ja, okay“) ist ihr Gegenstück nach unten und gegenüber Vorgesetzten unhöflich.\n\nIm Süden ist `dạ` für jedes „ja“ üblich, `vâng` hört man dort selten.",
          table: {
            head: ["Marker", "Position", "Funktion", "Beispiel"],
            rows: [
              ["dạ", "satzinitial", "respektvolles Ja, Rückmeldung", "Dạ, em hiểu rồi."],
              ["vâng", "satzinitial", "Zustimmung (Nord)", "Vâng, tôi sẽ đến."],
              ["thưa", "vor der Anrede", "formelle Eröffnung", "Thưa anh, em là Jonas."],
              ["ạ", "satzfinal", "Respekt", "Chào chị ạ."],
              ["ừ", "satzinitial", "„ja, okay“ (nach unten)", "Ừ, được."]
            ]
          },
          examples: [
            { vi: "Dạ, vâng ạ.", de: "Ja, gern / Jawohl." },
            { vi: "Thưa anh, cuộc họp lùi sang mười giờ ạ.", de: "Verzeihung, die Besprechung ist auf zehn Uhr verschoben." },
            { vi: "Dạ, không ạ.", de: "Nein (höflich)." }
          ],
          contrast: "Im Deutschen gibt es kaum Entsprechungen; am nächsten kommen „jawohl“ oder ein respektvolles „Ja, bitte?“. Das Deutsche drückt Respekt über Sie/Du aus, das Vietnamesische über Anrede plus Partikeln."
        },
        {
          id: "g-k09-email",
          title: "Formelle E-Mail: Kính gửi …, Trân trọng",
          term: "Schriftregister, Brieformeln",
          pattern: "Kính gửi + Anrede/Titel + Name, … Trân trọng, + Name",
          text: "Schriftliche Kommunikation im Beruf folgt festen Formeln.\n\n**Anrede:** `Kính gửi` („ehrerbietig gesandt an“) + Anredeterm + Rufname. Intern: `Kính gửi anh Minh,`. Gegenüber Externen oder sehr Ranghohen: `Kính gửi ông Nguyễn Văn Minh,` bzw. `Kính gửi bà …`. Vietnamesische Namen stehen in der Reihenfolge Familienname – Zwischenname – Rufname; angesprochen wird man mit dem **Rufnamen** (`anh Minh`, nicht *`anh Nguyễn`*).\n\n**Einleitung:** `Em xin gửi anh …` („Ich schicke Ihnen …“) oder `Tôi xin giới thiệu …`. Das bescheidene `xin` ist im Schriftverkehr fast obligatorisch.\n\n**Bitten:** `Anh vui lòng …` – „Bitte …“.\n\n**Schluss:** `Trân trọng,` („mit Hochachtung“) entspricht „Mit freundlichen Grüßen“. Davor oft `Em xin cảm ơn.` oder `Trân trọng cảm ơn.` In lockeren internen Mails reicht `Cảm ơn anh.`\n\nDie Pronomen bleiben auch schriftlich relational: Jonas schreibt an Anh Minh mit `em` für sich selbst. `tôi` ist gegenüber Externen neutral-sachlich, gegenüber einem bekannten Vorgesetzten wirkt es kühl.",
          table: {
            head: ["Teil", "Vietnamesisch", "Deutsch"],
            rows: [
              ["Anrede intern", "Kính gửi anh Minh,", "Sehr geehrter Herr Minh, / Lieber Minh,"],
              ["Anrede extern", "Kính gửi ông Nguyễn Văn Minh,", "Sehr geehrter Herr Nguyễn Văn Minh,"],
              ["Einleitung", "Em xin gửi anh lịch họp tuần sau.", "Anbei der Besprechungsplan für nächste Woche."],
              ["Bitte", "Anh vui lòng gọi điện cho em.", "Bitte rufen Sie mich an."],
              ["Schluss", "Trân trọng,", "Mit freundlichen Grüßen"]
            ]
          },
          examples: [
            { vi: "Kính gửi chị Thảo,", de: "Sehr geehrte Frau Thảo," },
            { vi: "Em xin gửi chị lịch họp tuần sau.", de: "Anbei schicke ich Ihnen den Besprechungsplan für nächste Woche." },
            { vi: "Em xin cảm ơn. Trân trọng, Jonas", de: "Vielen Dank. Mit freundlichen Grüßen, Jonas" }
          ],
          contrast: "Wie „Sehr geehrte/r“ und „Mit freundlichen Grüßen“ sind Kính gửi und Trân trọng erstarrte Formeln. Anders als im Deutschen nennt man aber nicht den Familien-, sondern den Rufnamen."
        }
      ],
      dialogue: {
        setting: "Jonas muss am Nachmittag früher gehen und spricht mit seinem Teamleiter Anh Minh. Später ruft Minh den jungen Kollegen Huy.",
        lines: [
          { who: "Jonas", vi: "Thưa anh, em xin lỗi. Chiều nay em có hẹn ạ.", de: "Entschuldigen Sie, ich habe heute Nachmittag einen Termin." },
          { who: "Minh", vi: "Không sao. Em cần gì?", de: "Kein Problem. Was brauchst du?" },
          { who: "Jonas", vi: "Anh có thể lùi cuộc họp sang sáng mai được không ạ?", de: "Könnten Sie die Besprechung auf morgen Vormittag verschieben?" },
          { who: "Minh", vi: "Được. Mười giờ sáng mai nhé.", de: "In Ordnung. Morgen um zehn Uhr." },
          { who: "Jonas", vi: "Dạ, em cảm ơn anh ạ. Em xin phép về trước ạ.", de: "Vielen Dank. Dann verabschiede ich mich." },
          { who: "Minh", vi: "Em về đi. Huy ơi!", de: "Geh nur. Huy!" },
          { who: "Huy", vi: "Dạ!", de: "Ja?" },
          { who: "Minh", vi: "Em gửi email cho chị Thảo nhé. Cuộc họp lùi sang mười giờ sáng mai.", de: "Schick bitte Chị Thảo eine E-Mail. Die Besprechung ist auf morgen zehn Uhr verschoben." },
          { who: "Huy", vi: "Dạ, vâng ạ. Em gửi bây giờ ạ.", de: "Jawohl. Ich schicke sie gleich." }
        ]
      },
      exercises: [
        { type: "gap", vi: "___ anh, em là Jonas ạ.", de: "Verzeihung, ich bin Jonas.", options: ["Thưa", "Ơi", "Ạ"], answer: "Thưa", explain: "thưa steht vor der Anrede; ơi folgt dem Namen (Huy ơi), ạ steht am Satzende." },
        { type: "gap", vi: "Anh có thể chờ một chút ___ ạ?", de: "Könnten Sie bitte einen Moment warten?", options: ["được không", "không được", "phải không"], answer: "được không", explain: "Höfliche Bitte: có thể … được không ạ? – không được hieße „darf nicht“." },
        { type: "gap", vi: "Em ___ phép về trước ạ.", de: "Darf ich schon gehen?", options: ["xin", "làm", "vui"], answer: "xin", explain: "Feste Formel xin phép = um Erlaubnis bitten." },
        { type: "gap", vi: "___ gửi anh Minh,", de: "Sehr geehrter Herr Minh,", options: ["Kính", "Trân", "Xin"], answer: "Kính", explain: "Briefanrede: Kính gửi + Anrede + Rufname." },
        { type: "build", vi: "Anh có thể gọi lại được không ạ?", de: "Könnten Sie bitte zurückrufen?", extra: ["phải", "mày"] },
        { type: "build", vi: "Em xin lỗi, em đến muộn.", de: "Entschuldigung, ich bin zu spät.", extra: ["được", "bạn"] },
        { type: "build", vi: "Xin anh vui lòng chờ một chút.", de: "Bitte warten Sie einen Moment.", extra: ["đi", "mày"] },
        { type: "translate", de: "Entschuldige, ich bin zu spät. (zu einem älteren Kollegen)", answers: ["Em xin lỗi anh, em đến muộn.", "Em xin lỗi, em đến muộn.", "Xin lỗi anh, em đến muộn.", "Em xin lỗi anh, em đến muộn ạ.", "Em xin lỗi, em đến muộn ạ.", "Xin lỗi anh, em đến muộn ạ.", "Em xin lỗi anh ạ, em đến muộn."] },
        { type: "translate", de: "Ich danke dir. (höflich, zu einer älteren Kollegin)", answers: ["Em xin cảm ơn chị ạ.", "Em cảm ơn chị ạ.", "Em xin cảm ơn chị.", "Em cảm ơn chị."] },
        { type: "mc", q: "Teamleiter Anh Minh ruft „Jonas ơi!“. Wie antwortest du?", options: ["Dạ!", "Có!", "Gì?"], answer: 0, explain: "Auf einen Ruf antwortet man Ranghöheren mit dạ. „Gì?“ (Was?) ist grob, „Có!“ klingt wie ein Appell beim Militär." },
        { type: "mc", q: "Welche Bitte ist gegenüber einem Vorgesetzten angemessen?", options: ["Anh có thể gửi email cho em được không ạ?", "Gửi email cho tôi đi!", "Bạn gửi email cho tôi nhé."], answer: 0, explain: "Anrede anh + có thể … được không + ạ. Imperativ mit đi und die Anrede bạn sind zu direkt bzw. zu flach." },
        { type: "mc", q: "Womit beendest du eine formelle E-Mail?", options: ["Trân trọng,", "Kính gửi,", "Chào nhé!"], answer: 0, explain: "Trân trọng = Mit freundlichen Grüßen; Kính gửi ist die Anrede am Anfang." },
        { type: "listen", vi: "Em xin phép về trước ạ.", de: "Darf ich schon gehen?" },
        { type: "speak", vi: "Thưa anh, anh có thể chờ một chút được không ạ?", de: "Verzeihung, könnten Sie bitte einen Moment warten?" },
        { type: "pairs", pairs: [["Kính gửi", "Sehr geehrte/r"], ["Trân trọng", "Mit freundlichen Grüßen"], ["xin phép", "um Erlaubnis bitten"], ["chờ", "warten"], ["muộn", "spät"], ["lịch sự", "höflich"]] }
      ]
    }
  ],

  // ───────────────────────────── Boss ─────────────────────────────
  boss: {
    title: "Erster Tag beim Partnerunternehmen",
    npc: "Anh Minh",
    role: "Teamleiter beim Partnerunternehmen in Nha Trang",
    setting: "Erster Arbeitstag in Nha Trang. Teamleiter Anh Minh empfängt Jonas im Büro, stellt Fragen und bespricht den Terminplan. Bleib höflich – er ist dein Vorgesetzter auf Zeit.",
    turns: [
      {
        npc: { vi: "Chào em! Em là Jonas, phải không?", de: "Hallo! Du bist Jonas, richtig?" },
        prompt: "Begrüße deinen Teamleiter höflich und bestätige.",
        choices: [
          { vi: "Dạ, chào anh ạ. Em là Jonas.", ok: true, fb: "Richtig: dạ, Anrede anh, Selbstbezeichnung em und ạ – genau das Register gegenüber einem Vorgesetzten." },
          { vi: "Chào bạn. Tôi là Jonas.", ok: false, fb: "bạn ist die flache Anrede unter Gleichrangigen, tôi wirkt distanziert. Gegenüber dem Teamleiter: anh/em + ạ." },
          { vi: "Ừ, chào Minh.", ok: false, fb: "ừ ist ein lockeres „ja“ nach unten, und der nackte Name ohne anh ist respektlos." }
        ]
      },
      {
        npc: { vi: "Em làm nghề gì?", de: "Was machst du beruflich?" },
        prompt: "Sag, dass du Ingenieur bist und in Berlin arbeitest.",
        choices: [
          { vi: "Dạ, em là kỹ sư. Em làm việc ở Berlin ạ.", ok: true, fb: "Genau: Kopula là + Beruf, Arbeitsort mit ở nach dem Verb." },
          { vi: "Dạ, em là làm kỹ sư ở Berlin ạ.", ok: false, fb: "Doppelt gemoppelt: entweder là kỹ sư oder làm kỹ sư – nicht beides." },
          { vi: "Dạ, em kỹ sư ở Berlin làm việc ạ.", ok: false, fb: "Deutsche Verbendstellung. Im Vietnamesischen gilt S – V – ở + Ort: em làm việc ở Berlin." }
        ]
      },
      {
        npc: { vi: "Em đến Nha Trang bao giờ?", de: "Wann bist du in Nha Trang angekommen?" },
        prompt: "Antworte: Du bist gestern angekommen.",
        choices: [
          { vi: "Dạ, em đến hôm qua ạ.", ok: true, fb: "Richtig erkannt: bao giờ am Satzende fragt nach der Vergangenheit." },
          { vi: "Dạ, ngày mai em sẽ đến ạ.", ok: false, fb: "bao giờ steht hier am Satzende – das ist eine Frage nach der Vergangenheit. Zukunft wäre: Bao giờ em đến …?" },
          { vi: "Dạ, em đến bao giờ hôm qua ạ.", ok: false, fb: "In der Antwort wird das Fragewort durch die Zeitangabe ersetzt, nicht wiederholt." }
        ]
      },
      {
        npc: { vi: "Ở công ty, em không được hút thuốc trong văn phòng nhé.", de: "In der Firma darfst du im Büro nicht rauchen." },
        prompt: "Frag höflich, ob man draußen rauchen darf.",
        choices: [
          { vi: "Dạ, ở ngoài có được hút thuốc không ạ?", ok: true, fb: "Gut: Erlaubnisfrage mit có được … không." },
          { vi: "Dạ, ở ngoài có cần hút thuốc không ạ?", ok: false, fb: "cần = nötig sein. Du fragst, ob man draußen rauchen muss." },
          { vi: "Dạ, ở ngoài em biết hút thuốc không ạ?", ok: false, fb: "biết + V = gelernt haben. Du fragst, ob du draußen rauchen kannst (als Fertigkeit)." }
        ]
      },
      {
        npc: { vi: "Được. Chiều nay ba giờ có cuộc họp nhóm.", de: "Ja, das geht. Heute Nachmittag um drei ist Teambesprechung." },
        prompt: "Du hast um drei schon einen Termin. Bitte höflich darum, die Besprechung auf vier Uhr zu verschieben.",
        choices: [
          { vi: "Dạ, anh có thể lùi cuộc họp sang bốn giờ được không ạ?", ok: true, fb: "Perfekt: höfliche Modalfrage có thể … được không ạ und das Ziel mit sang." },
          { vi: "Lùi cuộc họp sang bốn giờ đi!", ok: false, fb: "Nackter Imperativ mit đi ist eine Anweisung – gegenüber dem Vorgesetzten unhöflich." },
          { vi: "Dạ, anh phải lùi cuộc họp sang bốn giờ ạ.", ok: false, fb: "phải = müssen: Du verpflichtest deinen Chef. Trotz dạ und ạ bedroht das sein Gesicht." }
        ]
      },
      {
        npc: { vi: "Được, bốn giờ nhé. Khi nào em về Đức?", de: "Gut, um vier. Wann fährst du zurück nach Deutschland?" },
        prompt: "Antworte: nächsten Samstag.",
        choices: [
          { vi: "Dạ, thứ bảy tuần sau em về ạ.", ok: true, fb: "Richtig: khi nào am Satzanfang fragt nach der Zukunft." },
          { vi: "Dạ, em đã về Đức thứ bảy tuần trước ạ.", ok: false, fb: "khi nào steht am Satzanfang – gefragt ist die Zukunft, nicht die Vergangenheit." },
          { vi: "Dạ, khi nào em về thứ bảy tuần sau ạ.", ok: false, fb: "In der Antwort ersetzt die Zeitangabe das Fragewort – khi nào wird nicht wiederholt." }
        ]
      },
      {
        npc: { vi: "Tốt. Chiều nay anh gửi lịch họp cho em.", de: "Gut. Heute Nachmittag schicke ich dir den Besprechungsplan." },
        prompt: "Bedanke dich und verabschiede dich höflich, weil du jetzt an deinen Platz gehst.",
        choices: [
          { vi: "Dạ, em cảm ơn anh. Em xin phép ạ.", ok: true, fb: "Sehr gut: Dank mit em/anh und die Abschiedsformel xin phép." },
          { vi: "Cảm ơn. Tôi đi đây.", ok: false, fb: "Ohne Anrede und ạ, mit tôi – kühl und distanziert gegenüber dem Teamleiter." },
          { vi: "Dạ, em xin lỗi anh. Em đi ạ.", ok: false, fb: "xin lỗi ist eine Entschuldigung, kein Dank. Höflich verabschieden: xin phép." }
        ]
      }
    ],
    win: { vi: "Em nói tiếng Việt lịch sự quá! Chào mừng em đến Nha Trang.", de: "Du sprichst aber höflich Vietnamesisch! Willkommen in Nha Trang." }
  }
});
