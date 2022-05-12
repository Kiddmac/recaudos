const Joi = require('joi');

const createContratoSchema = Joi.object({
     id : Joi.string(),
     nombreContratista : Joi.string().required(),
     cedula: Joi.string().required(),
     deposito: Joi.string().required(),
     fechaDeCorte : Joi.number().required(),
     valorContrato : Joi.number().required(),
     apto : Joi.number().required(),
     valorLetras : Joi.string().required(),
     fechaContrato : Joi.required()
})

const updateContratoSchema = Joi.object({
    id : Joi.string(),
     nombreContratista : Joi.string(),
     cedula: Joi.string(),
     fechaDeCorte : Joi.number(),
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
