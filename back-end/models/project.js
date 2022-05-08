const db = require('../db/connections')


class Register {
    save(data){
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
            }
        })
    }

    update(data){
        console.log("data",data);
        const id = data.id;
        const name = data.name;
        const adress = data.address;
        const city = data.city;
        const state = data.state;
        const zip = data.zip;
        const country = data.country;

        console.log(name,adress,city,state,zip,country,id);

        db.query('UPDATE pacients SET name = ?,adress = ?,city = ?, state = ? ,postalcode = ?,country = ? WHERE id=? ', [name,adress,city,state,zip,country,id], (err, results) => {
            if(err){
                console.log(err)
            }else{
               console.log("sucess");
            }
        })
    }

    delete(id){
        const idpacient = id.id;
        db.query('DELETE FROM pacients WHERE id=? ', [idpacient], (err, results) => {
            if(err){
                console.log(err)
            }else{
               console.log(results);
            }
        })
    }

    


}


module.exports = new Register;

