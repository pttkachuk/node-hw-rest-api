const Joi = require("joi");

const addContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    favorite: Joi.boolean(),
});

const updateFavorite = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    addContactSchema,
    updateFavorite,
}

module.exports = { schemas };
