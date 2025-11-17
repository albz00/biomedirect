var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "What distinguishes a hormone from a growth factor?",
    "Image": "",
    "answers": {
        "a": "whether it binds a transmembrane or nuclear receptor",
        "b": "whether is controls hematopoiesis",
        "c": "whether it diffuses over a short distance, or is transported through the blood to distant target cells",
        "d": "whether it has metabolic and/or physiological effects, or it controls development and/or cell cycle progression",
        "e": "whether it was discovered by a physiologist or developmental biologist"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Both transmembrane and nuclear receptors can bind hormones or nuclear receptors.",
        "b": "Cytokines control hematopoiesis.",
        "c": "Paracrines diffuse over short distances, endocrines are transported through the blood.  Both can be hormones or growth factors.",
        "d": "Both hormones and growth factors can control metabolism, physiology, development and/or cell cycle progression.",
        "e": "CORRECT: An intercellular signaling molecule (ICM) that was first shown to have a physiologic or metabolic affect is named a hormone.  If it was first shown to affect development or cell cycle progression, it is called a growth factor.  However, numerous ICMs that were called growth factors have later been shown to have physiologic or metabolic effects, and numerous hormones have been shown to control development and the cell cycle.  Most hormones do predominantly control physiology and metabolism, while most growth factors predominantly control development and/or the cell cycle, but not always."
    }
},
{
    "question": "What class of biochemicals does not serve as an intercellular signaling molecule (ICM)?",
    "Image": "",
    "answers": {
        "a": "amino acids",
        "b": "carbohydrates",
        "c": "cholesterols",
        "d": "fatty acids",
        "e": "nucleotides",
        "f": "peptides"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Amino acid derivatives are used as ICMs, e.g. histidine → histamine, tryptophan → serotonin.",
        "b": "CORRECT: No carbohydrates, or derivatives, serve as ICMs.",
        "c": "Steroids are derivatives of cholesterol.",
        "d": "Prostaglandins and retinoic acid are fatty acid derivatives.",
        "e": "ADP serves as a platelet ICM, cAMP is a slime mold ICM.",
        "f": "Peptides and proteins are used as ICMs, e.g. insulin, follicle stimulating hormone.",
    }
},
{
    "question": "What is a distinguishing property of hydrophobic intercellular signaling molecules (ICMs)?",
    "Image": "",
    "answers": {
        "a": "binds transmembrane receptors",
        "b": "preformed stocks secreted as needed",
        "c": "short half-life",
        "d": "slow responses",
        "e": "transported free in the blood"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This is a property of hydrophilic ICMs.  Hydrophobic ICMs can diffuse through the hydrophobic cores of biomembranes and therefore tend to bind nuclear receptors.",
        "b": "This is a property of hydrophilic ICMs.  Hydrophobic ICMs are difficult to store and therefore tend to be synthesized as needed.",
        "c": "This is a property of hydrophilic ICMs.  Hydrophobic ICMs tend to be more stable with longer half-lives.",
        "d": "CORRECT: Hydrophobic ICMs tend to induce slower, long term responses; hydrophilic induce faster responses.  This is a consequence of all the other properties.",
        "e": "This is a property of hydrophilic ICMs.  Hydrophobic ICMs are carried through the blood by lipoprotein particles."
    }
},
{
    "question": "Why isn’t βglycan considered a receptor?",
    "Image": "",
    "answers": {
        "a": "its affinity for TGFβ ligands is low",
        "b": "it doesn’t directly induce a biological response",
        "c": "it doesn’t preferentially bind TGFβ ligands.",
        "d": "its expression isn’t limited to TGFβ responsive cells",
        "e": "ligand binding is permanent",
        "f": "ligand binding isn’t saturable"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Although the affinity of βglycan and TGFβ may not be as high as with type II TGFβ receptors, it is still greater than with other potential ligands.",
        "b": "CORRECT: βglycan is a membrane bound proteoglycan that sequesters TGFβ ligands, to present them to type II TGFβ receptors (TBRII).  Biological responses do not occur when βglycan is bound; they only occur when the ligand is transferred to TBRIIs.",
        "c": "Although other factors may get caught up by βglycan, it is more specific for TGFβ ligands.",
        "d": "βglycan is only expressed by TGFβ responsive cells.",
        "e": "TGFβ ligands can escape βglycan.  Indeed, they must be released to bind TBRII receptors.",
        "f": "βglycan can only bind so many TGFβ ligands.  Once it is saturated, it will not bind anymore."
    }
},
{
    "question": "Vesicles containing insulin receptors are internalized into a cell by endocytosis under certain physiologic conditions.  This is an example of what type of receptor regulation?",
    "Image": "",
    "answers": {
        "a": "affinity for effectors",
        "b": "affinity for ligand",
        "c": "cellular localization",
        "d": "membrane fluidity",
        "e": "receptor number"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Affinity for downstream effectors is not affected by internalization.",
        "b": "Affinity for insulin is not affected by internalization.",
        "c": "CORRECT: Internalization changes the location of the receptors from the plasma membrane, where insulin can reach them, to the cytoplasm where insulin cannot.  Thus, this is a mechanism for decreasing the responsiveness of the cells to insulin.",
        "d": "Membrane fluidity is not affected by internalization.",
        "e": "The number of receptors expressed by the cell is not affected by internalization."
    }
},
{
    "question": "An immunostain demonstrates that estrogen receptors are localized to the cytoplasms of uterine cells.  After the cells are incubated with cortisol, a glucocorticoid, where will the receptors be localized?",
    "Image": "",
    "answers": {
        "a": "cell culture medium",
        "b": "cytoplasm",
        "c": "estrogen responsive promoters",
        "d": "nucleoplasm",
        "e": "plasma membrane"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Nuclear receptors are not secreted by exocytosis.",
        "b": "CORRECT: Cortisol is not an estrogen, so it should have no effect.  Cortisol involves immunosuppression, not the reproductive system.",
        "c": "If the cells were treated with estrogen instead of cortisol, then the estrogen receptors would bind the promoters of estrogen responsive genes.",
        "d": "If the cells were treated with estrogen, then the estrogen receptors would be translocated to the nucleus.",
        "e": "Estrogen receptors are a type of nuclear receptor, not a transmembrane receptor."
    }
},
{
    "question": "A man who is experiencing a heart attack is admitted to an emergency room?  The doctor administers a steroid.  What will be the effect of this treatment?",
    "Image": "",
    "answers": {
        "a": "decreased tachycardia",
        "b": "elevated blood pressure",
        "c": "elevated heart rate",
        "d": "increased fibrillation",
        "e": "decreased inflammation"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Steroids act too slowly to affect tachycardia while a patient is having a heart attack.",
        "b": "Steroids act too slowly to affect blood pressure while a patient is having a heart attack.",
        "c": "Steroids act too slowly to affect heart rate while a patient is having a heart attack.",
        "d": "Steroids act too slowly to affect atrial or ventricular fibrillation while a patient is having a heart attack.",
        "e": "CORRECT: Steroids will decrease inflammation, which can help patients recover from a heart attack.  However, they act too slowly to save a patient who is having an attack. "
    }
},
{
    "question": "How do transmembrane receptors function?",
    "Image": "",
    "answers": {
        "a": "they are translocated from the plasma membrane to the cytosol in response to ligand binding",
        "b": "they are translocated to the nucleoplasm in response to ligand binding",
        "c": "they are translocated to the plasma membrane in response to ligand binding",
        "d": "they allow hydrophilic ligands to cross the plasma membrane",
        "e": "they transduce the signal of hydrophilic ligands across the plasma membrane"
    },
    "correctAns": [
        "d", "e"
    ],
    "explain": {
        "a": "The transmembrane domain of a transmembrane receptor is hydrophobic and bound to the core of the lipid bilayer.  Therefore, the receptor cannot diffuse into the hydrophilic cytoplasm.",
        "b": "This occurs with nuclear receptors, not transmembrane receptors.",
        "c": "Although some transmembrane receptors are bound to cytoplasmic vesicles which translocate to the plasma membrane in response to physiological conditions, this is not a response to ligand binding because the hydrophilic ligands cannot transverse the plasma membrane.",
        "d": "CORRECT, One of Several: This does not occur with most transmembrane receptors.  However, some receptors are channels that open in response to ligand binding.",
        "e": "CORRECT, One of Several: This is the mechanism employed by most transmembrane receptors.  Ligand binding induces a conformational shift of the cytoplasmic side of the receptor.  Thus, the signal is transduced from the extracellular side where the ligand binds, to the cytoplasmic side, without the ligand entering the cell."
    }
},
{
    "question": "With a TGFβ intercellular signaling pathway, what effector acts immediately upstream of a receptor regulated Smad, and what is immediately downstream?",
    "Image": "",
    "answers": {
        "a": "βglycan, and a Smad trimer",
        "b": "phosphorylated TBRII, and coSmad",
        "c": "Smad trimer, and TBRI",
        "d": "TBRII dimerization, and TBRI recruitment",
        "e": "transautophosphorylation, and activation cascade"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "βglycan does act upstream of a rrSmad, and Smad trimers are downstream, but they are separated in the pathway.  They are not immediately upstream and downstream.",
        "b": "CORRECT: When TBRII dimers are phosphorylated by ligand bound TBRI, they in turn phosphorylate rrSmads.  Two phosphrylated rrSmads then bind a coSmad.",
        "c": "Smad trimerization occurs downstream of rrSmads phosphorylation, TBRI is upstream.",
        "d": "Both TBRII and TBRI are upstream of the rrSmads.  Moreover, TBRII, like TBRI, spontaneously dimerizes, so it is not a step in the pathway.",
        "e": "Transautophosphorylation and an activation cascade occur with the Ras/MAPK pathway, not TGFβ signaling. "
    }
},
{
    "question": "How do Smad induce biological responses?",
    "Image": "",
    "answers": {
        "a": "they are transcription factors binding a recognition sequence of promoters to control gene expression", 
        "b": "they induce the release of calcium from the endoplasmic reticulum",
        "c": "they phosphorylate and activate enzymes",
        "d": "they phosphorylate and open channels",
        "e": "they phosphorylate transcription factors that then bind promoters to control gene expression",
        "f": "they translocate to the nucleus"
    },
    "correctAns": [
        "a", "f"
    ],
    "explain": {
        "a": "CORRECT, One of Several: Smad trimers act as transcription factors, binding recognition sequence to control transcription.",
        "b": "This is how IP3 works with phosphinositde pathways, not TGFβ pathways",
        "c": "This is how Ras/MAPK, cAMP and phosphoinositide pathways act, not TGFβ pathways.",
        "d": "Some channels are opened by phosphorylation, e.g. the calcium channels of phosphoinositide pathways, but this does not occur with TGFβ pathways.",
        "e": "Smad trimers are transcription factors; they do not phosphorylate other transcription factors.",
        "f": "CORRECT, One of Several: Two phosphorylated rrSmads form a trimer with a coSmad.  These trimers are then translocated to the nucleus, where they serve as as transcription factors.",
    }
},
{
    "question": "What acts upstream of Ras, and what acts downstream?",
    "Image": "",
    "answers": {
        "a": "a ligand and adaptor",
        "b": "adenylate cyclase and PKA",
        "c": "Raf and GEF",
        "d": "rTK and MEK",
        "e": "MEK and MAPK"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The ligand and adaptor of a Ras/MAPK pathway are both upstream of Ras.",
        "b": "Adenylate cyclase and PKA are effectors of the cAMP pathway, not the Ras/MAPK pathway.",
        "c": "Raf is downstream of Ras, not upstream, while GEF is upstream, not downstream.",
        "d": "CORRECT: Tyrosine kinase receptors are upstream of Ras; MEK is downstream.",
        "e": "MEK and MAPK are both downstream of Ras."
    }
},
{
    "question": "What does transautophosphorylation stand for?",
    "Image": "",
    "answers": {
        "a": "when a G protein coupled receptor removes GDP from Gα, and Gα automatically replaces it with a GTP",
        "b": "A kinase of one pathway phosphorylates an effector of another pathway ",
        "c": "separation of PIP<sub>2</sub> into IP<sub>3</sub> and DAG by PLC",
        "d": "two type II serine/threonine kinase receptors phosphorylate two type I serine/threonine kinase receptors when they form hexamers with two ligands",
        "e": "two tyrosine kinase receptors phosphorylate each other when they dimerize in response to ligand binding"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This occurs with cAMP signaling.  It is not transautophosphorylation.",
        "b": "This is an example of cross talk between pathways, not transautophosphorylation.",
        "c": "This occurs with phosphoinositide signaling.  It is not transautophosphorylation.",
        "d": "This occurs with TGFβ signaling.  It is not transautophosphorylation because it is not two way.  TBRII phosphorylates TBRI, but TBRI does not phosphorylate TBRII.",
        "e": "CORRECT: two rTKs dimerize in response to ligand binding.  Then each automatically phosphorylates the other."
    }
},
{
    "question": "Which of the following describes a strategy commonly employed to inactivate biological events such as signal transduction and gene expression? ",
    "Image": "",
    "answers": {
        "a": "activator expression ceases when the event needs to be shut off",
        "b": "inactivators are always expressed, so when the activating event ceases the inactivator shuts the mechanism off",
        "c": "inactivators are expressed when the event needs to be shut off",
        "d": "inhibitors are released from inactivators",
        "e": "inhibitors bind activators"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "If this were all that occurred, then there would be no way inactivate downstream substrates that were already phosphorylated.",
        "b": "CORRECT: For instance, as long ligands bind GPCRs, PKA activity is greater than general background phosphatase activity, and downstream substrates remain phosphorylated.  When ligand secretion ceases, PKA is inactivated and the phosphatases are there to dephosphorylate the downstream substrates, thereby inactivating the events induced by the ligand.",
        "c": "Typically, inactivator are always expressed, not just when the event needs to be shut off.",
        "d": "This is not a common mechanism.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",
        "e": "Although this is a common mechanism, if were all that occurred, then there would be no way inactivate downstream substrates that were already activated."
    }
},
{
    "question": "What would be the effect if Raf were dephosphorylated every time it phosphorylates MEK, and if MEK were dephosphorylated every time it phosphorylates MAPK?",
    "Image": "",
    "answers": {
        "a": "only one gene would be activated when a ligand binds a rTK",
        "b": "raf activation would only lead to phosphorylation of one downstream substrate",
        "c": "signal transduction from Raf to MAPK would be linear; there would be no exponential amplification",
        "d": "signal transduction would stall"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "MAPK could still phosphorylate multiple downstream effectors so expression of multiple genes could be activated.",
        "b": "As long as MAPK remains phosphorylated, it could phosphorylate multiple effectors.  Moreover, as long as the receptor is bound by ligand, then Raf and MEK could be reactivated.",
        "c": "CORRECT: This would prevent the activation cascade, thereby diminishing the extent of the signal.",
        "d": "Although the rate of signal transduction would decrease, it would not cease altogether. "
    }
},
{
    "question": "How do GCPRs activate Gα?",
    "Image": "",
    "answers": {
        "a": "calcium is released through channels to bind the Gα",
        "b": "Gα is activated when it is phosphorylated and releases from the receptor",
        "c": "it activates the GAP domain of Gα",
        "d": "it separates Gα from Gβ and Gγ dimers",
        "e": "the receptor plucks a GDP from Gα, which automatically binds GTP",
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This occurs with phosphoinositide signaling when IP<sub>3</sub> opens Ca<sup>+2</sup> channels, which then binds PKC.",
        "b": "Gα is not phosphorylated.  It binds a GTP.",
        "c": "The GTPase activating protein (GAP) domain of Gα is always active.",
        "d": "This is a consequence of GCPR activity, it is not what GCPR directly does to Gα.",
        "e": "CORRECT: When Gα replaces a GDP with GTP, it is released from the GPCR and Gβ, Gγ dimers, allowing it to bind and activate adenylate cyclase.",
    }
},
{
    "question": "What is the function of phosphodiesterase?",
    "Image": "",
    "answers": {
        "a": "it activates cAMP signaling by activating PKA",
        "b": "it activates cAMP signaling by converting ATP into cAMP",
        "c": "it inactivates cAMP signaling by dephosphorylating downstream substrates",
        "d": "it inactivates cAMP signaling by converting cAMP into AMP",
        "e": "it inactivates cAMP signaling by converting GTP bound to Gα into GDP"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "cAMP binding activates PKA, not phosphodiesterase.",
        "b": "Adenylate cyclase converts ATP into cAMP, not phosphodiesterase.",
        "c": "General phosphatases dephosphorylate downstream substrates, not phosphodiesterase.",
        "d": "CORRECT: Phosphodiesterase cleaves the cyclic 3’, 5’ phosphodiester bond of cAMP, thereby converting it into AMP",
        "e": "The GAP domain of Gα converts its GTP into GDP, not phosphodiesterase"
    }
},
{
    "question": "What acts upstream of adenylate cyclase, and what acts downstream?",
    "Image": "",
    "answers": {
        "a": "Gα and PKA",
        "b": "ligand and Gγ",
        "c": "phosphodiesterase and GCPR",
        "d": "regulatory and catalytic subunits of PKA",
        "e": "TBRII and coSmads"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Gα binds and activates adenylate cyclase (AC).  AC then converts ATP into cAMP, which activates PKA.",
        "b": "Ligand and Gγ are both upstream of adenylate cyclase.",
        "c": "Phosphodiesterase is downstream of adenylate cyclase; GCPR is upstream.",
        "d": "Both the regulatory and catalytic subunits of PKA are downstream of adenylate cyclase.",
        "e": "TBRII and coSmads are effectors of TGFβ signaling, not cAMP signaling. "
    }
},
{
    "question": "What acts upstream of PIP<sub>2</sub> and what acts downstream?",
    "Image": "",
    "answers": {
        "a": "DAG and Ca<sup>+2</sup>",
        "b": "GEF and PKA",
        "c": "IP<sub>3</sub> and Gqα",
        "d": "PLCγ and PKC",
        "e": "rTK and PLC"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "DAG and calcium are both downstream of PIP<sub>2</sub>.",
        "b": "GEF is a Ras/MAPK effector, PKA is a cAMP effector.",
        "c": "IP<sub>3</sub> is downstream of PIP<sub>2</sub>, Gqα is upstream.",
        "d": "CORRECT: PLCγ cleaves PIP<sub>2</sub> into DAG and IP<sub>3</sub>.  IP<sub>3</sub> opens calcium from the endosomal vesicles.  Calcium and DAG activate PKC.",
        "e": "rTK and PLC are both upstream of PIP<sub>2</sub>."
    }
},
{
    "question": "A researcher studying the involvement of Vitamin D Receptor (VDR) with rickets, treats cultured cells with an rTK inhibitor in an attempt to prevent VDR phosphorylation by PKC.  However, this treatment fails to prevent VDR phosphorylation.  Which of the following is the most likely explanation?",
    "Image": "",
    "answers": {
        "a": "rTK and PKC are both kinases, so inhibiting the first inhibits the other",
        "b": "the inhibitor prevents localization of PKC to the plasma membrane",
        "c": "VDR must be phosphorylated by another signal transduction pathway",
        "d": "VDR phosphorylation is induced by a PI pathway that’s activated by GPCR instead of rTK",
        "e": "VDR phosphorylation is induced by a PI pathway where rTK acts through PLCγ instead of Ras"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Presumably the researcher was smart enough to use an inhibitor that’s specific for rTK not PKC.",
        "b": "If PKC could not be localized to the plasma membrane in response to Ca<sup>+2</sup> binding, it wouldn’t bind DAG and wouldn’t be activated.  However, there are no grounds for assuming that the rTK inhibitor would also prevent PKC localization.",
        "c": "It has been shown that VDR is a substrate of PKC.  It is possible that a second signal transduction pathway targets VDR, but without any evidence that this is the case it isn’t the most likely explanation.",
        "d": "CORRECT: Some PI pathways are activated by rTKs, others by GPCR.  If the pathway that leads to VDR phosphorylation is activated by GPCR, then inhibiting rTK would have no effect.",
        "e": "No phosphoinositide pathway acts through Ras.  If the pathways acts through Ras then it’s a Ras/MAPK pathway.  Moreover, if the PI pathway is activated by rTK, then by definition it acts through a PLCγ.  If the pathway is activated by GCPR then the lipase is just called PLC.   "
    }
},
{
    "question": "What would be the most likely explanation for a delay between binding of IP<sub>3</sub> to Ca<sup>+2</sup> channels, and PKC activation?",
    "Image": "",
    "answers": {
        "a": "Ca<sup>+2</sup> bound PKC must first translocate to a membrane",
        "b": "Ca<sup>+2</sup> bound PKC must first translocate to the nucleoplasm",
        "c": "Ca<sup>+2</sup> must bind PKC",
        "d": "PKC must first be phosphorylated by Ras and released when GTP is removed by GAP",
        "e": "PLC must first cleave PIP<sub>2</sub> to produce IP<sub>3</sub> and DAG"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Not only will it take a moment for PKC to reach a membrane, it must also run into a DAG molecule in that membrane.",
        "b": "PKC does not translocate to the nucleus.",
        "c": "It is true that Ca<sup>+2</sup> released through a channel must reach PKC, but this simple hydrophilic diffusion occurs quickly.",
        "d": "This option is conflating PI and Ras/MAPK signaling.  PKC is an effector of PI signaling.  Release and activation of Ras in response to removal of GTP by GAP is an event of Ras/MAPK signaling.",
        "e": "Cleavage of PIP<sub>2</sub> into IP<sub>3</sub> and DAG by PLC occurs upstream of Ca<sup>+2</sup> release through channels."
    }
},
];
