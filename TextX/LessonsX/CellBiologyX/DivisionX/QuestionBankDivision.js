var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "Which phase of the cell cycle is metabolically inactive?",
    "Image": "",
    "answers": {
        "a": "GO",
        "b": "G1",
        "c": "interphase",
        "d": "none",
        "e": "S phase"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Cells in GO are not inactive.  They do not replicate DNA and therefore they do not progress through the cell cycle. However, but they are still metabolically active, expending energy and expressing genes at comparable levels to any other period of interphase.",
        "b": "The major distinction between Gap 1 and S phase is that DNA replication does not occur during G1.  However, as much energy is expended during G1 as any other phase.",
        "c": "Interphase includes G1, S phase and G2, everything outside of mitosis.  Each is metabolically active.",
        "d": "Correct: There is no phase of the cell cycle that is metabolically inactive.  Biochemistry, gene expression, protein synthesis, and all the hallmarks of metabolism occur during each phase, with comparable levels of energy expenditure.",
        "e": "The major distinction between S phase and the gaps (1 and 2) is DNA replication.  No more energy is expended during S phase than either gap."
    }
},
{
    "question": "With cell division, how would a tetrad be designated?",
    "Image": "",
    "answers": {
        "a": "2n, 4C",
        "b": "2n, 2C",
        "c": "1n, 2C",
        "d": "4n, 4C",
        "e": "1n, 1C"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "Correct: Tetrads are produced during zygotene, when all four chromatids of a homolog pair become bond together by synapsis.  Because there are two sets of paternal homologs, the cell is diploid (2n).  Because each set was replicated in the previous interphase, it is 4C.",
        "b": "2n indicates the cell is diploid.  2C indicates that there are two sets of chromosomes.  Thus, the homologs have not been replicated, and this designates a mitotic cell that has not entered interphase (G1 or GO).",
        "c": "1n indicates a haploid cell.  2C indicates that there are two sets of chromosomes.  The only way this could occur is if a gamete went through interphase before it was fertilized, which doesn’t occur.",
        "d":" 4n indicates that there are four complete sets of homologous chromosomes.  4C indicates that the chromosomes have not replicated.  Thus, this would be a tetraploid cell that hasn’t gone through interphase.",
        "e": "1n indicates that this is a haploid cell.  1C indicates that the chromosomes haven't benn replicated. Thus, this is a gamete."
    }
},
{
    "question": "During which meiotic phase does synapsis occur?",
    "Image": "",
    "answers": {
        "a": "Diplotene",
        "b": "Zygotene",
        "c": "Diakinesis",
        "d": "Leptotene",
        "e": "Pachytene"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Diplotene is when chiasmata become microscopically visible due to repulsion.",
        "b": "Correct: Zygotene is when tetrads form due to synapsis.",
        "c": "Diakinesis is when chiasmata release, the nucleus dissociates, and the spindle forms.",
        "d": "Leptotene is when chromosome condensation commences.",
        "e": "Pachytene is when crossing over occurs."
    }
},
{
    "question": "What does meiosis accomplish?",
    "Image": "",
    "answers": {
        "a": "cell division",
        "b": "cell growth",
        "c": "centrosome formation",
        "d": "creation of identical daughter cells",       
        "e": "reduction from diploid to haploid genomes",
        "f": "shuffling of genes between homologs"
    },
    "correctAns": [
        "e", "f"
    ],
    "explain": {
        "a": "Although this does occur during meiosis, it is not the best answer because it also occurs in mitosis.",
        "b": "Cell growth occurs during interphase.  There is no increase in mass during either meiosis or mitosis.",
        "c": "A centrosome is not formed de nova. A preexisting centrosome is replicated. Moreover, centrosome replication occurs in interphase, not meiosis.",  
        "d": "Because of crossing over, each homolog in each daughter cell (i.e. gamete), consists of a random assortment of paternal and maternal regions. Thus, none of the daughters are identical to any other. Identical daughters is the main goal of mitosis, not meiosis.",
        "e": "Correct, one of several: A primary purpose for meiosis is to reduce the genome to a haploid state.  This is necessary for fertilization to produce a diploid individual in the next generation.",
        "f": "Correct, one of several: This is produced by crossing over.  It promotes independent assortment."
    }
},
{
    "question": "Which image depicts prophase?",
    "Image": "QuestionImages/MitoticPhases.jpg",
    "answers": {
        "a": " ",
        "b": " ",
        "c": " ",
        "d": " ",
        "e": " "
    },
    "correctAns": [
        "c"
    ],
    "explain": { 
        "a": "Homologs migrating to opposite poles indicates anaphase.",
        "b": "Cells with complete nuclei and no mitotic figures indicates interphase.",
        "c": "CORRECT: Dissociating nucleus with condensing homologs indicates prophase.",
        "d": "Cytokinesis (splitting cell) with decondensing homologs indicates telophase.",
        "e": "Sister chromatids positioned at the equatorial plate indicates metaphase."
    }
},
{
    "question": "Shown are mitotic figures with a pair of replicated, homologous chromosomes. Which image depicts metaphase? ",
    "Image": "QuestionImages/MitoticPhasesInCell.jpg", 
    "answers": { 
        "a":" ",
        "b":" ",
        "c":" ",
        "d":" ",
        "e":" ",
    },
    "correctAns": [
        "d"
    ],
    "explain": { 
        "a": "Homologs migrating to opposite poles indicates anaphase.",
        "b": "A cell with a complete nucleus and no mitotic figure indicates interphase.",
        "c": "Cytokinesis (splitting cell) with decondensing homologs indicates telophase.",
        "d": " CORRECT: Sister chromatids positioned at the equatorial plate indicates metaphase.",
        "e": "Dissociated nucleus with condensing homologs indicates prophase.",
    }
},
{
    "question": "Shown are meiotic figures with a pair of replicated, homologous chromosomes. Which image depicts telophase I?",
    "Image": "QuestionImages/MeioticPhasesInCell.jpg",    
    "answers": { 
        "a":" ", 
        "b":" ",
        "c":" ",
        "d":" ",
        "e":" ",
        "f":" ",
        "g":" ",
    },
    "correctAns": [
        "b"
    ],
    "explain": { 
        "a": "Metaphase II: Sister chromatids instead of tetrads demonstrates that this germ cell is in meiosis II. Chromatid alignment at the equatorial plate indicates that this is metaphase.",
        "b": "CORRECT, Telophase I: The tetrads have separated, but there are still four strands in the same cytoplasm, suggesting that this germ cell is in meiosis I. The equatorial constriction is characteristic of cytokinesis, which occurs is in telophase. This conclusion is supported by fact that the sister chromatids are still condensed, which occurs in telophase I but not II. Moreover, the sisters are not symmetrically orientated. Instead they seem to be floating free in the cytoplasm, which is also characteristic of telophase.",
        "c": "Prophase I: The four chromatids form a tetrad, demonstrating that this germ cell is in meiosis I. All four chromatids are aligned in parallel. This is characteristic of synapsis, which occurs in prophase I. Two crossovers can be discerned, supporting the conclusion that this is in pachytene of prophase I.",
        "d": "Anaphase II: Lack of tetrads demonstrates that this germ cell is in meiosis II, not I. The chromatids are moving away from each other, with their centromeres oriented towards the poles. This indicates this is anaphase.",
        "e": "Anaphase I: Although the tetrad has separated into sister chromatids, there are still four chromatids for the homolog within the cell. This demonstrates that this germ cell is in meiosis I. The sisters are moving away from each other, with their centromeres oriented towards the poles. This indicates that this is anaphase.",
        "f": "Telophase II: Chromatids instead of tetrads indicates that this germ cell is in meiosis II. The equatorial constriction is characteristic of cytokinesis, which occurs is in telophase. This is supported by the observation that the chromatids are decondensing.",
        "g": "Metaphase I: The four chromatids form a tetrad, demonstrating that this germ cell is in meiosis I. Tetrad alignment at the equatorial plate indicates that this is metaphase."
    }
},
{
    "question": "Shown are meiotic figures with a pair of replicated, homologous chromosomes. Which image depicts anaphase I? ",
    "Image": "QuestionImages/MeioticPhasesOnSpindle.jpg", 
    "answers": { 
        "a":" ", 
        "b":" ",
        "c":" ",
        "d":" ",
        "e":" ",
        "f":" ",
    },
    "correctAns": [
        "f"
    ],
    "explain": { 
        "a": "Anaphase II: Chromatids instead of tetrads demonstrates that this germ cell is in meiosis II. The chromatids are moving away from each other, with their centromeres oriented towards the poles. This indicates this is anaphase.",
        "b": "Metaphase I: The four chromatids form a tetrad, demonstrating that this germ cell is in meiosis I. Tetrad alignment at the equatorial plate indicates that this is metaphase.",
        "c": "Prophase I: The four chromatids clustered together demonstrate that this germ cell is in meiosis I. Chromosome condensation is not completed, indicating that this is prophase. This conclusion is supported by the fact that the chromatids are randomly dispersed." ,
        "d": "Metaphase II: Sister chromatids instead of tetrads demonstrates that this germ cell is in meiosis II. Chromatid alignment at the equatorial plate indicates that this is metaphase.",
        "e": "Telophase I: The tetrads have separated, but there still seems to be four chromatids in the same cytoplasm, suggesting that this germ cell is in meiosis I. This conclusion is supported by fact that the sisters are not symmetrically orientated. Instead they seem to be floating free in the cytoplasm, which is characteristic of telophase. Moreover, the sister chromatids are still condensed, which occurs in telophase I but not II.",
        "f": "CORRECT, Anaphase I: Although the tetrad has separated into sister chromatids, there are still four chromatids within the cell, demonstrating that this germ cell is in meiosis I. The sisters are moving away from each other, with their centromeres oriented towards the poles. This indicates that this is anaphase."
    }
},
];
