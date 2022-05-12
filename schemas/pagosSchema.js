const Joi = require('joi');

const createPagoSchema = Joi.object({
     id : Joi.string().uuid(),
     nombreContratista : Joi.string().required(),
     fechaDeCorte : Joi.number().required(),
     valorPago : Joi.number().required(),
     apto : Joi.number().required(),
     valorLetras : Joi.string().required(),
     mesPagoDesde : Joi.string().required(),
     mesPagoHasta: Joi.string().required(),
     //fechaPago : Joi.date().timestamp()
})
const updatePagoSchema = Joi.object({
     nombreContratista : Joi.string(),
     fechaDeCorte : Joi.number(),
     valorPago : Joi.number(),
     apto : Joi.number(),
     valorLetras : Joi.string(),
     mesPagoDesde : Joi.string(),
     mesPagoHasta : Joi.string(),
     //fechaPago : Joi.date(),
})

const getPagoSchema = Joi.object({
    id: Joi.required()
})


module.exports = { createPagoSchema, updatePagoSchema, getPagoSchema }
