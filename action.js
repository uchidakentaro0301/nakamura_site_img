var areaLinks = {
  1: "https://www.pref.hokkaido.lg.jp/",
  2: "https://www.pref.aomori.lg.jp/",
  3: "https://www.pref.iwate.lg.jp/",
  4: "https://www.pref.miyagi.lg.jp/",
  // 他の都道府県も同様に追加
};

var areaDescriptions = {
  1: "北海道は、日本の最北に位置する広大な地域です。",
  2: "青森県は、リンゴの生産で有名な地域です。",
  3: "岩手県は、自然と歴史が豊富な地域です。",
  4: "宮城県は、仙台市がある地域で、美味しい牛タンが有名です。",
  // 他の都道府県も同様に追加
};

$(document).ready(function() {
  var d = new jpmap.japanMap(document.getElementById("my-map"), {
    areas: [
      {code: 1, name: "北海道", color: "#7f7eda", hoverColor: "#b3b2ee"},
      {code: 2, name: "青森", color: "#759ef4", hoverColor: "#98b9ff"},
      {code: 3, name: "岩手", color: "#759ef4", hoverColor: "#98b9ff"},
      {code: 4, name: "宮城", color: "#759ef4", hoverColor: "#98b9ff"},
      // 他の都道府県も同様に設定
    ],

    showsPrefectureName: true,
    width: 1000,
    movesIslands: true,
    borderLineColor: "#000000",
    lang: 'ja',
    onSelect: function(data) {
      zoomIn(data.area.code, data.area.name);
    }
  });

  function zoomIn(code, name) {
    var zoomContainer = $("#zoom-container");
    $("#zoom-title").text(name);
    $("#zoom-description").text(areaDescriptions[code] || "詳細は後ほど更新されます。");
    $("#zoom-link").attr("href", areaLinks[code]);

    zoomContainer.fadeIn();
  }

  // 拡大表示を閉じる処理
  $("#close-zoom").click(function() {
    $("#zoom-container").fadeOut();
  });

  // 画面外クリックで拡大表示を閉じる処理
  $(window).click(function(event) {
    if ($(event.target).is("#zoom-container")) {
      $("#zoom-container").fadeOut();
    }
  });
});
