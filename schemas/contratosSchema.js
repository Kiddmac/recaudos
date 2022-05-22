const Joi = require('joi');

const createContratoSchema = Joi.object({
     nombreContratista : Joi.string(),
     cedula: Joi.string(),
     deposito: Joi.string(),
     fechaCorte : Joi.number(),
     valorContrato : Joi.number(),
     apto : Joi.number(),
     valorLetras : Joi.string(),
     fechaContrato : Joi.string(),
     createdAt: Joi.string()
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

module.exports = { createContratoSchema, updateContratoSchema, getContratoSchema, deleteContratoSchema }
