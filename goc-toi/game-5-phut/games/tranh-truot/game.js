(function () {
  "use strict";

  window.GamePlatform.register("tranh-truot", function (root, options) {
    var side = options.difficulty.multiplier >= 2 ? 4 : 3;
    var board = Array.from({ length: side * side }, function (_, index) { return index; });
    var moves = 0;

    function adjacent(first, second) {
      return Math.abs(Math.floor(first / side) - Math.floor(second / side)) +
        Math.abs(first % side - second % side) === 1;
    }

    for (var shuffle = 0; shuffle < 120; shuffle += 1) {
      var emptyIndex = board.indexOf(0);
      var choices = board.map(function (_, index) { return adjacent(index, emptyIndex) ? index : -1; })
        .filter(function (index) { return index >= 0; });
      var selected = choices[Math.floor(Math.random() * choices.length)];
      [board[emptyIndex], board[selected]] = [board[selected], board[emptyIndex]];
    }

    function render() {
      root.innerHTML = '<div class="game-slide-puzzle" style="--slide-side:' + side + '">' +
        board.map(function (value, index) {
          return '<button data-slide="' + index + '" class="game-slide-puzzle__cell' +
            (!value ? " game-slide-puzzle__cell--empty" : "") + '">' + (value || "") + "</button>";
        }).join("") + "</div>";
    }

    options.runtime.listen(root, "click", function (event) {
      var tile = event.target.closest("[data-slide]");
      if (!tile) return;
      var index = Number(tile.dataset.slide);
      var emptyIndex = board.indexOf(0);
      if (!adjacent(index, emptyIndex)) return;
      [board[emptyIndex], board[index]] = [board[index], board[emptyIndex]];
      moves += 1;
      render();
      if (board.every(function (value, current) { return value === current; })) {
        options.onWin("Hoàn thành tranh sau " + moves + " lượt.");
      }
    });
    options.onHint("Chạm mảnh cạnh ô trống để đưa các số về đúng thứ tự.");
    render();
    return {};
  });
}());
