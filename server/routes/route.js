'use strict';
const express = require('express');
const router = express.Router();

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