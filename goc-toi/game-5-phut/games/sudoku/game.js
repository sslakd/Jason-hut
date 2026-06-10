(function () {
  "use strict";

  window.GamePlatform.register("sudoku", function (root, options) {
    var size = 6;
    var boxRows = 2;
    var boxCols = 3;
    var shift = (options.level - 1) % size;
    var solution = Array.from({ length: size * size }, function (_, index) {
      var row = Math.floor(index / size);
      var col = index % size;
      return ((row * boxCols + Math.floor(row / boxRows) + col + shift) % size) + 1;
    });
    var hiddenCount = Math.min(25, 13 + Math.round(options.difficulty.multiplier * 3) + options.level % 4);
    var hidden = new Set();
    var values = solution.slice();
    var selected = null;
    var mistakes = 0;

    for (var hiddenIndex = 0; hiddenIndex < hiddenCount; hiddenIndex += 1) {
      hidden.add((hiddenIndex * 11 + options.level * 7) % solution.length);
    }
    hidden.forEach(function (index) { values[index] = 0; });

    function chooseCell(index) {
      if (!hidden.has(index)) return;
      selected = index;
      window.GameAudio.tap();
      render();
    }

    function enter(number) {
      if (selected === null) return;
      if (solution[selected] !== number) {
        mistakes += 1;
        root.classList.remove("game-shake");
        root.offsetWidth;
        root.classList.add("game-shake");
        render();
        if (mistakes >= 3) options.onLose("Bạn đã điền sai 3 lần. Hãy thử lại màn này.");
        return;
      }
      values[selected] = number;
      hidden.delete(selected);
      selected = null;
      window.GameAudio.open();
      render();
      if (!hidden.size) options.onWin("Bạn đã hoàn thành bảng Sudoku 6×6.");
    }

    function render() {
      window.GamePlatform.motion.render(root,
        '<div class="game-sudoku-head"><span>Còn <strong>' + hidden.size +
        ' ô</strong></span><span>Sai ' + mistakes + "/3</span></div>" +
        '<div class="game-sudoku-grid">' + values.map(function (value, index) {
          var row = Math.floor(index / size);
          var col = index % size;
          var editable = hidden.has(index) || value !== solution[index];
          return '<button class="game-sudoku-cell' + (editable ? " is-editable" : " is-given") +
            (selected === index ? " is-selected" : "") +
            (col % boxCols === boxCols - 1 && col < size - 1 ? " box-right" : "") +
            (row % boxRows === boxRows - 1 && row < size - 1 ? " box-bottom" : "") +
            '" data-sudoku-cell="' + index + '" data-motion-key="sudoku-' + index +
            '" data-motion-state="' + value + '">' + (value || "") + "</button>";
        }).join("") + '</div><div class="game-sudoku-pad">' +
        Array.from({ length: size }, function (_, index) {
          return '<button data-sudoku-number="' + (index + 1) + '">' + (index + 1) + "</button>";
        }).join("") + "</div>");
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-sudoku-cell]");
      var number = event.target.closest("[data-sudoku-number]");
      if (cell) chooseCell(Number(cell.dataset.sudokuCell));
      if (number) enter(Number(number.dataset.sudokuNumber));
    });
    options.onHint("Chọn ô trống rồi chạm số. Mỗi hàng, cột và vùng 2×3 không được trùng.");
    render();
    return {};
  });
}());
