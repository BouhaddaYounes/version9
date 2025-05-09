'use strict';
const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');
 const {auth} = require ('../middleware/auth');


//get all 


router.get('/api/getAllStation', controller.getAllStation);
router.get('/api/getAllUsers', controller.getAllUsers );

router.get('/api/getAllCategories', controller.getAllCategories);
router.get('/api/getAllOrders', controller.getAllOrders);
router.get('/api/getAllProducts', controller.getAllProducts);

//get by id 

router.get('/api/getProductsByCategory/:id', controller.getProductsByCategory);


///:::::::::::::::::insrt:::::::::::::::::::////////
router.post('/api/createProduct', controller.createProduct);



//:::::::::::::::::::::::update::::::::::::::::::::::://

// router.put('/api/updateStation/:id', controller.updateStation);

//********get FActure******** */
// router.get('/api/getfacturebyid/:num/:tab/:etat', controller.getfacturebyid);
// router.get('/api/getfacturebyop/:id/:etat', controller.getFacturebyop);




module.exports = {
    routes: router
}