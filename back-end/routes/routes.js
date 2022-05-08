const route = require('express').Router()
const Register = require('../models/project')

    route.post('/patient/',(req,res) =>{
        Register.save(req.body);
        res.send(
            {dados: req.body,
            message: "sucesso"}
            
        )
    })

    route.get('/patient/getRegisters', (req,res) =>{
        Register.lista(res);
        req.end;
    })

    route.put('/patient/update/register/', (req,res) =>{
        Register.update(req.body);
    })

    route.delete('/patient/delete/:id', (req,res) =>{
        const id = req.params;
        Register.delete(id);
    })

module.exports = route