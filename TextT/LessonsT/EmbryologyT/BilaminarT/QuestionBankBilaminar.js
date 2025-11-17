var shuffleMe = true;
var qBank = [
{
    "question": "During implantation, what part of the blastocyst attaches to the endometrium?",
    "Image": "",
    "answers": {
        "a": "the blastocoel adjacent to the trophoblast",
        "b": "the cytotrophoblast adjacent to the syncytiotrophoblast",
        "c": "the endometrial mucosa cells adjacent to the inner cell mass",
        "d": "the hatched zona pellucida",
        "e": "the trophoblast adjacent to the inner cell mass"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "The blastocoel is a space within the blastocyst.  It is covered by trophoblast so the blastocoel cannot contact the endometrium and therefore cannot attach to it.  Moreover, the blastocoel isn’t a structure, it’s a fluid filled space.  How could fluid attach to the endometrium?",
        "b": "The cytotrophoblast and syncytiotrophoblast form after implantation.  Moreover, the entire cytotrophoblast is adjacent to the syncytiotrophoblast.",
        "c": "Endometrial mucosa cells are part of the endometrium, not the blastocyst, so this implies that the endometrium would somehow attach to itself.  Moreover, no mucosa cells are adjacent to the inner cell mass, or any other part of the blastocyst, prior to attachment.",
        "d": "After hatching, the zona pellucida is released into the uterine cavity and discarded.  It never attaches to the endometrium.",
        "e": "CORRECT: The trophoblast is the outer part of the blastocyst, so it is what contacts and attaches to the endometrium.  However, not every part of the trophoblast can attach.  It is the trophoblast cells adjacent to the inner cell mass that do so."
    }
},
{
    "question": "How does the syncytiotrophoblast form?",
    "Image": "",
    "answers": {
        "a": "after the trophoblast laminates into two cell layers, the cell membranes of the outer layer fuse to form a syncytium",
        "b": "after trophoblast cell division inner daughter cells become the cytotrophoblast, outer cells become the syncytiotrophoblast",
        "c": "cytotrophoblast cells expel nuclei to form a syncytium",
        "d": "the trophoblast cells adjacent to the inner cell mass fuse to form a syncytium, which expands to surround the cytotrophoblast"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The trophoblast does not divide into two cell layers, and the membranes of an outer layer do not fuse.",
        "b": "It is true that the inner daughters become cytotrophoblast.   The problem with this response is that the outer daughters do not form cells.",
        "c": "CORRECT: After implantation, when a trophoblast cell divides, one nucleus remains in the cell while the other is expelled.  Thus, the increasing number of expelled nuclei form a syncytium around the trophoblast.  A syncytium is a continuous cytoplasm with multiple nuclei.  This syncytium is known as the syncytiotrophoblast.  The trophoblast that remains cellularized becomes known as the cytotrophoblast.",
        "d": "Trophoblast cells adjacent to the inner cell mass do not fuse, nor does the progeny of these cells expand around the periphery of the blastocyst."
    }
},
{
    "question": "What is the hypoblast derived from?",
    "Image": "",
    "answers": {
        "a": "amnion",
        "b": "epiblast",
        "c": "inner cell mass",
        "d": "cytotrophoblast",
        "e": "yolk sac"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The amnion is an outgrowth of the epiblast that expands around the cytotrophoblast above the epiblast. It has no direct connection to the hypoblast.",
        "b": "The epiblast and hypoblast are derived from the same structure, and they are adjacent to each other, but the hypoblast does not come from the epiblast.",
        "c": "CORRECT: After implantation the inner cell mass laminates into two layers, the hypoblast and epiblast.",
        "d": "The cytotrophoblast is a cell layer around the periphery of the entire implanted blastocyst.  Not only does the hypoblast not come from the cytotrophoblast, it is internal cell layer that has no direct contact with the cytotrophoblast.",
        "e": "The yolk sac is derived from the hypoblast, not the other way around."
    }
},
{
    "question": "What cell layer could not be produced if the epiblast failed to form?",
    "Image": "",
    "answers": {
        "a": "amnion",
        "b": "extraembryonic endoderm",
        "c": "extraembryonic mesoderm",
        "d": "hypoblast",
        "e": "trophoblast"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The amnion is an outgrowth of the epiblast, so if the epiblast failed to form it could not produce the amnion.",
        "b": "The extraembryonic endoderm is derived from the hypoblast, not the epiblast.  So, there is no grounds for predicting that without the epiblast the extraembryonic endoderm wouldn’t form.",
        "c": "The extraembryonic mesoderm is derived from the extraembryonic endoderm, therefore there’s no grounds for predicting that without the epiblast it wouldn’t form.",
        "d": "The hypoblast and epiblast arise from the same primordia, the inner cell mass, but they are distinct layers.  The hypoblast is not derived from the epiblast and there’s no grounds for predicting that without the epiblast it wouldn’t form.",
        "e": "The trophoblast forms long before the epiblast, so epiblast failure could not affect it."
    }
},
{
    "question": "What cell layer could not be produced if the hypoblast failed to form?",
    "Image": "",
    "answers": {
        "a": "amniotic cavity",
        "b": "chorion",
        "c": "extraembryonic mesoderm",
        "d": "syncytiotrophoblast",
        "e": "trophoblastic lacunae"
    },
    "correctAns": [
        "b", "c"
    ],
    "explain": {
        "a": "The amniotic cavity is not a cell layer, it is a fluid filled space bound by the amnion and epiblast.  The epiblast and hypoblast are derived from the same primordium, the inner cell mass, but they are separate layers.  Therefore, hypoblast failure would not affect amniotic cavity formation.",
        "b": "CORRECT: The chorion consists of syncytiotrophoblast, cytotrophoblast and somatic extraembryonic mesoderm.  The hypoblast is a precursor of the extraembryonic mesoderm, so without hypoblast the somatic extraembryonic mesoderm could not form.",
        "c": "CORRECT: The extraembryonic mesoderm is derived extraembryonic endoderm, which is derived from the hypoblast.  Therefore, if the hypoblast failed, the extraembryonic endoderm couldn’t form.",
        "d": "The syncytiotrophoblast has no connection with the hypoblast.  It surrounds the periphery of the entire embryo, while the hypoblast is an internal layer.  Moreover, the syncytiotrophoblast forms before the hypoblast.  Therefore, hypoblast failure could not affect syncytiotrophoblast formation.",
        "e": "Trophoblastic lacunae form within the syncytiotrophoblast.  The syncytiotrophoblast has no connection to the hypoblast and the syncytiotrophoblast forms before the hypoblast.  Therefore, hypoblast failure could not affect syncytiotrophoblast formation."
    }
},
{
    "question": "What surrounds the chorionic cavity?",
    "Image": "",
    "answers": {
        "a": "amnion",
        "b": "extraembryonic endoderm",
        "c": "somatic extraembryonic mesoderm",
        "d": "splanchnic extraembryonic mesoderm",
        "e": "syncytiotrophoblast"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The amnion is an outgrowth of the epiblast that expands around the cytotrophoblast above the epiblast.  It has no direct connection to the hypoblast.",
        "b": "The extraembryonic endoderm constitutes the yolk sac, which is within the chorionic cavity.  Therefore, the cavity surrounds the extraembryonic endoderm, not the other way around.  Moreover, the extraembryonic endoderm does not contact the chorionic cavity because it is covered by splanchnic extraembryonic mesoderm.",
        "c": "CORRECT: Somatic extraembryonic mesoderm does surround the periphery of the chorionic cavity.",
        "d": "Splanchnic extraembryonic mesoderm surrounds the yolk sac which is within the chorionic cavity.  Therefore, the cavity surrounds the splanchnic extraembryonic mesoderm, not the other way around.",
        "e": "Syncytiotrophoblast is the outer layer of the chorion, which surrounds the chorionic cavity.  Therefore, it is a correct answer, but it is not the best answer because it does not contact the chorionic cavity.  It is separated from the cavity by the cytotrophoblast and somatic extraembryonic mesoderm."
    }
},
];

