(function () {
  "use strict";

  window.GamePlatform.register("ghep-trai-cay", function (root, options) {
    var rows = 7;
    var cols = 5;
    var board = Array(rows * cols).fill(null);
    var nextFruit = 1;
    var nextId = 1;
    var score = 0;
    var drops = 0;
    var ended = false;
    var busy = false;
    var droppingId = null;
    var mergedId = null;
    var assets = window.GAME_ASSETS && window.GAME_ASSETS.games["ghep-trai-cay"];
    var fruitImages = assets && assets.fruits || [];
    var fruitNames = assets && assets.fruitNames || [
      "Nho", "Chôm chôm", "Nhãn", "Cam", "Táo", "Ổi", "Dưa lưới", "Dưa hấu", "Mít"
    ];

    function difficulty() {
      return options.getEndlessDifficulty(drops);
    }

    function index(row, col) { return row * cols + col; }

    function locationOf(tileId) {
      var cell = board.findIndex(function (tile) { return tile && tile.id === tileId; });
      return cell < 0 ? null : [Math.floor(cell / cols), cell % cols];
    }

    function findMatch(row, col) {
      var tile = board[index(row, col)];
      if (!tile) return null;
      return [[row + 1, col], [row, col - 1], [row, col + 1]].find(function (cell) {
        return cell[0] >= 0 && cell[0] < rows && cell[1] >= 0 && cell[1] < cols &&
          board[index(cell[0], cell[1])] &&
          board[index(cell[0], cell[1])].value === tile.value;
      });
    }

    function mergeStep(tileId) {
      var location = locationOf(tileId);
      if (!location) return finishTurn();
      var row = location[0];
      var col = location[1];
      var tile = board[index(row, col)];
      var match = findMatch(row, col);
      if (!match) return finishTurn();

      board[index(match[0], match[1])] = null;
      tile.value = Math.min(9, tile.value + 1);
      score += Math.pow(2, tile.value - 1);
      collapse();
      mergedId = tileId;
      window.GameAudio.open();
      render();
      options.runtime.timeout(function () { mergeStep(tileId); }, 230);
    }

    function collapse() {
      for (var col = 0; col < cols; col += 1) {
        var fruits = [];
        for (var row = rows - 1; row >= 0; row -= 1) {
          if (board[index(row, col)]) fruits.push(board[index(row, col)]);
        }
        for (row = rows - 1; row >= 0; row -= 1) {
          board[index(row, col)] = fruits[rows - 1 - row] || null;
        }
      }
    }

    function finishTurn() {
      busy = false;
      droppingId = null;
      mergedId = null;
      render();
      if (board.slice(0, cols).every(Boolean)) {
        ended = true;
        options.onLose({ message: "Hộp trái cây đã đầy.", score: score });
      }
    }

    function drop(col) {
      if (ended || busy) return;
      var row;
      for (row = rows - 1; row >= 0 && board[index(row, col)]; row -= 1) {}
      if (row < 0) return;
      var tile = { id: nextId++, value: nextFruit };
      board[index(row, col)] = tile;
      busy = true;
      droppingId = tile.id;
      drops += 1;
      nextFruit = Math.random() < Math.min(.9, .7 + difficulty().factor * .07) ? 1 : 2;
      window.GameAudio.tap();
      render();
      options.runtime.timeout(function () {
        droppingId = null;
        mergeStep(tile.id);
      }, 320);
    }

    function fruitHtml(value, tileId) {
      var src = fruitImages[value - 1] || "";
      var name = fruitNames[value - 1] || "Trái cây";
      return '<img class="game-fruit game-fruit--' + value +
        (tileId === droppingId ? " is-dropping" : "") +
        (tileId === mergedId ? " is-merged" : "") +
        '" src="' + src + '" alt="' + name + '" draggable="false">';
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-live-score" aria-live="polite">Điểm ' + score +
        ' · Nhịp ' + difficulty().stage + '</div><div class="game-fruit-next">Tiếp theo: ' +
        fruitHtml(nextFruit, null) + '<strong>' + fruitNames[nextFruit - 1] +
        '</strong></div><div class="game-fruit-merge">' + board.map(function (tile, cell) {
        return '<button data-fruit-column="' + (cell % cols) + '" data-motion-key="fruit-cell-' + cell +
          '" class="game-fruit-merge__cell">' +
          (tile ? '<span data-motion-key="fruit-' + tile.id + '" data-motion-state="' + tile.value +
            '">' + fruitHtml(tile.value, tile.id) + "</span>" : "") + "</button>";
      }).join("") + "</div>", { duration: 260 });
      mergedId = null;
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-fruit-column]");
      if (cell) drop(Number(cell.dataset.fruitColumn));
    });
    options.onHint("Thả hai trái giống nhau cạnh nhau để ghép từ nho nhỏ tới quả mít.");
    render();
    return {};
  });
}());
