// High School Biomedical & Neuroscience Fact Bank (Calibrated Foundations)
// Units: u1 (Cellular Architecture & Organelles), u2 (DNA, Genes & Flow), u3 (Nervous System & Reflexes)

window.FACTS_HS = [
  // ==========================================
  // UNIT 1: CELLULAR ARCHITECTURE & ORGANELLES
  // ==========================================
  {
    id: "hs-cell-001",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Mitochondria",
    definition: "The 'powerhouse of the cell' that produces usable energy (ATP) through cellular respiration",
    tags: ["organelle", "cell"],
    explain: "Mitochondria convert nutrients and oxygen into ATP, the primary energy currency cells use to perform work."
  },
  {
    id: "hs-cell-002",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Nucleus",
    definition: "The control center of a eukaryotic cell that contains its genetic material (DNA)",
    tags: ["organelle", "cell"],
    explain: "The nucleus is enclosed by a protective nuclear membrane and directs all cell activities by storing instructions for making proteins."
  },
  {
    id: "hs-cell-003",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Ribosome",
    definition: "Tiny cellular structures responsible for assembling proteins by reading genetic code",
    tags: ["organelle", "translation"],
    explain: "Ribosomes can float freely in the cytoplasm or attach to the endoplasmic reticulum to make proteins."
  },
  {
    id: "hs-cell-004",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Cell Membrane",
    definition: "A flexible, selectively permeable outer barrier that controls what enters and exits the cell",
    tags: ["membrane", "cell"],
    explain: "Also called the plasma membrane, it lets essential nutrients in while keeping harmful substances out."
  },
  {
    id: "hs-cell-005",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Cytoplasm",
    definition: "The jelly-like fluid inside a cell that surrounds and supports all the organelles",
    tags: ["cell", "organelle"],
    explain: "Cytoplasm is mostly water and dissolved salts, giving the cell its shape and allowing materials to move around."
  },
  {
    id: "hs-cell-006",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Chloroplast",
    definition: "Green plant organelle that captures sunlight to produce glucose sugar via photosynthesis",
    tags: ["organelle", "cell"],
    explain: "Chloroplasts contain chlorophyll pigment and are found in plant cells and algae, but NEVER in animal cells."
  },
  {
    id: "hs-cell-007",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Endoplasmic Reticulum",
    definition: "A network of folded membrane channels that helps synthesize and transport proteins and lipids",
    tags: ["organelle", "cell"],
    explain: "Rough ER is covered with ribosomes for protein production; Smooth ER helps make lipids and detoxify wastes."
  },
  {
    id: "hs-cell-008",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Golgi Body (Apparatus)",
    definition: "An organelle that modifies, sorts, and packages proteins for delivery inside or outside the cell",
    tags: ["organelle", "cell"],
    explain: "Often compared to a post office, the Golgi apparatus packages cellular products into vesicles for shipment."
  },
  {
    id: "hs-cell-009",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Lysosome",
    definition: "The cell's cleanup crew, containing digestive enzymes to break down old cell parts and waste",
    tags: ["organelle", "cell"],
    explain: "Lysosomes act as the recycling and waste-disposal system of animal cells."
  },
  {
    id: "hs-cell-010",
    unit: "u1",
    diff: 1,
    type: "pair",
    left: "Diffusion",
    right: "Passive movement of particles from an area of higher to lower concentration",
    tags: ["membrane", "transport"],
    explain: "Diffusion happens naturally without the cell needing to spend any energy."
  },
  {
    id: "hs-cell-011",
    unit: "u1",
    diff: 1,
    type: "pair",
    left: "Osmosis",
    right: "The diffusion of water molecules across a selectively permeable membrane",
    tags: ["membrane", "transport"],
    explain: "Water moves across membranes toward areas with higher solute concentrations to balance them out."
  },
  {
    id: "hs-cell-012",
    unit: "u1",
    diff: 1,
    type: "pair",
    left: "Plant Cell Only",
    right: "Features a rigid cellulose cell wall and green chloroplasts",
    tags: ["cell", "organelle"],
    explain: "Animal cells lack both cell walls and chloroplasts, allowing animal cells to be flexible."
  },
  {
    id: "hs-cell-013",
    unit: "u1",
    diff: 1,
    type: "pair",
    left: "Prokaryote",
    right: "Simple unicellular organism (like bacteria) that lacks a membrane-bound nucleus",
    tags: ["cell", "genetics"],
    explain: "Eukaryotes (like plants, animals, and fungi) have a true nucleus, while prokaryotes have free-floating DNA."
  },
  {
    id: "hs-cell-014",
    unit: "u1",
    diff: 1,
    type: "sequence",
    prompt: "Arrange the standard stages of cell division (Mitosis) in correct order:",
    steps: ["Prophase (Chromosomes condense)", "Metaphase (Chromosomes line up in the center)", "Anaphase (Sister chromatids pull apart)", "Telophase (Two new nuclei form)"],
    tags: ["cell", "mitosis"],
    explain: "Remember PMAT: Prophase, Metaphase (Middle), Anaphase (Apart), and Telophase (Two nuclei)."
  },
  {
    id: "hs-cell-015",
    unit: "u1",
    diff: 1,
    type: "truefalse",
    statement: "Plant cells contain chloroplasts for photosynthesis, but animal cells do not.",
    isTrue: true,
    tags: ["cell", "organelle"],
    explain: "Animals must consume food for energy, while plants make their own food in chloroplasts."
  },
  {
    id: "hs-cell-016",
    unit: "u1",
    diff: 1,
    type: "truefalse",
    statement: "The nucleus is found in bacteria and all other prokaryotic cells.",
    isTrue: false,
    falseVersion: "The nucleus is found in eukaryotic cells, but bacteria lack a nucleus.",
    tags: ["cell", "organelle"],
    explain: "Bacteria are prokaryotes; their circular DNA floats freely in the cytoplasm in a region called the nucleoid."
  },
  {
    id: "hs-cell-017",
    unit: "u1",
    diff: 1,
    type: "cloze",
    sentence: "The primary energy-carrying molecule produced by mitochondria is {blank}.",
    answer: "ATP",
    options: ["ATP", "DNA", "Glucose", "Hemoglobin"],
    tags: ["metabolism", "cell"],
    explain: "ATP stands for adenosine triphosphate, which stores and releases energy for cellular activities."
  },
  {
    id: "hs-cell-018",
    unit: "u1",
    diff: 1,
    type: "diagram",
    diagram: "cell",
    targetLabel: "Mitochondrion",
    options: ["Mitochondrion", "Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"],
    hint: "Identify the oval powerhouse organelle with folded inner membranes.",
    tags: ["organelle", "cell"],
    explain: "Mitochondria have folded inner cristae membranes to maximize surface area for energy production."
  },
  {
    id: "hs-cell-019",
    unit: "u1",
    diff: 1,
    type: "diagram",
    diagram: "cell",
    targetLabel: "Nucleus",
    options: ["Nucleus", "Mitochondrion", "Lysosome", "Cell Membrane"],
    hint: "Identify the large central spherical organelle containing genetic instructions.",
    tags: ["organelle", "cell"],
    explain: "The nucleus is the largest prominent organelle in most eukaryotic cells."
  },

  // ==========================================
  // UNIT 2: DNA, GENES & MOLECULAR FLOW
  // ==========================================
  {
    id: "hs-dna-001",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "DNA (Deoxyribonucleic Acid)",
    definition: "The double-helix molecule that stores an organism's genetic instructions and traits",
    tags: ["dna", "genetics"],
    explain: "DNA consists of two strands of nucleotides twisted into a spiral staircase called a double helix."
  },
  {
    id: "hs-dna-002",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "Gene",
    definition: "A specific section of DNA that codes for a functional protein or hereditary trait",
    tags: ["genetics", "dna"],
    explain: "Humans have around 20,000 genes located along our chromosomes."
  },
  {
    id: "hs-dna-003",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "Chromosome",
    definition: "A tightly coiled structure of DNA and proteins found inside the cell nucleus",
    tags: ["genetics", "dna"],
    explain: "Human body cells normally have 46 chromosomes organized into 23 pairs (one set from each parent)."
  },
  {
    id: "hs-dna-004",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "Adenine (A) in DNA pairs with",
    right: "Thymine (T)",
    tags: ["dna", "genetics"],
    explain: "In DNA, Adenine always pairs with Thymine, and Cytosine always pairs with Guanine (A-T, C-G)."
  },
  {
    id: "hs-dna-005",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "Guanine (G) in DNA pairs with",
    right: "Cytosine (C)",
    tags: ["dna", "genetics"],
    explain: "Guanine and Cytosine form three hydrogen bonds together in the double helix."
  },
  {
    id: "hs-dna-006",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "RNA vs DNA difference",
    right: "RNA has Uracil (U) instead of Thymine (T) and is single-stranded",
    tags: ["rna", "dna"],
    explain: "RNA uses ribose sugar and Uracil (U), while DNA uses deoxyribose sugar and Thymine (T)."
  },
  {
    id: "hs-dna-007",
    unit: "u2",
    diff: 1,
    type: "sequence",
    prompt: "Trace the flow of genetic information (The Central Dogma):",
    steps: ["DNA stores master genetic code", "Transcription copies code into mRNA", "mRNA travels to the ribosome", "Translation reads codons to build a Protein"],
    tags: ["genetics", "translation"],
    explain: "The Central Dogma states: DNA ➔ RNA ➔ Protein. Proteins then perform vital work throughout the body."
  },
  {
    id: "hs-dna-008",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "Codon",
    definition: "A group of 3 consecutive mRNA bases that codes for a specific amino acid",
    tags: ["translation", "rna"],
    explain: "For example, the codon AUG codes for the amino acid methionine and signals the start of protein synthesis."
  },
  {
    id: "hs-dna-009",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "Mutation",
    definition: "A change in the nucleotide sequence of DNA that can alter protein structure",
    tags: ["genetics", "mutation"],
    explain: "Mutations can be beneficial, neutral, or harmful, and are the primary source of genetic variation in evolution."
  },
  {
    id: "hs-dna-010",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "Human Body Cell Chromosomes",
    right: "46 chromosomes (23 matched pairs)",
    tags: ["genetics", "dna"],
    explain: "Human sex cells (sperm and egg) contain only 23 single chromosomes, so fertilization restores the 46 total."
  },
  {
    id: "hs-dna-011",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "Dominant Allele",
    right: "A gene version that expresses its trait even if only one copy is present (e.g. Bb)",
    tags: ["genetics", "traits"],
    explain: "A recessive trait only shows up when an individual inherits two copies of the recessive allele (e.g. bb)."
  },
  {
    id: "hs-dna-012",
    unit: "u2",
    diff: 1,
    type: "truefalse",
    statement: "In DNA, adenine always pairs with cytosine.",
    isTrue: false,
    falseVersion: "In DNA, adenine always pairs with thymine.",
    tags: ["dna", "genetics"],
    explain: "Base pairing rules: A always pairs with T, and C always pairs with G."
  },
  {
    id: "hs-dna-013",
    unit: "u2",
    diff: 1,
    type: "truefalse",
    statement: "Proteins are long chains assembled from smaller chemical building blocks called amino acids.",
    isTrue: true,
    tags: ["translation", "genetics"],
    explain: "There are 20 common amino acids that combine in various sequences to build thousands of different proteins."
  },
  {
    id: "hs-dna-014",
    unit: "u2",
    diff: 1,
    type: "cloze",
    sentence: "The process of copying genetic information from DNA into messenger RNA is called {blank}.",
    answer: "Transcription",
    options: ["Transcription", "Translation", "Replication", "Fermentation"],
    tags: ["genetics", "rna"],
    explain: "Transcription takes place inside the cell nucleus, creating an mRNA copy that can travel out to ribosomes."
  },

  // ==========================================
  // UNIT 3: NERVOUS SYSTEM & REFLEX FUNDAMENTALS
  // ==========================================
  {
    id: "hs-neu-001",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Neuron",
    definition: "A specialized nerve cell that sends and receives electrical and chemical messages",
    tags: ["neuron", "anatomy"],
    explain: "Neurons are the fundamental communicating building blocks of the brain and entire nervous system."
  },
  {
    id: "hs-neu-002",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Dendrite",
    definition: "Branch-like projections of a neuron that receive signals from neighboring neurons",
    tags: ["neuron", "anatomy"],
    explain: "Dendrites listen to other cells, picking up incoming chemical signals and carrying them to the cell body."
  },
  {
    id: "hs-neu-003",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Axon",
    definition: "The long extension of a neuron that carries electrical impulses away toward other cells",
    tags: ["neuron", "anatomy"],
    explain: "A neuron typically has one main axon, which can range from less than a millimeter to over a meter in length."
  },
  {
    id: "hs-neu-004",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Myelin Sheath",
    definition: "An insulating fatty layer wrapped around axons that speeds up nerve signal transmission",
    tags: ["neuron", "anatomy"],
    explain: "Myelin acts like plastic insulation on an electrical cord, helping electrical impulses travel rapidly."
  },
  {
    id: "hs-neu-005",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Synapse",
    definition: "The microscopic junction or gap where a neuron passes a chemical signal to the next cell",
    tags: ["synapse", "neuron"],
    explain: "Signals cross the synapse using chemical messengers called neurotransmitters."
  },
  {
    id: "hs-neu-006",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Central Nervous System (CNS)",
    right: "Consists of the brain and the spinal cord",
    tags: ["anatomy", "pns"],
    explain: "The CNS serves as the command center, processing information and making decisions."
  },
  {
    id: "hs-neu-007",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Peripheral Nervous System (PNS)",
    right: "All the nerves throughout the rest of the body connecting organs and limbs to the CNS",
    tags: ["anatomy", "pns"],
    explain: "The PNS carries sensory input into the spinal cord and delivers motor commands out to muscles."
  },
  {
    id: "hs-neu-008",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Sensory Neuron",
    right: "Carries information from sense organs (eyes, ears, skin) toward the brain and spinal cord",
    tags: ["neuron", "reflex"],
    explain: "Motor neurons do the opposite: they carry movement commands from the brain/spine out to muscles."
  },
  {
    id: "hs-neu-009",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Frontal Lobe",
    right: "Brain region responsible for decision making, planning, personality, and motor control",
    tags: ["brain_gross", "anatomy"],
    explain: "Located right behind your forehead, the frontal lobe handles executive thinking and problem-solving."
  },
  {
    id: "hs-neu-010",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Occipital Lobe",
    right: "Brain region at the back of the head dedicated to visual processing (sight)",
    tags: ["brain_gross", "anatomy"],
    explain: "Signals from the eyes travel to the occipital lobe to construct the images you see."
  },
  {
    id: "hs-neu-011",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Temporal Lobe",
    right: "Brain region responsible for hearing, language comprehension, and memory",
    tags: ["brain_gross", "anatomy"],
    explain: "Located near your ears, the temporal lobe contains memory centers like the hippocampus."
  },
  {
    id: "hs-neu-012",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Cerebellum",
    right: "Structure at the base of the brain that coordinates balance, posture, and smooth movement",
    tags: ["brain_gross", "anatomy"],
    explain: "When you ride a bike or balance on one foot, your cerebellum is coordinating the muscles."
  },
  {
    id: "hs-neu-013",
    unit: "u3",
    diff: 1,
    type: "sequence",
    prompt: "Trace signal flow in a protective reflex arc (e.g. touching a hot object):",
    steps: ["Sensory receptor in skin detects heat", "Sensory neuron sends signal to spinal cord", "Spinal cord triggers motor neuron immediately", "Motor neuron contracts muscle to pull hand away"],
    tags: ["reflex", "neuron"],
    explain: "Reflexes happen through the spinal cord before the brain registers conscious pain, protecting you from injury."
  },
  {
    id: "hs-neu-014",
    unit: "u3",
    diff: 1,
    type: "diagram",
    diagram: "neuron",
    targetLabel: "Soma",
    options: ["Soma", "Axon Terminal", "Myelin Sheath", "Node of Ranvier"],
    hint: "Identify the main central cell body housing the neuron's nucleus.",
    tags: ["neuron", "anatomy"],
    explain: "The soma (cell body) maintains the neuron and integrates incoming electrical messages."
  },
  {
    id: "hs-neu-015",
    unit: "u3",
    diff: 1,
    type: "diagram",
    diagram: "neuron",
    targetLabel: "Axon Terminal",
    options: ["Axon Terminal", "Dendrite", "Soma", "Nucleus"],
    hint: "Identify the distal branched tip where chemical neurotransmitters are released.",
    tags: ["neuron", "anatomy"],
    explain: "Axon terminals release neurotransmitter chemicals across the synapse to stimulate the next cell."
  },
  {
    id: "hs-neu-016",
    unit: "u3",
    diff: 1,
    type: "truefalse",
    statement: "Reflex actions must be processed by the conscious thinking brain before the body can react.",
    isTrue: false,
    falseVersion: "Reflexes are handled rapidly by the spinal cord without waiting for conscious brain thought.",
    tags: ["reflex", "neuron"],
    explain: "Bypassing conscious brain processing allows reflex arcs to happen in fractions of a second to prevent injury."
  },
  {
    id: "hs-neu-017",
    unit: "u3",
    diff: 1,
    type: "cloze",
    sentence: "The chemical messengers released into a synapse to communicate between neurons are called {blank}.",
    answer: "Neurotransmitters",
    options: ["Neurotransmitters", "Hormones", "Enzymes", "Antibodies"],
    tags: ["synapse", "neuron"],
    explain: "Neurotransmitters like dopamine and serotonin carry chemical signals across the synaptic gap."
  }
];
