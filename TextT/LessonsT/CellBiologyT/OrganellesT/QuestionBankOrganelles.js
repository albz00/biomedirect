var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "Which of the following is a membrane bound organelle",
    "Image": "",
    "answers": {
        "a": "inclusion",
        "b": "mitochondria",
        "c": "nuclear envelope",
        "d": "nuclear pore complexes",
        "e": "ribosomes"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Inclusions are membrane free, metabolically inactive objects such as fat droplets.",
        "b": "CORRECT: Mitochondria are enclosed by their outer membrane. They began as endosymbionts, but they have evolved into organelles that are interdependent with the host cell.",
        "c": "The nuclear envelope is the membrane that encloses the nucleus.  However, it’s only a component of the nucleus.  The nucleus is an organelle consisting of the envelope and nucleoplasm.",
        "d": "Nuclear pore complexes are molecular structures.  They are embedded in the nuclear membrane, but they are not enclosed by their own membrane, and they are not organelles.",
        "e": "Ribosomes are molecular structures.  They are either free in the cytoplasm or embedded in the rough endoplasmic reticulum.  However, they are not enclosed by their own membrane, and they are not organelles."
    }
},
{
    "question": "Which of the following is not a membrane bound organelle?",
    "Image": "",
    "answers": {
        "a": "Golgi Apparatus",
        "b": "lysosome",
        "c": "nucleolus",
        "d": "nucleus",
        "e": "rough endoplasmic reticulum"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The Golgi is an organelle that consists multiple stacked membranes known as cisternae, each enveloping a lumen.",
        "b": "Lysosomes are membrane bound vesicles.  Vesicles are a type of organelle.",
        "c": "CORRECT: The nucleolus is a region of the nucleus that is dense with ribosome synthesis.  It is sometimes called an organelle, but it is not enveloped by a membrane.",
        "d": "The nucleus is an organelle enclosed by the nuclear membrane.",
        "e": "The rough endoplasmic reticulum consists of membranes enveloping lumens, with embedded ribosomes."
    }
},
{
    "question": "An elongase is an enzyme that catalyzes fatty acid elongation.  It would be predicted that elongase is most likely located in what cellular compartment?",
    "Image": "",
    "answers": {
        "a": "cytosol",
        "b": "Golgi apparatus",
        "c": "nucleus",
        "d": "rough endoplasmic reticulum",
        "e": "smooth endoplasmic reticulum" 
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "As hydrophobic compounds, fatty acids do not dissolve into the hydrophilic cytosol.  Therefore, it is unlikely that an enzyme required for the fatty acid synthesis would be located there.",
        "b": "The Golgi is a processing and sorting center.  Few if any biosynthetic enzymes are active there.",
        "c": "The nucleus in the genetic center.  It contains factors involved with DNA replication and RNA transcription, not fatty acid synthesis.",
        "d": "The RER is where membrane proteins are synthesized. Thus, although elongase are synthesized there, they do not remain there.  They diffuse through the ER to the location where they act.",
        "e": "CORRECT: An elongase is required for fatty acid synthesis, which occurs in the SER."
    }
},
{
    "question": "Factors carried by secretary vesicles include",
    "Image": "",
    "answers": {
        "a": "channels",
        "b": "enzymes of glycolysis",
        "c": "histones",
        "d": "insulin",
        "e": "ribosomes"
    },
    "correctAns": [
        "a", "d"
    ],
    "explain": {
        "a": "CORRECT, One of Several: Channels span across the plasma membrane.  Secretory vesicles deliver factors to the plasma membrane.  Therefore, secretory vesicles carry channels.",
        "b": "Glycolysis occurs in the cytosol.  Secretory vesicles do not deliver factors to the cytosol.",
        "c": "Histones are located in the nucleoplasm.  Factors for secretion are carried in the lumens of secretory vesicles.",
        "d": "CORRECT, One of Several: Insulin is secreted out of pancreatic cells.  Secretory vesicles carry factors to be secreted in their lumens.",
        "e": "Ribosomes are either found in the cytosol or bound to the RER.  Secretory vesicles do not deliver factors to either location."
    }
},
{
    "question": "What is the path of acid phosphatase from synthesis to final destination?",
    "Image": "",
    "answers": {
        "a": "ribosome → cytosol → internal mitochondrial membrane → mitochondrial matrix",
        "b": "ribosome → cytosol → transfer vesicle → nuclear envelope → nucleoplasm",
        "c": "ribosome → RER lumen → transfer vesicle ↔ Golgi cisternae → lysosome",
        "d": "ribosome → RER lumen → transfer vesicle ↔ Golgi cisternae → secretory vesicle → plasma membrane → extracellular Space",
        "e": "ribosome → SER lumen → transfer vesicle ↔ Golgi cisternae → peroxisome",
        "f": "ribosome → SER lumen → RER lumen → transfer vesicle ↔ Golgi cisternae → peroxisome"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The final destination of acid phosphatase is the lumen of a lysosome, not a mitochondrion.  It is translated on the RER, not the cytosol.",
        "b": "The final destination of acid phosphatase is the lumen of a lysosome, not the nucleus.  Moreover, proteins are not transferred from the cytosol to a transfer vesicle.",
        "c": "CORRECT: The final destination of acid phosphatase is the lumen of a lysosome.  Therefore, it is transferred by vesicles through the Golgi, to emerge within a lysosome.",
        "d": "The final destination of acid phosphatase is the lumen of a lysosome.  It is not secreted by exocytosis.",
        "e": "The final destination of acid phosphatase is the lumen of a lysosome, not a peroxisome.  Moreover, proteins are not transferred from the SER to the Golgi.",
        "f": "The final destination of acid phosphatase is the lumen of a lysosome, not a peroxisome.  Moreover, proteins are not transferred from the SER to the RER."
    }
},
{
    "question": "If the inner mitochondria membrane were exposed to chemical that made it permeable to hydrogen ions, how would it affect ATP synthesis?",
    "Image": "",
    "answers": {
        "a": "ATP synthesizing complexes would be deprived of energy",
        "b": "cytochromes could not pump hydrogen ions into the intermediate mitochondrial space",
        "c": "electron current could not flow through the electron transport chain",
        "d": "Krebs cycle would be accelerated",
        "e": "NAD<sup>+</sup> reduction would be induced"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: H<sup>+</sup> pumped into the intermediate space would flow back into the mitochondrial matrix.  This would prevent an electrochemical gradient from forming across the inner mitochondrial membrane, thereby preventing the storage of energy across the membrane.  In turn, this will deprive ATP synthesizing complexes of energy and prevent them for producing ATP.  This is how uncouplers such as carbonylcyanide-3-chlorophenylhydrazone work.",
        "b": "Cytochromes function is not dependent on membrane permeability, therefore H<sup>+</sup> would still be pumped into the intermediate space.  The problem is that these H<sup>+</sup> ions would just diffuse back into the matrix.",
        "c": "Electron flow through the electron transport chain is independent of membrane permeability.",
        "d": "Krebs cycle is not linked H<sup>+</sup> concentration.",
        "e": "Reduction if NAD<sup>+</sup> by Krebs cycle precedes oxidative phosphorylation."
    }
},
];

