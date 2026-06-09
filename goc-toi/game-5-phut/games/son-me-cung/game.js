(function () {
  "use strict";

  window.GamePlatform.register("son-me-cung", function (root, options) {
    var size = options.difficulty.multiplier >= 2 ? 7 : 6;
    var walls = new Set(size === 7
      ? ["0,1", "6,3", "2,1", "3,6", "0,2", "1,3", "2,6", "5,2", "6,0", "1,5", "6,2", "6,6"]
      : ["0,1", "0,2", "5,3", "3,1", "5,0", "1,5", "5,4", "2,1"]);
    var position = { row: 0, col: 0 };
    var painted = new Set(["0,0"]);
    var openCount = size * size - walls.size;

    function move(deltaRow, deltaCol) {
      var moved = false;
      while (true) {
        var row = position.row + deltaRow;
        var col = position.col + deltaCol;
        if (row < 0 || row >= size || col < 0 || col >= size || walls.has(row + "," + col)) break;
        position = { row: row, col: col };
        painted.add(row + "," + col);
        moved = true;
      }
      if (!moved) return;
      window.GameAudio.tap();
      render();
      if (painted.size === openCount) options.onWin("Bạn đã sơn kín toàn bộ mê cung.");
    }

    function render() {
      var cells = [];
      for (var row = 0; row < size; row += 1) {
        for (var col = 0; col < size; col += 1) {
          var key = row + "," + col;
          cells.push('<span class="game-maze-paint__cell' +
            (walls.has(key) ? " is-wall" : "") +
            (painted.has(key) ? " is-painted" : "") +
            '" data-motion-key="maze-cell-' + key + '" data-motion-state="' + Number(painted.has(key)) + '">' +
            (position.row === row && position.col === col
              ? '<i class="game-maze-paint__ball" data-motion-key="maze-ball"></i>'
              : "") + "</span>");
        }
      }
      window.GamePlatform.motion.render(root, '<div class="game-maze-paint" style="--maze-size:' + size + '">' +
        cells.join("") + '</div><div class="game-progress">Đã sơn ' + painted.size + "/" + openCount + " ô</div>",
      { duration: 260 });
    }

    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) move(0, gesture.dx > 0 ? 1 : -1);
        else move(gesture.dy > 0 ? 1 : -1, 0);
      }
    }, options.runtime);
    options.runtime.listen(window, "keydown", function (event) {
      var directions = {
        ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0]
      };
      if (!directions[event.key] || options.runtime.isPaused()) return;
      event.preventDefault();
      move(directions[event.key][0], directions[event.key][1]);
    });
    options.onHint("Vuốt để bóng lăn đến tường và sơn mọi ô.");
    render();
    return {};
  });
}());
