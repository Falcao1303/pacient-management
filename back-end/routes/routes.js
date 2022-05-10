const route = require('express').Router()
const Register = require('../models/project')

    route.post('/patient/',(req,res) =>{
        Register.save(req.body);
        res.status(200);
        res.send(
            {dados: req.body,
            message: "sucesso"}
            
        )
    })

    route.get('/patient/getRegisters', (req,res) =>{
        console.log("teste")
        Register.lista(res);
        res.status(200)
        req.end;
    })

    route.put('/patient/update/register/', (req,res) =>{
        Register.update(req.body);
        res.send(req.body)
        res.status(200)
    })

    route.delete('/patient/delete/:id', (req,res) =>{
        const id = req.params;
        Register.delete(id);
        res.status(200)
    })

module.exports = route