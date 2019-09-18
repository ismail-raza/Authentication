const joi = require('@hapi/joi');

const RegiserValidation = (data) => {
    const schema = {
        email: joi.string().required().email(),
        password: joi.string().required().min(8),
        name: joi.string().required(),
        address: joi.string().required()
    }
    return joi.validate(data, schema);
};

const SignInValidation = data => {
    const schema = {
        email: joi.string().required().email(),
        password: joi.string().required().min(8)
    }
    return joi.validate(data, schema);

}


module.exports.RegiserValidation = RegiserValidation;
module.exports.SignInValidation = SignInValidation;