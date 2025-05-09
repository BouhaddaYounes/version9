'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/route');
const userRouter =require('./routes/user') ;

const { createUser, seedUsers } = require('./createUser/createUser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes.routes);
app.use("/user", userRouter.routes);

seedUsers();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`service is running on:: [${port}]`);
});