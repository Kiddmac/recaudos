const express = require ('express');
const PagosService = require('../services/pagosService');
const validatorHandler = require('../middlewares/validatorHandler');
const {queryPagoSchema, createPagoSchema, updatePagoSchema, getPagoSchema, deletePagoSchema} = require('../schemas/pagosSchema')
const passport = require('passport')

const service = new PagosService;
const router = express.Router();

router.get('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(queryPagoSchema, 'query'),
async (req,res,next)=> {
    try {
        const pagos = await service.find(req.query);
        res.json(pagos)    
    } catch (err) {
        next(err)
    }
})

router.get('/:id', 
    passport.authenticate('jwt', {session: false}),
    validatorHandler(getPagoSchema, 'id'),
    async (req,res,next)=> {
        try {
            const { id } = req.params
            const pago = await service.findOne(id)
            res.json(pago)
        } catch (err) {
            next(err)   
        } 
    })

router.post('/',
    passport.authenticate('jwt', {session: false}),
    validatorHandler(createPagoSchema, 'body'),
    async (req,res,next)=> {
        
        try {
            const body = req.body
            const pago = await service.create(body)
            res.json(pago)
        } catch (err) {
            next(err)
        }
   
})

router.patch('/:id',
passport.authenticate('jwt', {session: false}),
    validatorHandler(updatePagoSchema, 'id'),
    async (req,res,next)=> {
        try {
            const { id } = req.params
            const changes = req.body
            const pago = await service.update(id, changes)
            res.json(pago)
        } catch (err) {
            next(err)
        }
   
})

router.delete('/:id',
passport.authenticate('jwt', {session: false}),
    validatorHandler(deletePagoSchema,'id'),
    async (req,res,next)=> {
        try {
            const { id } = req.params
            const pago = await service.delete(id)
            res.json(pago)
        } catch (err) {
            next(err)
        }
})



module.exports = router;