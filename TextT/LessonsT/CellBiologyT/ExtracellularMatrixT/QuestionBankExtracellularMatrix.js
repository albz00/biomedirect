var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "Where is the extracellular matrix located? ",
    "Image": "",
    "answers": {
        "a": "basal lamina",
        "b": "blood plasma",
        "c": "bone",
        "d": "connective tissue",
        "e": "everywhere outside of cells",
        "f": "fascia"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "The basal lamina is one type of extracellular matrix, but it is not the entire extracellular matrix.",
        "b": "The blood plasma is often considered a form of extracellular matrix, but it is not the entire extracellular matrix.",
        "c": "The extracellular component of bone is one type of extracellular matrix, but it is not the entire extracellular matrix.",
        "d": "Connective tissue is a major component of extracellular matrix, but it is not the entire extracellular matrix.  For instance, blood plasma isn’t connective tissue.",
        "e": "CORRECT: All extracellular components constitute the extracellular matrix",
        "f": "Fascia is a major type of extracellular matrix, but it is not the entire extracellular matrix."
    }
},
{
    "question": "What is the most abundant extracellular matrix protein?",
    "Image": "",
    "answers": {
        "a": "aggrecan",
        "b": "collagen",
        "c": "elastin",
        "d": "microtubules",
        "e": "proteoglycans"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Aggrecan is a one of the largest molecular structures in our bodies, but the total mass is actually a minor fraction of the entire extracellular matrix.",
        "b": "CORRECT: Collagen constitutes half of our total protein.",
        "c": "Elastin is extremely abundant in arterial system, but the total mass is actually a minor fraction of the entire extracellular matrix.",
        "d": "Microtubules are components of the cytoskeleton, not extracellular matrix.",
        "e": "Proteoglycans are found throughout the extracellular matrix, but the total mass is actually a minor fraction o=f the entire extracellular matrix."
    }
},
{
    "question": "What would be the consequence if there were glycines every four residues of the collagen sequence? ",
    "Image": "",
    "answers": {
        "a": "it would not adopt the left-handed helical conformation.",
        "b": "it would not assemble into fibrils",
        "c": "it would not assemble into triple helices.",
        "d": "it would not be crosslinked",
        "e": "it would not be hydroxylated",
        "f": "it would not be striated"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Every third residue of the primary sequence of the collagen polypeptide is glycine, not every four residues.  There are also three residues per turn of the left-handed helix.  The side group of glycine is hydrogen, the smallest of all amino acids.  These hydrogens all face the inside of the left-handed helix.  Thus, positioning the glycines every third residue brings them in register with the left-handed helix, thereby preventing steric hindrance.",
        "b": "Tropocollagens assemble into fibrils after exocytosis into the extracellular space.  This process is not dependent on positioning of glycines in the primary sequence.  Note, fibrils would not assemble because without glycines every third residue, the assembly process would not begin.  However, the positioning of glycines affects an earlier step than fibril formation.",
        "c": "Three collagen helices coil around each other to form larger triple helices.  This process is not dependent on positioning of glycines in the primary sequence.  Note, triple helices would not assemble because without glycines every third residue, the assembly process would not begin.  However, the positioning of glycines affects an earlier step than triple helix formation.",
        "d": "Triple helices are crosslinked to form fibrils.  This process is not dependent on positioning of glycines in the primary sequence.  Note, triple helices would not be crosslinked because without glycines every third residue, the assembly process would not begin.  However, the positioning of glycines affects an earlier step than crosslinking.",
        "e": "The prolines of collagen are hydroxylated.  However, this is independent of the positioning of glycines in the primary sequence of collagen.",
        "f": "Striation is a consequence of crosslinking triple helices into fibrils.  This process is not dependent on positioning of glycines in the primary sequence.  Note, striation would not occur because without glycines every third residue, the assembly process would not begin.  However, the positioning of glycines affects an earlier step than the appearance of striation."
    }
},
{
    "question": "Which of the following diseases results from poor hydroxylation of collagen prolines?",
    "Image": "",
    "answers": {
        "a": "α1-antitrypsin deficiency",
        "b": "Ehlers-Danlos syndrome",
        "c": "fibrosis",
        "d": "Marfan’s syndrome",
        "e": "osteogenesis imperfecta",
        "f": "scurvy"
    },
    "correctAns": [
        "f"
    ],
    "explain": {
        "a": "α1-antitrypsin deficiency inhibits elastase.  Loss of function mutations result in elevated elastase activity, which diminishes pulmonary elastin levels, resulting in emphysema.",
        "b": "Ehlers-Danlos syndrome results from mutations that lead to underproduction or incomplete collagen processing.  This results in loose skin and joints.",
        "c": "Fibrosis is excessive accumulation of scar tissue.  Collagen is a major component of scar tissue.  It can result from repeated injuries or inflammation.",
        "d": "Marfan’s syndrome results from loss of function mutation of fibrillin.  Fibrillin is the scaffold that elastin fibers form around.  Thus, without fibrillin, elastin doesn’t form.",
        "e": "The first four types of osteogenesis imperfecta result from deficient type I triple assembly.  The hallmark of OI is brittle bones.",
        "f": "CORRECT: Scurvy results from under hydroxylation of the prolines of collagen due to lack of vitamin C, which is a cofactor for prolyl hydroxylase and lysyl hydroxylase. Symptoms include fatigue, anemia, gum disease, poor wound healing.  Vitamin C (ascorbic acid), is obtained from cabbages, greens, rosehips, and to a lesser extent citrus fruits."
    }
},
{
    "question": "Why is procollagen secreted by exocytosis? ",
    "Image": "",
    "answers": {
        "a": "collagen fibers are too long",
        "b": "lysyl oxidase is in the extracellular matrix",
        "c": "procollagen is hydrophilic",
        "d": "to allow propeptide cleavage",
        "e": "to facilitate collagen processing"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Collagen fibers are orders of magnitude longer than the fibroblasts that synthesizes procollagen.",
        "b": "Lysyl oxidase is in the extracellular matrix, but that’s because collagen fibrils are assembled there.  If the fibrils could be assembled in the cytoplasm then lysyl oxidase would be there.",
        "c": "Procollagen is hydrophilic just like collagen fibers.  However, the cytoplasm and extracellular space are both hydrophilic, so that doesn’t explain why assembly has to occur in the extracellular space. ",
        "d": "The propeptide sequences are cleaved in the extracellular space, but that’s because collagen fibrils are assembled there.  If the fibrils could be assembled in the cytoplasm then the propeptides might be cleaved there.",
        "e": "Collagen processing occurs in the endoplasmic reticulum and Golgi apparatus, before exocytosis."
    }
},
{
    "question": "How do lysinonorleucine crosslinks differ from desmosine crosslinks?",
    "Image": "",
    "answers": {
        "a": "lysinonorleucine crosslink two polypeptides, desmosine crosslink four",
        "b": "lysinonorleucine  crosslink collagen, desmosines crosslink elastin",
        "c": "lysinonorleucine crosslinks are created by lysyl oxidase, desmosine crosslinks are created by lysyl hydroxylase",
        "d": "lysinonorleucine crosslinks create networks, desmosine crosslinks bundle fibers",
        "e": "lysinonorleucines crosslinks form in the extracellular space, desmosines crosslinks form in the cytoplasm"
    },
    "correctAns": [
        "a", "b"
    ],
    "explain": {
        "a": "CORRECT, One of Several: Lysinonorleucine crosslinks do form between two polypeptides, desmosines between four.",
        "b": "CORRECT, One of Several: Lysinonorleucine and aldo groups do crosslink collagens, desmosines crosslink elastin.",
        "c": "Lysyl oxidase catalyzes both lysinonorleucine and desmosine formation.  Lysyl hydroxylase adds OH groups to collagen lysines.",
        "d": "This is opposite to what happens. Lysinonorleucine crosslinks create bundle fibers, desmosine crosslinks networks.",
        "e": "Both lysinonorleucine and desmosine crosslinks form in the extracellular space."
    }
},
{
    "question": "Where is the most abundant reservoir of elastin, and why is it so concentrated there?",
    "Image": "",
    "answers": {
        "a": "alveoli, which expand during inhalation and constrict during exhalation",
        "b": "aortic arch, which expands to accommodate ventricular surges, and constricts to maintain blood pressure",
        "c": "elastic fibers which stretch when pulled and return to their resting conformation when the force is released",
        "d": "knee joints, which compresses when a leg steps down, relax when a leg is lifted",
        "e": "tendons which stretch when a limb is flexed, contract when the limb relaxes"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Elastin is abundant in alveoli to allow them to expand and constrict, but it is even greater in another reservoir.",
        "b": "CORRECT: Aortic arches must expand to accommodate the tremendous surge of blood pumped by the left ventricle, while resisting this expansion to maintain pressure.  Elastin concentration is so great throughout the arterial system that arteries are rubbery.",
        "c": "This is circular logic, i.e. elastin is concentrated in elastin.",
        "d": "Hyaluronic acid and proteoglycans serve this purpose in knee joints, not elastin.",
        "e": "Tendons need to resist stretching during flexion, so they are rich with collagen, not elastin."
    }
},
{
    "question": "What promotes the elastic property of elastin?",
    "Image": "",
    "answers": {
        "a": "the alternating hydrophobic and hydrophilic regions",
        "b": "the crisscrossed network structure of elastin",
        "c": "the fibrillin scaffold of elastin",
        "d": "the hyaluronan core of elastin",
        "e": "the multilayered assembly of elastin"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The hydrophobic domains are pulled to the interior of tropoelastin subunits to avoid contact with the hydrophilic cytosol.  When a force is applied the subunits stretch, thereby exposing the hydrophobic domains.  When the force is released the subunits return to there original conformation to shield these domains.  Note, the formal definition of elasticity is the ability to return to the original conformation.",
        "b": "The crisscrossed network of elastin fibers allows stretching, but does little to promote return to the original conformation.",
        "c": "Elastic fibers do assemble around fibrillin scaffolds, but this does little to promote return to the original conformation.",
        "d": "Proteoglycans have hyaluronan cores, not elastin.",
        "e": "Collagen is multilayered, with left-handed helices wound into right handed triple helices, crosslinked into fibrils, and assembled into fibers.  This acts like a cable resisting stretching, not allowing return to the original conformation."
    }
},
{
    "question": "What is an accurate description of a proteoglycan?",
    "Image": "",
    "answers": {
        "a": "collagen crosslinked by laminin",
        "b": "glycosaminoglycans anchored to a core protein",
        "c": "polymers of modified disaccharides",
        "d": "polypeptides bound together by aldo crosslinks",
        "e": "proteins anchored to a hyaluronan core"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This describes the basal lamina.",
        "b": "CORRECT: proteoglycans do consist of glycosaminoglycans bound to a core protein.",
        "c": "This described a glycosaminoglycan, which is a component of a proteoglycan, not the entire structure.",
        "d": "This describes one type of group that crosslinks procollagen helices to form collagen fibrils.",
        "e": "This describes aggrecan."
    }
},
{
    "question": "What is not a function of any proteoglycan? ",
    "Image": "",
    "answers": {
        "a": "crosslinks cells with the extracellular matrix",
        "b": "growth factor sequestration",
        "c": "intercellular interaction",
        "d": "provide turgor to the extracellular matrix",
        "e": "regulation"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Some proteoglycans do serve as crosslinks between cell membranes and components of the extracellular matrix.",
        "b": "Some proteoglycans attached to cell membranes do sequester growth factors or hormones, e.g. βglycan and TGFβ.",
        "c": "Many proteoglycans do function in intercellular interactions, e.g. ECM crosslinking and growth factor sequestration.",
        "d": "CORRECT: Proteoglycans are not large enough to resist compression enough to provide turgor.  Hyaluronan is a glycosaminoglycan that is large enough, but it is not a proteoglycan component.",
        "e": "Some proteoglycans are regulatory, e.g. heparin, a cofactor of the anticlotting factor antithrombin III."
    }
},
{
    "question": "Which of the following is largest? ",
    "Image": "",
    "answers": {
        "a": "aggrecan",
        "b": "glycosaminoglycan",
        "c": "hyaluronic acid",
        "d": "keratin sulfate",
        "e": "proteoglycan"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: aggrecans are huge molecular aggregates, consisting of multiple proteoglycans attached to a hyaluronan core.  They are abundant in knee joints, where they resist compression.",
        "b": "A glycosaminoglycan is a polysaccharide consisting of disaccharide repeats that are modified with sulfur, nitrogen and/or carboxy groups.",
        "c": "Hyaluronic acid, also known as hyaluronan, is glycosaminoglycan.  Unlike other glycosaminoglycans it exists free, not bound to a core protein to form a proteoglycan.  It is also much larger than other glycosaminoglycans.",
        "d": "Keratin sulfate is one type of glycosaminoglycan.",
        "e": "A proteoglycan consists of glycosaminoglycans bound to a core protein.  Most are not particularly large."
    }
},
];

