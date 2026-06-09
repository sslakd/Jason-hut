window.GAME_DIFFICULTIES = [
  { id: "de", name: "Dễ thở", detail: "Chơi thong thả để làm quen", multiplier: 1, icon: "fa-seedling" },
  { id: "trung-binh", name: "Vừa sức", detail: "Cân bằng giữa vui và thử thách", multiplier: 1.5, icon: "fa-leaf" },
  { id: "kho", name: "Khó nhằn", detail: "Cần tập trung và tính toán", multiplier: 2, icon: "fa-fire" },
  { id: "sieu-kho", name: "Căng cực", detail: "Dành cho người muốn phá giới hạn", multiplier: 3, icon: "fa-bolt" }
];

window.getDifficultyMultiplier = function (baseMultiplier, level) {
  return baseMultiplier * Math.pow(1.05, level - 1);
};

window.getEndlessDifficulty = function (baseMultiplier, progress) {
  var stage = Math.floor(Math.max(0, progress) / 5) + 1;
  var factor = Math.min(2.75, 1 + Math.log1p(Math.max(0, progress)) * 0.22);
  return {
    stage: stage,
    factor: factor,
    multiplier: baseMultiplier * factor
  };
};
