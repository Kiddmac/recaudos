const express = require ('express');

const router = express.Router();

router.get('/', (req,res)=> {
    res.json([{
        nombreContratista: 'Ronald',
        fechaDeCorte: '8',
        valorPago: '400.000',
        apto: '204',
        valorLetras: 'Cuatrocientos mil pesos',
        mesPagoDesde: 'mayo',
        mesVence: 'junio',
        fechaPago: '30-05-2022'
    }])
})

router.get('/', (req,res)=> {
    res.json({
        Hola: 'por ahora hola!'
    })
})



module.exports = router;