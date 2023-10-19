const Joi = require("joi");
const emailRegexp = require('../helpers/emailRegexp');
const allowedSubscriptions = require("../helpers/allowedSubscriptions");

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
})

const subscriptionsSchema = Joi.object({
    subscription: Joi.string().valid(...allowedSubscriptions).required()
})

const verifyEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
    subscriptionsSchema,
    verifyEmailSchema
};

module.exports = { schemas };