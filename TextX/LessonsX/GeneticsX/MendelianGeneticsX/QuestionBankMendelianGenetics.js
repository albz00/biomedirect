var shuffleMe = false;
var qBank = [
{
    "question": "What is the definition of genetics?",
    "Image": "",
    "answers": {
        "a": "analysis of inheritance patterns to characterize genes",
        "b": "characterization of gene's structure",
        "c": "linage mapping",
        "d": "the study of gene expression",
        "e": "the study of genes"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: With animal research, genetics is all about performing crosses.  <br>Clinical genetics is about predicting the risk that offspring will be affected by mutation.",
        "b": "This is an example of molecular biology.",
        "c": "This is one example of genetics, not the entire field.",
        "d": "This is an example of molecular biology.",
        "e": "This applies to genetics and molecular biology.  It doesn’t distinguish between the two."
    }
},
{
    "question": "A dealer roles two dice six times.  Each time he roles two sixes.  What is the chance that he will role two sixes a seventh time?",
    "Image": "",
    "answers": {
        "a": "0",
        "b": "0.46 in a trillion",
        "c": "1 in 36",
        "d": "1 in 6",
        "e": "100%"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "There will always be a chance that he could role two sixes again.",
        "b": "This is the chance of rolling two sixes, six times in a row (1/6<sup>2</sup>)<sup>6</sup>.  <br>These odds are so infinitesimal that it is actually much more likely that the dice were rigged.  <br>Rigged dice nullify independent assortment.",
        "c": "CORRECT: According to the law of independent assortment the previous roles will not affect the odds for the current role <br>because they are independent events <br>Therefore, the chance of rolling two more sixes is the same as it was anytime the dice were rolled, 1/6 x 1/6 = 1/36.",
        "d": "This is the chance of rolling a six with one dice.",
        "e": "If the dice weren't rigged then it would never be certain that two more sixes would be rolled, <br>no matter how many times they were already rolled."
    }
},
{
    "question": "A woman with a father who has phenylketonuria (PKU), marries a man whose mother has PKU.  What is the chance they will have a child with PKU?",
    "Image": "",
    "answers": {
        "a": "0",
        "b": "1/16",
        "c": "1/4",
        "d": "1/2",
        "e": "100%"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Because the child had grandparents with PKU, the child will be at risk for inheriting the disease.",
        "b": "If this were a dihybrid heterozygous cross, then this would be the risk that the child would suffer from both diseases.  <br>However, there’s only one disease in the family, PKU, so this is a monohybrid cross, not dihybrid.",
        "c": "CORRECT: The child has a paternal grandfather and maternal grandmother with PKU.  Because PKU is an autosomal recessive disease, the genotypes of these affected grandparents must be homozygous recessive (<i>pp</i>), and the cross for each grandparent is written ( ++ &nbsp x &nbsp <i>pp</i> ).  Therefore, both of the child’s parents must have inherited a mutant <i>p</i> allele; that’s all the affected grandparents had to give.  <br><br>We assume that these parents are wild type because there’s no mention of their being affected.  Therefore, they each must have inherited a wild type allele from their wild type parent, and they both must be heterozygous. The cross of the parents is written ( +<i>p</i> &nbsp x &nbsp +<i>p</i> ).  <br><br>This parental cross is a monohybrid, heterozygous cross subject to the 3:1 phenotypic ratio.  The class with the 1 represents the chance that he child will be homozygous recessive (<i>pp</i>), i.e. the risk that the child will be affected with PKU.  Therefore, the risk for the child is 1/(3+1) = ¼.",
        "d": "According to the genotypic ratio, 1:2:1, one half is the chance of producing a heterozygous child, 2/(1+2+1).  <br>However, the question didn’t ask for heterozygotes; it asked for the risk that a child will have PKU, <br>i.e. that the child will be homozygous recessive.",
        "e": "The only way it would be certain that the child will be affected is if both parents were affected homozygotes, <br>but that was not the case."
    }
},
{
    "question": "Which of the following is an example of a phenotype?",
    "Image": "",
    "answers": {
        "a": "autosomal recessive",
        "b": "homozygous recessive",
        "c": "<i>I<sup>A</sup> I<sup>B</sup></i>",
        "d": "type O blood",
        "e": "X-linkage"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Autosomal recessive is an inheritance pattern, where an allele only specifies the phenotype in the absence a dominant allele.",
        "b": "homozygous recessive is a genotype, e.g. <i>bb</i>.",
        "c": "<i>I<sup>A</sup> I<sup>B</sup></i>  is the genotype for AB blood.",
        "d": "CORRECT:  Type O blood is the physical manifestation of the <i>I<sup>i</sup> I<sup>i</sup></i> genotype.",
        "e": "X-linkage is the inheritance pattern of a gene located on the X chromosome."
    }
},
{
    "question": "With the fruit fly <i>Drosophila melanogaster</i>, the phenotypes of both scarlet (<i>st</i>) and vermilion (<i>v</i>) mutants is bright orange-red eyes.  A laboratory technician treats wild-type flies with γ rays, and isolates a mutant strain with bright orange-red eyes.  Alleles for this strain will be designated with a question mark (<i>?</i>).  What cross/es should she perform to determine if she generated another scarlet or vermillion mutation, or a new mutation with the same phenotype as scarlet and vermillion?",
    "Image": "",
    "answers": {
        "a": "++ &nbsp &nbspX &nbsp &nbsp<i>??</i>",
        "b": "<i>st st</i> &nbsp &nbspX &nbsp &nbsp<i>??</i>",
        "c": "<i>st st</i> &nbsp &nbspX &nbsp &nbsp?? &nbsp &nbsp &nbsp &nbsp &nbsp and &nbsp &nbsp &nbsp &nbsp &nbsp<i>vv</i> &nbsp &nbspX &nbsp &nbsp<i>??</i>",
        "d": "<i>st st</i> <i>vv</i> &nbsp &nbspX &nbsp &nbsp<i>??</i>",
        "e": "<i>vv</i> &nbsp &nbspX &nbsp &nbsp<i>??</i>"
     },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "This designates a cross between <i>?</i> and wild type flies.  <br>All of the F2 of this cross will have the +<i>?</i> genotype, and they will all be wild type.  <br>This would provide no evidence to distinguish <i>?</i> from <i>st</i> or <i>v</i>.",
        "b": "If the F2 progeny all have bright orange-red eyes, this would indicate that <i>?</i> is another mutation of the <i>st</i> gene.  <br>If they’re all wild type then <i>st</i> & <i>?</i> are complimentary, indicating that their mutations are in different genes.  <br>However, it would not determine if <i>?</i> is <i>v</i>, or if it is a new mutation.",
        "c": "CORRECT: If all of the F2 from the (<i>st st</i> &nbspX &nbsp<i>??</i>) cross have bright orange-red eyes, this would indicate that <i>?</i> is scarlet.  <br>If all of the F2 from the (<i>vv</i> X <i>??</i>) cross have bright orange-red eyes, this would indicate that <i>?</i> is vermillion. <br>If both crosses produce wild type eyes, then <i>?</i> is a new mutation, not <i>st</i> or <i>v</i>.",
        "d": "This cross designates a mating between <i>?</i> flies and <i>st</i>, <i>v</i> double mutants.  <br>If the progeny are all wild type, that would indicate that <i>?</i> is in a different gene, not <i>st</i> or <i>v</i>.  <br>If the progeny all have bright orange-red eyes that would indicate that <i>?</i> is either <i>st</i> or <i>v</i>.  <br>However, it would not distinguish between <i>st</i> or <i>v</i>.  Moreover, it would be difficult to generate a <br><i>st</i>, <i>v</i> double mutant, because both mutations produce the same phenotype.",
        "e": "If the F2 progeny all have bright orange-red eyes, this would indicate that <i>?</i> is another mutation of the <i>v</i> gene.  <br>If they’re all wild type then <i>v</i> & <i>?</i> are complimentary, indicating that their mutations are in different genes.  <br>However, it would not determine if <i>?</i> is <i>st</i>, or if it is a new mutation."
    }
},
{
    "question": "What distinguishes a gene from an allele?",
    "Image": "",
    "answers": {
        "a": "gene refers to a fragment of a chromosome <br>allele refers to the sequence of that fragment",
        "b": "gene refers to a functional unit <br>allele refers to the location of that unit",
        "c": "gene refers to a functional unit <br>allele refers to the specific variant of a gene",
        "d": "gene refers to a location on a chromosome <br>allele refers to the DNA sequence",
        "e": "gene refers to a trait <br>allele refers to the functional unit responsible for that trait"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Both genes and alleles constitute a fragment, or region of a chromosome.  <br>Both genes and alleles have specific sequences.",
        "b": "Both genes and alleles are functional units.  <br>The location of a gene and its alleles on a chromosome is called the locus.  <br>Because a locus refers to both alleles and genes it doesn’t distinguish between them.",
        "c": "CORRECT: The only real distinction between a gene and allele is the level of the reference.  <br>A gene refers to a region of a chromosome that controls a trait.  <br>Alleles are specific variants of a gene, located on one homolog, inherited from one parent.",
        "d": "The location of a gene and its alleles on a chromosome is called the locus.  <br>Because locus refers to both alleles and genes, it doesn’t distinguish between the two.  <br>Regarding sequence, both genes and alleles have specific sequences.",
        "e": "The traits are the phenotype.  <br>Both genes and alleles are functional units determining the phenotype."
}
},
{
    "question": "Both of the grandfathers of a male child have cystic fibrosis (CF) and sickle cell anemia (SCA).  If the child has SCA, what’s the chance that he will also suffer from CF?",
    "Image": "",
    "answers": {
        "a": "0",
        "b": "3/16",
        "c": "1/16",
        "d": "1/4",
        "e": "100%"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The grandfathers both had CF, so there is a chance that the child with inherit the disease.",
        "b": "This is the chance that progeny produced from a dihybrid, heterozygous cross, will be affected by one of the mutant genes but not the other.  However, this isn’t a dihybrid cross because the stem tells us that the patient has SCA, so the only consideration is if he has CF.",
        "c": "This is the chance that progeny produced from a dihybrid, heterozygous cross will be affected by both diseases.  However, this isn’t a dihybrid cross because the stem tells us that the patient has SCA, so the only consideration is if he will have CF.",
        "d": "CORRECT: According to independent assortment, the fact that the patient has SCA doesn’t affect his risk of having CF.  Therefore, this is a monohybrid heterozygous cross ( + <i>cf</i> &nbsp&nbsp x &nbsp + <i>cf</i> ), subject to the 3:1 phenotypic ratio.  <br>The 1 is the class of the ratio that represents homozygous recessives affected with CF, 1/(3+1) = ¼.",
        "e": "There is possibility that the child will not suffer from CF because his parents are both heterozygous."
    }
},
{
    "question": "A researcher needs to generate double mutant fruit flies with the silver (<i>svr</i>) and rosy (r) phenotypes.  <i>svr</i> homozygotes have pale, silvery bodies; <i>r</i> homozygotes have ruby red eyes.  The researcher crosses silver males with rosy females.  The F1 are all wild type. <br><br>Why weren’t there any F1 with a mutant phenotype?",
    "Image": "",
    "answers": {
        "a": "<i>r</i> and <i>svr</i> are complimentary",
        "b": "<i>svr</i> is dominant to <i>r</i>",
        "c": "<i>svr</i> is recessive to <i>r</i>",
        "d": "they were all heterozygous for both loci",
        "e": "they were all homozygous for both loci"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Complementation is a test used to determine if two mutations with the same phenotype are produced by the same gene or different genes.  Silver and rosy have different phenotypes, so complementation is not applicable.",
        "b": "Dominance is when the phenotype of an allele masks the phenotype of another allele at the same locus.  <br><i>r</i> and <i>svr</i> are separate loci.",
        "c": "Recessive is when the phenotype of an allele only manifests in the absence of a dominant allele at the same locus.  <br><i>r</i> and <i>svr</i> are separate loci.",
        "d": "CORRECT: The silver stock is homozygous mutant for <i>svr</i> but wild type for <i>r</i>. <br>The rosy stock is homozygous mutant for <i>r</i> but wild type for <i>svr</i>.  The cross is written ( <i>svr svr</i>  ++   X   ++ <i>rr</i> ).  <br>Thus, for both loci, the F1 had to inherit a mutant allele from one parent and wild type from the other.  Their genotype is written +<i>svr</i> &nbsp +<i>r</i>.  <br>Because there is a dominant, wild type allele for both loci, their phenotype is wild type.",
        "e": "The parents of both stocks were homozygous mutant for one locus, homozygous wild type for the other.  <br>Thus, the progeny all had to inherit mutant and wild type alleles from both parents, and they are all heterozygous for both loci, not homozygous."
    }
},
{
    "question": "A researcher needs to generate double mutant fruit flies with the silver (<i>svr</i>) and rosy (<i>r</i>) phenotypes.  <i>svr</i> homozygotes have pale, silvery bodies; <i>r</i> homozygotes have ruby red eyes.  The researcher crosses silver males with rosy females.  The F1 are all wild type.  <br><br>The researcher then crosses the F1 with each other, producing a thousand F2. <br>Approximately how many will be double mutants?",
    "Image": "",
    "answers": {
        "a": "63",
        "b": "125",
        "c": "188",
        "d": "250",
        "e": "563"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The F2 cross is written (+<i>svr</i> +<i>r</i> &nbsp &nbsp X &nbsp &nbsp +<i>svr</i> +r).  <br>This is a dihybrid, heterozygous cross, subject to the 9:3:3:1 phenotypic ratio.  <br>The double mutant class of this ratio is the 1, so 1/16<sup>th</sup> of the F2 will be double mutants [1/(9+3+3+1) = 1/16].  <br>1/16 x 1000 is 62.5, which rounds to 63.",
        "b": "125 is 1/8<sup>th</sup> of 1000, which corresponds to a 2 of the 1:2:1:2:4:2:1:2:1 genotypic ratio [2/(1+2+1+2+4+2+1+2+1)] = 2/16 = 1/8.  <br>These 2s represent the classes with one heterozygous locus and one homozygous locus, either mutant or wild type.  <br>They are not the double mutants, which is what the question asked for.",
        "c": "188 is 3/16 of 1000, which corresponds to a 3 of the 9:3:3:1 phenotypic ratio [3/(9+3+3+1) = 3/16].  <br>These are the classes that are mutant for one locus and wild type for the other.  <br>They are not the double mutants, which is what the question asked for.",
        "d": "250 is ¼ of 1000.  If the question had asked about a monohybrid cross, this would be the number of mutant progeny.",
        "e": "563 is 9/16 of 1000, which corresponds to the 9 of the 9:3:3:1 phenotypic ratio [9/(9+3+3+1) = 9/16].  <br>This is the class that’s wild type for both loci. <br>It is not the double mutants, which is what the question asked for."
    }
},
{
    "question": "A researcher needs to generate double mutant fruit flies with the silver (<i>svr</i>) and rosy (<i>r</i>) phenotypes.  <i>svr</i> homozygotes have pale, silvery bodies; <i>r</i> homozygotes have ruby red eyes.  The researcher crosses silver males with rosy females.  The F1 are all wild type. <br><br>The researcher then crosses the F1 with each other, producing a thousand F2. <br>Approximately how many will be discolored?",
    "Image": "",
    "answers": {
        "a": "63",
        "b": "188",
        "c": "250",
        "d": "438",
        "e": "563"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "63 is 1/16 of 1000.  <br>This corresponds to the 1 of the 9+3+3+1 ratio [1/(9+3+3+1)] = 1/16.  <br>This is the class that’s homozygous mutant for both loci. <br>However, the question asked for all discolored flies, not just flies who were discolored for each locus.",
        "b": "188 is 3/16 of 1000. <br>This corresponds to the 3s of the 9:3:3:1 phenotypic ratio [3/(9+3+3+1) = 3/16].  <br>These are the classes that are mutant for one locus and wild type for the other.  <br>However, the question asked for all discolored flies, not just flies who were discolored for one or the other locus.",
        "c": "250 is ¼ of 1000.  If the question had asked for a monohybrid cross, this would be the number of mutant progeny.",
        "d": "CORRECT: Both mutations produce a discolored phenotype; <i>svr</i> homozygotes have discolored bodies, <i>r</i> homozygotes have discolored eyes.  <br><br>Therefore, three classes of the 9:3:3:1 ratio represent discolored phenotypes.  <br>The first 3 represents silver flies (<i>svr R</i>), <br>the second 3 represents rosy flies (<i>r Svr</i>), <br>and the 1 represents silver, rosy double mutants (<i>svr r</i>).  <br>The only class that isn’t discolored is the 9, which represents wild type flies.  <br><br>Thus, 7/16 = (3+3+1)/16 of the F2 are discolored, and the number of discolored flies is 7/16 x 1000 = 437.5.",
        "e": "563 is 9/16 of 1000. <br>This corresponds to the 9 of the 9:3:3:1 phenotypic ratio [9/(9+3+3+1) = 9/16].  <br>This is the class that’s wild type for both loci.  <br>However, the question asked for discolored flies, not flies who weren't discolored."
    }
},
];
