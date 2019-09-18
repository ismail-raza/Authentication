const controller= require('../controller/index');
const valid= require('../valid');

const user = require('express').Router();

user.post('/signIn', valid.signIn ,controller.auth.SignIn);

module.exports= user;