var shuffleMe = true;
var qBank = [
{
    "question": "Which symbol denotes the carrier frequency?",
    "Image": "",
    "answers": {
        "a": "2pq",
        "b": "p",
        "c": "p<sup>2</sup>",
        "d": "q",
        "e": "q<sup>2</sup>"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: frequency of heterozygotes",
        "b": "frequency of dominant alleles in a population",
        "c": "frequency of homozygous dominant individuals",
        "d": "frequency of recessive alleles in a population",
        "e": "frequency of homozygous recessive individuals"
    }
},
{
    "question": "Which of the following are allelic frequencies?",
    "Image": "",
    "answers": {
        "a": "2pq",
        "b": "p",
        "c": "p<sup>2</sup>",
        "d": "q",
        "e": "q<sup>2</sup>"
    },
    "correctAns": [
        "b", "d"
    ],
    "explain": {
        "a": "genotypic frequency of heterozygotes in a population, carrier frequency",
        "b": "CORRECT: frequency of dominant alleles in a population",
        "c": "genotypic frequency of homozygous dominant individuals in a population",
        "d": "CORRECT: frequency of recessive alleles in a population",
        "e": "genotypic frequency of homozygous recessives in a population, incidence"
    }
},
{
    "question": "Which of the following violates the primary assumption of Hardy Weinberg equilibrium?",
    "Image": "",
    "answers": {
        "a": "a generation where 2/3<sup>rd</sup> of the progeny of carriers inherit recessive alleles",
        "b": "diets rich in fruits and vegetables",
        "c": "stable environment",
        "d": "xenophobia"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Half the progeny of heterozygous carriers are predicted to inherit recessive alleles.  <br>But in this case, for no apparent reason, inheritance of the recessive alleles was 1/6<sup>th</sup> higher than predicted.  <br>This is random drift, which can function to change allelic frequencies in small population, <br>thus violating the primary assumption.",
        "b": "Various fruits and vegetables are believed to suppress mutagenesis, <br>e.g. green tea, broccoli, carrots, tomatoes, cabbage and brussels sprouts.  <br>But by suppressing mutagenesis they support the primary assumption, they do not violate it.",
        "c": "If the environment is stable, there will be no change in natural selection, <br>and therefore no change is the percentages of alleles inherited by future generations.",
        "d": "One effect of xenophobia is to discourage immigration into a population. <br>This impedes introduction of new alleles into a population, thereby hindering changes in gene frequencies.  <br>This will support the primary assumption, but diminish the population’s ability to evolve and adapt."
    }
},
    {
    "question": "The incidence of Tay-Sachs disease in the Ashkenazi Jewish population is 1 in every 3,500.  What is the carrier frequency?",
    "Image": "",
    "answers": {
        "a": "0.029%",
        "b": "0.057%",
        "e": "1.66%",
        "d": "1.69%",
        "e": "3.3%"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This is q<sup>2</sup> = 1/3500 = 0.000286",
        "b": "This would be the product for 2pq if the square root of q<sup>2</sup> was not factored in for q <br>q ≠ q<sup>2</sup> = 1/3500 = 0.000286 <br>p ≠ 1-q<sup>2</sup> = 1-0.000286 = 0.9997 <br>2pq  ≠ 2 x 0.000286 x 0.9997 = 0.00057",
        "c": "This would be the product if 2 were omitted from the calculation for 2pq <br>q<sup>2</sup> = 1/3500 = 0.000286<br>q = √q<sup>2</sup> = 0.017<br>p = 1-q = 1-0.017 = 0.983<br>2pq ≠ pxq = 0.983 x 0.017 = 0.0166",
        "d": "This is q = √q<sup>2</sup> = √1/3500 = 0.0169",
        "e": "CORRECT: q<sup>2</sup> = 1/3500 = 0.000286<br>q = √q<sup>2</sup> = √0.000286 = 0.017<br>p = 1-q = 1-0.017 = 0.983<br>2pq = 2 x 0.983 x 0.017 = 0.0332"
    }
},
    {
    "question": "A woman whose father had sickle cell anemia (SCA), marries a man from Uganda.  The incidence of sickle cell anemia in central Africa is 3 in 25.  What is the risk that they will have a child with SCA?",
    "Image": "",
    "answers": {
        "a": "5.3%",
        "b": "11.3%",
        "c": "22.6%",
        "d": "45.3%",
        "e": "65.4%"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This value could be obtained if incidence, q2, were factored into the calculations without computing the allelic frequency. <br><br>Risk from Mother = ½.<br><br>Risk that the husband is a carrier is 2pq <br>q<sup>2</sup> = 3/25 = 0.12 <br>q ≠ q<sup>2</sup> = 0.12<br>p = 1–q ≠ 1-0.12 = 0.88 <br>2pq ≠ 2 x 0.12 x 0.88 = 0.211 <br><br>Risk from Father = ½ <br><br>Risk that the child will be affected = ½ x 2pq x ½ ≠ 0.211 x ¼ = 0.0528",
        "b": "CORRECT: Because the woman’s father had SCA, she must be a carrier, <br>and the risk that she passes the SCA allele to her child must be factored into the calculations. <br>Risk from Mother = ½<br><br>Risk that the husband is a carrier is 2pq <br>q<sup>2</sup> = 3/25 = 0.12<br>q = √q<sup>2</sup> = √0.12 = 0.346<br>p = 1–q = 1-0.346 = 0.654<br>2pq = 2 x 0.654 x 0.346 = 0.453<br><br>You also have to factor in the risk that if her husband's heterozygous, he will pass the allele to the child. <br>Risk from Father = ½ <br><br>Thus the risk that the child will be affected by SCA = ½ x 2pq x ½ = 0.453 x ¼ = 0.113",
        "c": "This value could be obtained if the risk that the father passes the allele to his offspring were omitted from the calculations. <br><br>Risk from Mother = ½.<br><br>Risk that the husband is a carrier is 2pq <br>q<sup>2</sup> = 3/25 = 0.12<br>q = √q<sup>2</sup> = √0.12 = 0.346<br>p = 1–q = 1-0.346 = 0.654<br>2pq = 2 x 0.654 x 0.346 = 0.453 <br><br>Risk that the child will be affected &nbsp ≠ &nbsp 2pq x ½ = 0.453 x ½ = 0.226",
        "d": "This is the carrier frequency, 2pq <br><br>q<sup>2</sup> = 3/25 = 0.12<br>q = √q<sup>2</sup> = √0.12 = 0.346<br>p = 1–q = 1-0.346 = 0.654<br>2pq = 2 x 0.654 x 0.346 = 0.453",
        "e": "This is the dominant allelic frequency, p <br><br>q<sup>2</sup> = 3/25 = 0.12<br>q = √q<sup>2</sup> = √0.12 = 0.346<br>p = 1–q = 1-0.346 = 0.654"
    }
},
    {
    "question": "The incidence of glucose-6-phosphate dehydrogenase (G6PD) deficiency in African American males is 0.1.  What is the carrier frequency in females?",
    "Image": "",
    "answers": {
        "a": "1.98%",
        "b": "10%",
        "c": "18%",
        "d": "20%",
        "e": "43.2%"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "This value would be obtained if the incidence in males, 0.1, was squared and plugged into the calculations <br>q ≠ q<sup>2</sup> = 0.1 x 0.1 = 0.01  <br>p = 1-q  ≠  1-0.01  =  0.99   <br>2pq ≠ 2 x 0.99 x 0.01   =   0.0198",
        "b": "This is the incidence in males,    0.1 = 10%.",
        "c": "CORRECT: G6PD is X-linked.  <br>The incidence of X-linked traits in males is the allelic frequency, q.  <br>q = 0.1  <br>p is 1-q  =  1-0.1  =  0.9   <br><br>The carrier frequency in females is the same as it is for autosomal recessive traits, 2pq.  <br>2pq   =   2 x 0.9 x 0.1   =   0.18",
        "d": "This value could be obtained if p was omitted from the calculations. <br>q = 0.1  <br>2pq ≠ 2q = 2 x 0.1   =   0.20",
        "e": "This value might be calculated if it wasn’t recognized that the incidence in males equals the allelic frequency <br><br>Incidence = Allelic Frequency = q ≠ √q<sup>2</sup> <br>q ≠ √q = √0.1 = 0.316  <br>p = 1-q  ≠  1-0.316  =  0.684   <br>2pq ≠ 2 x 0.684 x 0.316   =   43.2"
    }
},
];
