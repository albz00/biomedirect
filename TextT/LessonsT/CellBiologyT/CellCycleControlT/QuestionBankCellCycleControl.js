var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "What is the correlation between cyclins and their cdks?",
    "Image": "",
    "answers": {
        "a": "cdks are active when their cyclins are abundant",
        "b": "cdks phosphorylate cyclins",
        "c": "cyclins induce cdk expression",
        "d": "specific cyclins bind specific cdks",
        "e": "the abundance of cyclins oscillates throughout the cell cycle, while cdk abundance is constant"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The abundance of cyclins oscillates throughout the cell cycle, so that a specific cyclin is expressed during a specific phase, either G1 or G2 & mitosis.  The abundance of cdks is constant, but their kinase activity is activated when their cyclins are abundant.",
        "b": "cdks phosphorylate numerous factors, but cyclins are not one.",
        "c": "This does not occur. Cyclins activate cdks, but they do not induce their expression.  Cdks are always expressed regardless of cyclin levels.",
        "d": "This is not a correlation; it is a phenomenon that results from molecular interaction between the two.",
        "e": "This is not a correlation; cyclin and cdk abundance are two independent phenomena",
    }
},
{
    "question": "Which of the following factors is phosphorylated when cyclin B binds cdc2?",
    "Image": "",
    "answers": {
        "a": "cdks are degraded",
        "b": "cyclin abundance drops due to degradation",
        "c": "cyclins are sequestered",
        "d": "cyclins dissociate from their cdks",
        "e": "phosphatases dephosphorylate the cdk"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "cdc2 is a G2 cdk.  Cdk4 is a G1 cdk.  Cdks do not phosphorylate each other.",
        "b": "No DNA polymerase is phosphorylated by a cdk.  If one were it would be by a G1 cdk, not cdc2 which is a G2 cdk.",
        "c": "CORRECT: Nuclear lamins are phosphorylated by cdc2 when it is activated.  This causes the nuclear lamins to dissociate, leading to nuclear membrane breakdown during prophase.",
        "d": "MPF (mitotic promoting factor) is the name for G2 cyclin-cdc2 complexes.  MPF does not phosphorylate itself.",
        "e": "Retinoblastoma is a substrate of G1 cyclin-cdk complexes.  Cyclin B and cdc2 are G2 specific, and their complexes form and become activated during G2, not G1."
    }
},
{
    "question": "How are cdks inactivated?",
    "Image": "",
    "answers": {
        "a": "cdks are degraded",
        "b": "cyclin abundance drops due to degradation",
        "c": "cyclins are sequestered",
        "d": "cyclins dissociate from their cdks",
        "e": "phosphatases dephosphorylate the cdk"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Cdks are not degraded; their abundance is constant throughout the cell cycle.",
        "b": "CORRECT: Cyclins are rapidly degraded by the ubiquitin pathway at the end of the phase where they are expressed.",
        "c": "G1 cyclins are sequestered by Rb, however this delays G1 cdk activation until a threshold of cyclin abundance is reached.  It does not inactivate cdks that are already active.",
        "d": "This does not occur; cyclins are not released from cdks they are bound to.",
        "e": "Phosphatases do turn off a cell cycle phases by dephosphorylating factors that were phosphorylated at the beginning of the phase, but cdk is not one of these factors."
    }
},
{
    "question": "How does retinoblastoma (Rb) serve as a checkpoint?",
    "Image": "",
    "answers": {
        "a": "it activates MPF when G2 cyclin-cdc2 complexes reach a threshold level",
        "b": "it binds E2F until it is dephosphorylated by phosphatases at the end of G1",
        "c": "it blocks progression from G2 to mitosis",
        "d": "its expression is stabilized by G1 cyclin-cdk phosphorylation",
        "e": "it sequesters E2F until G1 cyclin-cdk complexes reach threshold level"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "MPF is a G2 cyclin-cdc2 complex.  It is activated when it reaches a threshold, but this is due to a factor called cdc25, not Rb.",
        "b": "Rb does sequester E2F and release it near when G1 cyclin-cdk complexes reach a threshold, however this is because the complexes hyperphosphorylate Rb, not because phosphatases dephosphorylate it.",
        "c": "Rb blocks progression from G1 to S, not G2 to mitosis.",
        "d": "p53 is stabilized in response to DNA damage, not Rb in response to phosphorylation.",
        "e": "CORRECT: Increased  G1 cyclin abundance results in increased abundance of cyclin-cdk complexes.  Rb is a substrate of these complexes, so more and more Rb sites are phosphorylated.  When it reaches a hyperphosphorylation threshold it undergoes a conformational shift, causing it to release E2F, which is a transcription factors, inducing expression of genes required for S phase, i.e. required for DNA replication."
    }
},
{
    "question": "What would be the consequence of a mutation that stabilized the p53 protein, so that it didn’t spontaneously degrade after it was expressed?",
    "Image": "",
    "answers": {
        "a": "the cell cycle could not progress from G1 to S or from G2 to mitosis",
        "b": "the cell would divide out of control",
        "c": "the cell would prematurely progress from G1 to S phase",
        "d": "the progression of the cell cycle would not halt in response to DNA damage",
        "e": "the cell would be unable to undergo apoptosis in response to oncogene expression"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: p53 is normally unstable, but DNA damage and expression of certain oncogenes stabilizes it.  It then promotes expression of p21, which in turn blocks G1 cyclin and cdc2 expression, thereby blocking progression to S phase and mitosis.  Thus, if p53 were stable, p21 would always be expressed and the cell cycle could never progress.",
        "b": "p53 is a checkpoint preventing cell cycle progression in response to DNA damage.  Therefore, if p53 were stabilized cell cycle progression would always be blocked; it would not accelerate out of control.",
        "c": "If p53 were stabilized, instead of progressing prematurely the cell could not progress at all.  Rb is what prevents the cell from prematurely progressing to S phase.",
        "d": "This is true, but that’s because the cell cycle would be permanently halted, whether DNA is damaged or not.",
        "e": "Prolonged stabilization of p53 leads to apoptosis, so permanently stabilizing p53 would not prevent apoptosis.  If anything, it would accelerate apoptosis."
    }
},
];

