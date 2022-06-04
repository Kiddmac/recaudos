const express = require ('express');
const ContratosService = require ('../services/contratosService.js')
const passport = require('passport')

const validatorHandler = require ('../middlewares/validatorHandler');
const {createContratoSchema, queryContratoSchema, updateContratoSchema, getContratoSchema, deleteContratoSchema} = require('../schemas/contratosSchema')

const router = express.Router();
const service = new ContratosService();

router.get('/',
passport.authenticate('jwt', {session: false}),
validatorHandler(queryContratoSchema, 'query'),
async (req,res,next)=> {
    try {
        const contrato = await service.find(req.query);
        res.json(contrato)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', 
    passport.authenticate('jwt', {session: false}),
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
    passport.authenticate('jwt', {session: false}),
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
    passport.authenticate('jwt', {session: false}),
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
    passport.authenticate('jwt', {session: false}), 
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
