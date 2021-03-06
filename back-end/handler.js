const serverless = require('serverless-http');
const express = require('express')
const connection = require('./db/connections')
const cors = require('cors');



const app = express();
app.use(express.json())
app.use(cors());

app.use(express.urlencoded({ extended: true}))

const route = require('./routes/routes')
app.use('/api/', route)

connection.getConnection(erro =>{
    if(erro){
        console.log("erro ao conectar db!")
    }else{
        console.log("db conectado!")
    }
  })

app.listen(3001,() => console.log('server started'))

module.exports.backend = serverless(app);