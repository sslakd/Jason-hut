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
    var board;
    var found = new Set();
    var placements;
    var directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    function shuffle(items) {
      for (var index = items.length - 1; index > 0; index -= 1) {
        var swapIndex = Math.floor(Math.random() * (index + 1));
        var value = items[index];
        items[index] = items[swapIndex];
        items[swapIndex] = value;
      }
      return items;
    }

    function candidateCells(word, row, col, rowStep, colStep) {
      var endRow = row + rowStep * (word.length - 1);
      var endCol = col + colStep * (word.length - 1);
      if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size) return null;
      return word.split("").map(function (_, letterIndex) {
        return (row + rowStep * letterIndex) * size + col + colStep * letterIndex;
      });
    }

    function placeWords() {
      for (var attempt = 0; attempt < 80; attempt += 1) {
        var nextBoard = Array(size * size).fill("");
        var nextPlacements = [];
        var placedAll = words.every(function (word) {
          var candidates = [];
          for (var row = 0; row < size; row += 1) {
            for (var col = 0; col < size; col += 1) {
              directions.forEach(function (direction) {
                var cells = candidateCells(word, row, col, direction[0], direction[1]);
                if (cells) candidates.push(cells);
              });
            }
          }
          var placement = shuffle(candidates).find(function (cells) {
            return cells.every(function (cell, letterIndex) {
              return !nextBoard[cell] || nextBoard[cell] === word[letterIndex];
            });
          });
          if (!placement) return false;
          placement.forEach(function (cell, letterIndex) {
            nextBoard[cell] = word[letterIndex];
          });
          nextPlacements.push(placement);
          return true;
        });
        if (placedAll) {
          board = nextBoard;
          placements = nextPlacements;
          return;
        }
      }
      throw new Error("Không thể tạo bảng tìm từ hợp lệ.");
    }

    placeWords();
    board = board.map(function (letter) {
      return letter || fillers[Math.floor(Math.random() * fillers.length)];
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
      var matchIndex = placements.findIndex(function (placement, wordIndex) {
        if (found.has(words[wordIndex]) || placement.length !== cells.length) return false;
        var forward = placement.every(function (cell, index) { return cell === cells[index]; });
        var reverse = placement.every(function (cell, index) {
          return cell === cells[cells.length - 1 - index];
        });
        return forward || reverse;
      });
      if (matchIndex < 0) {
        root.classList.remove("game-shake");
        root.offsetWidth;
        root.classList.add("game-shake");
        return;
      }
      var match = words[matchIndex];
      found.add(match);
      window.GameAudio.open();
      render();
      if (found.size === words.length) options.onWin("Bạn đã tìm đủ " + words.length + " từ tiếng Việt.");
    }

    function render() {
      var foundCells = new Set();
      words.forEach(function (word, wordIndex) {
        if (!found.has(word)) return;
        placements[wordIndex].forEach(function (cell) {
          foundCells.add(cell);
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
