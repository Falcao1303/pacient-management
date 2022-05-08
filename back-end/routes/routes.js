const route = require('express').Router()
const Register = require('../models/project')

    route.post('/pacient/',(req,res) =>{
        Register.save(req.body);
        res.send(
            {dados: req.body,
            message: "sucesso"}
            
        )
    })

    route.get('/pacient/getRegisters', (req,res) =>{
        Register.lista(res);
        req.end;
    })

    route.put('/pacient/update/register/', (req,res) =>{
        Register.update(req.body);
    })

    route.delete('/pacient/delete/:id', (req,res) =>{
        const id = req.params;
        Register.delete(id);
    })

module.exports = route