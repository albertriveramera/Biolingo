// Biolingo Curriculum Definition
// 4 Mastery Levels: High School, Undergraduate, Master's, PhD
// 12 Thematic Units with structured lessons and end-of-unit checkpoints

window.CURRICULUM = [
  {
    levelId: "hs",
    levelName: "High School Biology & Neuro Foundations",
    shortName: "High School",
    tagline: "Cellular building blocks, basic genetics, and macroscopic nervous system",
    badge: "🌱",
    color: "#10b981", // Emerald
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    units: [
      {
        id: "u1",
        title: "Cellular Architecture & Organelles",
        subtitle: "The living machine: membranes, mitochondria, and eukaryotic compartmentalization",
        icon: "🧫",
        color: "#10b981",
        lessons: [
          { id: "u1-l1", title: "Organelles & Energy", desc: "Mitochondria, ATP, and endoplasmic reticulum" },
          { id: "u1-l2", title: "Membranes & Transport", desc: "Phospholipid bilayers, diffusion, and active transport" },
          { id: "u1-l3", title: "Cellular Metabolism", desc: "Glycolysis, Krebs cycle, and respiration" },
          { id: "u1-l4", title: "Cell Division & Mitosis", desc: "Cell cycle, mitosis stages, and cytokinesis" },
          { id: "u1-exam", title: "Unit 1 Checkpoint", desc: "Comprehensive cell biology master challenge", isExam: true }
        ],
        tags: ["cell", "organelle", "membrane", "metabolism"]
      },
      {
        id: "u2",
        title: "DNA, Genes & Molecular Flow",
        subtitle: "The Central Dogma: from double helix to functional proteins",
        icon: "🧬",
        color: "#06b6d4",
        lessons: [
          { id: "u2-l1", title: "DNA Structure & Replication", desc: "Nucleotides, base pairs, and DNA polymerases" },
          { id: "u2-l2", title: "Transcription & RNA", desc: "mRNA, promoters, and RNA polymerase" },
          { id: "u2-l3", title: "Translation & the Genetic Code", desc: "tRNA, ribosomes, codons, and peptide synthesis" },
          { id: "u2-l4", title: "Mutations & Repair", desc: "Point mutations, frameshifts, and repair mechanisms" },
          { id: "u2-exam", title: "Unit 2 Checkpoint", desc: "Molecular genetics mastery test", isExam: true }
        ],
        tags: ["dna", "genetics", "rna", "translation"]
      },
      {
        id: "u3",
        title: "Nervous System & Reflex Fundamentals",
        subtitle: "Anatomy of neurons, basic brain lobes, and the reflex arc",
        icon: "🧠",
        color: "#8b5cf6",
        lessons: [
          { id: "u3-l1", title: "Anatomy of a Neuron", desc: "Soma, dendrites, axon hillock, and axon terminals" },
          { id: "u3-l2", title: "Brain Lobes & Gross Anatomy", desc: "Frontal, parietal, occipital, temporal, and cerebellum" },
          { id: "u3-l3", title: "The Reflex Arc & Spinal Cord", desc: "Sensory, interneuron, motor neuron pathways" },
          { id: "u3-l4", title: "Central vs. Peripheral", desc: "CNS, PNS, sympathetic vs parasympathetic tone" },
          { id: "u3-exam", title: "High School Capstone", desc: "Final examination for Level 1 mastery", isExam: true }
        ],
        tags: ["neuron", "brain_gross", "reflex", "pns"]
      }
    ]
  },
  {
    levelId: "ug",
    levelName: "Undergraduate Biomedicine & Neurobiology",
    shortName: "Undergraduate",
    tagline: "Bioelectricity, synaptic transmission, and integrative physiology",
    badge: "🔬",
    color: "#3b82f6", // Blue
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    units: [
      {
        id: "u4",
        title: "Membrane Biophysics & Action Potentials",
        subtitle: "Nernst-Goldman equations, voltage-gated ion channels, and ionic fluxes",
        icon: "⚡",
        color: "#3b82f6",
        lessons: [
          { id: "u4-l1", title: "Equilibrium Potentials", desc: "Nernst equation, Goldman-Hodgkin-Katz, Na+/K+ ATPase" },
          { id: "u4-l2", title: "Voltage-Gated Sodium & Potassium Channels", desc: "m/h gates, activation/inactivation kinetics" },
          { id: "u4-l3", title: "Phases of the Action Potential", desc: "Threshold, rising phase, overshoot, afterhyperpolarization" },
          { id: "u4-l4", title: "Propagation & Saltatory Conduction", desc: "Length constant, time constant, myelin, nodes of Ranvier" },
          { id: "u4-exam", title: "Unit 4 Checkpoint", desc: "Bioelectricity & biophysics mastery exam", isExam: true }
        ],
        tags: ["biophysics", "action_potential", "channels", "nernst"]
      },
      {
        id: "u5",
        title: "Synaptic Transmission & Neurochemistry",
        subtitle: "SNARE complexes, exocytosis, classic neurotransmitters, and postsynaptic potentials",
        icon: "🧪",
        color: "#ec4899",
        lessons: [
          { id: "u5-l1", title: "Vesicle Docking & Calcium Influx", desc: "Synaptotagmin, syntaxin, SNAP-25, synaptobrevin" },
          { id: "u5-l2", title: "Classic Neurotransmitters", desc: "Glutamate, GABA, acetylcholine, dopamine, serotonin, norepinephrine" },
          { id: "u5-l3", title: "Ionotropic vs. Metabotropic", desc: "AMPA/NMDA/GABA-A vs GPCR cascades (Gs, Gi, Gq)" },
          { id: "u5-l4", title: "EPSPs, IPSPs & Synaptic Integration", desc: "Spatial & temporal summation, shunting inhibition" },
          { id: "u5-exam", title: "Unit 5 Checkpoint", desc: "Synaptic transmission master challenge", isExam: true }
        ],
        tags: ["synapse", "neurotransmitters", "snare", "gpcr"]
      },
      {
        id: "u6",
        title: "Cell Signaling, Immunity & Homeostasis",
        subtitle: "Receptor tyrosine kinases, cytokine cascades, innate and adaptive immunity",
        icon: "🛡️",
        color: "#f59e0b",
        lessons: [
          { id: "u6-l1", title: "Intracellular Cascades", desc: "MAPK/ERK, PI3K/Akt, second messengers cAMP and IP3/DAG" },
          { id: "u6-l2", title: "Innate vs. Adaptive Immunity", desc: "Macrophages, neutrophils, B/T cell receptors, MHC I & II" },
          { id: "u6-l3", title: "Endocrine & Autonomic Homeostasis", desc: "HPA axis, cortisol, thyroid, blood pressure baroreflex" },
          { id: "u6-l4", title: "Blood-Brain Barrier & Neurovascular Unit", desc: "Endothelial tight junctions, pericytes, astrocytic end-feet" },
          { id: "u6-exam", title: "Undergraduate Capstone", desc: "Level 2 comprehensive biomedical exam", isExam: true }
        ],
        tags: ["signaling", "immune", "homeostasis", "bbb"]
      }
    ]
  },
  {
    levelId: "ms",
    levelName: "Master's Level Pharmacology & Neuropathology",
    shortName: "Master's",
    tagline: "Drug-receptor kinetics, neurodegenerative cascades, and advanced laboratory techniques",
    badge: "🎓",
    color: "#8b5cf6", // Purple/Violet
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    units: [
      {
        id: "u7",
        title: "Receptor Kinetics & Neuropharmacology",
        subtitle: "Agonism, allosteric modulators, Kd/EC50, and clinical CNS drugs",
        icon: "💊",
        color: "#8b5cf6",
        lessons: [
          { id: "u7-l1", title: "Quantitative Pharmacodynamics", desc: "Schild analysis, Kd, EC50, efficacy vs potency, spare receptors" },
          { id: "u7-l2", title: "GABAergic & Glutamatergic Pharmacology", desc: "Benzodiazepines, barbiturates, ketamine, memantine, MK-801" },
          { id: "u7-l3", title: "Monoamine Systems & Psychopharmacology", desc: "SSRIs, SNRIs, antipsychotics (D2 antagonism), amphetamines" },
          { id: "u7-l4", title: "Opioid & Endocannabinoid Systems", desc: "Mu, delta, kappa opioid receptors, CB1/CB2 retrograde signaling" },
          { id: "u7-exam", title: "Unit 7 Checkpoint", desc: "Master's pharmacology rigor test", isExam: true }
        ],
        tags: ["pharmacology", "receptors", "kinetics", "cns_drugs"]
      },
      {
        id: "u8",
        title: "Neurodegeneration & Neuropathology",
        subtitle: "Protein misfolding, mitochondrial dysfunction, neuroinflammation in AD, PD, ALS, HD",
        icon: "🥀",
        color: "#ef4444",
        lessons: [
          { id: "u8-l1", title: "Alzheimer's Disease Pathomechanism", desc: "Amyloid-beta oligomers, hyperphosphorylated tau, secretases (BACE1, presenilin)" },
          { id: "u8-l2", title: "Parkinson's Disease & Synucleinopathies", desc: "Alpha-synuclein, Lewy bodies, substantia nigra pars compacta, MPTP models" },
          { id: "u8-l3", title: "Motor Neuron Disease & Triplet Repeats", desc: "ALS (SOD1, TDP-43, C9orf72) and Huntington's polyQ expansion" },
          { id: "u8-l4", title: "Ischemia & Excitotoxicity", desc: "Glutamate spillover, NMDA Ca2+ overload, calpain activation, penumbra" },
          { id: "u8-exam", title: "Unit 8 Checkpoint", desc: "Neuropathology advanced clinical evaluation", isExam: true }
        ],
        tags: ["neuropathology", "neurodegeneration", "alzheimer", "parkinson"]
      },
      {
        id: "u9",
        title: "Biomedical & Molecular Methodologies",
        subtitle: "CRISPR-Cas9, qPCR, RNA-seq, Western blotting, confocal microscopy, and patch clamp",
        icon: "🔬",
        color: "#06b6d4",
        lessons: [
          { id: "u9-l1", title: "Gene Editing & Functional Genomics", desc: "CRISPR-Cas9, sgRNA, PAM sequences, NHEJ vs HDR, base editors" },
          { id: "u9-l2", title: "Transcriptomics & Proteomics", desc: "scRNA-seq, qPCR (Ct/delta-delta-Ct), Western blot antibodies, mass spec" },
          { id: "u9-l3", title: "Optical & Fluorescence Microscopy", desc: "Fluorophores, confocal pinholes, two-photon microscopy, FRET, STED" },
          { id: "u9-l4", title: "Electrophysiological Techniques", desc: "Whole-cell patch clamp, voltage clamp, current clamp, slice preparations" },
          { id: "u9-exam", title: "Master's Capstone", desc: "Level 3 scientific methodology examination", isExam: true }
        ],
        tags: ["methods", "crispr", "patch_clamp", "imaging"]
      }
    ]
  },
  {
    levelId: "phd",
    levelName: "PhD Frontier Neuroscience & Systems Biology",
    shortName: "PhD Frontier",
    tagline: "Synaptic plasticity mechanisms, neuroimmunology, circuit optogenetics, and computational modeling",
    badge: "👑",
    color: "#f59e0b", // Amber/Gold
    gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    units: [
      {
        id: "u10",
        title: "Synaptic Plasticity & Engram Biology",
        subtitle: "CaMKII holoenzyme, retrograde endocannabinoids, spine dynamics, and molecular engrams",
        icon: "✨",
        color: "#f59e0b",
        lessons: [
          { id: "u10-l1", title: "Molecular Cascade of Early & Late LTP", desc: "NMDAR Mg2+ unblock, CaMKII autophosphorylation (Thr286), AMPAR insertion (GluA1)" },
          { id: "u10-l2", title: "LTD & Synaptic Pruning", desc: "Calcineurin, PP1, clathrin-dependent AMPAR endocytosis, mGluR-dependent LTD" },
          { id: "u10-l3", title: "Structural Plasticity & Dendritic Spines", desc: "Actin polymerization, cofilin, Arp2/3, spine enlargement vs shrinkage" },
          { id: "u10-l4", title: "Engram Identification & Immediate Early Genes", desc: "c-Fos, Arc/Arg3.1, Egr1, optogenetic engram reactivation in memory recall" },
          { id: "u10-exam", title: "Unit 10 Checkpoint", desc: "Synaptic plasticity doctoral defense challenge", isExam: true }
        ],
        tags: ["ltp", "camkii", "plasticity", "engram"]
      },
      {
        id: "u11",
        title: "Glial Biology, Neuroepigenetics & Microenvironment",
        subtitle: "Microglial states (homeostatic vs DAM), astrocyte-neuron lactate shuttle, chromatin remodeling",
        icon: "🌌",
        color: "#ec4899",
        lessons: [
          { id: "u11-l1", title: "Microglia Surveillance & Disease States", desc: "P2Y12, CX3CR1/CX3CL1, TREM2 signaling, Disease-Associated Microglia (DAM)" },
          { id: "u11-l2", title: "Astrocytic Heterogeneity & Metabolic Coupling", desc: "ANLS (astrocyte-neuron lactate shuttle), EAAT2/GLT-1, tripartite synapse, A1/A2 phenotypes" },
          { id: "u11-l3", title: "Oligodendrocyte Myelination & Axonal Support", desc: "MOG, MBP, MCT1 lactate transport, remyelination failure" },
          { id: "u11-l4", title: "Neuroepigenetics & Gene Regulation", desc: "DNA methylation (DNMT, TET), histone acetylation (HAT/HDAC), CREB/CBP" },
          { id: "u11-exam", title: "Unit 11 Checkpoint", desc: "Glial & epigenetic systems defense", isExam: true }
        ],
        tags: ["glia", "microglia", "astrocyte", "epigenetics"]
      },
      {
        id: "u12",
        title: "Frontier Circuit Neuroengineering & Modeling",
        subtitle: "Optogenetics, chemogenetics (DREADDs), fiber photometry, connectomics, Hodgkin-Huxley models",
        icon: "⚡",
        color: "#6366f1",
        lessons: [
          { id: "u12-l1", title: "Optogenetics & Photostimulation Actuators", desc: "Channelrhodopsin-2 (ChR2), Halorhodopsin (NpHR), Arch, excitation/inhibition wavelengths" },
          { id: "u12-l2", title: "Chemogenetics & Biosensors", desc: "DREADDs (hM3Dq, hM4Di, CNO/deschloroclozapine), GCaMP genetically encoded calcium indicators" },
          { id: "u12-l3", title: "In Vivo Circuit Interrogation", desc: "Fiber photometry, miniscope imaging, multi-electrode Neuropixels arrays" },
          { id: "u12-l4", title: "Computational & Biophysical Modeling", desc: "Hodgkin-Huxley differential equations, cable equation, integrate-and-fire models" },
          { id: "u12-exam", title: "PhD Doctoral Defense", desc: "Ultimate capstone: earn the PhD Neurobiomedicine Medal", isExam: true }
        ],
        tags: ["optogenetics", "dreadds", "gcamp", "computational"]
      }
    ]
  }
];
