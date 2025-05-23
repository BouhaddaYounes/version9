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

const addLoyer = async (loyerData) => {
    try {
        const { codeLoyer, codeStation, typeLoyer, etat, nom } = loyerData;

        let pool = await sql.connect(config.sql);

        await pool.request()
            .input('codeLoyer', sql.VarChar(50), codeLoyer)
            .input('codeStation', sql.VarChar(50), codeStation)
            .input('typeLoyer', sql.Int, typeLoyer)
            .input('etat', sql.Int, etat)
            .input('nom', sql.VarChar(50), nom)
            .query(`INSERT INTO [my_db].[dbo].[LOYER] 
                    (CODE_LOYER, CODE_STATION, TYPE_LOYER, ETAT, NOM) 
                    VALUES (@codeLoyer, @codeStation, @typeLoyer, @etat, @nom)`);

        return true;
    } catch (error) {
        console.error('Erreur dans addLoyer:', error.message);
        return false;
    }
};

const addContrat = async (contratData) => {
    try {
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('id', sql.Int, contratData.id)
            .input('num', sql.VarChar(50), contratData.num)
            .input('codeOperateur', sql.VarChar(10), contratData.codeOperateur)
            .input('objet', sql.VarChar(250), contratData.objet)
            .input('dateVigueur', sql.Date, contratData.dateVigueur)
            .input('codeStation', sql.VarChar(50), contratData.codeStation)
            .input('dateFacturation', sql.Date, contratData.dateFacturation)
            .input('assurance', sql.Real, contratData.assurance)
            .input('dateFin', sql.Date, contratData.dateFin)
            .input('chargeAvance', sql.Real, contratData.chargeAvance)
            .input('typePaiement', sql.VarChar(50), contratData.typePaiement)
            .input('codeLoyer', sql.VarChar(50), contratData.codeLoyer)
            .input('chargeF', sql.Real, contratData.chargeF)
            .input('loyerF', sql.Real, contratData.loyerF)
            .input('indexF', sql.Real, contratData.indexF)
            .input('chiffreF', sql.Real, contratData.chiffreF)
            .input('tatControl', sql.Int, contratData.tatControl)
            .input('nns', sql.Int, contratData.nns)
            .query(`INSERT INTO [my_db].[dbo].[CONTRAT] (
                ID, NUM, CODE_OPERATEUR, OBJET, DATE_VIGEUR, CODE_STATION, 
                DATE_FACTURATION, ASSURANCE, DATE_FIN, CHARGE_AVANCE, TYPE_PAIEMENT, 
                CODE_LOYER, CHARGE_F, LOYER_F, INDEX_F, CHIFFRE_F, 
                TAT_CONTROL, NNS
            ) VALUES (
                @id, @num, @codeOperateur, @objet, @dateVigueur, @codeStation, 
                @dateFacturation, @assurance, @dateFin, @chargeAvance, @typePaiement, 
                @codeLoyer, @chargeF, @loyerF, @indexF, @chiffreF, 
                @tatControl, @nns
            )`);
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

const addStation = async (station) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const result = await pool.request()
            .input('code_station', sql.VarChar(50), station.CODE_STATION)
            .input('nom_station', sql.VarChar(50), station.NOM_STATION)
            .input('code_district', sql.VarChar(3), station.CODE_DISTRICT)
            .input('code_wilaya', sql.VarChar(2), station.CODE_WILAYA)
            .input('type_activite', sql.Int, station.TYPE_ACTIVITE)
            .input('nbr_loyer', sql.Int, station.NBR_LOYER)
            .input('etats', sql.Int, station.ETATS)
            .input('wilaya', sql.VarChar(50), station.Wilaya)
            .query(sqlQueries.addStation);

        return result.rowsAffected[0] > 0;
    } catch (error) {
        console.error('Erreur dans addStation:', error.message);
        return false;
    }
};


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

   getContratById, getOperateurById, updateOperateur, updateLoyer, addLoyer, addContrat, addOperateur,
    getAllStation,getAllCategories,getAllOrders, addStation,
    getuser ,insertMatricule,getAllProducts,createCategory ,createOrder,
    createProduct ,getProductsByCategory ,getAllOperateur, getAllLoyer, getAllContrat, getStationById, getLoyerById,
    updateStation

}