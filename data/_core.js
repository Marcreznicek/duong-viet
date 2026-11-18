/* Registrierung der Lerninhalte. Wird vor allen Datendateien geladen. */
(function (g) {
  var VN = g.VN || (g.VN = {});
  VN.chapters = VN.chapters || [];
  VN.cards = VN.cards || [];
  VN.addChapter = function (ch) { VN.chapters.push(ch); };
  VN.addCards = function (list) { for (var i = 0; i < list.length; i++) VN.cards.push(list[i]); };
})(typeof window !== "undefined" ? window : globalThis);
