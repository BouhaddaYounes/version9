'use strict';
const express = require('express');
const router = express.Router();

const sql = require('mssql');
const config = require('../config'); // عدل حسب مكان ملف الكونفيغ


const controller = require('../controllers/controller');
 const {auth} = require ('../middleware/auth');


//get all 


router.get('/api/getAllStation', controller.getAllStation);
router.get('/api/getAllOperateur', controller.getAllOperateur );
router.get('/api/getAllLoyer', controller.getAllLoyer);
router.get('/api/getAllContrat', controller.getAllContrat);

// get by id

router.get('/api/getStationById/:id', controller.getStationById);
router.get('/api/getLoyerById/:id', controller.getLoyerById);
router.get('/api/getContratById/:id', controller.getContratById);
router.get('/api/getOperateurById/:id', controller.getOperateurById);


// upgrade 

router.put('/api/updateStation/:id', controller.updateStation);
router.put('/api/updateLoyer/:id', controller.updateLoyer);
router.put('/api/updateOperateur/:id', controller.updateOperateur);

// Add
router.post('/api/addLoyer', controller.addLoyer);
router.post('/api/addContrat', controller.addContrat);
router.post('/api/addStation', controller.addStation);
router.post('/api/addOperateur', controller.addOperateur);

router.get('/api/stations/codes', async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT CODE_STATION FROM [my_db].[dbo].[STATIONS]');

    if (!result.recordset.length) {
      return res.status(404).json({ message: 'No station codes found' });
    }

    const codes = result.recordset.map(row => row.CODE_STATION);
    res.status(200).json(codes);  // ترجع مصفوفة الأكواد فقط
  } catch (err) {
    console.error('Erreur lors du chargement des codes station:', err);
    res.status(500).json({
      message: 'Erreur lors du chargement des codes station',
      error: err.message,
      stack: err.stack,
    });
  }
});




// router.get('/api/getAllCategories', controller.getAllCategories);
// router.get('/api/getAllOrders', controller.getAllOrders);
// router.get('/api/getAllProducts', controller.getAllProducts);

// //get by id 

// router.get('/api/getProductsByCategory/:id', controller.getProductsByCategory);


///:::::::::::::::::insrt:::::::::::::::::::////////
// router.post('/api/createProduct', controller.createProduct);


//:::::::::::::::::::::::update::::::::::::::::::::::://

// router.put('/api/updateStation/:id', controller.updateStation);

//********get FActure******** */
// router.get('/api/getfacturebyid/:num/:tab/:etat', controller.getfacturebyid);
// router.get('/api/getfacturebyop/:id/:etat', controller.getFacturebyop);




module.exports = {
    routes: router
}