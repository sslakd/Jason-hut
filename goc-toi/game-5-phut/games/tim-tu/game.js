(function () {
  "use strict";

  window.GamePlatform.register("tim-tu", function (root, options) {
    var size = options.difficulty.multiplier >= 2 ? 7 : 6;
    var wordSets = [
      ["SEN", "TRE", "MUA", "NANG"],
      ["COM", "PHO", "TRA", "BANH"],
      ["SONG", "BIEN", "MAY", "GIO"],
      ["DAO", "MAI", "TET", "XUAN"]
    ];
    var words = wordSets[(options.level - 1) % wordSets.length].slice();
    var fillers = "AEOINMTRSLGHUBCDPVY";
    var board = Array(size * size).fill("");
    var found = new Set();
    var placements = [
      [0, 0, 0, 1],
      [size - 1, 0, 0, 1],
      [1, size - 1, 1, 0],
      [size - 2, size - 1, -1, -1]
    ];

    words.forEach(function (word, wordIndex) {
      var slot = placements[wordIndex];
      word.split("").forEach(function (letter, index) {
        board[(slot[0] + slot[2] * index) * size + slot[1] + slot[3] * index] = letter;
      });
    });
    board = board.map(function (letter, index) {
      return letter || fillers[(index * 7 + options.level * 3) % fillers.length];
    });

    function lineBetween(start, end) {
      var startRow = Math.floor(start / size);
      var startCol = start % size;
      var endRow = Math.floor(end / size);
      var endCol = end % size;
      var rowDelta = endRow - startRow;
      var colDelta = endCol - startCol;
      var length = Math.max(Math.abs(rowDelta), Math.abs(colDelta));
      if (!length || (rowDelta && colDelta && Math.abs(rowDelta) !== Math.abs(colDelta))) return [];
      var rowStep = rowDelta === 0 ? 0 : rowDelta / Math.abs(rowDelta);
      var colStep = colDelta === 0 ? 0 : colDelta / Math.abs(colDelta);
      return Array.from({ length: length + 1 }, function (_, index) {
        return (startRow + rowStep * index) * size + startCol + colStep * index;
      });
    }

    function select(start, end) {
      var cells = lineBetween(start, end);
      var text = cells.map(function (index) { return board[index]; }).join("");
      var match = words.find(function (word) {
        return !found.has(word) && (word === text || word === text.split("").reverse().join(""));
      });
      if (!match) {
        root.classList.remove("game-shake");
        root.offsetWidth;
        root.classList.add("game-shake");
        return;
      }
      found.add(match);
      window.GameAudio.open();
      render();
      if (found.size === words.length) options.onWin("Bạn đã tìm đủ " + words.length + " từ tiếng Việt.");
    }

    function render() {
      var foundCells = new Set();
      words.forEach(function (word, wordIndex) {
        if (!found.has(word)) return;
        var slot = placements[wordIndex];
        word.split("").forEach(function (_, index) {
          foundCells.add((slot[0] + slot[2] * index) * size + slot[1] + slot[3] * index);
        });
      });
      window.GamePlatform.motion.render(root,
        '<div class="game-word-list">' + words.map(function (word) {
          return '<span class="' + (found.has(word) ? "is-found" : "") + '">' + word + "</span>";
        }).join("") + '</div><div class="game-word-grid" style="--word-size:' + size + '">' +
        board.map(function (letter, index) {
          return '<button data-word-cell="' + index + '" class="game-word-grid__cell' +
            (foundCells.has(index) ? " is-found" : "") + '" data-motion-key="word-' + index +
            '" data-motion-state="' + Number(foundCells.has(index)) + '">' + letter + "</button>";
        }).join("") + "</div>");
    }

    window.GamePlatform.gesture(root, {
      tap: function () {},
      swipe: function (gesture) {
        var start = gesture.startTarget.closest("[data-word-cell]");
        var end = gesture.endTarget.closest && gesture.endTarget.closest("[data-word-cell]");
        if (start && end) select(Number(start.dataset.wordCell), Number(end.dataset.wordCell));
      },
      threshold: 10
    }, options.runtime);
    options.onHint("Kéo qua các chữ theo hàng, cột hoặc đường chéo để tìm từ.");
    render();
    return {};
  });
}());
