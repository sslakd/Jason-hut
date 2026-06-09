(function () {
  "use strict";

  window.GamePlatform.register("xep-thap", function (root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas game-tower__canvas";
    canvas.width = 360;
    canvas.height = 520;
    root.innerHTML = '<div class="game-live-score" aria-live="polite">Tầng 0</div>' +
      '<div class="canvas-game game-tower"></div><button class="tap-zone">Chạm để thả</button>';
    root.querySelector(".game-tower").appendChild(canvas);
    var scoreLabel = root.querySelector(".game-live-score");

    var context = canvas.getContext("2d");
    var blocks = [{ x: 70, width: 220, y: 480 }];
    var moving = { x: 0, width: 220, y: 442, speed: 2.2 * options.difficulty.multiplier };
    var score = 0;
    var ended = false;
    var paused = false;
    var animation;
    var directionChanges = 0;

    function difficulty() {
      return options.getEndlessDifficulty(score);
    }

    function draw() {
      context.fillStyle = "#f7fbf5";
      context.fillRect(0, 0, 360, 520);
      blocks.forEach(function (block, index) {
        context.fillStyle = index % 2 ? "#6e9d75" : "#8bb28f";
        context.fillRect(block.x, block.y, block.width, 32);
      });
      context.fillStyle = "#d7a959";
      context.fillRect(moving.x, moving.y, moving.width, 32);
      context.fillStyle = "#294a31";
      context.font = "600 13px sans-serif";
      context.fillText("Tầng " + score, 12, 22);
      context.textAlign = "right";
      context.fillText("Kỷ lục " + Math.max(options.bestScore, score), 348, 22);
      context.textAlign = "left";
      context.font = "500 11px sans-serif";
      context.fillText("Nhịp " + difficulty().stage + " · ×" + difficulty().factor.toFixed(2), 12, 42);
    }

    function drop() {
      if (ended || paused) return;
      var base = blocks[blocks.length - 1];
      var left = Math.max(base.x, moving.x);
      var right = Math.min(base.x + base.width, moving.x + moving.width);
      if (right <= left) {
        ended = true;
        options.onLose({ message: "Khối tháp đã rơi lệch.", score: score });
        return;
      }
      moving.x = left;
      moving.width = right - left;
      blocks.push({ x: moving.x, width: moving.width, y: moving.y });
      score += 1;
      scoreLabel.textContent = "Tầng " + score + " · Nhịp " + difficulty().stage;
      if (moving.y < 155) {
        blocks.forEach(function (block) { block.y += 38; });
      }
      moving = {
        x: score % 2 ? 360 - moving.width : 0,
        width: Math.max(28, moving.width - Math.min(4, difficulty().stage - 1)),
        y: moving.y - 38,
        speed: (score % 2 ? -1 : 1) * Math.min(9, 2.05 + difficulty().multiplier * .75)
      };
      directionChanges = 0;
    }

    function loop() {
      if (!ended && !paused) {
        moving.x += moving.speed;
        if (moving.x < 0 || moving.x + moving.width > 360) {
          moving.speed *= -1;
          moving.x = Math.max(0, Math.min(360 - moving.width, moving.x));
          directionChanges += 1;
          if (difficulty().stage >= 3 && directionChanges % Math.max(2, 5 - difficulty().stage) === 0) {
            moving.speed *= 1.04;
          }
        }
      }
      draw();
      if (!ended) animation = window.requestAnimationFrame(loop);
    }

    options.runtime.listen(root, "pointerdown", function (event) {
      if (event.pointerType !== "mouse" || event.button === 0) drop();
    });
    options.runtime.cleanup(function () { window.cancelAnimationFrame(animation); });
    options.onHint("Chạm đúng lúc để xây tháp cao nhất có thể.");
    loop();
    return {
      setPaused: function (value) { paused = value; },
      destroy: function () { ended = true; }
    };
  });
}());
