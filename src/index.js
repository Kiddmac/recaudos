const express = require ('express');
const routerApi = require ('../routes/index')

const { logErrors, errorHandler, boomErrorHandler} = require('../middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req,res)=> {
    res.send('Server on express! 3000. Welcome___')
})

routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=> {
    console.log('Port' + port)
})
