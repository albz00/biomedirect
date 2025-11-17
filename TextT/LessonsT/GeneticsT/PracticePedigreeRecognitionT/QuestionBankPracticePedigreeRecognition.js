var shuffleMe = true;
var qBank = [
{
    "question": "What is the most likely inheritance pattern depicted by this pedigree?",
    "Image": "QuestionImages/PedigreeRecognition1.jpg",
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
        "a": "CORRECT: Vertical Transmission&nbsp &nbsp (I-3 → II-2 → III-1 & III-3).",
        "b": "Not Skipping Generations.",
        "c": "This pedigree is far too small to conclude that its multifactorial.",
        "d": "Father to Son Transmission&nbsp &nbsp &nbsp (I-3 → II-2)&nbsp &nbsp &nbsp & &nbsp &nbsp &nbsp (II-2 → III-1).",
        "e": "Father to Son Transmission&nbsp &nbsp &nbsp (I-3 → II-2)&nbsp &nbsp &nbsp & &nbsp &nbsp &nbsp (II-2 → III-1).<br>Not Skipping Generations."
    }
},
    {
    "question": "What is the most likely inheritance pattern depicted by this pedigree?",
    "Image": "QuestionImages/PedigreeRecognition2.jpg",
    "answers": {
        "a": "autosomal dominant",
        "b": "autosomal recessive",
        "c": "mitochondrial",
        "d": "X-linked dominant",
        "e": "X-linked recessive"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "No Vertical Transmission.",
        "b": "CORRECT: Skipping Generations&nbsp &nbsp (I-1 →→ III-2 & III-3)&nbsp &nbsp &nbsp & &nbsp &nbsp &nbsp (I-4 →→ III-2 & III-3).",
        "c": "Not Inherited from Mothers&nbsp &nbsp (I-4 →← II-2).",
        "d": "No Vertical Transmission.",
        "e": "Inherited from Fathers through Sons&nbsp &nbsp (I-1 → II-1 → III-2)."
    }
},
    {
    "question": "What is the most likely inheritance pattern depicted by this pedigree?",
    "Image": "QuestionImages/PedigreeRecognition3.jpg",
    "answers": {
        "a": "autosomal dominant",
        "b": "autosomal recessive",
        "c": "mitochondrial",
        "d": "X-linked dominant",
        "e": "X-linked recessive"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Vertical Transmission with X-Linked Pattern, &nbsp Grandfather→Mother→Son&nbsp (I-1 → II-1 → III-2).",
        "b": "Vertical Transmission&nbsp &nbsp (I-1 → II-1 → III-2).",
        "c": "Offspring of Affected Mothers not Affected&nbsp &nbsp (II-1 ←→ III-1 & III-3).",
        "d": "CORRECT:<br>Inherited from Affected Grandfather to Affected Mother to Affected Son &nbsp (I-1 → II-1 → III-2)<br>No Father to Son Transmission&nbsp &nbsp (I-3&nbsp →←&nbsp II-2)<br>Vertical Transmission&nbsp &nbsp (I-1 → II-1 → III-2).",
        "e": "Vertical Transmission&nbsp &nbsp (I-1 → II-1 → III-2)."
    }
},
    {
    "question": "What is the most likely inheritance pattern depicted by this pedigree?",
    "Image": "QuestionImages/PedigreeRecognition4.jpg",
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
        "a": "Skipping Generations&nbsp &nbsp (I-1 → → III-2 ).",
        "b": "X-linked Recessive Pattern&nbsp &nbsp Father → Daughter → Son&nbsp &nbsp (I-1 → II-2 → III-2).",
        "c": "Inherited from Fathers, through Carrier Mothers&nbsp &nbsp (I-1 → II-2 → III-2).",
        "d": "Skipping Generations&nbsp &nbsp (I-1 → II-2 → III-2).",
        "e": "CORRECT: Inherited from Affected Father through Carrier Daughter to Affected Grandson&nbsp &nbsp (I-1 → II-2 → III-2)."
    }
},
{
    "question": "What is the most likely inheritance pattern depicted by this pedigree?",
    "Image": "QuestionImages/PedigreeRecognition5.jpg",
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
        "a": "Vertical Transmission with Maternal Inheritance.",
        "b": "Vertical Transmission&nbsp &nbsp (I-2 → II-3 → III-2 & III-3 & III-4).",
        "c": "CORRECT: Inherited from all Mothers&nbsp &nbsp (I-2 → II-2 & II-3)&nbsp &nbsp &nbsp & &nbsp &nbsp &nbsp (II-3 → III-2 & III-3 & III-4)<br>Not Inherited through Fathers&nbsp &nbsp (II-2 →← III-1).",
        "d": "Affected Daughters without Affected Fathers&nbsp &nbsp (I-1 →← II-3)&nbsp &nbsp &nbsp & &nbsp &nbsp &nbsp (II-4 →← III-4).",
        "e": "Affected Daughters without Affected Fathers&nbsp &nbsp (I-1 →← II-3)&nbsp &nbsp &nbsp & &nbsp &nbsp &nbsp (II-4 →← III-4)<br>Vertical Transmission&nbsp &nbsp (I-2 → II-3 → III-2 & III-3 & III-4)."
    }
},
];
