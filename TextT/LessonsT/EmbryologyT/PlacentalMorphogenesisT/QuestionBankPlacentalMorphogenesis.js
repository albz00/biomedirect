var shuffleMe = true;
var qBank = [
{
    "question": "Each series depicts a different scheme for how the embryonic and extraembryonic circulatory systems could originate.  Which scheme actually depicts what happens?",
    "Image": "QuestionImages/Placenta 1.jpg",
    "answers": {
        "a": "Fetal Vasculogenesis and angiogenesis / Maternal Vasculogenesis",
        "b": "Fetal Vasculogenesis and angiogenesis / Maternal Vacuole Fusion",
        "c": "Fetal Angiogenesis / Maternal Vasculogenesis",
        "d": "Fetal Angiogenesis / Maternal Vacuole Fusion"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This scheme shows the embryonic circulatory system developing by formation of clusters of angioblasts (vasculogenesis), followed by extension and branching of vessels (angiogenesis), which is correct.  However, it also shows the extraembryonic system developing by vasculogenesis and angiogenesis, which is not what happens.",
        "b": "CORRECT: This scheme shows the embryonic circulatory system developing by formation of clusters of angioblasts (vasculogenesis), followed by extension and branching of vessels (angiogenesis).  It also shows the extraembryonic system developing by formation and fusion of trophoblastic lacunae with glands and capillaries.  Both are correct.",
        "c": "This scheme shows the embryonic circulatory system developing by extension and branching of vessels (angiogenesis) from the heart.  It also shows the extraembryonic system developing by formation of clusters of angioblasts (vasculogenesis).  Neither is correct.",
        "d": "This scheme shows the embryonic circulatory system developing by extension and branching of vessels (angiogenesis) from the heart, which is not correct.  It does show the extraembryonic system developing by formation and fusion of trophoblastic lacunae with glands and capillaries, which is correct."
    }
},
{
    "question": "What can pass through placenta to enter the fetus’ body?",
    "Image": "",
    "answers": {
        "a": "antibodies",
        "b": "bacteria",
        "c": "hCG",
        "d": "maternal blood",
        "e": "oxygen and nutrients",
        "f": "waste products"
    },
    "correctAns": [
        "a", "e"
    ],
    "explain": {
        "a": "CORRECT: Maternal IgG antibodies do pass through the placenta to protect the fetus against infection.",
        "b": "The placenta protects the fetus from infection by screening out bacteria.",
        "c": "The placenta produces and secretes human chorionic gonadotropin into the maternal blood stream.  hCG doesn’t enter the fetus.  hCG serves to maintain the corpus luteum for pregnancy.",
        "d": "The placenta prevents maternal blood cells from reaching the fetus.",
        "e": "CORRECT: Supplying the fetus with oxygen and nutrients is a primary function of the placenta.",
        "f": "The placenta removes fetal waste products such as carbon dioxide and urea; it doesn’t allow them to return to the fetus, nor does it allow maternal wastes to reach the fetus."
    }
},
{
    "question": "How does the placenta control what reaches the fetus?",
    "Image": "",
    "answers": {
        "a": "selective diffusion between the maternal and fetal circulatory systems",
        "b": "endocytosis of beneficial factors, exocytosis of harmful factors",
        "c": "extension and branching of chorionic villi within the intervillous space between the extraembryonic mesoderm and outer trophoblastic shell",
        "d": "separating maternal blood in the intervillous space from fetal blood within the cores of chorionic villi",
        "e": "open-ended chorionic capillaries open into the intervillous space"
    },
    "correctAns": [
        "a", "d"
    ],
    "explain": {
        "a": "CORRECT: The thin walls of chorionic villi do allow diffusion between the maternal and fetal circulatory systems.  Additionally, transport proteins control diffusion, allowing beneficial, not harmful, factors to enter the fetus, and excreting waists from the fetus.",
        "b": "Although endocytosis and exocytosis may function with selective exchange of some factors, it is not the major mechanism.",
        "c": "Although this is an accurate description of how chorionic villi develop, it does not explain selective exchange between the maternal and fetal circulatory systems.",
        "d": "CORRECT: Separating maternal and fetal blood across the thin walls of chorionic villi, does make it possible to control diffusion.",
        "e": "Not only is this an inaccurate description of the microanatomy of chorionic villi, it would prevent selective diffusion by allowing free flow between the maternal and fetal circulatory systems."
    }
},
{
    "question": "What type of chorionic villi allow diffusion between the maternal and fetal circulatory systems?",
    "Image": "",
    "answers": {
        "a": "stem, primary",
        "b": "stem, secondary",
        "c": "stem, tertiary",
        "d": "terminal, primary",
        "e": "terminal, secondary",
        "f": "terminal, tertiary"
    },
    "correctAns": [
        "f"
    ],
    "explain": {
        "a": "The walls of a stem villi are too thick to allow diffusion.  Moreover, there's no mesodermal core, so there are no capillaries, and diffusion cannot occur between the circulatory systems.",
        "b": "The walls of a stem villi are too thick to allow diffusion.  Moreover, a secondary villus only has a mesodermal core within the cytotrophoblast column.  There are no capillaries within the mesodermal core, so diffusion cannot occur between the circulatory systems.",
        "c": "The walls of a stem villi are too thick to allow diffusion.",
        "d": "A primary villus only has a cytotrophoblastic column.  There's no mesodermal core, so there are no capillaries, and diffusion cannot occur between the circulatory systems.",
        "e": "A secondary villus only has a mesodermal core within the cytotrophoblast column.  There are no capillaries within the mesodermal core, so diffusion cannot occur between the circulatory systems.",
        "f": "CORRECT: The walls of a terminal villus are thin enough to allow diffusion.  Furthermore, tertiary villi have capillaries within their mesodermal cores, which receive maternal blood, and allow diffused factors to flow into the fetal circulatory system."
    }
},
{
    "question": "A pathologist looks at a transverse section of a chorionic villus and sees three layers, syncytiotrophoblast, mesodermal core and capillaries.  What type of villus is she looking at?",
    "Image": "",
    "answers": {
        "a": "malformed",
        "b": "primary",
        "c": "secondary",
        "d": "stem",
        "e": "tertiary"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: All chorionic villi should have a cytotrophoblastic core.  This is because villi originate as cytotrophoblastic columns, which extend upwards through the intervillous space.",
        "b": "A primary villous would have a cytotrophoblastic core within the syncytiotrophoblastic sheath, but no cytotrophoblastic core was observed.",
        "c": "A secondary villous would have mesodermal and cytotrophoblast cores, surrounded by a syncytiotrophoblastic sheath, but no cytotrophoblastic core was observed.",
        "d": "A stem villous extends completely through the intervillous space, from the fetal to maternal side.  To determine if this is the case the pathologist would have to observe the length of the villus, but that can’t be done with a transverse section.",
        "e": "A tertiary villous would have capillaries within the mesodermal and cytotrophoblastic cores, surrounded by a syncytiotrophoblastic sheath, but no cytotrophoblastic core was observed."
    }
},
{
    "question": "Chorionic villi originally form around the periphery of the entire chorion.  However, early in gestation they separate, leaving the fetus free in the amniotic cavity with the placenta attached to the uterine wall.  What is the best description of how this develops?",
    "Image": "",
    "answers": {
        "a": "As the embryo grows it extends into the uterine cavity while the placental material remains attached to the uterine wall.",
        "b": "Placental material detaches from the fetus and attaches to the uterine wall.",
        "c": "Placental material facing the uterine lumen regress, while material facing the uterine wall proliferate.",
        "d": "The connecting stalk expands and develops in the umbilical cord, tethering the fetus to the placenta."
    },
    "correctAns": [
        "a", "c"
    ],
    "explain": {
        "a": "CORRECT:  The blastocyst implants in the endometrium, but as the embryo grows it bulges outward, eventually separating from the uterine wall.  However, the chorionic villi of the placenta remain attached to the wall.",
        "b": "First, placental material does not detach from the fetus because it is never attached.  The embryo is within the amniotic cavity, which is within the chorionic cavity, which is surrounded by placental material.  Moreover, the placenta does not become attached to the uterine wall; it is always attached.",
        "c": "CORRECT:  It is believed that this does occur, although it is probably not the main factor causing the placenta to separate from the fetus.",
        "d": "This occurs while the fetus and placenta are separating, but it doesn’t explain how the separation ensues."
    }
},
];

