'use strict';

// const ActiveDirectory = require('activedirectory2');
// var ActiveDirectory = require('activedirectory');
const jwt = require("jsonwebtoken");
const Data = require('../data/events');
const sql = require('mssql');
const config = require('../config');
const controller = require('./controller');
const secret = 'test';

const utils = require('../data/utils');

const bcrypt = require("bcryptjs");

// Fonction pour Login
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Nom d'utilisateur et mot de passe sont requis!" });
    }

    try {
      const pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input('COMPTE', sql.VarChar, username)
        .query('SELECT * FROM [dbo].[USER] WHERE COMPTE = @COMPTE');

      const user = result.recordset[0];

      if (!user) {
        return res.status(401).json({ message: "Nom d'utilisateur est incorrect!" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.pass);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Mot de passe est incorrect!" });
      }

      const payload = {
        id: user.id,
        username: user.compte
      };

      const token = jwt.sign(payload, secret, {});

      return res.status(200).json({ message: 'Connexion réussie!', token });
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erreur de connexion à la base de données!' });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};






// const ldapOptions = {
//   url: '',
//   baseDN: '',
//   username: '',
//   password: ''
// };


// for ad auth

// const comparePasswordWithAD = async (username, password) => {
//   return new Promise((resolve, reject) => {
//     const ad = new ActiveDirectory(ldapOptions);

//     ad.authenticate(username, password, (err, auth) => {
//       if (err) {
//         reject(new Error('LDAP authentication failed: ' + err.message));
//         console.log('Authentication failed!');
//         return;
//       }

//       if (!auth) {
//         reject(new Error('Invalid username or password.'));
//         return;
//       }
 
//       // const sAMAccountName = username.split('@')[0];
//       const sAMAccountName = username.split('@')[0] + '@naftal.local'


//       ad.findUser(sAMAccountName, (err, user) => {
//         if (err) {
//           reject(new Error('Failed to retrieve user information from Active Directory: ' + err.message));
//           return;
//         }

//         if (!user) {
//           reject(new Error('User not found in Active Directory.'));
//           return;
//         }

//         // resolve(user);
//         const { employeeID, sAMAccountName, mail, cn, IPphone, description,distinguishedName} = user;
     

//         const matricule = employeeID ? employeeID.toString() : '';
//         const nomSession = sAMAccountName ? sAMAccountName.toString().trim() : '';
//         const email = mail ? mail.toString() : '';
//         const commonName = cn ? cn.toString() : '';
//         const ipPhon  = IPphone ?IPphone. toString : '';
//         const desc  = description ? description.toString() : '';
//         const titl  = distinguishedName? distinguishedName.toString() : '';

//         console.log(matricule, nomSession, email, commonName, ipPhon, desc, titl);
//         console.log('Authenticated!');
//         resolve({ matricule, nomSession, email, commonName, ipPhon, desc, titl });
//         // resolve(user);
//       });
   
      
     
//     });
 
    

    
 
//   });

// };







// const compareUsernames = (username) => {
//   console.log(username + 'bdd');
//   return new Promise(async (resolve, reject) => {
//     try {
//       const list = await Data.getuser(username);

//       if (list.length > 0) {
//         const token = jwt.sign({ COMPTE: list[0]._COMPTE, id: list[0]._id }, secret, { expiresIn: "1h" });
//         // localStorage.setItem('profile', JSON.stringify(userWithToken)); // Store userWithToken in local storage
//         resolve({ data: list, token }); // Return data and token as an object in the resolved promise.
//       } else {
//         console.log('No hay datos en la tabla');
//         reject(new Error("User doesn't exist"));
//       }
//     } catch (error) {
//       console.log(error);
//       reject(error);
//     }
//   });
// };
// const signin = async (req, res, next) => {
//   const { username, password } = req.body;
//   // console.log(username, password + 'ttt');

//   try {
//     if (username && password) {
//       const adResult = await comparePasswordWithAD(username+ '@naftal.local', password);
//       console.log(adResult);
//       const userWithToken = await compareUsernames(adResult.nomSession);
//      console.log(userWithToken.data.length)
//       if (userWithToken.data.length ===1) {
//         console.log('dkholt')
//        await insertMatricule(adResult.matricule, adResult.nomSession);
//       }
//       res.send(userWithToken); // Send the resolved data and token in the response.
//       console.log(userWithToken);
//     } else {
//       res.status(400).json({ message: 'All fields are required!' });
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };
// const insertMatricule = async (matricule, nomSession) => {
//   try {
//     let pool = await sql.connect(config.sql);
//     const sqlQueries = await utils.loadSqlQueries('events');
//     await pool
//       .request()
//       .input('COMPTE', sql.VarChar, nomSession)
//       .input('MATRICULE', sql.VarChar, matricule)
//       .query(sqlQueries.matricule);
  
//   } catch (error) {
//     console.log(error);
//     throw new Error('Failed to insert matricule into the database.');
//   }
// };

module.exports = {
  loginUser
};
