var shuffleMe = true;
var qBank = [
{
    "question": "Why are dark G bands stained more intensely?",
    "Image": "",
    "answers": {
        "a": "They consist of less condensed, euchromatic regions of the mitotic chromosome, which take up less stain.",
        "b": "They consist of less condensed, euchromatic regions of the mitotic chromosome, which take up more stain.",
        "c": "They consist of less condensed, heterochromatic regions of the mitotic chromosome, which take up more stain.",
        "d": "They consist of more condensed, euchromatic regions of the mitotic chromosome, which takes take up less stain. ",
        "e": "They consist of more condensed, heterochromatic regions of the mitotic chromosome, which take up more stain. "
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "The dark G bands are not euchromatic.  <br>Taking up less stain results in lighter bands, not darker.",
        "b": "The dark G bands are not euchromatic.  <br>Less condensed euchromatin takes up less stain, not more.",
        "c": "Heterochromatin is more condensed, not less.  <br>Less dense chromatin takes up less stain, not more.",
        "d": "The dark G bands are not euchromatic.  <br>Euchromatin is less condensed, not more.",
        "e": "CORRECT: Heterochromatin is more condensed. <br>This does cause it to take up more stain. <br>Taking up stain does produce darker bands."
    }
},
{
    "question": "What does the bracket designate?",
    "Image": "Questionimages/GeneralCytogenetics2.jpg",
    "answers": {
        "a": "centromere",
        "b": "G band",
        "c": "p arm",
        "d": "q arm",
        "e": "telomere"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The centromere is the primary constriction.  It is at the left side of the bracket.",
        "b": "G bands are the dark and light bands along the length of the chromosome.",
        "c": "The p (petite) arm is the shorter part of a chromosome. It is to the left of the region marked by the bracket.",
        "d": "CORRECT: The q arm is the longer part of a chromosome, on one side of the centromere.",
        "e": "Telomeres are the ends of chromosomes.  One is on the right side of the bracket; the other is on the opposite end of the chromosome."
    }
},
    {
    "question": "A G band is designated p12.2.  What does this designation mean?",
    "Image": "",
    "answers": {
        "a": "long arm, band one, sub-band 2, 2nd gene",
        "b": "long arm, band one, sub-band 2.2",
        "c": "short arm, gene one, band 2.2",
        "d": "short arm, band one, sub-band 2, 2nd gene",
        "e": "short arm, band one, sub-band 2.2"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "p designates the short arm, not the long arm.  <br>The .2 designates a region within the sub-band, not a specific gene.",
        "b": "p designates the short arm, not the long arm.",
        "c": "The first number designates the band, not a specific gene.",
        "d": "The .2 designates a region within the sub-band 2, not a specific gene.",
        "e": "CORRECT: The p designates the short arm.  <br>The first number designates the band. <br>The second number designates a sub-band.  <br>The .2 designates a region of the sub-band."
    }
},
    {
    "question": "What type of chromosome has an off-center centromere?",
    "Image": "",
    "answers": {
        "a": "acrocentric",
        "b": "bicentric",
        "c": "metacentric",
        "d": "submetacentric",
        "e": "telocentric"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The centromeres of acrocentric chromosomes are near one end.",
        "b": "Bicentric would designate a chromosomal with two centromeres.  This could be produced by translocation.  This mutation could interfere with chromatid separation during telophase.",
        "c": "The centromeres of metacentric chromosomes are at the middle of the chromosome.",
        "d": "CORRECT: The centromeres of submetacentric chromosomes are close to, but not at the  middle of the chromosome.",
        "e": "The telomeres of telocentric chromosomes are used as centromeres.  These are found in <i>Drosophila</i>."
    }
},
    {
    "question": 'For chromosome 3, what does the number "three"" indicate?',
    "Image": "",
    "answers": {
        "a": "It has three bands.",
        "b": "It’s the third largest chromosome in the genome.",
        "c": "It’s the third smallest chromosome in the genome.",
        "d": "The chromosome has three homologs."
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Chromosomes are not classified by the number of bands they possess.",
        "b": "CORRECT: Chromosomes are numbered by size. Chromosome 1 is the largest, 21 is the smallest, so 3 is the third largest.",
        "c": "Chromosomes are numbered by size, but smaller numbers denote larger chromosomes.",
        "d": "If a chromosome has three homologs it’s a trisomy."
    }
},
    {
    "question": "In humans, autosomal chromosomes are classified into seven groups.  What is the basis of this classification system?",
    "Image": "",
    "answers": {
        "a": "the number of G bands",
        "b": "susceptibility to aneuploidies",
        "c": "susceptibility to mutation ",
        "d": "the size of the chromosomes",
        "e": "centric classes",
        "f": "whether they are autosomal or sex chromosomes"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Although the larger a chromosome the greater the number of G bands that it tends to possess, this is not an absolute correlation and band number does not constitute a useful criterion for classifying chromosomes.",
        "b": "Nondisjunction is believed to occur at equal rates with all chromosomes, so this cannot be used as a criterium for classifying chromosomes.",
        "c": "There are regions that are subject to higher mutation rates, e.g. 22(q11.2-q11.3), but this is not the basis of classifying human chromosomes.",
        "d": "Chromosomes are ordered by size, but this is not the basis for classifying groups.",
        "e": "CORRECT: Each group contains several chromosomes in the same size range, that all belong to the same centric class (metacentric, sub-metacentric, acrocentric).",
        "f": "Sex chromosomes do constitute a separate class, but the question asked how are the autosomal chromosomes classified."
    }
},
    {
    "question": "A patient’s genotype is 46, XX, dup(17)(p12p12)). What does this genotype denote?",
    "Image": "",
    "answers": {
        "a": "diploidy, female, duplication of the 1<sup>st</sup> band, 7<sup>th</sup> sub-band, of the short arm of chromosome 12.",
        "b": "diploidy, female, duplication of the 1<sup>st</sup> band, 2<sup>nd</sup> sub-band, of the short arm of chromosome 17.",
        "c": "diploidy, male, duplication of the 17<sup>th</sup> band, 12<sup>th</sup> sub-band, of the long arm of chromosome 46.",
        "d": "monosomy, female, duplication of chromosome 17, 1<sup>st</sup> band, 2<sup>nd</sup> sub-band, of the short arm.",
        "e": "trisomy, male, duplication of chromosome 12, 1<sup>st</sup> band, 7<sup>th</sup> sub-band, of the long arm."
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "The number 17 denotes the chromosome, not the 1<sup>st</sup> band, 2<sup>nd</sup> sub-band.  <br>The number 12 denotes the 1<sup>st</sup> band, 2<sup>nd</sup> sub-band, not the chromosome.",
        "b": "CORRECT: <br>46 is the normal number of chromosomes.  <br>Diploidy is the normal state, with 2 copies of all 23 chromosomes.  <br>XX indicates that this is a female. <br>dup denotes a duplication. <br>17 is the chromosome where the duplication is located. <br>p denotes the short arm. <br>1 denotes the 1<sup>st</sup> band, 2 denotes the 2<sup>nd</sup> sub-band. <br>This is the genotype of Charcot Marie Tooth syndrome.",
        "c": "The XX indicates that this is a female, not male.  <br>The 17 denotes the chromosome, not the band.  <br>The 12 denotes the 1<sup>st</sup> band, 2<sup>nd</sup> sub-band, not the sub-band. <br>p denotes the short arm, not the long arm.  <br>46 denotes the number of chromosomes in the genome, not the specific chromosome.",
        "d": "The number 46 indicates that this is a normal, diploid cell.  It is not monosomic.  <br>The dup prefix denotes a duplication of bands, not an entire chromosome like 17.",
        "e": "The number 46 indicates that this is a normal, diploid cell.  It is not trisomic.  <br>The XX indicates that this is a female, not male.  <br>The dup prefix denotes a duplication of bands, not an entire chromosome.  <br>12 denotes band one, sub-band 2, not chromosome 12<br>The 17 is the chromosome, not the band & sub-band.  <br>p denotes the short arm, not the long arm."
    }
},
    {
    "question": "What is the genotype of Burkitt's lymphoma?",
    "Image": "",
    "answers": {
        "a": "46, XX, t(8,14)(q24.1;q32)",
        "b": "47, XY, +13",
        "c": "46, XY, del(5)(p15)",
        "d": "46, XY, t(9;22)(q34;q11)",
        "e": "69, XXX"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: t(8,14) indicates that this is a translocation between chromosome 8 and 14.  This translocation does result in Burkitt's lymphoma.",
        "b": "The number 47 indicates that there’s one more chromosome than normal, so this specifies a trisomy.  The +13 indicates that the extra chromosome is number 13.  This is the genotype of Patau’s syndrome.",
        "c": "This is a deletion from the short arm of chromosome 5, so this is cri du chat syndrome.",
        "d": "This is a translocation.  However, t(9;22) indicates that the translocation occurred between chromosomes 9 and 22, so this is chronic myelogenous leukemia, not Burkitt’s.",
        "e": "69 indicates that there are three complete sets of chromosomes, so this is triploidy.  <br>This conclusion is supported by the fact that there are three sex chromosomes, i.e. XXX."
    }
},
    {
    "question": "How would a deletion of the 2nd band, 4th sub-band, of the long arm of chromosome 3, be denoted.",
    "Image": "",
    "answers": {
        "a": "del(3)(q24)",
        "b": "del(3)(p24)",
        "c": "del(3q)(24)",
        "d": "del(3q24)",
        "e": "del(4)(q23)"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: <br>The chromosome number is within the first parentheses. <br>The arm, band, and sub-band, are in the second parentheses.",
        "b": "The p denotes the short arm, but the question asked for a deletion within the long arm.",
        "c": "The arm, q, should be within the second parentheses, along with the band and sub-band.",
        "d": "The chromosome number should be within its own parentheses, (3).",
        "e": "The numbers 3 and 4 are reversed."
    }
},
    {
    "question": "What type of FISH is depicted by the image?",
    "Image": "QuestionImages/GeneralCytogenetics10.jpg",
    "answers": {
        "a": "interphase, with one probe",
        "b": "interphase, with a telomeric probe",
        "c": "interphase, with two locus specific probes",
        "d": "metaphase, with a centromeric probe",
        "e": "metaphase, with a chromosomal paint"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: <br>Lack of mitotic figures within a circular nucleus is characteristic of interphase FISH. <br>The two spots were produced by one probe binding two alleles, each on a different homolog.",
        "b": "Without mitotic figures it is not possible to judge where the probes are located on the chromosomes, so there are no grounds for concluding that a telomeric probe was used.",
        "c": "Without mitotic figures it is not possible to judge where the probes are located on the chromosomes, so there are no grounds for concluding that locus specific probes were used.  <br><br>If two probes were used they would be different colors.",
        "d": "Lack of mitotic figures indicates that this is interphase, not metaphase FISH.  <br><br>Without mitotic figures it is not possible to judge where the probes are located on the chromosomes, so there are no grounds for concluding that a centromeric probe was used.",
        "e": "Lack of mitotic figures indicates that this is interphase, not metaphase FISH.  <br><br>If paints were used then extended strands would be observed, not condensed dots."
    }
},
    {
    "question": "What type of probe was used to prepare this FISH image?",
    "Image": "QuestionImages/Cytogenetics11.jpg",
    "answers": {
        "a": "locus specific for autosomal chromosomes",
        "b": "locus specific for metacentric chromosomes",
        "c": "locus specific for transposons",
        "d": "telomeric",
        "e": "telomeric, specific for acrocentric chromosomes",
        "f": "telomeric, specific for submetacentric chromosomes"
   },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "If a probe that is specific for every autosome were available, there would still be 2 unlabeled chromosomes, the sex chromosomes. <br><br>Locus specific probes bind specific sites, not both ends of every chromosome in the genome.",
        "b": "If a probe that is specific for metacentric chromosomes were available, then only 3 would be labeled. <br><br>Locus specific probes bind specific sites, not both ends of every chromosome in the genome.",
        "c": "A probe that's specific for a transposon sequence that's repeated throughout the genome could label every chromosome, but the labeled sites would be scattered across the chromosomes, not restricted to the ends.",
        "d": "CORRECT: Every chromosome has a telomere at each end, so both ends of every chromosome were labeled by a general, telomeric probe.",
        "e": "There are only 5 acrocentric chromosomes in the human genome, so an acrocentric probe would leave 18 chromosomes unlabeled.",
        "f": "There are only 12 submetacentric chromosomes in the human genome, so a submetacentric probe would leave 11 chromosomes unlabeled."
    }
},
    {
    "question": "A cytogeneticist uses FISH to diagnose a patient believed to have Patau’s syndrome.  What would be the most appropriate probe to use for this purpose?",
    "Image": "",
    "answers": {
        "a": "a centromeric probe specific for acrocentric chromosomes",
        "b": "a centromeric probe specific for chromosome 13",
        "c": "a chromosomal paint specific for chromosome 13",
        "d": "a telomeric probe specific for telocentric chromosomes",
        "e": "a locus specific probe specific for chromosome 13"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Chromosome 13 is acrocentric, so three copies would be labeled with this probe.  However, there are 5 other acrocentric chromosomes in the human genome that would all be labeled, so it would not be possible to distinguish chromosome 13 from the others.",
        "b": "CORRECT: If three chromosomes were labeled with this probe, that would demonstrate that there are three copies of chromosome 13.",
        "c": "Although a chromosomal paint would demonstrate trisomy 13, but it would be overkill. A probe specific for one site on chromosome 13 is all that's needed.",
        "d": "Chromosome 13 is not telocentric, so this could not demonstrate Patau's syndrome. Indeed, there are no telocentric chromosomes in the human genome.",
        "e": "Although this could demonstrate trisomy 13, it is subject to error.  For instance, if the locus were deleted from one of the three homologs of chromosome 13, then only two chromosomes would be labeled."
    }
},
    {
    "question": "Interphase FISH is performed with cells from a patient with Burkitt's lymphoma. Two locus specific probes are used.  An orange probe is specific for a region within band 8(q24).  A green probe is specific for a region within band 14(q32).  The image shows the results.  What do the yellow spots demonstrate?",
    "Image": "QuestionImages/Cytogenetics13.jpg",
    "answers": {
        "a": "binding of the probes to the centromeres of chromosome 8 & 14",
        "b": "cross binding of each probe with both loci",
        "c": "binding of the green probe to a similar sequence within the 8(q24) band",
        "d": "reciprocal translocation between chromosome 8 & 14",
        "e": "inversion of both bands"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "These are locus specific probes, not centromeric, so they will not label centromeres.",
        "b": "If this happened, both probes would bind each site on all four chromatids, which would produce four yellow spots.",
        "c": "This would produce two yellow spots and two orange spots.",
        "d": "CORRECT: Translocation must have created two fusion sites, each with half of band 8(q24), half 14(q32).  At each site the orange probe binds the 8(q24) half, while the green probe binds the 14(q32) half.  Proximity causes the orange and green fluorescence to blend, creating the yellow color.  Note, close examination reveals that the spots are actually trichromic, orange, yellow and green.  <br><br>Two yellow spots were produced because it was a reciprocal translocation.  <br><br>The orange spot and green spot were produced by the two chromosomes that were not involved with the translocation.",
        "e": "If the loci were in  opposite orientations, the probes would still bind to them separately, and no yellow spots would be observed."
    }
},
    {
    "question": "An egg is fertilized by two sperm.  What is the most likely outcome?",
    "Image": "",
    "answers": {
        "a": "choriocarcinoma",
        "b": "complete hydatidiform mole",
        "c": "malformed birth ",
        "d": "partial hydatidiform mole ",
        "e": "spontaneous abortion"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "There is significant risk that a hydatidiform mole will metastasize into a choriocarcinoma. However, this is not the most frequent outcome of polyspermy.",
        "b": "Polyspermy results in triploidy. <br>A triploid zygote can expel one of its nuclei.  If it happens to expel the maternal nucleus, then it will be left with two male nuclei (androgenetic diploidy).  This will produce a complete hydatidiform mole. However, this is not the most frequent outcome.",
        "c": "Polyspermy results in triploidy. <br>A triploid conception can develop to term, producing an inviable neonate with multiple malformations. However, this is not the most frequent outcome.",
        "d": "Polyspermy results in triploidy. <br>Triploid conceptions can develop into partial hydatidiform moles. However, this is not the most frequent outcome.",
        "e": "CORRECT: Polyspermy results in triploidy. <br>Most triploid conceptions are spontaneously aborted, often before the mother realizes she’s pregnant."
    }
},
    {
    "question": "A neonate is born with hyperflexibility, upslanting palpebral fissures with epicanthal folds, protruding tongue, flat nasal bridge, and single palmar creases.  What type of genetic defect does the neonate probably have?",
    "Image": "",
    "answers": {
        "a": "aneuploidy",
        "b": "chromosomal aberration",
        "c": "euploidy",
        "d": "point mutation",
        "e": "polyploidy"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: These symptoms are diagnostic for Down’s syndrome.  <br>Down’s is a trisomy, which is a type of aneuploidy.",
        "b": "These symptoms are diagnostic for Down’s syndrome.  <br>It is possible that translocation could have produced a partial trisomy of q22, the critical region of chromosome 21. This would result in Down’s syndrome.  However, q22 translocations are  uncommon, so this isn’t the best answer.",
        "c": "These symptoms are diagnostic for Down’s syndrome.  <br>Euploidies have complete sets of chromosomes, haploidy, diploidy, triploidy, tetraploidy, etc.  <br>Down's syndrome is not produced by euploidy.",
        "d": "There is no known point mutation that would produce all the symptoms observed with this patient.",
        "e": "These symptoms are diagnostic for Down’s syndrome.  <br>Polyploidies have more than two complete sets of chromosomes.  <br>Down’s patients have an extra copy of chromosome 13, not an extra copy of every chromosome in the genome."
    }
},
    {
    "question": "A male is born with a rocker bottom foot, elfin ears, narrow hips, prominent occiput and the first finger of each hand overlapping the second.  Cytogenetic analysis is conducted, demonstrating the neonate has 46 chromosomes.  How can this be explained?",
    "Image": "",
    "answers": {
        "a": "androgenetic diploidy",
        "b": "genetic mosaicism",
        "c": "partial trisomy",
        "d": "translocation of the critical region of chromosome 18",
        "d": "trisomy 18",
        "e": "uniparental disomy"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Androgenetic diploidy is when there are two genomes from the father, none from the mother.  This results in complete hydatidiform moles, not Edwards syndrome.",
        "b": "If the neonate were mosaic with trisomic and normal cells, then both genotypes would have been detected.  However, his cells were all diploid.",
        "c": "CORRECT: Translocation can produce an individual with an extra fragment of chromosome 18, which could result in Edwards syndrome.",
        "d": "Unlike chromosome 21, there is no critical region of chromosome 18.  Partial trisomies of multiple region across chromosome 18 had Edwards syndrome.",
        "d": "Trisomy 18 would explain the neonate's symptoms.  However, if he did have three copies of chromosome 18, there would be 47 chromosomes in his genome, not 46.",
        "e": "Uniparental disomy is when an offspring inherits two copies of a chromosome from one parent, no copies of that chromosome from the other parent.  These are usually asymptomatic and do not result in Edwards syndrome."
    }
},
    {
    "question": "A resident of Chernobyl Ukraine was 20 weeks pregnant when the nuclear power plant exploded.  Her baby girl was completely normal when she was born.  After the girl grew up, she had a baby boy with numerous congenital malformations.  The boy’s karyotype is visualized by G banding, revealing he has a 3(q18q21) deletion.  What is the most likely etiology of the child’s genetic defect?",
    "Image": "",
    "answers": {
        "a": "deamination",
        "b": "DNA ligase error",
        "c": "mitotic nondisjunction",
        "d": "polyspermy",
        "e": "spontaneous mutation"
    },
    "correctAns": [
        "b",
    ],
    "explain": {
        "a": "Deamination is when an amino group is lost from the base of a nucleotide.   These can produce point mutations, not chromosomal aberrations.",
        "b": "CORRECT: <br>It is likely that gamma rays released from the nuclear disaster penetrated one of the oocytes of the woman’s fetus.  These γ rays would have cleaved a homolog of chromosome 3 into three fragments, the ends on each side of q1821, and the q1821 region itself.  <br><br>DNA ligase would then have joined the two ends together without the q1821 fragment, producing the deletion.  <br><br>After the girl grew up, the oocyte with the deletion would have been fertilized, producing the boy with multiple defects.",
        "c": "Mitotic nondisjunction in a blastomere produces genetic mosaics with a mixture of aneuploid and diploid cells.  It doesn't produce chromosomal aberrations.",
        "d": "Polyspermy results in triploidy, not chromosomal aberrations.",
        "e": "Although spontaneous mutation is a possibility, it is much more likely that the chromosomal aberration resulted from radioactive exposure."
    }
},
    {
    "question": "A healthy woman without any congenital defects spontaneously aborts a fetus at 13 weeks gestation.  The fetus has intrauterine growth restriction, an omphalocele, polydactyly, microcephaly and cyclopia.  Centromeric FISH demonstrates that the woman has 45 chromosomes in her genome, while the fetus has 46.  How can these results be explained?",
    "Image": "",
    "answers": {
        "a": "genetic mosaicism",
        "b": "partial trisomy",
        "c": "reciprocal translocation",
        "d": "Robertsonian translocation",
        "e": "unequal crossing over"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "A mosaic could explain how the fetus has cells with 46 chromosomes and still has Patau’s syndrome, but he would also have cells with 47 chromosomes.",
        "b": "Partial trisomy could not explain the mother's normal phenotype with reduced chromosome number.",
        "c": "After a reciprocal translocation the mother would still have the normal number of chromosomes.",
        "d": "CORRECT: The mother probably had a translocation between two acrocentric chromosomes.  This would tie the two short chromosomes together, creating one long chromosome.  This results in one less chromosome in her genome than normal, even though there's still the normal number of genes.  <br><br>If the fetus inherited this Robertsonian chromosome, along with the normal homolog from his father, then he would have two chromosomes, even though he would have three copies of every gene on the chromosomes.  <br><br>If the acrocentric chromosome was number 13, this would explain why the fetus has the symptoms of Patau’s syndrome.",
        "e": "Unequal crossing over produces duplications and deletions, not aneuploidies."
    }
},
];