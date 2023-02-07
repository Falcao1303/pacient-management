const db = require('../db/connections')

class Register {
    save(data){
        const name = data.name;
        const email = data.email
        const birthdate = data.datebirth;
        const adress = data.adress;
        const city = data.city;
        const state = data.state;
        const zip = data.zip;
        const country = data.country;
        db.query('INSERT INTO clinic.patients (name,email,datebirth,adress,city,state,postalcode,country) VALUES (?,?,?,?,?,?,?,?)', [name,email,birthdate,adress,city,state,zip,country], (err, results) => {
            if(err){
                console.log(err)
            }else{
               console.log("sucess");
            }
        })
    }

    
    lista(res){
        const sql = 'SELECT id,name,email,DATE_FORMAT(datebirth, "%Y-%m-%d") as datebirth,adress,city,state,postalcode,country FROM clinic.patients'

        db.query(sql,(err,response)=>{
            if(err){
                res.status(400).json(err)
            }else{
                res.status(200).json(response)
            }
        })
    }

    update(data){
        const id = data.id;
        const name = data.name;
        const email = data.email;
        const birthdate = data.datebirth;
        const address = data.address;
        const city = data.city;
        const state = data.state;
        const zip = data.zip;
        const country = data.country;
        db.query('UPDATE clinic.patients SET name = ?,email = ?,datebirth = ? ,adress = ?,city = ?, state = ? ,postalcode = ?,country = ? WHERE id=? ', [name,email,birthdate,address,city,state,zip,country,id], (err, results) => {
            if(err){
                console.log(err)
            }else{
               console.log("sucess");
            }
        })
    }

    delete(id,res){
        const idpacient = id.id;
        db.query('DELETE FROM clinic.patients WHERE id=? ', [idpacient], (err, results) => {
            if (err) return res.json(err);
            return res.status(200).json("Usuário deletado com sucesso.");
        })
    }

    


}


module.exports = new Register;
