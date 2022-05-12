const express = require ('express');
const PagosService = require('../services/pagosService');
const validatorHandler = require('../middlewares/validatorHandler');
const {createPagoSchema, updatePagoSchema, getPagoSchema} = require('../schemas/pagosSchema')

const service = new PagosService;

const router = express.Router();

router.get('/', async (req,res,next)=> {
    try {
        const pagos = await service.find();
        res.json(pagos)    
    } catch (err) {
        next(err)
    }
})

router.get('/:id', 
    validatorHandler(getPagoSchema, 'params'),
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

router.patch('/:id', async (req,res,next)=> {
    try {
        const { id } = req.params
        const changes = req.body
        const pago = await service.update(id, changes)
        res.json(pago)
    } catch (err) {
        next(err)
    }
   
})

router.delete('/:id', async (req,res,next)=> {
    try {
        const { id } = req.params
        const pago = await service.delete(id)
        res.json(pago)
    } catch (err) {
        next(err)
    }
   
})



module.exports = router;