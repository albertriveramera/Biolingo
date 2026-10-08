// Master's Level Pharmacology, Neuropathology & Molecular Methodologies
// Units: u7 (Receptor Kinetics & Neuropharm), u8 (Neurodegeneration & Neuropathology), u9 (Biomedical Methodologies)

window.FACTS_MS = [
  // ==========================================
  // UNIT 7: RECEPTOR KINETICS & NEUROPHARMACOLOGY
  // ==========================================
  {
    id: "ms-pharm-001",
    unit: "u7",
    diff: 3,
    type: "definition",
    term: "Dissociation Constant (Kd)",
    definition: "Equilibrium concentration of ligand at which 50% of the total receptor population is occupied at steady state: Kd = k_off / k_on",
    tags: ["pharmacology", "kinetics"],
    explain: "A lower Kd value signifies higher receptor binding affinity, as less drug concentration is required to achieve 50% occupancy."
  },
  {
    id: "ms-pharm-002",
    unit: "u7",
    diff: 3,
    type: "definition",
    term: "EC50 (Half-Maximal Effective Concentration)",
    definition: "Concentration of an agonist that produces 50% of that drug's maximal attainable biological response in a functional assay",
    tags: ["pharmacology", "kinetics"],
    explain: "Due to 'spare receptors' (receptor reserve) and signal amplification cascades, EC50 is frequently much lower than Kd."
  },
  {
    id: "ms-pharm-003",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Competitive Antagonist",
    right: "Shifts agonist dose-response curve to the right without altering maximal efficacy (E_max)",
    tags: ["pharmacology", "kinetics"],
    explain: "Can be fully surmounted by increasing agonist concentrations. Schild plot slope equals unity (1.0)."
  },
  {
    id: "ms-pharm-004",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Non-Competitive / Irreversible Antagonist",
    right: "Depresses the maximal response (E_max) of the agonist regardless of agonist concentration",
    tags: ["pharmacology", "kinetics"],
    explain: "Binds either allosterically or forms covalent irreversible adducts with the orthosteric binding pocket."
  },
  {
    id: "ms-pharm-005",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Positive Allosteric Modulator (PAM)",
    right: "Binds distinct allosteric site to augment orthosteric agonist affinity and/or gating efficacy (e.g., Benzodiazepines)",
    tags: ["pharmacology", "receptors"],
    explain: "Benzodiazepines bind the alpha/gamma interface of GABA-A receptors, increasing channel opening frequency in the presence of GABA without opening it alone."
  },
  {
    id: "ms-pharm-006",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Ketamine",
    right: "Uncompetitive open-channel blocker of the NMDA receptor pore producing rapid antidepressant effects",
    tags: ["pharmacology", "cns_drugs"],
    explain: "Ketamine enters open NMDAR channels, binding near the phencyclidine (PCP) site, triggering rapid AMPA/BDNF-dependent synaptogenesis."
  },
  {
    id: "ms-pharm-007",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Memantine",
    right: "Low-affinity voltage-dependent uncompetitive NMDA receptor antagonist used in moderate-to-severe Alzheimer's disease",
    tags: ["pharmacology", "alzheimer"],
    explain: "Its rapid off-rate kinetics allow it to block tonic pathological excitotoxic glutamate leak while preserving physiological synaptic transmission."
  },
  {
    id: "ms-pharm-008",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Haloperidol",
    right: "High-potency first-generation typical antipsychotic with potent dopamine D2 receptor antagonism",
    tags: ["pharmacology", "cns_drugs"],
    explain: "Requires approximately 65-80% D2 striatal occupancy for antipsychotic efficacy; exceeding 80% sharply triggers extrapyramidal motor side effects."
  },
  {
    id: "ms-pharm-009",
    unit: "u7",
    diff: 3,
    type: "cloze",
    sentence: "The endogenous retrograde endocannabinoids anandamide (AEA) and 2-AG act predominantly on presynaptic {blank} receptors to suppress neurotransmitter release.",
    answer: "CB1",
    options: ["CB1", "CB2", "5-HT1A", "D2"],
    tags: ["pharmacology", "receptors"],
    explain: "Synthesized on demand from postsynaptic lipid precursors in response to depolarization and calcium, diffusing backward to presynaptic Gi-coupled CB1 receptors."
  },

  // ==========================================
  // UNIT 8: NEURODEGENERATION & NEUROPATHOLOGY
  // ==========================================
  {
    id: "ms-path-001",
    unit: "u8",
    diff: 3,
    type: "sequence",
    prompt: "Trace amyloidogenic proteolytic processing of Amyloid Precursor Protein (APP)",
    steps: ["APP cleavage in the extracellular domain by BACE1 (beta-secretase)", "Release of soluble sAPP-beta, leaving membrane-bound CTF-beta (C99)", "Intramembranous cleavage of CTF-beta by the gamma-secretase complex (Presenilin)", "Liberation of Amyloid-beta peptides (primarily A-beta 40 and aggregate-prone A-beta 42)", "Self-assembly into neurotoxic oligomers, protofibrils, and senile amyloid plaques"],
    tags: ["neuropathology", "alzheimer"],
    explain: "In contrast, non-amyloidogenic processing cleaves APP within the A-beta domain via alpha-secretase (ADAM10), precluding neurotoxic peptide formation."
  },
  {
    id: "ms-path-002",
    unit: "u8",
    diff: 3,
    type: "pair",
    left: "Tau Pathology (Tauopathies)",
    right: "Hyperphosphorylation of microtubule-associated protein tau causing dissociation from tubulin and paired helical neurofibrillary tangles",
    tags: ["neuropathology", "alzheimer"],
    explain: "Tau hyperphosphorylation (mediated by kinases like GSK-3beta and CDK5) destabilizes axonal microtubules, compromising anterograde axonal transport."
  },
  {
    id: "ms-path-003",
    unit: "u8",
    diff: 3,
    type: "pair",
    left: "Lewy Body Pathology",
    right: "Cytoplasmic inclusions composed primarily of misfolded, phosphorylated alpha-synuclein",
    tags: ["neuropathology", "parkinson"],
    explain: "Hallmark of Parkinson's disease and Dementia with Lewy Bodies, marked by profound neurodegeneration of neuromelanin-pigmented dopaminergic neurons in the substantia nigra pars compacta."
  },
  {
    id: "ms-path-004",
    unit: "u8",
    diff: 3,
    type: "pair",
    left: "Huntington's Disease Genetics",
    right: "Autosomal dominant CAG trinucleotide repeat expansion (>36 repeats) in exon 1 of the HTT gene",
    tags: ["neuropathology", "genetics"],
    explain: "Encodes an expanded polyglutamine (polyQ) tract leading to toxic huntingtin protein aggregation, particularly devastating to striatal GABAergic medium spiny neurons."
  },
  {
    id: "ms-path-005",
    unit: "u8",
    diff: 3,
    type: "pair",
    left: "TDP-43 (TAR DNA-binding protein 43)",
    right: "Nuclear RNA-binding protein that mislocalizes and forms ubiquitinated cytoplasmic inclusions in >95% of ALS and FTLD-TDP cases",
    tags: ["neuropathology", "neurodegeneration"],
    explain: "Loss of nuclear TDP-43 impairs cryptic exon repression (e.g. in STMN2 and UNC13A), leading to neurodegenerative axonal death."
  },
  {
    id: "ms-path-006",
    unit: "u8",
    diff: 3,
    type: "sequence",
    prompt: "Arrange the molecular sequence of ischemic glutamate excitotoxicity",
    steps: ["Cellular ATP depletion due to loss of cerebral perfusion and oxygen", "Failure of Na+/K+ ATPase leading to neuronal depolarization and reversal of glutamate reuptake transporters", "Massive excessive extracellular accumulation of synaptic and extrasynaptic glutamate", "Uncontrolled persistent overactivation of NMDA and AMPA receptors causing lethal Ca2+ overload", "Activation of calcium-dependent calpains, calcineurin, nitric oxide synthase, and mitochondrial permeabilization"],
    tags: ["neuropathology", "excitotoxicity"],
    explain: "Ca2+ influx via extrasynaptic GluN2B-containing NMDARs preferentially activates pro-death cascades, overriding CREB survival pathways."
  },
  {
    id: "ms-path-007",
    unit: "u8",
    diff: 3,
    type: "truefalse",
    statement: "The Apolipoprotein E epsilon-4 (APOE-e4) allele is the strongest known genetic risk factor for late-onset sporadic Alzheimer's disease.",
    isTrue: true,
    tags: ["neuropathology", "alzheimer"],
    explain: "Carrying a single APOE-e4 allele increases AD risk approximately 3-fold, while homozygous APOE-e4/e4 elevates risk up to 12- to 15-fold by impairing amyloid clearance."
  },

  // ==========================================
  // UNIT 9: BIOMEDICAL & MOLECULAR METHODOLOGIES
  // ==========================================
  {
    id: "ms-meth-001",
    unit: "u9",
    diff: 3,
    type: "definition",
    term: "Protospacer Adjacent Motif (PAM)",
    definition: "Short 2-6 base pair DNA sequence immediately following the Cas9 nuclease target site essential for Cas9 binding and cleavage",
    tags: ["methods", "crispr"],
    explain: "For Streptococcus pyogenes Cas9 (SpCas9), the canonical PAM sequence is 5'-NGG-3'. Cleavage occurs precisely 3 base pairs upstream of the PAM."
  },
  {
    id: "ms-meth-002",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Non-Homologous End Joining (NHEJ)",
    right: "Error-prone DNA double-strand break repair pathway causing insertions and deletions (indels) that knock out gene function",
    tags: ["methods", "crispr"],
    explain: "Active across all phases of the cell cycle; utilized in CRISPR knockout experiments to induce frameshift disruption."
  },
  {
    id: "ms-meth-003",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Homology-Directed Repair (HDR)",
    right: "High-fidelity repair pathway that utilizes an exogenous donor template for precise gene knock-ins or point mutations",
    tags: ["methods", "crispr"],
    explain: "Restricted predominantly to late S and G2 phases when sister chromatids serve as natural templates."
  },
  {
    id: "ms-meth-004",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Whole-Cell Patch Clamp (Voltage Clamp)",
    right: "Controls and steps membrane voltage while recording the transmembrane currents flowing through ion channels",
    tags: ["methods", "patch_clamp"],
    explain: "Provides direct real-time measurement of macroscopic synaptic currents (EPSCs, IPSCs) and voltage-dependent channel kinetics."
  },
  {
    id: "ms-meth-005",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Current Clamp Mode",
    right: "Injects defined currents (or zeroes current) to record physiological changes in membrane potential and action potential firing",
    tags: ["methods", "patch_clamp"],
    explain: "Used to study neuronal excitability, rheobase, input resistance, and intrinsic bursting phenotypes."
  },
  {
    id: "ms-meth-006",
    unit: "u9",
    diff: 3,
    type: "definition",
    term: "Delta-Delta-Ct Method (2^-ddCt)",
    definition: "Relative quantification mathematical algorithm in quantitative real-time PCR (qPCR) to determine fold-change in target gene expression relative to a reference housekeeping gene",
    tags: ["methods", "genetics"],
    explain: "delta-Ct = Ct(target) - Ct(housekeeping), and delta-delta-Ct = delta-Ct(experimental) - delta-Ct(control). Fold change = 2^(-ddCt)."
  },
  {
    id: "ms-meth-007",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Two-Photon Laser Scanning Microscopy",
    right: "Non-linear optical imaging utilizing near-infrared pulsed femtosecond lasers to image deep living brain tissue with minimal phototoxicity",
    tags: ["methods", "imaging"],
    explain: "Fluorophore excitation occurs only at the high photon-density focal diffraction limit where two low-energy photons are simultaneously absorbed, eliminating out-of-focus background."
  },
  {
    id: "ms-meth-008",
    unit: "u9",
    diff: 3,
    type: "cloze",
    sentence: "In single-cell RNA sequencing (scRNA-seq), PCR amplification bias is corrected by tagging individual original mRNA molecules with a {blank}.",
    answer: "Unique Molecular Identifier (UMI)",
    options: ["Unique Molecular Identifier (UMI)", "Cell barcode", "Poly-A tail", "Restriction site"],
    tags: ["methods", "genetics"],
    explain: "UMIs are random 8-12 nt oligonucleotides appended during reverse transcription so duplicate PCR reads collapse into single counts."
  },
  {
    id: "ms-pharm-010",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Clozapine",
    right: "Prototypical atypical antipsychotic with high 5-HT2A and low D2 affinity; requires monitoring for agranulocytosis",
    tags: ["pharmacology", "cns_drugs"],
    explain: "Remarkably effective in treatment-resistant schizophrenia without causing extrapyramidal symptoms or tardive dyskinesia."
  },
  {
    id: "ms-pharm-011",
    unit: "u7",
    diff: 3,
    type: "pair",
    left: "Levodopa + Carbidopa Synergy",
    right: "Carbidopa blocks peripheral DOPA decarboxylase, boosting L-DOPA crossing into brain 10-fold while curbing peripheral nausea",
    tags: ["pharmacology", "parkinson"],
    explain: "Carbidopa cannot cross the blood-brain barrier, so central conversion to dopamine by aromatic L-amino acid decarboxylase remains intact."
  },
  {
    id: "ms-path-008",
    unit: "u8",
    diff: 3,
    type: "pair",
    left: "MPTP Neurotoxicity Model",
    right: "Converted by glial MAO-B into toxic MPP+, which selectively accumulates in dopaminergic terminals and poisons mitochondrial Complex I",
    tags: ["neuropathology", "parkinson"],
    explain: "Used experimentally to model Parkinsonian motor deficits in primates and mice."
  },
  {
    id: "ms-path-009",
    unit: "u8",
    diff: 3,
    type: "pair",
    left: "Prion Disease (PrP^Sc)",
    right: "Post-translational beta-sheet rich conformational conversion of endogenous alpha-helical PrP^C protein into protease-resistant amyloid fibrils",
    tags: ["neuropathology", "neurodegeneration"],
    explain: "Prions propagate without nucleic acids, causing rapidly progressive spongiform encephalopathy (e.g. Creutzfeldt-Jakob disease)."
  },
  {
    id: "ms-meth-009",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Base Editing (CBE / ABE)",
    right: "Deaminase-tethered catalytically impaired Cas9 nickases producing precise C->T or A->G conversions without double-strand DNA breaks",
    tags: ["methods", "crispr"],
    explain: "Pioneered by David Liu; avoids indels and chromosomal rearrangements associated with standard Cas9 DSB repair."
  },
  {
    id: "ms-meth-010",
    unit: "u9",
    diff: 3,
    type: "pair",
    left: "Specific Membrane Capacitance (C_m)",
    right: "Constant approximately 1 microfarad per square centimeter (1 uF/cm^2) across virtually all biological lipid bilayers",
    tags: ["methods", "patch_clamp"],
    explain: "Electrophysiologists use total whole-cell capacitance (in picofarads) to directly estimate a neuron's total membrane surface area."
  }
];
