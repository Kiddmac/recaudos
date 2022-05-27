const express = require ('express');
const PagosService = require('../services/pagosService');
const validatorHandler = require('../middlewares/validatorHandler');
const {queryPagoSchema, createPagoSchema, updatePagoSchema, getPagoSchema, deletePagoSchema} = require('../schemas/pagosSchema')

const service = new PagosService;
const router = express.Router();

router.get('/',
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