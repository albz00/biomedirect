var shuffleMe = true;
var qBank = [
{
    "question": "A gardener wants to plant 1000 snapdragons with pink flowers.  He places an order with a horticulturist, who has 10 plants with pink flowers in stock.  These are not enough to fill the order, so she will have to cross the pink plants she has.  What is the total number of F1 plants that will have to be produced to generate 1000 plants with pink flowers?",
    "Image": "",
    "answers": {
        "a": "500",
        "b": "1000",
        "c": "1333",
        "d": "2000",
        "e": "3000"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This is the number of red plants, as well as the number of white plants, that would have to be produced to get 1000 pink plants.",
        "b": "This is the desired number of pink plants.  Red and white plants will also need to be produced to get the pink plants, so the total number must be greater.",
        "c": "This is the number that would need to be produced if this were an autosomal recessive trait, with pink being dominant.  However, the inheritance pattern of snapdragon flowers is semidominant.",
        "d": "CORRECT: The inheritance pattern of snapdragon flower color is semidominant, governed by the 1:2:1 ratio.  Thus, ¼ of the F1 plants will have red flowers (rr), ½ pink (rw), ¼ white (ww).  That means the number of red F1 and white F1 will both be half the pink number.  The gardener wants 1000 pink plants, so 500 red plants will need to be produced, as well as 500 white plants, and the total number that will need to be produced is 500 + 1000 + 500 = 2000.  Note, to account for variability the horticulturist would actually want to produce a little overage, say 2100 F1 plants.",
        "e": "This assumes that the number of red plants, and the number of white plants, each equals the number of pink plants.  However, each actually equals half the number of pink plants"
    }
},
{
    "question": "A man can be transfused with type A, type B or type O blood.  His blood cannot be used to transfuse someone else who's blood is either type A, B or O.  This man marries a woman with type O blood.  What is the chance that their daughter will have type B blood?",
    "Image": "",
    "answers": {
        "a": "1/16",
        "b": "1/4",
        "c": "9/16",
        "d": "1/2",
        "e": "3/4"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This is the fraction of phenotypically recessive progeny that would be produced from a dihybrid cross.  However, this is a monohybrid cross with three alleles for one locus, <i>I<sup>A</sup></i>, <i>I<sup>B</sup></i> and <i>i</i>.",
        "b": "This is the fraction of phenotypically recessive progeny that would be produced from a monohybrid cross with two alleles, one dominant, one recessive.  However, this cross is more complicated, with two codominant alleles, <i>I<sup>A</sup></i> & <i>I<sup>B</sup></i>, and one recessive allele, <i>i</i>.",
        "c": "This is the fraction of phenotypically dominant progeny that would be produced from a dihybrid cross.  However, this is a monohybrid cross with three alleles for one locus, <i>I<sup>A</sup></i>, <i>I<sup>B</sup></i>, and <i>i</i>.",
        "d": "CORRECT: The <i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> alleles are codominant to each other.  The <i>i</i> allele, which produces type O blood, is recessive to <i>I<sup>A</sup></i> and <i>I<sup>B</sup></i>.<br><br>The man can be transfused with A, B or O blood, which means his blood is either AB or O.  However, the man's blood cannot be type O because it cannot be used to transfuse someone with either A, B or O blood.  Thus, the man's blood is AB.<br><br>His wife is type O, so the cross is written <i>I<sup>A</sup></i><i>I<sup>B</sup></i> x <i>ii</i>, which constitutes a test cross subject to the 1:1 ratio.  One half of the offspring will be <i>I<sup>A</sup>i</i>, one half <i>I<sup>B</sup>i</i>, and the chance of producing an <i>I<sup>B</sup>i</i> child is 50%.",
        "e": "This is the fraction of phenotypically dominant progeny that would be produced from a monohybrid cross with two alleles, one dominant, one recessive.  However, this cross is more complicated, with two codominant alleles, <i>I<sup>A</sup></i> & <i>I<sup>B</sup></i>, and one recessive allele, <i>i</i>."
    }
},
{
    "question": "In mice, the brown coat allele (<i>b</i>) is recessive to Black (<i>B</i>).  The albinism allele (<i>c</i>) is recessive to the pigmented coat allele (<i>C</i>).  However, mice who are homozygous recessive for both loci (<i>bbcc</i>) are albinos, not brown.  What is the inheritance pattern?",
    "Image": "",
    "answers": {
        "a": "complementation",
        "b": "dominant, recessive",
        "c": "epistasis",
        "d": "epigenetics",
        "e": "polygenic",
        "f": "semidominance"
    },
    "correctAns": [
        "c", "e"
    ],
    "explain": {
        "a": "Complementation determines if Mendelian traits with the same phenotype have mutations in the same gene, or different genes.  In this case, the genes do not have the same phenotype.  Moreover, the interaction between the genes does not follow the Mendelian inheritance pattern.  Therefore, this in not complementation.",
        "b": "Dominant and recessive traits applies to two alleles at one locus, but these are alleles at two different loci.   <i>c</i> alleles at one locus are not dominant to <i>b</i> alleles at a different locus.",
        "c": "CORRECT: The brown phenotype is not observed if the albino locus is homozygous recessive, even if the brown locus is homozygous recessive.  Thus, albino suppresses brown.  This is the definition of epistasis.",
        "d": "Epigenetics results from genomic imprinting, when methylation silences a gene.  There is no evidence that the brown coat color locus is being methylated.",
        "e": "CORRECT: Polygenic inheritance means that multiple loci contribute to a phenotype.  In this case two different loci, <i>b</i> and c, both control coat color.",
        "f": "Semidominance means that two alleles for one locus both contribute equally to the phenotype, so that heterozygotes have an intermediate phenotype.  In this case there are two different loci.  Moreover, mice with both <i>b</i> and <i>c</i> alleles are albino, not tan which would be the intermediate phenotype."
    }
},
];