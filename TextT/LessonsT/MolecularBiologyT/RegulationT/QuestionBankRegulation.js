var shuffleMe = true;
var qBank = [
{
    "question": "Which of the following acts at the post transcriptional level of gene regulation?",
    "Image": "",
    "answers": {
        "a": "3’ UTR",
        "b": "alternate splicing",
        "c": "epigenetics",
        "d": "HAT",
        "e": "intracellular targeting"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Binding of factors to 3’ untranslated regions of certain mRNAs occurs at the translational level.",
        "b": "CORRECT: Alternate splicing occurs after an RNA sequence is transcribed, so it is post transcriptional.  Note, splicing occurs before transcription of a gene is completed, but the region involved must be transcribed before it can be spliced.",
        "c": "Epigenetics refers to heritable changes in gene expression that do not involve a change in DNA sequence.  It results from DNA methylation, which is pre-transcriptional.",
        "d": "Histone acetyl transferase promotes transcription by acetylating histone lysines to promote euchromatin formation, thereby exposing the DNA to RNA polymerases.  This is pre-transcriptional regulation.",
        "e": "Intracellular targeting is the localization of proteins and other factors to their destined cellular compartments.  Because it involves proteins, it is post translational."
    }
},
{
    "question": "How does HDAC inhibit transcription?",
    "Image": "",
    "answers": {
        "a": "it acetylates histone lysines to block binding to the negative phosphodiester backbone of DNA",
        "b": "it exposes the positive amines of histone lysines for binding to the negative phosphodiester backbone of DNA",
        "c": "it methylates promoters and enhancers to block transcription factor binding",
        "d": "it promotes conversion to euchromatin",
        "e": "it specifically degrades transcripts with a certain sequence"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "The lysines are acetylated by histone acetyltransferase (HAT), not HDAC.  Acetylation neutralizes the lysines, thereby inhibiting phosphodiester binding.  This promotes conversion to euchromatin, which promotes transcription.",
        "b": "CORRECT: Histone deacetylase does remove acetyl groups from the amine at the end of lysine side chains.  This exposes the positive charge of the amines, which form ionic bonds with the phosphodiester backbone of DNA.  Thus, the histones bind the DNA more tightly, promoting conversion to heterochromatin and inhibiting transcription.",
        "c": "This is the function of DNA methyltransferase, not HDAC.",
        "d": "HDAC promotes conversion to heterochromatin, not euchromatin.",
        "e": "This is the function the RNA induced silencing complex (RISC), which is responsible for RNA interference (RNAi)."
    }
},
{
    "question": "The intron of host gene A includes a short sequence which is complimentary to viral gene V.  Normally the intron is degraded along with the rest of the intron.  However, if the virus infects a cell/s, host gene B expresses a factor that binds the complimentary sequence, preventing it from being degraded.  What will be the result?",
    "Image": "",
    "answers": {
        "a": "gene V will be degraded as long as gene B expression continues",
        "b": "gene V will be inactivated until the cells divide",
        "c": "gene V will be permanently inactivated",
        "d": "gene V will be transiently inactivated ",
        "e": "the complimentary RNA sequence would be degraded by RNAase before it anneals with the mRNA for gene V",
        "f": "the mRNA for gene V will be degraded until the cells clear the complimentary RNA"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Gene B and the complimentary sequence of gene A serve to activate the mechanism.  After this mechanism is activated, it will continue to function even after gene B expression ceases.",
        "b": "With this scenario, the RNA of gene V will be degraded in all descendants of cells that the virus infected.",
        "c": "CORRECT: This scenario describes RNA interference (RNAi).  The complimentary sequence from gene A binds the mRNA of gene V.  RNA induced silencing complex (RISC) recognizes the double stranded RNA and degrades the entire transcript.  Then RISC “remembers” the sequence of gene V, and continues to degrade any of its transcripts that are ever expressed in the future.",
        "d": "With this scenario, gene V will be permanently inactivated.",
        "e": "RNAase does degrade all the RNA that's expressed in a cell.  However, the rate of degradation is not so great that the RNA is immediately cleared.  Some of it will persist long enough to anneal with the mRNA from gene V.",
        "f": "Degradation continues, even after the mRNA of gene V is cleared from the cell."
    }
},
{
    "question": "If <i>Drosophila melanogaster</i> females and <i>Drosophila simulans</i> males are crossed, no male offspring are produced and all female offspring are sterile?  The reciprocal cross produces the opposite results.  If <i>Drosophila melanogaster</i> males and <i>Drosophila simulans</i> females are crossed, no female offspring are produced and all male offspring are sterile?  How can this be explained?",
    "Image": "",
    "answers": {
        "a": "<i>Drosophila melanogaster</i> and <i>Drosophila simulans</i> are sibling species",
        "b": "<i>Drosophila melanogaster</i> must express a “sterilization gene,” which prevents development of reproductive organs in the opposite sex as the <i>Drosophila simulans</i> parent",
        "c": "<i>Drosophila simulans</i> must express a “killer gene,” which eliminates offspring with the opposite sex as the <i>Drosophila melanogaster</i> parent",
        "d": "the distribution of HAT and HDAC differs in the nuclei of the two species",
        "e": "variation in the methylation patterns of homologous genes between the two species"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "<i>Drosophila melanogaster</i> and <i>Drosophila simulans</i> are by definition sibling species because they do not produce fertile offspring that can pass genes onto future generations.  However that doesn’t answer the question.  The question was, what is the mechanism that explains the results?",
        "b": "This would explain the sex specific sterility of the offspring, but not the sex specific mortality.  Moreover, there is no evidence that this happens.",
        "c": "This would explain the sex specific mortality of the offspring, but not the sex specific sterility.  Moreover, there is no evidence that this happens.",
        "d": "Species and sex specific chromatin remodeling due to nuclear distribution of histone acetyltransferase and histone deacetylase could explain these results, but there is no evidence that this occurs.",
        "e": "CORRECT: This scenario results from epigenetic inheritance.  The sex specific methylation of genes differs between the species.  For instance, if a gene is methylated in <i>Drosophila melanogaster</i> females and <i>Drosophila simulans</i> males, then none of the offspring would express the gene.  This could result in the sex specific sterility and mortality that's observed."
    }
},
];

