const {SignInValidation, RegiserValidation} = require('../validation');

const signIn = (req, res, next) => {
    const {error} = SignInValidation(req.body);
    if (error) {
        return res.send(error.details[0].message);
    }
    next();
}

const registration = (req, res, next) => {
    const {error} = RegiserValidation(req.body);
    if (error) {
        return res.send(error.details[0].message);
    }
    next();
}
module.exports = {registration, signIn};
