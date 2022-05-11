const express = require ('express');
const routerApi = require ('../routes/index')

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req,res)=> {
    res.send('Server on express! 3000. Welcome___')
})

routerApi(app)

app.listen(port, ()=> {
    console.log('Port' + port)
})
