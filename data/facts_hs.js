// High School Biomedical & Neuroscience Fact Bank
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
    definition: "Double-membrane organelle responsible for generating the majority of cellular adenosine triphosphate (ATP) via oxidative phosphorylation",
    tags: ["organelle", "metabolism"],
    explain: "Mitochondria have their own circular DNA and are colloquially termed the 'powerhouse of the cell' because they generate most ATP."
  },
  {
    id: "hs-cell-002",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Ribosome",
    definition: "Macromolecular ribonucleoprotein complex that translates mRNA sequences into polypeptide chains",
    tags: ["organelle", "translation"],
    explain: "Ribosomes consist of large and small ribosomal subunits and can be found free in the cytosol or bound to the rough endoplasmic reticulum."
  },
  {
    id: "hs-cell-003",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Rough Endoplasmic Reticulum",
    definition: "Membrane network studded with ribosomes involved in the synthesis and initial folding of transmembrane and secretable proteins",
    tags: ["organelle", "cell"],
    explain: "The rough ER folds nascent polypeptides into tertiary structures and sends them via vesicles to the Golgi apparatus."
  },
  {
    id: "hs-cell-004",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Smooth Endoplasmic Reticulum",
    definition: "Membrane network lacking ribosomes that synthesizes lipids, metabolizes carbohydrates, and detoxifies xenobiotics",
    tags: ["organelle", "metabolism"],
    explain: "In muscle cells, specialized smooth ER called the sarcoplasmic reticulum stores calcium ions crucial for contraction."
  },
  {
    id: "hs-cell-005",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Golgi Apparatus",
    definition: "Series of flattened cisternae that modifies, sorts, and packages glycoproteins and lipids for secretion or delivery to lysosomes",
    tags: ["organelle", "cell"],
    explain: "Proteins enter the cis-Golgi face from the ER, undergo glycosylation modification, and exit from the trans-Golgi face."
  },
  {
    id: "hs-cell-006",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Lysosome",
    definition: "Acidic organelle containing hydrolytic enzymes (hydrolases) that degrades worn-out organelles, macromolecules, and engulfed pathogens",
    tags: ["organelle", "cell"],
    explain: "Lysosomes maintain an acidic internal pH (approx. 4.5-5.0) via vacuolar H+-ATPases to activate acid hydrolases."
  },
  {
    id: "hs-cell-007",
    unit: "u1",
    diff: 1,
    type: "definition",
    term: "Phospholipid Bilayer",
    definition: "Amphipathic lipid sheet consisting of hydrophilic polar phosphate heads facing aqueous compartments and hydrophobic fatty acid tails facing inwards",
    tags: ["membrane", "cell"],
    explain: "This bilayer acts as a selective semipermeable barrier, preventing free diffusion of polar and charged molecules."
  },
  {
    id: "hs-cell-008",
    unit: "u1",
    diff: 2,
    type: "pair",
    left: "Active Transport",
    right: "Movement of solutes against concentration gradient requiring ATP",
    tags: ["membrane", "transport"],
    explain: "Active transport hydrolyzes ATP (primary) or utilizes an established electrochemical gradient (secondary) to move substances uphill."
  },
  {
    id: "hs-cell-009",
    unit: "u1",
    diff: 1,
    type: "pair",
    left: "Facilitated Diffusion",
    right: "Passive solute transit via transmembrane channels down gradient",
    tags: ["membrane", "transport"],
    explain: "Facilitated diffusion does not require metabolic energy because solutes move thermodynamically downhill."
  },
  {
    id: "hs-cell-010",
    unit: "u1",
    diff: 2,
    type: "pair",
    left: "Osmosis",
    right: "Net diffusion of water molecules across a semipermeable membrane toward higher solute concentration",
    tags: ["membrane", "transport"],
    explain: "Water moves to dilute high solute areas; aquaporin channels accelerate this passive osmotic transit."
  },
  {
    id: "hs-cell-011",
    unit: "u1",
    diff: 1,
    type: "sequence",
    prompt: "Arrange the chronological phases of standard Mitosis",
    steps: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    tags: ["cell", "mitosis"],
    explain: "Prophase condenses chromatin, Metaphase aligns chromosomes at the equatorial plate, Anaphase separates sister chromatids, and Telophase reforms nuclear envelopes."
  },
  {
    id: "hs-cell-012",
    unit: "u1",
    diff: 2,
    type: "sequence",
    prompt: "Trace the secretory pathway of an exported peptide hormone",
    steps: ["Translation on Rough ER", "Vesicular transport to cis-Golgi", "Modification in Golgi cisternae", "Exocytosis via secretory vesicle fusion"],
    tags: ["cell", "organelle"],
    explain: "Signal peptides direct ribosomes to the rough ER, followed by cis-to-trans Golgi processing and vesicular exocytosis."
  },
  {
    id: "hs-cell-013",
    unit: "u1",
    diff: 1,
    type: "truefalse",
    statement: "Mitochondria contain their own maternal circular genome independent of nuclear DNA.",
    isTrue: true,
    tags: ["organelle", "genetics"],
    explain: "According to the endosymbiotic theory, mitochondria originated from engulfed alpha-proteobacteria and retain mitochondrial DNA (mtDNA)."
  },
  {
    id: "hs-cell-014",
    unit: "u1",
    diff: 1,
    type: "truefalse",
    statement: "Passive diffusion of small polar molecules like glucose across a lipid bilayer occurs rapidly without transport proteins.",
    isTrue: false,
    falseVersion: "Passive diffusion of small nonpolar molecules like oxygen occurs rapidly without transport proteins.",
    tags: ["membrane", "transport"],
    explain: "Glucose is large and highly polar, requiring specialized glucose transporter proteins (GLUTs) for facilitated diffusion."
  },
  {
    id: "hs-cell-015",
    unit: "u1",
    diff: 2,
    type: "cloze",
    sentence: "The principal high-energy molecule that fuels endergonic cellular work is {blank}.",
    answer: "Adenosine triphosphate",
    options: ["Adenosine triphosphate", "Cyclic AMP", "Glyceraldehyde 3-phosphate", "Ribose 5-phosphate"],
    tags: ["metabolism", "cell"],
    explain: "ATP transfers chemical energy via the hydrolysis of its high-energy phosphoanhydride bonds to ADP and inorganic phosphate."
  },
  {
    id: "hs-cell-016",
    unit: "u1",
    diff: 2,
    type: "diagram",
    diagram: "cell",
    targetLabel: "Mitochondrion",
    options: ["Mitochondrion", "Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"],
    hint: "Identify the oval organelle featuring folded inner cristae membranes.",
    tags: ["organelle", "cell"],
    explain: "Mitochondria display distinct inner folded membranes called cristae that maximize the surface area for ATP synthase enzymes."
  },
  {
    id: "hs-cell-017",
    unit: "u1",
    diff: 2,
    type: "diagram",
    diagram: "cell",
    targetLabel: "Nucleus",
    options: ["Nucleus", "Lysosome", "Centrosome", "Mitochondrion"],
    hint: "Identify the prominent central organelle housing chromatin.",
    tags: ["organelle", "cell"],
    explain: "The nucleus is enclosed by a double-layered nuclear envelope perforated by nuclear pore complexes."
  },
  {
    id: "hs-cell-018",
    unit: "u1",
    diff: 2,
    type: "pair",
    left: "Peroxisome",
    right: "Catabolizes very long chain fatty acids and neutralizes hydrogen peroxide with catalase",
    tags: ["organelle", "cell"],
    explain: "Peroxisomes contain catalase which converts potentially toxic hydrogen peroxide (H2O2) into water and oxygen."
  },

  // ==========================================
  // UNIT 2: DNA, GENES & MOLECULAR FLOW
  // ==========================================
  {
    id: "hs-dna-001",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "Central Dogma of Molecular Biology",
    definition: "Fundamental framework describing the unidirectional flow of genetic information: DNA replicates, transcribes to RNA, which translates into protein",
    tags: ["genetics", "translation"],
    explain: "Coined by Francis Crick in 1958; rare exceptions include reverse transcriptase in retroviruses."
  },
  {
    id: "hs-dna-002",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "DNA Polymerase",
    definition: "Enzyme that synthesizes new DNA strands in the 5' to 3' direction using single-stranded template DNA and dNTP substrates",
    tags: ["dna", "genetics"],
    explain: "DNA polymerases require a pre-existing 3'-OH primer provided by RNA primase and possess 3' to 5' proofreading exonuclease activity."
  },
  {
    id: "hs-dna-003",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "Adenine pairs with",
    right: "Thymine via 2 hydrogen bonds (Uracil in RNA)",
    tags: ["dna", "genetics"],
    explain: "Chargaff's rules established that purine Adenine pairs selectively with pyrimidine Thymine via two hydrogen bonds."
  },
  {
    id: "hs-dna-004",
    unit: "u2",
    diff: 1,
    type: "pair",
    left: "Guanine pairs with",
    right: "Cytosine via 3 hydrogen bonds",
    tags: ["dna", "genetics"],
    explain: "The 3 hydrogen bonds between G and C make GC-rich DNA duplexes more thermally stable (higher melting temperature Tm)."
  },
  {
    id: "hs-dna-005",
    unit: "u2",
    diff: 1,
    type: "definition",
    term: "Codon",
    definition: "Triplet nucleotide sequence on mRNA that encodes a specific amino acid or a termination signal",
    tags: ["rna", "translation"],
    explain: "There are 64 possible 3-letter codons; 61 code for 20 standard amino acids and 3 (UAA, UAG, UGA) signal stop."
  },
  {
    id: "hs-dna-006",
    unit: "u2",
    diff: 2,
    type: "pair",
    left: "Start Codon (AUG)",
    right: "Encodes Methionine and establishes the reading frame",
    tags: ["translation", "genetics"],
    explain: "AUG initiates translation in eukaryotic ribosomes by recruiting initiator tRNA carrying methionine."
  },
  {
    id: "hs-dna-007",
    unit: "u2",
    diff: 2,
    type: "sequence",
    prompt: "Order the stages of biological protein translation",
    steps: ["Initiation (ribosomal assembly on mRNA)", "Elongation (aminoacyl-tRNA decoding and peptide bond formation)", "Termination (stop codon recognition by release factors)", "Ribosome recycling and subunit disassembly"],
    tags: ["translation", "genetics"],
    explain: "Translation initiates when small ribosomal subunit binds 5' cap, elongates via peptidyl transferase, and terminates at a stop codon."
  },
  {
    id: "hs-dna-008",
    unit: "u2",
    diff: 1,
    type: "truefalse",
    statement: "RNA contains thymine bases instead of uracil bases found in DNA.",
    isTrue: false,
    falseVersion: "RNA contains uracil bases instead of thymine bases found in DNA.",
    tags: ["dna", "rna"],
    explain: "Uracil is methylated at position 5 to form Thymine. RNA incorporates Uracil (U), while DNA utilizes Thymine (T)."
  },
  {
    id: "hs-dna-009",
    unit: "u2",
    diff: 2,
    type: "cloze",
    sentence: "Non-coding sequences spliced out of precursor mRNA during eukaryotic processing are called {blank}.",
    answer: "Introns",
    options: ["Introns", "Exons", "Promoters", "Telomeres"],
    tags: ["rna", "genetics"],
    explain: "The spliceosome snRNP complex excises introns and ligates coding exons together to form mature mRNA."
  },
  {
    id: "hs-dna-010",
    unit: "u2",
    diff: 2,
    type: "pair",
    left: "Helicase",
    right: "Unwinds and separates the DNA double helix at the replication fork",
    tags: ["dna", "genetics"],
    explain: "DNA helicase breaks hydrogen bonds between nitrogenous base pairs using ATP energy."
  },
  {
    id: "hs-dna-011",
    unit: "u2",
    diff: 2,
    type: "definition",
    term: "Frameshift Mutation",
    definition: "Insertion or deletion of nucleotides not divisible by three, shifting the entire downstream triplet reading frame",
    tags: ["genetics", "mutation"],
    explain: "Frameshifts severely alter all downstream amino acids and usually create premature stop codons (nonsense truncation)."
  },

  // ==========================================
  // UNIT 3: NERVOUS SYSTEM & REFLEX FUNDAMENTALS
  // ==========================================
  {
    id: "hs-neu-001",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Dendrite",
    definition: "Branched arborized neuronal projection specialized to receive synaptic inputs from other neurons",
    tags: ["neuron", "anatomy"],
    explain: "Dendrites contain thousands of dendritic spines housing postsynaptic neurotransmitter receptors."
  },
  {
    id: "hs-neu-002",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Axon Hillock",
    definition: "Specialized funnel-shaped soma region with high density of voltage-gated Na+ channels where action potentials are triggered",
    tags: ["neuron", "biophysics"],
    explain: "The axon initial segment at the hillock computes whether summed synaptic inputs reach threshold for all-or-none firing."
  },
  {
    id: "hs-neu-003",
    unit: "u3",
    diff: 1,
    type: "definition",
    term: "Myelin Sheath",
    definition: "Insulating concentric lipid layers wrapped around axons that dramatically accelerate action potential propagation speed",
    tags: ["neuron", "glia"],
    explain: "Myelin is formed by oligodendrocytes in the central nervous system (CNS) and Schwann cells in the peripheral nervous system (PNS)."
  },
  {
    id: "hs-neu-004",
    unit: "u3",
    diff: 2,
    type: "pair",
    left: "Nodes of Ranvier",
    right: "Unmyelinated periodic gaps rich in Na+ channels enabling saltatory conduction",
    tags: ["neuron", "biophysics"],
    explain: "Action potentials skip electrotonically under myelin and regenerate exclusively at Nodes of Ranvier."
  },
  {
    id: "hs-neu-005",
    unit: "u3",
    diff: 1,
    type: "sequence",
    prompt: "Trace signal progression through a canonical patellar stretch reflex arc",
    steps: ["Muscle spindle sensory stretch receptor", "Afferent sensory neuron axon", "Spinal cord dorsal horn synapse", "Efferent motor neuron activation and quadriceps contraction"],
    tags: ["reflex", "pns"],
    explain: "The patellar reflex is a monosynaptic stretch reflex that bypasses higher brain processing for rapid postural correction."
  },
  {
    id: "hs-neu-006",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Frontal Lobe",
    right: "Executive function, decision making, motor planning, and expressive speech (Broca)",
    tags: ["brain_gross", "anatomy"],
    explain: "The frontal lobe harbors the primary motor cortex (precentral gyrus) and prefrontal cognitive circuits."
  },
  {
    id: "hs-neu-007",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Occipital Lobe",
    right: "Primary and secondary visual processing (visual cortex V1)",
    tags: ["brain_gross", "anatomy"],
    explain: "Located at the posterior of the cerebrum, receiving retinotopic visual signals relayed from the lateral geniculate nucleus."
  },
  {
    id: "hs-neu-008",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Temporal Lobe",
    right: "Auditory processing, memory formation (hippocampus), and language comprehension (Wernicke)",
    tags: ["brain_gross", "anatomy"],
    explain: "The medial temporal lobe contains the hippocampus and amygdala, critical for declarative memory and emotional valence."
  },
  {
    id: "hs-neu-009",
    unit: "u3",
    diff: 1,
    type: "pair",
    left: "Cerebellum",
    right: "Motor coordination, balance, motor learning, and precision timing",
    tags: ["brain_gross", "anatomy"],
    explain: "The 'little brain' contains over 50% of all neurons in the human brain, densely packed in granule and Purkinje cell layers."
  },
  {
    id: "hs-neu-010",
    unit: "u3",
    diff: 2,
    type: "diagram",
    diagram: "neuron",
    targetLabel: "Soma",
    options: ["Soma", "Axon Terminal", "Myelin Sheath", "Node of Ranvier"],
    hint: "Identify the central cell body housing the neuron's nucleus.",
    tags: ["neuron", "anatomy"],
    explain: "The neuronal cell body or soma integrates graded potentials and synthesizes essential neurotransmitter enzymes."
  },
  {
    id: "hs-neu-011",
    unit: "u3",
    diff: 2,
    type: "diagram",
    diagram: "neuron",
    targetLabel: "Axon Terminal",
    options: ["Axon Terminal", "Dendrite", "Axon Hillock", "Soma"],
    hint: "Identify the distal branched end where neurotransmitter vesicles fuse.",
    tags: ["neuron", "anatomy"],
    explain: "Presynaptic boutons at the axon terminal convert electrical action potentials into chemical neurotransmitter release."
  },
  {
    id: "hs-neu-012",
    unit: "u3",
    diff: 1,
    type: "truefalse",
    statement: "The sympathetic nervous system drives the 'fight or flight' response, increasing heart rate and dilating bronchioles.",
    isTrue: true,
    tags: ["pns", "autonomic"],
    explain: "Sympathetic preganglionic neurons use acetylcholine while postganglionics release norepinephrine to prep the organism for stressors."
  },
  {
    id: "hs-neu-013",
    unit: "u3",
    diff: 1,
    type: "truefalse",
    statement: "Sensory neurons carrying tactile information into the spinal cord enter via the ventral roots.",
    isTrue: false,
    falseVersion: "Sensory neurons carrying tactile information into the spinal cord enter via the dorsal roots.",
    tags: ["pns", "reflex"],
    explain: "Bell-Magendie Law: dorsal spinal roots transmit sensory (afferent) information, while ventral roots convey motor (efferent) signals."
  },
  {
    id: "hs-neu-014",
    unit: "u3",
    diff: 2,
    type: "cloze",
    sentence: "The gap junction or chemical space between an axon terminal and its adjacent postsynaptic membrane is the {blank}.",
    answer: "Synaptic cleft",
    options: ["Synaptic cleft", "Node of Ranvier", "Axon hillock", "Intercalated disc"],
    tags: ["synapse", "neuron"],
    explain: "The synaptic cleft is approximately 20 to 40 nanometers wide, allowing neurotransmitters to cross in fractions of a millisecond."
  },
  {
    id: "hs-cell-019",
    unit: "u1",
    diff: 2,
    type: "definition",
    term: "Cytoskeleton",
    definition: "Dynamic network of protein filaments—microfilaments (actin), intermediate filaments, and microtubules—providing mechanical stability and intracellular highways",
    tags: ["organelle", "cell"],
    explain: "Motor proteins like kinesin (anterograde) and dynein (retrograde) travel along microtubules to transport vesicles."
  },
  {
    id: "hs-cell-020",
    unit: "u1",
    diff: 2,
    type: "pair",
    left: "Glycolysis",
    right: "Cytosolic breakdown of 1 glucose into 2 pyruvate molecules producing net 2 ATP and 2 NADH",
    tags: ["metabolism", "cell"],
    explain: "Glycolysis is anaerobic and does not require oxygen or mitochondria."
  },
  {
    id: "hs-cell-021",
    unit: "u1",
    diff: 2,
    type: "pair",
    left: "Krebs (Citric Acid) Cycle",
    right: "Mitochondrial matrix cycle oxidizing acetyl-CoA to produce NADH, FADH2, and CO2",
    tags: ["metabolism", "organelle"],
    explain: "The electron carriers NADH and FADH2 feed into the inner mitochondrial electron transport chain."
  },
  {
    id: "hs-cell-022",
    unit: "u1",
    diff: 2,
    type: "pair",
    left: "ATP Synthase",
    right: "Rotary molecular motor in inner mitochondrial membrane using proton gradient to phosphorylate ADP",
    tags: ["metabolism", "organelle"],
    explain: "Peter Mitchell's chemiosmotic hypothesis: protons pumped into the intermembrane space flow through Fo-F1 ATP synthase."
  },
  {
    id: "hs-dna-012",
    unit: "u2",
    diff: 2,
    type: "pair",
    left: "Alternative Splicing",
    right: "Differential inclusion of exons allowing a single gene to encode multiple distinct protein isoforms",
    tags: ["genetics", "rna"],
    explain: "Enormously expands proteomic diversity in the human nervous system from only ~20,000 protein-coding genes."
  },
  {
    id: "hs-dna-013",
    unit: "u2",
    diff: 2,
    type: "pair",
    left: "Telomeres",
    right: "Repetitive non-coding nucleotide caps (TTAGGG) protecting chromosome ends from degradation",
    tags: ["genetics", "dna"],
    explain: "Telomeres shorten with successive cell divisions due to the end-replication problem, contributing to cellular senescence."
  },
  {
    id: "hs-dna-014",
    unit: "u2",
    diff: 2,
    type: "pair",
    left: "Missense Mutation",
    right: "Single nucleotide substitution that changes a single codon to encode a different amino acid",
    tags: ["genetics", "mutation"],
    explain: "Example: Sickle cell anemia is caused by a missense mutation in the beta-globin gene (glutamic acid to valine at position 6)."
  },
  {
    id: "hs-dna-015",
    unit: "u2",
    diff: 2,
    type: "pair",
    left: "Nonsense Mutation",
    right: "Single nucleotide substitution that creates a premature stop codon, causing truncated protein",
    tags: ["genetics", "mutation"],
    explain: "Often leads to nonsense-mediated mRNA decay (NMD) and complete loss of functional protein."
  },
  {
    id: "hs-neu-015",
    unit: "u3",
    diff: 2,
    type: "pair",
    left: "Hippocampus",
    right: "Seahorse-shaped medial temporal lobe structure essential for consolidating declarative episodic memories",
    tags: ["brain_gross", "anatomy"],
    explain: "Famous patient H.M. lost the ability to form new episodic memories after bilateral medial temporal lobectomy."
  },
  {
    id: "hs-neu-016",
    unit: "u3",
    diff: 2,
    type: "pair",
    left: "Amygdala",
    right: "Almond-shaped limbic nucleus mediating emotional processing, fear conditioning, and threat detection",
    tags: ["brain_gross", "anatomy"],
    explain: "Connects intimately with the hypothalamus and prefrontal cortex to orchestrate physiological fear reactions."
  },
  {
    id: "hs-neu-017",
    unit: "u3",
    diff: 2,
    type: "pair",
    left: "Thalamus",
    right: "Major sensory relay station routing sensory inputs (except olfaction) to corresponding neocortical areas",
    tags: ["brain_gross", "anatomy"],
    explain: "Visual signals relay through the lateral geniculate nucleus (LGN), auditory through the medial geniculate nucleus (MGN)."
  },
  {
    id: "hs-neu-018",
    unit: "u3",
    diff: 2,
    type: "pair",
    left: "Hypothalamus",
    right: "Master homeostatic controller regulating body temperature, thirst, hunger, sleep, and the endocrine system",
    tags: ["brain_gross", "homeostasis"],
    explain: "Directly controls pituitary hormone secretion via releasing and inhibiting factors."
  },
  {
    id: "hs-neu-019",
    unit: "u3",
    diff: 2,
    type: "pair",
    left: "Schwann Cells",
    right: "Glial cells that produce myelin sheaths around peripheral axons (one internode per cell)",
    tags: ["glia", "pns"],
    explain: "Unlike oligodendrocytes in the CNS which myelinate up to 50 axons, each Schwann cell myelinates a single axon segment in the PNS."
  }
];
