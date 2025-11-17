var shuffleMe = true; // false if you do not want to shuffle
var qBank = [
{
    "question": "The rate of permeability of water through the collecting duct epithelia increases in response to vasopressin.  Vasopressin does not affect the permeability of any other molecules.  As the concentration of vasopressin is increased the rate increases until a threshold is reached.  Increasing the concentration does not increase the rate any further.  Vasopressin does not affect energy utilization by the collecting duct.  What type of movement across the epithelia is this?",
    "Image": "",
    "answers": {
        "a": "active diffusion",
        "b": "active transport",
        "c": "facilitated diffusion",
        "d": "passive diffusion",
        "e": "passive transport"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Diffusion is by definition a passive process.",
        "b": "There is no increase in energy utilization, so this is not an active process.",
        "c": "CORRECT: The increase in rate is specific to water and saturable, so this is facilitated, i.e. through a transport protein.  There is no increase in energy, so this is not an active process.",
        "d": "The process is saturable, specific and fast, so this is not passive diffusion.",
        "e": "Transport indicates an active process, i.e. forced."
    }
},
{
    "question": "Shown is a stylized image of a channel.  There is a flaw with one of the regions that would prevent it functioning.  This flaw is in which region.",
    "Image": "QuestionImages/FlawedChannel.jpg",
    "answers": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "5"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This is the extracellular domain.  The positive and negative charges indicate that it is polar.  The extracellular domain has to be polar, so that it can interact with the polar heads of the bilayer, and the hydrophilic extracellular medium.",
        "b": "CORRECT: This is the transmembrane domain.  The positive and negative charges indicate that it’s polar.  A polar transmembrane domain would not be able to interact with the hydrophobic core of the plasma membrane.",
        "c": "This is a cAMP binding domain.  Channels can contain domains for regulatory factors such as cAMP.  This is one mechanism for opening or closing the channel.",
        "d": "This is the intracellular domain.  The positive and negative charges indicate that it is polar.  The intracellular domain has to be polar so that it can interact with the polar heads of the bilayer, and the hydrophilic cytosol.",
        "e": "This is the transmembrane passageway.  The positive charges indicate that it is hydrophobic.  Passageways are typically hydrophilic because most of the factors that pass through a channel are hydrophilic.  However, there are transport proteins for hydrophobic compounds, e.g. ABC class pumps."
    }
},
{
    "question": "One of the components of the coupled system of transport proteins that establishes the acidity of the gastric lumen, hydrolyzes an ATP to drive hydrogen ions into the lumen, while it imports potassium into the epithelial cytoplasm.   What class does this transport protein belong to?",
    "Image": "",
    "answers": {
        "a": "antiporter",
        "b": "ATPase pump",
        "c": "channel",
        "d": "symporter",
        "e": "transporter"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "This factor does allow two factors to pass in opposite directions, but it is not considered an antiporter because it is an ATPase.  The antiporter designation is reserved for transporters.",
        "b": "CORRECT: Pumps are transport proteins that hydrolyze ATP.",
        "c": "Channels allow continuous flow of factors, without the expenditure of energy.",
        "d": "Symporters allow two factors to pass in the same direction.",
        "e": "Transporters allow one factor, or a set of factors, to pass one at a time without the expenditure of energy."
    }
},
{
    "question": "Glucose transporter 1, allows glucose to pass from the extracellular mediaum into a cell’s cytoplasm.  If a mutation placed the high affinity binding site on the cytoplasmic side of the transport protein, and the low affinity site on the extracellular side, glucose transport would",
    "Image": "",
    "answers": {
        "a": "accelerate",
        "b": "decelerate",
        "c": "halt",
        "d": "occur in both directions",
        "e": "reverse"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The rate of transport is not dependent on orientation of the high and low affinity sites.",
        "b": "The rate of transport is not dependent on orientation of the high and low affinity sites.",
        "c": "CORRECT: The orientation of binding sites does determine the direction of transport.  However, so does the orientation of the concentration of glucose.  The concentration of glucose is less in the cytoplasm than the extracellular medium, so it will not be able to pass out of the cell.",
        "d": "Factors only pass through a uniporter in one direction, as determined by the orientation of the high and low affinity sites.",
        "e": "Factors pass from high to low affinity sites, so it might seem like reversing the orientation of the sites would reverse the direction of transport.  However, without the expenditure of energy, factors can only pass down their concentration and/or electrical gradients.  The concentration of glucose is greater in the extracellular space so it cannot diffuse out of the cell."
    }
},
{
    "question": "What provides the energy that drives secretion of chloride through CFTR.",
    "Image": "",
    "answers": {
        "a": "ATP hydrolysis by CFTR",
        "b": "CFTR phosphorylation by PKA",
        "c": "epithelial sodium channels",
        "d": "Na/K ATPase",
        "e": "Na/K/Cl cotransporter"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Although ATP is hydrolyzed by CFTR, this just opens the channel.  CFTR does not use the energy from this hydrolysis to pump chloride.",
        "b": "PKA does phosphorylate CFTR, but this just opens the channel.  It does not provide energy to pump chloride.",
        "c": "Channels are passive; they do not contribute energy to the coupled system.",
        "d": "CORRECT: Na/K ATPases do provide the energy that drives the couple transport system.",
        "e": "Cotransporters are passive; they do not contribute energy to the coupled system."
    }
},
{
    "question": "If the activity of H/K pumps in the gastric epithelia were reduced in half, how would this affect chloride secretion into the gastric lumen.",
    "Image": "",
    "answers": {
        "a": "half as much chloride would be secreted",
        "b": "twice as much hydrogen would be secreted as chloride",
        "c": "no affect",
        "d": "no chloride would be secreted",
        "e": "twice as much chloride would be secreted as hydrogen"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Secretion of hydrogen and chloride is driven by a coupled system of transport proteins.  The system begins with H/K pumps, while it ends with chloride channels.  Reducing the activity of the pumps should result in a proportional decrease in the entire system.  Therefore, if half as much hydrogen were secreted then an equivalent amount of chloride should be secreted.  Note, this is how proton pumps inhibitors are used to treat acid reflux.",
        "b": "Because hydrogen and chloride are coupled, hydrogen secretion cannot exceed chloride secretion",
        "c": "Because hydrogen and chloride are coupled, hydrogen secretion could not be affected without affecting chloride secretion.",
        "d": "Because hydrogen and chloride are coupled, as long as some chloride is secreted then hydrogen secretion would persist.",
        "e": "Because hydrogen and chloride are coupled, chloride secretion cannot exceed hydrogen secretion."
    }
},
];

