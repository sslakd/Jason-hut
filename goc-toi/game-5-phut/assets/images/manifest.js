(function () {
  "use strict";

  var root = "./assets/images/";
  var gameIds = [
    "thoat-bai-xe",
    "xep-nuoc",
    "cat-roi",
    "dau-mau",
    "o-an-quan",
    "chim-vuot-gio",
    "caro-ba",
    "bon-quan-lien",
    "truot-so",
    "do-min",
    "lat-hinh",
    "tranh-truot",
    "ran-san-moi",
    "xep-thap",
    "xep-dai-oc",
    "son-me-cung",
    "khoi-sac-mau",
    "ghep-trai-cay",
    "to-du-mau",
    "domino",
    "lap-day-khoi",
    "tim-tu",
    "ban-cung",
    "phi-tieu",
    "gop-so",
    "noi-so",
    "noi-mau",
    "sudoku"
  ];

  var games = gameIds.reduce(function (assets, id) {
    assets[id] = {
      cover: root + id + "/cover.svg",
      background: root + id + "/background.svg",
      primary: root + id + "/primary.svg"
    };
    return assets;
  }, {});

  games["ghep-trai-cay"].fruitNames = [
    "Nho", "Chôm chôm", "Nhãn", "Cam", "Táo", "Ổi", "Dưa lưới", "Dưa hấu", "Mít"
  ];
  games["ghep-trai-cay"].fruits = [
    "nho", "chom-chom", "nhan", "cam", "tao", "oi", "dua-luoi", "dua-hau", "mit"
  ].map(function (name) {
    return root + "ghep-trai-cay/fruits/" + name + ".svg";
  });

  window.GAME_ASSETS = {
    roles: {
      cover: { ratio: "16:10", recommended: "1200×750", usage: "Card và ảnh giới thiệu" },
      background: { ratio: "9:16", recommended: "1080×1920", usage: "Nền vùng chơi mobile" },
      primary: { ratio: "1:1", recommended: "512×512", usage: "Vật thể hoặc quân chơi chính" }
    },
    games: games
  };
}());
