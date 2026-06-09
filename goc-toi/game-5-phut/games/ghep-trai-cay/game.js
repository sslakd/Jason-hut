(function () {
  "use strict";

  window.GamePlatform.register("ghep-trai-cay", function (root, options) {
    var rows = 7;
    var cols = 5;
    var board = Array(rows * cols).fill(0);
    var nextFruit = 1;
    var target = options.difficulty.multiplier >= 2 ? 6 : 5;
    var names = ["", "Nho", "Cam", "Táo", "Lê", "Dưa", "Dưa lớn"];

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
      board[index(row, col)] = value + 1;
      collapse();
      var newRow = -1;
      for (var scan = rows - 1; scan >= 0; scan -= 1) {
        if (board[index(scan, col)] === value + 1) { newRow = scan; break; }
      }
      if (newRow >= 0) mergeAt(newRow, col);
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
      var row;
      for (row = rows - 1; row >= 0 && board[index(row, col)]; row -= 1) {}
      if (row < 0) return;
      board[index(row, col)] = nextFruit;
      nextFruit = Math.random() < .72 ? 1 : 2;
      mergeAt(row, col);
      collapse();
      window.GameAudio.tap();
      render();
      if (board.some(function (value) { return value >= target; })) {
        options.onWin("Bạn đã ghép được " + names[target] + ".");
      } else if (board.slice(0, cols).every(Boolean)) {
        options.onLose("Hộp trái cây đã đầy.");
      }
    }

    function render() {
      root.innerHTML = '<div class="game-fruit-next">Tiếp theo: <i class="game-fruit game-fruit--' +
        nextFruit + '"></i></div><div class="game-fruit-merge">' + board.map(function (value, cell) {
        return '<button data-fruit-column="' + (cell % cols) + '" class="game-fruit-merge__cell">' +
          (value ? '<i class="game-fruit game-fruit--' + value + '"></i>' : "") + "</button>";
      }).join("") + "</div>";
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-fruit-column]");
      if (cell) drop(Number(cell.dataset.fruitColumn));
    });
    options.onHint("Chạm một cột để thả và ghép hai trái giống nhau.");
    render();
    return {};
  });
}());
