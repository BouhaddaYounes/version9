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


const getAllUsers= async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.getAllUsers);
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





module.exports = {

   
    getAllStation,getAllCategories,getAllOrders,


    getuser ,insertMatricule,getAllProducts,createCategory ,createOrder,
    createProduct ,getProductsByCategory ,getAllUsers


}