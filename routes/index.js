const express = require('express')
const contratosRouter = require ('./contratosRouter')
const pagosRouter = require ('./pagosRouter')


function routerApi(app) {
    const router = express.Router();
    app.use ('/api/v1', router);
    router.use('/contratos', contratosRouter)
    router.use('/pagos', pagosRouter)
}

module.exports = routerApi;