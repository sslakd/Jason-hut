(function () {
  "use strict";

  window.GamePlatform.register("phi-tieu", function (root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas game-aim__canvas";
    canvas.width = 360;
    canvas.height = 520;
    root.innerHTML = '<div class="game-live-score" aria-live="polite">Điểm 0 · Lượt 6</div>' +
      '<div class="canvas-game game-aim"></div>';
    root.querySelector(".game-aim").appendChild(canvas);
    var label = root.querySelector(".game-live-score");
    var context = canvas.getContext("2d");
    var center = { x: 180, y: 220 };
    var score = 0;
    var throwsLeft = 6;
    var darts = [];
    var flying = null;
    var animation;
    var ended = false;
    var paused = false;

    function draw() {
      context.fillStyle = "#f7fbf5";
      context.fillRect(0, 0, 360, 520);
      ["#31553a", "#f2ead6", "#d8736c", "#d7a959", "#78a67e"].forEach(function (color, ring) {
        context.beginPath();
        context.fillStyle = color;
        context.arc(center.x, center.y, 130 - ring * 24, 0, Math.PI * 2);
        context.fill();
      });
      darts.concat(flying ? [flying] : []).forEach(function (dart) {
        context.fillStyle = "#263f2c";
        context.beginPath();
        context.arc(dart.x, dart.y, 5, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "#263f2c";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(dart.x, dart.y);
        context.lineTo(dart.x + 20, dart.y + 28);
        context.stroke();
      });
    }

    function land(x, y) {
      var distance = Math.hypot(x - center.x, y - center.y);
      var points = distance < 20 ? 10 : distance < 45 ? 7 : distance < 70 ? 5 : distance < 100 ? 3 : distance < 130 ? 1 : 0;
      score += points;
      throwsLeft -= 1;
      darts.push({ x: x, y: y });
      flying = null;
      label.textContent = "Điểm " + score + " · Lượt " + throwsLeft;
      window.GameAudio.tap();
      if (!throwsLeft) {
        ended = true;
        var target = Math.min(46, 22 + Math.round(options.difficulty.multiplier * 5));
        if (score >= target) options.onWin("Bạn ghi " + score + " điểm phi tiêu.");
        else options.onLose("Bạn ghi " + score + "/" + target + " điểm cần thiết.");
      }
    }

    function throwDart(targetX, targetY) {
      if (ended || paused || flying) return;
      var wobble = options.difficulty.multiplier * 4;
      targetX += Math.sin(throwsLeft * 3) * wobble;
      targetY += Math.cos(throwsLeft * 2) * wobble;
      var start = { x: 315, y: 470 };
      var progress = 0;
      function flight() {
        if (ended) return;
        if (paused) {
          animation = window.requestAnimationFrame(flight);
          return;
        }
        progress = Math.min(1, progress + 1 / 22);
        var eased = 1 - Math.pow(1 - progress, 3);
        flying = {
          x: start.x + (targetX - start.x) * eased,
          y: start.y + (targetY - start.y) * eased - Math.sin(progress * Math.PI) * 70
        };
        draw();
        if (progress < 1) animation = window.requestAnimationFrame(flight);
        else {
          land(targetX, targetY);
          draw();
        }
      }
      flight();
    }

    window.GamePlatform.gesture(canvas, {
      swipe: function (gesture) {
        var rect = canvas.getBoundingClientRect();
        throwDart(
          (gesture.endX - rect.left) * canvas.width / rect.width,
          (gesture.endY - rect.top) * canvas.height / rect.height
        );
      },
      threshold: 18
    }, options.runtime);
    options.runtime.cleanup(function () { window.cancelAnimationFrame(animation); });
    options.onHint("Kéo ngược từ dưới màn hình để ngắm, thả tay để ném.");
    draw();
    return {
      setPaused: function (value) { paused = value; },
      destroy: function () { ended = true; }
    };
  });
}());
