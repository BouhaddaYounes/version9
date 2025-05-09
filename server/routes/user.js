'use strict';

const express = require('express');
const user = require('../controllers/user');


const router = express.Router();


// router.post("/signin", signin);
// router.post('/signin', user.signin);

// Login route
router.post('/api/auth/login', user.loginUser);
// Logout route
// router.post('/api/auth/logout', user.logoutUser);

module.exports = {
    routes: router
}