(function () {
  "use strict";

  window.GamePlatform.register("ban-cung", function (root, options) {
    var canvas = document.createElement("canvas");
    canvas.className = "arcade-canvas game-aim__canvas";
    canvas.width = 360;
    canvas.height = 520;
    root.innerHTML = '<div class="game-live-score" aria-live="polite">Điểm 0 · Tên 5</div>' +
      '<div class="canvas-game game-aim"></div>';
    root.querySelector(".game-aim").appendChild(canvas);
    var label = root.querySelector(".game-live-score");
    var context = canvas.getContext("2d");
    var score = 0;
    var shots = 5;
    var targetY = 150 + ((options.level * 53) % 200);
    var targetDirection = 1;
    var wind = ((options.level * 7) % 9 - 4) * .18 * options.difficulty.multiplier;
    var arrow = null;
    var animation;
    var paused = false;
    var ended = false;

    function draw() {
      context.fillStyle = "#f7fbf5";
      context.fillRect(0, 0, 360, 520);
      context.fillStyle = "#dcebd8";
      context.fillRect(280, 45, 16, 430);
      ["#d8736c", "#f2ead6", "#e9e4f0", "#dfeee0"].forEach(function (color, ring) {
        context.beginPath();
        context.fillStyle = color;
        context.arc(288, targetY, 68 - ring * 14, 0, Math.PI * 2);
        context.fill();
      });
      context.fillStyle = "#31553a";
      context.font = "600 12px sans-serif";
      context.fillText("Gió " + (wind >= 0 ? "→ " : "← ") + Math.abs(wind).toFixed(1), 14, 24);
      context.strokeStyle = "#8b6b45";
      context.lineWidth = 5;
      context.beginPath();
      context.arc(55, 260, 40, -1.2, 1.2);
      context.stroke();
      if (arrow) {
        context.strokeStyle = "#31553a";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(55 + arrow.x, 260 + arrow.y);
        context.lineTo(82 + arrow.x, 260 + arrow.y);
        context.stroke();
      }
    }

    function finishShot(hitY) {
      var distance = Math.abs(hitY - targetY);
      var points = distance < 15 ? 10 : distance < 30 ? 7 : distance < 48 ? 4 : distance < 68 ? 1 : 0;
      score += points;
      shots -= 1;
      arrow = null;
      label.textContent = "Điểm " + score + " · Tên " + shots;
      window.GameAudio.tap();
      if (!shots) {
        ended = true;
        var targetScore = Math.min(36, 18 + Math.round(options.difficulty.multiplier * 4));
        if (score >= targetScore) options.onWin("Bạn ghi " + score + " điểm trên bia.");
        else options.onLose("Bạn ghi " + score + "/" + targetScore + " điểm cần thiết.");
      }
    }

    function shoot(power, desiredY) {
      if (ended || paused || arrow) return;
      var vx = Math.max(4.8, Math.min(9, power / 24));
      var frames = 225 / vx;
      arrow = { x: 0, y: 0, vx: vx, vy: (desiredY - 260) / frames };
      function flight() {
        if (!arrow || ended) return;
        if (paused) {
          animation = window.requestAnimationFrame(flight);
          return;
        }
        arrow.vy += wind * .018;
        arrow.x += arrow.vx;
        arrow.y += arrow.vy;
        if (55 + arrow.x >= 280) {
          var hitY = 260 + arrow.y;
          finishShot(hitY);
          draw();
          return;
        }
        draw();
        animation = window.requestAnimationFrame(flight);
      }
      flight();
    }

    function targetLoop() {
      if (!ended && !paused) {
        targetY += targetDirection * (.35 + options.difficulty.multiplier * .18);
        if (targetY < 95 || targetY > 425) targetDirection *= -1;
        draw();
      }
      if (!ended) animation = window.requestAnimationFrame(targetLoop);
    }

    window.GamePlatform.gesture(canvas, {
      swipe: function (gesture) {
        var rect = canvas.getBoundingClientRect();
        var desiredY = (gesture.endY - rect.top) * canvas.height / rect.height;
        shoot(Math.hypot(gesture.dx, gesture.dy), desiredY);
      },
      threshold: 18
    }, options.runtime);
    options.runtime.cleanup(function () { window.cancelAnimationFrame(animation); });
    options.onHint("Kéo từ cây cung về hướng muốn bắn rồi thả tay.");
    draw();
    targetLoop();
    return {
      setPaused: function (value) { paused = value; },
      destroy: function () { ended = true; }
    };
  });
}());
