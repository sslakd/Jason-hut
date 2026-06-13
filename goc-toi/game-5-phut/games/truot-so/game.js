(function () {
  "use strict";

  window.GamePlatform.register("truot-so", function (root, options) {
    var board = Array(16).fill(null);
    var nextId = 1;
    var score = 0;
    var moves = 0;
    var ended = false;
    var mergedIds = new Set();
    var newIds = new Set();

    function difficulty() {
      return options.getEndlessDifficulty(moves);
    }

    function add() {
      var empty = board.map(function (tile, index) { return tile ? -1 : index; })
        .filter(function (index) { return index >= 0; });
      if (!empty.length) return;
      var fourChance = Math.min(.32, .08 + difficulty().factor * .06);
      var tile = {
        id: nextId++,
        value: Math.random() < 1 - fourChance ? 2 : 4
      };
      board[empty[Math.floor(Math.random() * empty.length)]] = tile;
      newIds.add(tile.id);
    }

    function compress(line) {
      var tiles = line.filter(Boolean);
      var result = [];
      for (var index = 0; index < tiles.length; index += 1) {
        var tile = tiles[index];
        var next = tiles[index + 1];
        if (next && tile.value === next.value) {
          tile = { id: tile.id, value: tile.value * 2 };
          score += tile.value;
          mergedIds.add(tile.id);
          index += 1;
        }
        result.push(tile);
      }
      while (result.length < 4) result.push(null);
      return result;
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-live-score" aria-live="polite">Điểm ' + score +
        ' · Nhịp ' + difficulty().stage + '</div><div class="game-number-slide">' + board.map(function (tile) {
        return '<div class="game-number-slide__cell">' +
          (tile ? '<span class="game-number-slide__tile game-number-slide__tile--n' + tile.value +
            (mergedIds.has(tile.id) ? " is-merged" : "") +
            (newIds.has(tile.id) ? " is-new" : "") +
            '" data-motion-key="number-tile-' + tile.id + '" data-motion-state="' + tile.value +
            '">' + tile.value + "</span>" : "") + "</div>";
      }).join("") + "</div>", { duration: 220, easing: "cubic-bezier(.2,.8,.2,1)" });
      mergedIds.clear();
      newIds.clear();
    }

    function signature() {
      return board.map(function (tile) {
        return tile ? tile.id + ":" + tile.value : "0";
      }).join(",");
    }

    function move(direction) {
      if (ended) return;
      var old = signature();
      var nextBoard = Array(16).fill(null);
      mergedIds.clear();
      newIds.clear();
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
        compress(line).forEach(function (tile, offset) {
          var row = direction === "up" || direction === "down" ? offset : lineIndex;
          var col = direction === "up" || direction === "down" ? lineIndex : offset;
          if (direction === "right" || direction === "down") {
            row = direction === "down" ? 3 - offset : lineIndex;
            col = direction === "right" ? 3 - offset : lineIndex;
          }
          nextBoard[row * 4 + col] = tile;
        });
      }
      board = nextBoard;
      if (signature() !== old) {
        moves += 1;
        add();
        window.GameAudio.tap();
      } else {
        mergedIds.clear();
      }
      render();
      if (!board.includes(null) && !board.some(function (tile, index) {
        var row = Math.floor(index / 4);
        var col = index % 4;
        return (col < 3 && board[index + 1].value === tile.value) ||
          (row < 3 && board[index + 4].value === tile.value);
      })) {
        ended = true;
        options.onLose({ message: "Bàn số đã kín.", score: score });
      }
    }

    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) move(gesture.dx > 0 ? "right" : "left");
        else move(gesture.dy > 0 ? "down" : "up");
      },
      threshold: 12
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
