(function () {
  "use strict";

  window.GamePlatform.register("xep-thap", function (root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas game-tower__canvas";
    canvas.width = 360;
    canvas.height = 520;
    root.innerHTML = '<div class="canvas-game game-tower"></div><button class="tap-zone">Chạm để thả</button>';
    root.querySelector(".game-tower").appendChild(canvas);

    var context = canvas.getContext("2d");
    var blocks = [{ x: 70, width: 220, y: 480 }];
    var moving = { x: 0, width: 220, y: 442, speed: 2.2 * options.difficulty.multiplier };
    var score = 0;
    var target = 7 + Math.min(options.level, 5);
    var ended = false;
    var paused = false;
    var animation;

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
      context.fillText(score + "/" + target, 12, 22);
    }

    function drop() {
      if (ended || paused) return;
      var base = blocks[blocks.length - 1];
      var left = Math.max(base.x, moving.x);
      var right = Math.min(base.x + base.width, moving.x + moving.width);
      if (right <= left) {
        ended = true;
        options.onLose("Khối tháp đã rơi lệch.");
        return;
      }
      moving.x = left;
      moving.width = right - left;
      blocks.push({ x: moving.x, width: moving.width, y: moving.y });
      score += 1;
      if (score >= target) {
        ended = true;
        draw();
        options.onWin("Bạn đã xếp " + target + " tầng.");
        return;
      }
      moving = {
        x: 0,
        width: moving.width,
        y: moving.y - 38,
        speed: (2.2 + score * .12) * options.difficulty.multiplier
      };
    }

    function loop() {
      if (!ended && !paused) {
        moving.x += moving.speed;
        if (moving.x < 0 || moving.x + moving.width > 360) moving.speed *= -1;
      }
      draw();
      if (!ended) animation = window.requestAnimationFrame(loop);
    }

    options.runtime.listen(root, "pointerdown", function (event) {
      if (event.pointerType !== "mouse" || event.button === 0) drop();
    });
    options.runtime.cleanup(function () { window.cancelAnimationFrame(animation); });
    options.onHint("Chạm đúng lúc để thả và xếp " + target + " tầng.");
    loop();
    return {
      setPaused: function (value) { paused = value; },
      destroy: function () { ended = true; }
    };
  });
}());
