var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "The molecule shown is dissolved into a cell culture medium.  Assuming the molecule is absorbed by the cells’ plasma membranes, how can it be expected to be positioned?",
    "Image": "QuestionImages/Phosphatidylserine.jpg",
    "answers": {
        "a": "region A will be at the outer surface, region B will be in the core of the inner leaflet",
        "b": "region A will be at the outer surface, region B will be in the core of the outer leaflet",
        "c": "region A will face the cytoplasm, region B will be in the core of the inner leaflet",
        "d": "region A will face the cytoplasm, region B will be in the core of the outer leaflet",
        "e": "region B will be at the outer surface, region A will be in the core of the outer leaflet",
        "f": "region B will face the cytoplasm, region A will be in the core of the inner leaflet"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This would require the molecule to split in two, with region A on the outer surface and B on the opposite side of the bilayer.",
        "b": "CORRECT: Because the molecule is exposed to the outside of the cell, i.e. the medium, it will be embedded in the outer leaflet.  Region A is hydrophilic; therefore, it will interact with the polar heads of the outer surface.  Region B is hydrophobic; therefore, it will insert into the core of the outer leaflet.",
        "c": "For the molecule to reach the inner leaflet it would have to pass through the outer leaflet, however lipids cannot flip flop through a bilayer.",
        "d": "This would have the hydrophobic region B of the molecule interacting with the hydrophilic heads at the surface of the bilayer, and the hydrophilic region A of the molecule interacting with the hydrophobic core.",
        "e": "This would require the molecule to split in two, with region B on the cytoplasm surface and A on the opposite side of the bilayer.",
        "f": "This would position the hydrophobic region towards the hydrophilic cytoplasm, and the hydrophilic region within the hydrophobic core."
    }
},
{
    "question": "Where do van Der Waal forces act in a lipid bilayer?",
    "Image": "",
    "answers": {
        "a": "the core",
        "b": "the cytoplasmic face",
        "c": "the inner leaflet",
        "d": "the outer leaflet",
        "e": "the outer surface"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: van Der Waals forces allow hydrophobic compounds to bind.  The core of a bilayer is hydrophobic.",
        "b": "The cytoplasmic face is coated with hydrophilic heads, which interact by polar bounds, not van Der Waals forces.",
        "c": "The inner leaflet is composed of hydrophilic heads and a hydrophobic core.  The core is bound by van Der Waals forces, but not the heads.",
        "d": "The outer leaflet is composed of hydrophilic heads and a hydrophobic core.  The core is bound by van Der Waals forces, but not the heads.",
        "e": "The outer surface is coated with hydrophilic heads, which interact by polar bounds, not van Der Waals forces."
    }
},
{
    "question": "There is a lumen within a",
    "Image": "",
    "answers": {
        "a": "biomembrane leaflet",
        "b": "lipid bilayer",
        "c": "micelle",
        "d": "monolayer",
        "e": "vesicle"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Lipids bind side by side with no spaces between them.",
        "b": "Each leaflet of a bilayer binds against the other with no spaces between them.",
        "c": "Micelles are spherical assemblies of lipids, with no spaces within them.",
        "d": "Isolated monolayers do not occur under natural conditions.  Two monolayers bound together are the leaflets of a bilayer.",
        "e": "CORRECT: Vesicles are spherical assemblies of bilayers, with an open space within them."
    }
},
{
    "question": "A micelle composed of radioactive lipids is incorporated into the plasma membrane of a cell.  After the cell is incubated for 24 hours, where will the radioactivity be localized?",
    "Image": "",
    "answers": {
        "a": "in a spot on the inner face of the cell",
        "b": "in a spot on the outer surface of the cell",
        "c": "in the cytoplasm",
        "d": "throughout the inner leaflet",
        "e": "throughout the outer leaflet"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Due to the fluid mosaic model, the radioactive lipids would diffuse throughout the membrane; they wouldn’t remain in an isolated spot.  Due to the lack of flip flopping the radioactive lipids could not be translocated from the surface of a cell to the inner leaflet.",
        "b": "Due to the fluid mosaic model, the radioactive lipids would diffuse throughout the membrane; they wouldn’t remain in an isolated spot",
        "c": "Unless the radioactive lipids are incorporated by an active process such as endocytosis, they could not be translocated from the surface of the cell to the internal cytoplasm.",
        "d": "Due to the lack of flip flopping the radioactive lipids could not be translocated from the surface of a cell to the inner leaflet.",
        "e": "CORRECT: Due to the fluid mosaic model, the radioactive lipids would diffuse throughout the outer leaflet."
    }
},
{
    "question": "Which of the following compounds pass from the outside a cell, through the biomembrane, into the cytosol, without the assistance of a transport protein?",
    "Image": "",
    "answers": {
        "a": "cholesterol",
        "b": "glycogen",
        "c": "insulin",
        "d": "oxygen",
        "e": "sodium chloride"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Cholesterol is a hydrophobic compound.  It will readily diffuse into the hydrophobic core of a biomembrane.  However, it will not diffuse into the hydrophilic cytosol.",
        "b": "Glycogen is too large to pass through a biomembrane.",
        "c": "Insulin is a polypeptide that is too large to pass through a biomembrane.  It also contains multiple primary amines, which are ionically charged.",
        "d": "CORRECT: O<sub>2</sub> is a small polar charge, which readily diffuses through a biomembrane.",
        "e": "Sodium chloride is a salt that dissociates into two ions, Na<sup>+2</sup> and Cl<sup>-</sup>.  Ionic charges do not diffuse through biomembranes."
    }
},
];

