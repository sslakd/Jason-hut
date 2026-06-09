(function () {
  "use strict";

  window.GamePlatform.register("do-min", function (root, options) {
    var size = options.difficulty.multiplier >= 2 ? 8 : 7;
    var mineCount = Math.min(12, 6 + Math.round(options.difficulty.multiplier * 2));
    var cells = Array.from({ length: size * size }, function () {
      return { mine: false, open: false, flag: false, count: 0 };
    });
    var first = true;
    var ended = false;
    var cancelLongPress = null;

    function neighbors(row, col) {
      var result = [];
      for (var deltaRow = -1; deltaRow <= 1; deltaRow += 1) {
        for (var deltaCol = -1; deltaCol <= 1; deltaCol += 1) {
          var nextRow = row + deltaRow;
          var nextCol = col + deltaCol;
          if ((deltaRow || deltaCol) && nextRow >= 0 && nextRow < size && nextCol >= 0 && nextCol < size) {
            result.push(nextRow * size + nextCol);
          }
        }
      }
      return result;
    }

    function seed(safeIndex) {
      var placed = 0;
      while (placed < mineCount) {
        var index = Math.floor(Math.random() * cells.length);
        if (index !== safeIndex && !cells[index].mine) {
          cells[index].mine = true;
          placed += 1;
        }
      }
      cells.forEach(function (cell, index) {
        cell.count = neighbors(Math.floor(index / size), index % size)
          .filter(function (neighbor) { return cells[neighbor].mine; }).length;
      });
    }

    function reveal(index) {
      if (cells[index].flag || cells[index].open) return;
      cells[index].open = true;
      if (!cells[index].count && !cells[index].mine) {
        neighbors(Math.floor(index / size), index % size).forEach(reveal);
      }
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-mines" style="--mine-size:' + size + '">' +
        cells.map(function (cell, index) {
          var content = cell.open
            ? (cell.mine ? '<i class="fa-solid fa-bomb"></i>' : (cell.count || ""))
            : (cell.flag ? '<i class="fa-solid fa-flag"></i>' : "");
          return '<button data-mine="' + index + '" data-motion-key="mine-' + index +
            '" data-motion-state="' + Number(cell.open) + "-" + Number(cell.flag) + '" class="game-mines__cell' +
            (cell.open ? " game-mines__cell--open" : "") +
            (cell.mine && cell.open ? " game-mines__cell--boom" : "") + '">' + content + "</button>";
        }).join("") + "</div>");
    }

    function open(index) {
      if (ended || cells[index].flag || cells[index].open) return;
      if (first) {
        seed(index);
        first = false;
      }
      if (cells[index].mine) {
        cells[index].open = true;
        ended = true;
        render();
        options.onLose("Bạn đã chạm phải mìn.");
        return;
      }
      reveal(index);
      render();
      if (!cells.some(function (cell) { return !cell.mine && !cell.open; })) {
        ended = true;
        options.onWin("Bạn đã mở hết ô an toàn.");
      }
    }

    function flag(index) {
      if (!cells[index].open) {
        cells[index].flag = !cells[index].flag;
        render();
      }
    }

    options.runtime.listen(root, "pointerdown", function (event) {
      var cell = event.target.closest("[data-mine]");
      if (!cell) return;
      cancelLongPress = options.runtime.timeout(function () {
        flag(Number(cell.dataset.mine));
        cancelLongPress = null;
      }, 450);
    });
    options.runtime.listen(root, "pointerup", function (event) {
      var cell = event.target.closest("[data-mine]");
      if (!cancelLongPress) return;
      cancelLongPress();
      cancelLongPress = null;
      if (cell) open(Number(cell.dataset.mine));
    });
    options.runtime.listen(root, "pointercancel", function () {
      if (cancelLongPress) cancelLongPress();
      cancelLongPress = null;
    });
    options.onHint("Chạm để mở ô, giữ để cắm cờ.");
    render();
    return {};
  });
}());
