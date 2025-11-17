var shuffleMe = false;
var qBank = [
{
    "question": "Which arrow points to I-2?",
    "Image": "QuestionImages/PedigreeAnalysis1.jpg",
    "answers": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "5"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This is I-1.",
        "b": "This is II-1.",
        "c": "This is II-2.",
        "d": "This is II-3.",
        "e": "CORRECT: First Row, 2<sup>nd</sup> from Left"
    }
},
{
    "question": "A diabetic, female mouse has an F1 litter who are all diabetic.  All of the F2 pups from F1 females are diabetic, although the sugar levels of two of them are not as high as their mother or grandmother.  None of the F1 males produce diabetic pups.  What is the inheritance pattern?<br><br><i>Note, you are advised to draw the pedigree on paper before answering this question.</i>",
    "Image": "",
    "answers": {
        "a": "autosomal dominant",
        "b": "autosomal recessive",
        "c": "mitochondrial",
        "d": "X-linked dominant",
        "e": "X-linked recessive"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The inheritance does demonstrate vertical transmission, but the sex specific pattern rules out an autosomal disease.",
        "b": "The disease is not skipping generations which rules out a recessive pattern.  The sex specific pattern rules out an autosomal disease.",
        "c": "CORRECT: This disease demonstrates the classic maternal inheritance pattern of a mitochondrial disease.  Pups always inherit it from their mothers, but not from their fathers.  Diminished severity of two of the F2 pups is also typical of mitochondrial traits.",
        "d": "The inheritance does demonstrate vertical transmission, but X-linkage is ruled out because it didn't pass from fathers to daughters.",
        "e": "The inheritance does not demonstrate the characteristic pattern of an X-linked recessive disease (affected father, through carrier mother, to affected grandson pattern).  Moreover, daughters did not inherit it from their fathers."
    }
},
{
    "question": "A girl’s grandmother died of cystic fibrosis (CF).  The girl's boyfriend has no family history of CF.  The incidence of CF is 1/484.<br><br>What is the risk that the girl is a carrier?<br><br><i>Note, you are advised to draw the pedigree and work the problem out on paper before answering these questions.</i>",
    "Image": "",
    "answers": {
        "a": "0",
        "b": "1/4",
        "c": "1/2",
        "d": "3/4",
        "e": "100%"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "There was nothing to prevent the girl from inheriting her mother’s mutant <i>cf</i> allele, so there is a chance that she is a carrier.",
        "b": "This is the risk that a child produced from a heterozygous cross will be homozygous recessive.  However, the question simply asks for the chance that the girl inherited a mutant allele from her mother, so a heterozygous cross does not apply to this part of the problem.",
        "c": "CORRECT: You assume that the grandfather is homozygous wild type because there's no evidence that he has the mutation.  Thus, the mother had to inherit a wild type allele from him; that's all he had to give. The grandmother must be homozygous recessive because she's affected, so the mother had to inherit a mutant allele from her.  A wild type allele from the grandfather and mutant from the grandmother makes the mother heterozygous. The mother had an equal chance of passing her mutant or wild type allele to the girl, which means the girl has a 50% of being a carrier.",
        "d": "This is the risk that a child produced from a heterozygous cross has the dominant phenotype.  However, the question simply asks for the chance that the girl inherited a mutant allele from her mother, so a heterozygous cross does not apply to this part of the problem.",
        "e": "The girl could inherit her mother’s wild type allele, so she may not  be a carrier."
    }
},
{
    "question": "A girl’s grandmother died of cystic fibrosis (CF).  The girl's boyfriend has no family history of CF.  The incidence of CF is 1/484.<br><br>What is the risk that boyfriend carries the <i>cf</i> allele?",
    "Image": "",
    "answers": {
        "a": "0.21%",
        "b": "0.41%",
        "c": "4.55%",
        "d": "8.68%",
        "e": "9.09%"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This is q<sup>2</sup> = 1/484 = 0.00206",
        "b": "This would be obtained if the square root of the incidence were not factored to calculate q.",
        "c": "This is q = √1/484 = 1/22 = 0.004545.",
        "d": "CORRECT: q<sup>2</sup> = 1/484 = 0.00206<br>q = √1/484 = 0.004545<br>p   =   1-q   =   1 - 0.004545   =  0.9545<br>2pq   =   2 x 0.004545 x 0.9545   =   0.08677",
        "e": "This would be obtained if p were not factored into the calculation,  2p = 2 x 0.00456 = 0.09090"
    }
},
{
    "question": "A girl’s grandmother died of cystic fibrosis (CF).  The girl's boyfriend has no family history of CF.  The incidence of CF is 1/484.<br><br>If the girl gets pregnant, what is the risk that her child will be affected with CF?",
    "Image": "",
    "answers": {
        "a": "0.05%",
        "b": "1.08%",
        "c": "1.14%",
        "d": "1.63%",
        "e": "4.34%"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This would be obtained if the square root of the incidence were not calculated for q.",
        "b": "CORRECT: ½ x 0.08677 x ¼   =   0.01084   =<br>chance that the girl’s a carrier (½),<br>times the chance that her boyfriend’s a carrier (2pq), <br>times the chance that the child will inherit a mutant <i>cf</i> allele from both parents, if both are carriers (¼).",
        "c": "This would be obtained if p were omitted from the calculation, i.e. 2q instead of 2pq.",
        "d": "This would be obtained if ¾ were factored in for the chance that the girl’s a carrier, instead of ½.",
        "e": "This would be obtained if the chance that the child will inherit a mutant <i>cf</i> allele from both parents (¼) were not factored into the calculation."
    }
},
{
    "question": "Which arrow points to a homozygous wild type individual?",
    "Image": "QuestionImages/PedigreeAnalysis5.jpg",
    "answers": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "5"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This is an affected male.  If this is an autosomal recessive mutation, then he’s homozygous recessive.",
        "b": "CORRECT: An empty symbol, male or female, denotes a homozygous wild type individual.",
        "c": "This is a heterozygote for an autosomal recessive trait.",
        "d": "This is an affected female.  If this is an autosomal recessive mutation, then she’s homozygous recessive.",
        "e": "This is a heterozygous female for an X-linked trait."
    }
},
{
    "question": "Which is a distinguishing characteristic of dominant inheritance?",
    "Image": "",
    "answers": {
        "a": "all offspring of affected mothers are affected",
        "b": "no father to son transmission",
        "c": "skipping generations",
        "d": "transmission from affected father, through carrier daughter, to affected grandson",
        "e": "vertical transmission"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This is maternal inheritance, which is characteristic of mitochondrial traits.",
        "b": "This is a characteristic of X-linkage.  If any sons inherit the mutant allele from their fathers, then X-linkage is ruled out.",
        "c": "This is a characteristic of a recessive trait.",
        "d": "This is the diagnostic characteristic of the X-linked recessive pattern.  If this is observed assume X-linkage unless proven otherwise.",
        "e": "CORRECT: Dominant traits are observed in every generation because every individual who inherits a mutant allele will be affected, whether they are heterozygous or homozygous."
    }
},
{
    "question": "A man is affected by a genetic defect.  His son is affected but not his daughter.  None of his daughter’s children are affected.  His son has an affected girl and two boys who are not affected.  What is the inheritance pattern of this defect?<br><br><i>Note, you are advised to draw the pedigree on paper before answering this question.</i>",
    "Image": "",
    "answers": {
        "a": "autosomal dominant",
        "b": "autosomal recessive",
        "c": "multifactorial",
        "d": "X-linked dominant",
        "e": "X-linked recessive"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Vertical Transmission",
        "b": "A recessive pattern can be ruled out because the defect is not skipping generations.",
        "c": "This family history is far too small to conclude that this is a multifactorial defect.",
        "d": "Father to son transmissions rules out X-linkage.",
        "e": "Father to son transmissions rules out X-linkage. Moreover, the disease is not skipping generations, which rules out a recessive pattern."
    }
},
{
    "question": "What is the sex of 3?",
    "Image": "QuestionImages/PedigreeAnalysis2,3.jpg",
    "answers": {
        "a": "female",
        "b": "male",
        "c": "male and female",
        "d": "male or female",
        "e": "unknown"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Circles Denote Females, e.g. 2.",
        "b": "Squares Denote Males, e.g. 1.",
        "c": "There is no standard symbol for hermaphrodites.",
        "d": "There is no standard symbol for ambiguous genitalia.",
        "e": "CORRECT: Diamonds denote unknown sex, e.g. fetuses whose sex has not yet been determined."
    }
},
{
    "question": "Shown is the pedigree of Eldarion, the second king of Gondor during the 4<sup>th</sup> age.<br><br>What is the coefficient of relationship between Aragorn and Arwen?<br><br><i>Note, Tolkien actually listed approximately 65 generations between Earlindel and Eldarion, so this pedigree has been simplified.</i>",
    "Image": "QuestionImages/PedigreeAnalysis15,16,17.jpg",
    "answers": {
        "a": "1/8",
        "b": "1/16",
        "c": "1/32",
        "d": "1/64",
        "e": "1/128"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "1/2<sup>3</sup> =1/8.  One way this could have been obtained is if the mating between Earlindel and Elwing wasn’t recognized as part of the path between Aragorn and Arwen.  This would produce an inappropriate count of 3 matings: (Firiel & Arvedui) (Miriel & Elrose) (Elrond & Celebrian).",
        "b": "CORRECT: R = 1/2<sup>4</sup> = 1/16.  There are four matings in the path between Aragorn and Arwen: (Firiel & Arvedui) (Miriel & Elrose) (Earlindel & Elwing) (Elrond & Celebrian).",
        "c": "1/2<sup>5</sup> = 1/32.  One way this could have been obtained is if the mating between Aragorn and Arwen was inappropriately included in the count.  This would have produced a count of 5 matings: (Firiel & Arvedui) (Miriel & Elrose) (Earlindel & Elwing) (Elrond & Celebrian) (Aragorn & Arwen).",
        "d": "1/2<sup>6</sup> = 1/64.  One way this could have been obtained is if instead of matings, everyone in the path were counted except in laws (Aragorn, Arvedui, Elrose, Earlindel, Elwing, Elrond, Arwen).",
        "e": "1/2<sup>7</sup> = 1/128.  One way this could have been obtained is if Eldarion (Aragorn and Arwen’s offspring), along with everyone in the path except in laws, were counted (Aragorn, Arvedui, Elrose, Earlindel, Elwing, Elrond, Arwen, Eldarion)."
    }
},
{
    "question": "Shown is the pedigree of Eldarion, the second king of Gondor during the 4th age.<br><br>What is the coefficient of inbreeding for Eldarion?",
    "Image": "QuestionImages/PedigreeAnalysis15,16,17.jpg",
    "answers": {
        "a": "1/8",
        "b": "1/16",
        "c": "1/32",
        "d": "1/64",
        "e": "1/128"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "1/2<sup>3</sup> = 1/8.  One way this could have been obtained is if the matings between Earlindel and Elwing, and between and Aragorn and Arwen, weren’t recognized as part of the inbreeding loop.  This would produce an inappropriate count of 3 matings: (Firiel & Arvedui) (Miriel & Elrose) (Elrond & Celebrian).",
        "b": "1/2<sup>4</sup> = 1/16.  One way this could have been obtained is if the mating between Earlindel and Elwing wasn’t recognized as part of the loop between Aragorn and Arwen.  This would produce an inappropriate count of 4 matings: (Firiel & Arvedui) (Miriel & Elrose) (Elrond & Celebrian) (Aragorn & Arwen) .",
        "c": "CORRECT: F = 1/2<sup>5</sup> = R/2 = 1/32.  There are five matings in Eldarion’s inbreeding loop: (Firiel & Arvedui) (Miriel & Elrose) (Earlindel & Elwing) (Elrond & Celebrian) (Aragorn & Arwen).",
        "d": "1/2<sup>6</sup> = 1/64.  One way this could have been obtained is if all of Eldarion’s ancestors who weren’t in laws, were inappropriately counted, instead of matings.  This would produce a count of 7 individuals: (Aragorn, Arvedui, Elrose, Earlindel, Elwing, Elrond, Arwen).",
        "e": "1/2<sup>7</sup> = 1/128.  One way this could have been obtained is if everyone who was part of the inbreeding loop including Eldarion were inappropriately counted, instead of matings.  This would produce a count of 8 individuals: (Aragorn, Arvedui, Elrose, Earlindel, Elwing, Elrond, Arwen, Eldarion)."
    }
},
{
    "question": "Shown is the pedigree of Eldarion, the second king of Gondor during the 4th age.<br><br>As shown Elwing is a carrier of a recessive allele for immortality.<br>What is the chance that Eldarion will be immortal?",
    "Image": "QuestionImages/PedigreeAnalysis15,16,17.jpg",
    "answers": {
        "a": "1/32",
        "b": "1/64",
        "c": "1/128",
        "d": "1/256",
        "e": "1/512"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "1/2<sup>5</sup> = 1/32.  One way this could have been obtained is if Eldarian was inappropriately excluded from the count.  This would produce a count of 5 generations: (Elrose→Arvedui→Aragorn) and (Elrond→Arwen).",
        "b": "1/2<sup>6</sup> = 1/64.  One way this could have been obtained is if Eldarian was only included in the count once.  This would produce an inappropriate count of 6 generations:  (Elrose→Arvedui→Aragorn→Eldarion) and (Elrond→Arwen).",
        "c": "CORRECT: P<sub>i</sub> = 1/2<sup>7</sup> = 1/128.  The recessive allele would have to be inherited by Elwing’s descendants seven times for it to become homozygous in Eldarion. (→Elrose→Arvedui→Aragorn→Eldarion) and (→Elrond→Arwen→Eldarion).",
        "d": "1/2<sup>8</sup> = 1/256.  One way this could have been obtained is if Elwing were inappropriately included in the count.  This would produce a count of 8 generations: (Elwing→Elrose→Arvedui→Aragorn→Eldarion) and (Elrond→Arwen→Eldarion).",
        "e": "1/2<sup>9</sup> = 1/512.  One way this could have been obtained is if Elwing were inappropriately included in both branches of the count.  This would produce a count of 9 generations:  (Elwing →Elrose→Arvedui→Aragorn→Eldarion) and (Elwing →Elrond→Arwen→Eldarion)."
    }
},
{
    "question": "Which is a distinguishing characteristic of X-linked dominant inheritance?",
    "Image": "",
    "answers": {
        "a": "all offspring of affected mothers are affected",
        "b": "daughters of affected fathers are always affected",
        "c": "father to son transmission",
        "d": "skipping generations",
        "e": "transmission from affected father, through affected daughter, to affected grandson"
    },
    "correctAns": [
        "b", "e"
    ],
    "explain": {
        "a": "This is characteristic of a mitochondrial trait.",
        "b": "CORRECT: A daughter has to inherit her father’s X, that’s what makes her female. So, if her father is affected by an X-linked dominant mutation, she will inherit the mutant allele and she will be affected.",
        "c": "If this is ever observed then the trait is not X-linked.",
        "d": "This is characteristic of recessive traits.",
        "e": "CORRECT: Father through daughter to grandson is characteristic of X-linkage.  However, if the trait is dominant, then even though a daughter is heterozygous she will still be affected."
    }
},
{
    "question": "What sex does 4 point to?",
    "Image": "QuestionImages/PedigreeAnalysis2,3.jpg",
    "answers": {
        "a": "female",
        "b": "male",
        "c": "not applicable",
        "d": "unknown sex"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Circles Denote Females, e.g. 2.",
        "b": "Squares Denote Males, e.g. 1.",
        "c": "CORRECT: Triangles are not a standard symbol for pedigrees, so 4 doesn’t denote anything.",
        "d": "Diamonds Denote Unknown Sex, e.g. 3."
    }
},
{
    "question": "A rat model for McLeod syndrome (MLS) carries a mutation that results in facial tics, seizures and hemolytic anemia.  An MLS male is mated with a wild type female.  All of the F1 are wild type.  An F1 male is mated with an F1 female, and all of the F2 females are wild type, while half the F2 males have MLS, half are wild type.<br><br>What is the inheritance pattern<br><br><i>Note, you are advised to draw the pedigree and work the problem out on paper before answering these questions.</i>?",
    "Image": "",
    "answers": {
        "a": "autosomal dominant",
        "b": "autosomal recessive",
        "c": "mitochondrial",
        "d": "X-linked dominant",
        "e": "X-linked recessive"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "The inheritance pattern does not demonstrate vertical transmission because none of the F1 are affected while some F2 are.  This rules out dominance.",
        "b": "The sex specific pattern rules out autosomal inheritance.",
        "c": "With the parental cross, the male had MLS, not the female.  If this were a mitochondrial mutation then none of the male's descendents would have inherited the disease.",
        "d": "If this were X-linked dominant, then all of the F1 females would have inherited the mutant allele from their father, and they would all be affected.",
        "e": "CORRECT: The trait is passing from affected father, through carrier mothers, to affected grandsons.  This is the classic pattern of an X-linked recessive trait."
    }
},
{
    "question": "A rat model for McLeod syndrome (MLS) carries a mutation that results in facial tics, seizures and hemolytic anemia.  An MLS male is mated with a wild type female.  All of the F1 are wild type.  An F1 male is mated with an F1 female, and all the F2 females are wild type, while half the F2 males are MLS, half are wild type.<br><br>A wild type F2 male is backcrossed with an F1 female.  What is the chance that one of their pups will have MLS?",
    "Image": "",
    "answers": {
        "a": "0",
        "b": "1/4",
        "c": "1/2",
        "d": "3/4",
        "e": "100%"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "All F2 females must heterozygous because the F1 father was affected by an X-linked defects, and they had to inherit his mutant X chromosome; that's what made them female.  Therefore, there is a chance that the pups will have MLS",
        "b": "CORRECT: <br>Multiply ½, the chance that any given pup inherited a mutant X from its heterozygous, F1 mother, <br>by another ½ for the chance that the pup is male (it cannot be affected if its female),<br>½ x ½ = ¼.",
        "c": "This number would be obtained if the chance that a pup is male was not factored into the calculation.",
        "d": "This is the chance that a progeny of a heterozygous, autosomal recessive cross will be wild phenotype.  However, this is an X-linked cross, not autosomal recessive.",
        "e": "If a pup is female she will not be affected.  If a pup is male, there is a possibility that he will inherit the wild type allele from its mother, in which case it will not be affected.  Therefore, it is not at all certain that all their offspring will have MLS"
    }
},
{
    "question": "The line that 2 point to denotes",
    "Image": "QuestionImages/PedigreeAnalysis4.jpg",
    "answers": {
        "a": "inbreeding.",
        "b": "a mating.",
        "c": "multiple children.",
        "d": "the next generation.",
        "e": "an offspring of the next generation."
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "A double line would indicate a consanguineous mating.",
        "b": "A horizontal line between a male and female denotes a mating, e.g. line 1.",
        "c": "CORRECT: A horizontal line between parents and their offspring indicates that multiple children are produced by the mating pair.",
        "d": "Vertical lines lead to the next generation, e.g. 4.",
        "e": "Vertical lines below a horizontal line lead to offspring, e.g. 3 & 5."
    }
},
];

