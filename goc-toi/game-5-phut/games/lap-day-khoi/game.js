(function () {
  "use strict";

  window.GamePlatform.register("lap-day-khoi", function (root, options) {
    var size = 5;
    var basePieces = [
      { id: "a", color: "mint", cells: [[0, 0], [1, 0], [1, 1]], home: [0, 0] },
      { id: "b", color: "amber", cells: [[0, 0], [0, 1], [0, 2]], home: [0, 2] },
      { id: "c", color: "sky", cells: [[0, 0], [0, 1], [1, 0], [1, 1]], home: [2, 0] },
      { id: "d", color: "coral", cells: [[0, 0], [0, 1], [0, 2], [1, 1]], home: [3, 2] }
    ];
    var turns = (options.level - 1) % 4;
    var pieces = basePieces.map(function (piece) {
      var absolute = piece.cells.map(function (cell) {
        return rotate(piece.home[0] + cell[0], piece.home[1] + cell[1], turns);
      });
      var minRow = Math.min.apply(null, absolute.map(function (cell) { return cell[0]; }));
      var minCol = Math.min.apply(null, absolute.map(function (cell) { return cell[1]; }));
      return {
        id: piece.id,
        color: piece.color,
        cells: absolute.map(function (cell) { return [cell[0] - minRow, cell[1] - minCol]; }),
        home: [minRow, minCol],
        placed: false
      };
    });
    var target = new Set();
    var occupied = Object.create(null);
    var selected = null;
    var moves = 0;

    function rotate(row, col, amount) {
      while (amount > 0) {
        var nextRow = col;
        col = size - 1 - row;
        row = nextRow;
        amount -= 1;
      }
      return [row, col];
    }

    pieces.forEach(function (piece) {
      piece.cells.forEach(function (cell) {
        target.add((piece.home[0] + cell[0]) + "," + (piece.home[1] + cell[1]));
      });
    });

    function place(pieceId, anchor) {
      var piece = pieces.find(function (item) { return item.id === pieceId; });
      if (!piece || piece.placed) return;
      var cells = piece.cells.map(function (cell) {
        return [anchor[0] + cell[0], anchor[1] + cell[1]];
      });
      var valid = cells.every(function (cell) {
        var key = cell[0] + "," + cell[1];
        return target.has(key) && !occupied[key];
      });
      if (!valid) {
        root.classList.remove("game-shake");
        root.offsetWidth;
        root.classList.add("game-shake");
        return;
      }
      cells.forEach(function (cell) {
        occupied[cell[0] + "," + cell[1]] = piece.color;
      });
      piece.placed = true;
      selected = null;
      moves += 1;
      window.GameAudio.tap();
      render();
      if (pieces.every(function (item) { return item.placed; })) {
        options.onWin("Bạn đã lấp kín hình sau " + moves + " lượt đặt.");
      }
    }

    function pieceHtml(piece) {
      var width = Math.max.apply(null, piece.cells.map(function (cell) { return cell[1]; })) + 1;
      var height = Math.max.apply(null, piece.cells.map(function (cell) { return cell[0]; })) + 1;
      return '<button class="game-block-fill__piece game-block-fill__piece--' + piece.color +
        (selected === piece.id ? " is-selected" : "") + (piece.placed ? " is-placed" : "") +
        '" data-fill-piece="' + piece.id + '" style="--piece-cols:' + width + ";--piece-rows:" + height + '">' +
        piece.cells.map(function (cell) {
          return '<i style="grid-row:' + (cell[0] + 1) + ";grid-column:" + (cell[1] + 1) + '"></i>';
        }).join("") + "</button>";
    }

    function render() {
      window.GamePlatform.motion.render(root,
        '<div class="game-block-fill" style="--block-size:' + size + '">' +
        Array.from({ length: size * size }, function (_, index) {
          var row = Math.floor(index / size);
          var col = index % size;
          var key = row + "," + col;
          var color = occupied[key];
          return '<button class="game-block-fill__cell' + (target.has(key) ? " is-target" : "") +
            (color ? " is-filled game-block-fill__cell--" + color : "") +
            '" data-fill-cell="' + key + '" data-motion-key="fill-cell-' + key +
            '" data-motion-state="' + (color || "") + '"></button>';
        }).join("") + '</div><div class="game-block-fill__tray">' +
        pieces.map(pieceHtml).join("") + '</div><div class="game-progress">Đã đặt ' +
        pieces.filter(function (piece) { return piece.placed; }).length + "/" + pieces.length + " mảnh</div>");
    }

    options.runtime.listen(root, "click", function (event) {
      var piece = event.target.closest("[data-fill-piece]");
      var cell = event.target.closest("[data-fill-cell]");
      if (piece && !piece.classList.contains("is-placed")) {
        selected = piece.dataset.fillPiece;
        render();
      } else if (cell && selected) {
        place(selected, cell.dataset.fillCell.split(",").map(Number));
      }
    });
    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        var piece = gesture.startTarget.closest("[data-fill-piece]");
        var cell = gesture.endTarget.closest && gesture.endTarget.closest("[data-fill-cell]");
        if (piece && cell) place(piece.dataset.fillPiece, cell.dataset.fillCell.split(",").map(Number));
      }
    }, options.runtime);
    options.onHint("Kéo một mảnh vào vùng chấm, hoặc chạm mảnh rồi chọn ô đặt.");
    render();
    return {};
  });
}());
