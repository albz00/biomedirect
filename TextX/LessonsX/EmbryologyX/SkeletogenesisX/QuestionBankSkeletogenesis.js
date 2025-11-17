var shuffleMe = true;
var qBank = [
{
    "question": "Which cell type is a loosely organized population of undifferentiated cells?",
    "Image": "",
    "answers": {
        "a": "Chondroblasts",
        "b": "Chondrocytes",
        "c": "Mesenchyme",
        "d": "Neural Crest Cells",
        "e": "Osteoblasts",
        "f": "Osteoclasts",
        "g": "Osteocytes"
    },
    "correctAns": [
        "c", "d"
    ],
    "explain": {
        "a": "Chondroblasts produce the extracellular matrix of cartilage.  This is a specialized function so they are more differentiated than other cells.  They are also organized in the perichondrium on the surface of developing cartilage.",
        "b": "Chondrocytes are terminally differentiated cells, specialized to maintain cartilage by producing collagen and proteoglycan for cartilage repair, as well as proteolytic enzymes for remodeling.  They are organized in the core of the cartilage.",
        "c": "CORRECT: This is the definition of mesenchyme, a population of loosely organized, undifferentiated cells.",
        "d": "CORRECT: Neural crest cells are ectodermal, mesenchymal cells.  The other type of embryonic mesenchyme is the early mesoderm.",
        "e": "Osteoblasts produce the extracellular matrix of bone.  This is a specialized function so they are more differentiated than other cells.  They are mostly organized in the periosteum, which lines the outer surface of a bone, and the endosteum, which lines the inner medullary cavity.",
        "f": "Osteoclasts are terminally differentiated cells, specialized to remodel bone.  They are organized in the surface of bone that is undergoing remodeling.",
        "g": "Osteocytes are terminally differentiated cells, specialized to maintain bone.  They are organized in haversian systems of the bone."
    }
},
{
    "question": "Which cell type differentiates into chondrocytes?",
    "Image": "",
    "answers": {
        "a": "Chondroblasts",
        "b": "Mesenchyme",
        "c": "Neural Crest Cells",
        "d": "Osteoblasts",
        "e": "Osteoclasts",
        "f": "Osteocytes"
    },
    "correctAns": [
        "a", "c"
    ],
    "explain": {
        "a": "CORRECT: Chondroblasts are the precursors of chondrocytes.",
        "b": "Mesenchymal mesoderm is the precursor of chondroblasts.",
        "c": "CORRECT: Neural crest cells can differentiate into numerous cell types, including neurocranial chondrocytes.",
        "d": "Osteoblasts are derived from mesenchymal mesoderm.",
        "e": "Osteoclasts are derived from mesenchymal mesoderm.",
        "f": "Osteocytes are derived from osteoblasts"
    }
},
{
    "question": "Which are cartilaginous cells?",
    "Image": "",
    "answers": {
        "a": "Chondroblasts",
        "b": "Chondrocytes",
        "c": "Mesenchyme",
        "d": "Neural Crest Cells",
        "e": "Osteoblasts",
        "f": "Osteoclasts",
        "g": "Osteocytes"
    },
    "correctAns": [
        "a", "b"
    ],
    "explain": {
        "a": "CORRECT: Chondroblasts produce chondrocytes and the extracellular matrix of cartilage.",
        "b": "CORRECT: Chondrocytes maintain cartilage.",
        "c": "Mesenchyme is any population of loosely organized, undifferentiated cells.  Mesenchymal cells can differentiate into two cartilaginous cell types, but they can also differentiate into numerous other cell types.  Some mesenchymal cells are found in cartilage, but mesenchyme is not a major constituent of cartilage, nor is it specific to cartilage.",
        "d": "Although neural crest cells can differentiate into chondrocytes in the neurocranium, neural crest cells are not a component of mature cartilage, and most cartilage is not derived from neural crest cells.",
        "e": "Cartilaginous models do transform into bone due to invasion of osteoblasts, but when this happens the model is no longer cartilage.",
        "f": "Osteoclasts are remodeling cells for bone.  They are not found in cartilage",
        "g": "Osteoblasts differentiate into osteocytes after a cartilaginous model is ossified, but when this happens the model is no longer cartilage"
    }
},{
    "question": "Which cell type secretes collagen and CaPO<sup>4</sup>?",
    "Image": "",
    "answers": {
        "a": "Chondroblasts",
        "b": "Chondrocytes",
        "c": "Mesenchyme",
        "d": "Neural Crest Cells",
        "e": "Osteoblasts",
        "f": "Osteoclasts",
        "g": "Osteocytes"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "Chondroblasts secrete collagen but not CaPO<sup>4</sup>.",
        "b": "Chondrocytes secrete collagen but not CaPO<sup>4</sup>.",
        "c": "Mesodermal mesenchyme cells do differentiate into cells that secrete collagen and CaPO<sup>4</sup> , but they do not secrete these substances while they are still mesenchyme.",
        "d": "Neural crest cells can produce neurocranial bone, but they do not secrete collagen or CaPO<sup>4</sup>.",
        "e": "CORRECT: Osteoblasts do secrete collagen and CaPO<sup>4</sup> to produce the extracellular matrix of bone.",
        "f": "Osteoclasts secrete substances that resorb bone, but they do not secrete substance for building bone such as collagen or CaPO<sup>4</sup>.",
        "g": "Osteocytes maintain bone, but they do not secrete substance for building bone such as collagen and CaPO<sup>4</sup>."
    }
},{
    "question": "What type of bone formation involves chondrification centers forming within mesenchymal models, and ossification centers forming within cartilaginous models?",
    "Image": "",
    "answers": {
        "a": "axial ossification",
        "b": "endochondral ossification",
        "c": "intramembranous ossification",
        "d": "clavicle morphogenesis",
        "e": "synovial ossification"
    },
    "correctAns": [
        "b"
    ],
    "explain": {
        "a": "Different components of the axial skeleton form by endochondral and intramembranous ossification.",
        "b": "CORRECT: Endochondral ossification begins with a mesenchymal model converted into a cartilaginous model by chondrification, which is then converted into bone by ossification.",
        "c": "This is the second type of bone formation.  Mesenchymal sheets ossify directly.",
        "d": "The clavicle forms by intramembranous ossification.",
        "e": "Synovial joints are connections between two bones, separated by a fluid filled space known as the synovial cavity.  Although the adjacent bones ossify, it is not appropriate to refer to development of these joints as synovial ossification because the joint itself remains cartilaginous."
    }
},{
    "question": "Which bone is derived from paraxial and lateral mesoderm?",
    "Image": "",
    "answers": {
        "a": "clavicle",
        "b": "larynx",
        "c": "occiput",
        "d": "temporal",
        "e": "zygomatic arch"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "The clavicle is derived from neural crest cells.  It isn’t derived from either paraxial or lateral mesoderm, much less both.",
        "b": "The components of the larynx are derived from neural crest cells, not paraxial or lateral mesoderm.  Moreover, they are composed of cartilage that don’t ossify, so they aren’t bone.",
        "c": "CORRECT: The interparietal, squamous and condyle parts of the occiput are all derived from paraxial mesoderm, while the basilar part is derived from lateral mesoderm.",
        "d": "The temporal bone is derived from two tissue types, but neither is paraxial mesoderm.  The petrous part is derived from lateral mesoderm, but the squamous part is from neural crest cells.",
        "e": "The zygomatic arch consists of two parts, the zygomatic bone and zygomatic process of the temporal bone, however both of these are derived from neural crest cells."
    }
},{
    "question": "Where do the mesenchymal models of a vertebrae come from?",
    "Image": "",
    "answers": {
        "a": "somites, medial caudal regions",
        "b": "neural crest cells",
        "c": "notochord",
        "d": "paraxial mesoderm",
        "e": "sclerotome"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: Cells of the medial caudal regions of somites dissociate and cluster around the notochord and neural tube to form sclerotomes, which are the mesenchymal models of vertebrae.",
        "b": "Vertebrae are not derived from neural crest cells.",
        "c": "The notochord is an organizer controlling vertebra morphogenesis, but it not a primordium for vertebrae.  It is the primordium for the nuclei pulposi of the intervertebral discs, but these are between the vertebrae; they are not vertebrae.",
        "d": "Paraxial mesoderm is the primordium for a somite, but it doesn’t become a mesenchymal model for a vertebra until it reassembles into a sclerotome.",
        "e": "Sclerotomes are the mesenchymal models of vertebrae, but that is not what the question asked for.  The question was where do these models come from."
    }
},{
    "question": "If <sup>32</sup>P were microinjected into the 12<sup>th</sup> somite, where in the spinal column would the radioactivity be located?",
    "Image": "",
    "answers": {
        "a": "the 12<sup>th</sup> vertebra",
        "b": "the caudal half of the 11<sup>th</sup> vertebra, and the cranial half of the 12<sup>th</sup> vertebra",
        "c": "the caudal half of the 12<sup>th</sup> vertebra, and the cranial half of the 13<sup>th</sup> vertebra",
        "d": "the cranial half of the 11<sup>th</sup> vertebra, and the caudal half of the 12<sup>th</sup> vertebra",
        "e": "the cranial half of the 12<sup>th</sup> vertebra, and the caudal half of the 13<sup>th</sup> vertebra",
        "f": "throughout the central nervous system, brain and spinal cord",
        "g": "throughout the vertebrae of the spinal column"
    },
    "correctAns": [
        "c"
    ],
    "explain": {
        "a": "Due to resegmentation the radioactivity would not remain within one vertebra.",
        "b": "This is number one vertebra too high in the spinal column.  It would be true for sclerotome 11, but not 12.",
        "c": "CORRECT: After resegmentation the cranial half of a sclerotome becomes the caudal half of a vertebra numbered the same as that sclerotome, while the caudal half of the sclerotome becomes the cranial half of the next vertebra, numbered one higher.",
        "d": "This would have the sclerotome producing the top of one vertebra and the bottom of the next, without any explanation for the intervening regions, i.e. caudal 11 and cranial 12.",
        "e": "This would have the sclerotome producing the top of one vertebra and the bottom of the next, without any explanation for the intervening regions, i.e. caudal 12 and cranial 13.",
        "f": "This implies transfer of material from the sclerotomes to neural tube.  There is no evidence of that happening.  Moreover, even if it did some of the radioactivity should remain in the vertebrae.",
        "g": "This implies that material is transferred between the vertebrae.  There is no evidence of diffusion from one bone to another."
    }
},{
    "question": "What vertebral structure is homologous to ribs?",
    "Image": "",
    "answers": {
        "a": "the articulate facet of a lumbar vertebra",
        "b": "the costal process of the sacrum",
        "c": "the transverse process of a cervical vertebra",
        "d": "the transverse process of a thoracic vertebra",
        "e": "the ventral half of the transverse process of a lumbar vertebra"
    },
    "correctAns": [
        "e"
    ],
    "explain": {
        "a": "An articulate facet of a lumbar vertebra develops from the spinous process of its mesenchymal model.  Ribs are not derived from the spinous process.",
        "b": "There is no costal process of the sacrum.  Five caudal mesenchymal models fuse to form the sacrum, and their costal processes develop into lateral crests.",
        "c": "Half of the transverse process of a cervical vertebra is homologous to ribs, but not the other half.",
        "d": "A rib attaches to the transverse process of a thoracic vertebra.  However, ribs are not derived from the transverse process of the mesenchymal model.",
        "e": "CORRECT: The costal and transverse processes of a lumbar mesenchymal model fuse to form the transverse process of the vertebra.  The costal process of the model forms the ventral half of a vertebra’s transverse process.  Ribs are derived from the costal processes of thoracic mesenchymal models.  Therefore, the ventral half of the transverse process of a lumbar vertebra is homologous to a rib."
    }
},{
    "question": "Where is an epiphysial plate of a long bone located?",
    "Image": "",
    "answers": {
        "a": "between one end and the shaft of the bone ",
        "b": "the region that contains hematopoietic cells",
        "c": "where the primary chondrification center appears",
        "d": "where the secondary ossification center forms"
    },
    "correctAns": [
        "a"
    ],
    "explain": {
        "a": "CORRECT: The epiphysial plate forms between an epiphysis at one end of a bone, and the diaphysis in the middle of the bone.",
        "b": "Hematopoietic cells form within the diaphysis.  The epiphysial plate is adjacent to the diaphysis, not within it.",
        "c": "The primary chondrification center forms within the diaphysis.  The epiphysial plate is adjacent to the diaphysis, not within it.",
        "d": "The secondary ossification centers form within the epiphyses.  The epiphysial plate is adjacent to its epiphysis, not within it."
    }
},{
    "question": "A hypothetical mutation prevents interzones from forming in the appendicular skeleton.  Which of the following would fail to develop as a result?",
    "Image": "",
    "answers": {
        "a": "arms and legs",
        "b": "articular cartilages",
        "c": "bone marrow",
        "d": "cranial joints",
        "e": "perichondrium",
        "f": "secondary chondrification center"
    },
    "correctAns": [
        "b", "d"
    ],
    "explain": {
        "a": "Interzones develop into joints, so if they failed limbs should still be able to form.  They would just be inarticulate, devoid of joints.",
        "b": "CORRECT: Interzones develop into joints.  Articular cartilages cover the epiphyses of the bones on each side of a synovial joint.  So, if no interzones formed, no articular cartilages could develop.",
        "c": "Interzones develop into joints.  Bone marrow forms in the core of long bones; which is not part of a joint.",
        "d": "CORRECT: Cranial joints still form from interzones; they just develop into fibrous, not synovial, joints.",
        "e": "Interzones develop into joints.  A perichondrium is a fibrous sheath around the periphery of a long bone.  It makes no contribution to a joint.",
        "f": "Interzones develop into joints.  Secondary chondrification centers form after primary chondrification centers ossify.  This is independent of joint development, and there are no grounds for predicting that interzone failure would prevent chondrification or ossification."
    }
},
];

