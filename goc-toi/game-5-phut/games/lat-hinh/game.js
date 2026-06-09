(function () {
  "use strict";

  window.GamePlatform.register("lat-hinh", function (root, options) {
    var pairCount = options.difficulty.multiplier >= 2 ? 8 : 6;
    var symbols = ["fa-leaf","fa-star","fa-heart","fa-moon","fa-sun","fa-bell","fa-gem","fa-cloud"];
    var deck = symbols.slice(0, pairCount).concat(symbols.slice(0, pairCount))
      .sort(function () { return Math.random() - .5; });
    var open = [];
    var matched = Array(deck.length).fill(false);
    var locked = false;
    var moves = 0;

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-memory">' + deck.map(function (symbol, index) {
        var shown = open.includes(index) || matched[index];
        return '<button data-memory="' + index + '" data-motion-key="memory-' + index +
          '" data-motion-state="' + Number(shown) + "-" + Number(matched[index]) + '" class="game-memory__card' +
          (shown ? " game-memory__card--shown" : "") +
          (matched[index] ? " game-memory__card--matched" : "") + '">' +
          (shown ? '<i class="fa-solid ' + symbol + '"></i>' : '<i class="fa-solid fa-question"></i>') +
          "</button>";
      }).join("") + "</div>");
    }

    function flip(index) {
      if (locked || matched[index] || open.includes(index)) return;
      open.push(index);
      render();
      if (open.length !== 2) return;
      moves += 1;
      locked = true;
      options.runtime.timeout(function () {
        if (deck[open[0]] === deck[open[1]]) {
          matched[open[0]] = true;
          matched[open[1]] = true;
          window.GameAudio.open();
        }
        open = [];
        locked = false;
        render();
        if (matched.every(Boolean)) options.onWin("Bạn đã ghép hết cặp sau " + moves + " lượt.");
      }, 500);
    }

    options.runtime.listen(root, "click", function (event) {
      var card = event.target.closest("[data-memory]");
      if (card) flip(Number(card.dataset.memory));
    });
    options.onHint("Chạm hai thẻ để tìm các cặp giống nhau.");
    render();
    return {};
  });
}());
