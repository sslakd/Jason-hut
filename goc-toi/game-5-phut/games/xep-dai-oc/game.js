(function () {
  "use strict";

  window.GamePlatform.register("xep-dai-oc", function (root, options) {
    var capacity = 4;
    var colors = ["coral", "amber", "mint", "sky"];
    var nutId = 0;
    var stacks = [
      ["coral", "mint", "amber", "sky"],
      ["sky", "coral", "mint", "amber"],
      ["amber", "sky", "coral", "mint"],
      ["mint", "amber", "sky", "coral"],
      [],
      []
    ].map(function (stack) {
      return stack.map(function (color) {
        nutId += 1;
        return { id: "nut-" + nutId, color: color };
      });
    });
    var selected = null;
    var moves = 0;

    function complete() {
      return stacks.every(function (stack) {
        return !stack.length || (stack.length === capacity && stack.every(function (color) {
          return color.color === stack[0].color;
        }));
      });
    }

    function move(from, to) {
      if (from === to || !stacks[from].length || stacks[to].length >= capacity) return;
      var nut = stacks[from][stacks[from].length - 1];
      if (stacks[to].length && stacks[to][stacks[to].length - 1].color !== nut.color) return;
      stacks[to].push(stacks[from].pop());
      moves += 1;
      window.GameAudio.tap();
      render();
      if (complete()) options.onWin("Bạn đã xếp xong sau " + moves + " lượt.");
    }

    function render() {
      window.GamePlatform.motion.render(root, '<div class="game-nut-sort">' + stacks.map(function (stack, index) {
        return '<button class="game-nut-sort__post' + (selected === index ? " is-selected" : "") +
          '" data-stack="' + index + '" data-motion-key="nut-post-' + index +
          '" aria-label="Cột ' + (index + 1) + '">' +
          '<span class="game-nut-sort__rod"></span><span class="game-nut-sort__nuts">' +
          stack.map(function (nut) {
            return '<i data-motion-key="' + nut.id + '" class="game-nut-sort__nut game-nut-sort__nut--' +
              nut.color + '"></i>';
          }).reverse().join("") + "</span></button>";
      }).join("") + "</div>", { duration: 280 });
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
