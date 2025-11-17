var shuffleMe = true;
var qBank = [
{
    "question": "Which of the following factors is not an integral component of the replisome?",
    "Image": "",
    "answers": {
        "a": "clamp loader",
        "b": "pol δ",
        "c": "pol ε",
        "d": "primase",
        "e": "sliding clamp"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The clamp loader is the central scaffold of the replisome.",
        "b": "DNA polymerase δ is attached to an arm of the loader, where it replicates the lagging strand.",
        "c": "DNA polymerase ε is attached to an arm of the loader, where it replicates the leading strand.",
        "d": "CORRECT: Ligase is transiently bound by the replisome, but it is released after it transcribes a primer.",
        "e": "The sliding clamp that's bound to pol δ is transient, but the bound between pol ε and its clamp persists as long as the replisome is assembled."
    }
},
{
    "question": "What can be said about a cell that’s replicating its DNA?",
    "Image": "",
    "answers": {
        "a": "it’s expressing protein",
        "b": "it’s in Go stage",
        "c": "it’s in interphase",
        "d": "it’s preparing for cell division",
        "e": "it’s transcriptionally inactive"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Cells express protein throughout the cell cycle; not just during S phase when DNA is replicated.",
        "b": "A cell suspended in Go it is not replicating its DNA.",
        "c": "Interphase includes G1 and G2, as well as S phase, so a cell in G1 or G2 would be in interphase but it would be replicating its DNA.",
        "d": "CORRECT: Each daughter cell must inherit a complete genome after division, so every chromosome must be replicated.",
        "e": "Cells express RNA whether or not they are replicating their DNA."
    }
},
{
    "question": "How does pol ε function?",
    "Image": "",
    "answers": {
        "a": "fills in short, single stranded gaps",
        "b": "replicates the lagging strand",
        "c": "replicates the leading strand",
        "d": "transcribes RNA",
        "e": "translates mitochondrial DNA"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "DNA polymerase β fills in short gaps, not DNA polymerase ε.",
        "b": "DNA polymerase δ replicates the lagging strand, not DNA polymerase ε.",
        "c": "CORRECT: DNA polymerase ε has high processivity, allowing it continuously replicate the leading strand.",
        "d": "Pol ε is a DNA polymerase.  It is not an RNA polymerase.",
        "e": "DNA polymerase γ replicates mitochondrial DNA, not DNA polymerase ε."
    }
},
{
    "question": "If a zygote were conceived with a mutation that causes it to incorporate DNA polymerase β into the replication apparatus instead of Polԑ, what will be the most likely phenotype?",
    "Image": "",
    "answers": {
        "a": "the zygote will develop at an increased rate ",
        "b": "the zygote will develop normally, but at a delayed rate",
        "c": "the zygote will develop normally, producing a neonate with an increased risk for cancer",
        "d": "the zygote will not be able to divide because it will not be able to transcribe Okazaki fragments",
        "e": "the zygote will not be able to divide because it will only replicate short stretches of leading strand sequence"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This mutation would slow down or block replication; it would not increase development..",
        "b": "DNA replication would be stalled, preventing the zygote from dividing and developing into an embryo.",
        "c": "If a zygote could be produced it probably would have an increased risk of cancer due to chromosome instability.  However, this is very unlikely.  Indeed, the zygote would probably perish without even developing into a morula embryo.",
        "d": "There is no mention of DNA polymerase δ being affected, so there are no grounds for predicting that Okazaki fragments would not be produced.",
        "e": "CORRECT: DNA polymerase β fills in short gaps of single stranded sequence, such as those left by removal of RNA primers.  Therefore, if it were incorporated into the replisome instead of DNA polymerase ε, the leading strand would consist of short stretches.  This would probably cause replication to stall."
    }
},
{
    "question": "Which factor facilitates transfer of the lagging strand template to pol δ?",
    "Image": "",
    "answers": {
        "a": "sliding clamp",
        "b": "primase",
        "c": "helicase",
        "d": "primer",
        "e": "telomerase"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The sliding clamp attaches to DNA polymerase δ where it encircles a double stranded, template-RNA hybrid.  Thus, it allows pol δ to pull the hybrid away from helicase.",
        "b": "Primase transcribes the RNA primer.  It is not involved with transfer to DNA polymerase δ.",
        "c": "Helicase unwinds the double helix, exposing the two strands for replication.  It is not involved with transfer to DNA polymerase δ.",
        "d": "A primer is a short stretch of RNA that provides the 3’ OH required to initiate replication.  It is part of the complex that is transferred to DNA polymerase δ, but it is carried by the factor that is transferred.",
        "e": "Telomerase is the enzyme that extends the ends of chromosomes.  It is not a component of the replisome and has nothing to do with transfer to DNA polymerase δ."
    }
},
{
    "question": "What is produced by discontinuous replication?",
    "Image": "",
    "answers": {
        "a": "histones",
        "b": "leading strand",
        "c": "Okazaki fragments",
        "d": "ORIs",
        "e": "Oscar-Miller feathers"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Histones are structural factors that binds the DNA of a chromosome.  They are not involved with replication.",
        "b": "The leading strand is continuously replicated.",
        "c": "CORRECT: To compensate for the overall 3’-5’ direction of lagging strand replication, it is synthesized in short 5’-3’ stretches known as Okazaki fragments.",
        "d": "An origin of replication is a site where replication of a replicon commences.  Both continuous leading and discontinuous lagging strand replication commences at the site.",
        "e": "Oscar-miller feathers are a transcriptional phenomenon, not replicational.  They are produced by simultaneous transcription of multiple rRNAs from a single gene."
    }
},
{
    "question": "What would be consequence of a zygote that is conceived without telomerase?",
    "Image": "",
    "answers": {
        "a": "It would be unable to remove RNA primers left in the lagging strand",
        "b": "It would divide out of control and develop into a uterine tumor",
        "c": "It would fail to replicate its chromosome due to excessive supercoiling",
        "d": "It would perish as a morula due progressive chromosome shortening",
        "e": "Its telomeres would become unstable due to excessive elongation"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "RNAase removes primers from the lagging strand, not telomerase.",
        "b": "Activation, not inactivation, of telomerase in cells that are normally amitotic is one event of carcinogenesis.",
        "c": "Topoisomerase prevents excessive supercoiling, not telomerase.",
        "d": "CORRECT: Without telomerase, the 3’ end of each strand would lose a little sequence each round of replication, eventually exposing the ends to degradation by exonucleases.",
        "e": "Lack of telomerase would cause the chromosomes to shorten, not elongate."
    }
},
];

