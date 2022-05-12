const express = require ('express');
const routerApi = require ('../routes/index')
const cors = require ('cors')

const { logErrors, errorHandler, boomErrorHandler} = require('../middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json())

//const whiteList = [Colocar aquí los origenes
//que podrán conectarse a la API
// Ej: https://myapp.co, http://localhost:8080]
//const options = {
 //   origin: (origin, cb) => {
//        if(whiteList.includes(origin)){
  //          cb(null, true)
    //    }else {
      //      cb(new Error('No tienes acceso'))
    //    }
  //  }
//}
//app.use(cors())


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
