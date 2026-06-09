(function () {
  "use strict";

  window.GamePlatform.register("khoi-sac-mau", function (root, options) {
    var rows = 7;
    var cols = 6;
    var colors = ["coral", "amber", "mint", "sky"];
    var target = 18 + Math.min(options.level * 2, 10);
    var removed = 0;
    var board;

    function neighbors(index) {
      var row = Math.floor(index / cols);
      var col = index % cols;
      return [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
        .filter(function (cell) {
          return cell[0] >= 0 && cell[0] < rows && cell[1] >= 0 && cell[1] < cols;
        }).map(function (cell) { return cell[0] * cols + cell[1]; });
    }

    function group(start) {
      var color = board[start];
      if (!color) return [];
      var found = new Set([start]);
      var queue = [start];
      while (queue.length) {
        neighbors(queue.shift()).forEach(function (index) {
          if (board[index] === color && !found.has(index)) {
            found.add(index);
            queue.push(index);
          }
        });
      }
      return Array.from(found);
    }

    function collapse() {
      for (var col = 0; col < cols; col += 1) {
        var values = [];
        for (var row = rows - 1; row >= 0; row -= 1) {
          if (board[row * cols + col]) values.push(board[row * cols + col]);
        }
        for (row = rows - 1; row >= 0; row -= 1) {
          board[row * cols + col] = values[rows - 1 - row] || null;
        }
      }
    }

    function hasMove() {
      return board.some(function (value, index) { return value && group(index).length >= 2; });
    }

    do {
      board = Array.from({ length: rows * cols }, function () {
        return colors[Math.floor(Math.random() * colors.length)];
      });
    } while (!hasMove());

    function remove(index) {
      var selected = group(index);
      if (selected.length < 2) return;
      selected.forEach(function (cell) { board[cell] = null; });
      removed += selected.length;
      collapse();
      window.GameAudio.tap();
      render();
      if (removed >= target) options.onWin("Bạn đã dọn đủ " + target + " khối.");
      else if (!hasMove()) options.onLose("Không còn nhóm màu có thể dọn.");
    }

    function render() {
      root.innerHTML = '<div class="game-color-blocks">' + board.map(function (color, index) {
        return '<button data-block="' + index + '" class="game-color-blocks__cell' +
          (color ? " game-color-blocks__cell--" + color : " is-empty") + '"></button>';
      }).join("") + '</div><div class="game-progress">Đã dọn ' + removed + "/" + target + " khối</div>";
    }

    options.runtime.listen(root, "click", function (event) {
      var block = event.target.closest("[data-block]");
      if (block) remove(Number(block.dataset.block));
    });
    options.onHint("Chạm nhóm từ hai khối cùng màu để dọn bàn.");
    render();
    return {};
  });
}());
