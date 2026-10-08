// Biolingo Web Audio Synthesizer & Haptics Engine
// Pure algorithmic sound synthesis - zero external audio assets required

(function() {
  var audioCtx = null;
  var isMuted = false;

  function getAudioContext() {
    if (!audioCtx) {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Helper to synthesize a note
  function playTone(freq, type, duration, startTime, gainLevel) {
    var ctx = getAudioContext();
    if (!ctx || isMuted) return;

    var osc = ctx.createOscillator();
    var gain = ctx.createGain();

    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(gainLevel || 0.15, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  window.BiolingoAudio = {
    init: function() {
      // Warm up on first user gesture
      var unlock = function() {
        getAudioContext();
        document.removeEventListener("touchstart", unlock);
        document.removeEventListener("click", unlock);
      };
      document.addEventListener("touchstart", unlock, { once: true, passive: true });
      document.addEventListener("click", unlock, { once: true, passive: true });
    },

    setMuted: function(muted) {
      isMuted = !!muted;
    },

    playClick: function() {
      var ctx = getAudioContext();
      if (!ctx || isMuted) return;
      var now = ctx.currentTime;
      playTone(800, "triangle", 0.04, now, 0.05);
    },

    playCorrect: function(combo) {
      var ctx = getAudioContext();
      if (!ctx || isMuted) return;

      var now = ctx.currentTime;
      var comboBoost = Math.min(10, combo || 1);
      // Pitch scales up with combo
      var baseFreq = 523.25 * Math.pow(1.05946, (comboBoost - 1) * 2); // C5 modulated upwards

      playTone(baseFreq, "sine", 0.12, now, 0.2);
      playTone(baseFreq * 1.25, "sine", 0.14, now + 0.06, 0.22); // Major 3rd
      playTone(baseFreq * 1.5, "sine", 0.22, now + 0.12, 0.25);  // Perfect 5th

      if (comboBoost >= 5) {
        // High harmonic shimmer
        playTone(baseFreq * 2.0, "triangle", 0.3, now + 0.18, 0.15);
      }
    },

    playWrong: function() {
      var ctx = getAudioContext();
      if (!ctx || isMuted) return;

      var now = ctx.currentTime;
      // Soft sympathetic descending minor tone
      playTone(260, "sawtooth", 0.15, now, 0.08);
      playTone(220, "sine", 0.28, now + 0.08, 0.12);
    },

    playComboSpark: function() {
      var ctx = getAudioContext();
      if (!ctx || isMuted) return;
      var now = ctx.currentTime;
      playTone(880, "sine", 0.08, now, 0.12);
      playTone(1174.66, "triangle", 0.15, now + 0.05, 0.15);
    },

    playLevelUp: function() {
      var ctx = getAudioContext();
      if (!ctx || isMuted) return;

      var now = ctx.currentTime;
      var notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      notes.forEach(function(freq, idx) {
        playTone(freq, "sine", 0.25, now + (idx * 0.07), 0.18);
      });
      playTone(1046.50, "triangle", 0.6, now + 0.5, 0.25);
    },

    playBadgeUnlock: function() {
      var ctx = getAudioContext();
      if (!ctx || isMuted) return;

      var now = ctx.currentTime;
      var notes = [587.33, 739.99, 880.00, 1174.66]; // D F# A D
      notes.forEach(function(freq, idx) {
        playTone(freq, "triangle", 0.2, now + (idx * 0.08), 0.18);
      });
    },

    vibrate: function(pattern) {
      if (isMuted) return;
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate(pattern);
        } catch (e) {}
      }
    }
  };

  window.BiolingoAudio.init();
})();
