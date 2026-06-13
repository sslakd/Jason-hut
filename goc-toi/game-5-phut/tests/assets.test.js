const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const base = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(
  fs.readFileSync(path.join(base, "assets/images/manifest.js"), "utf8"),
  sandbox
);

const manifest = sandbox.window.GAME_ASSETS;
assert.ok(manifest);
assert.equal(Object.keys(manifest.games).length, 28);

Object.entries(manifest.games).forEach(([gameId, roles]) => {
  ["cover", "background", "primary"].forEach((role) => {
    assert.ok(roles[role], `${gameId} thiếu ${role}`);
    const localPath = roles[role].replace("./", "");
    assert.ok(fs.existsSync(path.join(base, localPath)), `${gameId}/${role} không tồn tại`);
  });
});

assert.equal(manifest.games["ghep-trai-cay"].fruits.length, 9);
manifest.games["ghep-trai-cay"].fruits.forEach((fruitPath) => {
  assert.ok(fs.existsSync(path.join(base, fruitPath.replace("./", ""))), `${fruitPath} không tồn tại`);
});

console.log("asset manifest: ok");
