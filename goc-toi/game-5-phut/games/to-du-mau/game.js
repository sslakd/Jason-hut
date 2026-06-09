(function () {
  "use strict";

  window.GamePlatform.register("to-du-mau", function (root, options) {
    var size = options.difficulty.multiplier >= 2 ? 8 : 7;
    var colorCount = options.difficulty.multiplier >= 3 ? 5 : 4;
    var colors = ["coral", "amber", "mint", "sky", "violet"];
    var board = Array.from({ length: size * size }, function () {
      return Math.floor(Math.random() * colorCount);
    });
    var moves = 0;
    var limit = size * 3 + colorCount;

    function flood(color) {
      var source = board[0];
      if (source === color) return;
      var changed = new Set([0]);
      var queue = [0];
      while (queue.length) {
        var current = queue.shift();
        var row = Math.floor(current / size);
        var col = current % size;
        [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]].forEach(function (cell) {
          if (cell[0] < 0 || cell[0] >= size || cell[1] < 0 || cell[1] >= size) return;
          var next = cell[0] * size + cell[1];
          if (!changed.has(next) && board[next] === source) {
            changed.add(next);
            queue.push(next);
          }
        });
      }
      changed.forEach(function (cell) { board[cell] = color; });
      moves += 1;
      window.GameAudio.tap();
      render();
      if (board.every(function (value) { return value === board[0]; })) {
        options.onWin("Bạn đã phủ kín bàn sau " + moves + " lượt.");
      } else if (moves >= limit) {
        options.onLose("Bạn đã dùng hết " + limit + " lượt đổi màu.");
      }
    }

    function render() {
      root.innerHTML = '<div class="game-color-fill" style="--fill-size:' + size + '">' +
        board.map(function (color) {
          return '<span class="game-color-fill__cell game-color-fill__cell--' + colors[color] + '"></span>';
        }).join("") + '</div><div class="game-color-fill__controls">' +
        colors.slice(0, colorCount).map(function (color, index) {
          return '<button data-fill-color="' + index + '" class="game-color-fill__choice game-color-fill__choice--' +
            color + '" aria-label="Chọn màu ' + (index + 1) + '"></button>';
        }).join("") + '</div><div class="game-progress">Lượt ' + moves + "/" + limit + "</div>";
    }

    options.runtime.listen(root, "click", function (event) {
      var choice = event.target.closest("[data-fill-color]");
      if (choice) flood(Number(choice.dataset.fillColor));
    });
    options.onHint("Chọn màu để vùng góc trên trái lan ra toàn bàn.");
    render();
    return {};
  });
}());
