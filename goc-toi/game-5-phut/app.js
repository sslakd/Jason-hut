(function () {
  var catalog = window.GAME_CATALOG;
  var categories = window.GAME_CATEGORIES;
  var difficulties = window.GAME_DIFFICULTIES;
  var state = {
    category: "Tất cả",
    badge: null,
    query: "",
    selectedGame: null,
    difficulty: difficulties[0],
    level: 1,
    paused: false,
    result: null
  };
  var activeGame = null;

  var grid = document.getElementById("game-grid");
  var topGames = document.getElementById("top-games");
  var newGames = document.getElementById("new-games");
  var filters = document.getElementById("category-filters");
  var search = document.getElementById("game-search");
  var count = document.getElementById("game-count");
  var empty = document.getElementById("empty-state");
  var guideModal = document.getElementById("guide-modal");
  var difficultyModal = document.getElementById("difficulty-modal");
  var aboutModal = document.getElementById("about-modal");
  var comingSoonModal = document.getElementById("coming-soon-modal");
  var playScreen = document.getElementById("play-screen");
  var resultModal = document.getElementById("result-modal");
  var gameBoard = document.getElementById("game-board");

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
      var badgeMatch = !state.badge || game.badge === state.badge;
      var queryMatch = !query || normalize(game.name + " " + game.category + " " + game.summary).includes(query);
      return categoryMatch && badgeMatch && queryMatch;
    });
  }

  function gameCard(game) {
    var badge = game.badge
      ? '<span class="badge badge-' + game.badge + '">' + (game.badge === "top" ? "Top" : "New") + "</span>"
      : "";
    return [
      '<article class="game-card" data-card-game="', game.id, '">',
      badge,
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
    document.getElementById("library-title").textContent = state.badge === "top"
      ? "Game được chơi nhiều"
      : state.badge === "new" ? "Game vừa cập nhật" : "Tất cả trò chơi";
    empty.hidden = visible.length !== 0;
  }

  function renderFeaturedGames() {
    topGames.innerHTML = catalog.filter(function (game) {
      return game.badge === "top";
    }).slice(0, 2).map(gameCard).join("");
    newGames.innerHTML = catalog.filter(function (game) {
      return game.badge === "new";
    }).slice(0, 2).map(gameCard).join("");
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
    if (game.status !== "mvp" || !window.GamePlatform.has(game.id)) {
      openComingSoon(game);
      return;
    }
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

  function openComingSoon(game) {
    state.selectedGame = game;
    document.getElementById("coming-soon-copy").textContent =
      game.name + " đang được hoàn thiện. Bấm nút bên dưới để cho chúng tôi biết bạn muốn chơi trò này.";
    updateRequestCount();
    comingSoonModal.showModal();
    window.GameAudio.open();
  }

  function requestKey() {
    return "game5phut-request-" + state.selectedGame.id;
  }

  function updateRequestCount() {
    var requested = localStorage.getItem(requestKey()) === "yes";
    document.getElementById("request-count").textContent = requested
      ? "Đã ghi nhận mong muốn của bạn."
      : "Ý kiến của bạn sẽ giúp trò này được ưu tiên sớm hơn.";
    document.getElementById("request-game").disabled = requested;
    document.getElementById("request-game").innerHTML = requested
      ? '<i class="fa-solid fa-check"></i> Đã ghi nhận'
      : '<i class="fa-regular fa-heart"></i> Tôi muốn chơi game này';
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
    playScreen.classList.add("active");
    playScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("playing");
    mountCurrentGame();
    window.GameAudio.tap();
  }

  function mountCurrentGame() {
    if (activeGame) activeGame.destroy();
    gameBoard.innerHTML = "";
    gameBoard.style.opacity = "1";
    gameBoard.inert = false;
    var assets = window.GAME_ASSETS && window.GAME_ASSETS.games[state.selectedGame.id];
    ["cover", "background", "primary"].forEach(function (role) {
      var value = assets && assets[role] ? 'url("' + assets[role] + '")' : "none";
      gameBoard.style.setProperty("--asset-" + role, value);
    });
    gameBoard.dataset.gameId = state.selectedGame.id;
    state.paused = false;
    document.getElementById("pause-play").setAttribute("aria-label", "Tạm dừng");
    document.querySelector("#pause-play i").className = "fa-solid fa-pause";
    var effectiveMultiplier = window.getDifficultyMultiplier(
      state.difficulty.multiplier,
      state.level
    );
    try {
      activeGame = window.GamePlatform.mount(state.selectedGame.id, gameBoard, {
        level: state.level,
        difficulty: Object.assign({}, state.difficulty, {
          baseMultiplier: state.difficulty.multiplier,
          multiplier: effectiveMultiplier
        }),
        onHint: function (text) {
          document.getElementById("game-hint").textContent = text;
        },
        onWin: function (detail) { showResult("win", detail); },
        onLose: function (detail) { showResult("lose", detail); }
      });
    } catch (error) {
      activeGame = null;
      console.error("Không thể khởi động game " + state.selectedGame.id, error);
      gameBoard.innerHTML = [
        '<div class="game-error" role="alert">',
        '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>',
        "<strong>Game chưa thể khởi động</strong>",
        "<span>Hãy thử tải lại hoặc quay về thư viện.</span>",
        "</div>"
      ].join("");
      document.getElementById("game-hint").textContent = "Đã có lỗi riêng trong game này.";
    }
  }

  function exitGame() {
    if (resultModal.open) resultModal.close();
    if (activeGame) {
      activeGame.destroy();
      activeGame = null;
    }
    gameBoard.innerHTML = "";
    gameBoard.style.opacity = "1";
    gameBoard.inert = false;
    delete gameBoard.dataset.gameId;
    playScreen.classList.remove("active");
    playScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("playing");
    state.paused = false;
    document.querySelector("#pause-play i").className = "fa-solid fa-pause";
  }

  function showResult(type, detail) {
    state.result = type;
    var won = type === "win";
    var nextMultiplier = window.getDifficultyMultiplier(state.difficulty.multiplier, state.level + 1);
    document.getElementById("result-mark").classList.toggle("lost", !won);
    document.getElementById("result-mark").innerHTML = won
      ? '<i class="fa-solid fa-check"></i>'
      : '<i class="fa-solid fa-rotate-right"></i>';
    document.getElementById("result-eyebrow").textContent = won ? "Qua màn" : "Chưa qua màn";
    document.getElementById("result-title").textContent = won ? "Hay đấy!" : "Thử lại nhé";
    document.getElementById("result-copy").textContent = won
      ? detail + " Màn sau khó hơn 5% · hệ số " + nextMultiplier.toFixed(2) + "×."
      : detail;
    document.getElementById("next-level").hidden = !won;
    document.getElementById("retry-level").hidden = won;
    resultModal.showModal();
    if (won) window.GameAudio.win();
  }

  filters.addEventListener("click", function (event) {
    var button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    state.badge = null;
    renderFilters();
    renderGames();
    window.GameAudio.tap();
  });

  function handleGameAction(event) {
    var playButton = event.target.closest("[data-game]");
    var guideButton = event.target.closest("[data-guide]");
    var card = event.target.closest("[data-card-game]");
    if (guideButton) {
      openGuide(findGame(guideButton.dataset.guide));
      return;
    }
    if (playButton) {
      var game = findGame(playButton.dataset.game);
      if (game.status === "mvp") openDifficulty(game);
      else openComingSoon(game);
      return;
    }
    if (card) {
      var cardGame = findGame(card.dataset.cardGame);
      if (cardGame.status === "mvp") openDifficulty(cardGame);
      else openComingSoon(cardGame);
    }
  }

  grid.addEventListener("click", handleGameAction);
  topGames.addEventListener("click", handleGameAction);
  newGames.addEventListener("click", handleGameAction);

  document.addEventListener("click", function (event) {
    var seeAll = event.target.closest("[data-see-all]");
    if (!seeAll) return;
    state.badge = seeAll.dataset.seeAll;
    state.category = "Tất cả";
    state.query = "";
    search.value = "";
    renderFilters();
    renderGames();
    document.querySelector(".library").scrollIntoView({ behavior: "smooth", block: "start" });
    window.GameAudio.tap();
  });

  search.addEventListener("input", function () {
    state.query = search.value;
    state.badge = null;
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
    if (state.selectedGame.status === "mvp") openDifficulty(state.selectedGame);
    else openComingSoon(state.selectedGame);
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
  document.getElementById("restart-game").addEventListener("click", function () {
    mountCurrentGame();
    window.GameAudio.tap();
  });

  document.getElementById("pause-play").addEventListener("click", function (event) {
    state.paused = !state.paused;
    event.currentTarget.setAttribute("aria-label", state.paused ? "Tiếp tục" : "Tạm dừng");
    event.currentTarget.querySelector("i").className =
      state.paused ? "fa-solid fa-play" : "fa-solid fa-pause";
    gameBoard.style.opacity = state.paused ? ".45" : "1";
    if (activeGame) activeGame.setPaused(state.paused);
    window.GameAudio.tap();
  });

  document.getElementById("next-level").addEventListener("click", function () {
    state.level += 1;
    resultModal.close();
    updatePlayMeta();
    mountCurrentGame();
    window.GameAudio.tap();
  });

  document.getElementById("retry-level").addEventListener("click", function () {
    resultModal.close();
    mountCurrentGame();
    window.GameAudio.tap();
  });

  document.getElementById("finish-demo").addEventListener("click", exitGame);

  document.getElementById("request-game").addEventListener("click", function () {
    localStorage.setItem(requestKey(), "yes");
    updateRequestCount();
    window.GameAudio.open();
    setTimeout(function () {
      comingSoonModal.close();
      window.location.assign("./#");
    }, 450);
  });

  document.getElementById("back-home").addEventListener("click", function () {
    comingSoonModal.close();
    window.location.assign("./#");
  });

  [guideModal, difficultyModal, aboutModal, comingSoonModal].forEach(function (modal) {
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
  renderFeaturedGames();
  renderGames();
}());
