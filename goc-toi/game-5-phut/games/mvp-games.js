(function () {
  var COLORS = ["#d66f68", "#e0b553", "#66a173", "#6599ac"];
  var COLOR_NAMES = ["Đỏ", "Vàng", "Xanh lá", "Xanh lam"];

  function button(label, action, extra) {
    return '<button class="mini-control ' + (extra || "") + '" type="button" data-action="' +
      action + '">' + label + "</button>";
  }

  function bindGesture(root, handlers) {
    var gesture = null;
    var suppressClick = false;
    var suppressTimer;

    function onPointerDown(event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      gesture = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        target: event.target
      };
      root.classList.add("gesture-active");
    }

    function onPointerUp(event) {
      if (!gesture || event.pointerId !== gesture.id) return;
      var dx = event.clientX - gesture.x;
      var dy = event.clientY - gesture.y;
      var distance = Math.hypot(dx, dy);
      var endTarget = document.elementFromPoint(event.clientX, event.clientY) || event.target;
      if (distance >= 18 && handlers.swipe) {
        suppressClick = true;
        clearTimeout(suppressTimer);
        suppressTimer = setTimeout(function () { suppressClick = false; }, 80);
        handlers.swipe({
          dx: dx,
          dy: dy,
          startTarget: gesture.target,
          endTarget: endTarget
        });
      } else if (handlers.tap) {
        handlers.tap({ target: gesture.target });
      }
      gesture = null;
      root.classList.remove("gesture-active");
    }

    function onPointerCancel() {
      gesture = null;
      root.classList.remove("gesture-active");
    }

    function onClick(event) {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }

    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", onPointerCancel);
    root.addEventListener("click", onClick, true);
    return function () {
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointercancel", onPointerCancel);
      root.removeEventListener("click", onClick, true);
      clearTimeout(suppressTimer);
    };
  }

  function escapeGame(root, options) {
    var size = 6;
    var selected = "red";
    var vehicles = [
      { id: "red", x: 0, y: 2, length: 2, axis: "h", color: "#d66f68" },
      { id: "a", x: 2, y: 0, length: 3, axis: "v", color: "#78a889" },
      { id: "b", x: 3, y: 2, length: 2, axis: "v", color: "#719caf" },
      { id: "c", x: 4, y: 0, length: 2, axis: "h", color: "#d9b45e" },
      { id: "d", x: 4, y: 3, length: 2, axis: "h", color: "#9b8ab0" },
      { id: "e", x: 0, y: 4, length: 3, axis: "h", color: "#d88f6c" },
      { id: "f", x: 5, y: 4, length: 2, axis: "v", color: "#80a584" }
    ];
    var moves = 0;

    function occupied(skipId) {
      var cells = {};
      vehicles.forEach(function (car) {
        if (car.id === skipId) return;
        for (var i = 0; i < car.length; i += 1) {
          var x = car.x + (car.axis === "h" ? i : 0);
          var y = car.y + (car.axis === "v" ? i : 0);
          cells[x + "," + y] = true;
        }
      });
      return cells;
    }

    function move(delta) {
      var car = vehicles.find(function (item) { return item.id === selected; });
      var cells = occupied(car.id);
      var nextX = car.x + (car.axis === "h" ? delta : 0);
      var nextY = car.y + (car.axis === "v" ? delta : 0);
      if (nextX < 0 || nextY < 0) return;
      if (nextX + (car.axis === "h" ? car.length : 1) > size) return;
      if (nextY + (car.axis === "v" ? car.length : 1) > size) return;
      for (var i = 0; i < car.length; i += 1) {
        var x = nextX + (car.axis === "h" ? i : 0);
        var y = nextY + (car.axis === "v" ? i : 0);
        if (cells[x + "," + y]) return;
      }
      car.x = nextX;
      car.y = nextY;
      moves += 1;
      window.GameAudio.tap();
      render();
      if (car.id === "red" && car.x + car.length === size) {
        setTimeout(function () { options.onWin("Thoát bãi sau " + moves + " lượt."); }, 180);
      }
    }

    function render() {
      root.innerHTML = [
        '<div class="escape-wrap"><div class="escape-board">',
        '<span class="escape-exit">Lối ra <i class="fa-solid fa-arrow-right"></i></span>',
        vehicles.map(function (car) {
          var style = "left:" + (car.x / size * 100) + "%;top:" + (car.y / size * 100) +
            "%;width:" + ((car.axis === "h" ? car.length : 1) / size * 100) +
            "%;height:" + ((car.axis === "v" ? car.length : 1) / size * 100) +
            "%;background:" + car.color;
          return '<button class="escape-car ' + (selected === car.id ? "selected" : "") +
            '" data-car="' + car.id + '" style="' + style + '" aria-label="Chọn xe">' +
            '<i class="fa-solid fa-car-side"></i></button>';
        }).join(""),
        '</div><div class="mini-panel"><span>Chọn xe rồi di chuyển</span><div>',
        button('<i class="fa-solid fa-arrow-left"></i>', "minus"),
        button('<i class="fa-solid fa-arrow-up"></i>', "minus"),
        button('<i class="fa-solid fa-arrow-down"></i>', "plus"),
        button('<i class="fa-solid fa-arrow-right"></i>', "plus"),
        "</div></div></div>"
      ].join("");
    }

    root.onclick = function (event) {
      var carButton = event.target.closest("[data-car]");
      var action = event.target.closest("[data-action]");
      if (carButton) {
        selected = carButton.dataset.car;
        render();
      }
      if (action) move(action.dataset.action === "plus" ? 1 : -1);
    };
    var unbindGesture = bindGesture(root, {
      swipe: function (gesture) {
        var carButton = gesture.startTarget.closest("[data-car]");
        if (!carButton) return;
        selected = carButton.dataset.car;
        var car = vehicles.find(function (item) { return item.id === selected; });
        var board = root.querySelector(".escape-board");
        var cellSize = board.getBoundingClientRect().width / size;
        var distance = car.axis === "h" ? gesture.dx : gesture.dy;
        var steps = Math.max(1, Math.round(Math.abs(distance) / cellSize));
        var direction = distance >= 0 ? 1 : -1;
        for (var i = 0; i < steps; i += 1) move(direction);
      }
    });
    options.onHint("Kéo từng xe theo chiều của nó. Đưa xe đỏ ra bên phải.");
    render();
    return { destroy: function () { unbindGesture(); root.onclick = null; } };
  }

  function waterSortGame(root, options) {
    var tubes = [
      [0, 1, 2, 0], [2, 3, 1, 3], [1, 0, 3, 2], [3, 2, 0, 1], [], []
    ];
    var selected = null;
    var moves = 0;

    function isComplete() {
      return tubes.every(function (tube) {
        return tube.length === 0 || (tube.length === 4 && tube.every(function (c) { return c === tube[0]; }));
      });
    }

    function pour(from, to) {
      if (from === to || tubes[from].length === 0 || tubes[to].length === 4) return;
      var color = tubes[from][tubes[from].length - 1];
      if (tubes[to].length && tubes[to][tubes[to].length - 1] !== color) return;
      var amount = 0;
      for (var i = tubes[from].length - 1; i >= 0 && tubes[from][i] === color; i -= 1) amount += 1;
      amount = Math.min(amount, 4 - tubes[to].length);
      while (amount > 0) {
        tubes[to].push(tubes[from].pop());
        amount -= 1;
      }
      moves += 1;
      window.GameAudio.tap();
      if (isComplete()) setTimeout(function () {
        options.onWin("Phân loại xong sau " + moves + " lượt rót.");
      }, 250);
    }

    function render() {
      root.innerHTML = '<div class="sort-game"><div class="tube-grid">' +
        tubes.map(function (tube, index) {
          return '<button class="tube ' + (selected === index ? "selected" : "") +
            '" data-tube="' + index + '" aria-label="Ống ' + (index + 1) + '">' +
            '<span class="tube-liquid">' + tube.map(function (color) {
              return '<i style="background:' + COLORS[color] + '"></i>';
            }).reverse().join("") + "</span></button>";
        }).join("") + '</div><p>Chạm ống nguồn rồi chạm ống đích.</p></div>';
    }

    root.onclick = function (event) {
      var tube = event.target.closest("[data-tube]");
      if (!tube) return;
      var index = Number(tube.dataset.tube);
      if (selected === null) {
        if (tubes[index].length) selected = index;
      } else {
        pour(selected, index);
        selected = null;
      }
      render();
    };
    var unbindGesture = bindGesture(root, {
      swipe: function (gesture) {
        var source = gesture.startTarget.closest("[data-tube]");
        var target = gesture.endTarget.closest && gesture.endTarget.closest("[data-tube]");
        if (!source || !target) return;
        pour(Number(source.dataset.tube), Number(target.dataset.tube));
        selected = null;
        render();
      }
    });
    options.onHint("Kéo ống nguồn sang ống đích, hoặc chạm lần lượt hai ống.");
    render();
    return { destroy: function () { unbindGesture(); root.onclick = null; } };
  }

  function sandGame(root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas sand-canvas";
    canvas.width = 300;
    canvas.height = 480;
    root.innerHTML = '<div class="canvas-game"></div><div class="touch-controls">' +
      button('<i class="fa-solid fa-arrow-left"></i>', "left") +
      button('<i class="fa-solid fa-rotate-right"></i>', "rotate") +
      button('<i class="fa-solid fa-arrow-down"></i>', "down") +
      button('<i class="fa-solid fa-arrow-right"></i>', "right") + "</div>";
    root.querySelector(".canvas-game").appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var cols = 10;
    var rows = 16;
    var cell = 30;
    var grid = Array.from({ length: rows }, function () { return Array(cols).fill(null); });
    var shapes = [
      [[1, 1, 1], [0, 1, 0]], [[1, 1], [1, 1]], [[1, 1, 0], [0, 1, 1]],
      [[1, 1, 1, 1]], [[1, 0], [1, 1], [1, 0]]
    ];
    var piece;
    var lines = 0;
    var target = 2 + Math.min(options.level - 1, 3);
    var paused = false;
    var ended = false;

    function spawn() {
      piece = {
        shape: shapes[Math.floor(Math.random() * shapes.length)].map(function (row) { return row.slice(); }),
        x: 3, y: 0, color: COLORS[Math.floor(Math.random() * COLORS.length)]
      };
      if (collides(0, 0, piece.shape)) {
        ended = true;
        options.onLose("Cát đã chạm tới đỉnh.");
      }
    }

    function collides(dx, dy, shape) {
      return shape.some(function (row, y) {
        return row.some(function (value, x) {
          if (!value) return false;
          var nx = piece.x + x + dx;
          var ny = piece.y + y + dy;
          return nx < 0 || nx >= cols || ny >= rows || (ny >= 0 && grid[ny][nx]);
        });
      });
    }

    function rotate() {
      var next = piece.shape[0].map(function (_, index) {
        return piece.shape.map(function (row) { return row[index]; }).reverse();
      });
      if (!collides(0, 0, next)) piece.shape = next;
    }

    function lock() {
      piece.shape.forEach(function (row, y) {
        row.forEach(function (value, x) {
          if (value && piece.y + y >= 0) grid[piece.y + y][piece.x + x] = piece.color;
        });
      });
      for (var y = rows - 1; y >= 0; y -= 1) {
        if (grid[y].every(Boolean)) {
          grid.splice(y, 1);
          grid.unshift(Array(cols).fill(null));
          lines += 1;
          y += 1;
        }
      }
      if (lines >= target) {
        ended = true;
        draw();
        options.onWin("Đã xóa " + lines + " hàng cát.");
        return;
      }
      spawn();
    }

    function drop() {
      if (paused || ended) return;
      if (!collides(0, 1, piece.shape)) piece.y += 1;
      else lock();
      draw();
    }

    function move(action) {
      if (ended) return;
      if (action === "rotate") rotate();
      if (action === "left" && !collides(-1, 0, piece.shape)) piece.x -= 1;
      if (action === "right" && !collides(1, 0, piece.shape)) piece.x += 1;
      if (action === "down") drop();
      if (action === "hard-drop") {
        while (!collides(0, 1, piece.shape)) piece.y += 1;
        lock();
      }
      window.GameAudio.tap();
      draw();
    }

    function draw() {
      ctx.fillStyle = "#f7fbf5";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(79,128,89,.08)";
      for (var x = 0; x <= cols; x += 1) {
        ctx.beginPath(); ctx.moveTo(x * cell, 0); ctx.lineTo(x * cell, rows * cell); ctx.stroke();
      }
      for (var y = 0; y <= rows; y += 1) {
        ctx.beginPath(); ctx.moveTo(0, y * cell); ctx.lineTo(cols * cell, y * cell); ctx.stroke();
      }
      grid.forEach(function (row, y) {
        row.forEach(function (color, x) { if (color) drawCell(x, y, color); });
      });
      if (piece) piece.shape.forEach(function (row, y) {
        row.forEach(function (value, x) {
          if (value) drawCell(piece.x + x, piece.y + y, piece.color);
        });
      });
      ctx.fillStyle = "#294a31";
      ctx.font = "600 13px sans-serif";
      ctx.fillText("Hàng " + lines + "/" + target, 10, 22);
    }

    function drawCell(x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x * cell + 2, y * cell + 2, cell - 4, cell - 4);
    }

    root.onclick = function (event) {
      var control = event.target.closest("[data-action]");
      if (control) move(control.dataset.action);
    };
    var unbindGesture = bindGesture(canvas, {
      tap: function () { move("rotate"); },
      swipe: function (gesture) {
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) {
          var steps = Math.max(1, Math.round(Math.abs(gesture.dx) / 36));
          for (var i = 0; i < steps; i += 1) move(gesture.dx > 0 ? "right" : "left");
        } else if (gesture.dy > 0) {
          move("hard-drop");
        } else {
          move("rotate");
        }
      }
    });
    function onKey(event) {
      var map = { ArrowLeft: "left", ArrowRight: "right", ArrowDown: "down", ArrowUp: "rotate" };
      if (map[event.key]) { event.preventDefault(); move(map[event.key]); }
    }
    window.addEventListener("keydown", onKey);
    spawn();
    draw();
    var speed = Math.max(260, 720 / options.difficulty.multiplier / Math.pow(1.05, options.level - 1));
    var timer = setInterval(drop, speed);
    options.onHint("Vuốt ngang để di chuyển, vuốt lên để xoay, vuốt xuống để thả.");
    return {
      setPaused: function (value) { paused = value; },
      destroy: function () {
        clearInterval(timer);
        unbindGesture();
        window.removeEventListener("keydown", onKey);
        root.onclick = null;
      }
    };
  }

  function colorCardsGame(root, options) {
    var deck = [];
    COLORS.forEach(function (_, color) {
      for (var number = 0; number <= 6; number += 1) deck.push({ color: color, number: number });
    });
    deck.sort(function () { return Math.random() - .5; });
    var player = deck.splice(0, 5);
    var ai = deck.splice(0, 5);
    var discard = deck.pop();
    var locked = false;
    var timeout;

    function playable(card) {
      return card.color === discard.color || card.number === discard.number;
    }

    function cardHtml(card, index, owner) {
      return '<button class="color-card" data-owner="' + owner + '" data-index="' + index +
        '" style="--card-color:' + COLORS[card.color] + '" aria-label="' + COLOR_NAMES[card.color] +
        " " + card.number + '"><span>' + card.number + "</span></button>";
    }

    function render() {
      root.innerHTML = [
        '<div class="card-game"><div class="ai-hand"><span>Máy · ', ai.length, " lá</span>",
        ai.map(function () { return '<i class="card-back"></i>'; }).join(""), "</div>",
        '<div class="card-table"><button class="draw-pile" data-draw="true"><i class="fa-solid fa-layer-group"></i><span>Rút</span></button>',
        '<div class="discard-card" style="--card-color:', COLORS[discard.color], '"><span>', discard.number, "</span></div></div>",
        '<div class="player-hand">', player.map(function (card, index) {
          return cardHtml(card, index, "player");
        }).join(""), "</div></div>"
      ].join("");
    }

    function aiTurn() {
      if (!ai.length) return;
      locked = true;
      timeout = setTimeout(function () {
        var index = ai.findIndex(playable);
        if (index >= 0) discard = ai.splice(index, 1)[0];
        else if (deck.length) ai.push(deck.pop());
        if (!ai.length) {
          options.onLose("Máy đã đánh hết bài trước.");
          return;
        }
        locked = false;
        render();
      }, Math.max(280, 700 / options.difficulty.multiplier));
    }

    function playCard(index) {
      if (locked || !player[index] || !playable(player[index])) return;
      discard = player.splice(index, 1)[0];
      window.GameAudio.tap();
      if (!player.length) {
        render();
        options.onWin("Bạn đã đánh hết bài.");
        return;
      }
      render();
      aiTurn();
    }

    root.onclick = function (event) {
      if (locked) return;
      var card = event.target.closest('[data-owner="player"]');
      var draw = event.target.closest("[data-draw]");
      if (card) {
        playCard(Number(card.dataset.index));
      } else if (draw && deck.length) {
        player.push(deck.pop());
        render();
        aiTurn();
      }
    };
    var unbindGesture = bindGesture(root, {
      swipe: function (gesture) {
        var card = gesture.startTarget.closest('[data-owner="player"]');
        if (card && gesture.dy < -30) playCard(Number(card.dataset.index));
      }
    });
    options.onHint("Kéo lá bài lên để đánh. Chạm chồng bài để rút.");
    render();
    return {
      destroy: function () {
        clearTimeout(timeout);
        unbindGesture();
        root.onclick = null;
      }
    };
  }

  function oAnQuanGame(root, options) {
    var pits = [10, 5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5];
    var playerScore = 0;
    var aiScore = 0;
    var locked = false;
    var timeout;

    function smallEmpty() {
      return [1, 2, 3, 4, 5, 7, 8, 9, 10, 11].every(function (i) { return pits[i] === 0; });
    }

    function sow(index, isPlayer, direction) {
      var stones = pits[index];
      if (!stones) return false;
      pits[index] = 0;
      var cursor = index;
      var step = direction || 1;
      while (stones > 0) {
        cursor = (cursor + step + 12) % 12;
        pits[cursor] += 1;
        stones -= 1;
      }
      var empty = (cursor + step + 12) % 12;
      var capture = (cursor + step * 2 + 24) % 12;
      if (pits[empty] === 0 && pits[capture] > 0) {
        if (isPlayer) playerScore += pits[capture];
        else aiScore += pits[capture];
        pits[capture] = 0;
      }
      return true;
    }

    function finishIfNeeded() {
      if (!smallEmpty()) return false;
      playerScore += pits.slice(1, 6).reduce(function (a, b) { return a + b; }, 0);
      aiScore += pits.slice(7, 12).reduce(function (a, b) { return a + b; }, 0);
      if (playerScore >= aiScore) options.onWin("Bạn thắng " + playerScore + " - " + aiScore + ".");
      else options.onLose("Máy thắng " + aiScore + " - " + playerScore + ".");
      return true;
    }

    function aiTurn() {
      locked = true;
      timeout = setTimeout(function () {
        var choices = [7, 8, 9, 10, 11].filter(function (i) { return pits[i] > 0; });
        if (!choices.length) {
          [7, 8, 9, 10, 11].forEach(function (i) { pits[i] = 1; });
          aiScore = Math.max(0, aiScore - 5);
          choices = [7, 8, 9, 10, 11];
        }
        var choice = choices[Math.floor(Math.random() * choices.length)];
        sow(choice, false, Math.random() > .5 ? 1 : -1);
        if ([1, 2, 3, 4, 5].every(function (i) { return pits[i] === 0; }) && !smallEmpty()) {
          [1, 2, 3, 4, 5].forEach(function (i) { pits[i] = 1; });
          playerScore = Math.max(0, playerScore - 5);
        }
        locked = false;
        render();
        finishIfNeeded();
      }, Math.max(300, 750 / options.difficulty.multiplier));
    }

    function pit(index, owner, large) {
      return '<button class="quan-pit ' + (large ? "large" : "") + '" data-pit="' + index +
        '" ' + (owner !== "player" ? "disabled" : "") + '><span>' + pits[index] +
        "</span>" + (large ? "<small>Quan</small>" : "") + "</button>";
    }

    function render() {
      root.innerHTML = [
        '<div class="quan-game"><div class="score-row"><span>Bạn <strong>', playerScore,
        '</strong></span><span>Máy <strong>', aiScore, "</strong></span></div>",
        '<div class="quan-board">', pit(0, "large", true),
        '<div class="quan-middle"><div class="quan-row ai-row">',
        [11, 10, 9, 8, 7].map(function (i) { return pit(i, "ai", false); }).join(""),
        '</div><div class="quan-row">',
        [1, 2, 3, 4, 5].map(function (i) { return pit(i, "player", false); }).join(""),
        "</div></div>", pit(6, "large", true), "</div></div>"
      ].join("");
    }

    root.onclick = function (event) {
      if (locked) return;
      var pitButton = event.target.closest("[data-pit]");
      if (!pitButton) return;
      var index = Number(pitButton.dataset.pit);
      if (sow(index, true, 1)) {
        window.GameAudio.tap();
        render();
        if (!finishIfNeeded()) aiTurn();
      }
    };
    var unbindGesture = bindGesture(root, {
      swipe: function (gesture) {
        if (locked || Math.abs(gesture.dx) < 18) return;
        var pitButton = gesture.startTarget.closest("[data-pit]");
        if (!pitButton || pitButton.disabled) return;
        var index = Number(pitButton.dataset.pit);
        if (sow(index, true, gesture.dx > 0 ? 1 : -1)) {
          window.GameAudio.tap();
          render();
          if (!finishIfNeeded()) aiTurn();
        }
      }
    });
    options.onHint("Vuốt từ ô dân sang trái hoặc phải để chọn hướng rải.");
    render();
    return {
      destroy: function () {
        clearTimeout(timeout);
        unbindGesture();
        root.onclick = null;
      }
    };
  }

  function flappyGame(root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas flappy-canvas";
    canvas.width = 360;
    canvas.height = 520;
    root.innerHTML = '<div class="canvas-game flappy-wrap"></div><button class="tap-zone" type="button">Chạm để bay</button>';
    root.querySelector(".canvas-game").appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var bird = { x: 80, y: 240, vy: 0 };
    var pipes = [];
    var frame = 0;
    var score = 0;
    var target = 4 + Math.min(options.level, 4);
    var paused = false;
    var ended = false;
    var animation;
    var gap = Math.max(112, 165 - options.difficulty.multiplier * 10 - options.level * 2);

    function flap() {
      if (!ended && !paused) {
        bird.vy = -6.4;
        window.GameAudio.tap();
      }
    }

    function loop() {
      if (!paused && !ended) {
        frame += 1;
        bird.vy += .34;
        bird.y += bird.vy;
        if (frame % 105 === 0) {
          pipes.push({ x: 380, top: 70 + Math.random() * 230, passed: false });
        }
        pipes.forEach(function (pipe) { pipe.x -= 2.25 + options.difficulty.multiplier * .12; });
        pipes = pipes.filter(function (pipe) { return pipe.x > -60; });
        pipes.forEach(function (pipe) {
          if (!pipe.passed && pipe.x + 54 < bird.x) {
            pipe.passed = true;
            score += 1;
            if (score >= target) {
              ended = true;
              options.onWin("Bạn đã vượt " + score + " cột gió.");
            }
          }
          var hitX = bird.x + 13 > pipe.x && bird.x - 13 < pipe.x + 54;
          var hitY = bird.y - 13 < pipe.top || bird.y + 13 > pipe.top + gap;
          if (hitX && hitY) ended = true;
        });
        if (bird.y < 0 || bird.y > canvas.height) ended = true;
        if (ended && score < target) options.onLose("Chú chim đã va vào chướng ngại.");
      }
      draw();
      if (!ended) animation = requestAnimationFrame(loop);
    }

    function draw() {
      ctx.fillStyle = "#e8f3e5";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#8bb390";
      pipes.forEach(function (pipe) {
        ctx.fillRect(pipe.x, 0, 54, pipe.top);
        ctx.fillRect(pipe.x, pipe.top + gap, 54, canvas.height - pipe.top - gap);
      });
      ctx.fillStyle = "#d7a959";
      ctx.beginPath();
      ctx.arc(bird.x, bird.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#294a31";
      ctx.beginPath();
      ctx.arc(bird.x + 5, bird.y - 4, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "600 14px sans-serif";
      ctx.fillText(score + "/" + target, 16, 26);
    }

    root.onpointerdown = function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      flap();
    };
    function onKey(event) { if (event.code === "Space") { event.preventDefault(); flap(); } }
    window.addEventListener("keydown", onKey);
    options.onHint("Chạm để bay qua " + target + " cột gió.");
    loop();
    return {
      setPaused: function (value) {
        paused = value;
        if (!paused && !ended) loop();
        else cancelAnimationFrame(animation);
      },
      destroy: function () {
        ended = true;
        cancelAnimationFrame(animation);
        window.removeEventListener("keydown", onKey);
        root.onpointerdown = null;
      }
    };
  }

  var games = {
    "thoat-bai-xe": escapeGame,
    "xep-nuoc": waterSortGame,
    "cat-roi": sandGame,
    "dau-mau": colorCardsGame,
    "o-an-quan": oAnQuanGame,
    "chim-vuot-gio": flappyGame
  };

  window.GameMVP = {
    has: function (id) { return Boolean(games[id]); },
    mount: function (id, root, options) {
      if (!games[id]) throw new Error("Game chưa được triển khai: " + id);
      return games[id](root, options);
    }
  };
}());
