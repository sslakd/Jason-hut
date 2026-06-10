(function () {
  "use strict";

  window.GamePlatform.register("noi-mau", function (root, options) {
    var size = options.difficulty.multiplier >= 3 ? 6 : 5;
    var colors = ["mint", "amber", "coral", "sky"];
    var count = size === 6 ? 4 : 3;
    var turns = (options.level - 1) % 4;
    var paths = [];
    var filled = Object.create(null);
    var active = null;
    var mistakes = 0;
    var dragging = false;
    var lastDragCell = null;

    function rotate(row, col) {
      for (var turn = 0; turn < turns; turn += 1) {
        var next = col;
        col = size - 1 - row;
        row = next;
      }
      return row * size + col;
    }

    for (var colorIndex = 0; colorIndex < count; colorIndex += 1) {
      var row = colorIndex * 2;
      if (row >= size) row = colorIndex;
      var route = [];
      for (var col = 0; col < size; col += 1) route.push(rotate(row, col));
      paths.push({ color: colors[colorIndex], cells: route });
      filled[route[0]] = colors[colorIndex];
      filled[route[route.length - 1]] = colors[colorIndex];
    }

    function endpoint(cell) {
      return paths.find(function (path) {
        return path.cells[0] === cell || path.cells[path.cells.length - 1] === cell;
      });
    }

    function start(cell) {
      var path = endpoint(cell);
      if (!path) return;
      path.cells.slice(1, -1).forEach(function (pathCell) { delete filled[pathCell]; });
      active = {
        path: path,
        reverse: cell === path.cells[path.cells.length - 1],
        progress: 1
      };
      window.GameAudio.tap();
      render();
    }

    function advance(cell) {
      if (!active) return start(cell);
      var route = active.reverse ? active.path.cells.slice().reverse() : active.path.cells;
      var expected = route[active.progress];
      if (cell !== expected || (filled[cell] && filled[cell] !== active.path.color)) {
        mistakes += 1;
        active = null;
        render();
        if (mistakes >= 3) options.onLose("Bạn đã nối sai 3 lần. Hãy thử lại với đường đi khác.");
        return;
      }
      filled[cell] = active.path.color;
      active.progress += 1;
      window.GameAudio.tap();
      if (active.progress === route.length) active = null;
      render();
      var complete = paths.every(function (path) {
        return path.cells.every(function (pathCell) { return filled[pathCell] === path.color; });
      });
      if (complete) options.onWin("Bạn đã nối đủ " + count + " cặp màu mà không để đường giao nhau.");
    }

    function render() {
      window.GamePlatform.motion.render(root,
        '<div class="game-connect-head"><span>Nối đủ <strong>' + count +
        ' màu</strong></span><span>Sai ' + mistakes + "/3</span></div>" +
        '<div class="game-color-connect" style="--connect-size:' + size + '">' +
        Array.from({ length: size * size }, function (_, cell) {
          var color = filled[cell];
          var point = endpoint(cell);
          return '<button class="game-color-connect__cell' + (color ? " is-filled color-" + color : "") +
            (point ? " is-point" : "") + '" data-color-connect="' + cell +
            '" data-motion-key="color-connect-' + cell + '" data-motion-state="' +
            (color || "") + '">' + (point ? "<i></i>" : "") + "</button>";
        }).join("") + "</div>");
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-color-connect]");
      if (!cell || event.detail !== 0) return;
      var index = Number(cell.dataset.colorConnect);
      if (!active) start(index);
      else advance(index);
    });
    options.runtime.listen(root, "pointerdown", function (event) {
      var cell = event.target.closest("[data-color-connect]");
      if (!cell) return;
      dragging = true;
      lastDragCell = Number(cell.dataset.colorConnect);
      if (!active) start(lastDragCell);
      else advance(lastDragCell);
    });
    options.runtime.listen(root, "pointermove", function (event) {
      if (!dragging) return;
      var target = document.elementFromPoint(event.clientX, event.clientY);
      var cell = target && target.closest("[data-color-connect]");
      if (!cell) return;
      var index = Number(cell.dataset.colorConnect);
      if (index === lastDragCell) return;
      lastDragCell = index;
      advance(index);
    });
    options.runtime.listen(window, "pointerup", function () {
      dragging = false;
      lastDragCell = null;
    });
    options.runtime.listen(window, "pointercancel", function () {
      dragging = false;
      lastDragCell = null;
    });
    options.onHint("Chạm một đầu màu rồi đi qua từng ô của đường tới đầu còn lại.");
    render();
    return {};
  });
}());
