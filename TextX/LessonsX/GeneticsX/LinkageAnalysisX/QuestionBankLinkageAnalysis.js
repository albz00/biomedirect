var shuffleMe = false;
var qBank = [
{
    "question": "Two heterozygous loci are in the trans conformation.  What is the allelic combination for one of these chromosomal homologs?",
    "Image": "",
    "answers": {
        "a": "Dominant for one allele, dominant for the other.",
        "b": "Dominant for one allele, recessive for the other.",
        "c": "Dominant for one gene, dominant for the other.",
        "d": "Dominant for one gene, recessive for the other.",
        "e": "Recessive for one gene, recessive for the other."
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This response is ambiguous.  Cis/Trans conformations are specific to two genes.  Because this response refers to alleles, it is unclear if it describes two alleles at the same locus or alleles at different loci.  However, in either case the response is incorrect.  Because each locus is heterozygous, neither can have two dominant alleles.  If it’s referring to dominant alleles at different loci on the same homolog, it’s describing the cis conformation, not trans.",
        "b": "This response is ambiguous.  Cis/Trans conformations are specific to two genes.  Because this response refers to alleles, it is unclear if it describes two alleles at the same locus or alleles at different loci.  If it’s referring to alleles at one locus, there would be one dominant and one recessive because they are heterozygous, but that wouldn’t distinguish between cis and trans.  A dominant allele at one locus and recessive at the other would be consistent with the trans conformation, but due to the ambiguity of this response it is not the best answer.",
        "c": "This describes the cis conformation, not trans.",
        "d": "CORRECT: Trans means that for the paternal homolog, there’s a dominant allele for the first locus and recessive for the second locus, while the maternal homolog will have a recessive allele for the first locus and dominant for the second.",
        "e": "This occurs in the cis conformation, not trans."
    }
},
{
    "question": "What does it mean if there are 23 mu between two loci?",
    "Image": "",
    "answers": {
        "a": "23% of the offspring will be recombinant.",
        "b": "A crossover at one locus inhibits crossing over at another.",
        "c": "The loci are unlinked.",
        "d": "There are 23 kilobases between the loci.",
        "e": "There is a 23% chance that a crossover will occur between the loci."
    },
    "correctAns": [
        "a", "e"
    ],
    "explain": {
        "a": "CORRECT: A map unit (mu) is defined as 1% recombination, so if there are 23 mu between two loci then 23% of the offspring will be recombinant.",
        "b": "Crossing over occurs between loci, not at a locus.  This response is reminiscent of the coefficient of interference, but that’s the phenomenon of crossing over between two loci inhibiting crossing with a third, adjacent locus.",
        "c": "Linkage is defined as less than 50 mu between loci.  23 is less than 50, so these loci are linked.",
        "d": "Map units are defined by the percent recombination between loci, not the actual number of base pairs.  A mu does provide a relative estimate of physical distance, but this varies from one region of a chromosome to another, and between one species and another, so a mu can never be used to determine the exact distance between genes.  Moreover, in most if not all species there are far more than 1 kb per mu.  In humans, on the average there are about 1000 kb per mu.",
        "e": "CORRECT: A map unit (mu) is defined as 1% recombination, so if there are 23 mu between loci then the chance of a crossover occurring between them is 23%."
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> A geneticist crosses a stock of wild type flies with a b; dp stock.  The b mutation results in fruit flies with black bodies; the dp mutation results in flies with dumpy wings.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>+ +</td>    <td>178</td>  </tr>   <tr>    <td>b dp</td>    <td>187</td>  </tr>    <tr>    <td>b +</td>    <td>337</td>  </tr>    <tr>    <td>+ dp</td>    <td>310</td>  </tr></table><br>What is the conformation of the parents?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    
    "Image": "",
    "answers": {
        "a": "++",
        "b": "+b   +dp",
        "c": "cis",
        "d": "cis/trans",
        "e": "trans"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "This is the phenotype of the parents, wild type for both loci.",
        "b": "This is the genotype of the parents, heterozygous for both loci.  It does not designate the  conformation of alleles for the two loci on the chromosomes.",
        "c": "If the larger classes were + + and b dp, then the parental chromosomes would have been cis.",
        "d": "This is a meaningless designation.  The conformation has to either be cis or trans; it can’t be both.",
        "e": "CORRECT: The largest classes are b + and + dp.  This demonstrates that the opposite types of alleles were on each homolog, so they were in the trans conformation."
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> A geneticist crosses a stock of wild type flies with a b; dp stock.  The b mutation results in fruit flies with black bodies; the dp mutation results in flies with dumpy wings.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>+ +</td>    <td>178</td>  </tr>   <tr>    <td>b dp</td>    <td>187</td>  </tr>    <tr>    <td>b +</td>    <td>337</td>  </tr>    <tr>    <td>+ dp</td>    <td>310</td>  </tr></table><br>Which are the recombinant classes?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    "Image": "",
    "answers": {
        "a": "+ +   &   + dp ",
        "b": "+ +   &   b dp",
        "c": "b +   &   + dp",
        "d": "b +   &   b dp"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The + + class has the lowest number, so this is a recombinant type class.  The + dp class has the second highest number, so this is a parental type class.",
        "b": "These two classes have the highest numbers, so they are the parental type classes.  They were produced because no cross overs occurred between the b and dp loci.",
        "c": "CORRECT: These two classes have the lowest numbers, so they are the recombinant type classes.  They were produced by a cross over between the b and dp loci.",
        "d": "The b + class has the highest number, so this is a parental type class.  The b dp class has the second lowest number, so this is a recombinant type class."
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> A geneticist crosses a stock of wild type flies with a b; dp stock.  The b mutation results in fruit flies with black bodies; the dp mutation results in flies with dumpy wings.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>+ +</td>    <td>178</td>  </tr>   <tr>    <td>b dp</td>    <td>187</td>  </tr>    <tr>    <td>b +</td>    <td>337</td>  </tr>    <tr>    <td>+ dp</td>    <td>310</td>  </tr></table><br>What is the genetic distance between the loci?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    "Image": "",
    "answers": {
        "a": "36.1 mu",
        "b": "49.1 mu",
        "c": "50.9 mu",
        "d": "56.4 mu",
        "e": "63.9 mu"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Recombinant types / Total = (178+187) / (337+310+178+187) = 0.3607 = 36.1%.",
        "b": "This result would be obtained if one recombinant and one parental type were divided by the total (310+187) / (337+310+178+187) = 0.4911 = 49.1%.",
        "c": "This result would be obtained if a recombinant and parental type were divided by the total (337+178) / (337+310+178+187) = 0.5089 = 50.9%.",
        "d": "This result would be obtained if a recombinant types were divided by the parental types (178+187) / (337+310) = 0.5641 = 56.4%.",
        "e": "This result would be obtained if the parental types were divided by the total (337+310) / (337+310+178+187) = 0.6393 = 63.9%."
    }
},
{
    "question": "Two heterozygous loci begin in the cis conformation.  What will the conformation be if three crossovers occur between them?",
    "Image": "",
    "answers": {
        "a": "cis",
        "b": "heterozygous",
        "c": "homozygous",
        "d": "trans"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The only way the orientation could remain the same is there were an even number of crossovers between the loci.",
        "b": "Heterozygosity refers to the allelic combination at one locus, not the conformation of two loci.",
        "c": "Homozygosity refers to the allelic combination at one locus, not the conformation of two loci.",
        "d": "CORRECT: An uneven number of crossovers reverses the orientation, in this case from cis to trans."
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> The Antennapedia (Antp) mutation results in fruit flies with legs extending from their head instead of antenna.  Ebony (e) results in fruit flies with black eyes.  Raisin (rai) results in fruit flies with black eyes.  A geneticist crosses Antp flies with a rai e double mutant stock.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>Antp e rai</td>    <td>63</td>  </tr>   <tr>    <td>+   +  +</td>    <td>73</td>  </tr>    <tr>    <td>Antp + +</td>    <td>224</td>  </tr>    <tr>    <td>+   e   rai</td>    <td>231</td>  </tr> <tr>    <td>Antp + rai</td>    <td>364</td>  </tr>    <tr>    <td>+   e   +</td>    <td>372</td>  </tr>    <tr>    <td>Antp e +</td>    <td>693</td>  </tr>    <tr>    <td>+   +   rai</td>    <td>708 </td>  </table><br>How would the parental cross be written?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    "Image": "",
    "answers": {
        "a": "( Antp +    + e    + rai )  X   (+ +    e e    rai rai)",
        "b": "( Antp +    + e    + rai )  X   (Antp Antp    e e    rai rai)",
        "c": "(Antp Antp    + +    + +)  X   (+ +    e e    rai rai)",
        "d": "(Antp Antp    + e    + rai)   X   (+ Antp    e e    rai rai)"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: As designated by capitalization, Antp is dominant.  Thus, the genotype of the Antennapedia stock was heterozygous for all three loci, while the genotype of the raisin; ebony stock is homozygous recessive for all three loci.",
        "b": "This is how a three point mapping cross would typically be set up, with flies who are heterozygous for all three loci in one stock, homozygous mutant in the other.  However, because Antp is dominant, if the second stock had the genotype shown, all of the parental and F1 flies would have the Antp phenotype because they would either be heterozygous (Antp/+) or homozygous (Antp/Antp).",
        "c": "With this cross, all of the F1 would be heterozygous for all three loci.  For mapping, a cross needs to be between heterozygotes and homozygotes.",
        "d": "With this cross, the F1 will all have the Antennapedia phenotype, because Antp is dominant and they will either be heterozygous or homozygous mutant."
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> The Antennapedia (Antp) mutation results in fruit flies with legs extending from their head instead of antenna.  Ebony (e) results in fruit flies with black eyes.  Raisin (rai) results in fruit flies with black eyes.  A geneticist crosses Antp flies with a rai e double mutant stock.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>Antp e rai</td>    <td>63</td>  </tr>   <tr>    <td>+   +  +</td>    <td>73</td>  </tr>    <tr>    <td>Antp + +</td>    <td>224</td>  </tr>    <tr>    <td>+   e   rai</td>    <td>231</td>  </tr> <tr>    <td>Antp + rai</td>    <td>364</td>  </tr>    <tr>    <td>+   e   +</td>    <td>372</td>  </tr>    <tr>    <td>Antp e +</td>    <td>693</td>  </tr>    <tr>    <td>+   +   rai</td>    <td>708 </td>  </table><br>What is the conformation of the parents?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    "Image": "",
    "answers": {
        "a": "<u>Antp	 +	 e</u> 	<br> 	+ 	rai	 +",
        "b": "<u>Antp	 +	rai</u>  	<br> 	+	 e	 +",
        "c": "<u>Antp	 e	 +</u>   <br> 	+	 +	rai",
        "d": "<u>Antp	rai	 +</u>    <br> 	+	 +	 e",
        "e": "<u>Antp 	rai	 e</u>   <br> 	+	 +	 +"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The largest classes are + + rai and Antp e +, so these are the parental type progeny.  The smallest classes are Antp e + and + + rai, so these are the double crossovers.  With these double crossovers the cis/trans conformation or rai changed relative to the other two, so it must be between them.",
        "b": "These genotypes are the same as those listed in response 4, except that order of e and rai are reversed.   The Antp + rai and + e + numbers are 372 and 364 respectively.  These are not the highest, so they cannot be the parental type progeny.  Moreover, e should not be between Antp & rai, and indicated by the double crossover classes (smallest numbers).",
        "c": "The largest classes are + + rai and Antp e +, so these are the parental type progeny.  However, the order of the loci is incorrect.  With this order only one crossover between e and rai would be necessary to produce the two smallest classes.  But the paucity of these classes indicate that they were produced by double crossovers.",
        "d": "These genotypes are the same as those listed in response 2, except that order of rai and e are reversed.   The Antp rai + and + + e numbers are 364 and 372 respectively.  These are not the highest, so they cannot be the parental type progeny.  Moreover, with these genotypes, all that would be required to produce the smallest classes is a single crossover between rai and e.  However, the smallest classes had be produced by double crossovers.",
        "e": "The Antp rai e and + + + numbers are 63 and 73 respectively.  These are the smallest numbers, which indicates they were produced from double crossovers.  They cannot be the parental type progeny, which are produced without a crossover between any of the loci."
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> The Antennapedia (Antp) mutation results in fruit flies with legs extending from their head instead of antenna.  Ebony (e) results in fruit flies with black eyes.  Raisin (rai) results in fruit flies with black eyes.  A geneticist crosses Antp flies with a rai e double mutant stock.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>Antp e rai</td>    <td>63</td>  </tr>   <tr>    <td>+   +  +</td>    <td>73</td>  </tr>    <tr>    <td>Antp + +</td>    <td>224</td>  </tr>    <tr>    <td>+   e   rai</td>    <td>231</td>  </tr> <tr>    <td>Antp + rai</td>    <td>364</td>  </tr>    <tr>    <td>+   e   +</td>    <td>372</td>  </tr>    <tr>    <td>Antp e +</td>    <td>693</td>  </tr>    <tr>    <td>+   +   rai</td>    <td>708 </td>  </table><br>How many map units are between Antp and rai, and between rai and e?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.<br><br><h4>Antp–rai	   rai – e </h4>",
    "Image": "",
    "answers": {
        "a": "27.0	 17.3",
        "b": "28.4	 17.6",
        "c": "32.0	 21.7",
        "d": "43.7	  5.0",
        "e": "52.5	 32.5"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "These results would be obtained if the double crossovers were not factored into the recombinants.<br>Antp-rai 	(372+364)/Total   =   736/ 2728   =   0.2698   =   26.98 mu<br>  rai-e 	(231+224)/Total   =   591/ 2728   =   0.1668   =   16.68 mu",
        "b": "These results would be obtained if the double crossovers were omitted from the recombinant and total sums.<br>Antp-rai 	(372+364)/(708+693+372+364+231+224)   =   736/2592   =   0.2840   =   28.4 mu<br>   rai-e    	(231+224)/(708+693+372+364+231+224)   =   455/2592   =   0.1755   =   17.6 mu",
        "c": "CORRECT: (Recombinants + Double Crossover)/Total.<br>Antp-rai (372+364+73+63)/(708+693+372+364+231+224+73+63)   =   736/ 2728   =   0.3196   =   32.0 mu<br>    rai-e    (231+224+73+63)/(708+693+372+364+231+224+73+63)   =   455/ 2728   =   0.2166   =   21.7 mu",
        "d": "These results would be obtained if all 4 recombinant classes were used to compute the Antp-rai distance, while both double crossover classes where use for the rai-e distance.<br>Antp-rai 	(372+364+231+224)/Total   =   1191/ 2728   =   0.4366   =   43.7 mu<br>   rai-e 	                      (73+63)/Total   =     136/ 2728   =   0.0499   =   5.0 mu",
        "e": "These results would be obtained recombinants were divided by the parental type numbers.<br>Antp-rai 	(372+364)/(708+693)   =   736/1401   =   0.5253   =   52.5 mu<br>  rai-e 	(231+224)/(708+693)   =   455/1401   =   0.3248   =   32.5 mu"
    }
},
{
    "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> The Antennapedia (Antp) mutation results in fruit flies with legs extending from their head instead of antenna.  Ebony (e) results in fruit flies with black eyes.  Raisin (rai) results in fruit flies with black eyes.  A geneticist crosses Antp flies with a rai e double mutant stock.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>Antp e rai</td>    <td>63</td>  </tr>   <tr>    <td>+   +  +</td>    <td>73</td>  </tr>    <tr>    <td>Antp + +</td>    <td>224</td>  </tr>    <tr>    <td>+   e   rai</td>    <td>231</td>  </tr> <tr>    <td>Antp + rai</td>    <td>364</td>  </tr>    <tr>    <td>+   e   +</td>    <td>372</td>  </tr>    <tr>    <td>Antp e +</td>    <td>693</td>  </tr>    <tr>    <td>+   +   rai</td>    <td>708 </td>  </table><br>What’s the coefficient of interference between the Antp-rai region and the rai-e region?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    "Image": "",
    "answers": {
        "a": "0.050",
        "b": "0.069",
        "c": "0.72",
        "d": "0.28"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This is the Fraction of Observed Double Crossovers = Double Crossovers/Tot<br>(73+63)/(708+693+372+364+231+224+73+63)   =   136/2728   =   0.0499",
        "b": "This is the Fraction of Expected Double Crossovers = (Antp-rai Recomb/Tot) x (rai-e Recomb/Tot) <br>(372+364)/2728 x (231+224)/2728   =   0.3196 x 0.2166   =   0.0692",
        "c": "This is the coefficient of coincidence = Fraction Observed Double CO/Fraction Expected Double CO)<br>0.0499  / 0.0692   =   0.7199",
        "d": "CORRECT: Observed Doub CO = 2CO/Tot = (63+73)/(708+693+372+364+231+224+73+63) = 136/2728 = 0.05<br>Expected =  (Antp-rai recomb)  X  (rai-e recomb) = 0.3196 x 0.2166 = 0.0692<br>Coeficient of Coincidence   =   Observed / Expected = 0.05/0.069 = 0.72<br>Coeficient of Interference   =   1 – Coef Coinc  =  1 – 0.72  =  0.28"
    }
},
{
     "question": "<style>table {  text-align: left; width: 100%; border: 1px solid #000000;} caption {text-align: left;}  </style><table>  <caption> The Antennapedia (Antp) mutation results in fruit flies with legs extending from their head instead of antenna.  Ebony (e) results in fruit flies with black eyes.  Raisin (rai) results in fruit flies with black eyes.  A geneticist crosses Antp flies with a rai e double mutant stock.  The F1 are scored, producing the following numbers.  </caption>  <tr>    <th>Genotype</th>    <th>Observed</th>  </tr>  <tr>    <td>Antp e rai</td>    <td>63</td>  </tr>   <tr>    <td>+   +  +</td>    <td>73</td>  </tr>    <tr>    <td>Antp + +</td>    <td>224</td>  </tr>    <tr>    <td>+   e   rai</td>    <td>231</td>  </tr> <tr>    <td>Antp + rai</td>    <td>364</td>  </tr>    <tr>    <td>+   e   +</td>    <td>372</td>  </tr>    <tr>    <td>Antp e +</td>    <td>693</td>  </tr>    <tr>    <td>+   +   rai</td>    <td>708 </td>  </table><br>Are Antp and e linked?<br><br>Note, you are advised to work the following problem out on paper before attempting to answer the multiple choice questions.",
    "Image": "",
    "answers": {
        "a": "Closely",
        "b": "Just Barely",
        "c": "No",
        "d": "Yes"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "As computed for question 9, the Antp-rai distance is 32.0 mu.  The rai-e distance is 21.7 mu.  Therefore, the Antp–e distance is equal to the Antp-rai distance plus the rai-e distance, 32 mu + 21.7 mu = 53.7 mu.  If Antp & e were closely linked the distance between them would be very small, not a little over 50 mu.",
        "b": "As computed for question 9, the Antp-rai distance is 32.0 mu.  The rai-e distance is 21.7 mu.  Therefore, the Antp–e distance is equal to the Antp-rai distance plus the rai-e distance, 32 mu + 21.7 mu = 53.7 mu.  If Antp and e were just barely linked, they would be a little under 50 mu apart.  Instead, they’re a little over 50 mu apart.",
        "c": "CORRECT: As computed for question 9, the Antp-rai distance is 32.0 mu.  The rai-e distance is 21.7 mu.  Therefore, the Antp–e distance is equal to the Antp-rai distance plus the rai-e distance, 32 mu + 21.7 mu = 53.7 mu.  This is a little over 50 mu, so they are not linked.  Antp is linked to rai, and rai is linked to e, but Antp is not linked to e.",
        "d": "As computed for question 9, the Antp-rai distance is 32.0 mu.  The rai-e distance is 21.7 mu.  Therefore, the Antp–e distance is equal to the Antp-rai distance plus the rai-e distance, 32 mu + 21.7 mu = 53.7 mu.  If Antp and e were linked, they would be under 50 mu apart.  Instead, they’re a little over 50 mu apart."
    }
},
];

