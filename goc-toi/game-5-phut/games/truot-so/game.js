(function () {
  "use strict";

  window.GamePlatform.register("truot-so", function (root, options) {
    var board = Array(16).fill(0);
    var score = 0;
    var moves = 0;
    var ended = false;

    function difficulty() {
      return options.getEndlessDifficulty(moves);
    }

    function add() {
      var empty = board.map(function (value, index) { return value ? -1 : index; })
        .filter(function (index) { return index >= 0; });
      var fourChance = Math.min(.32, .08 + difficulty().factor * .06);
      if (empty.length) board[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < 1 - fourChance ? 2 : 4;
    }

    function compress(line) {
      var values = line.filter(Boolean);
      for (var index = 0; index < values.length - 1; index += 1) {
        if (values[index] === values[index + 1]) {
          values[index] *= 2;
          score += values[index];
          values.splice(index + 1, 1);
        }
      }
      while (values.length < 4) values.push(0);
      return values;
    }

    function render() {
      root.innerHTML = '<div class="game-live-score" aria-live="polite">Điểm ' + score +
        ' · Nhịp ' + difficulty().stage + '</div><div class="game-number-slide">' + board.map(function (value) {
        return '<div class="game-number-slide__cell game-number-slide__cell--n' + value + '">' +
          (value || "") + "</div>";
      }).join("") + "</div>";
    }

    function move(direction) {
      if (ended) return;
      var old = board.join(",");
      var next = Array(16).fill(0);
      for (var lineIndex = 0; lineIndex < 4; lineIndex += 1) {
        var line = [];
        for (var offset = 0; offset < 4; offset += 1) {
          var row = direction === "up" || direction === "down" ? offset : lineIndex;
          var col = direction === "up" || direction === "down" ? lineIndex : offset;
          if (direction === "right" || direction === "down") {
            row = direction === "down" ? 3 - offset : lineIndex;
            col = direction === "right" ? 3 - offset : lineIndex;
          }
          line.push(board[row * 4 + col]);
        }
        compress(line).forEach(function (value, offset) {
          var row = direction === "up" || direction === "down" ? offset : lineIndex;
          var col = direction === "up" || direction === "down" ? lineIndex : offset;
          if (direction === "right" || direction === "down") {
            row = direction === "down" ? 3 - offset : lineIndex;
            col = direction === "right" ? 3 - offset : lineIndex;
          }
          next[row * 4 + col] = value;
        });
      }
      board = next;
      if (board.join(",") !== old) {
        moves += 1;
        add();
        window.GameAudio.tap();
      }
      render();
      if (!board.includes(0) && !board.some(function (value, index) {
        var row = Math.floor(index / 4);
        var col = index % 4;
        return (col < 3 && board[index + 1] === value) || (row < 3 && board[index + 4] === value);
      })) {
        ended = true;
        options.onLose({ message: "Bàn số đã kín.", score: score });
      }
    }

    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) move(gesture.dx > 0 ? "right" : "left");
        else move(gesture.dy > 0 ? "down" : "up");
      }
    }, options.runtime);
    options.runtime.listen(window, "keydown", function (event) {
      var directions = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down" };
      if (!directions[event.key] || options.runtime.isPaused()) return;
      event.preventDefault();
      move(directions[event.key]);
    });
    add();
    add();
    options.onHint("Vuốt để gộp số. Chơi càng lâu, ô 4 xuất hiện càng thường xuyên.");
    render();
    return {};
  });
}());
