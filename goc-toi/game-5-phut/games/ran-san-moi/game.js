(function () {
  "use strict";

  window.GamePlatform.register("ran-san-moi", function (root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas game-snake__canvas";
    canvas.width = 360;
    canvas.height = 480;
    root.innerHTML = '<div class="game-live-score game-live-score--right" aria-live="polite">Điểm 0 · Nhịp 1</div>' +
      '<div class="canvas-game game-snake"></div>';
    root.querySelector(".game-snake").appendChild(canvas);
    var scoreLabel = root.querySelector(".game-live-score");

    var context = canvas.getContext("2d");
    var cellSize = 24;
    var columns = 15;
    var rows = 20;
    var snake = [{ x: 7, y: 10 }, { x: 6, y: 10 }];
    var direction = { x: 1, y: 0 };
    var food = {};
    var score = 0;
    var ended = false;
    var cancelTick;

    function difficulty() {
      return options.getEndlessDifficulty(score);
    }

    function tickDelay() {
      return Math.max(58, 190 / difficulty().multiplier);
    }

    function scheduleTick() {
      if (ended) return;
      cancelTick = options.runtime.timeout(function () {
        tick();
        scheduleTick();
      }, tickDelay());
    }

    function placeFood() {
      do {
        food = {
          x: Math.floor(Math.random() * columns),
          y: Math.floor(Math.random() * rows)
        };
      } while (snake.some(function (part) { return part.x === food.x && part.y === food.y; }));
    }

    function turn(x, y) {
      if (direction.x + x === 0 && direction.y + y === 0) return;
      direction = { x: x, y: y };
    }

    function draw() {
      context.fillStyle = "#f7fbf5";
      context.fillRect(0, 0, 360, 480);
      context.fillStyle = "#d7a959";
      context.beginPath();
      context.arc(food.x * cellSize + 12, food.y * cellSize + 12, 8, 0, Math.PI * 2);
      context.fill();
      snake.forEach(function (part, index) {
        context.fillStyle = index ? "#78a67e" : "#3f6948";
        context.fillRect(part.x * cellSize + 2, part.y * cellSize + 2, 20, 20);
      });
      context.fillStyle = "#294a31";
      context.font = "600 13px sans-serif";
      context.fillText("Điểm " + score, 10, 20);
      context.textAlign = "right";
      context.fillText("Nhịp " + difficulty().stage + " · ×" + difficulty().factor.toFixed(2), 350, 20);
      context.textAlign = "left";
    }

    function tick() {
      if (ended) return;
      var head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
      };
      if (head.x < 0 || head.x >= columns || head.y < 0 || head.y >= rows ||
          snake.some(function (part) { return part.x === head.x && part.y === head.y; })) {
        ended = true;
        options.onLose({ message: "Rắn đã va chạm.", score: score });
        return;
      }
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score += 1;
        scoreLabel.textContent = "Điểm " + score + " · Nhịp " + difficulty().stage;
        placeFood();
      } else {
        snake.pop();
      }
      draw();
    }

    window.GamePlatform.gesture(canvas, {
      swipe: function (gesture) {
        if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) turn(gesture.dx > 0 ? 1 : -1, 0);
        else turn(0, gesture.dy > 0 ? 1 : -1);
      }
    }, options.runtime);
    options.runtime.listen(window, "keydown", function (event) {
      var directions = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1]
      };
      if (!directions[event.key] || options.runtime.isPaused()) return;
      event.preventDefault();
      turn(directions[event.key][0], directions[event.key][1]);
    });
    placeFood();
    draw();
    scheduleTick();
    options.onHint("Vuốt để đổi hướng. Rắn chạy nhanh dần theo số món đã ăn.");
    return {
      destroy: function () {
        if (cancelTick) cancelTick();
      }
    };
  });
}());
