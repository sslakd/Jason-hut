(function () {
  var enabled = localStorage.getItem("game5phut-sound") !== "off";
  var context;

  function getContext() {
    if (!context) {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) context = new AudioContext();
    }
    return context;
  }

  function tone(frequency, duration, volume, delay) {
    if (!enabled) return;
    var audio = getContext();
    if (!audio) return;
    var start = audio.currentTime + (delay || 0);
    var oscillator = audio.createOscillator();
    var gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  window.GameAudio = {
    isEnabled: function () { return enabled; },
    setEnabled: function (value) {
      enabled = value;
      localStorage.setItem("game5phut-sound", value ? "on" : "off");
      if (enabled) tone(420, 0.09, 0.025);
    },
    tap: function () { tone(360, 0.055, 0.018); },
    open: function () { tone(440, 0.08, 0.018); },
    win: function () {
      tone(440, 0.18, 0.022);
      tone(554, 0.18, 0.02, 0.09);
      tone(659, 0.24, 0.018, 0.18);
    }
  };
}());
