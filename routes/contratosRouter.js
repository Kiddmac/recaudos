const express = require ('express');
const ContratosService = require ('../services/contratosService.js')

const router = express.Router();
const service = new ContratosService();

router.get('/', (req,res)=> {
    const contratistas = service.find();
    res.json(contratistas)
})

router.get('/:id', (req,res)=> {
    const { id } = req.params;
    const contratista = service.findOne(id);
    res.json(contratista)
})


router.post('/', (req,res)=> {
    const body = req.body;
        res.json({
            message: 'created',
            data: body
        }) 
    })

router.patch('/:id', (req,res)=> {
    const { id } = req.params
    const body = req.body
    res.json({
        message: 'update',
        data: body,
        id,
        
    })
})

router.delete('/:id', (req,res)=> {
    const { id } = req.params
    const body = req.body
    res.json({
        message: 'delete',
        data: body,
        id,
    })
})


module.exports = router;
