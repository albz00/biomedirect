var shuffleMe = true;
var qBank = [
{
    "question": "Which RNA polymerase transcribes the largest number of different genes?",
    "Image": "",
    "answers": {
        "a": "pol I",
        "b": "pol II",
        "c": "pol III",
        "d": "pol γ",
        "e": "pol ε"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "RNA polymerase I transcribes rRNAs, which are the most abundant.  However, the question didn’t ask for abundance, which is their total mass in the cell.  It asked about the number of different genes.  rRNAs are abundant because there are multiple copies of each rRNA gene, however there are still only four different types, 18S, 5.8S, 28S and 5S.",
        "b": "CORRECT: RNA polymerase II encodes mRNA.  There’s a different mRNA for every protein, so the number of different mRNA genes is greater than any other class.",
        "c": "RNA polymerase III transcribes small RNA genes with internal promoters that fold back on themselves due to internal annealing, e.g. tRNAs, snRNAs, 5S rRNA.  Although there are a substantial number of these genes, they still don’t constitute the largest class.",
        "d": "DNA polymerase gamma replicates mitochondrial DNA, not genomic RNA.",
        "e": "DNA polymerase epsilon replicates the leading stand, not RNA."
    }
},
{
    "question": "Which characteristic of the genetic code says that the mRNA codon sequence parallels the polypeptide sequence?",
    "Image": "",
    "answers": {
        "a": "colinear",
        "b": "degenerate",
        "c": "non-overlapping",
        "d": "unambiguous",
        "e": "wobble"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Collinearity is what guarantees that the nucleotide sequence specifies the amino acid sequence.  It can be confused with non-overlapping, which is about the lack of partitions between codons, not their order.",
        "b": "Degeneracy states that most amino acids are specified by several codons.  It occurs because there are only 20 amino acids, but there are 64 triplet combinations of the four nucleotides.",
        "c": "Non-overlapping states that each codon begins after the previous codon.",
        "d": "Unambiguity states that each codon specifies one amino acid.  It can be thought of as the opposite of degeneracy, which is about how many codons specify an amino acid, not how many amino acids are specified by a particular codon.",
        "e": "Wobble states that for degenerate codons, it’s the third nucleotide that varies."
    }
},
{
    "question": "Which is not a characteristic of the nucleolus?",
    "Image": "",
    "answers": {
        "a": "it is the center for ribosome assembly",
        "b": "it is the center for rRNA synthesis",
        "c": "it occurs is cells translating proteins",
        "d": "it's a membrane bound organelle",
        "e": "multiple rRNAs are simultaneously transcribes from a single rRNA gene cluster"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Ribosomes are assembled in the nucleolus.",
        "b": "rRNA is synthesized in the nucleolus.",
        "c": "If a cell is translating a great deal of protein, it will need multiple ribosomes.",
        "d": "CORRECT: A nucleolus is stained dark because it’s dense with multiple rRNA genes, rRNA transcripts, ribonucleoproteins, and ribosomes.  However, it is not surrounded by a membrane.",
        "e": "Multiple rRNAs are transcribed from individual genes in the nucleolus."
    }
},
{
    "question": "Which enzyme catalyzes tRNA charging?",
    "Image": "",
    "answers": {
        "a": "aminoacyl-tRNA synthase",
        "b": "peptidyl-tRNA transferase",
        "c": "ribozyme",
        "d": "tRNA-acyl transferase",
        "e": "tRNA-methyl transferase"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Aminoacyl-tRNA synthase forms an aminoacyl bond between the 3’ hydroxyl of a tRNA and the carboxyl of its amino acid.",
        "b": "There is no peptidyl-tRNA transferase.  There is a peptidyl transferase that forms the peptide bonds during translation.",
        "c": "A ribozyme is an RNA with enzymatic activity.  An example is the spliceosome.",
        "d": "There is no tRNA-acyl transferase.  There is a histone acyl transferase, that acetylates histone lysines to promote euchromatin formation.",
        "e": "There is no tRNA-methyl transferase.  There is a DNA methyltransferase, that methylates promoters to inhibit transcription."
    }
},
{
    "question": "The tRNA at the A site of a ribosome is charged with a polypeptide.  The tRNA at the P site is not charged.  What will be the next step in the translation cycle?",
    "Image": "",
    "answers": {
        "a": "the cycle will progress to the release phase",
        "b": "the polypeptide at the A site will be transferred to the tRNA at the P site",
        "c": "the ribosome will check to confirm that the correct amino acid was incorporated into the polypeptide",
        "d": "the tRNA at the P site will be released and replaced with a charge tRNA",
        "e": "the tRNA at the P site will be released, while the tRNA at the A site will translocate to the P site"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "The cycle will not progress to the release phase until a stop codon reaches the A site.",
        "b": "A polypeptide attached to the tRNA at the P site is transferred to the amino acid attached to the tRNA at the A site.  The polypeptide is never transferred directly to an uncharged tRNA.",
        "c": "The ribosome has no proofreading function like some DNA polymerases.",
        "d": "The uncharged tRNA at the P site is released.  However, it is not replaced by the next charged tRNA.  Instead, the tRNA with the polypeptide at the A site translocates to the P site, and the next charged tRNA binds the A sit.",
        "e": "CORRECT: After peptidyl transferase moves the polypeptide to amino acid at the A site, the tRNA at the P site is released so that the tRNA at the A site can translocate to the P site and the next charged tRNA can bind to the A site."
    }
},
];

