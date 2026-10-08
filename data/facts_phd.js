// PhD Frontier Neuroscience & Systems Biology Fact Bank
// Units: u10 (Synaptic Plasticity & Engrams), u11 (Glial Biology & Neuroepigenetics), u12 (Frontier Neuroengineering & Modeling)

window.FACTS_PHD = [
  // ==========================================
  // UNIT 10: SYNAPTIC PLASTICITY & ENGRAM BIOLOGY
  // ==========================================
  {
    id: "phd-plas-001",
    unit: "u10",
    diff: 4,
    type: "sequence",
    prompt: "Chronological molecular cascade of NMDAR-dependent Early Long-Term Potentiation (E-LTP)",
    steps: ["High-frequency tetanus causes persistent postsynaptic depolarization dislodging Mg2+ from NMDAR pores", "Rapid calcium influx triggers high local [Ca2+] microdomain in dendritic spine head", "Ca2+/Calmodulin binds CaMKII holoenzyme, triggering inter-subunit autophosphorylation at Thr286", "Autonomous CaMKII binds NMDA receptor GluN2B subunits and phosphorylates AMPA GluA1 at Ser831", "Exocytosis and lateral diffusion of AMPARs trapped at PSD by stargazin/PSD-95 scaffolds"],
    tags: ["ltp", "camkii", "plasticity"],
    explain: "Thr286 autophosphorylation locks CaMKII into an autonomously active state that outlasts the initial transient calcium spike, serving as a molecular memory trace."
  },
  {
    id: "phd-plas-002",
    unit: "u10",
    diff: 4,
    type: "pair",
    left: "Late-LTP (L-LTP) Requirement",
    right: "De novo gene transcription and protein synthesis orchestrated by cAMP-PKA-MAPK-CREB signaling",
    tags: ["ltp", "plasticity"],
    explain: "Unlike early-LTP which decays after 1-3 hours, late-LTP persists for days to weeks and is blocked by transcriptional inhibitors like actinomycin D or anisomycin."
  },
  {
    id: "phd-plas-003",
    unit: "u10",
    diff: 4,
    type: "pair",
    left: "Long-Term Depression (LTD) Mechanism",
    right: "Low-level prolonged Ca2+ influx activates high-affinity calcineurin (PP2B), driving PP1-mediated AMPAR dephosphorylation and clathrin-dependent endocytosis",
    tags: ["plasticity", "ltd"],
    explain: "Calcineurin has much higher affinity for Ca2+/calmodulin than CaMKII, preferentially engaging during low-frequency stimulation (e.g. 1 Hz for 15 min)."
  },
  {
    id: "phd-plas-004",
    unit: "u10",
    diff: 4,
    type: "pair",
    left: "Structural Plasticity & Actin Nucleation",
    right: "Activation of small Rho GTPases (Rac1, Cdc42) and Arp2/3 complex promotes F-actin branching and dendritic spine head enlargement",
    tags: ["plasticity", "anatomy"],
    explain: "Spine enlargement correlates linearly with increased synaptic strength and increased AMPAR slot capacity in the postsynaptic density."
  },
  {
    id: "phd-plas-005",
    unit: "u10",
    diff: 4,
    type: "definition",
    term: "Immediate Early Gene (IEG)",
    definition: "Genes transcribed transiently and rapidly within minutes of neuronal stimulation without requiring prior de novo protein synthesis (e.g. c-Fos, Arc/Arg3.1, Egr1)",
    tags: ["engram", "genetics"],
    explain: "Arc (activity-regulated cytoskeleton-associated protein) mRNA is selectively targeted to recently activated dendritic spines where it regulates AMPAR endocytosis."
  },
  {
    id: "phd-plas-006",
    unit: "u10",
    diff: 4,
    type: "pair",
    left: "Optogenetic Engram Reactivation",
    right: "Coupling immediate early gene c-Fos promoter to tTA-TRE-ChR2 allows selective light-evoked reactivation of memory traces in dentate gyrus",
    tags: ["engram", "optogenetics"],
    explain: "Pioneered by Susumu Tonegawa's lab (2012), proving that artificial optical stimulation of tagged engram ensembles is sufficient to elicit memory recall."
  },
  {
    id: "phd-plas-007",
    unit: "u10",
    diff: 4,
    type: "truefalse",
    statement: "During hippocampal CA1 LTP induction, AMPA receptors are directly phosphorylated at Ser831 by CaMKII, which enhances single-channel conductance.",
    isTrue: true,
    tags: ["ltp", "camkii"],
    explain: "Phosphorylation at Ser831 increases single-channel conductance of GluA1-containing AMPARs, while phosphorylation at Ser845 by PKA promotes surface trafficking."
  },

  // ==========================================
  // UNIT 11: GLIAL BIOLOGY, NEUROEPIGENETICS & MICROENVIRONMENT
  // ==========================================
  {
    id: "phd-glia-001",
    unit: "u11",
    diff: 4,
    type: "definition",
    term: "Astrocyte-Neuron Lactate Shuttle (ANLS)",
    definition: "Metabolic coupling hypothesis wherein astrocytic glucose/glycogen breakdown yields lactate, exported via MCT1/MCT4 and imported by neurons via MCT2 for mitochondrial oxidative respiration",
    tags: ["astrocyte", "metabolism"],
    explain: "Proposed by Pellerin and Magistretti; glutamate uptake via astrocytic GLT-1 stimulates astrocytic glycolysis and lactate extrusion to nourish firing neurons."
  },
  {
    id: "phd-glia-002",
    unit: "u11",
    diff: 4,
    type: "pair",
    left: "Homeostatic Microglial Core Signature",
    right: "High expression of P2Y12, Tmem119, HexB, and tonic CX3CR1 receptor signaling via neuronal CX3CL1 (fractalkine)",
    tags: ["microglia", "glia"],
    explain: "Under physiological conditions, resting microglia constantly survey the parenchymal microenvironment via motile ramified processes."
  },
  {
    id: "phd-glia-003",
    unit: "u11",
    diff: 4,
    type: "pair",
    left: "Disease-Associated Microglia (DAM)",
    right: "Transcriptional shift marked by downregulation of P2Y12/Tmem119 and upregulation of TREM2, ApoE, Clec7a, and Lpl",
    tags: ["microglia", "neurodegeneration"],
    explain: "Identified via single-cell RNA-seq in Alzheimer's disease mouse models; represents an evolutionary protective response attempting to compact amyloid plaques."
  },
  {
    id: "phd-glia-004",
    unit: "u11",
    diff: 4,
    type: "pair",
    left: "TET (Ten-Eleven Translocation) Dioxygenases",
    right: "Alpha-ketoglutarate- and Fe(II)-dependent enzymes that oxidize 5-methylcytosine (5mC) into 5-hydroxymethylcytosine (5hmC)",
    tags: ["epigenetics", "genetics"],
    explain: "5hmC is enriched in mature mammalian brain neurons and represents an active intermediate in DNA demethylation and transcriptional activation."
  },
  {
    id: "phd-glia-005",
    unit: "u11",
    diff: 4,
    type: "pair",
    left: "MeCP2 (Methyl-CpG Binding Protein 2)",
    right: "X-linked epigenetic reader that binds methylated DNA and recruits Sin3A/HDAC complexes; mutations cause Rett syndrome",
    tags: ["epigenetics", "genetics"],
    explain: "Loss-of-function mutations in MeCP2 cause severe developmental regression, dendritic arborization defects, and respiratory dysfunction in girls."
  },
  {
    id: "phd-glia-006",
    unit: "u11",
    diff: 4,
    type: "truefalse",
    statement: "Microglia originate embryonically from neural crest progenitor cells that migrate into the developing neural tube.",
    isTrue: false,
    falseVersion: "Microglia originate from primitive myeloid progenitors in the embryonic yolk sac and colonize the neuroepithelium early in development.",
    tags: ["microglia", "development"],
    explain: "Unlike neurons and macroglia (astrocytes, oligodendrocytes) which arise from neuroectoderm, microglia are myeloid lineage cells from the yolk sac."
  },

  // ==========================================
  // UNIT 12: FRONTIER CIRCUIT NEUROENGINEERING & MODELING
  // ==========================================
  {
    id: "phd-eng-001",
    unit: "u12",
    diff: 4,
    type: "pair",
    left: "Channelrhodopsin-2 (ChR2)",
    right: "Blue light-activated (~470 nm) non-selective cation channel from Chlamydomonas reinhardtii causing rapid neuronal depolarization",
    tags: ["optogenetics", "neuroengineering"],
    explain: "Conducts Na+, K+, and Ca2+ upon all-trans-retinal retinal isomerization, driving millisecond-precision spike generation."
  },
  {
    id: "phd-eng-002",
    unit: "u12",
    diff: 4,
    type: "pair",
    left: "Halorhodopsin (eNpHR3.0)",
    right: "Yellow/amber light-activated (~590 nm) inward chloride ion pump from Natronomonas pharaonis causing neuronal hyperpolarization",
    tags: ["optogenetics", "neuroengineering"],
    explain: "Pumps Cl- into the cell to silence neuronal firing; often multiplexed with ChR2 for bidirectional optical circuit control."
  },
  {
    id: "phd-eng-003",
    unit: "u12",
    diff: 4,
    type: "pair",
    left: "hM3Dq (Activating DREADD)",
    right: "Gq-coupled engineered human muscarinic receptor activated selectively by CNO or Deschloroclozapine (DCZ) to increase neuronal firing",
    tags: ["dreadds", "neuroengineering"],
    explain: "Triggers the PLC-IP3-Ca2+ pathway and inhibits KCNQ (M-current) potassium channels, producing sustained minutes-to-hours excitation."
  },
  {
    id: "phd-eng-004",
    unit: "u12",
    diff: 4,
    type: "pair",
    left: "hM4Di (Inhibitory DREADD)",
    right: "Gi-coupled engineered receptor activated by CNO/DCZ that opens GIRK channels and suppresses presynaptic transmitter release",
    tags: ["dreadds", "neuroengineering"],
    explain: "Used for pharmacogenetic silencing of specific neuronal sub-populations without implanting fiber optic cables."
  },
  {
    id: "phd-eng-005",
    unit: "u12",
    diff: 4,
    type: "definition",
    term: "GCaMP Biosensor",
    definition: "Genetically encoded calcium indicator engineered from circularly permuted enhanced green fluorescent protein (cpEGFP), calmodulin (CaM), and an M13 peptide",
    tags: ["gcamp", "imaging"],
    explain: "Binding of Ca2+ causes CaM to wrap around the M13 peptide, inducing a conformational change that deprotonates the cpEGFP chromophore, dramatically increasing green fluorescence."
  },
  {
    id: "phd-eng-006",
    unit: "u12",
    diff: 4,
    type: "pair",
    left: "Fiber Photometry Isosbestic Wavelength (~405 nm)",
    right: "Calcium-independent excitation control channel used to correct for movement artifacts and fluorophore photobleaching",
    tags: ["gcamp", "methods"],
    explain: "At 405 nm, GCaMP emission is unaffected by calcium concentration, providing an ideal baseline reference to subtract motion artifacts from the 470 nm calcium-dependent signal."
  },
  {
    id: "phd-eng-007",
    unit: "u12",
    diff: 4,
    type: "sequence",
    prompt: "Arrange the mathematical current components in the Hodgkin-Huxley membrane differential equation: C_m * (dV/dt) = - sum(I_ion) + I_inject",
    steps: ["Inward Sodium Current: I_Na = g_Na_max * m^3 * h * (V - E_Na)", "Outward Potassium Current: I_K = g_K_max * n^4 * (V - E_K)", "Non-specific Leak Current: I_L = g_L * (V - E_L)", "Injected Electrode Current: I_inject"],
    tags: ["computational", "biophysics"],
    explain: "Hodgkin and Huxley (1952) earned the Nobel Prize for modeling action potential dynamics with these non-linear differential equations based on squid giant axon recordings."
  },
  {
    id: "phd-eng-008",
    unit: "u12",
    diff: 4,
    type: "numeric",
    prompt: "In the Hodgkin-Huxley model, to what power is the potassium activation variable 'n' raised? (g_K = g_bar_K * n^x)",
    value: 4,
    unit: "power",
    tolerance: 0,
    tags: ["computational", "biophysics"],
    explain: "n is raised to the fourth power (n^4), reflecting the cooperative opening of four independent homologous Kv channel subunits."
  },
  {
    id: "phd-plas-008",
    unit: "u10",
    diff: 4,
    type: "pair",
    left: "Spike-Timing-Dependent Plasticity (STDP)",
    right: "Pre-before-post firing within ~20 ms window induces LTP, while post-before-pre firing induces LTD",
    tags: ["plasticity", "ltp"],
    explain: "Discovered by Markram and Bi & Poo; reflects biophysical coincidence timing of back-propagating action potentials with glutamate unblocking of NMDARs."
  },
  {
    id: "phd-plas-009",
    unit: "u10",
    diff: 4,
    type: "pair",
    left: "Synaptic Tagging and Capture",
    right: "Weak stimulation sets a local dendritic tag; capture of somatic plasticity-related proteins (PRPs) converts it into persistent late-LTP",
    tags: ["plasticity", "ltp"],
    explain: "Frey & Morris hypothesis: explains how synapse-specificity of long-term memory is maintained despite cell-wide somatic protein synthesis."
  },
  {
    id: "phd-glia-007",
    unit: "u11",
    diff: 4,
    type: "pair",
    left: "Complement-Mediated Synaptic Pruning",
    right: "C1q and C3 deposit on less active synapses, targeting them for phagocytic engulfment by microglial CR3 receptors",
    tags: ["microglia", "development"],
    explain: "Pioneered by Beth Stevens; essential for retinogeniculate circuit refinement during critical developmental periods; aberrant reactivation occurs in Alzheimer's."
  },
  {
    id: "phd-glia-008",
    unit: "u11",
    diff: 4,
    type: "pair",
    left: "Glymphatic Clearance System",
    right: "Astrocytic Aquaporin-4 (AQP4) water channels facilitate convective perivascular CSF-ISF fluid exchange clearing metabolic wastes during slow-wave sleep",
    tags: ["astrocyte", "neurodegeneration"],
    explain: "Discovered by Maiken Nedergaard; interstitial space volume expands by ~60% during deep NREM sleep, drastically accelerating amyloid and tau clearance."
  },
  {
    id: "phd-eng-009",
    unit: "u12",
    diff: 4,
    type: "pair",
    left: "Neuropixels High-Density Probes",
    right: "Silicon CMOS probes with thousands of recording sites capable of simultaneously recording hundreds of isolated single units across entire brain axes",
    tags: ["neuroengineering", "methods"],
    explain: "Revolutionized systems neuroscience by enabling simultaneous real-time recording from cortex, hippocampus, thalamus, and midbrain in awake behaving animals."
  }
];
