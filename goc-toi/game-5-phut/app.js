(function () {
  var catalog = window.GAME_CATALOG;
  var categories = window.GAME_CATEGORIES;
  var difficulties = window.GAME_DIFFICULTIES;
  var state = {
    category: "Tất cả",
    query: "",
    selectedGame: null,
    difficulty: difficulties[0],
    level: 1,
    paused: false
  };

  var grid = document.getElementById("game-grid");
  var filters = document.getElementById("category-filters");
  var search = document.getElementById("game-search");
  var count = document.getElementById("game-count");
  var empty = document.getElementById("empty-state");
  var guideModal = document.getElementById("guide-modal");
  var difficultyModal = document.getElementById("difficulty-modal");
  var aboutModal = document.getElementById("about-modal");
  var playScreen = document.getElementById("play-screen");
  var resultModal = document.getElementById("result-modal");

  function normalize(value) {
    return value
      .toLocaleLowerCase("vi")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function icon(name) {
    return '<i class="fa-solid ' + name + '" aria-hidden="true"></i>';
  }

  function renderFilters() {
    filters.innerHTML = categories.map(function (category) {
      var active = category === state.category ? " active" : "";
      return '<button class="filter-button' + active + '" type="button" data-category="' +
        category + '">' + category + "</button>";
    }).join("");
  }

  function getVisibleGames() {
    var query = normalize(state.query.trim());
    return catalog.filter(function (game) {
      var categoryMatch = state.category === "Tất cả" || game.category === state.category;
      var queryMatch = !query || normalize(game.name + " " + game.category + " " + game.summary).includes(query);
      return categoryMatch && queryMatch;
    });
  }

  function gameCard(game) {
    return [
      '<article class="game-card">',
      '<div class="game-icon ', game.color, '">', icon(game.icon), "</div>",
      '<p class="game-category">', game.category, "</p>",
      "<h3>", game.name, "</h3>",
      '<p class="game-summary">', game.summary, "</p>",
      '<div class="card-actions">',
      '<button class="button button-primary play-button" type="button" data-game="', game.id, '">',
      'Chơi <i class="fa-solid fa-play" aria-hidden="true"></i></button>',
      '<button class="button guide-button" type="button" data-guide="', game.id,
      '" aria-label="Hướng dẫn chơi ', game.name, '" title="Hướng dẫn chơi">',
      '<i class="fa-regular fa-circle-question" aria-hidden="true"></i></button>',
      "</div></article>"
    ].join("");
  }

  function renderGames() {
    var visible = getVisibleGames();
    grid.innerHTML = visible.map(gameCard).join("");
    count.textContent = visible.length + " trò chơi";
    empty.hidden = visible.length !== 0;
  }

  function findGame(id) {
    return catalog.find(function (game) { return game.id === id; });
  }

  function openGuide(game) {
    state.selectedGame = game;
    document.getElementById("guide-icon").innerHTML = icon(game.icon);
    document.getElementById("guide-title").textContent = game.name;
    document.getElementById("guide-summary").textContent = game.summary;
    document.getElementById("guide-objective").textContent = game.objective;
    document.getElementById("guide-steps").innerHTML = game.steps.map(function (step) {
      return "<li>" + step + "</li>";
    }).join("");
    guideModal.showModal();
    window.GameAudio.open();
  }

  function openDifficulty(game) {
    state.selectedGame = game;
    document.getElementById("difficulty-game-name").textContent = game.name + " · " + game.summary;
    document.getElementById("difficulty-list").innerHTML = difficulties.map(function (difficulty) {
      return [
        '<button class="difficulty-option" type="button" data-difficulty="', difficulty.id, '">',
        icon(difficulty.icon),
        "<span><strong>", difficulty.name, "</strong><span>", difficulty.detail, "</span></span>",
        "</button>"
      ].join("");
    }).join("");
    difficultyModal.showModal();
    window.GameAudio.open();
  }

  function makeDemoBoard(game) {
    var colors = ["#cfe2ca", "#f1dfb8", "#d6e7eb", "#ead9d6", "#e3daea", "#bcd8c1"];
    var positions = [
      [14, 18, 80], [61, 12, 104], [37, 38, 92],
      [8, 64, 112], [70, 62, 76], [43, 73, 65]
    ];
    var shapes = positions.map(function (position, index) {
      var rotation = index % 2 ? "border-radius:50%" : "";
      return '<span class="demo-shape" style="left:' + position[0] + "%;top:" + position[1] +
        "%;width:" + position[2] + "px;height:" + position[2] + "px;background:" +
        colors[index] + ";" + rotation + '">' + (index === 2 ? icon(game.icon) : "") + "</span>";
    });
    return shapes.join("");
  }

  function updatePlayMeta() {
    document.getElementById("play-title").textContent = state.selectedGame.name;
    document.getElementById("play-level").textContent =
      "Màn " + state.level + " · " + state.difficulty.name;
  }

  function startGame(difficulty) {
    state.difficulty = difficulty;
    state.level = 1;
    state.paused = false;
    difficultyModal.close();
    updatePlayMeta();
    document.getElementById("demo-board").innerHTML = makeDemoBoard(state.selectedGame);
    playScreen.classList.add("active");
    playScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("playing");
    window.GameAudio.tap();
  }

  function exitGame() {
    if (resultModal.open) resultModal.close();
    playScreen.classList.remove("active");
    playScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("playing");
    state.paused = false;
    document.querySelector("#pause-play i").className = "fa-solid fa-pause";
  }

  function showWin() {
    var nextMultiplier = window.getDifficultyMultiplier(state.difficulty.multiplier, state.level + 1);
    document.getElementById("result-copy").textContent =
      "Màn sau khó hơn 5% · hệ số thử thách " + nextMultiplier.toFixed(2) + "×";
    resultModal.showModal();
    window.GameAudio.win();
  }

  filters.addEventListener("click", function (event) {
    var button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderFilters();
    renderGames();
    window.GameAudio.tap();
  });

  grid.addEventListener("click", function (event) {
    var playButton = event.target.closest("[data-game]");
    var guideButton = event.target.closest("[data-guide]");
    if (playButton) openDifficulty(findGame(playButton.dataset.game));
    if (guideButton) openGuide(findGame(guideButton.dataset.guide));
  });

  search.addEventListener("input", function () {
    state.query = search.value;
    renderGames();
  });

  document.addEventListener("keydown", function (event) {
    var tag = document.activeElement && document.activeElement.tagName;
    if (event.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && !document.body.classList.contains("playing")) {
      event.preventDefault();
      search.focus();
    }
  });

  document.addEventListener("click", function (event) {
    var closeButton = event.target.closest("[data-close]");
    if (!closeButton) return;
    document.getElementById(closeButton.dataset.close).close();
    window.GameAudio.tap();
  });

  document.getElementById("guide-play").addEventListener("click", function () {
    guideModal.close();
    openDifficulty(state.selectedGame);
  });

  document.getElementById("difficulty-list").addEventListener("click", function (event) {
    var option = event.target.closest("[data-difficulty]");
    if (!option) return;
    var difficulty = difficulties.find(function (item) { return item.id === option.dataset.difficulty; });
    startGame(difficulty);
  });

  document.getElementById("sound-toggle").addEventListener("click", function (event) {
    var enabled = !window.GameAudio.isEnabled();
    window.GameAudio.setEnabled(enabled);
    event.currentTarget.setAttribute("aria-label", enabled ? "Tắt âm thanh" : "Bật âm thanh");
    event.currentTarget.querySelector("i").className =
      enabled ? "fa-solid fa-volume-low" : "fa-solid fa-volume-xmark";
  });

  document.getElementById("about-button").addEventListener("click", function () {
    aboutModal.showModal();
    window.GameAudio.open();
  });

  document.getElementById("exit-play").addEventListener("click", exitGame);
  document.getElementById("demo-win").addEventListener("click", showWin);

  document.getElementById("pause-play").addEventListener("click", function (event) {
    state.paused = !state.paused;
    event.currentTarget.setAttribute("aria-label", state.paused ? "Tiếp tục" : "Tạm dừng");
    event.currentTarget.querySelector("i").className =
      state.paused ? "fa-solid fa-play" : "fa-solid fa-pause";
    document.getElementById("demo-board").style.opacity = state.paused ? ".45" : "1";
    window.GameAudio.tap();
  });

  document.getElementById("next-level").addEventListener("click", function () {
    state.level += 1;
    resultModal.close();
    updatePlayMeta();
    window.GameAudio.tap();
  });

  document.getElementById("finish-demo").addEventListener("click", exitGame);

  [guideModal, difficultyModal, aboutModal].forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) modal.close();
    });
  });

  var initialSound = window.GameAudio.isEnabled();
  var soundButton = document.getElementById("sound-toggle");
  soundButton.setAttribute("aria-label", initialSound ? "Tắt âm thanh" : "Bật âm thanh");
  soundButton.querySelector("i").className =
    initialSound ? "fa-solid fa-volume-low" : "fa-solid fa-volume-xmark";

  renderFilters();
  renderGames();
}());
