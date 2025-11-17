var shuffleMe = true;
var qBank = [
{
    "question": "Neural crest cells proliferate and eventually differentiate into multiple cell types.  Which adjective/s best defines this property?",
    "Image": "",
    "answers": {
        "a": "determined",
        "b": "multipotent",
        "c": "pluripotent",
        "d": "progenitor",
        "e": "totipotent"
    },
    "correctAns": [
        "b", "c"
    ],
    "explain": {
        "a": "Determination is the phase of commitment when a cell’s fate becomes irreversible.",
        "b": "CORRECT: Multipotency is the ability to differentiate into multiple cell types.  Multipotent cells tend to be able to differentiate into fewer cell types than pluripotent, but there are no clear criteria for distinguishing between the two.",
        "c": "CORRECT: Pluripotency is the ability to differentiate into multiple cell types.  Pluripotent cells tend to be able to differentiate into more cell types than multipotent, but there are no clear criteria for distinguishing between the two.",
        "d": "Progenitor cells must differentiate when they divide.  Therefore, they cannot proliferate.  Moreover, when they divide they only differentiate into one cell type.",
        "e": "Totipotency is the ability to divide into any cell type.  The totipotent cells are the zygote and early blastomeres.  Neural crest cells are determined to divide differentiate a large set of cells, but not any cell.  For instance, a neural crest cell cannot differentiate into a trophoblastic cell."
    }
},
{
    "question": "Which of the following cell types are most differentiated?",
    "Image": "",
    "answers": {
        "a": "adipocytes",
        "b": "hemopoietic cells",
        "c": "mesenchymal cells",
        "d": "neurons",
        "e": "osteoblasts"
    },
    "correctAns": [
        "d"
    ],
    "explain": {
        "a": "Adipocytes don't produce other cell type, and their lipid droplets are a specialized feature.  These are both differentiated traits.  However, adipocytes can divide and their polyhedral shape is a generalized feature.",
        "b": "Hemopoietic cells only produce blood cells, which is a differentiated trait.  However, they are mitotic and they differentiate into multiple blood cell types, which are both undifferentiated traits.",
        "c": "Mesenchymal cells are generalized, mitotic and pluripotent, which are all properties of undifferentiated cells.",
        "d": "CORRECT: Neurons do not produce other cells types.  They are amitotic and highly specialized, with axons and dendrites.  These are all properties of differentiation.",
        "e": "Osteoblasts seldom if ever divide and they create new bone by secreting collagen, enzymes, hormones and growth factors.  These are all differentiated features.  However, their cuboidal or columnar shape is generalized, and they produce osteocytes, which are both undifferentiated traits."
    }
},
{
    "question": "What is an example of autonomous specification?",
    "Image": "",
    "answers": {
        "a": "control of the left-right symmetry by Hensen’s node",
        "b": "expression of myoD and myogenin by myoblasts",
        "c": "proliferation of leukocytes in response to bacterial infection",
        "d": "secretion of Shh by notochordal cells"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Hensen’s node controls left-right symmetry by secreting growth factors that control differentiation of other cells.  This is intercellular induction, not autonomous specification.",
        "b": "CORRECT: myoD and myogenin control transcription of other genes.  Because these genes are in the same nucleus as the myoD and myogenin, this is autonomous specification.",
        "c": "Bacterial infection induces a chain of immunologic events, which leads to the release of cytokines that induce differentiation of hematopoietic cells into leukocytes.  Because these cytokines come from outside the hematopoietic cells, this is intercellular induction, not autonomous specification.",
        "d": "Shh, secreted by notochordal cells, induces Pax-3 and Myf-6 in the cells of nearby somites.  This is intercellular induction, not autonomous specification."
    }
},
{
    "question": "When the generalized cells of a hypothetical line divide, they produce daughter cells like themselves.  If retinoic acid is added to the culture media, their daughters are either like themselves, or they differentiate into neurons.  If these cells are then transferred to media without retinoic acid, neuronal differentiation continues.  What stage of differentiation are the cells in after exposure to retinoic acid?",
    "Image": "",
    "answers": {
        "a": "anaplasia",
        "b": "commitment",
        "c": "determination",
        "d": "generalization",
        "e": "specification"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "These cells are not losing specialized features, so this is not anaplasia.",
        "b": "Commitment is the entire process of restricting a cells fate.",
        "c": "CORRECT: Determination is the last phase of commitment when the cells’ fate becomes irreversible.  When these cells are removed from the retinoic acid they continue to differentiate into neurons.  This indicates that their fate has become irreversible, so these cells are determined.",
        "d": "Generalization is the property of having common, non-specialized traits.  Neurons have amitotic cells with axons and dendrites, so they are highly specialized.",
        "e": "Specification is the first phase of commitment when the fate is still reversible.  Neuronal differentiation could not be reversed, so these cells are beyond specification."
    }
},

{
    "question": "A consequence of acid reflux is differentiation of esophageal epithelium into intestinal tissue.  This is an example of what?",
    "Image": "",
    "answers": {
        "a": "anaplasia",
        "b": "dedifferentiation",
        "c": "metaplasia",
        "d": "neoplasia"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Anaplasia is the loss of specialized features.  The features of esophageal cells are transforming into those of intestinal cells, but there is not a decrease in specialization, so this is not anaplasia.",
        "b": "Dedifferentiation is the transformation into less specialized cells.  Esophageal cells are no more specialized than intestinal cells.",
        "c": "CORRECT: Metaplasia is the transformation of one specialized cell into another specialized cell, which is what’s happening in this case.",
        "d": "Neoplasia describes cells that undergo abnormal, new growth.  These intestinal cells aren’t proliferating; the esophageal cells are just differentiating into intestinal cells."
    }
},
];

