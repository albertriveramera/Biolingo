// Undergraduate Biomedicine & Neurobiology Fact Bank
// Units: u4 (Membrane Biophysics & APs), u5 (Synaptic Transmission & Neurochem), u6 (Cell Signaling & Immunity)

window.FACTS_UG = [
  // ==========================================
  // UNIT 4: MEMBRANE BIOPHYSICS & ACTION POTENTIALS
  // ==========================================
  {
    id: "ug-ap-001",
    unit: "u4",
    diff: 2,
    type: "definition",
    term: "Nernst Equation",
    definition: "Thermodynamic equation calculating the electrical equilibrium potential (E_ion) for a single permeant ion across a membrane at electrochemical equilibrium",
    tags: ["biophysics", "nernst"],
    explain: "E_ion = (RT / zF) * ln([ion]_out / [ion]_in). At 37°C for a monovalent cation, this simplifies to 61.5 * log10([ion]_out / [ion]_in) mV."
  },
  {
    id: "ug-ap-002",
    unit: "u4",
    diff: 2,
    type: "numeric",
    prompt: "Approximate canonical mammalian neuronal resting membrane potential (in mV)",
    value: -70,
    unit: "mV",
    tolerance: 10,
    tags: ["biophysics", "action_potential"],
    explain: "Resting membrane potential typically sits between -65 mV and -75 mV, primarily dictated by high resting K+ permeability via leak channels."
  },
  {
    id: "ug-ap-003",
    unit: "u4",
    diff: 2,
    type: "numeric",
    prompt: "Approximate potassium equilibrium potential (E_K) in typical mammalian neurons (in mV)",
    value: -90,
    unit: "mV",
    tolerance: 8,
    tags: ["biophysics", "nernst"],
    explain: "Because internal [K+] is ~140 mM and external [K+] is ~4-5 mM, the Nernst equilibrium potential for K+ sits near -90 mV."
  },
  {
    id: "ug-ap-004",
    unit: "u4",
    diff: 2,
    type: "numeric",
    prompt: "Approximate sodium equilibrium potential (E_Na) in typical mammalian neurons (in mV)",
    value: 60,
    unit: "mV",
    tolerance: 10,
    tags: ["biophysics", "nernst"],
    explain: "External [Na+] (~145 mM) far exceeds internal [Na+] (~12-15 mM), producing a positive reversal potential around +55 to +65 mV."
  },
  {
    id: "ug-ap-005",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Na+/K+ ATPase Pump",
    right: "Electrogenic primary active transport pumping 3 Na+ out and 2 K+ into the cell per ATP hydrolyzed",
    tags: ["biophysics", "transport"],
    explain: "Maintains steep transmembrane chemical gradients, consuming ~40% of the brain's total metabolic energy."
  },
  {
    id: "ug-ap-006",
    unit: "u4",
    diff: 2,
    type: "sequence",
    prompt: "Chronological sequence of voltage-gated ion fluxes during an action potential",
    steps: ["Depolarization reaches threshold (~ -55 mV)", "Rapid opening of Nav activation m-gates (Na+ influx surge)", "Nav inactivation h-gates close; delayed rectifier Kv channels open (K+ efflux)", "Afterhyperpolarization undershoot approaching E_K", "Return to resting potential via leak conductances and Na+/K+ pump"],
    tags: ["biophysics", "action_potential"],
    explain: "Nav channels activate in microseconds, inactivate via their hinged lid IFM motif, while Kv channels repolarize the membrane."
  },
  {
    id: "ug-ap-007",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Absolute Refractory Period",
    right: "Nav channel inactivation gates (h-gates) closed; impossible to evoke another action potential",
    tags: ["biophysics", "channels"],
    explain: "During this period, voltage-gated sodium channels have not yet reset from inactivation to the closed-activatable state."
  },
  {
    id: "ug-ap-008",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Relative Refractory Period",
    right: "Nav channels recovered but high Kv conductance elevates firing threshold",
    tags: ["biophysics", "channels"],
    explain: "A stronger suprathreshold depolarizing stimulus can trigger an action potential during the relative refractory window."
  },
  {
    id: "ug-ap-009",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Nodes of Ranvier",
    right: "Unmyelinated periodic axonal gaps packed with Nav channels enabling rapid saltatory conduction",
    tags: ["biophysics", "neuron"],
    explain: "Action potentials skip electrotonically under myelin insulation and regenerate exclusively at the Nodes of Ranvier."
  },
  {
    id: "ug-ap-010",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Tetrodotoxin (TTX)",
    right: "Pufferfish neurotoxin that selectively blocks the pore of voltage-gated Na+ channels",
    tags: ["biophysics", "pharmacology"],
    explain: "TTX occludes Nav outer vestibules, completely blocking inward Na+ current without directly affecting Kv channels."
  },
  {
    id: "ug-ap-011",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Tetraethylammonium (TEA)",
    right: "Potassium channel blocker that eliminates Kv currents and prolongs action potential repolarization",
    tags: ["biophysics", "pharmacology"],
    explain: "TEA blocks delayed rectifier potassium channels, dramatically broadening the action potential waveform."
  },
  {
    id: "ug-ap-012",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Schwann Cells vs. Oligodendrocytes",
    right: "Schwann cells myelinate single PNS internodes; Oligodendrocytes myelinate multiple CNS axons",
    tags: ["glia", "neuron"],
    explain: "Oligodendrocytes can extend processes to insulate up to 50 distinct axonal segments within the brain and spinal cord."
  },
  {
    id: "ug-ap-013",
    unit: "u4",
    diff: 2,
    type: "diagram",
    diagram: "action_potential",
    targetLabel: "Peak Overshoot",
    options: ["Peak Overshoot", "Resting Potential", "Threshold", "Afterhyperpolarization"],
    hint: "Identify the apex of the action potential curve reaching positive voltage (+30 mV).",
    tags: ["biophysics", "action_potential"],
    explain: "At the peak of the action potential overshoot, sodium conductance peaks and inactivation sets in."
  },
  {
    id: "ug-ap-014",
    unit: "u4",
    diff: 2,
    type: "diagram",
    diagram: "action_potential",
    targetLabel: "Afterhyperpolarization",
    options: ["Afterhyperpolarization", "Threshold", "Depolarization Phase", "Peak Overshoot"],
    hint: "Identify the dip where membrane voltage drops below the resting potential line.",
    tags: ["biophysics", "action_potential"],
    explain: "Sustained open state of delayed rectifier K+ channels drags voltage near E_K (~ -90 mV)."
  },

  // ==========================================
  // UNIT 5: SYNAPTIC TRANSMISSION & NEUROCHEMISTRY
  // ==========================================
  {
    id: "ug-syn-001",
    unit: "u5",
    diff: 2,
    type: "definition",
    term: "Synaptotagmin",
    definition: "Vesicle protein with C2 domains that acts as the primary calcium sensor triggering neurotransmitter release",
    tags: ["synapse", "snare"],
    explain: "Binding of calcium to synaptotagmin triggers conformational changes that force the SNARE complex to complete membrane fusion."
  },
  {
    id: "ug-syn-002",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Core SNARE Complex",
    right: "Synaptobrevin (v-SNARE), Syntaxin-1 (t-SNARE), and SNAP-25 (t-SNARE)",
    tags: ["synapse", "snare"],
    explain: "Forms a tight four-helix bundle bridging the vesicle and presynaptic plasma membrane with high mechanical force."
  },
  {
    id: "ug-syn-003",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "AMPA Receptor",
    right: "Ionotropic glutamate receptor mediating fast excitatory postsynaptic sodium influx (EPSPs)",
    tags: ["synapse", "neurotransmitters"],
    explain: "Responsible for the initial fast phase of excitatory synaptic transmission across mammalian brain synapses."
  },
  {
    id: "ug-syn-004",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "NMDA Receptor",
    right: "Coincidence detector requiring both glutamate binding and depolarization to expel pore-blocking Mg2+",
    tags: ["synapse", "neurotransmitters"],
    explain: "Conducts calcium into the postsynaptic spine, triggering intracellular signaling cascades for synaptic plasticity."
  },
  {
    id: "ug-syn-005",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "GABA-A Receptor",
    right: "Ligand-gated chloride channel mediating fast inhibitory postsynaptic potentials (IPSPs)",
    tags: ["synapse", "neurotransmitters"],
    explain: "GABA is the chief inhibitory neurotransmitter of the vertebrate CNS; GABA-A activation hyperpolarizes or shunts neurons."
  },
  {
    id: "ug-syn-006",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Acetylcholinesterase (AChE)",
    right: "Rapid synaptic cleft enzyme that hydrolyzes acetylcholine into choline and acetate",
    tags: ["synapse", "neurotransmitters"],
    explain: "Terminates cholinergic neurotransmission in milliseconds, preventing persistent muscle contraction."
  },
  {
    id: "ug-syn-007",
    unit: "u5",
    diff: 2,
    type: "sequence",
    prompt: "Chronological sequence of chemical neurotransmission across a synapse",
    steps: ["Action potential arrives at presynaptic terminal bouton", "Voltage-gated Ca2+ channels open; local Ca2+ microdomain forms", "Ca2+ binds synaptotagmin; SNARE complex completes vesicle fusion", "Neurotransmitter diffuses across synaptic cleft", "Postsynaptic receptor activation triggers EPSP or IPSP"],
    tags: ["synapse", "biophysics"],
    explain: "Synaptic delay is approximately 0.5 to 1.0 ms, largely determined by calcium influx and vesicle fusion kinetics."
  },
  {
    id: "ug-syn-008",
    unit: "u5",
    diff: 2,
    type: "diagram",
    diagram: "synapse",
    targetLabel: "Synaptic Vesicle",
    options: ["Synaptic Vesicle", "Postsynaptic Density", "Presynaptic Bouton", "Synaptic Cleft"],
    hint: "Identify the round membrane spheres clustered in the presynaptic terminal.",
    tags: ["synapse", "anatomy"],
    explain: "Synaptic vesicles store thousands of neurotransmitter molecules and dock at the presynaptic active zone."
  },
  {
    id: "ug-syn-009",
    unit: "u5",
    diff: 2,
    type: "diagram",
    diagram: "synapse",
    targetLabel: "Postsynaptic Density",
    options: ["Postsynaptic Density", "Mitochondrion", "Presynaptic Bouton", "Synaptic Cleft"],
    hint: "Identify the dense protein thickening on the receiving dendritic spine membrane.",
    tags: ["synapse", "anatomy"],
    explain: "The postsynaptic density is packed with neurotransmitter receptors, scaffolding proteins like PSD-95, and signaling kinases."
  },
  {
    id: "ug-syn-010",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Spatial Summation",
    right: "Integration of simultaneous synaptic potentials originating from different dendritic locations",
    tags: ["synapse", "biophysics"],
    explain: "Temporal summation integrates successive inputs from a single synapse arriving in rapid succession."
  },

  // ==========================================
  // UNIT 6: CELL SIGNALING, IMMUNITY & HOMEOSTASIS
  // ==========================================
  {
    id: "ug-sig-001",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Gs Protein Cascade",
    right: "Stimulates adenylyl cyclase, elevating intracellular cAMP and activating Protein Kinase A (PKA)",
    tags: ["signaling", "gpcr"],
    explain: "In contrast, Gi proteins inhibit adenylyl cyclase, lowering intracellular cAMP."
  },
  {
    id: "ug-sig-002",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Gq Protein Cascade",
    right: "Activates Phospholipase C (PLC), cleaving PIP2 into second messengers IP3 and DAG",
    tags: ["signaling", "gpcr"],
    explain: "IP3 triggers calcium release from the endoplasmic reticulum, while DAG activates Protein Kinase C (PKC)."
  },
  {
    id: "ug-sig-003",
    unit: "u6",
    diff: 2,
    type: "sequence",
    prompt: "Arrange the canonical MAPK / ERK signaling cascade in sequential order",
    steps: ["Receptor Tyrosine Kinase autophosphorylation & Grb2-SOS recruitment", "Ras-GTP small GTPase activation", "Raf kinase activation and phosphorylation", "MEK dual-specificity phosphorylation", "ERK kinase phosphorylation and nuclear translocation"],
    tags: ["signaling", "biomedicine"],
    explain: "The Raf-MEK-ERK pathway regulates gene transcription governing cellular survival and differentiation."
  },
  {
    id: "ug-sig-004",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "MHC Class I",
    right: "Presents endogenous cytoplasmic peptides to CD8+ Cytotoxic T cells on all nucleated cells",
    tags: ["immune", "biomedicine"],
    explain: "Allows the immune system to detect and destroy virally infected or cancerous cells."
  },
  {
    id: "ug-sig-005",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "MHC Class II",
    right: "Presents engulfed exogenous antigens to CD4+ Helper T cells on antigen-presenting cells",
    tags: ["immune", "biomedicine"],
    explain: "Expressed by dendritic cells, macrophages, and B cells to coordinate adaptive immune responses."
  },
  {
    id: "ug-sig-006",
    unit: "u6",
    diff: 2,
    type: "definition",
    term: "Blood-Brain Barrier (BBB)",
    definition: "Selective vascular barrier of continuous brain capillary endothelial cells with tight junctions, pericytes, and astrocytic end-feet",
    tags: ["bbb", "homeostasis"],
    explain: "Claudin and occludin tight junctions protect brain parenchyma from toxins and fluctuations in plasma composition."
  },
  {
    id: "ug-sig-007",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Hypothalamic-Pituitary-Adrenal (HPA) Axis",
    right: "Neuroendocrine cascade releasing CRH, ACTH, and Cortisol in response to physiological stress",
    tags: ["homeostasis", "endocrine"],
    explain: "Cortisol exerts negative feedback on the hypothalamus and pituitary to terminate the stress response."
  },
  {
    id: "ug-sig-008",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Hippocampus",
    right: "Medial temporal lobe structure essential for consolidating short-term into long-term declarative memories",
    tags: ["brain_gross", "anatomy"],
    explain: "Damage to the hippocampus produces profound anterograde amnesia (inability to form new declarative memories)."
  },
  {
    id: "ug-sig-009",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Amygdala",
    right: "Limbic nucleus critical for processing emotional valence, threat evaluation, and fear conditioning",
    tags: ["brain_gross", "anatomy"],
    explain: "Interacts closely with the hippocampus to modulate memory consolidation based on emotional arousal."
  },
  {
    id: "ug-sig-010",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Thalamus",
    right: "Central sensory relay hub routing incoming sensory information (except smell) to cerebral cortex",
    tags: ["brain_gross", "anatomy"],
    explain: "Relays visual input via the LGN and auditory input via the MGN to their respective cortical areas."
  }
];
