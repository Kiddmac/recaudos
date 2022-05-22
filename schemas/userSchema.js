const Joi = require('joi');

const createUserSchema = Joi.object({
    firtsName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})

const updateUserSchema = Joi.object({
    firtsName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
})

const getUserSchema = Joi.object({
    id: Joi.required()
})

const deleteUserSchema = Joi.object({
    id: Joi.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema }