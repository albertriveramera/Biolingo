// Biolingo Mascot: Axon the Friendly Neuron
// Animated pure SVG mascot with expressive emotional states

(function() {
  function getMascotSvg(mood, size) {
    size = size || 110;
    var eyeL = '<circle cx="48" cy="56" r="6" fill="#1e293b"/>';
    var eyeR = '<circle cx="72" cy="56" r="6" fill="#1e293b"/>';
    var pupilL = '<circle cx="50" cy="54" r="2" fill="#ffffff"/>';
    var pupilR = '<circle cx="74" cy="54" r="2" fill="#ffffff"/>';
    var mouth = '<path d="M 52 68 Q 60 76 68 68" stroke="#1e293b" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
    var blush = '<circle cx="40" cy="62" r="5" fill="#f43f5e" opacity="0.4"/><circle cx="80" cy="62" r="5" fill="#f43f5e" opacity="0.4"/>';
    var glowFilter = '';
    var aura = '';

    if (mood === "cheering" || mood === "fire") {
      eyeL = '<path d="M 44 58 Q 50 50 56 58" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round"/>';
      eyeR = '<path d="M 64 58 Q 70 50 76 58" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round"/>';
      pupilL = ''; pupilR = '';
      mouth = '<path d="M 50 66 Q 60 80 70 66 Z" fill="#ef4444" stroke="#1e293b" stroke-width="2.5"/>';
      blush = '<circle cx="38" cy="64" r="7" fill="#f43f5e" opacity="0.6"/><circle cx="82" cy="64" r="7" fill="#f43f5e" opacity="0.6"/>';
      if (mood === "fire") {
        aura = '<circle cx="60" cy="60" r="48" fill="url(#fireGlow)" opacity="0.6" class="mascot-fire-aura"/>';
      }
    } else if (mood === "sympathetic") {
      eyeL = '<circle cx="48" cy="56" r="5.5" fill="#1e293b"/>';
      eyeR = '<circle cx="72" cy="56" r="5.5" fill="#1e293b"/>';
      pupilL = '<circle cx="49" cy="55" r="1.8" fill="#ffffff"/>';
      pupilR = '<circle cx="73" cy="55" r="1.8" fill="#ffffff"/>';
      mouth = '<path d="M 54 72 Q 60 67 66 72" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round"/>';
    } else if (mood === "thinking") {
      eyeL = '<circle cx="48" cy="52" r="5.5" fill="#1e293b"/>';
      eyeR = '<circle cx="72" cy="52" r="5.5" fill="#1e293b"/>';
      pupilL = '<circle cx="48" cy="50" r="1.8" fill="#ffffff"/>';
      pupilR = '<circle cx="72" cy="50" r="1.8" fill="#ffffff"/>';
      mouth = '<path d="M 56 69 Q 63 69 66 68" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round"/>';
    }

    return [
      '<svg class="axon-mascot-svg mood-' + (mood || 'idle') + '" viewBox="0 0 120 120" width="' + size + '" height="' + size + '" xmlns="http://www.w3.org/2000/svg">',
      '  <defs>',
      '    <linearGradient id="axonBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">',
      '      <stop offset="0%" stop-color="#38bdf8"/>',
      '      <stop offset="60%" stop-color="#0284c7"/>',
      '      <stop offset="100%" stop-color="#0369a1"/>',
      '    </linearGradient>',
      '    <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">',
      '      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8"/>',
      '      <stop offset="70%" stop-color="#f97316" stop-opacity="0.3"/>',
      '      <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>',
      '    </radialGradient>',
      '  </defs>',
      aura,
      '  <!-- Dendrites -->',
      '  <g class="axon-dendrites" stroke="#38bdf8" stroke-width="5" stroke-linecap="round">',
      '    <path d="M 35 35 Q 20 20 12 28" fill="none"/>',
      '    <path d="M 45 25 Q 38 10 26 12" fill="none"/>',
      '    <path d="M 60 22 Q 60 5 50 6" fill="none"/>',
      '    <path d="M 75 25 Q 85 10 95 14" fill="none"/>',
      '    <path d="M 85 35 Q 102 22 108 30" fill="none"/>',
      '    <!-- Axon tail below -->',
      '    <path d="M 60 96 Q 60 112 75 116" fill="none" stroke="#0284c7" stroke-width="4"/>',
      '  </g>',
      '  <!-- Soma (cell body) -->',
      '  <circle cx="60" cy="60" r="38" fill="url(#axonBodyGrad)" filter="drop-shadow(0 6px 12px rgba(2,132,199,0.35))"/>',
      '  <!-- Face -->',
      blush,
      eyeL, eyeR,
      pupilL, pupilR,
      mouth,
      '</svg>'
    ].join('\n');
  }

  window.BiolingoMascot = {
    render: function(mood, size) {
      return getMascotSvg(mood || "idle", size || 100);
    },

    mount: function(targetElem, mood, size) {
      if (typeof targetElem === "string") {
        targetElem = document.querySelector(targetElem);
      }
      if (targetElem) {
        targetElem.innerHTML = getMascotSvg(mood, size);
      }
    }
  };
})();
