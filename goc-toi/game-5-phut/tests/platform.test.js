const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const base = path.resolve(__dirname, "..");
const sandbox = {
  console,
  Date,
  Math,
  Object,
  TypeError,
  Error,
  document: {
    elementFromPoint() { return null; }
  },
  window: {
    setTimeout,
    clearTimeout,
    GameAudio: { tap() {}, open() {} }
  }
};
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

function load(relativePath) {
  const source = fs.readFileSync(path.join(base, relativePath), "utf8");
  vm.runInContext(source, sandbox, { filename: relativePath });
}

function root() {
  return {
    inert: false,
    classList: {
      toggle() {},
      remove() {}
    }
  };
}

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function run() {
  load("config/games.js");
  load("config/difficulty.js");
  load("games/core/platform.js");
  load("games/mvp-games.js");
  [
    "caro-ba",
    "bon-quan-lien",
    "truot-so",
    "do-min",
    "lat-hinh",
    "tranh-truot",
    "ran-san-moi",
    "xep-thap"
    ,"xep-dai-oc"
    ,"son-me-cung"
    ,"khoi-sac-mau"
    ,"ghep-trai-cay"
    ,"to-du-mau"
    ,"domino"
  ].forEach((id) => load(`games/${id}/game.js`));

  const expectedIds = [
    "thoat-bai-xe",
    "xep-nuoc",
    "cat-roi",
    "dau-mau",
    "o-an-quan",
    "chim-vuot-gio",
    "caro-ba",
    "bon-quan-lien",
    "truot-so",
    "do-min",
    "lat-hinh",
    "tranh-truot",
    "ran-san-moi",
    "xep-thap"
    ,"xep-dai-oc"
    ,"son-me-cung"
    ,"khoi-sac-mau"
    ,"ghep-trai-cay"
    ,"to-du-mau"
    ,"domino"
  ];
  assert.deepEqual(
    Array.from(sandbox.window.GamePlatform.registeredIds()).sort(),
    expectedIds.sort()
  );
  assert.deepEqual(
    Array.from(sandbox.window.GAME_CATALOG)
      .filter((game) => game.mode === "endless")
      .map((game) => game.id)
      .sort(),
    ["chim-vuot-gio", "xep-thap"]
  );
  assert.deepEqual(
    Array.from(sandbox.window.GAME_CATALOG)
      .filter((game) => game.status === "mvp")
      .map((game) => game.id)
      .sort(),
    expectedIds.sort()
  );
  assert.equal(sandbox.window.getDifficultyMultiplier(2, 2), 2.1);
  assert.equal(sandbox.window.getDifficultyMultiplier(2, 3), 2.205);
  assert.deepEqual(
    JSON.parse(JSON.stringify(sandbox.window.getEndlessDifficulty(1, 0))),
    { stage: 1, factor: 1, multiplier: 1 }
  );
  assert.equal(sandbox.window.getEndlessDifficulty(1, 5).stage, 2);
  assert.equal(sandbox.window.getEndlessDifficulty(2, 25).stage, 6);
  assert.ok(sandbox.window.getEndlessDifficulty(2, 25).multiplier > 2);
  assert.ok(sandbox.window.getEndlessDifficulty(3, 100000).factor <= 2.75);

  assert.throws(
    () => sandbox.window.GamePlatform.register("caro-ba", () => ({})),
    /đã được đăng ký/
  );

  sandbox.window.GamePlatform.register("contract-invalid", () => "invalid");
  assert.throws(
    () => sandbox.window.GamePlatform.mount("contract-invalid", root(), {}),
    /lifecycle object/
  );

  let destroyedResult = 0;
  sandbox.window.GamePlatform.register("destroy-test", (gameRoot, options) => {
    options.runtime.timeout(() => options.onWin("late"), 20);
    return {};
  });
  const destroyedGame = sandbox.window.GamePlatform.mount("destroy-test", root(), {
    onWin() { destroyedResult += 1; }
  });
  destroyedGame.destroy();
  await wait(35);
  assert.equal(destroyedResult, 0);

  let pausedResult = 0;
  sandbox.window.GamePlatform.register("pause-test", (gameRoot, options) => {
    options.runtime.timeout(() => options.onWin("resumed"), 20);
    return {};
  });
  const pausedGame = sandbox.window.GamePlatform.mount("pause-test", root(), {
    onWin() { pausedResult += 1; }
  });
  pausedGame.setPaused(true);
  await wait(35);
  assert.equal(pausedResult, 0);
  pausedGame.setPaused(false);
  await wait(35);
  assert.equal(pausedResult, 1);
  pausedGame.destroy();

  let settledResult = 0;
  sandbox.window.GamePlatform.register("settled-test", (gameRoot, options) => {
    options.onWin("first");
    options.onLose("second");
    return {};
  });
  sandbox.window.GamePlatform.mount("settled-test", root(), {
    onWin() { settledResult += 1; },
    onLose() { settledResult += 1; }
  });
  assert.equal(settledResult, 1);

  console.log("platform contract: ok");
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
