(function () {
  "use strict";

  window.GamePlatform.register("ghep-trai-cay", function (root, options) {
    var rows = 7;
    var cols = 5;
    var board = Array(rows * cols).fill(0);
    var nextFruit = 1;
    var score = 0;
    var drops = 0;
    var ended = false;

    function difficulty() {
      return options.getEndlessDifficulty(drops);
    }

    function index(row, col) { return row * cols + col; }

    function mergeAt(row, col) {
      var value = board[index(row, col)];
      var matches = [[row + 1, col], [row, col - 1], [row, col + 1]].filter(function (cell) {
        return cell[0] >= 0 && cell[0] < rows && cell[1] >= 0 && cell[1] < cols &&
          board[index(cell[0], cell[1])] === value;
      });
      if (!matches.length) return;
      var match = matches[0];
      board[index(match[0], match[1])] = 0;
      board[index(row, col)] = Math.min(6, value + 1);
      score += Math.pow(2, value);
      collapse();
      var newRow = -1;
      for (var scan = rows - 1; scan >= 0; scan -= 1) {
        if (board[index(scan, col)] === Math.min(6, value + 1)) { newRow = scan; break; }
      }
      if (newRow >= 0 && value < 6) mergeAt(newRow, col);
    }

    function collapse() {
      for (var col = 0; col < cols; col += 1) {
        var values = [];
        for (var row = rows - 1; row >= 0; row -= 1) {
          if (board[index(row, col)]) values.push(board[index(row, col)]);
        }
        for (row = rows - 1; row >= 0; row -= 1) board[index(row, col)] = values[rows - 1 - row] || 0;
      }
    }

    function drop(col) {
      if (ended) return;
      var row;
      for (row = rows - 1; row >= 0 && board[index(row, col)]; row -= 1) {}
      if (row < 0) return;
      board[index(row, col)] = nextFruit;
      drops += 1;
      nextFruit = Math.random() < Math.min(.9, .7 + difficulty().factor * .07) ? 1 : 2;
      mergeAt(row, col);
      collapse();
      window.GameAudio.tap();
      render();
      if (board.slice(0, cols).every(Boolean)) {
        ended = true;
        options.onLose({ message: "Hộp trái cây đã đầy.", score: score });
      }
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-live-score" aria-live="polite">Điểm ' + score +
        ' · Nhịp ' + difficulty().stage + '</div><div class="game-fruit-next">Tiếp theo: <i class="game-fruit game-fruit--' +
        nextFruit + '"></i></div><div class="game-fruit-merge">' + board.map(function (value, cell) {
        return '<button data-fruit-column="' + (cell % cols) + '" data-motion-key="fruit-cell-' + cell +
          '" data-motion-state="' + value + '" class="game-fruit-merge__cell">' +
          (value ? '<i class="game-fruit game-fruit--' + value + '"></i>' : "") + "</button>";
      }).join("") + "</div>", { duration: 200 });
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-fruit-column]");
      if (cell) drop(Number(cell.dataset.fruitColumn));
    });
    options.onHint("Ghép càng lâu, tỉ lệ trái nhỏ sẽ tăng và hộp khó dọn hơn.");
    render();
    return {};
  });
}());
