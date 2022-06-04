const express = require('express')
const contratosRouter = require ('./contratosRouter')
const pagosRouter = require ('./pagosRouter')
const usersRouter = require('./usersRouter')
const authRouter = require('./authRouter')


function routerApi(app) {
    const router = express.Router();
    app.use ('/api/v1', router);
    router.use('/contratos', contratosRouter)
    router.use('/pagos', pagosRouter)
    router.use('/users', usersRouter);
    router.use('/auth', authRouter)
}

module.exports = routerApi;