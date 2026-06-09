(function () {
  "use strict";

  window.GamePlatform.register("domino", function (root, options) {
    var deck = [];
    for (var left = 0; left <= 6; left += 1) {
      for (var right = left; right <= 6; right += 1) deck.push([left, right, "d-" + left + "-" + right]);
    }
    deck.sort(function () { return Math.random() - .5; });
    var player = deck.splice(0, 7);
    var ai = deck.splice(0, 7);
    var chain = [deck.pop()];
    var locked = false;

    function playable(tile) {
      return tile[0] === chain[0][0] || tile[1] === chain[0][0] ||
        tile[0] === chain[chain.length - 1][1] || tile[1] === chain[chain.length - 1][1];
    }

    function place(tile) {
      var first = chain[0][0];
      var last = chain[chain.length - 1][1];
      if (tile[0] === last) chain.push(tile);
      else if (tile[1] === last) chain.push([tile[1], tile[0], tile[2]]);
      else if (tile[1] === first) chain.unshift(tile);
      else if (tile[0] === first) chain.unshift([tile[1], tile[0], tile[2]]);
      else return false;
      return true;
    }

    function aiTurn() {
      locked = true;
      options.runtime.timeout(function () {
        var tileIndex = ai.findIndex(playable);
        if (tileIndex >= 0) place(ai.splice(tileIndex, 1)[0]);
        else if (deck.length) ai.push(deck.pop());
        locked = false;
        render();
        if (!ai.length) options.onLose("Máy đã đánh hết domino trước.");
        else finishBlocked();
      }, Math.max(240, 650 / options.difficulty.multiplier));
    }

    function finishBlocked() {
      if (deck.length || player.some(playable) || ai.some(playable)) return false;
      var playerScore = player.reduce(function (sum, tile) { return sum + tile[0] + tile[1]; }, 0);
      var aiScore = ai.reduce(function (sum, tile) { return sum + tile[0] + tile[1]; }, 0);
      if (playerScore <= aiScore) options.onWin("Bàn bị chặn, bạn còn ít điểm hơn: " + playerScore + ".");
      else options.onLose("Bàn bị chặn, máy còn ít điểm hơn: " + aiScore + ".");
      return true;
    }

    function play(index) {
      if (locked || !player[index] || !playable(player[index])) return;
      place(player.splice(index, 1)[0]);
      window.GameAudio.tap();
      render();
      if (!player.length) options.onWin("Bạn đã đánh hết domino.");
      else aiTurn();
    }

    function dots(value) {
      return '<span class="game-domino__dots">' + (value || "·") + "</span>";
    }

    function tile(tile, index) {
      return '<button class="game-domino__tile" data-domino="' + index +
        '" data-motion-key="' + tile[2] + '">' +
        dots(tile[0]) + dots(tile[1]) + "</button>";
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-domino__meta">Máy còn ' + ai.length + ' quân · Nọc ' + deck.length +
        '</div><div class="game-domino__chain">' + chain.map(function (item) {
          return '<span class="game-domino__tile is-table" data-motion-key="' + item[2] + '">' +
            dots(item[0]) + dots(item[1]) + "</span>";
        }).join("") + '</div><div class="game-domino__hand">' +
        player.map(tile).join("") + '</div><button class="mini-control game-domino__draw" data-domino-draw>Rút quân</button>',
      { duration: 280 });
    }

    options.runtime.listen(root, "click", function (event) {
      var selected = event.target.closest("[data-domino]");
      var draw = event.target.closest("[data-domino-draw]");
      if (selected) play(Number(selected.dataset.domino));
      else if (draw && !locked && deck.length && !player.some(playable)) {
        player.push(deck.pop());
        render();
        aiTurn();
      } else if (draw && !locked) {
        finishBlocked();
      }
    });
    options.onHint("Chạm quân có đầu trùng với một đầu trên bàn.");
    render();
    return {};
  });
}());
