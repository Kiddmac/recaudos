const express = require ('express');
const ContratosService = require ('../services/contratosService.js')

const validatorHandler = require ('../middlewares/validatorHandler');
const {createContratoSchema, updateContratoSchema, getContratoSchema, deleteContratoSchema} = require('../schemas/contratosSchema')

const router = express.Router();
const service = new ContratosService();

router.get('/', async (req,res,next)=> {
    try {
        const contrato = await service.find();
        res.json(contrato)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', 
    validatorHandler(getContratoSchema, 'id'),
    async (req,res,next)=> {
        try {
        const { id } = req.params;
        const contrato = await service.findOne(id);
        res.json(contrato)    
        } catch (err) {
        next(err)
        }
        
    })


router.post('/', 
    validatorHandler(createContratoSchema, 'body'),
    async (req,res,next)=> {
        try {
            const body = req.body;
            const contrato = await service.create(body)
            res.json(contrato) 
        } catch (err) {
        next(err)
        }

        })

router.patch('/:id', 
    validatorHandler(updateContratoSchema, 'id'),
    async (req,res,next)=> {
        try {
            const { id } = req.params
            const changes = req.body
            const contrato = await service.update(id,changes)
            res.json(contrato)
        } catch (err) {
            next(err)
        }
    })

router.delete('/:id', 
    validatorHandler(deleteContratoSchema, 'id'),
    async (req,res,next)=> {
        try {
            const { id } = req.params
            const contrato = await service.delete(id);
            res.json(contrato)
        } catch (err) {
            next(err)        
        }

    })


module.exports = router;
