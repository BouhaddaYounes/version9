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
const getAllUsers = async (req, res) => {
    try {

        const list = await Data.getAllUsers ();
        res.send(list);        
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllCategories = async(req, res, next) => {
    try {

        const list = await Data.getAllCategories();
        res.send(list);        
    } catch (error) {
        res.status(400).send(error.message);
    }
  };

  const getAllOrders = async (req, res, next) => {
    try {

        const list = await Data.getAllOrders ();
        res.send(list);        
    } catch (error) {
        res.status(400).send(error.message);
    }
  };


  const getAllProducts = async (req, res, next) => {
    try {

        const list = await Data.getAllProducts ();
        res.send(list);        
    } catch (error) {
        res.status(400).send(error.message);
    }
  };

  // Fonction pour récupérer les produits par catégorie


  //   get by id 



  
const getProductsByCategory= async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const event = await Data. getProductsByCategory(categoryId);
        res.send(event);
        console.log(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



// Fonction pour créer un nouveau produit


  const createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data)
        const insert = await Data.createProduct(data);
        res.send(insert);
        console.log(insert)
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getAllCategories, createProduct ,getProductsByCategory,getAllProducts,getAllOrders
  ,getAllUsers,getAllStation
};