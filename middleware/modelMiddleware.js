const models = require('../model');

module.exports = (req, res, next) => {
    req.models = models;
    next();
}
