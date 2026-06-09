(function () {
  "use strict";

  window.GamePlatform.register("caro-ba", function (root, options) {
    var cells = Array(9).fill("");
    var locked = false;
    var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function winner() {
      return wins.find(function (line) {
        return cells[line[0]] && cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]];
      });
    }

    function finish() {
      var line = winner();
      if (line) {
        if (cells[line[0]] === "X") options.onWin("Bạn đã nối được ba ô.");
        else options.onLose("Máy đã nối được ba ô.");
        return true;
      }
      if (cells.every(Boolean)) {
        options.onWin("Ván hòa. Bạn đã giữ bàn không bị thua.");
        return true;
      }
      return false;
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-caro">' + cells.map(function (value, index) {
        return '<button type="button" data-cell="' + index + '" data-motion-key="caro-' + index +
          '" data-motion-state="' + value + '" class="game-caro__cell game-caro__cell--' +
          value.toLowerCase() + '" aria-label="Ô ' + (index + 1) + '">' + value + "</button>";
      }).join("") + "</div>");
    }

    function aiTurn() {
      locked = true;
      options.runtime.timeout(function () {
        var choices = cells.map(function (value, index) { return value ? -1 : index; })
          .filter(function (index) { return index >= 0; });
        var winMove = choices.find(function (index) {
          cells[index] = "O"; var result = winner(); cells[index] = ""; return result;
        });
        var blockMove = choices.find(function (index) {
          cells[index] = "X"; var result = winner(); cells[index] = ""; return result;
        });
        var pick = winMove !== undefined ? winMove : blockMove !== undefined ? blockMove :
          choices[Math.floor(Math.random() * choices.length)];
        if (pick !== undefined) cells[pick] = "O";
        locked = false;
        render();
        finish();
      }, Math.max(220, 620 / options.difficulty.multiplier));
    }

    options.runtime.listen(root, "click", function (event) {
      var cell = event.target.closest("[data-cell]");
      if (!cell || locked || cells[Number(cell.dataset.cell)]) return;
      cells[Number(cell.dataset.cell)] = "X";
      window.GameAudio.tap();
      render();
      if (!finish()) aiTurn();
    });
    options.onHint("Chạm ô trống để đặt X và nối ba ô.");
    render();
    return {};
  });
}());
