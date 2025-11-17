var shuffleMe = true;
var qBank = [
{
    "question": "Two male twins both have cystic fibrosis due to the same ΔF508 mutation of their CFTR genes.  Both have comparable glucose intolerance, pulmonary complications and infertility.  The first has nasal polyps, the second doesn’t.  Both have gastrointestinal pains and constipation, but these are more frequent and severe with the second twin.  The chloride concentration in the first twin’s sweat is 10% higher, while the clubbing of the second twin’s finger is 5% wider.  What inheritance pattern is demonstrated by these twins?",
    "Image": "",
    "answers": {
        "a": "allelic heterogeneity",
        "b": "epigenetic imprinting",
        "c": "genetic variability",
        "d": "partial penetrance",
        "e": "polygenic inheritance"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "These twins have the exact same mutation, ΔF508, so they are not an example of allelic heterogeneity.",
        "b": "Epigenetics occur when methylation turns a gene off under certain circumstances.  This does not occur with CFTR gene.",
        "c": "CORRECT: The symptomatic differences probably result from variation that typically occurs with most traits, including genetic diseases.",
        "d": "Partial penetrance means that some patients with a mutation will be asymptomatic; others with the same mutation will have symptoms.  In this case both twins have symptoms, so they are not an example of partial penetrance.  Moreover, the penetrance of ΔF508 homozygotes is 100%, so the penetrance of this mutation is not partial.",
        "e": "Polygenic traits are when multiple genes contribute to a trait.  Cystic fibrosis is caused by loss of function of one gene, CFTR, so it is not polygenic."
    }
},
    {
    "question": "A patient is diagnosed with the BRCA2 mutation, just like her mother who died of breast cancer.  The woman immediately panics, asking “how long do I have to live.”  What does the physician need to explain, in layman’s terms?",
    "Image": "",
    "answers": {
        "a": "anticipation",
        "b": "codominance",
        "c": "locus heterogeneity",
        "d": "partial penetrance",
        "e": "pleiotropy"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This would mean that the severity of a disease increases from generation to generation.  This does not occur with BRCA2 and breast cancer.",
        "b": "Codominance is when the phenotypes of two alleles both occur in heterozygotes.  This does not happen with BRCA2 and breast cancer.",
        "c": "Locus heterogeneity is when different genes produce the same phenotype.  BRCA1 and BRCA2 are examples.  However, this is not relevant to this patient because she was not diagnosed with BRCA1.  What she needs to know is how BRCA2 affects her risk.",
        "d": "CORRECT: Partial, or incomplete penetrance is when a proportion of patients with a mutant genotype do not develop any symptoms.  With BRCA2 the penetrance is 35%, which means there's a 65% chance that the patient will never develop breast cancer.",
        "e": "Pleiotropy is when a gene affects multiple traits. The BRCA mutation does affect several traits, e.g. increased fecundity and elevated risk of other types of cancer.  Therefore, it is pleiotropic. However, explaining this will not help the patient understand why her BRCA2 diagnosis is not a sentence of certain death."
    }
},
    {
    "question": "What distinguishes polymorphism and allelic heterogeneity?",
    "Image": "",
    "answers": {
        "a": "whether a disease results from methylation or trinucleotide repeat expansion",
        "b": "whether a phenotype is determined entirely by genetics, or if non-genetic factors contribute",
        "c": "whether different alleles produce the same or different phenotypes",
        "d": "whether multiple genes affect a trait, or a single gene affects multiple traits",
        "e": "whether there are mutations in different genes or in different alleles of the same gene"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Methylation mediates epigenetic imprinting, while trinucleotide repeat expansion results in anticipation.",
        "b": "Polygenic traits are determined by multiple genes; multifactorial traits are determined by both multiple genes and environmental factors.",
        "c": "CORRECT: Both involve mutation of different alleles of a gene, but with allelic heterogeneity they produce similar phenotypes, while polymorphism produce different phenotypes.",
        "d": "With polygenic inheritance, one trait is determined by multiple genes;  pleiotropy is one gene affecting multiple traits.",
        "e": "Locus heterogeneity is when similar phenotypes are produced by mutations in different genes, while mutations of different alleles of a gene is either locus heterogeneity or polymorphism, depending on whether those alleles all have similar phenotypes, or different phenotypes."
    }
},
    {
    "question": "A camellia plant with the RR genotype produces red flowers, while the WW genotype produces white flowers.  However, the plants with the RW genotype produce a mixture of flowers, some red with white spots, some white with red spots.  What is the inheritance pattern of camellia flowers?",
    "Image": "",
    "answers": {
        "a": "codominance",
        "b": "dominant-recessive",
        "c": "semidominance",
        "d": "locus heterogeneity",
        "e": "incomplete penetrance"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: These two alleles are both contributing to the heterozygous phenotype, i.e. heterozygotes are both red and white.",
        "b": "Dominance-recessive inheritance is when heterozygotes have one or the other phenotype, i.e. either red or white flowers, not both.",
        "c": "With semidominance heterozygotes have an intermediate phenotype, i.e. pink flowers, not red, white or both.",
        "d": "Locus heterogeneity is when mutations in different genes produce the same phenotype.",
        "e": "Incomplete penetrance is when some individuals with a mutation do not have a phenotype while others do.  With camellia, every plant with R or W alleles produce a phenotype, i.e. red, white or both."
    }
},
{
    "question": "What allows the severity of a mitochondrial disease to change over a patient’s lifetime?",
    "Image": "",
    "answers": {
        "a": "decreased stamina with age",
        "b": "genomic regulation",
        "c": "hemizygosity",
        "d": "heteroplasmy",
        "e": "maternal inheritance"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Stamina does tend to decrease with age and this can make an individual more susceptible to defects such as mutant mitochondria. This does explain how mitochondrial diseases can get worse over time, but it doesn't explain how they can get better.",
        "b": "There are numerous examples of genomic genes controlling mitochondrial functions, however this doesn’t change with age.",
        "c": "Hemizygosity is for males to have half as many X-linked genes as females.  Both X-linked and mitochondrial traits have sex specific inheritance patterns.  However, the patterns are completely different, for different reasons.  Mitochondrial traits are maternally inherited while X-linked traits pass from fathers to daughters, not to sons. Moreover, neither pattern explains how mitochondrial diseases can change over time.",
        "d": "CORRECT: Heteroplasmy is for there to be mixed populations of mutant and wild type mitochondria within a cell.  These populations do not always grow at the same rate, so their proportions can change over time.",
        "e": "Mitochondrial traits do demonstrate maternal inheritance, but this doesn’t explain how these traits can change over time."
    }
},
{
    "question": "A 7-yr-old boy presents with ataxia, dysmetria, nystagmus, and cardiomyopathy with atrial fibrillations.  His 33-yr-old mother is positive for all of these symptoms except nystagmus, but none are as severe as the boy’s, and none occurred before she was 23.  The mother’s 55-yr-old father has always been clumsy and he had a heart attack when he was 42, but he doesn’t have any other symptoms that are similar to the boy's.  What inheritance pattern is demonstrated by this disease?",
    "Image": "",
    "answers": {
        "a": "anticipation",
        "b": "epigenetic imprinting",
        "c": "genetic variability",
        "d": "methylation",
        "e": "sex influenced inheritance"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: This family’s disease is increasing in severity each generation.  <br>The symptoms of this disease are consistent with Friedreich’s Ataxia.",
        "b": "Imprinting does not result in progressive severity from generation to generation.",
        "c": "The three relatives do demonstrate different constellations of symptoms, but variability should not increase in severity from generation to generation, at least not to the degree demonstrated by this family.",
        "d": "The symptoms of this family are consistent with Friedreich’s Ataxia, which does involve methylation of the <i>FXN</i> gene.  However, methylation is a step of the disease process; it isn't the inheritance pattern.",
        "e": "If this were the case then the boy and his grandfather would have similar symptoms; they’re both the same sex.  However, the boy’s symptoms are much more serious than his grandfather’s."
    }
},
    {
    "question": "A male patient has Angelman’s syndrome; a female has Prader-Willi.  Genes of the SNORD116 gene cluster are expressed by the male.  What is the composition of the female patient's SNORD116 locus?",
    "Image": "",
    "answers": {
        "a": "both of her alleles are deleted",
        "b": "both of her alleles are methylated",
        "c": "her maternal allele is deleted, her paternal allele is methylated",
        "d": "her maternal allele is deleted, her paternal allele is unmethylated",
        "e": "her paternal allele is deleted, her maternal allele is methylated",
        "f": "her paternal allele is deleted; her maternal allele is unmethylated"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Only one allele is deleted, not both.",
        "b": "Only one allele can be methylated because the other is deleted.",
        "c": "The female has Prader-Willi syndrome, so her paternal allele is deleted, not her maternal allele.  <br>The paternal allele isn’t methylated because there is no paternal allele to methylate.",
        "d": "The female has Prader-Willi syndrome, so her paternal allele is deleted, not her maternal allele.  <br>It is true that the paternal allele is unmethylated, but that’s just because there’s no paternal allele to methylate.",
        "e": "CORRECT: The female has Prader-Willi syndrome, so her paternal allele is deleted.  <br>The SNORD116 allele is expressed in the male, so it isn’t expressed in the female and her allele is methylated.",
        "f": "The female has Prader-Willi syndrome, so her paternal allele is deleted.  <br>The SNORD116 allele is expressed in the male, so it isn’t expressed in the female and her allele is not unmethylated."
    }
},
    {
    "question": "Which of the following symptoms are characteristic of osteogenesis imperfecta?",
    "Image": "",
    "answers": {
        "a": "brittle malformed bones, bowed legs and blue sclera",
        "b": "dermal nodules, hyperpigmented macules and microcephaly",
        "c": "elongated face, large ears, hypergonadism",
        "d": "tall stature, arachnodactyly and aortic aneurysms",
        "e": "tall stature, microorchidism and gynecomastia"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Brittle bones and blue sclera are diagnostic for OI, and some types of OI do have malformations.",
        "b": "These symptoms are diagnostic for neurofibromatosis.",
        "c": "These symptoms are diagnostic for fragile X syndrome.",
        "d": "These symptoms are diagnostic for Marfan’s syndrome.",
        "e": "These symptoms are diagnostic for Klinefelter’s syndrome."
    }
},
    {
    "question": "Physical examination of an 18-yr-old, 7-ft-tall male is positive for dolichostenomelia, arachnodactyly, pectus excavatum, myopia and aortic root dilation.  What is the genetic defect causing this patient’s disease?",
    "Image": "",
    "answers": {
        "a": "gain of function of his GTPase activating protein gene",
        "b": "loss of function of his elastin gene",
        "c": "loss of function of his fibrillin gene",
        "d": "microdeletion of his FMR1 gene",
        "e": "XXY genotype"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Neurofibromatosis (NF1) results from loss of function of the NF1 gene, which does encode a GAP protein.  However, this patient does not demonstrate symptoms of NF1 (dermal neurofibromas, hyperpigmented macules, Lisch nodules).  <br><br>Furthermore, NF1 is produced by a loss of function mutation, not gain of function.",
        "b": "Marfan’s syndrome does result from defective elastin, but the mutation is not in the elastin gene.",
        "c": "CORRECT: This patient’s symptoms are diagnostic for Marfan’s syndrome, which results from a loss of function mutation of the fibrillin gene.  Fibrillin constitutes the scaffold of elastin fibers, so it disrupts elastin assembly even though the mutation isn’t in the elastin gene itself.",
        "d": "Mutation of FMR1 results in fragile X syndrome.  However, this patient does not demonstrate symptoms of fragile X (moderate intellectual disability, long face, prominent jaw, large ears, macroorchidism). <br><br>Furthermore, fragile X syndrome results from trinucleotide repeat expansion of the FMR1 upstream region, not a microdeletion.",
        "e": "Klinefelter’s syndrome results from the XXY genotype, and a symptom of Klinefelter’s is tall stature.  However, this patient does not demonstrate any of the other symptoms of Klinefelter’s (hypogonadism, feminized habitus, gynecomastia)."
    }
},
    {
    "question": "During his annual checkup a patient informs his family doctor that he just got engaged.  However, he’s concerned because his fiancé informed him that “the women in my family with eye problems always have children with eye problems.”  What would be the best question for the doctor to ask, to help him diagnose this family’s disease?",
    "Image": "",
    "answers": {
        "a": "Do the affected relatives have symptoms not involved with sight?",
        "b": "Do most of the affected relatives have blue or green eyes?",
        "c": "Is oxidative phosphorylation impaired with the affected relatives?",
        "d": "Is the internal surface of the eyes of affected relatives abnormal?",
        "e": "What’s the nature of the eye problems, blindness or ocular movement?"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This disease is always passed from mothers to their children, which indicates that it is mitochondrial.  Two mitochondrial diseases affect sight, Leber Hereditary Optic Neuropathy (LHO) and Kearns-Sayre-syndrome (KSS).  <br><br>Both LHO and KSS can have non-visual symptoms. LHO can have cardiac conduction defects, tremors, muscle weakness, poor coordination, numbness, etc.  KSS can have heart disease, deafness, hypothyroidism, diabetes, etc.   However, these non-visual symptoms do not always occur so they are not as diagnostic for either disease as visual symptoms.",
        "b": "This disease is always passed from mothers to their children, which indicates that it is mitochondrial.  Two mitochondrial diseases affect sight, Leber Hereditary Optic Neuropathy (LHO) and Kearns-Sayre-syndrome (KSS).  <br><br>Neither LHO or KSS affects the color of the iris, so this would be an irrelevant question.",
        "c": "This disease is always passed from mothers to their children, which indicates that it is mitochondrial.  Two mitochondrial diseases affect sight, Leber Hereditary Optic Neuropathy (LHO) and Kearns-Sayre-syndrome (KSS).  <br><br>LHO and KSS both interfere with oxidative phosphorylation, so this question would not help to distinguish the two.  More important, it is unlikely the patient would have any idea what oxidative phosphorylation is, much less whether it’s impaired with his fiancé’s affected relatives.",
        "d": "The disease is always passed from mothers to their children, which indicates that it is mitochondrial.  Two mitochondrial diseases affect sight, Leber Hereditary Optic Neuropathy (LHO) and Kearns-Sayre-syndrome (KSS).  <br><br>The internal surface can be abnormal with both diseases; telangiectatic microangiopathy with LOH, pigmentary retinopathy with KSS.   Therefore, this wouldn’t be the most helpful question to ask.",
        "e": "CORRECT: This disease is always passed from mothers to their children, which indicates that it is mitochondrial.  Two mitochondrial diseases affect sight, Leber Hereditary Optic Neuropathy (LHO) and Kearns-Sayre-syndrome (KSS).  <br><br>LHO results in vision loss but doesn’t affect eye movement.  KSS affects eye movement (e.g. ophthalmoplegia and ptosis), but it doesn’t result in blindness.  So, ascertaining these symptoms will help the doctor diagnose the disease."
    }
},
    {
    "question": "A 14-yr-old male presents with long face, prominent jaw, large ears, macro-orchidism and hyperactivity.  His intellectual development will",
    "Image": "",
    "answers": {
        "a": "allow him to graduate as his class’s valedictorian.",
        "b": "be normal.",
        "c": "not allow him to learn how to speak.",
        "d": "probably allow him to be self-sufficient.",
        "e": "require that he be institutionalized."
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The symptoms are consistent with fragile X syndrome (FXS).  FXS patients have moderate intellectual disability.  <br>Therefore, if he does graduate it is very unlikely he will be the top of his class.",
        "b": "The symptoms are consistent with fragile X syndrome (FXS).  FXS patients have moderate intellectual disability.  <br>This means their IQs are below average, not normal IQs.",
        "c": "The symptoms are consistent with fragile X syndrome (FXS).  FXS patients have moderate intellectual disability.  <br>This doesn't prevent speech.",
        "d": "CORRECT: The symptoms are consistent with fragile X syndrome (FXS).  FXS patients have moderate intellectual disability.  <br>Therefore, the patient may be self-sufficient.",
        "e": "The symptoms are consistent with fragile X syndrome (FXS).  FXS patients have moderate intellectual disability.  <br>Therefore, these patients seldom require institutionalization."
    }
},
    {
    "question": "A seven-year-old girl presents with severe intellectual disability, puppet-like gait, unprovoked laughter, prominent mandible, pointed chin and seizures.  What is the most likely diagnosis?",
    "Image": "",
    "answers": {
        "a": "Angelman’s syndrome",
        "b": "Fragile X syndrome",
        "c": "Hurler’s syndrome",
        "d": "Prader-Willi syndrome",
        "e": "Wolf-Hirschhorn syndrome"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: These symptoms are diagnostic for Angelman’s syndrome.",
        "b": "The prominent mandible and pointed chin of this patient are consistent with fragile X syndrome, but not any of the other symptoms.  Most important, this patient has severe intellectual disability, while the intellectual disability of FXS patients is moderate.",
        "c": "The prominent mandible and pointed chin of this patient are reminiscent of the coarsening of the face observed with Hurler’s syndrome, but not the other symptoms.",
        "d": "Prader-Willi syndrome is caused by the same microdeletion that caused this patient's syndrome, but due to epigenetic imprinting they are very different syndromes, with very different symptoms.  Most important, this patient has severe intellectual disability, while the intellectual disability of Prader-Willi patients is mild.",
        "e": "The prominent mandible and pointed chin of this patient are reminiscent of the frontal bossing of  Wolf-Hirschhorn syndrome (WHS).  Moreover, both WHS and this patient’s disease result from microdeletions.  However, none this patient’s other symptoms occur with WHS patients."
    }
},
];
