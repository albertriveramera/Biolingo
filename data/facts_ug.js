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
    diff: 3,
    type: "numeric",
    prompt: "Approximate canonical mammalian neuronal resting membrane potential (in mV)",
    value: -70,
    unit: "mV",
    tolerance: 10,
    tags: ["biophysics", "action_potential"],
    explain: "Resting membrane potential typically sits between -65 mV and -75 mV, primarily dictated by high resting K+ permeability via two-pore domain leak channels."
  },
  {
    id: "ug-ap-003",
    unit: "u4",
    diff: 3,
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
    diff: 3,
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
    right: "Electrogenic transport of 3 Na+ out and 2 K+ into the cell per ATP molecule",
    tags: ["biophysics", "transport"],
    explain: "This maintains the steep transmembrane chemical concentration gradients that empower action potentials and secondary active transport."
  },
  {
    id: "ug-ap-006",
    unit: "u4",
    diff: 2,
    type: "sequence",
    prompt: "Chronological sequence of voltage-gated ion fluxes during an action potential",
    steps: ["Graded depolarization reaches threshold (~ -55 mV)", "Rapid opening of Nav activation m-gates (Na+ influx surge)", "Nav inactivation h-gates close; delayed rectifier Kv channels open (K+ efflux)", "Afterhyperpolarization undershoot approaching E_K", "Return to resting potential via leak conductances and pump activity"],
    tags: ["biophysics", "action_potential"],
    explain: "Nav channels activate in microseconds, inactivate via their hinged lid IFM motif, while delayed rectifier Kv channels repolarize the cell membrane."
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
    diff: 3,
    type: "definition",
    term: "Length Constant (lambda)",
    definition: "Distance over which a passive electrotonic potential decays to 1/e (approx. 37%) of its initial amplitude: lambda = sqrt(r_m / r_i)",
    tags: ["biophysics", "cable_theory"],
    explain: "Higher membrane resistance (r_m, e.g. from myelin insulation) and lower axial internal resistance (r_i, e.g. larger axon caliber) increase lambda, boosting signal spread."
  },
  {
    id: "ug-ap-010",
    unit: "u4",
    diff: 3,
    type: "definition",
    term: "Time Constant (tau)",
    definition: "Time required for a membrane potential to charge to 1 - 1/e (approx. 63%) of its steady-state value: tau = r_m * c_m",
    tags: ["biophysics", "cable_theory"],
    explain: "A longer time constant broadens temporal summation windows, allowing asynchronous synaptic potentials to summate more easily."
  },
  {
    id: "ug-ap-011",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Tetrodotoxin (TTX)",
    right: "Pufferfish toxin that selectively occludes pore of voltage-gated Na+ channels",
    tags: ["biophysics", "pharmacology"],
    explain: "TTX binds to the outer vestibule of Nav channels, completely blocking sodium current and silencing action potentials without altering Kv currents."
  },
  {
    id: "ug-ap-012",
    unit: "u4",
    diff: 2,
    type: "pair",
    left: "Tetraethylammonium (TEA)",
    right: "Quaternary ammonium cation that selectively blocks voltage-gated K+ channels",
    tags: ["biophysics", "pharmacology"],
    explain: "TEA blocks Kv channels, prolonging the action potential duration and abolishing the normal rapid repolarization phase."
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
    explain: "At the peak of the action potential overshoot, sodium conductance peaks and inactivation rapidly sets in."
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
    explain: "Sustained open state of delayed rectifier and calcium-activated K+ channels drags voltage near E_K (~ -90 mV)."
  },

  // ==========================================
  // UNIT 5: SYNAPTIC TRANSMISSION & NEUROCHEMISTRY
  // ==========================================
  {
    id: "ug-syn-001",
    unit: "u5",
    diff: 2,
    type: "definition",
    term: "Synaptotagmin-1",
    definition: "Transmembrane vesicle protein containing C2 domains that acts as the primary calcium sensor triggering rapid neurotransmitter release",
    tags: ["synapse", "snare"],
    explain: "Binding of 5 Ca2+ ions to synaptotagmin's C2A and C2B domains drives membrane insertion and forces the SNARE complex to complete full fusion."
  },
  {
    id: "ug-syn-002",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Core SNARE complex components",
    right: "Synaptobrevin/VAMP2 (vesicle), Syntaxin-1 (plasma membrane), and SNAP-25 (plasma membrane)",
    tags: ["synapse", "snare"],
    explain: "These form a tight four-helix bundle (one coil from synaptobrevin, one from syntaxin, two from SNAP-25) that bridges membranes with high mechanical torque."
  },
  {
    id: "ug-syn-003",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Botulinum Neurotoxins (BoNT)",
    right: "Cleave specific SNARE proteins (SNAP-25, syntaxin, synaptobrevin), blocking acetylcholine release",
    tags: ["synapse", "pharmacology"],
    explain: "Cleavage of the SNARE bundle disables vesicle fusion at neuromuscular junctions, causing flaccid paralysis."
  },
  {
    id: "ug-syn-004",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "AMPA Receptor",
    right: "Ionotropic glutamate receptor mediating fast excitatory sodium influx",
    tags: ["synapse", "neurotransmitters"],
    explain: "Tetrameric ligand-gated ion channels (GluA1-4) that mediate the vast majority of basal fast synaptic excitation in the CNS."
  },
  {
    id: "ug-syn-005",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "NMDA Receptor",
    right: "Coincidence detector requiring glutamate, glycine, and depolarization to dislodge pore-blocking Mg2+",
    tags: ["synapse", "neurotransmitters"],
    explain: "High permeability to Ca2+ makes NMDARs the essential molecular triggers for long-term synaptic plasticity (LTP/LTD)."
  },
  {
    id: "ug-syn-006",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "GABA-A Receptor",
    right: "Pentameric ligand-gated chloride ion channel mediating fast hyperpolarizing IPSPs",
    tags: ["synapse", "neurotransmitters"],
    explain: "Opening permits Cl- influx (if resting potential is more positive than E_Cl), hyperpolarizing or shunting the neuronal membrane."
  },
  {
    id: "ug-syn-007",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "GABA-B Receptor",
    right: "Metabotropic heterodimeric GPCR coupled to Gi/o, opening GIRK K+ channels and inhibiting Cav channels",
    tags: ["synapse", "gpcr"],
    explain: "Produces slow, prolonged inhibitory postsynaptic potentials via G-protein beta-gamma subunit interactions."
  },
  {
    id: "ug-syn-008",
    unit: "u5",
    diff: 2,
    type: "sequence",
    prompt: "Chronological sequence of chemical neurotransmission across a synapse",
    steps: ["Action potential arrives at presynaptic terminal bouton", "Voltage-gated P/Q and N-type Ca2+ channels open; local Ca2+ microdomain forms", "Ca2+ binds synaptotagmin; SNARE complex completes vesicle fusion", "Neurotransmitter diffuses across 20-30nm synaptic cleft", "Postsynaptic receptor activation triggers EPSP or IPSP", "Neurotransmitter cleared via reuptake transporters or enzymatic degradation"],
    tags: ["synapse", "biophysics"],
    explain: "Synaptic delay is typically 0.3 to 1.0 ms, driven primarily by channel opening and vesicle fusion dynamics."
  },
  {
    id: "ug-syn-009",
    unit: "u5",
    diff: 2,
    type: "diagram",
    diagram: "synapse",
    targetLabel: "Synaptic Vesicle",
    options: ["Synaptic Vesicle", "Postsynaptic Density", "Voltage-Gated Ca2+ Channel", "Neurotransmitter Transporter"],
    hint: "Identify the round membrane spheres clustered in the presynaptic terminal.",
    tags: ["synapse", "anatomy"],
    explain: "Vesicles are loaded with neurotransmitters via vesicular proton-coupled antiporters like VGLUT and VGAT."
  },
  {
    id: "ug-syn-010",
    unit: "u5",
    diff: 2,
    type: "diagram",
    diagram: "synapse",
    targetLabel: "Postsynaptic Density",
    options: ["Postsynaptic Density", "Mitochondrion", "Presynaptic Bouton", "Synaptic Cleft"],
    hint: "Identify the electron-dense protein scaffold on the receiving spine membrane.",
    tags: ["synapse", "anatomy"],
    explain: "The postsynaptic density (PSD) contains high concentrations of PSD-95, scaffolding glutamate receptors and signaling kinases."
  },
  {
    id: "ug-syn-011",
    unit: "u5",
    diff: 1,
    type: "truefalse",
    statement: "Spatial summation occurs when multiple distinct synaptic inputs arrive simultaneously at different dendritic locations on the same neuron.",
    isTrue: true,
    tags: ["synapse", "biophysics"],
    explain: "Spatial summation combines inputs dispersed in space, whereas temporal summation combines successive inputs from the same synapse in time."
  },
  {
    id: "ug-syn-012",
    unit: "u5",
    diff: 2,
    type: "cloze",
    sentence: "The primary enzyme in the synaptic cleft responsible for hydrolyzing acetylcholine into choline and acetate is {blank}.",
    answer: "Acetylcholinesterase",
    options: ["Acetylcholinesterase", "Choline acetyltransferase", "Monoamine oxidase", "Catechol-O-methyltransferase"],
    tags: ["synapse", "neurotransmitters"],
    explain: "AChE is one of the fastest enzymes known, operating near the diffusion limit to terminate cholinergic signaling in milliseconds."
  },

  // ==========================================
  // UNIT 6: CELL SIGNALING, IMMUNITY & HOMEOSTASIS
  // ==========================================
  {
    id: "ug-sig-001",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Gs protein alpha subunit",
    right: "Stimulates adenylyl cyclase, elevating intracellular cAMP and activating PKA",
    tags: ["signaling", "gpcr"],
    explain: "cAMP activates Protein Kinase A by dissociating regulatory subunits from catalytic subunits."
  },
  {
    id: "ug-sig-002",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Gq protein alpha subunit",
    right: "Activates Phospholipase C-beta (PLC), cleaving PIP2 into IP3 and DAG",
    tags: ["signaling", "gpcr"],
    explain: "IP3 diffuses to the endoplasmic reticulum to open IP3 receptors and liberate Ca2+, while membrane DAG recruits Protein Kinase C (PKC)."
  },
  {
    id: "ug-sig-003",
    unit: "u6",
    diff: 2,
    type: "sequence",
    prompt: "Arrange the canonical MAPK / ERK signaling cascade in sequential order",
    steps: ["Receptor Tyrosine Kinase autophosphorylation & Grb2-SOS recruitment", "Ras-GTP activation (small GTPase exchange)", "Raf (MAPKKK) activation and phosphorylation", "MEK1/2 (MAPKK) dual-specificity phosphorylation", "ERK1/2 (MAPK) phosphorylation and translocation to nucleus"],
    tags: ["signaling", "biomedicine"],
    explain: "The canonical Raf-MEK-ERK cascade controls cell survival, division, and neuronal transcriptional regulation."
  },
  {
    id: "ug-sig-004",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "MHC Class I molecules",
    right: "Present endogenous cytoplasmic peptides to CD8+ Cytotoxic T cells",
    tags: ["immune", "biomedicine"],
    explain: "Expressed on virtually all nucleated cells; sampled by CD8+ T cells to detect intracellular viruses or malignant transformations."
  },
  {
    id: "ug-sig-005",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "MHC Class II molecules",
    right: "Present exogenous phagocytosed peptides to CD4+ Helper T cells",
    tags: ["immune", "biomedicine"],
    explain: "Expressed primarily by professional antigen-presenting cells: dendritic cells, macrophages, and B lymphocytes."
  },
  {
    id: "ug-sig-006",
    unit: "u6",
    diff: 2,
    type: "definition",
    term: "Blood-Brain Barrier (BBB)",
    definition: "Specialized vascular interface composed of non-fenestrated brain capillary endothelial cells with tight junctions, pericytes, and astrocytic end-feet",
    tags: ["bbb", "homeostasis"],
    explain: "Claudin-5, occludin, and ZO-1 proteins form tight junctions that restrict paracellular passage to lipophilic molecules smaller than ~400 Da."
  },
  {
    id: "ug-sig-007",
    unit: "u6",
    diff: 2,
    type: "sequence",
    prompt: "Trace the endocrine feedback cascade of the Hypothalamic-Pituitary-Adrenal (HPA) axis",
    steps: ["Hypothalamus secretes Corticotropin-Releasing Hormone (CRH)", "Anterior pituitary releases Adrenocorticotropic Hormone (ACTH)", "Adrenal cortex (zona fasciculata) synthesizes and releases Cortisol", "Cortisol exerts negative feedback inhibition on hypothalamus and pituitary"],
    tags: ["homeostasis", "endocrine"],
    explain: "The HPA axis governs physiological stress responses and circadian rhythm; dysregulated feedback is implicated in depressive disorders."
  },
  {
    id: "ug-sig-008",
    unit: "u6",
    diff: 2,
    type: "truefalse",
    statement: "Mature erythrocytes (red blood cells) express abundant MHC Class I molecules on their outer membrane.",
    isTrue: false,
    falseVersion: "Mature erythrocytes lack a nucleus and do not express MHC Class I molecules.",
    tags: ["immune", "biomedicine"],
    explain: "Because mature mammalian RBCs lack nuclei and ribosomes, they do not synthesize or express MHC Class I molecules."
  },
  {
    id: "ug-ap-015",
    unit: "u4",
    diff: 3,
    type: "pair",
    left: "Hinged-Lid Inactivation (IFM Motif)",
    right: "Hydrophobic isoleucine-phenylalanine-methionine peptide loop that plugs the open pore of Nav channels",
    tags: ["biophysics", "channels"],
    explain: "Discovered by Armstrong and Bezanilla; this fast inactivation occurs within 1 millisecond of channel opening."
  },
  {
    id: "ug-ap-016",
    unit: "u4",
    diff: 3,
    type: "pair",
    left: "Rheobase",
    right: "Minimal electrical current amplitude of infinite duration required to threshold-fire an action potential",
    tags: ["biophysics", "electrophysiology"],
    explain: "Related to chronaxie, which is the minimum time needed for a current twice the rheobase strength to trigger an AP."
  },
  {
    id: "ug-syn-013",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Tyrosine Hydroxylase (TH)",
    right: "Rate-limiting enzyme converting L-tyrosine into L-DOPA in catecholamine biosynthesis",
    tags: ["neurotransmitters", "synapse"],
    explain: "Requires tetrahydrobiopterin (BH4) cofactor; inhibited by AMPT and subject to feedback end-product inhibition."
  },
  {
    id: "ug-syn-014",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Glutamine Synthetase",
    right: "Astrocytic enzyme converting recaptured glutamate into benign glutamine for neuronal shuttle",
    tags: ["synapse", "glia"],
    explain: "Part of the glutamate-glutamine cycle preventing neurotoxic extracellular glutamate build-up."
  },
  {
    id: "ug-syn-015",
    unit: "u5",
    diff: 2,
    type: "pair",
    left: "Strychnine",
    right: "Potent alkaloid antagonist of strychnine-sensitive glycine receptors in the spinal cord and brainstem",
    tags: ["synapse", "pharmacology"],
    explain: "Blocking glycine inhibition unleashes uncontrolled motor firing, causing violent tetanic convulsions."
  },
  {
    id: "ug-sig-009",
    unit: "u6",
    diff: 3,
    type: "pair",
    left: "Beta-Arrestin Recruitment",
    right: "Binds GRK-phosphorylated GPCRs to uncouple G-proteins and mediate clathrin-dependent receptor endocytosis",
    tags: ["signaling", "gpcr"],
    explain: "Drives receptor desensitization and tolerance (e.g., opioid tolerance with prolonged morphine use)."
  },
  {
    id: "ug-sig-010",
    unit: "u6",
    diff: 2,
    type: "pair",
    left: "Cytotoxic CD8+ T Lymphocyte",
    right: "Releases perforin and granzymes to induce apoptotic death of virally infected or neoplastic cells",
    tags: ["immune", "biomedicine"],
    explain: "Perforin forms pores in the target plasma membrane, permitting entry of granzyme B which cleaves procaspases."
  }
];
