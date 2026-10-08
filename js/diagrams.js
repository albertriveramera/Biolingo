// Biolingo Interactive Vector Diagram Engine
// Renders responsive, animated SVG biomedical diagrams for visual recognition questions

(function() {
  var DIAGRAMS = {
    neuron: function(targetLabel) {
      return [
        '<svg viewBox="0 0 500 240" class="biolingo-diagram-svg" xmlns="http://www.w3.org/2000/svg">',
        '  <defs>',
        '    <linearGradient id="somaGrad" x1="0" y1="0" x2="1" y2="1">',
        '      <stop offset="0%" stop-color="#38bdf8"/>',
        '      <stop offset="100%" stop-color="#0284c7"/>',
        '    </linearGradient>',
        '    <linearGradient id="myelinGrad" x1="0" y1="0" x2="1" y2="0">',
        '      <stop offset="0%" stop-color="#f59e0b"/>',
        '      <stop offset="100%" stop-color="#d97706"/>',
        '    </linearGradient>',
        '  </defs>',
        '  <!-- Dendrites arbor -->',
        '  <g stroke="#38bdf8" stroke-width="4" stroke-linecap="round" fill="none">',
        '    <path d="M 60 70 Q 30 40 10 50 M 60 70 Q 35 80 15 90"/>',
        '    <path d="M 70 50 Q 50 20 30 15 M 70 50 Q 75 15 65 5"/>',
        '    <path d="M 90 40 Q 100 15 115 10"/>',
        '    <path d="M 50 110 Q 25 125 10 135 M 50 110 Q 30 145 25 165"/>',
        '    <path d="M 70 135 Q 55 160 50 185"/>',
        '  </g>',
        '  <!-- Axon core fiber -->',
        '  <line x1="140" y1="90" x2="420" y2="90" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>',
        '  <!-- Myelin Sheaths -->',
        '  <rect class="part-myelin" x="160" y="76" width="50" height="28" rx="6" fill="url(#myelinGrad)"/>',
        '  <rect class="part-myelin" x="225" y="76" width="50" height="28" rx="6" fill="url(#myelinGrad)"/>',
        '  <rect class="part-myelin" x="290" y="76" width="50" height="28" rx="6" fill="url(#myelinGrad)"/>',
        '  <rect class="part-myelin" x="355" y="76" width="50" height="28" rx="6" fill="url(#myelinGrad)"/>',
        '  <!-- Soma (cell body) -->',
        '  <circle class="part-soma" cx="95" cy="90" r="42" fill="url(#somaGrad)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"/>',
        '  <!-- Nucleus -->',
        '  <circle class="part-nucleus" cx="95" cy="90" r="16" fill="#1e293b" opacity="0.75"/>',
        '  <!-- Axon Hillock taper -->',
        '  <polygon points="135,76 160,84 160,96 135,104" fill="#0284c7"/>',
        '  <!-- Axon Terminal branches -->',
        '  <g stroke="#0284c7" stroke-width="4" stroke-linecap="round" fill="none">',
        '    <path d="M 420 90 Q 445 60 470 50 M 420 90 Q 450 90 480 88 M 420 90 Q 445 120 470 130"/>',
        '  </g>',
        '  <!-- Boutons -->',
        '  <circle class="part-terminal" cx="472" cy="50" r="6" fill="#10b981"/>',
        '  <circle class="part-terminal" cx="482" cy="88" r="6" fill="#10b981"/>',
        '  <circle class="part-terminal" cx="472" cy="130" r="6" fill="#10b981"/>',
        '  <!-- Target Callout Indicator -->',
        renderIndicator("neuron", targetLabel),
        '</svg>'
      ].join('\n');
    },

    synapse: function(targetLabel) {
      return [
        '<svg viewBox="0 0 500 250" class="biolingo-diagram-svg" xmlns="http://www.w3.org/2000/svg">',
        '  <defs>',
        '    <linearGradient id="preGrad" x1="0" y1="0" x2="0" y2="1">',
        '      <stop offset="0%" stop-color="#3b82f6"/>',
        '      <stop offset="100%" stop-color="#1d4ed8"/>',
        '    </linearGradient>',
        '    <linearGradient id="postGrad" x1="0" y1="0" x2="0" y2="1">',
        '      <stop offset="0%" stop-color="#8b5cf6"/>',
        '      <stop offset="100%" stop-color="#6d28d9"/>',
        '    </linearGradient>',
        '  </defs>',
        '  <!-- Presynaptic Bouton Terminal (top) -->',
        '  <path d="M 160 20 L 160 60 Q 160 130 250 130 Q 340 130 340 60 L 340 20 Z" fill="url(#preGrad)"/>',
        '  <!-- Synaptic Vesicles -->',
        '  <g fill="#ec4899" stroke="#db2777" stroke-width="1.5">',
        '    <circle cx="210" cy="75" r="9"/>',
        '    <circle cx="235" cy="65" r="9"/>',
        '    <circle cx="265" cy="70" r="9"/>',
        '    <circle cx="290" cy="80" r="9"/>',
        '    <circle cx="240" cy="98" r="9"/>',
        '    <circle cx="260" cy="102" r="9"/>',
        '  </g>',
        '  <!-- Postsynaptic Density Spine (bottom) -->',
        '  <path d="M 140 230 Q 160 160 250 160 Q 340 160 360 230 Z" fill="url(#postGrad)"/>',
        '  <!-- PSD dark thickening line -->',
        '  <path d="M 180 162 Q 250 160 320 162" stroke="#4c1d95" stroke-width="7" fill="none" stroke-linecap="round"/>',
        '  <!-- Receptors on postsynaptic membrane -->',
        '  <g fill="#10b981">',
        '    <rect x="200" y="154" width="10" height="9" rx="2"/>',
        '    <rect x="230" y="152" width="10" height="9" rx="2"/>',
        '    <rect x="260" y="152" width="10" height="9" rx="2"/>',
        '    <rect x="290" y="154" width="10" height="9" rx="2"/>',
        '  </g>',
        '  <!-- Target Callout Indicator -->',
        renderIndicator("synapse", targetLabel),
        '</svg>'
      ].join('\n');
    },

    action_potential: function(targetLabel) {
      return [
        '<svg viewBox="0 0 500 240" class="biolingo-diagram-svg" xmlns="http://www.w3.org/2000/svg">',
        '  <!-- Axes -->',
        '  <line x1="50" y1="20" x2="50" y2="210" stroke="#64748b" stroke-width="2"/>',
        '  <line x1="50" y1="210" x2="470" y2="210" stroke="#64748b" stroke-width="2"/>',
        '  <!-- Voltage Reference lines -->',
        '  <line x1="45" y1="50" x2="470" y2="50" stroke="#475569" stroke-width="1" stroke-dasharray="4"/>',
        '  <text x="12" y="54" fill="#94a3b8" font-size="11">+30 mV</text>',
        '  <line x1="45" y1="125" x2="470" y2="125" stroke="#475569" stroke-width="1" stroke-dasharray="4"/>',
        '  <text x="12" y="129" fill="#94a3b8" font-size="11">-55 mV</text>',
        '  <line x1="45" y1="150" x2="470" y2="150" stroke="#475569" stroke-width="1" stroke-dasharray="4"/>',
        '  <text x="12" y="154" fill="#94a3b8" font-size="11">-70 mV</text>',
        '  <line x1="45" y1="185" x2="470" y2="185" stroke="#475569" stroke-width="1" stroke-dasharray="4"/>',
        '  <text x="12" y="189" fill="#94a3b8" font-size="11">-90 mV</text>',
        '  <!-- The Action Potential Trace -->',
        '  <path d="M 50 150 L 140 150 Q 170 148 190 125 L 240 45 L 280 145 Q 310 188 350 188 Q 390 185 430 150 L 470 150"',
        '        stroke="#38bdf8" stroke-width="4" fill="none" stroke-linejoin="round" stroke-linecap="round"/>',
        renderIndicator("action_potential", targetLabel),
        '</svg>'
      ].join('\n');
    },

    cell: function(targetLabel) {
      return [
        '<svg viewBox="0 0 500 240" class="biolingo-diagram-svg" xmlns="http://www.w3.org/2000/svg">',
        '  <defs>',
        '    <radialGradient id="cytoGrad" cx="50%" cy="50%" r="50%">',
        '      <stop offset="0%" stop-color="#1e293b"/>',
        '      <stop offset="100%" stop-color="#0f172a"/>',
        '    </radialGradient>',
        '  </defs>',
        '  <!-- Plasma membrane cell boundary -->',
        '  <ellipse cx="250" cy="120" rx="220" ry="105" fill="url(#cytoGrad)" stroke="#10b981" stroke-width="4"/>',
        '  <!-- Nucleus -->',
        '  <ellipse cx="180" cy="120" rx="55" ry="45" fill="#3b82f6" opacity="0.85" stroke="#60a5fa" stroke-width="3"/>',
        '  <circle cx="175" cy="120" r="18" fill="#1e3a8a"/>',
        '  <!-- Mitochondria (oval with cristae) -->',
        '  <g transform="translate(340, 70) rotate(25)">',
        '    <ellipse cx="0" cy="0" rx="35" ry="18" fill="#f59e0b" stroke="#d97706" stroke-width="2.5"/>',
        '    <path d="M -22 0 Q -10 -10 0 0 Q 10 10 22 0" stroke="#78350f" stroke-width="2" fill="none"/>',
        '  </g>',
        '  <!-- Golgi apparatus -->',
        '  <g stroke="#ec4899" stroke-width="4" stroke-linecap="round" fill="none">',
        '    <path d="M 310 145 Q 330 140 350 145"/>',
        '    <path d="M 305 155 Q 330 150 355 155"/>',
        '    <path d="M 308 165 Q 330 160 352 165"/>',
        '  </g>',
        renderIndicator("cell", targetLabel),
        '</svg>'
      ].join('\n');
    }
  };

  function renderIndicator(diagramType, targetLabel) {
    var coords = {
      neuron: {
        "Soma": { x: 95, y: 90, pinY: 35 },
        "Axon Terminal": { x: 475, y: 88, pinY: 35 },
        "Myelin Sheath": { x: 250, y: 76, pinY: 35 },
        "Node of Ranvier": { x: 217, y: 90, pinY: 45 },
        "Dendrite": { x: 30, y: 35, pinY: 10 }
      },
      synapse: {
        "Synaptic Vesicle": { x: 240, y: 80, pinY: 35 },
        "Postsynaptic Density": { x: 250, y: 165, pinY: 205 },
        "Presynaptic Bouton": { x: 250, y: 50, pinY: 15 },
        "Synaptic Cleft": { x: 250, y: 145, pinY: 145 }
      },
      action_potential: {
        "Peak Overshoot": { x: 240, y: 45, pinY: 15 },
        "Afterhyperpolarization": { x: 350, y: 188, pinY: 220 },
        "Threshold": { x: 190, y: 125, pinY: 95 },
        "Resting Potential": { x: 90, y: 150, pinY: 115 }
      },
      cell: {
        "Mitochondrion": { x: 340, y: 70, pinY: 25 },
        "Nucleus": { x: 180, y: 120, pinY: 45 },
        "Golgi Apparatus": { x: 330, y: 155, pinY: 200 }
      }
    };

    var target = (coords[diagramType] && coords[diagramType][targetLabel]) || { x: 250, y: 120, pinY: 60 };
    return [
      '<!-- Animated Target Pointer Pin -->',
      '<g class="diagram-target-indicator">',
      '  <circle cx="' + target.x + '" cy="' + target.y + '" r="18" fill="none" stroke="#f43f5e" stroke-width="3" class="pulse-ring"/>',
      '  <circle cx="' + target.x + '" cy="' + target.y + '" r="6" fill="#f43f5e"/>',
      '  <line x1="' + target.x + '" y1="' + target.y + '" x2="' + target.x + '" y2="' + target.pinY + '" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="3"/>',
      '  <g transform="translate(' + (target.x - 22) + ', ' + (target.pinY - 14) + ')">',
      '    <rect width="44" height="22" rx="6" fill="#f43f5e"/>',
      '    <text x="22" y="15" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">HERE</text>',
      '  </g>',
      '</g>'
    ].join('\n');
  }

  window.BiolingoDiagrams = {
    render: function(diagramName, targetLabel) {
      if (DIAGRAMS[diagramName]) {
        return DIAGRAMS[diagramName](targetLabel);
      }
      return '<div class="diagram-fallback">Diagram: ' + diagramName + ' (' + targetLabel + ')</div>';
    }
  };
})();
