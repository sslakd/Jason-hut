(function () {
  "use strict";

  window.GamePlatform.register("truot-so", function (root, options) {
    var board = Array(16).fill(0);
    var target = options.level > 2 ? 512 : 256;

    function add() {
      var empty = board.map(function (value, index) { return value ? -1 : index; })
        .filter(function (index) { return index >= 0; });
      if (empty.length) board[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < .88 ? 2 : 4;
    }

    function compress(line) {
      var values = line.filter(Boolean);
      for (var index = 0; index < values.length - 1; index += 1) {
        if (values[index] === values[index + 1]) {
          values[index] *= 2;
          values.splice(index + 1, 1);
        }
      }
      while (values.length < 4) values.push(0);
      return values;
    }

    function render() {
      root.innerHTML = '<div class="game-number-slide">' + board.map(function (value) {
        return '<div class="game-number-slide__cell game-number-slide__cell--n' + value + '">' +
          (value || "") + "</div>";
      }).join("") + "</div>";
    }

    function move(direction) {
      var old = board.join(",");
      var next = Array(16).fill(0);
      for (var lineIndex = 0; lineIndex < 4; lineIndex += 1) {
        var line = [];
        for (var offset = 0; offset < 4; offset += 1) {
          var row = direction === "up" || direction === "down" ? offset : lineIndex;
          var col = direction === "up" || direction === "down" ? lineIndex : offset;
          if (direction === "right" || direction === "down") {
            row = direction === "down" ? 3 - offset : lineIndex;
            col = direction === "right" ? 3 - offset : lineIndex;
          }
          line.push(board[row * 4 + col]);
        }
        compress(line).forEach(function (value, offset) {
          var row = direction === "up" || direction === "down" ? offset : lineIndex;
          var col = direction === "up" || direction === "down" ? lineIndex : offset;
          if (direction === "right" || direction === "down") {
            row = direction === "down" ? 3 - offset : lineIndex;
            col = direction === "right" ? 3 - offset : lineIndex;
          }
          next[row * 4 + col] = value;
        });
      }
      board = next;
      if (board.join(",") !== old) {
        add();
        window.GameAudio.tap();
      }
      render();
      if (board.some(function (value) { return value >= target; })) {
        options.onWin("Bạn đã tạo được ô " + target + ".");
      } else if (!board.includes(0) && !board.some(function (value, index) {
        var row = Math.floor(index / 4);
        var col = index % 4;
        return (col < 3 && board[index + 1] === value) || (row < 3 && board[index + 4] === value);
      })) {
        options.onLose("Bàn số đã kín.");
      }
    }

    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) move(gesture.dx > 0 ? "right" : "left");
        else move(gesture.dy > 0 ? "down" : "up");
      }
    }, options.runtime);
    options.runtime.listen(window, "keydown", function (event) {
      var directions = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down" };
      if (!directions[event.key] || options.runtime.isPaused()) return;
      event.preventDefault();
      move(directions[event.key]);
    });
    add();
    add();
    options.onHint("Vuốt để gộp các ô cùng số. Tạo ô " + target + ".");
    render();
    return {};
  });
}());
