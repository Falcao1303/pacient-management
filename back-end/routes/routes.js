const route = require('express').Router()
const Register = require('../models/project')

    route.post('/pacient/',(req,res) =>{
        Register.save(req.body);
    })

    route.get('/pacient/getRegisters', (req,res) =>{
        Register.lista(res);
        req.end;
    })

module.exports = route