'use strict';

const Data = require('../data/events');

// GET ALL FROM BDD.....//////



// Fonction pour récupérer tous les utilisateurs

const getAllStation= async (req, res) => {
    try {

        const list = await Data.getAllStation ();
        res.send(list);        
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// const getAllClients = async (req, res) => {
//     try {

//         const list = await Data.getAllClients();
//         res.send(list);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };


const getAllOperateur = async (req, res) => {
    try {
        const list = await Data.getAllOperateur();
        console.log('Data fetched:', list); // Pour voir ce que Data renvoie

        res.status(200).json(list);
    } catch (error) {
        console.error('Error in getAllOperateur:', error); // Erreur affichée dans console
        res.status(500).json({ message: error.message });
    }
};

const getAllLoyer = async (req, res) => {
    try {
        const list = await Data.getAllLoyer();
        console.log('Data fetched:', list); // Pour voir ce que Data renvoie

        res.status(200).json(list);
    } catch (error) {
        console.error('Error in getAllLoyer:', error);
        res.status(500).json({ message: error.message });
    }
};

const getAllContrat = async (req, res) => {
    try{
        const list = await Data.getAllContrat();
        console.log('Data fetcheed:', list);
        res.status(200).json(list);
    } catch (error) {
        console.error('Error in getAllContrat:', error); 
        res.status(500).json({ message: error.message });
    }
};

const getStationById = async (req, res) => {
    try {
        const stationId = req.params.id;
        const station = await Data.getStationById(stationId);
        res.status(200).json(station);
    } catch (error) {
        console.error('Error in getStationById:', error);
        res.status(500).json({ message: error.message });
    }
};

const getLoyerById = async (req, res) => {
    try {
        const loyerId = req.params.id;
        const loyer = await Data.getLoyerById(loyerId);
        res.status(200).json(loyer);
    } catch (error) {
        console.error('Error in getLoyerById:', error);
        res.status(500).json({ message: error.message });
    }
};

const getContratById = async (req, res) => {
    try {
        const contratId = req.params.id;
     
        const contrat = await Data.getContratById(contratId);
      
        res.status(200).json(contrat);
    } catch (error) {
        console.error('Error in getContratById:', error);
        res.status(500).json({ message: error.message });
    }
};


const getOperateurById = async (req, res) => {
    try {
        const operateurId = req.params.id;
        const operateur = await Data.getOperateurById(operateurId);
        res.status(200).json(operateur);
    } catch (error) {
        console.error('Error in getOperateurById:', error);
        res.status(500).json({ message: error.message });
    }
};


// upgrade

// const updateStation = async (req, res) => {
//     try {
//         const stationId = req.params.id; // بدون parseInt لأنه string
//         const { etat } = req.body;

//         if (![1, 2].includes(etat)) {
//             return res.status(400).json({ message: "État invalide. Utilisez 1 ou 2." });
//         }

//         const success = await Data.updateStation(stationId, etat);

//         if (success) {
//             res.status(200).json({ message: 'État de la station mis à jour avec succès' });
//         } else {
//             res.status(404).json({ message: 'Station introuvable ou non modifiée' });
//         }
//     } catch (error) {
//         console.error('Erreur dans updateStation:', error);
//         res.status(500).json({ message: error.message });
//     }
// };
const updateStation = async (req, res) => {
  try {
    const stationId = req.params.id;
    // const { ETATS, TYPE_ACTIVITE } = req.body;
    const ETATS = req.body.ETATS ?? req.body.etat;
    const TYPE_ACTIVITE = req.body.TYPE_ACTIVITE ?? req.body.activite;

    if (![0, 1, 2].includes(ETATS)) {
      return res.status(400).json({ message: "État invalide. Utilisez 0, 1 ou 2." });
    }

    if (![1, 2].includes(TYPE_ACTIVITE)) {
        return res.status(400).json({ message: "Type d'activité invalide. Utilisez 1 ou 2." });
    }


    // const success = await Data.updateStation(stationId, ETATS, TYPE_ACTIVITE);
    const success = await Data.updateStation(stationId, { ETATS, TYPE_ACTIVITE });


    if (success) {
      res.status(200).json({ message: 'Station mise à jour avec succès' });
    } else {
      res.status(404).json({ message: 'Station introuvable ou non modifiée' });
    }
  } catch (error) {
    console.error('Erreur dans updateStation:', error);
    res.status(500).json({ message: error.message });
  }
};


const updateOperateur = async (req, res) => {
    try {
        const operateurId = req.params.id;
        const { TEL, BANQUE } = req.body;

        if (!BANQUE || !TEL) {
            return res.status(400).json({ message: 'Champs obligatoires manquants' });
        }
        const success = await Data.updateOperateur(operateurId, { TEL, BANQUE });

        if (success) {
            res.status(200).json({ message: 'Domiciliation mise à jour avec succès' });
         } // } else {
        //     res.status(404).json({ message: 'Opérateur introuvable ou non modifié' });
        // }
    } catch (error) {
        console.error('Erreur dans updateOperateur:', error);
        res.status(500).json({ message: error.message });
    }
};

const updateLoyer = async (req, res) => {
    try {
        const loyerId = req.params.id;
        const ETAT = req.body.ETAT ?? req.body.etat;
        const TYPE_LOYER = req.body.TYPE_LOYER ?? req.body.typeLoyer;

        if (![0, 1].includes(ETAT)) {
            return res.status(400).json({ message: "État invalide. Utilisez 0 ou 1." });
        }
        if (![1, 2, 3, 4, 5, 6].includes(TYPE_LOYER)) {
            return res.status(400).json({ message: "Type de loyer invalide. Utilisez 1, 2, 3, 4, 5 ou 6." });
        }
        const success = await Data.updateLoyer(loyerId, { ETAT, TYPE_LOYER });

        if (success) {
            // res.status(200).json({ message: 'État du loyer mis à jour avec succès' });
            const updatedLoyer = await Data.getLoyerById(loyerId); // you need to write this
            res.status(200).json(updatedLoyer);
        } else {
            res.status(404).json({ message: 'Loyer introuvable ou non modifié' });
        }
    } catch (error) {
        console.error('Erreur dans updateLoyer:', error);
        res.status(500).json({ message: error.message });
    }
};



const addLoyer = async (req, res) => {
    try {
        const loyerData = req.body;

        const isValid = loyerData.codeLoyer && loyerData.codeStation && loyerData.typeLoyer !== undefined &&
                        loyerData.etat !== undefined && loyerData.nom;

        if (!isValid) {
            return res.status(400).json({ message: 'Champs manquants ou invalides' });
        }

        const success = await Data.addLoyer(loyerData);

        if (success) {
            res.status(201).json({ message: 'Loyer ajouté avec succès' });
        } else {
            res.status(500).json({ message: 'Erreur lors de l\'ajout du loyer' });
        }
    } catch (error) {
        console.error('Erreur dans le contrôleur addLoyer:', error.message);
        res.status(500).json({ message: error.message });
    }
};


const addContrat = async (req, res) => {
    try {
        const contratData = req.body;

        // Validation rapide minimale
        if (!contratData.id || !contratData.num || !contratData.codeOperateur) {
            return res.status(400).json({ message: 'Champs obligatoires manquants' });
        }

        const success = await Data.addContrat(contratData);

        if (success) {
            res.status(201).json({ message: 'Contrat ajouté avec succès' });
        } else {
            res.status(500).json({ message: 'Erreur lors de l\'ajout du contrat' });
        }
    } catch (error) {
        console.error('Erreur dans le contrôleur addContrat:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const addOperateur = async (req, res) => {
    try {
        const operateur = req.body;

        if (!operateur.ID || !operateur.CODE_OPERATEUR || operateur.OP_ETAT === undefined) {
            return res.status(400).json({ message: "Champs obligatoires manquants." });
        }

        const success = await Data.addOperateur(operateur);

        if (success) {
            res.status(201).json({ message: "Opérateur ajouté avec succès" });
        } else {
            res.status(500).json({ message: "Erreur lors de l'ajout de l'opérateur" });
        }
    } catch (error) {
        console.error('Erreur dans addOperateur:', error);
        res.status(500).json({ message: error.message });
    }
};

const addStation = async (req, res) => {
    try {
        const stationData = req.body;

        const success = await Data.addStation(stationData);

        if (success) {
            res.status(201).json({ message: "Station ajoutée avec succès" });
        } else {
            res.status(400).json({ message: "Échec de l'ajout de la station" });
        }
    } catch (error) {
        console.error('Erreur dans addStation:', error);
        res.status(500).json({ message: error.message });
    }
};


// const addStation = async (req, res) => {
//   try {
//     const stationData = req.body;

//     const TYPE_ACTIVITE = req.body.TYPE_ACTIVITE ?? req.body.activite;
//     const ETATS = req.body.ETATS ?? req.body.etat;

//     if (![1, 2].includes(Number(TYPE_ACTIVITE))) {
//       return res.status(400).json({ message: "Activité invalide. Utilisez 1 ou 2." });
//     }

//     if (![0, 1, 2].includes(Number(ETATS))) {
//       return res.status(400).json({ message: "État invalide. Utilisez 0, 1 ou 2." });
//     }

//     // 1. Get the current max CODE_STATION
//     const lastCodeResult = await Data.getLastStationCode(); // You must create this
//     const lastCode = lastCodeResult?.CODE_STATION || 0;

//     // 2. Generate next code (just add +1)
//     const nextCode = lastCode + 1;

//     // 3. Prepare new station object
//     const newStation = {
//       CODE_STATION: nextCode,
//       NOM_STATION: req.body.NOM,
//       CODE_DISTRICT: req.body.CODE_DISTRICT,
//       CODE_WILAYA: req.body.CODE_WILAYA,
//       TYPE_ACTIVITE: Number(TYPE_ACTIVITE),
//       ETATS: Number(ETATS),
//       NBR_LOYER: 0,
//       Wilaya: req.body.Wilaya,
//     };

//     // 4. Insert the station
//     const success = await Data.addStation(newStation);

//     if (success) {
//       res.status(201).json({ message: "Station ajoutée avec succès" });
//     } else {
//       res.status(400).json({ message: "Échec de l'ajout de la station" });
//     }
//   } catch (error) {
//     console.error("Erreur dans addStation:", error);
//     res.status(500).json({ message: error.message });
//   }
// };



// const getAllCategories = async(req, res, next) => {
//     try {

//         const list = await Data.getAllCategories();
//         res.send(list);        
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
//   };

//   const getAllOrders = async (req, res, next) => {
//     try {

//         const list = await Data.getAllOrders ();
//         res.send(list);        
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
//   };


//   const getAllProducts = async (req, res, next) => {
//     try {

//         const list = await Data.getAllProducts ();
//         res.send(list);        
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
//   };

  // Fonction pour récupérer les produits par catégorie


  //   get by id 



  
// const getProductsByCategory= async (req, res, next) => {
//     try {
//         const categoryId = req.params.id;
//         const event = await Data. getProductsByCategory(categoryId);
//         res.send(event);
//         console.log(event);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }



// Fonction pour créer un nouveau produit


//   const createProduct = async (req, res, next) => {
//     try {
//         const data = req.body;
//         console.log(data)
//         const insert = await Data.createProduct(data);
//         res.send(insert);
//         console.log(insert)
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }



module.exports = {

  getAllOperateur,
  getAllStation,
  getAllLoyer,
  getAllContrat,
  getStationById,
  getLoyerById,
  getContratById,
  getOperateurById,
  updateStation,
  updateOperateur,
    updateLoyer,
    addLoyer,
    addContrat,
    addOperateur,
    addStation
};