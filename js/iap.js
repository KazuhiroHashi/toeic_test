/* アプリ内課金(App Store)— セット2〜10をまとめて解放する1商品だけを扱う。
 *
 * Web版ではこのファイルは何もしない(window.Capacitor が無いため)。
 * アプリ版でのみ、Capacitor のプラグイン NativePurchases 経由で StoreKit を呼ぶ。
 *
 * 設計で気をつけていること:
 *
 *  1. オフラインで締め出さない
 *     このアプリの売りは「通信なしで全機能が使える」こと。購入済みの人が
 *     機内モードで開いたときに鍵がかかると、商品として壊れる。
 *     そこで購入済みの状態は端末に記録し、起動時はまずそれを信じて解放する。
 *     ストアへの問い合わせは後から行い、失敗しても記録は消さない。
 *
 *  2. 購入済みの記録を自動で取り消さない
 *     ストアが「未所持」を返す理由は、返金だけでなく
 *     「Apple ID にサインインしていない」「一時的な障害」もある。
 *     払った人を締め出す事故のほうが重いので、取り消しは行わない。
 *
 *  3. プラグインが無くても落ちない
 *     ビルドの組み合わせによってはプラグインが読み込まれないことがある。
 *     その場合は「購入できません」と伝えるだけで、アプリ自体は動かす。
 */
(function () {
  "use strict";

  var OWNED_KEY = "toeic_iap_owned_v1";
  var INAPP = "inapp";           // PURCHASE_TYPE.INAPP(買い切り)

  function cfg() {
    var b = window.TOEIC_APP_BUILD;
    return (b && b.iap) ? b.iap : null;
  }

  function plugin() {
    var C = window.Capacitor;
    return (C && C.Plugins && C.Plugins.NativePurchases) ? C.Plugins.NativePurchases : null;
  }

  function readOwned() {
    try { return localStorage.getItem(OWNED_KEY) === "1"; } catch (e) { return false; }
  }
  function writeOwned() {
    try { localStorage.setItem(OWNED_KEY, "1"); } catch (e) { /* ignore */ }
  }

  var IAP = {
    /* このビルドで課金を使うか(アプリ版かつ商品IDが設定されている) */
    enabled: function () { return !!cfg(); },

    /* 購入済みか。端末の記録だけを見るので即座に返る(起動時の判定に使う) */
    owned: function () { return this.enabled() ? readOwned() : false; },

    /* ストアに問い合わせて所持状態を更新する。
       done(owned) を必ず1回呼ぶ。通信できなくても記録は消さない。 */
    refresh: function (done) {
      done = done || function () {};
      var c = cfg(), p = plugin();
      if (!c || !p) { done(readOwned()); return; }

      p.getPurchases({ productType: INAPP }).then(function (r) {
        var list = (r && r.purchases) || [];
        var hit = false;
        for (var i = 0; i < list.length; i++) {
          var id = list[i].productIdentifier || list[i].productId || list[i].id;
          if (id === c.productId) { hit = true; break; }
        }
        if (hit) writeOwned();
        // 「未所持」でも記録は消さない(上のコメント2の理由)
        done(readOwned() || hit);
      }).catch(function () {
        done(readOwned());
      });
    },

    /* ストアに登録されている価格の文字列を取る(例 "¥1,980")。
       通信できないときは null を返すので、呼び出し側で出し分ける。 */
    price: function (done) {
      done = done || function () {};
      var c = cfg(), p = plugin();
      if (!c || !p) { done(null); return; }
      p.getProduct({ productIdentifier: c.productId, productType: INAPP })
        .then(function (r) {
          var pr = r && r.product;
          done((pr && (pr.priceString || pr.price_string)) || null);
        })
        .catch(function () { done(null); });
    },

    /* 購入する。done(status) の status は
       "ok" 購入できた / "cancel" 利用者が閉じた / "unavailable" 課金が使えない / "error" 失敗 */
    buy: function (done) {
      done = done || function () {};
      var c = cfg(), p = plugin();
      if (!c || !p) { done("unavailable"); return; }

      p.purchaseProduct({ productIdentifier: c.productId, productType: INAPP })
        .then(function () { writeOwned(); done("ok"); })
        .catch(function (e) {
          var msg = String((e && (e.message || e.errorMessage)) || "");
          /* エラーで戻っても、実際には購入が成立していることがある
             (シートの途中で中断・同じ商品を既に所持・完了通知の取り逃し等)。
             エラーを画面に出す前に、ストアへ所持を問い合わせて拾い直す。 */
          IAP.refresh(function (owned) {
            if (owned) { done("ok"); return; }
            // 利用者が自分で閉じた場合はエラー表示を出さない
            if (/cancel/i.test(msg)) { done("cancel"); return; }
            done("error");
          });
        });
    },

    /* 購入の復元。機種変更や再インストールのために必須(ガイドライン 3.1.1)。
       done(status) の status は "ok" 復元できた / "none" 購入履歴が無い / "error" 失敗 */
    restore: function (done) {
      done = done || function () {};
      var c = cfg(), p = plugin();
      if (!c || !p) { done("error"); return; }

      p.restorePurchases().then(function () {
        IAP.refresh(function (owned) { done(owned ? "ok" : "none"); });
      }).catch(function () {
        // restorePurchases が無い/失敗しても、所持の問い合わせで拾えることがある
        IAP.refresh(function (owned) { done(owned ? "ok" : "error"); });
      });
    }
  };

  window.TOEIC_IAP = IAP;
})();
