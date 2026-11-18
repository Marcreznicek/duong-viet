VN.addChapter({
  id: "k07",
  place: "Đà Nẵng",
  region: "Zentralvietnam",
  title: "Unterwegs & Orientierung",
  intro: "Đà Nẵng liegt zwischen Bergen und Meer: der Strand Mỹ Khê, die Drachenbrücke über den Hàn-Fluss, die Marmorberge Ngũ Hành Sơn. Hier lernst du, wo sich etwas befindet (Lokalnomen statt Präpositionen), wie Vietnamesisch Bewegung mit Richtungsverben ausdrückt – samt der Konvention „ra Bắc, vào Nam“ – und wie du Verkehrsmittel, Dauer und Wegbeschreibungen versprachlichst.",
  lessons: [
    // ───────────────────────────── k07l1 ─────────────────────────────
    {
      id: "k07l1",
      title: "Wo ist …? – Lokalisierung",
      goal: "Du kannst sagen und erfragen, wo sich Dinge und Orte befinden.",
      vocab: [
        { vi: "ở", de: "sich befinden, wohnen; in, an (Präposition)", pos: "V", note: "Vollverb und lokative Präposition (Koverb)", ex: { vi: "Jonas và Linh ở khách sạn này.", de: "Jonas und Linh wohnen in diesem Hotel." } },
        { vi: "trên", de: "Oberseite, oben; auf, über", pos: "N", emoji: "⬆️", note: "Lokalnomen", ex: { vi: "Điện thoại ở trên bàn.", de: "Das Handy liegt auf dem Tisch." } },
        { vi: "dưới", de: "Unterseite, unten; unter", pos: "N", emoji: "⬇️", note: "Lokalnomen", ex: { vi: "Con mèo ở dưới bàn.", de: "Die Katze ist unter dem Tisch." } },
        { vi: "trong", de: "Inneres; in, drinnen", pos: "N", note: "Lokalnomen", ex: { vi: "Ví ở trong túi.", de: "Das Portemonnaie ist in der Tasche." } },
        { vi: "ngoài", de: "Äußeres; draußen, außerhalb", pos: "N", note: "Lokalnomen; ngoài trời = im Freien", ex: { vi: "Chị Linh ở ngoài kia.", de: "Linh ist dort draußen." } },
        { vi: "trước", de: "Vorderseite; vor", pos: "N", note: "Lokalnomen (räumlich); zeitlich ‚vor‘ folgt später", ex: { vi: "Taxi ở trước khách sạn.", de: "Das Taxi steht vor dem Hotel." } },
        { vi: "sau", de: "Rückseite; hinter", pos: "N", note: "Lokalnomen (räumlich)", ex: { vi: "Nhà vệ sinh ở sau quán cà phê.", de: "Die Toilette ist hinter dem Café." } },
        { vi: "bên cạnh", de: "Seite daneben; neben", pos: "N", note: "bên = Seite, cạnh = Kante", ex: { vi: "Quán phở ở bên cạnh chợ Hàn.", de: "Das Phở-Lokal ist neben dem Hàn-Markt." } },
        { vi: "giữa", de: "Mitte; zwischen", pos: "N", note: "giữa A và B = zwischen A und B", ex: { vi: "Khách sạn ở giữa chợ và bãi biển.", de: "Das Hotel liegt zwischen Markt und Strand." } },
        { vi: "đây", de: "hier", pos: "Pron", note: "vgl. đó/đấy = dort", ex: { vi: "Chợ Hàn ở đây.", de: "Der Hàn-Markt ist hier." } },
        { vi: "gần", de: "nah, in der Nähe (von)", pos: "Adj", note: "Stativverb; gần + Ort ohne Präposition", ex: { vi: "Khách sạn ở gần bãi biển Mỹ Khê.", de: "Das Hotel liegt nahe am Mỹ-Khê-Strand." } },
        { vi: "xa", de: "weit, fern", pos: "Adj", ex: { vi: "Bà Nà xa lắm.", de: "Bà Nà ist sehr weit weg." } },
        { vi: "khách sạn", de: "Hotel", pos: "N", emoji: "🏨", ex: { vi: "Khách sạn này rất đẹp.", de: "Dieses Hotel ist sehr schön." } },
        { vi: "nhà vệ sinh", de: "Toilette", pos: "N", emoji: "🚻", note: "wörtl. ‚Haus der Hygiene‘", ex: { vi: "Xin lỗi, nhà vệ sinh ở đâu ạ?", de: "Entschuldigung, wo ist die Toilette?" } },
        { vi: "bãi biển", de: "Strand", pos: "N", emoji: "🏖️", ex: { vi: "Bãi biển Mỹ Khê đẹp quá!", de: "Der Mỹ-Khê-Strand ist so schön!" } },
        { vi: "túi", de: "Tasche, Beutel", pos: "N", emoji: "👜", cls: "cái", ex: { vi: "Cái túi này là của Linh.", de: "Diese Tasche gehört Linh." } }
      ],
      grammar: [
        {
          id: "g-k07-o",
          title: "ở – Verb und Präposition",
          term: "Lokativverb / lokatives Koverb",
          pattern: "S + ở + Ort  |  S + V (+ O) + ở + Ort",
          text: "Das Wort `ở` hat zwei Gesichter. Steht es als einziges Prädikat, ist es ein **Vollverb** mit der Bedeutung „sich befinden, sein (an einem Ort), wohnen“: `Tôi ở Berlin.` – „Ich wohne in Berlin.“ / „Ich bin in Berlin.“ Steht es nach einem anderen Verb, fungiert es als **lokative Präposition** (in der Sinistik nennt man solche verbalen Präpositionen *Koverben*): `Chúng tôi ăn sáng ở khách sạn.` – „Wir frühstücken im Hotel.“\n\nWichtig: Lokalisierung ist **keine Identität**. Die Kopula `là` (K02) verbindet zwei Nominalphrasen („A ist B“); für „A ist an Ort B“ steht immer `ở`. *`Tôi là ở Đà Nẵng` ist ungrammatisch.\n\nDie Frage nach dem Ort bildest du mit dem Fragewort `đâu` in situ, also genau an der Stelle, an der die Antwort stünde: `Khách sạn ở đâu?` → `Khách sạn ở gần bãi biển.` In der Umgangssprache fällt `ở` vor `đâu` oft weg: `Nhà vệ sinh đâu?` – das ist knapp, gegenüber Fremden aber mit `ạ` zu höflich zu ergänzen.\n\nAuch Stativverben wie `gần` „nah sein“ und `xa` „weit sein“ brauchen kein `là`: `Bãi biển không xa.`",
          table: { head: ["Funktion", "Beispiel", "Deutsch"], rows: [["Vollverb ‚sich befinden‘", "Linh ở khách sạn.", "Linh ist im Hotel."], ["Vollverb ‚wohnen‘", "Bà ngoại ở Sài Gòn.", "Oma wohnt in Saigon."], ["Präposition nach V", "Tôi uống cà phê ở quán này.", "Ich trinke Kaffee in diesem Café."], ["Ortsfrage", "Chợ Hàn ở đâu?", "Wo ist der Hàn-Markt?"]] },
          examples: [
            { vi: "Tôi ở Berlin.", de: "Ich wohne in Berlin.", gloss: "ich | wohnen | Berlin" },
            { vi: "Chúng tôi ăn sáng ở khách sạn.", de: "Wir frühstücken im Hotel.", gloss: "wir | essen Frühstück | in | Hotel" },
            { vi: "Nhà vệ sinh ở đâu ạ?", de: "Wo ist bitte die Toilette?", gloss: "Toilette | sich befinden | wo | HÖFL" },
            { vi: "Bãi biển không xa.", de: "Der Strand ist nicht weit.", gloss: "Strand | NEG | weit sein" }
          ],
          contrast: "Das Deutsche unterscheidet „sein“, „liegen“, „stehen“, „hängen“, „wohnen“ – Vietnamesisch deckt all das mit `ở` ab. Umgekehrt trennt Vietnamesisch strikt zwischen Identität (`là`) und Ort (`ở`), wo das Deutsche beides mit „sein“ ausdrückt."
        },
        {
          id: "g-k07-lokalnomen",
          title: "Lokalnomen statt Präpositionen",
          term: "Lokalnomen (Ortsnomen)",
          pattern: "(ở +) Lokalnomen + Bezugsnomen",
          text: "Wörter wie `trên`, `dưới`, `trong` sehen aus wie deutsche Präpositionen, sind aber **Nomen**: Sie bezeichnen eine *Region* eines Bezugsobjekts. `trên bàn` heißt wörtlich „die Oberseite/der obere Raum des Tisches“ – aufgebaut wie eine possessive Juxtaposition (vgl. `mẹ tôi` „meine Mutter“, K04). Davor steht meist `ở`, das eigentliche Lokalisierungsverb: `Điện thoại ở trên bàn.` Umgangssprachlich kann `ở` entfallen: `Ví trong túi.`\n\nWeil diese Nomen eine Region benennen und keine Kasusrelation, gibt es auch keinen Dativ/Akkusativ-Wechsel wie bei deutschen Wechselpräpositionen („auf dem Tisch“ vs. „auf den Tisch“). Und weil sie Nomen sind, können sie mit `bên` „Seite“ oder `phía` „Richtung“ erweitert werden: `bên trong` „innen“, `bên ngoài` „außen“, `bên cạnh` „daneben“.\n\nDie Wahl folgt der **Raumvorstellung**, nicht der deutschen Präposition: Ein Fahrgast ist `trên xe` („oben auf dem Fahrzeug“), auch wenn man auf Deutsch „im Bus“ sagt; ein Bild hängt `trên tường` „an der Wand“. `trong` betont dagegen das Umschlossensein: `trong phòng`, `trong túi`.\n\n`giữa` „Mitte“ verlangt zwei Bezugspunkte: `giữa chợ và bãi biển`. Ohne Bezugsnomen stehen die Lokalnomen allein: `Linh ở ngoài.` – „Linh ist draußen.“",
          table: { head: ["Lokalnomen", "Grundbedeutung", "typisches Deutsch"], rows: [["trên", "obere Region", "auf, über, (im Fahrzeug), an (Wand)"], ["dưới", "untere Region", "unter"], ["trong", "Innenraum", "in, drinnen"], ["ngoài", "Außenraum", "draußen, außerhalb"], ["trước", "Vorderseite", "vor"], ["sau", "Rückseite", "hinter"], ["bên cạnh", "Seite daneben", "neben"], ["giữa", "Mitte", "zwischen, mitten in"]] },
          examples: [
            { vi: "Điện thoại ở trên bàn.", de: "Das Handy liegt auf dem Tisch.", gloss: "Handy | sich befinden | Oberseite | Tisch" },
            { vi: "Con mèo ở dưới ghế.", de: "Die Katze ist unter dem Stuhl.", gloss: "CL | Katze | sich befinden | Unterseite | Stuhl" },
            { vi: "Ví ở trong túi.", de: "Das Portemonnaie ist in der Tasche.", gloss: "Portemonnaie | sich befinden | Inneres | Tasche" },
            { vi: "Quán phở ở bên cạnh khách sạn.", de: "Das Phở-Lokal ist neben dem Hotel.", gloss: "Lokal | Phở | sich befinden | Seite-Kante | Hotel" },
            { vi: "Khách sạn ở giữa chợ và bãi biển.", de: "Das Hotel liegt zwischen Markt und Strand.", gloss: "Hotel | sich befinden | Mitte | Markt | und | Strand" }
          ],
          contrast: "Deutsche Präpositionen regieren Kasus und wechseln je nach Ruhe/Bewegung (in dem / in den). Vietnamesische Lokalnomen sind unveränderliche Nomen; die Bewegung drückt ein eigenes Verb aus (nächste Lektion). Daher nicht *trên* für jedes „auf“ einsetzen: „auf dem Markt“ heißt schlicht `ở chợ`."
        }
      ],
      dialogue: {
        setting: "Morgens im Hotelzimmer in Đà Nẵng. Linh sucht ihr Handy, Jonas hilft.",
        lines: [
          { who: "Linh", vi: "Anh ơi, điện thoại của em đâu?", de: "Schatz, wo ist mein Handy?" },
          { who: "Jonas", vi: "Điện thoại ở trên bàn.", de: "Das Handy liegt auf dem Tisch." },
          { who: "Linh", vi: "Không, điện thoại không ở trên bàn.", de: "Nein, das Handy ist nicht auf dem Tisch." },
          { who: "Jonas", vi: "Có ở trong túi của em không?", de: "Ist es in deiner Tasche?" },
          { who: "Linh", vi: "Không có.", de: "Nein." },
          { who: "Jonas", vi: "À, đây! Ở dưới ghế.", de: "Ah, hier! Unter dem Stuhl." },
          { who: "Linh", vi: "Cảm ơn anh! Chúng ta đi bãi biển nhé?", de: "Danke! Gehen wir an den Strand?" },
          { who: "Jonas", vi: "Bãi biển ở đâu? Có xa không?", de: "Wo ist der Strand? Ist er weit?" },
          { who: "Linh", vi: "Không xa lắm. Bãi biển ở trước khách sạn.", de: "Nicht sehr weit. Der Strand liegt vor dem Hotel." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Điện thoại ___ trên bàn.", de: "Das Handy liegt auf dem Tisch.", options: ["ở", "là", "có"], answer: "ở", explain: "Ortsangabe = ở. là ist Kopula (A ist B), nicht Lokalisierung." },
        { type: "gap", vi: "Ví ở ___ túi.", de: "Das Portemonnaie ist in der Tasche.", options: ["trong", "trên", "ngoài"], answer: "trong", explain: "trong bezeichnet den Innenraum der Tasche; trên wäre die Oberseite." },
        { type: "gap", vi: "Khách sạn ở ___ chợ và bãi biển.", de: "Das Hotel liegt zwischen Markt und Strand.", options: ["giữa", "bên cạnh", "trước"], answer: "giữa", explain: "Zwei Bezugspunkte mit và → giữa A và B." },
        { type: "gap", vi: "Chúng tôi ăn sáng ___ khách sạn.", de: "Wir frühstücken im Hotel.", options: ["ở", "là", "trên"], answer: "ở", explain: "ở als Präposition nach dem Verb. trên khách sạn wäre „oben auf dem Hotel“." },
        { type: "build", vi: "Điện thoại ở trên bàn.", de: "Das Handy liegt auf dem Tisch.", extra: ["là", "trong"] },
        { type: "build", vi: "Khách sạn ở gần bãi_biển.", de: "Das Hotel ist in der Nähe des Strandes.", extra: ["xa", "là"] },
        { type: "build", vi: "Nhà_vệ_sinh ở đâu ạ?", de: "Wo ist bitte die Toilette?", extra: ["gì", "là"] },
        { type: "translate", de: "Wo ist das Hotel?", answers: ["Khách sạn ở đâu?", "Khách sạn ở đâu ạ?", "Khách sạn đâu?"] },
        { type: "translate", de: "Das Handy ist in der Tasche.", answers: ["Điện thoại ở trong túi.", "Điện thoại trong túi."] },
        { type: "mc", q: "Was ist „trên“ grammatisch?", options: ["Ein Lokalnomen: ‚obere Region (von)‘", "Eine Präposition mit Dativ wie ‚auf‘", "Ein Verb ‚liegen‘"], answer: 0, explain: "trên ist ein Nomen; trên bàn = ‚Oberseite des Tisches‘ (Juxtaposition wie mẹ tôi)." },
        { type: "mc", q: "Welche Funktion hat ở in diesem Satz?", vi: "Tôi ở Berlin.", options: ["Vollverb ‚wohnen / sich befinden‘", "Präposition nach einem Verb", "Fragewort"], answer: 0, explain: "ở ist hier das einzige Prädikat, also Vollverb." },
        { type: "mc", q: "Welcher Satz ist korrekt?", options: ["Khách sạn là bên cạnh chợ.", "Khách sạn ở bên cạnh chợ.", "Khách sạn bên cạnh ở chợ."], answer: 1, explain: "Ort → ở; das Lokalnomen bên cạnh steht direkt vor dem Bezugsnomen chợ." },
        { type: "listen", vi: "Ví của em ở trong túi.", de: "Mein Portemonnaie ist in der Tasche." },
        { type: "speak", vi: "Xin lỗi, nhà vệ sinh ở đâu ạ?", de: "Entschuldigung, wo ist bitte die Toilette?" },
        { type: "pairs", pairs: [["trên", "oben / auf"], ["dưới", "unter"], ["trong", "in / drinnen"], ["ngoài", "draußen"], ["trước", "vor"], ["sau", "hinter"]] }
      ]
    },

    // ───────────────────────────── k07l2 ─────────────────────────────
    {
      id: "k07l2",
      title: "Richtungsverben – ra Bắc, vào Nam",
      goal: "Du kannst Bewegungen mit dem passenden Richtungsverb ausdrücken und kennst die Konvention „ra Bắc, vào Nam“.",
      vocab: [
        { vi: "đi", de: "gehen, fahren (allgemeine Fortbewegung)", pos: "V", ex: { vi: "Chúng tôi đi Hội An.", de: "Wir fahren nach Hội An." } },
        { vi: "đến", de: "ankommen, kommen (zu); bis", pos: "V", note: "Ziel direkt dahinter", ex: { vi: "Hôm nay chúng tôi đến Đà Nẵng.", de: "Heute kommen wir in Đà Nẵng an." } },
        { vi: "tới", de: "ankommen, kommen (zu)", pos: "V", note: "Synonym zu đến, etwas umgangssprachlicher", ex: { vi: "Chị Hương tới khách sạn.", de: "Hương kommt zum Hotel." } },
        { vi: "về", de: "zurückkehren, heimkehren", pos: "V", emoji: "🏠", note: "Bewegung zur ‚Basis‘ (Zuhause, Heimat, Unterkunft)", ex: { vi: "Tối nay Jonas về khách sạn.", de: "Heute Abend kehrt Jonas ins Hotel zurück." } },
        { vi: "lên", de: "hinaufgehen; (in Fahrzeug) einsteigen", pos: "V", emoji: "⬆️", ex: { vi: "Ngày mai chúng ta lên Bà Nà.", de: "Morgen fahren wir hinauf nach Bà Nà." } },
        { vi: "xuống", de: "hinuntergehen; aussteigen", pos: "V", emoji: "⬇️", ex: { vi: "Chúng ta xuống biển nhé!", de: "Lass uns runter ans Meer gehen!" } },
        { vi: "ra", de: "hinausgehen (ins Offene); nach Norden", pos: "V", ex: { vi: "Linh ra chợ.", de: "Linh geht (raus) zum Markt." } },
        { vi: "vào", de: "hineingehen; nach Süden", pos: "V", ex: { vi: "Mời anh vào.", de: "Kommen Sie bitte herein." } },
        { vi: "qua", de: "hinübergehen, überqueren; vorbeigehen", pos: "V", ex: { vi: "Chúng tôi qua cầu Rồng.", de: "Wir überqueren die Drachenbrücke." } },
        { vi: "sang", de: "hinübergehen (nach drüben, ins Ausland)", pos: "V", note: "Süden bevorzugt qua", ex: { vi: "Tháng tám, bà ngoại sang Đức.", de: "Im August fliegt Oma nach Deutschland." } },
        { vi: "Bắc", de: "Norden", pos: "N", emoji: "🧭", note: "miền Bắc = Nordvietnam", ex: { vi: "Hà Nội ở miền Bắc.", de: "Hanoi liegt im Norden." } },
        { vi: "Nam", de: "Süden", pos: "N", note: "miền Nam = Südvietnam", ex: { vi: "Sài Gòn ở miền Nam.", de: "Saigon liegt im Süden." } },
        { vi: "cầu", de: "Brücke", pos: "N", emoji: "🌉", cls: "cái", ex: { vi: "Cầu Rồng ở Đà Nẵng.", de: "Die Drachenbrücke ist in Đà Nẵng." } },
        { vi: "sông", de: "Fluss", pos: "N", emoji: "🏞️", cls: "con", ex: { vi: "Khách sạn ở bên cạnh sông Hàn.", de: "Das Hotel liegt neben dem Hàn-Fluss." } },
        { vi: "núi", de: "Berg", pos: "N", emoji: "⛰️", cls: "ngọn", ex: { vi: "Núi Bà Nà rất cao.", de: "Der Berg Bà Nà ist sehr hoch." } },
        { vi: "chạy", de: "laufen, rennen; (Fahrzeug) fahren", pos: "V", emoji: "🏃", ex: { vi: "Con mèo chạy vào nhà.", de: "Die Katze läuft ins Haus hinein." } }
      ],
      grammar: [
        {
          id: "g-k07-richtungsverben",
          title: "Richtungsverben",
          term: "Richtungsverb (Direktionalverb)",
          pattern: "S + Richtungsverb + Ziel",
          text: "Vietnamesisch kodiert die **Richtung** einer Bewegung in eigenen Verben. Das Ziel folgt direkt als Objekt – ohne Präposition: `đi Hội An` „nach Hội An fahren“, `về nhà` „nach Hause gehen“, `ra chợ` „zum Markt gehen“.\n\nDie Verben unterscheiden sich in ihrer räumlichen Perspektive:\n\n- `đi` – neutral „sich fortbewegen“; `đến/tới` – Ankunft am Ziel.\n- `về` – Rückkehr zur **Basis** (Zuhause, Heimatland, Unterkunft): `về Đức`, `về khách sạn`.\n- `lên` / `xuống` – vertikal: hinauf / hinunter; auch ein- und aussteigen (`lên xe`, `xuống xe`).\n- `ra` / `vào` – aus einem umschlossenen Raum hinaus ins Offene / hinein: `ra ngoài`, `vào phòng`. Deshalb geht man `ra biển` (zum offenen Meer) und `ra sân bay` (an den Stadtrand).\n- `qua` / `sang` – hinüber, über eine Grenze: `qua cầu`, `sang Đức`.\n\nDie Wahl hängt vom **Weltbild des Sprechers** ab, nicht nur von der Geometrie. Darum ist dieselbe Reise je nach Ausgangspunkt `ra`, `vào`, `lên` oder `xuống` – siehe den nächsten Grammatikpunkt.",
          table: { head: ["Verb", "Richtung", "Beispiel"], rows: [["đi", "neutral", "đi Huế"], ["đến / tới", "Ankunft", "đến Đà Nẵng"], ["về", "zurück zur Basis", "về nhà, về Đức"], ["lên", "hinauf", "lên núi, lên xe"], ["xuống", "hinunter", "xuống biển, xuống xe"], ["ra", "hinaus, ins Offene", "ra chợ, ra biển"], ["vào", "hinein", "vào nhà"], ["qua / sang", "hinüber", "qua cầu, sang Đức"]] },
          examples: [
            { vi: "Tối nay chúng tôi về khách sạn.", de: "Heute Abend gehen wir zurück ins Hotel.", gloss: "Abend-dieser | wir | zurückkehren | Hotel" },
            { vi: "Linh ra chợ.", de: "Linh geht zum Markt.", gloss: "Linh | hinaus | Markt" },
            { vi: "Chúng ta lên núi nhé.", de: "Lass uns auf den Berg steigen.", gloss: "wir(inkl.) | hinauf | Berg | PART" },
            { vi: "Mời chị vào.", de: "Komm bitte herein.", gloss: "einladen | du(ältere Frau) | hinein" }
          ],
          contrast: "Deutsch braucht für das Ziel eine Präposition samt Kasus („nach Hanoi“, „in die Stadt“, „zum Markt“, „auf den Berg“). Im Vietnamesischen trägt das Verb die Richtung, und das Ziel ist ein bloßes Objekt."
        },
        {
          id: "g-k07-ra-bac-vao-nam",
          title: "„ra Bắc, vào Nam“ – Geografie in der Grammatik",
          term: "Deiktische Richtungskonvention",
          text: "Für Reisen innerhalb Vietnams gelten feste Konventionen, die Deutschsprachige überraschen:\n\n- **Nach Norden** geht man `ra`: `ra Hà Nội`, `ra Bắc`. Von Đà Nẵng nach Hanoi: `Tôi ra Hà Nội.`\n- **Nach Süden** geht man `vào`: `vào Sài Gòn`, `vào Nam`. Selbst das nahe, südlich gelegene Hội An ist von Đà Nẵng aus `vào Hội An`.\n- **Ins Hochland** geht man `lên`: `lên Đà Lạt`, `lên Sa Pa`, `lên Tây Nguyên`.\n- **Ins Tiefland, an die Küste** geht man `xuống`: von Đà Lạt `xuống Nha Trang`, von Hanoi `xuống Hải Phòng`.\n- **Ins Ausland** geht man `sang` (Süd: `qua`): `sang Đức`; zurück in die Heimat `về`: `về Việt Nam`, `về Đức`.\n- **Auf eine Insel** geht man `ra`: `ra Phú Quốc`, `ra đảo`.\n\nDie Konvention wird meist mit der Besiedlungsgeschichte erklärt: Vom Kernland im Norden dehnte sich der Staat über Jahrhunderte nach Süden aus (*Nam tiến*); man „ging hinein“ in das neue Land und „kam heraus“ zurück ins Zentrum. Hinzu kommt die Sicht vom Land aufs Meer (`ra biển`).\n\nAchtung: Aus den Provinzen des Red-River-Deltas sagt man oft `lên Hà Nội` – die Hauptstadt gilt als „oben“ (Zentrum, flussaufwärts). Wer aus Huế oder Sài Gòn kommt, sagt dagegen `ra Hà Nội`.",
          table: { head: ["Ziel (von Đà Nẵng aus)", "Verb", "Grund"], rows: [["Hà Nội", "ra", "Norden"], ["Sài Gòn, Hội An", "vào", "Süden"], ["Đà Lạt, Bà Nà", "lên", "Bergland"], ["biển (Meer)", "ra / xuống", "offene See / Tiefland"], ["Đức (Deutschland)", "sang / qua", "Ausland"], ["nhà, khách sạn", "về", "zurück zur Basis"]] },
          examples: [
            { vi: "Thứ bảy, Jonas ra Hà Nội.", de: "Am Samstag fährt Jonas nach Hanoi.", gloss: "Samstag | Jonas | hinaus | Hanoi" },
            { vi: "Bà ngoại của Linh ở Sài Gòn. Chúng tôi vào Sài Gòn.", de: "Linhs Oma lebt in Saigon. Wir fahren nach Saigon.", gloss: "… | wir | hinein | Saigon" },
            { vi: "Tháng mười, chúng tôi lên Đà Lạt.", de: "Im Oktober fahren wir nach Đà Lạt hinauf.", gloss: "Monat zehn | wir | hinauf | Đà Lạt" },
            { vi: "Thứ hai, chúng tôi xuống Nha Trang.", de: "Am Montag fahren wir (von Đà Lạt) hinunter nach Nha Trang.", gloss: "Montag | wir | hinunter | Nha Trang" }
          ],
          contrast: "Im Deutschen gibt es nur Spuren solcher Konventionen („hoch in den Norden“, „runter nach Bayern“) und sie sind fakultativ. Im Vietnamesischen ist die Wahl quasi obligatorisch: `đi Hà Nội` ist neutral möglich, aber *`vào Hà Nội` von Đà Nẵng aus klingt falsch.",
          south: "Im Süden ist `qua` statt `sang` üblich: `qua Mỹ`, `qua Đức`."
        },
        {
          id: "g-k07-richtungskomplement",
          title: "Richtungsverben als Komplement",
          term: "Direktionalkomplement",
          pattern: "V(Art der Bewegung) + Richtungsverb (+ Ziel)",
          text: "Richtungsverben können nach einem anderen Verb stehen und geben dann die **Richtung** der Handlung an, während das erste Verb die **Art** der Bewegung bezeichnet: `chạy vào` „hineinlaufen“, `đi ra` „hinausgehen“, `đi lên` „hinaufgehen“, `chạy xuống` „hinunterrennen“. Das Ziel folgt am Ende: `Con mèo chạy vào nhà.` – „Die Katze läuft ins Haus.“\n\nSolche Komplemente sind das vietnamesische Gegenstück zu deutschen Verbpartikeln wie *hinein-, heraus-, hinauf-*. Anders als im Deutschen bleiben sie aber immer **hinter** dem Hauptverb und werden nie abgetrennt oder vorangestellt; es gibt auch keine Unterscheidung „hin-“ vs. „her-“ – die Sprecherperspektive ergibt sich aus dem Kontext.\n\nAuch nicht-räumliche Verben können ein Richtungsverb bekommen; dazu mehr in K07l3 (`mang về` „mitbringen, nach Hause bringen“).\n\nDie Reihenfolge ist fest: *`vào chạy` ist falsch, denn das erste Verb ist der Kopf, das zweite präzisiert ihn.",
          examples: [
            { vi: "Con mèo chạy vào nhà.", de: "Die Katze läuft ins Haus hinein.", gloss: "CL | Katze | laufen | hinein | Haus" },
            { vi: "Jonas chạy ra bãi biển.", de: "Jonas rennt hinaus zum Strand.", gloss: "Jonas | rennen | hinaus | Strand" },
            { vi: "Chúng ta đi lên núi nhé.", de: "Lass uns auf den Berg hinaufgehen.", gloss: "wir | gehen | hinauf | Berg | PART" },
            { vi: "Mời anh đi vào.", de: "Gehen Sie bitte hinein.", gloss: "einladen | Sie | gehen | hinein" }
          ],
          contrast: "Deutsch: „Die Katze läuft in das Haus hinein“ – Präposition + Kasus + Verbpartikel. Vietnamesisch: Verb + Richtungsverb + Ziel, ohne Präposition und ohne Satzklammer."
        }
      ],
      dialogue: {
        setting: "Abends am Hàn-Fluss. Jonas und Linh planen die nächsten Reisetage.",
        lines: [
          { who: "Linh", vi: "Ngày mai chúng ta lên Bà Nà nhé?", de: "Fahren wir morgen hinauf nach Bà Nà?" },
          { who: "Jonas", vi: "Ừ. Hội An ở đâu? Có xa không?", de: "Ja. Wo liegt Hội An? Ist es weit?" },
          { who: "Linh", vi: "Không xa. Thứ năm chúng ta vào Hội An.", de: "Nicht weit. Am Donnerstag fahren wir nach Hội An." },
          { who: "Jonas", vi: "Thứ bảy chúng ta ra Hà Nội, phải không?", de: "Am Samstag fahren wir nach Hanoi, oder?" },
          { who: "Linh", vi: "Không phải. Chúng ta vào Sài Gòn. Bà ngoại em ở Sài Gòn.", de: "Nein. Wir fahren nach Saigon. Meine Oma lebt in Saigon." },
          { who: "Jonas", vi: "Tháng mười hai chúng ta về Berlin.", de: "Im Dezember fliegen wir zurück nach Berlin." },
          { who: "Linh", vi: "Ừ. Bây giờ chúng ta qua cầu Rồng nhé!", de: "Ja. Jetzt gehen wir über die Drachenbrücke!" },
          { who: "Jonas", vi: "Và xuống biển nhé!", de: "Und runter ans Meer!" }
        ]
      },
      exercises: [
        { type: "gap", vi: "Tối nay chúng tôi ___ khách sạn.", de: "Heute Abend gehen wir zurück ins Hotel.", options: ["về", "ra", "lên"], answer: "về", explain: "Rückkehr zur Basis (Unterkunft, Zuhause) = về." },
        { type: "gap", vi: "Thứ bảy, Jonas ___ Hà Nội.", de: "Am Samstag fährt Jonas (von Đà Nẵng) nach Hanoi.", options: ["ra", "vào", "xuống"], answer: "ra", explain: "Nach Norden geht man ra: ra Bắc, ra Hà Nội. vào gilt für den Süden." },
        { type: "gap", vi: "Tháng mười, chúng tôi ___ Đà Lạt.", de: "Im Oktober fahren wir nach Đà Lạt.", options: ["lên", "xuống", "ra"], answer: "lên", explain: "Đà Lạt liegt im Hochland → lên." },
        { type: "gap", vi: "Con mèo chạy ___ nhà.", de: "Die Katze läuft ins Haus hinein.", options: ["vào", "ra", "lên"], answer: "vào", explain: "Direktionalkomplement: chạy (Art) + vào (Richtung hinein)." },
        { type: "gap", vi: "Tháng tám, bà ngoại của Linh ___ Đức.", de: "Im August fliegt Linhs Oma nach Deutschland.", options: ["sang", "lên", "về"], answer: "sang", explain: "Ins Ausland → sang (Süd: qua). về Đức sagt nur, wer in Deutschland zu Hause ist." },
        { type: "build", vi: "Ngày mai chúng ta lên Bà_Nà.", alts: ["Chúng ta lên Bà_Nà ngày mai."], de: "Morgen fahren wir hinauf nach Bà Nà.", extra: ["xuống", "ở"] },
        { type: "build", vi: "Linh vào Sài_Gòn.", de: "Linh fährt (in den Süden) nach Saigon.", extra: ["ra", "là"] },
        { type: "build", vi: "Jonas chạy ra bãi_biển.", de: "Jonas rennt hinaus zum Strand.", extra: ["vào", "ở"] },
        { type: "translate", de: "Wir fahren morgen (von Đà Nẵng) nach Hội An.", answers: ["Ngày mai chúng ta vào Hội An.", "Ngày mai chúng tôi vào Hội An.", "Chúng ta vào Hội An ngày mai.", "Chúng tôi vào Hội An ngày mai.", "Ngày mai chúng ta đi Hội An.", "Ngày mai chúng tôi đi Hội An.", "Chúng ta đi Hội An ngày mai.", "Chúng tôi đi Hội An ngày mai."] },
        { type: "translate", de: "Ich gehe nach Hause.", answers: ["Tôi về nhà.", "Tôi đi về nhà."] },
        { type: "mc", q: "Linh fährt von Sài Gòn nach Hà Nội. Welches Verb ist üblich?", vi: "Linh ___ Hà Nội.", options: ["ra", "vào", "lên"], answer: 0, explain: "Richtung Norden → ra (ra Bắc)." },
        { type: "mc", q: "Von Đà Lạt (Hochland) an die Küste nach Nha Trang:", vi: "Chúng tôi ___ Nha Trang.", options: ["lên", "xuống", "vào"], answer: 1, explain: "Vom Bergland ins Tiefland/an die Küste → xuống." },
        { type: "mc", q: "Wie heißt „hineinlaufen“?", options: ["chạy vào", "vào chạy", "chạy trong"], answer: 0, explain: "Hauptverb zuerst, Richtungsverb als Komplement dahinter. trong ist ein Lokalnomen, keine Richtung." },
        { type: "listen", vi: "Chúng ta qua cầu Rồng nhé.", de: "Lass uns über die Drachenbrücke gehen." },
        { type: "speak", vi: "Ngày mai chúng ta lên Bà Nà.", de: "Morgen fahren wir hinauf nach Bà Nà." },
        { type: "pairs", pairs: [["lên", "hinauf"], ["xuống", "hinunter"], ["ra", "hinaus"], ["vào", "hinein"], ["về", "zurück / heim"], ["qua", "hinüber"]] }
      ]
    },

    // ───────────────────────────── k07l3 ─────────────────────────────
    {
      id: "k07l3",
      title: "Verkehrsmittel & Serialverben",
      goal: "Du kannst sagen, womit du fährst, wie lange eine Strecke dauert, und Handlungsketten mit Serialverben bilden.",
      vocab: [
        { vi: "bằng", de: "mit, mittels (Instrument)", pos: "Präp", note: "nicht für Begleitpersonen (→ với)", ex: { vi: "Chúng tôi đi Hội An bằng xe buýt.", de: "Wir fahren mit dem Bus nach Hội An." } },
        { vi: "xe máy", de: "Motorroller, Moped", pos: "N", emoji: "🛵", cls: "chiếc", ex: { vi: "Đà Nẵng có nhiều xe máy.", de: "In Đà Nẵng gibt es viele Mopeds." } },
        { vi: "ô tô", de: "Auto", pos: "N", emoji: "🚗", cls: "chiếc", south: "xe hơi", ex: { vi: "Chị Hương đi ô tô.", de: "Hương fährt Auto." } },
        { vi: "xe buýt", de: "Bus", pos: "N", emoji: "🚌", cls: "chiếc", ex: { vi: "Xe buýt này đi Hội An.", de: "Dieser Bus fährt nach Hội An." } },
        { vi: "tàu hỏa", de: "Zug", pos: "N", emoji: "🚆", south: "xe lửa", note: "oft kurz: tàu", ex: { vi: "Jonas thích đi tàu hỏa.", de: "Jonas fährt gern Zug." } },
        { vi: "máy bay", de: "Flugzeug", pos: "N", emoji: "✈️", cls: "chiếc", ex: { vi: "Chúng tôi về Berlin bằng máy bay.", de: "Wir fliegen zurück nach Berlin." } },
        { vi: "xe ôm", de: "Motorradtaxi", pos: "N", emoji: "🏍️", note: "wörtl. ‚Umarm-Fahrzeug‘", ex: { vi: "Đi xe ôm rẻ lắm.", de: "Motorradtaxi ist sehr billig." } },
        { vi: "đi bộ", de: "zu Fuß gehen", pos: "V", emoji: "🚶", note: "nie *đi bằng bộ", ex: { vi: "Linh đi bộ ra chợ.", de: "Linh geht zu Fuß zum Markt." } },
        { vi: "từ", de: "von, ab, aus", pos: "Präp", ex: { vi: "Từ đây đến chợ Hàn không xa.", de: "Von hier zum Hàn-Markt ist es nicht weit." } },
        { vi: "mất", de: "(Zeit/Geld) kosten, brauchen; verlieren", pos: "V", ex: { vi: "Đi máy bay mất một tiếng.", de: "Der Flug dauert eine Stunde." } },
        { vi: "bao lâu", de: "wie lange", pos: "QW", ex: { vi: "Đi tàu hỏa mất bao lâu?", de: "Wie lange dauert es mit dem Zug?" } },
        { vi: "tiếng", de: "Stunde (Dauer)", pos: "N", south: "giờ / tiếng", note: "Nord: tiếng = Dauer, giờ = Uhrzeit", ex: { vi: "Đi xe buýt mất hai tiếng.", de: "Mit dem Bus dauert es zwei Stunden." } },
        { vi: "khoảng", de: "ungefähr, etwa", pos: "Adv", ex: { vi: "Đi ô tô mất khoảng bốn mươi phút.", de: "Mit dem Auto dauert es etwa vierzig Minuten." } },
        { vi: "mang", de: "tragen, mitnehmen, bringen", pos: "V", ex: { vi: "Linh mang bánh mì về.", de: "Linh bringt Bánh mì mit nach Hause." } },
        { vi: "vé", de: "Fahrkarte, Ticket", pos: "N", emoji: "🎫", cls: "cái", ex: { vi: "Vé xe buýt bao nhiêu tiền?", de: "Wie viel kostet die Busfahrkarte?" } },
        { vi: "sân bay", de: "Flughafen", pos: "N", emoji: "🛫", ex: { vi: "Sân bay Đà Nẵng ở gần thành phố.", de: "Der Flughafen Đà Nẵng liegt nahe an der Stadt." } }
      ],
      grammar: [
        {
          id: "g-k07-bang",
          title: "Verkehrsmittel: đi (bằng) + Fahrzeug",
          term: "Instrumentale Präposition bằng",
          pattern: "S + đi (bằng) + Fahrzeug (+ Ziel)",
          text: "Das Verkehrsmittel kannst du auf zwei Arten angeben:\n\n- **direkt als Objekt** von `đi`: `đi xe máy`, `đi máy bay`, `đi tàu` – die alltäglichste Form.\n- **mit der Präposition `bằng`** „mittels“: `Chúng tôi đi Hội An bằng xe buýt.` Mit `bằng` kann das Fahrzeug auch hinter dem Ziel stehen.\n\nGefragt wird mit `bằng gì?`: `Anh đi bằng gì?` – „Womit fährst du?“\n\nZwei Fallen:\n\n- „Zu Fuß“ ist das lexikalisierte Verb `đi bộ` – *`đi bằng bộ` gibt es nicht.\n- `bằng` steht nur für das **Instrument**. Für Begleitpersonen (Komitativ) steht `với` (K05): `Jonas đi Hội An với Linh.` – „Jonas fährt mit Linh nach Hội An.“ Das deutsche „mit“ deckt beides ab; im Vietnamesischen musst du trennen.\n\n`bằng` ist übrigens dasselbe Wort wie im Gleichheitsvergleich (K06: `cao bằng` „so hoch wie“) – Grundbedeutung „gleich, eben, mittels“.",
          table: { head: ["Deutsch „mit …“", "Vietnamesisch", "Funktion"], rows: [["mit dem Bus", "bằng xe buýt / đi xe buýt", "Instrument"], ["mit Linh", "với Linh", "Komitativ"], ["zu Fuß", "đi bộ", "lexikalisiert"]] },
          examples: [
            { vi: "Chúng tôi đi Hội An bằng xe buýt.", de: "Wir fahren mit dem Bus nach Hội An.", gloss: "wir | fahren | Hội An | mittels | Bus" },
            { vi: "Linh đi xe máy.", de: "Linh fährt Moped.", gloss: "Linh | fahren | Moped" },
            { vi: "Anh đi bằng gì?", de: "Womit fährst du?", gloss: "du | fahren | mittels | was" },
            { vi: "Jonas đi Hội An với Linh.", de: "Jonas fährt mit Linh nach Hội An.", gloss: "Jonas | fahren | Hội An | mit(KOM) | Linh" }
          ],
          contrast: "Deutsch „mit“ ist polysem (Instrument und Begleitung). Vietnamesisch trennt `bằng` (Mittel) und `với` (Begleitung). *„Tôi đi với xe buýt“ klingt, als wäre der Bus ein Reisegefährte."
        },
        {
          id: "g-k07-serialverben",
          title: "Serialverbkonstruktionen",
          term: "Serialverbkonstruktion",
          pattern: "S + V₁ (+ O₁) + V₂ (+ O₂)",
          text: "In einer **Serialverbkonstruktion** stehen zwei oder mehr Verben ohne Konjunktion hintereinander, teilen sich ein Subjekt und beschreiben **ein** zusammenhängendes Ereignis. Die Reihenfolge bildet die zeitliche oder logische Abfolge ab (ikonische Wortstellung):\n\n- **Bewegung + Zweck:** `đi mua vé` „Tickets kaufen gehen“, `đi ăn` „essen gehen“.\n- **Art + Ziel:** `đi bộ đến chợ` „zu Fuß zum Markt gehen“, `đi xe máy ra biển`.\n- **Handlung + Richtung:** `mang về` „heimbringen, mitnehmen (nach Hause)“, `mang ra` „hinausbringen“. Das Objekt steht meist zwischen den Verben: `mang bánh mì về`.\n\nEs gibt keine Konjunktion „und“ und kein „um … zu“: Die bloße Abfolge genügt. Verneint wird vor dem ersten Verb: `Tôi không đi mua vé.`\n\nRichtungsverben als zweites Glied kennst du schon aus K07l2 (`chạy vào`) – das ist ein Spezialfall der Serialisierung.",
          examples: [
            { vi: "Jonas đi mua vé.", de: "Jonas geht Tickets kaufen.", gloss: "Jonas | gehen | kaufen | Ticket" },
            { vi: "Chúng ta đi bộ đến chợ nhé.", de: "Lass uns zu Fuß zum Markt gehen.", gloss: "wir | gehen-Fuß | ankommen | Markt | PART" },
            { vi: "Linh mang bánh mì về.", de: "Linh bringt Bánh mì mit nach Hause.", gloss: "Linh | tragen | Bánh mì | zurück" },
            { vi: "Tối nay chúng tôi đi ăn hải sản.", de: "Heute Abend gehen wir Meeresfrüchte essen.", gloss: "heute Abend | wir | gehen | essen | Meeresfrüchte" }
          ],
          contrast: "Deutsch verwendet hier Infinitivkonstruktionen („kaufen gehen“), Koordination („geht und kauft“) oder Partikelverben („mitbringen“). Vietnamesisch reiht einfach Verben in der Abfolge der Teilhandlungen auf – „gehen kaufen“, nicht „kaufen gehen“."
        },
        {
          id: "g-k07-tu-den-mat",
          title: "Strecke und Dauer: từ … đến …, mất bao lâu",
          term: "Ausgangs- und Zielangabe; Dauerverb mất",
          pattern: "Từ A đến B (+ đi + Fahrzeug) + mất + Dauer",
          text: "Strecken beschreibst du mit `từ` „von“ und `đến` (oder `tới`) „bis“: `từ Đà Nẵng đến Hội An`. Die Phrase steht gern satzinitial als **Topik**.\n\nDie Dauer drückt das Verb `mất` aus, wörtlich „verlieren, aufwenden“ – man „verliert“ Zeit: `Từ đây đến Hội An mất khoảng bốn mươi phút.` Die Frage lautet `mất bao lâu?` „wie lange dauert es?“. Das Verkehrsmittel kann ein eigenes Prädikat sein: `Đi xe buýt mất một tiếng.`\n\nAchte im Norden auf zwei Wörter für „Stunde“:\n\n- `giờ` = **Uhrzeit** (K03): `hai giờ` „zwei Uhr“, `mấy giờ?` „wie spät?“\n- `tiếng` = **Dauer**: `hai tiếng` „zwei Stunden“. Ganz eindeutig ist `hai tiếng đồng hồ`.\n\nWer also `mất mấy giờ?` fragt, mischt Uhrzeit und Dauer. Richtig: `mất bao lâu?` oder (bei kleinen Zahlen) `mất mấy tiếng?`. `khoảng` „etwa“ steht vor der Zahl.",
          table: { head: ["Frage", "Antwort", "Deutsch"], rows: [["Mấy giờ?", "Hai giờ.", "Wie spät? – Zwei Uhr."], ["Mất bao lâu?", "Mất hai tiếng.", "Wie lange? – Zwei Stunden."], ["Mất mấy tiếng?", "Khoảng ba tiếng.", "Wie viele Stunden? – Etwa drei."]] },
          examples: [
            { vi: "Từ đây đến Hội An mất bao lâu?", de: "Wie lange braucht man von hier nach Hội An?", gloss: "von | hier | bis | Hội An | kosten | wie lange" },
            { vi: "Đi ô tô mất khoảng bốn mươi phút.", de: "Mit dem Auto dauert es etwa vierzig Minuten.", gloss: "fahren | Auto | kosten | etwa | vierzig | Minute" },
            { vi: "Từ Hà Nội đến Đà Nẵng đi máy bay mất một tiếng.", de: "Von Hanoi nach Đà Nẵng fliegt man eine Stunde.", gloss: "von | Hanoi | bis | Đà Nẵng | fahren | Flugzeug | kosten | eine | Stunde" }
          ],
          contrast: "Deutsch: Dauer ist „dauern“ oder „brauchen“ mit dem Weg als Subjekt bzw. „man“. Vietnamesisch braucht kein Subjekt: `Mất hai tiếng.` – wörtlich „(es) kostet zwei Stunden“.",
          south: "Im Süden wird `giờ` auch für die Dauer benutzt: `mất hai giờ` = zwei Stunden."
        }
      ],
      dialogue: {
        setting: "An der Rezeption des Hotels in Đà Nẵng. Jonas und Linh fragen die Rezeptionistin Thảo (etwa 25) nach dem Weg nach Hội An.",
        lines: [
          { who: "Jonas", vi: "Em ơi, từ đây đến Hội An mất bao lâu?", de: "Entschuldigung, wie lange braucht man von hier nach Hội An?" },
          { who: "Thảo", vi: "Đi ô tô mất khoảng bốn mươi phút ạ.", de: "Mit dem Auto etwa vierzig Minuten." },
          { who: "Jonas", vi: "Có xe buýt không em?", de: "Gibt es einen Bus?" },
          { who: "Thảo", vi: "Có ạ. Đi xe buýt mất khoảng một tiếng rưỡi.", de: "Ja. Mit dem Bus etwa anderthalb Stunden." },
          { who: "Linh", vi: "Anh muốn đi bằng gì?", de: "Womit willst du fahren?" },
          { who: "Jonas", vi: "Anh muốn đi xe máy.", de: "Ich will mit dem Moped fahren." },
          { who: "Linh", vi: "Đi xe máy mệt lắm. Chúng ta đi xe buýt nhé.", de: "Mit dem Moped ist es sehr anstrengend. Lass uns den Bus nehmen." },
          { who: "Jonas", vi: "Ừ. Chiều nay chúng ta đi mua vé.", de: "Okay. Heute Nachmittag gehen wir Tickets kaufen." },
          { who: "Thảo", vi: "Anh chị mua vé ở đây được ạ.", de: "Sie können die Tickets hier kaufen." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Chúng tôi đi Hội An ___ xe buýt.", de: "Wir fahren mit dem Bus nach Hội An.", options: ["bằng", "với", "ở"], answer: "bằng", explain: "Verkehrsmittel = Instrument → bằng. với steht für Begleitpersonen." },
        { type: "gap", vi: "Từ Hà Nội ___ Đà Nẵng mất một tiếng.", de: "Von Hanoi nach Đà Nẵng dauert es eine Stunde.", options: ["đến", "ở", "bằng"], answer: "đến", explain: "từ … đến … = von … bis …" },
        { type: "gap", vi: "Từ đây đến chợ Hàn ___ khoảng mười phút.", de: "Von hier zum Hàn-Markt braucht man etwa zehn Minuten.", options: ["mất", "có", "là"], answer: "mất", explain: "Dauer wird mit dem Verb mất ausgedrückt." },
        { type: "gap", vi: "Đi tàu hỏa mất ___?", de: "Wie lange dauert es mit dem Zug?", options: ["bao lâu", "mấy giờ", "bao nhiêu"], answer: "bao lâu", explain: "Dauer → bao lâu. mấy giờ fragt nach der Uhrzeit." },
        { type: "build", vi: "Chúng tôi đi Hội_An bằng xe_buýt.", de: "Wir fahren mit dem Bus nach Hội An.", extra: ["với", "ở"] },
        { type: "build", vi: "Từ đây đến sân_bay mất bao_lâu?", de: "Wie lange braucht man von hier zum Flughafen?", extra: ["mấy", "giờ"] },
        { type: "build", vi: "Jonas đi mua vé.", de: "Jonas geht Tickets kaufen.", extra: ["bằng", "ở"] },
        { type: "translate", de: "Wie lange dauert es von hier nach Hội An?", answers: ["Từ đây đến Hội An mất bao lâu?", "Từ đây tới Hội An mất bao lâu?", "Từ đây đi Hội An mất bao lâu?", "Từ đây đến Hội An mất bao lâu ạ?", "Từ đây tới Hội An mất bao lâu ạ?"] },
        { type: "translate", de: "Ich fahre mit dem Moped.", answers: ["Tôi đi xe máy.", "Tôi đi bằng xe máy."] },
        { type: "translate", de: "Wir gehen zu Fuß zum Markt.", answers: ["Chúng tôi đi bộ đến chợ.", "Chúng ta đi bộ đến chợ.", "Chúng tôi đi bộ tới chợ.", "Chúng ta đi bộ tới chợ.", "Chúng tôi đi bộ ra chợ.", "Chúng ta đi bộ ra chợ."] },
        { type: "mc", q: "Welcher Satz ist falsch?", options: ["Tôi đi bằng bộ.", "Tôi đi bộ.", "Tôi đi bằng tàu hỏa."], answer: 0, explain: "„Zu Fuß“ ist das Verb đi bộ – ohne bằng." },
        { type: "mc", q: "„Jonas fährt mit Linh nach Hội An.“ – was passt?", vi: "Jonas đi Hội An ___ Linh.", options: ["với", "bằng", "từ"], answer: 0, explain: "Begleitperson (Komitativ) → với. bằng nur für Mittel/Fahrzeuge." },
        { type: "mc", q: "Was bedeutet „hai tiếng“ im Norden?", vi: "Đi xe buýt mất hai tiếng.", options: ["zwei Stunden (Dauer)", "zwei Uhr", "zwei Sprachen"], answer: 0, explain: "tiếng = Stunde als Dauer; giờ = Uhrzeit. (tiếng heißt sonst auch ‚Sprache, Laut‘.)" },
        { type: "listen", vi: "Đi máy bay mất khoảng một tiếng.", de: "Mit dem Flugzeug dauert es etwa eine Stunde." },
        { type: "speak", vi: "Từ đây đến Hội An mất bao lâu ạ?", de: "Wie lange braucht man von hier nach Hội An?" }
      ]
    },

    // ───────────────────────────── k07l4 ─────────────────────────────
    {
      id: "k07l4",
      title: "Wegbeschreibung & Imperativ",
      goal: "Du kannst nach dem Weg fragen, Wegbeschreibungen verstehen und Aufforderungen und Verbote formulieren.",
      vocab: [
        { vi: "rẽ", de: "abbiegen", pos: "V", south: "quẹo", ex: { vi: "Anh rẽ trái nhé.", de: "Bieg bitte links ab." } },
        { vi: "trái", de: "links", pos: "N", emoji: "⬅️", note: "bên trái = linke Seite", ex: { vi: "Ngân hàng ở bên trái.", de: "Die Bank ist links." } },
        { vi: "phải", de: "rechts", pos: "N", emoji: "➡️", note: "Homonym: phải không? (Frage)", ex: { vi: "Chợ Hàn ở bên phải.", de: "Der Hàn-Markt ist rechts." } },
        { vi: "đi thẳng", de: "geradeaus gehen/fahren", pos: "V", emoji: "⬆️", ex: { vi: "Chị đi thẳng đường này.", de: "Gehen Sie diese Straße geradeaus." } },
        { vi: "ngã tư", de: "Kreuzung", pos: "N", emoji: "✚", note: "ngã ba = T-Kreuzung, Gabelung", ex: { vi: "Đến ngã tư, anh rẽ phải.", de: "An der Kreuzung biegst du rechts ab." } },
        { vi: "đèn đỏ", de: "rote Ampel", pos: "N", emoji: "🚦", note: "đèn xanh = grüne Ampel", ex: { vi: "Đèn đỏ, anh dừng nhé!", de: "Rote Ampel, halt bitte an!" } },
        { vi: "đường", de: "Straße, Weg", pos: "N", emoji: "🛣️", cls: "con", ex: { vi: "Đường này nhiều xe máy lắm.", de: "Auf dieser Straße sind sehr viele Mopeds." } },
        { vi: "hãy", de: "(Aufforderungspartikel vor dem Verb)", pos: "Part", note: "nachdrücklich, eher förmlich", ex: { vi: "Các bạn hãy cẩn thận!", de: "Seid vorsichtig!" } },
        { vi: "đừng", de: "nicht! (Prohibitiv)", pos: "Part", emoji: "🚫", ex: { vi: "Đừng đi nhanh quá!", de: "Fahr nicht so schnell!" } },
        { vi: "rồi", de: "dann, danach (Abfolge)", pos: "Konj", note: "Aspektbedeutung ‚schon‘ folgt in K08", ex: { vi: "Đi thẳng, rồi rẽ trái.", de: "Geradeaus, dann links abbiegen." } },
        { vi: "sau đó", de: "danach, anschließend", pos: "Adv", ex: { vi: "Sau đó chúng ta đi ăn.", de: "Danach gehen wir essen." } },
        { vi: "cẩn thận", de: "vorsichtig", pos: "Adj", ex: { vi: "Anh đi cẩn thận nhé!", de: "Fahr vorsichtig!" } },
        { vi: "nhanh", de: "schnell", pos: "Adj", ex: { vi: "Xe ôm nhanh hơn xe buýt.", de: "Das Motorradtaxi ist schneller als der Bus." } },
        { vi: "chậm", de: "langsam", pos: "Adj", ex: { vi: "Chú đi chậm thôi ạ.", de: "Fahren Sie bitte etwas langsamer." } },
        { vi: "dừng", de: "anhalten", pos: "V", emoji: "🛑", ex: { vi: "Anh dừng ở đây nhé.", de: "Halt bitte hier an." } },
        { vi: "ngân hàng", de: "Bank (Geldinstitut)", pos: "N", emoji: "🏦", ex: { vi: "Ngân hàng ở bên cạnh khách sạn.", de: "Die Bank ist neben dem Hotel." } }
      ],
      grammar: [
        {
          id: "g-k07-imperativ",
          title: "Aufforderung und Verbot: hãy, đừng, nhé",
          term: "Imperativ und Prohibitiv",
          pattern: "(Anrede) + (hãy) + V … (nhé)  |  (Anrede) + đừng + V … (nhé)",
          text: "Einen **Imperativ** bildet Vietnamesisch ohne Verbmorphologie. Die neutrale Form ist die bloße Verbalphrase, meist mit Anredeterm als Subjekt, damit sie höflich bleibt: `Anh rẽ trái.` – „Bieg (du) links ab.“ Abgemildert wird mit der Satzendpartikel `nhé` (K05), auffordernd-ungeduldig mit `đi` (K06): `Anh rẽ trái nhé.` / `Rẽ trái đi!`\n\n`hãy` vor dem Verb macht die Aufforderung **nachdrücklich oder feierlich** – typisch für Schilder, Ratschläge, Appelle: `Hãy cẩn thận!` „Sei vorsichtig!“ Im Alltag ist es seltener als im Deutschen der Imperativ.\n\nDer **Prohibitiv** (das Verbot) hat ein eigenes Wort: `đừng` + V. `Đừng đi nhanh quá!` „Fahr nicht so schnell!“ Mit Anrede und `nhé` wird es freundlich: `Chú đừng đi nhanh quá nhé.`\n\nAchtung: `không` ist **Negation einer Aussage**, kein Verbot. `Anh không đi nhanh.` heißt „Du fährst nicht schnell.“ – eine Feststellung. Und *`hãy không` gibt es nicht: Die negative Aufforderung ist immer `đừng`.",
          table: { head: ["Form", "Beispiel", "Wirkung"], rows: [["V (+ nhé)", "Anh rẽ phải nhé.", "neutral, freundlich"], ["V + đi", "Rẽ phải đi!", "drängend, vertraut"], ["hãy + V", "Hãy cẩn thận!", "nachdrücklich, förmlich"], ["đừng + V", "Đừng qua đường!", "Verbot (Prohibitiv)"], ["không + V", "Anh không qua đường.", "Aussage – kein Verbot!"]] },
          examples: [
            { vi: "Anh rẽ trái nhé.", de: "Bieg bitte links ab.", gloss: "du | abbiegen | links | PART" },
            { vi: "Hãy cẩn thận!", de: "Sei vorsichtig!", gloss: "IMP | vorsichtig" },
            { vi: "Em đừng đi nhanh quá.", de: "Fahr nicht so schnell.", gloss: "du(jünger) | PROH | fahren | schnell | zu" },
            { vi: "Đèn đỏ, đừng qua đường!", de: "Rote Ampel – geh nicht über die Straße!", gloss: "Ampel-rot | PROH | überqueren | Straße" }
          ],
          contrast: "Deutsch: Imperativ durch Verbform („geh!“, „geht!“, „gehen Sie!“) und Negation mit „nicht“ – Verbot und Aussage teilen das Negationswort. Vietnamesisch: keine Imperativform, Höflichkeit durch Anredeterm und Partikel, und ein eigenes Prohibitivwort `đừng`."
        },
        {
          id: "g-k07-sequenz",
          title: "Abfolge: rồi, sau đó",
          term: "Sequenzkonnektor",
          pattern: "Handlung₁, rồi Handlung₂  |  Handlung₁. Sau đó, Handlung₂",
          text: "Wegbeschreibungen sind Ketten von Handlungen. Das Verbindungswort `rồi` „dann“ steht zwischen zwei Verbalphrasen: `Anh đi thẳng, rồi rẽ trái.` Es bindet eng – oft ohne Pause, das Subjekt wird nicht wiederholt.\n\n`sau đó` „danach“ (wörtlich „nach dem“, mit dem Lokalnomen `sau` in zeitlicher Lesart und dem Demonstrativ `đó`) steht am Satzanfang und markiert einen größeren Schritt: `Sau đó anh đi khoảng một trăm mét.`\n\nDie Abfolge entspricht der Reihenfolge im Satz – Vietnamesisch ist auch hier **ikonisch**: Was zuerst geschieht, wird zuerst gesagt. Ortsangaben wie `đến ngã tư` „an der Kreuzung angekommen“ sind selbst Verbalphrasen (Serialisierung, K07l3): `Đến ngã tư, anh rẽ phải.`\n\nVorsicht: `rồi` hat noch eine zweite, sehr häufige Funktion als **Aspektmarker** „schon, bereits“ am Satzende (`Tôi ăn rồi.`). Diese lernst du in K08. Zwischen zwei Handlungen heißt es „dann“.",
          examples: [
            { vi: "Anh đi thẳng, rồi rẽ trái.", de: "Fahr geradeaus und bieg dann links ab.", gloss: "du | gehen-gerade | dann | abbiegen | links" },
            { vi: "Đến ngã tư, anh rẽ phải.", de: "An der Kreuzung biegst du rechts ab.", gloss: "ankommen | Kreuzung | du | abbiegen | rechts" },
            { vi: "Sau đó anh đi khoảng một trăm mét.", de: "Danach fährst du etwa hundert Meter.", gloss: "nach | dem | du | fahren | etwa | hundert | Meter" },
            { vi: "Chúng ta qua cầu, rồi đi ăn.", de: "Wir gehen über die Brücke und dann essen.", gloss: "wir | überqueren | Brücke | dann | gehen | essen" }
          ],
          contrast: "Deutsch „dann“ löst Inversion aus („dann biegst du ab“). Vietnamesisch `rồi` lässt die Wortstellung unverändert – und das Subjekt fällt einfach weg."
        }
      ],
      dialogue: {
        setting: "Jonas sucht in Đà Nẵng eine Bank und fragt eine Obstverkäuferin (etwa 50, Anrede cô) nach dem Weg.",
        lines: [
          { who: "Jonas", vi: "Xin lỗi cô, ngân hàng ở đâu ạ?", de: "Entschuldigung, wo ist hier eine Bank?" },
          { who: "Cô bán hàng", vi: "Cháu đi thẳng đường này đến ngã tư, rồi rẽ trái.", de: "Geh diese Straße geradeaus bis zur Kreuzung, dann links." },
          { who: "Jonas", vi: "Rẽ trái ở ngã tư. Rồi đi thẳng ạ?", de: "Links an der Kreuzung. Und dann geradeaus?" },
          { who: "Cô bán hàng", vi: "Ừ. Sau đó cháu đi khoảng một trăm mét. Ngân hàng ở bên phải.", de: "Ja. Danach gehst du etwa hundert Meter. Die Bank ist auf der rechten Seite." },
          { who: "Jonas", vi: "Có xa không ạ?", de: "Ist es weit?" },
          { who: "Cô bán hàng", vi: "Không xa. Đi bộ mất năm phút thôi.", de: "Nicht weit. Zu Fuß nur fünf Minuten." },
          { who: "Cô bán hàng", vi: "Đường này nhiều xe lắm. Cháu đi cẩn thận nhé! Đèn đỏ, đừng qua đường.", de: "Auf dieser Straße ist viel Verkehr. Pass gut auf! Bei Rot nicht über die Straße gehen." },
          { who: "Jonas", vi: "Vâng, cảm ơn cô ạ.", de: "Ja, danke schön." }
        ]
      },
      exercises: [
        { type: "gap", vi: "Anh ___ đi nhanh quá!", de: "Fahr nicht so schnell!", options: ["đừng", "không", "hãy"], answer: "đừng", explain: "Verbot = Prohibitiv đừng. không verneint nur eine Aussage („Du fährst nicht schnell“)." },
        { type: "gap", vi: "Chị đi thẳng, ___ rẽ phải.", de: "Gehen Sie geradeaus, dann rechts.", options: ["rồi", "với", "bằng"], answer: "rồi", explain: "rồi verbindet zwei aufeinanderfolgende Handlungen: ‚dann‘." },
        { type: "gap", vi: "Đến ngã tư, anh ___ trái.", de: "An der Kreuzung bieg links ab.", options: ["rẽ", "dừng", "đi thẳng"], answer: "rẽ", explain: "rẽ trái/phải = links/rechts abbiegen." },
        { type: "gap", vi: "Các bạn ___ cẩn thận nhé!", de: "Seid (bitte) vorsichtig!", options: ["hãy", "đừng", "không"], answer: "hãy", explain: "Positive, nachdrückliche Aufforderung → hãy. đừng wäre „seid nicht vorsichtig“." },
        { type: "build", vi: "Anh đi thẳng rồi rẽ trái.", de: "Fahr geradeaus und bieg dann links ab.", extra: ["đừng", "bằng"] },
        { type: "build", vi: "Đừng rẽ phải ở ngã_tư.", alts: ["Ở ngã_tư đừng rẽ phải."], de: "Bieg an der Kreuzung nicht rechts ab.", extra: ["không", "hãy"] },
        { type: "build", vi: "Ngân_hàng ở bên phải.", de: "Die Bank ist auf der rechten Seite.", extra: ["trên", "là"] },
        { type: "translate", de: "Bieg bitte rechts ab. (zum Fahrer, Anrede anh)", answers: ["Anh rẽ phải nhé.", "Anh rẽ phải.", "Anh hãy rẽ phải.", "Anh rẽ phải đi.", "Anh rẽ bên phải nhé.", "Anh rẽ bên phải."] },
        { type: "translate", de: "Fahr nicht so schnell! (zu Linh, Anrede em)", answers: ["Em đừng đi nhanh quá.", "Đừng đi nhanh quá.", "Em đừng đi nhanh quá nhé.", "Đừng đi nhanh quá nhé.", "Em đừng chạy nhanh quá.", "Đừng chạy nhanh quá."] },
        { type: "mc", q: "Welcher Satz ist ein Verbot (Prohibitiv)?", options: ["Đừng qua đường!", "Không qua đường.", "Hãy không qua đường!"], answer: 0, explain: "Verbote immer mit đừng. „hãy không“ ist ungrammatisch." },
        { type: "mc", q: "Was bedeutet „rồi“ in diesem Satz?", vi: "Đi thẳng, rồi rẽ trái.", options: ["dann (Abfolge)", "schon (Vollzug)", "nicht"], answer: 0, explain: "Zwischen zwei Handlungen ist rồi ein Sequenzkonnektor: ‚dann‘." },
        { type: "mc", q: "Der Grab-Fahrer soll an der Kreuzung geradeaus fahren. Was sagst du?", options: ["Anh rẽ trái nhé.", "Anh đi thẳng nhé.", "Anh dừng ở đây nhé."], answer: 1, explain: "đi thẳng = geradeaus." },
        { type: "listen", vi: "Đến ngã tư, anh rẽ trái nhé.", de: "An der Kreuzung bieg bitte links ab." },
        { type: "speak", vi: "Chú đừng đi nhanh quá ạ.", de: "Fahren Sie bitte nicht so schnell." },
        { type: "pairs", pairs: [["rẽ trái", "links abbiegen"], ["rẽ phải", "rechts abbiegen"], ["đi thẳng", "geradeaus"], ["ngã tư", "Kreuzung"], ["đèn đỏ", "rote Ampel"], ["dừng", "anhalten"]] }
      ]
    }
  ],

  boss: {
    title: "Mit dem Grab zu den Marmorbergen",
    npc: "Chú Hải",
    role: "Grab-Fahrer (Moped), etwa 55 Jahre",
    setting: "Jonas hat über die App ein Grab-Moped bestellt, Linh trifft ihn später. Chú Hải, ein gesprächiger älterer Fahrer, holt ihn am Hotel ab und bringt ihn zu den Marmorbergen Ngũ Hành Sơn. Jonas spricht ihn mit chú an und nennt sich selbst cháu.",
    turns: [
      {
        npc: { vi: "Chào cháu! Cháu đi đâu?", de: "Hallo! Wohin willst du?" },
        prompt: "Sag, dass du zu den Marmorbergen (Ngũ Hành Sơn) willst.",
        choices: [
          { vi: "Cháu đi Ngũ Hành Sơn ạ.", ok: true, fb: "Richtig – đi + Ziel ohne Präposition, höflich mit cháu und ạ." },
          { vi: "Cháu ở Ngũ Hành Sơn ạ.", ok: false, fb: "ở bezeichnet den Aufenthaltsort, keine Bewegung: „Ich bin/wohne bei den Marmorbergen.“" },
          { vi: "Cháu là Ngũ Hành Sơn ạ.", ok: false, fb: "là ist Kopula (Identität): „Ich bin die Marmorberge.“" }
        ]
      },
      {
        npc: { vi: "Khách sạn của cháu ở đâu?", de: "Wo ist dein Hotel?" },
        prompt: "Das Hotel liegt neben dem Hàn-Markt.",
        choices: [
          { vi: "Khách sạn là bên cạnh chợ Hàn ạ.", ok: false, fb: "Ortsangaben brauchen ở, nicht die Kopula là." },
          { vi: "Khách sạn ở bên cạnh chợ Hàn ạ.", ok: true, fb: "Genau: ở + Lokalnomen bên cạnh + Bezugsnomen." },
          { vi: "Khách sạn ở chợ Hàn bên cạnh ạ.", ok: false, fb: "Das Lokalnomen steht vor dem Bezugsnomen (bên cạnh chợ Hàn), nicht dahinter wie das deutsche „nebenan“." }
        ]
      },
      {
        npc: { vi: "Cháu lên xe đi.", de: "Steig auf." },
        prompt: "Frag, wie lange die Fahrt von hier zu den Marmorbergen dauert.",
        choices: [
          { vi: "Từ đây đến Ngũ Hành Sơn mất mấy giờ ạ?", ok: false, fb: "mấy giờ fragt nach der Uhrzeit („um wie viel Uhr“). Für die Dauer: mất bao lâu." },
          { vi: "Từ đây đến Ngũ Hành Sơn mất bao xa ạ?", ok: false, fb: "bao xa fragt nach der Entfernung und passt nicht zu mất (Zeit aufwenden)." },
          { vi: "Từ đây đến Ngũ Hành Sơn mất bao lâu ạ?", ok: true, fb: "Richtig: từ … đến … mất bao lâu?" }
        ]
      },
      {
        npc: { vi: "Mất khoảng hai mươi phút. Đường này nhiều xe lắm!", de: "Etwa zwanzig Minuten. Auf dieser Straße ist viel Verkehr!" },
        prompt: "Chú Hải fährt sehr schnell. Bitte ihn höflich, nicht so schnell zu fahren.",
        choices: [
          { vi: "Chú đừng đi nhanh quá ạ.", ok: true, fb: "Richtig – Prohibitiv đừng, abgefedert durch chú und ạ." },
          { vi: "Chú không đi nhanh quá ạ.", ok: false, fb: "không verneint eine Aussage: „Sie fahren nicht so schnell.“ – das ist eine Feststellung, keine Bitte." },
          { vi: "Chú hãy không đi nhanh ạ.", ok: false, fb: "hãy steht nur bei positiven Aufforderungen. Verbote immer mit đừng." }
        ]
      },
      {
        npc: { vi: "Cháu ơi, ví của cháu đâu? Cẩn thận nhé!", de: "Du, wo ist dein Portemonnaie? Pass auf!" },
        prompt: "Beruhige ihn: Das Portemonnaie ist in deiner Tasche.",
        choices: [
          { vi: "Ví của cháu ở trên túi ạ.", ok: false, fb: "trên túi ist die Oberseite der Tasche – das Portemonnaie läge oben drauf. „In“ = trong." },
          { vi: "Ví của cháu ở trong túi ạ.", ok: true, fb: "Richtig: trong = Innenraum." },
          { vi: "Ví của cháu ở túi trong ạ.", ok: false, fb: "Lokalnomen gehen dem Bezugsnomen voran: trong túi, nicht túi trong." }
        ]
      },
      {
        npc: { vi: "Đến ngã tư này, chú rẽ trái hay rẽ phải?", de: "An dieser Kreuzung – soll ich links oder rechts abbiegen?" },
        prompt: "Laut Karte: geradeaus und dann rechts.",
        choices: [
          { vi: "Chú đi thẳng, rồi rẽ phải ạ.", ok: true, fb: "Genau – zwei Schritte, verbunden mit rồi." },
          { vi: "Chú đi thẳng, với rẽ phải ạ.", ok: false, fb: "với ist komitativ („mit, zusammen mit“) und verbindet keine Handlungsfolge. Für ‚dann‘: rồi." },
          { vi: "Chú rẽ phải bằng đi thẳng ạ.", ok: false, fb: "bằng bezeichnet ein Mittel (bằng xe máy), keine Abfolge." }
        ]
      },
      {
        npc: { vi: "Ngũ Hành Sơn đây. Cháu lên núi bằng thang máy hay đi bộ?", de: "Hier sind die Marmorberge. Fährst du mit dem Aufzug hinauf oder gehst du zu Fuß?" },
        prompt: "Sag, dass du zu Fuß hinaufgehst.",
        choices: [
          { vi: "Cháu đi bộ xuống ạ.", ok: false, fb: "xuống = hinunter. Auf den Berg hinauf geht es mit lên." },
          { vi: "Cháu đi bằng bộ lên ạ.", ok: false, fb: "„Zu Fuß“ ist das Verb đi bộ – ohne bằng." },
          { vi: "Cháu đi bộ lên ạ.", ok: true, fb: "Richtig: đi bộ + Direktionalkomplement lên." }
        ]
      },
      {
        npc: { vi: "Tối nay cháu về khách sạn bằng gì?", de: "Womit fährst du heute Abend zurück ins Hotel?" },
        prompt: "Sag, dass du mit einem Grab zurückfährst.",
        choices: [
          { vi: "Cháu ra khách sạn bằng Grab ạ.", ok: false, fb: "Rückkehr zur Unterkunft = về. ra hieße „hinaus (ins Offene)“." },
          { vi: "Cháu về khách sạn với Grab ạ.", ok: false, fb: "với ist Begleitung („zusammen mit“). Das Fahrzeug als Mittel braucht bằng – das deutsche „mit“ führt hier in die Irre." },
          { vi: "Cháu về khách sạn bằng Grab ạ.", ok: true, fb: "Perfekt: về (zurück) + Ziel + bằng (Mittel)." }
        ]
      }
    ],
    win: { vi: "Ngũ Hành Sơn đây! Cháu nói tiếng Việt giỏi quá!", de: "Da sind die Marmorberge! Du sprichst wirklich gut Vietnamesisch!" }
  }
});
