'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const bcrypt = require("bcryptjs");


const insertMatricule = async (matricule, nomSession) => {
    try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('events');
      await pool
        .request()
        .input('COMPTE', sql.VarChar, nomSession)
        .input('MATRICULE', sql.VarChar, matricule)
        .query(sqlQueries.matricule);
        console.log(list.recordset[0]);
        return list.recordset;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to insert matricule into the database.');
    }
  };
// for ad auth
const getuser = async (COMPTE) =>  {
    try {
      console.log(COMPTE+'cc');

      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries('events');
      const list = await pool
        .request()
        .input('COMPTE', sql.VarChar, COMPTE)
        .query(sqlQueries.getUser);

      console.log(list.recordset[0]);
      console.log(list.recordset[0]+'cccfd');

      return list.recordset;
    } catch (error) {
        console.log(error);
        return error.message; 
        // return [];
        // Throw the error to be caught in the calling function.
    }
  }
  ;




// GET ALL FROM BDD.....//////
const getAllCategories= async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getallCategories);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


const getAllOperateur= async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getAllOperateur);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getAllOrders = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getAllOrders);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


const getAllProducts = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getAllProducts);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const  createCategory  = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insert = await pool
            .request()
            .input('catalogue_name', sql.NVarChar, data.catalogue_name)
            .input('catalogue_descr', sql.NVarChar, data.catalogue_descr)
           

            .query(sqlQueries.createCategory);

        console.log(insert.recordset);

        return insert.recordset;

    } catch (error) {
        console.error(error); // Utilisez console.error pour afficher les erreurs
        throw error; // Réémettez l'erreur pour la gérer ailleurs si nécessaire
    }
}



const  createOrder  = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insert = await pool
            .request()
            .input('customerName', sql.NVarChar, customerName)
      .input('productId', sql.Int, productId)
      .input('quantity', sql.Int, quantity)

            .query(sqlQueries.createOrder);

        console.log(insert.recordset);

        return insert.recordset;

    } catch (error) {
        console.error(error); // Utilisez console.error pour afficher les erreurs
        throw error; // Réémettez l'erreur pour la gérer ailleurs si nécessaire
    }
}



const  createProduct = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insert = await pool
            .request()
            .input('product_name', sql.NVarChar,data.product_name)
            .input('product_price', sql.Decimal, data.product_price)
            

            .query(sqlQueries.createProduct);

        console.log(insert.recordset);

        return insert.recordset;

    } catch (error) {
        console.error(error); // Utilisez console.error pour afficher les erreurs
        throw error; // Réémettez l'erreur pour la gérer ailleurs si nécessaire
    }
}





const getProductsByCategory = async (category_id) => {
    console.log(category_id)
    
    try {
         let pool = await sql.connect(config.sql);
               const sqlQueries = await utils.loadSqlQueries('events');
               
               const list = await pool.request()

        .input('category_id', sql.Int, category_id)
        .query(sqlQueries.getProductsByCategory);
      
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getAllStation = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getALLstation);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getAllLoyer = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getAllLoyer);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getAllContrat = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getAllContrat);
        return list.recordset;
    }catch(error){
        console.log(error.message);
    }

}

const getStationById = async (stationId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool
            .request()
            .input('stationId', sql.VarChar, stationId)
            .query(sqlQueries.getStationById);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getLoyerById = async (loyerId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool
            .request()
            .input('loyerId', sql.VarChar, loyerId)
            .query(sqlQueries.getLoyerById);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getContratById = async (contratId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool
            .request()
            .input('contratId', sql.Int, parseInt(contratId))
            .query(sqlQueries.getContratById);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getOperateurById = async (operateurId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool
            .request()
            .input('operateurId', sql.Int, operateurId)
            .query(sqlQueries.getOperateurById);
        return list.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


// upgrade

const updateStation = async (stationId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const result = await pool.request()
            .input('stationId', sql.VarChar, stationId)
            .input('etat', sql.Int, data.ETATS)
            .input('activite', sql.Int, data.TYPE_ACTIVITE)
            .query(sqlQueries.updateStation);

        return result.rowsAffected[0] > 0;
    } catch (error) {
        console.log('Erreur dans updateStation:', error.message);
        return false;
    }
};

const updateOperateur = async (operateurId, etat) => {
    try {
        let pool = await sql.connect(config.sql);
        // const sqlQueries = await utils.loadSqlQueries('events'); // أو 'operateurs' إذا عندك مجلد خاص
        const sqlQueries = await utils.loadSqlQueries('events');
        const result = await pool.request()
            .input('operateurId', sql.VarChar, operateurId)
            .input('TEL', sql.VarChar, etat.TEL)
            .input('BANQUE', sql.VarChar, etat.BANQUE)
            .query(sqlQueries.updateOperateur);

        return result.rowsAffected[0] > 0;
    } catch (error) {
        console.log('Erreur dans updateOperateur:', error.message);
        return false;
    }
};

const updateLoyer = async (loyerId, data1) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const result = await pool.request()
            .input('loyerId', sql.VarChar, loyerId)
            .input('etat', sql.Int, data1.ETAT)
            .input('typeLoyer', sql.Int, data1.TYPE_LOYER)
            .query(sqlQueries.updateLoyer);

        return result.rowsAffected[0] > 0;
    } catch (error) {
        console.log('Erreur dans updateLoyer:', error.message);
        return false;
    }
};

// Add

// const addLoyer = async (loyerData) => {
//     try {
//         const { codeLoyer, codeStation, typeLoyer, etat, nom } = loyerData;

//         let pool = await sql.connect(config.sql);

//         await pool.request()
//             .input('codeLoyer', sql.VarChar(50), codeLoyer)
//             .input('codeStation', sql.VarChar(50), codeStation)
//             .input('typeLoyer', sql.Int, typeLoyer)
//             .input('etat', sql.Int, etat)
//             .query(`INSERT INTO [my_db].[dbo].[LOYER] 
//                     (CODE_LOYER, CODE_STATION, TYPE_LOYER, ETAT) 
//                     VALUES (@codeLoyer, @codeStation, @typeLoyer, @etat)`);

//         return true;
//     } catch (error) {
//         console.error('Erreur dans addLoyer:', error.message);
//         return false;
//     }
// };
const addLoyer = async (loyer) => {
    try {
        const pool = await sql.connect(config.sql);

        // Step 1: get last CODE_LOYER and increment
        const result = await pool.request().query(`
            SELECT TOP 1 CODE_LOYER
            FROM LOYER
            WHERE ISNUMERIC(SUBSTRING(CODE_LOYER, 4, LEN(CODE_LOYER))) = 1
            ORDER BY CAST(SUBSTRING(CODE_LOYER, 4, LEN(CODE_LOYER)) AS INT) DESC
        `);

        const lastCode = result.recordset[0]?.CODE_LOYER || "LOY0";
        const nextId = parseInt(lastCode.replace("LOY", "")) + 1;
        const newCode = `LOY${nextId}`;

        // Step 2: insert the new loyer
        await pool.request()
            .input('code_loyer', sql.VarChar(50), newCode)
            .input('code_station', sql.VarChar(50), loyer.codeStation)
            .input('type_loyer', sql.Int, loyer.typeLoyer)
            .input('etat', sql.Int, loyer.etat)
            .query(`
                INSERT INTO LOYER (CODE_LOYER, CODE_STATION, TYPE_LOYER, ETAT)
                VALUES (@code_loyer, @code_station, @type_loyer, @etat)
            `);

        return {
            success: true,
            newCode
        };
    } catch (error) {
        console.error('Erreur dans addLoyer:', error.message);
        return { success: false };
    }
};




// const addContrat = async (contratData) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         await pool.request()
//             .input('id', sql.Int, contratData.id)
//             .input('num', sql.VarChar(50), contratData.num)
//             .input('codeOperateur', sql.VarChar(10), contratData.codeOperateur)
//             .input('objet', sql.VarChar(250), contratData.objet)
//             .input('dateVigueur', sql.Date, contratData.dateVigueur)
//             .input('codeStation', sql.VarChar(50), contratData.codeStation)
//             .input('dateFacturation', sql.Date, contratData.dateFacturation)
//             .input('assurance', sql.Real, contratData.assurance)
//             .input('dateFin', sql.Date, contratData.dateFin)
//             .input('chargeAvance', sql.Real, contratData.chargeAvance)
//             .input('typePaiement', sql.VarChar(50), contratData.typePaiement)
//             .input('codeLoyer', sql.VarChar(50), contratData.codeLoyer)
//             .input('chargeF', sql.Real, contratData.chargeF)
//             .input('loyerF', sql.Real, contratData.loyerF)
//             .input('indexF', sql.Real, contratData.indexF)
//             .input('chiffreF', sql.Real, contratData.chiffreF)
//             .input('tatControl', sql.Int, contratData.tatControl)
//             .input('nns', sql.Int, contratData.nns)
//             .query(`INSERT INTO [my_db].[dbo].[CONTRAT] (
//                 ID, NUM, CODE_OPERATEUR, OBJET, DATE_VIGEUR, CODE_STATION, 
//                 DATE_FACTURATION, ASSURANCE, DATE_FIN, CHARGE_AVANCE, TYPE_PAIEMENT, 
//                 CODE_LOYER, CHARGE_F, LOYER_F, INDEX_F, CHIFFRE_F, 
//                 TAT_CONTROL, NNS
//             ) VALUES (
//                 @id, @num, @codeOperateur, @objet, @dateVigueur, @codeStation, 
//                 @dateFacturation, @assurance, @dateFin, @chargeAvance, @typePaiement, 
//                 @codeLoyer, @chargeF, @loyerF, @indexF, @chiffreF, 
//                 @tatControl, @nns
//             )`);
//         return true;
//     } catch (error) {
//         console.error('Erreur dans addContrat:', error.message);
//         return false;
//     }
// };
// const addContrat = async (contratData) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         await pool.request()
//             .input('num', sql.VarChar(50), contratData.num)
//             .input('codeOperateur', sql.VarChar(10), contratData.codeOperateur)
//             .input('dateVigueur', sql.Date, contratData.dateVigueur)
//             .input('dateFacturation', sql.Date, contratData.dateFacturation || null)
//             .input('dateFin', sql.Date, contratData.dateFin || null)
//             .input('typePaiement', sql.VarChar(50), contratData.typePaiement)
//             .input('codeLoyer', sql.VarChar(50), contratData.codeLoyer)
//             .query(`
//                 INSERT INTO [my_db].[dbo].[CONTRAT] (
//                     NUM,
//                     CODE_OPERATEUR,
//                     OBJET,
//                     DATE_VIGEUR,
//                     CODE_STATION,
//                     DATE_FACTURATION,
//                     DATE_FIN,
//                     TYPE_PAIEMENT,
//                     CODE_LOYER
//                 )
//                 SELECT 
//                     @num,
//                     @codeOperateur,
//                     CASE L.TYPE_LOYER
//                         WHEN 1 THEN 'Restauration'
//                         WHEN 2 THEN 'Boutique'
//                         WHEN 3 THEN 'Lavage'
//                         WHEN 4 THEN 'Distributeur'
//                         WHEN 5 THEN 'Publicité'
//                         WHEN 6 THEN 'Antenne'
//                         ELSE 'Inconnu'
//                     END,
//                     @dateVigueur,
//                     L.CODE_STATION,
//                     @dateFacturation,
//                     @dateFin,
//                     @typePaiement,
//                     @codeLoyer
//                 FROM [my_db].[dbo].[LOYER] L
//                 WHERE L.CODE_LOYER = @codeLoyer AND L.ETAT = 1
//             `);
//         return true;
//     } catch (error) {
//         console.error('Erreur dans addContrat:', error.message);
//         return false;
//     }
// };
const getObjetByCodeLoyer = async (codeLoyer) => {
    try {
        let pool = await sql.connect(config.sql);
                const result = await pool.request().query(`
            SELECT TOP 1 ID 
            FROM CONTRAT
            WHERE ISNUMERIC(ID) = 1
            ORDER BY ID DESC
        `);

        const lastId = result.recordset[0]?.ID || 0;
        const nextId = lastId + 1;

       await pool.request()
    .input('id', sql.Int, nextId)
    .input('num', sql.VarChar(50), contratData.num)
    .input('codeOperateur', sql.VarChar(10), contratData.codeOperateur)
    .input('dateVigueur', sql.Date, contratData.dateVigueur)
    .input('dateFacturation', sql.Date, contratData.dateFacturation)
    .input('dateFin', sql.Date, contratData.dateFin)
    .input('typePaiement', sql.VarChar(50), contratData.typePaiement)
    .input('codeLoyer', sql.VarChar(50), contratData.codeLoyer)
    .query(`
        INSERT INTO [my_db].[dbo].[CONTRAT] (
            ID, NUM, CODE_OPERATEUR, OBJET, DATE_VIGEUR, CODE_STATION,
            DATE_FACTURATION, DATE_FIN, TYPE_PAIEMENT, CODE_LOYER
        )
        SELECT 
            @id, @num, @codeOperateur, L.TYPE_LOYER, @dateVigueur, L.CODE_STATION,
            @dateFacturation, @dateFin, @typePaiement, @codeLoyer
        FROM [my_db].[dbo].[LOYER] L
        WHERE L.CODE_LOYER = @codeLoyer AND L.ETAT = 1
    `);
        if (result.recordset.length > 0) {
            return result.recordset[0].OBJET;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erreur dans getObjetByCodeLoyer:', error.message);
        return null;
    }
}

const addContrat = async (contratData) => {
    try {
        let pool = await sql.connect(config.sql);
                const result = await pool.request().query(`
            SELECT TOP 1 ID 
            FROM CONTRAT
            WHERE ISNUMERIC(ID) = 1
            ORDER BY ID DESC
        `);
        const lastId = result.recordset[0]?.ID || 0;
        const nextId = lastId + 1;

       await pool.request()
    .input('id', sql.Int, nextId)
    .input('num', sql.VarChar(50), contratData.num)
    .input('codeOperateur', sql.VarChar(10), contratData.codeOperateur)
    .input('dateVigeur', sql.Date, contratData.dateVigeur)
    .input('dateFacturation', sql.Date, contratData.dateFacturation)
    .input('dateFin', sql.Date, contratData.dateFin)
    .input('typePaiement', sql.VarChar(50), contratData.typePaiement)
    .input('codeLoyer', sql.VarChar(50), contratData.codeLoyer)
    .query(`
        INSERT INTO [my_db].[dbo].[CONTRAT] (
            ID, NUM, CODE_OPERATEUR, OBJET, DATE_VIGEUR, CODE_STATION,
            DATE_FACTURATION, DATE_FIN, TYPE_PAIEMENT, CODE_LOYER
        )
        SELECT 
            @id, @num, @codeOperateur, L.TYPE_LOYER, @dateVigeur, L.CODE_STATION,
            @dateFacturation, @dateFin, @typePaiement, @codeLoyer
        FROM [my_db].[dbo].[LOYER] L
        WHERE L.CODE_LOYER = @codeLoyer AND L.ETAT = 1
    `);
        return true;
    } catch (error) {
        console.error('Erreur dans addContrat:', error.message);
        return false;
    }
};




const addOperateur = async (operateur) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events'); 

        const result = await pool.request()
            .input('id', sql.Int, operateur.ID)
            .input('code_operateur', sql.VarChar(10), operateur.CODE_OPERATEUR)
            .input('raison_sociale', sql.VarChar(250), operateur.RAISON_SOCIALE)
            .input('nif', sql.VarChar(50), operateur.NIF)
            .input('domiciliation', sql.VarChar(250), operateur.DOMICILIATION)
            .input('adresse', sql.VarChar(250), operateur.ADRESSE)
            .input('tel', sql.VarChar(50), operateur.TEL)
            .input('code_client', sql.VarChar(10), operateur.CODE_CLIENT)
            .input('op_etat', sql.Bit, operateur.OP_ETAT)
            .query(sqlQueries.addOperateur); // هذا السطر ناقص عندك

        return result.rowsAffected[0] > 0;
    } catch (error) {
        console.error('Erreur dans addOperateur:', error.message);
        return false;
    }
};

// const addStation = async (station) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('events');

//         const result = await pool.request()
//             .input('code_station', sql.VarChar(50), station.CODE_STATION)
//             .input('nom_station', sql.VarChar(50), station.NOM_STATION)
//             .input('code_district', sql.VarChar(3), station.CODE_DISTRICT)
//             .input('code_wilaya', sql.VarChar(2), station.CODE_WILAYA)
//             .input('type_activite', sql.Int, station.TYPE_ACTIVITE)
//             .input('nbr_loyer', sql.Int, station.NBR_LOYER)
//             .input('etats', sql.Int, station.ETATS)
//             .input('wilaya', sql.VarChar(50), station.Wilaya)
//             .query(sqlQueries.addStation);

//         return result.rowsAffected[0] > 0;
//     } catch (error) {
//         console.error('Erreur dans addStation:', error.message);
//         return false;
//     }
// };
// const addStation = async (station) => {
//     try {
//         const pool = await sql.connect(config.sql);

//         // Step 1: get last station code
//         const result = await pool.request().query(`
//             SELECT TOP 1 CODE_STATION
//             FROM STATIONS
//             WHERE ISNUMERIC(SUBSTRING(CODE_STATION, 3, LEN(CODE_STATION))) = 1
//             ORDER BY CAST(SUBSTRING(CODE_STATION, 3, LEN(CODE_STATION)) AS INT) DESC
//         `);

//         const lastCode = result.recordset[0]?.CODE_STATION || "ST0";
//         const nextId = parseInt(lastCode.replace("ST", "")) + 1;
//         const newCode = `ST${nextId}`;

//         // Step 2: load SQL and call stored procedure
//         const sqlQueries = await utils.loadSqlQueries('events');

//         const insertResult = await pool.request()
//             .input('code_station', sql.VarChar(50), newCode)
//             .input('nom_station', sql.VarChar(50), station.NOM_STATION)
//             .input('code_district', sql.VarChar(3), station.CODE_DISTRICT)
//             .input('code_wilaya', sql.VarChar(2), station.CODE_WILAYA)
//             .input('type_activite', sql.Int, station.TYPE_ACTIVITE)
//             .input('nbr_loyer', sql.Int, station.NBR_LOYER)
//             .input('etats', sql.Int, station.ETATS)
//             .input('wilaya', sql.VarChar(50), station.Wilaya)
//             .query(sqlQueries.addStation);

//         return {
//             success: insertResult.rowsAffected[0] > 0,
//             newCode
//         };
//     } catch (error) {
//         console.error('Erreur dans addStation:', error.message);
//         return { success: false };
//     }
// };

const wilayaCodes = {
  "Adrar": "01",
  "Chlef": "02",
  "Laghouat": "03",
  "Oum El Bouaghi": "04",
  "Batna": "05",
  "Béjaïa": "06",
  "Biskra": "07",
  "Béchar": "08",
  "Blida": "09",
  "Bouira": "10",
  "Tamanrasset": "11",
  "Tébessa": "12",
  "Tlemcen": "13",
  "Tiaret": "14",
  "Tizi Ouzou": "15",
  "Alger": "16",
  "Djelfa": "17",
  "Jijel": "18",
  "Sétif": "19",
  "Saïda": "20",
  "Skikda": "21",
  "Sidi Bel Abbès": "22",
  "Annaba": "23",
  "Guelma": "24",
  "Constantine": "25",
  "Médéa": "26",
  "Mostaganem": "27",
  "M'Sila": "28",
  "Mascara": "29",
  "Ouargla": "30",
  "Oran": "31",
  "El Bayadh": "32",
  "Illizi": "33",
  "Bordj Bou Arreridj": "34",
  "Boumerdès": "35",
  "El Tarf": "36",
  "Tindouf": "37",
  "Tissemsilt": "38",
  "El Oued": "39",
  "Khenchela": "40",
  "Souk Ahras": "41",
  "Tipaza": "42",
  "Mila": "43",
  "Aïn Defla": "44",
  "Naâma": "45",
  "Aïn Témouchent": "46",
  "Ghardaïa": "47",
  "Relizane": "48",
  "Bordj Badji Mokhtar": "49",
  "Béni Abbès": "50",
  "Timimoun": "51",
  "Touggourt": "52",
  "Djanet": "53",
  "El M'Ghair": "54",
  "El Meniaa": "55",
  "Ouled Djellal": "56",
  "Bordj Emir Abdelkader": "57",
  "Béni Ikhlef": "58"
};


const addStation = async (station) => {
    try {
        const pool = await sql.connect(config.sql);

        // Step 1: get last station code and increment
        const result = await pool.request().query(`
            SELECT TOP 1 CODE_STATION
            FROM STATIONS
            WHERE ISNUMERIC(SUBSTRING(CODE_STATION, 3, LEN(CODE_STATION))) = 1
            ORDER BY CAST(SUBSTRING(CODE_STATION, 3, LEN(CODE_STATION)) AS INT) DESC
        `);

        const lastCode = result.recordset[0]?.CODE_STATION || "ST0";
        const nextId = parseInt(lastCode.replace("ST", "")) + 1;
        const newCode = `ST${nextId}`;

        // Step 2: map Wilaya name to code
        const codeWilaya = wilayaCodes[station.Wilaya];
        if (!codeWilaya) {
            throw new Error(`Wilaya code not found for: ${station.Wilaya}`);
        }

        // Step 3: load SQL query and insert
        const sqlQueries = await utils.loadSqlQueries('events');

        const insertResult = await pool.request()
            .input('code_station', sql.VarChar(50), newCode)
            .input('nom_station', sql.VarChar(50), station.NOM_STATION)
            .input('code_district', sql.VarChar(3), station.CODE_DISTRICT)
            .input('code_wilaya', sql.VarChar(2), codeWilaya)  // use mapped code
            .input('type_activite', sql.Int, station.TYPE_ACTIVITE)
            .input('nbr_loyer', sql.Int, station.NBR_LOYER)
            .input('etats', sql.Int, station.ETATS)
            .input('wilaya', sql.VarChar(50), station.Wilaya)  // keep the original name if you want
            .query(sqlQueries.addStation);

        return {
            success: insertResult.rowsAffected[0] > 0,
            newCode
        };
    } catch (error) {
        console.error('Erreur dans addStation:', error.message);
        return { success: false };
    }
};

async function getStationByCode(code) {
    let pool = await sql.connect(config.sql);
  const result = await pool
    .request()
    .input("code", sql.VarChar, code)
    .query("SELECT CODE_STATION, NOM_STATION, CODE_DISTRICT, CODE_WILAYA, TYPE_ACTIVITE, NBR_LOYER, ETATS, Wilaya FROM STATIONS WHERE CODE_STATION = @code");

  return result.recordset[0];
}


// const updateLoyer = async (loyerId, etat) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const checkResult = await pool.request()
//             .input('loyerId', sql.VarChar, loyerId)
//             .query('SELECT * FROM [my_db].[dbo].[LOYER] WHERE CODE_LOYER = @loyerId');

//         if (!checkResult.recordset.length) {
//             throw new Error('Loyer introuvable');
//         }

//         const result = await pool.request()
//             .input('loyerId', sql.VarChar, loyerId)
//             .input('etat', sql.Int, etat)
//             .query('UPDATE [my_db].[dbo].[LOYER] SET ETAT = @etat WHERE CODE_LOYER = @loyerId');

//         return true; 
//     } catch (error) {
//         console.log('Erreur dans updateLoyer:', error.message);
//         return false;
//     }
// };



module.exports = {

   getContratById, getOperateurById, updateOperateur, updateLoyer, addLoyer, addContrat,  addOperateur,
    getAllStation,getAllCategories,getAllOrders, addStation,
    getuser ,insertMatricule,getAllProducts,createCategory ,createOrder,
    createProduct ,getProductsByCategory ,getAllOperateur, getAllLoyer, getAllContrat, getStationById, getLoyerById,
    updateStation, getStationByCode, getObjetByCodeLoyer

}