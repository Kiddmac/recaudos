const Joi = require('joi');

const createContratoSchema = Joi.object({
     nombreContratista : Joi.string(),
     cedula: Joi.number().integer(),
     deposito: Joi.string(),
     fechaCorte : Joi.number(),
     valorContrato : Joi.number(),
     apto : Joi.number(),
     valorLetras : Joi.string(),
     fechaContrato : Joi.string(),
     createdAt: Joi.string(),
     userId: Joi.number(),
})

const updateContratoSchema = Joi.object({
    id : Joi.string(),
     nombreContratista : Joi.string(),
     cedula: Joi.string(),
     fechaCorte : Joi.number(),
     valorContrato : Joi.number(),
     apto : Joi.number(),
     valorLetras : Joi.string(),
})

const getContratoSchema = Joi.object({
    id: Joi.required()
})

const deleteContratoSchema = Joi.object({
     id: Joi.required()
})
const queryContratoSchema = Joi.object({
     limit: Joi.number().integer(),
     offset: Joi.number().integer(),
     cedula: Joi.number().integer()
})

module.exports = { queryContratoSchema, createContratoSchema, updateContratoSchema, getContratoSchema, deleteContratoSchema }
