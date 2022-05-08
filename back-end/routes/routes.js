const route = require('express').Router()
const Register = require('../models/project')

    route.post('/pacient/',(req,res) =>{
        Register.save(req.body);
    })

    route.get('/pacient/getRegisters', (req,res) =>{
        Register.lista(res);
        req.end;
    })

    route.put('/pacient/update/register/', (req,res) =>{
        console.log(req.body);
        Register.update(req.body);
    })

module.exports = route