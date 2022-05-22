const Joi = require('joi');

const createPagoSchema = Joi.object({
     idRecibo : Joi.string(),
     nombreContratista : Joi.string().required(),
     fechaCorte : Joi.number().required(),
     valorPago : Joi.number().required(),
     apto : Joi.number().required(),
     valorLetras : Joi.string().required(),
     saldoPendiente: Joi.string(),
     pagoDesde : Joi.string().required(),
     pagoHasta: Joi.string().required(),
     fechaPago : Joi.string()
})
const updatePagoSchema = Joi.object({
     nombreContratista : Joi.string(),
     fechaDeCorte : Joi.number(),
     valorPago : Joi.number(),
     apto : Joi.number(),
     valorLetras : Joi.string(),
     mesPagoDesde : Joi.string(),
     mesPagoHasta : Joi.string(),
})

const getPagoSchema = Joi.object({
    id: Joi.required()
})

const deletePagoSchema = Joi.object({
     id: Joi.required()
})

module.exports = { createPagoSchema, updatePagoSchema, getPagoSchema, deletePagoSchema }