var shuffleMe = true;
var qBank = [
{
    "question": "If polygenic inheritance represents the genetic component of a multifactorial trait, what is the other component?",
    "Image": "",
    "answers": {
        "a": "environment",
        "b": "heritability",
        "c": "pleiotropy",
        "d": "polymorphism"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Multifactorial traits are controlled by genetic and environmental factors.",
        "b": "Heritability is an estimate of how much the polygenic component of a multifactorial trait contributes to the phenotype.",
        "c": "Pleiotropy can be thought of as the opposite of polygenic inheritance. <br>Pleiotropy is for a single gene to control multiple traits.  <br>Polygenic inheritance is for multiple genes to control a single trait.",
        "d": "Polymorphism is when there are multiple alleles for a gene in a population.  <br>Polygenic inheritance is multiple genes controlling a trait."
    }
},
{
    "question": "Which of the following is a qualitative, multifactorial trait?",
    "Image": "",
    "answers": {
        "a": "blood pressure",
        "b": "BRCA1 positive breast cancer",
        "c": "eye color",
        "d": "resting heart rate",
        "e": "sexual orientation",
        "f": "sperm count"
    },
    "correctAns": [
        "c", "e"
    ],
    "explain": {
        "a": "A number can be assigned to blood pressure, so it is a quantitative trait.",
        "b": "A number can be assigned BRCA1 breast cancer, i.e. the lifetime risk of developing the malignancy (85%). <br>However, it is questionable if this qualifies as a quantitative trait.  <br>More important, BRCA1 breast cancer is a single gene defect, so it clearly is not multifactorial.",
        "c": "CORRECT: Eye color cannot be quantified, and it is controlled by multiple genes, so it is a qualitative multifactorial trait.  <br><br>It could be argued that there is little if any environmental contribution, so eye color doesn't qualify as a multifactorial trait. &nbsp <br>However, most experts would not accept that interpretation. <br>Multifactorial traits usually have an environmental component, but if not, then multiple genes still constitute multiple factors.",
        "d": "A number can be assigned to heart rate, so it is a quantitative trait.",
        "e": "CORRECT: Sexual orientation cannot be quantified, and it is influenced by multiple factors, both genetic and environmental. <br>Therefore, it is a qualitative multifactorial trait.  ",
        "f": "A number can be assigned to sperm count, so it is a quantitative trait."
    }
},
{
    "question": "How can chain smokers live their entire lives without developing lung cancer?",
    "Image": "",
    "answers": {
        "a": "Environmental factors, such as a healthy lifestyle, must be counteracting the smoking, <br>thereby preventing these smokers from reaching the threshold on the susceptibility curve for lung cancer.",
        "b": "Smoking must have pushed the threshold on the susceptibility curve so high that it could never be reached.",
        "c": "They must be above the threshold at the higher end of the susceptibility curve.",
        "d": "They must be at the lower end of the susceptibility curve.",
        "e": "They must have switched to e-cigarettes, which have lower nicotine levels."
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "The cancerous effect of smoking is so great that there is little chance that a healthy lifestyle could overcome it.",
        "b": "The threshold is fixed and is not affected by environmental factors. <br>Environment affect a person's position on the susceptibility curve, it doesn't change the position of the threshold.  <br><br>Moreover, this explanation implies that smoking decreases the risk of developing lung cancer, <br>when it clearly has the opposite effect.",
        "c": "If they were above the threshold they would develop lung cancer.  <br>This is because the threshold is defined as the point where the risk is so great that the disease will develop.",
        "d": "CORRECT: Those who are born with an atypically high number of cancer resistance genes, <br>are at the lower end of the susceptibility curve for lung cancer, <br>so even smoking can’t push the over the threshold.",
        "e": "Although nicotine levels of both conventional and e-cigarettes vary, the average level of both are comparable, <br>and smoking e-cigarettes still pushes a person towards the threshold."
    }
},
    {
    "question": "In high school an elder brother got straight As without studying.  The younger brother had to work for his Bs.  Both went to college.  The elder brother failed out while the younger graduated with a B average.  In genetic terms, how can this be explained?",
    "Image": "",
    "answers": {
        "a": "Environmental factors in college such as drug use must have mutated the elder brother's genes, decreasing his IQ.",
        "b": "Environmental factors such as hard work improved the younger brother’s genetics, which increased his IQ.",
        "c": "The brothers' genetics are the same while environmental factors such as social distractions caused the elder brother to perform poorly in college.",
        "d": "The elder brother’s genetics gave him a higher IQ, but environmental factors such as study habits and extracurricular distractions caused him to fail, while good study habits allowed the younger brother to overcome his deficit.",
        "e": "The high school material was more interesting to the elder brother, while the younger brother was more interested in the collegiate material."
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "There is are no grounds for assuming that the elder brother used recreational drugs.  <br>Moreover, few recreational drugs are mutagenic, and it is unlikely that those that are specifically target genes that determine IQ.  If the elder brother did use drugs and that decreased his intelligence, it is more likely that the drugs caused physical damage such as altering cerebral neurophysiology or damaging brain tissue.",
        "b": "Environment cannot change genetics.",
        "c": "Social distractions may very well have contributed to the elder brother’s poor collegiate performance. <br>However, the fact that in high school his performance was superior despite his poor study habits, <br>indicates that his IQ is greater than his younger brother.",
        "d": "CORRECT: The superior high school performance of the elder brother, despite his poor study habits, <br>indicates that he probably does have better genetics giving him a higher IQ. <br>However, environment is also important, and the good study habits of the younger brother contributed to his success.  <br><br>Moreover, although IQ is determined by genetics, in this case it’s also an indirect environmental factor.  <br>The elder brother's IQ prevented him from developed good study habits, while the younger brother had to.",
        "e": "Although this is possible, there’s no indication that the material at either level was more or less interesting to either brother.  <br>It is more likely that the elder brother’s IQ alone allowed him to get As in high school, <br>but because college is more challenging he suddenly needed good study habits, which he never developed."
    }
},
    {
    "question": "A child stutters in the presence of his father, but not his mother.  In terms of the threshold model for multifactorial inheritance, how can this be explained?",
    "Image": "",
    "answers": {
        "a": "In the father’s presence the threshold lowers below the child’s genetics, <br>while it raises above the child’s genetics in the mother’s presence.",
        "b": "The father constitutes a genetic factor pushing the child above the threshold.  <br>The mother is an environmental factor pushing him below the threshold.",
        "c": "The father constitutes an environmental factor that pushes the child above the threshold.  <br>The mother is an environmental factor pushing him below the threshold.",
        "d": "The child must have inherited genetics from his father that push him over the threshold, <br>while he inherited genetics from his mother that push him below the threshold.",
        "e": "The father is probably intimidating to the child while the mother is reassuring."
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "It is inappropriate to describe the threshold as raising or lowering above or below genetics.  The threshold doesn't change.  <br>What does change is the child's position on the susceptibility curve.",
        "b": "Both the father and mother constitute genetic and environmental factors.",
        "c": "CORRECT: The father’s probably intimidating, which constitutes an environmental factor that pushes the child above the threshold.  The mother’s probably reassuring, which constitutes an environmental factor pushing him below the threshold.",
        "d": "Just because the father triggers stuttering doesn't mean that the child inherited paternal genes promoting stuttering, <br>nor does suppression of stuttering with the mother mean that the child inherited maternal genes inhibiting stuttering. <br><br>Moreover, genetics are fixed; so they can't explain the child's parental specific fluctuations across the threshold.",
        "e": "This is the most likely scenario and it may explain the cause of the child’s problem.  <br>However, it doesn’t explain it in terms of the threshold model, which is what the question asked for.  <br>In terms of multifactorial inheritance, paternal intimidation pushes the child above the threshold.  <br>Maternal reassurance bolsters confidence, which pushes the child below the threshold."
    }
},
    {
    "question": "A physician reviews the family history of a healthy, female patient.  In genetic terms what is the physician doing?",
    "Image": "",
    "answers": {
        "a": "determining if the patient’s genetics put her above the threshold for a multifactorial disease",
        "b": "diagnosing a patient’s condition",
        "c": "estimating if the patient’s environment puts her near the threshold for a multifactorial disease",
        "d": "estimating if the patient’s genetics put her near the threshold for a multifactorial disease",
        "e": "identifying relatives who may have given the patient genes that cause a multifactorial trait"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "This statement implies that a family history can ascertain a patient’s genetics with certainty, which it cannot.  <br>Moreover, if the patient were above the threshold she would have the disease, but the question defines the patient as healthy.",
        "b": "If the patient has relatives with a multifactorial disease, there's  an increased risk that the patient inherited many of the genes that contribute to the disease.  However, by random chance she may not have, so a diagnosis cannot be made from a family history alone.",
        "c": "A patient’s relatives do constitute part of her environment.  However, when physicians take family histories, they're identifying relatives with diseases.  These are better indicators of the patient's genetics than of her environment.  Taking a social history is a more efficient method for evaluating the environmental contribution of the patient’s family.",
        "d": "CORRECT: If a patient has relatives with a multifactorial disease, <br>there’s an increased risk that she inherited many genes that put her near the threshold.",
        "e": "Identifying the familial origin of a multifactorial disease isn’t as useful as it is for a single gene defect.  For instance, knowing the familial history can allow doctors to determine the exact risk that a child will be affected by a single gene defect.  This cannot be done with multifactorial diseases.  All that can be deduced is if a patient has a lot of relatives with a disease, then she is at increased risk."
    }
},
];