(function () {
  "use strict";

  window.GamePlatform.register("bon-quan-lien", function (root, options) {
    var rows = 6;
    var cols = 7;
    var board = Array.from({ length: rows }, function () { return Array(cols).fill(0); });
    var locked = false;

    function drop(col, player) {
      for (var row = rows - 1; row >= 0; row -= 1) {
        if (!board[row][col]) {
          board[row][col] = player;
          return { row: row, col: col };
        }
      }
      return null;
    }

    function wins(last, player) {
      if (!last) return false;
      return [[1,0],[0,1],[1,1],[1,-1]].some(function (direction) {
        var count = 1;
        [-1,1].forEach(function (sign) {
          var row = last.row + direction[0] * sign;
          var col = last.col + direction[1] * sign;
          while (row >= 0 && row < rows && col >= 0 && col < cols && board[row][col] === player) {
            count += 1;
            row += direction[0] * sign;
            col += direction[1] * sign;
          }
        });
        return count >= 4;
      });
    }

    function render() {
      root.innerHTML = '<div class="game-connect-four">' + board.map(function (row) {
        return row.map(function (value, col) {
          return '<button data-column="' + col + '" class="game-connect-four__disc game-connect-four__disc--p' +
            value + '" aria-label="Cột ' + (col + 1) + '"></button>';
        }).join("");
      }).join("") + "</div>";
    }

    function playerDrop(col) {
      if (locked) return;
      var last = drop(col, 1);
      if (!last) return;
      render();
      if (wins(last, 1)) return options.onWin("Bạn đã nối bốn quân.");
      locked = true;
      options.runtime.timeout(function () {
        var available = Array.from({ length: cols }, function (_, index) {
          return board[0][index] ? -1 : index;
        }).filter(function (index) { return index >= 0; });
        if (!available.length) {
          locked = false;
          options.onWin("Bàn đã đầy và bạn giữ được thế hòa.");
          return;
        }
        var lastAi = drop(available[Math.floor(Math.random() * available.length)], 2);
        locked = false;
        render();
        if (wins(lastAi, 2)) options.onLose("Máy đã nối bốn quân trước.");
      }, Math.max(220, 600 / options.difficulty.multiplier));
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-column]");
      if (cell) playerDrop(Number(cell.dataset.column));
    });
    options.onHint("Chạm một cột để thả quân. Nối bốn quân để thắng.");
    render();
    return {};
  });
}());
