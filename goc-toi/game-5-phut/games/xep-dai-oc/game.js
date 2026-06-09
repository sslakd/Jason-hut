(function () {
  "use strict";

  window.GamePlatform.register("xep-dai-oc", function (root, options) {
    var capacity = 4;
    var colors = ["coral", "amber", "mint", "sky"];
    var stacks = [
      ["coral", "mint", "amber", "sky"],
      ["sky", "coral", "mint", "amber"],
      ["amber", "sky", "coral", "mint"],
      ["mint", "amber", "sky", "coral"],
      [],
      []
    ];
    var selected = null;
    var moves = 0;

    function complete() {
      return stacks.every(function (stack) {
        return !stack.length || (stack.length === capacity && stack.every(function (color) {
          return color === stack[0];
        }));
      });
    }

    function move(from, to) {
      if (from === to || !stacks[from].length || stacks[to].length >= capacity) return;
      var color = stacks[from][stacks[from].length - 1];
      if (stacks[to].length && stacks[to][stacks[to].length - 1] !== color) return;
      stacks[to].push(stacks[from].pop());
      moves += 1;
      window.GameAudio.tap();
      render();
      if (complete()) options.onWin("Bạn đã xếp xong sau " + moves + " lượt.");
    }

    function render() {
      root.innerHTML = '<div class="game-nut-sort">' + stacks.map(function (stack, index) {
        return '<button class="game-nut-sort__post' + (selected === index ? " is-selected" : "") +
          '" data-stack="' + index + '" aria-label="Cột ' + (index + 1) + '">' +
          '<span class="game-nut-sort__rod"></span><span class="game-nut-sort__nuts">' +
          stack.map(function (color) {
            return '<i class="game-nut-sort__nut game-nut-sort__nut--' + color + '"></i>';
          }).reverse().join("") + "</span></button>";
      }).join("") + "</div>";
    }

    options.runtime.listen(root, "click", function (event) {
      var post = event.target.closest("[data-stack]");
      if (!post) return;
      var index = Number(post.dataset.stack);
      if (selected === null) {
        if (stacks[index].length) selected = index;
      } else {
        move(selected, index);
        selected = null;
      }
      render();
    });
    window.GamePlatform.gesture(root, {
      swipe: function (gesture) {
        var source = gesture.startTarget.closest("[data-stack]");
        var target = gesture.endTarget.closest && gesture.endTarget.closest("[data-stack]");
        if (source && target) move(Number(source.dataset.stack), Number(target.dataset.stack));
        selected = null;
      }
    }, options.runtime);
    options.onHint("Chạm hai cột hoặc kéo đai ốc sang cột đích.");
    render();
    return {};
  });
}());
