const db = require('../db/connections')


class Register {
    save(data){
        console.log(data);
        const name = data.name;
        const adress = data.adress;
        const city = data.city;
        const state = data.state;
        const zip = data.zip;
        const country = data.country;
        db.query('INSERT INTO pacients (name,adress,city,state,postalcode,country) VALUES (?,?,?,?,?,?)', [name,adress,city,state,zip,country], (err, results) => {
            if(err){
                console.log(err)
            }else{
               console.log("sucess");
            }
        })
    }

    
    lista(res){
        const sql = 'SELECT * FROM pacients'

        db.query(sql,(err,response)=>{
            if(err){
                res.status(400).json(err)
            }else{
                res.status(200).json(response)
                res.end;
            }
        })
    }


}


module.exports = new Register;

