const route = require('express').Router()

    route.get('/',async  (req,res) =>{
    res.send(
        "Hello World"
    )         
    })

module.exports = route