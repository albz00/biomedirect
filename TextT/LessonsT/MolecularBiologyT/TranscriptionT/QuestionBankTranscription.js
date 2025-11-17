var shuffleMe = true;
var qBank = [
{
    "question": "You sequence a new gene and find that it does not have TATA box.  What does this suggest?",
    "Image": "",
    "answers": {
        "a": "this gene is probably expressed at low levels",
        "b": "this gene is probably mutated because it cannot be expressed without a TATA box",
        "c": "this gene is probably transcribed by RNA polymerase III",
        "d": "this gene probably encodes a histone",
        "e": "this gene probably has an exceptionally strong promoter"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Genes that lack TATA boxes do tend to be expressed at low levels.",
        "b": "Numerous expressed genes lack TATA boxes.",
        "c": "Most genes transcribed by pol III lack a TATA box.",
        "d": "Histones lack introns and poly A tails, but they do not lack TATA boxes.",
        "e": "TATAless genes tend to have weak promoters."
    }
},
{
    "question": "The transcriptional initiation complex consists of",
    "Image": "",
    "answers": {
        "a": "TAFs clustered around TBP",
        "b": "TBP bound to a TATA box",
        "c": "transcription factors bound to a promoter and enhancer, clustered around TAFs and TBP",
        "d": "transcription factors bound to a promoter, clustered around TAFs and TBP",
        "e": "upstream recognition sequences"
    },
    "correctAns": [
        "a", "c", "d"
    ],
    "explain": {
        "a": "CORRECT: TBP and TAFs can constitute a minimal promoter.",
        "b": "TAFs automatically bind TBP, so TBP would never bind the TATA box without TAFs.",
        "c": "CORRECT: Enhancers contribute to the initiation complexes of many genes.",
        "d": "CORRECT: Upstream transcription factors cluster around TAFs to elevate expression.",
        "e": "The upstream recognition sequences contribute to the initiation complex as their transcription factors bind the TAFs and each other, but they do not constitute an initiation complex by themselves."
    }
},
{
    "question": "Which of the following is a characteristic of most transcription factors’ activation domains?",
    "Image": "",
    "answers": {
        "a": "negative charge",
        "b": "non-specific binding to an enhancer",
        "c": "specific binding to recognition sequences",
        "d": "specific binding to TAFs",
        "e": "specific binding to the start of transcription"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: RNA polymerases are naturally attracted to the negative charge of DNA, and activation domains typically serve to increase the negative charge at the site.",
        "b": "The same transcription factors can bind enhancers and promoters.  DNA binding domains specifically bind recognition sequences, not activation domains.  Activation domains bind RNA polymerase non-specifically, they don’t bind recognition sequences.",
        "c": "DNA binding domains bind recognition sequences, not activation domains.",
        "d": "Many of the transcription factors in an initiation complex do bind TAFS, but this can occur with any part of the transcription factor, not just the activation domains.",
        "e": "The start of transcription is usually an A, 26 to 34 downstream from the TATA box.  It is recognized by pol II, but it is not bound by a transcription factor."
    }
},
{
    "question": "Mutation of which of the following sites has the least chance of producing a defect?",
    "Image": "",
    "answers": {
        "a": "exon",
        "b": "intron",
        "c": "promoter recognition sequence",
        "d": "splice site consensus sequence ",
        "e": "TTATTT sequence at the end of the gene"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Exons are the sequences that are not removed from the transcript.  Thus, their mutation will usually disrupt gene function, producing a defect.",
        "b": "CORRECT: Because introns are splice out of genes and degraded, mutation within them seldom has any affect on gene function, and seldom produces defects.",
        "c": "Mutation of a recognition sequence can prevent binding by its transcription factor.  This can prevent the gene from being transcribed, which could produce a defect.",
        "d": "This would prevent sequence from being removed by splicing, which would result in extraneous sequence in the mRNA and eventually polypeptide sequence.  There’s also a 2/3 chance it will result in a frameshift mutation.  Either would probably inactivate gene product, which could result in a defect.",
        "e": "This is the consensus sequence of polyadenylation.  It encodes an AAUAAA sequence in the mRNA.  If it were mutated then pol II would continue transcribing the mRNA until it reaches another TTATTT sequence that randomly occurs in the DNA.  This could produce a transcript with an extremely large 3’ UTR, which could interfere with expression in various ways.  For instance, it could increase the rate of degradation of the mRNA, it could interfere with transport through the nuclear pore complexes, and it could result in aberrant translational regulation."
    }
},
{
    "question": "What is unusual about mRNA capping?",
    "Image": "",
    "answers": {
        "a": "5’-5’ bond",
        "b": "beginning of a transcript",
        "c": "increases half-life",
        "d": "methylation",
        "e": "specified by a consensus sequence "
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Most nucleotides are connected by 5’-3’ bonds.  Capping is the only case where two nucleotides are connected by a 5’-5’ bond.",
        "b": "Capping does occur at the 5’ end of transcripts, so it could be argued that this is a correct answer.  However, it is not the best answer.  Numerous things can occur at the beginning of transcripts or other factors.  There is something much more unusual about capping.",
        "c": "Capping is believed to increase mRNA half-life by decreasing the rate of degradation, but so do other phenomenon such as methylation and polyadenylation.",
        "d": "Three specific sites are methylated at the cap site, but so are numerous other sites along the transcript, as are numerous other factors.",
        "e": "Capping automatically occurs at the 5’ end of mRNA.  It is not specified by a recognition sequence."
    }
},
];

