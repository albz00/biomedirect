var shuffleMe = true;
var qBank = [
{
    "question": "How many sex chromosomes are in the human genome?",
    "Image": "",
    "answers": {
        "a": "1",
        "b": "2",
        "c": "23",
        "d": "44",
        "e": "46"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "There’s only one X chromosome, and one Y chromosome, but both are sex chromosomes.",
        "b": "CORRECT: The sex chromosomes are X & Y.",
        "c": "This is the number of chromosomes in a haploid genome of humans, e.g. an egg or sperm.",
        "d": "This is the number of autosomes in the diploid genome of humans, every chromosome except X & Y.",
        "e": "This is the total number of chromosomes in the diploid genome of humans."
    }
},
{
    "question": "What are the sex chromosomes?",
    "Image": "",
    "answers": {
        "a": "1",
        "b": "X",
        "c": "Y",
        "d": "X & Y",
        "e": "21"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Chromosome 1 is autosomal, as is any chromosome that’s designated by a number.  <br>It is the largest chromosome in the human genome.",
        "b": 'X is a sex chromosome, but the question did not ask for one type of sex chromosome, it asked for the "chromosomes".',
        "c": 'Y is a sex chromosome, but the question did not ask for one type sex chromosome, it asked for the "chromosomes".',
        "d": "CORRECT: X and Y are the sex chromosomes because they determine an individual’s sex.",
        "e": "Chromosome 21 is autosomal, as is any chromosome that’s designated by a number.  <br>It is the smallest autosomal chromosome in the human genome."
    }
},
{
    "question": "Why are males referred to as hemizygotes for X-linked traits?",
    "Image": "",
    "answers": {
        "a": "they are heterozygous for X-linked alleles",
        "b": "they have half as many sex-linked genes as females",
        "c": "they have half as many X-linked genes as females",
        "d": "they have half as many X-linked alleles as females",
        "e": "they have half as many Y-linked alleles as females"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Most of the X-linked genes cannot be heterozygous in males because their X-linked genes don’t have homologous loci on their Y chromosome.",
        "b": "With the exception of a handful of Y-linked genes that aren’t on the X chromosome, <br>males have as many sex-linked genes as females.",
        "c": "Males have the same number of X-linked genes as females.",
        "d": 'CORRECT: <br>The suffix "hemi" stands for half.  Females have 2 alleles for every X-linked gene; males have 1.  One is half of two.',
        "e": "With the exception of a handful of Y-linked genes that are on the X chromosome, females don’t have any Y-linked genes.",
    }
},
    {
    "question": "Which is an X-linked trait?",
    "Image": "",
    "answers": {
        "a": "aggression",
        "b": "body hair",
        "c": "Duchene’s muscular dystrophy ",
        "d": "IQ",
        "e": "Leber optic neuropathy"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Aggression is a sex influenced trait, not X-linked.  <br>On the average, aggression can be greater in males, but this is mostly due to autosomal genes.",
        "b": "Body hair is a sex influenced trait, not X-linked.  <br>Males do have more body hair than females, but this is mostly due to autosomal genes.",
        "c": "CORRECT: DMD is caused by a mutated <i>dystrophin</i> gene, which is on the X chromosome.",
        "d": "IQ is not a sex specific trait.  On the average it is equal between males and females, and it is mostly due to autosomal genes.",
        "e": "Leber optic neuropathy is a mitochondrial disease, which means it’s inherited by all the children of an affected mother.  However, this is because mitochondria are inherited from the mother, not because the gene’s on the X chromosome."
    }
},
    {
    "question": "A man is a contortionist.  Both of his parents have normal joints, but the joints of his maternal grandfather were extremely flexible just like his.  He has two sons with flexible joints, but his third son and both of his daughters have normal joints.  What is the inheritance pattern of this trait?",
    "Image": "",
    "answers": {
        "a": "autosomal dominant",
        "b": "autosomal recessive",
        "c": "multifactorial",
        "d": "X-linked dominant",
        "e": "X-linked recessive"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Loose joints are diagnostic for Ehrler’s-Danlos syndrome (EDS), and there are autosomal dominant types of EDS.  <br>However, the disease skipped a generation, his mother, so it cannot be dominant.",
        "b": "CORRECT: <br>Loose joints are diagnostic for Ehrler’s-Danlos syndrome (EDS), and there are autosomal recessive types of EDS.  <br>Moreover, two characteristics of autosomal recessive inheritance were demonstrated, skipping a generation with his mother and horizontal transmission with two of his sons, so this is an autosomal recessive type of EDS.",
        "c": "Loose joints are diagnostic for Ehrler’s-Danlos syndrome (EDS), but there’s no known multifactorial type of EDS.  <br>Moreover, this disease demonstrated two properties of another inheritance pattern, so it's not multifactorial.",
        "d": "Loose joints are diagnostic for Ehrler’s-Danlos syndrome (EDS), but there is no known X-linked dominant type of EDS.  <br>Moreover, it passed from the man to some of his sons but not his daughters, which rules out X-linkage.  <br>It also skipped a generation, his mother, so it cannot be dominant.",
        "e": "Loose joints are diagnostic for Ehrler’s-Danlos syndrome (EDS), and there are X-linked recessive-like types of EDS, although these are no longer included on the EDS spectrum.  <br>Also the disease did pass from the grandfather, through the unaffected mother, to the man. <br><br>However, it passed from the man to some of his sons but not his daughters, which rules out X-linkage."
    }
},
    {
    "question": "Which of the following is not a characteristic of the X-linked recessive pattern?",
    "Image": "",
    "answers": {
        "a": "50% of the sons of a carrier mother will be affected",
        "b": "all daughters of an affected father will inherit his mutant allele",
        "c": "inheritance from grandfather, through unaffected mother, to son",
        "d": "no affected females",
        "e": "no father to son transmission"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "If a mother is a carrier, then she’s heterozygous with a wild type and a mutant gene.  <br>Therefore, her sons all have an equal chance of inheriting an X chromosome with the wild type or mutant allele.",
        "b": "All daughters inherit their father’s X chromosome; that’s what makes them female.  <br>If a father is affected, then his X chromosome must have a mutant allele.  <br>Therefore, all daughters of an affected father inherit his X-linked allele.",
        "c": "This is the characteristic pattern of X-linked recessive traits.",
        "d": "CORRECT: This is not a characteristic of X-linked recessive inheritance.  Typically, there are fewer affected females than males, but if both of a female’s X chromosomes are mutant, then she will be homozygous, so she can be affected.",
        "e": "If it’s a boy then he must have inherited his father’s Y chromosome; that’s what made him male. <br>He couldn’t have inherited his father’s X chromosome so he couldn’t receive an X-linked allele from his father.  <br>This property is typically used to rule out X-linkage;  <br>if there’s even a single case of father to son transmission, it's not X-linkage."
    }
},
    {
    "question": "Glucose-6-phosphate dehydrogenase (G6PD) is an X-linked gene.  There are two alleles for G6PD, type A and B.   A woman’s genotype is heterozygous, AB.  However, when individual red blood cells are analyzed, they either express the A allele or the B, never both.  How can this be explained?",
    "Image": "",
    "answers": {
        "a": "Expressing both the A and B alleles makes cells inviable.",
        "b": "With each RBC, either the X chromosome with the A allele is inactivated, or the X with the B allele is inactivated.",
        "c": "The A allele must be dominant.",
        "d": "There must be a competition between the A & B alleles, so that one or the other is expressed in each cell."
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "There is no evidence that this occurs.",
        "b": "CORRECT: G6PD is X-linked and one X chromosome is inactivated in every cell of the female body.  <br>In each cell, this will either be the X chromosome with the A allele, or the X with the B allele.  <br>If the A allele is inactivated in an RBC, then the B allele will be expressed. <br>If the B allele is inactivated then the A allele will be expressed.",
        "c": "If A were dominant, then every cell would express the A allele.",
        "d": "X inactivation is believed to be random; it is not the result of competition between alleles."
    }
},
];