(function () {
  "use strict";

  window.GamePlatform.register("noi-so", function (root, options) {
    var size = options.difficulty.multiplier >= 3 ? 6 : 5;
    var total = size * size;
    var transform = (options.level - 1) % 4;
    var path = [];
    var progress = 1;
    var mistakes = 0;
    var dragging = false;
    var lastDragCell = null;

    function transformCell(row, col) {
      if (transform === 1) return [col, size - 1 - row];
      if (transform === 2) return [size - 1 - row, size - 1 - col];
      if (transform === 3) return [size - 1 - col, row];
      return [row, col];
    }

    for (var row = 0; row < size; row += 1) {
      for (var step = 0; step < size; step += 1) {
        var col = row % 2 ? size - 1 - step : step;
        var cell = transformCell(row, col);
        path.push(cell[0] * size + cell[1]);
      }
    }

    function checkpoint(index) {
      return index === 0 || index === total - 1 || (index + options.level) % Math.max(3, size - 1) === 0;
    }

    function choose(cellIndex) {
      if (cellIndex === path[progress]) {
        progress += 1;
        window.GameAudio.tap();
        render();
        if (progress === total) options.onWin("Bạn đã nối đủ " + total + " ô theo đúng thứ tự.");
      } else if (cellIndex !== path[progress - 1]) {
        mistakes += 1;
        root.classList.remove("game-shake");
        root.offsetWidth;
        root.classList.add("game-shake");
        if (mistakes >= 3) options.onLose("Bạn đã đi sai 3 lần. Hãy quan sát các mốc số và thử lại.");
      }
    }

    function render() {
      var order = Object.create(null);
      path.forEach(function (cell, index) { order[cell] = index; });
      window.GamePlatform.motion.render(root,
        '<div class="game-connect-head"><span>Đã nối <strong>' + progress + "/" + total +
        '</strong></span><span>Sai ' + mistakes + "/3</span></div>" +
        '<div class="game-number-connect" style="--connect-size:' + size + '">' +
        Array.from({ length: total }, function (_, cell) {
          var index = order[cell];
          var reached = index < progress;
          var current = index === progress;
          return '<button class="game-number-connect__cell' + (reached ? " is-reached" : "") +
            (current ? " is-current" : "") + '" data-number-connect="' + cell +
            '" data-motion-key="number-connect-' + cell + '" data-motion-state="' +
            (reached ? "done" : current ? "next" : "wait") + '">' +
            (checkpoint(index) || current ? index + 1 : "") + "</button>";
        }).join("") + "</div>");
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-number-connect]");
      if (cell && event.detail === 0) choose(Number(cell.dataset.numberConnect));
    });
    options.runtime.listen(root, "pointerdown", function (event) {
      var cell = event.target.closest("[data-number-connect]");
      if (!cell) return;
      dragging = true;
      lastDragCell = Number(cell.dataset.numberConnect);
      choose(lastDragCell);
    });
    options.runtime.listen(root, "pointermove", function (event) {
      if (!dragging) return;
      var target = document.elementFromPoint(event.clientX, event.clientY);
      var cell = target && target.closest("[data-number-connect]");
      if (!cell) return;
      var index = Number(cell.dataset.numberConnect);
      if (index === lastDragCell) return;
      lastDragCell = index;
      choose(index);
    });
    options.runtime.listen(window, "pointerup", function () {
      dragging = false;
      lastDragCell = null;
    });
    options.runtime.listen(window, "pointercancel", function () {
      dragging = false;
      lastDragCell = null;
    });
    options.onHint("Đi từ ô sáng sang ô kề bên. Các mốc số giúp bạn giữ đúng hướng.");
    render();
    return {};
  });
}());
