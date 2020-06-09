const controller = require('../controller/index');
const {registration} = require('../middleware/valid');

const users = require('express').Router();

users.post('/register', registration, controller.users.RegiserUser);
users.get('/profile', controller.users.Profile);
users.put('/editprofile', controller.users.Update);

module.exports = users;
