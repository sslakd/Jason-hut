(function () {
  "use strict";

  window.GamePlatform.register("gop-so", function (root, options) {
    var size = 5;
    var target = options.difficulty.multiplier >= 3 ? 64 : 32;
    var cells = Array(size * size).fill(null);
    var nextId = 1;
    var selected = null;
    var moves = 0;

    function neighbors(index) {
      var row = Math.floor(index / size);
      var col = index % size;
      return [
        row > 0 ? index - size : -1,
        row < size - 1 ? index + size : -1,
        col > 0 ? index - 1 : -1,
        col < size - 1 ? index + 1 : -1
      ].filter(function (value) { return value >= 0; });
    }

    function addTile(seed) {
      var empty = cells.map(function (cell, index) { return cell ? -1 : index; })
        .filter(function (index) { return index >= 0; });
      if (!empty.length) return;
      var index = empty[(seed * 7 + options.level * 3) % empty.length];
      cells[index] = { id: nextId++, value: seed % 5 === 0 ? 4 : 2 };
    }

    function canMove() {
      if (cells.some(function (cell) { return !cell; })) return true;
      return cells.some(function (cell, index) {
        return neighbors(index).some(function (next) {
          return cells[next] && cells[next].value === cell.value;
        });
      });
    }

    function merge(from, to) {
      var source = cells[from];
      var destination = cells[to];
      if (!source || !destination || source.value !== destination.value ||
          neighbors(from).indexOf(to) < 0) {
        root.classList.remove("game-shake");
        root.offsetWidth;
        root.classList.add("game-shake");
        return;
      }
      cells[from] = null;
      destination.value *= 2;
      moves += 1;
      selected = null;
      window.GameAudio.open();
      if (destination.value >= target) {
        render();
        options.onWin("Bạn đã tạo được ô " + target + " sau " + moves + " lượt gộp.");
        return;
      }
      addTile(moves + options.level);
      render();
      if (!canMove()) options.onLose("Bàn đã kín và không còn cặp số nào có thể gộp.");
    }

    function choose(index) {
      if (!cells[index]) return;
      if (selected === null) {
        selected = index;
        window.GameAudio.tap();
        render();
      } else if (selected === index) {
        selected = null;
        render();
      } else {
        merge(selected, index);
      }
    }

    function render() {
      window.GamePlatform.motion.render(root,
        '<div class="game-merge-head"><span>Mục tiêu <strong>' + target +
        '</strong></span><span>' + moves + ' lượt</span></div>' +
        '<div class="game-merge-grid">' + cells.map(function (cell, index) {
          return '<button class="game-merge-cell' + (cell ? " is-filled" : "") +
            (selected === index ? " is-selected" : "") + '" data-merge-cell="' + index + '">' +
            (cell ? '<span class="game-merge-tile game-merge-tile--' + cell.value +
              '" data-motion-key="merge-' + cell.id + '" data-motion-state="' + cell.value +
              '">' + cell.value + "</span>" : "") + "</button>";
        }).join("") + "</div>");
    }

    for (var seed = 0; seed < 9; seed += 1) addTile(seed + options.level);
    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-merge-cell]");
      if (cell) choose(Number(cell.dataset.mergeCell));
    });
    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        var from = gesture.startTarget.closest("[data-merge-cell]");
        var to = gesture.endTarget.closest && gesture.endTarget.closest("[data-merge-cell]");
        if (from && to) merge(Number(from.dataset.mergeCell), Number(to.dataset.mergeCell));
      }
    }, options.runtime);
    options.onHint("Kéo một ô số sang ô giống nó ở ngay cạnh, hoặc chạm lần lượt hai ô.");
    render();
    return {};
  });
}());
