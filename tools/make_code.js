/* 合言葉のハッシュを作る。
 *
 *   node tools/make_code.js hashi-set2-4712
 *
 * 出た値を js/app.js の CODE_HASHES に貼る。
 * 合言葉そのものはアプリに書かないので、ソースを見ても合言葉は分からない。
 */
"use strict";
function hash(s) {
  var h = 2166136261;
  s = String(s).trim().toLowerCase();
  for (var i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}
var args = process.argv.slice(2);
if (!args.length) {
  console.log("使い方: node tools/make_code.js <合言葉> [<合言葉> ...]");
  process.exit(1);
}
args.forEach(function (a) { console.log(a + "  →  " + hash(a)); });
