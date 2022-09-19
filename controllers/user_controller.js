const User = require('../models/user_model');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const queryFunction = require("../database/queries");
const getPool = require("../database/connexion");
const RowDataPacket = require("mysql/lib/protocol/packets/RowDataPacket");

const pool= getPool()


const table = "users";


exports.signup = (req, res, next) => {
    console.log(req.body)

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let fields = User.fields(req, res, hash)
            console.log(fields)

            if (!fields) {
                res.status(403).send("Contenu interdit")
            } else {

                let values_string = queryFunction.postValues(fields)
                console.log(values_string)
                queryFunction.insertOne(req, res, table, values_string)

            }

})
}

exports.login = (req, res, next) => {

    let query = "SELECT * FROM "+ table +" WHERE login ="+  pool.escape(req.body.login)
    pool.query( query, (err, result) => {
        if (err) {
            res.status(404).json(err)
        }
        else if (!result[0]) {
            console.log(result)
            res.status(404).json({error:"Utilisateur inconnu"})
        }
        else if (!err && result) {
            bcrypt.compare(req.body.password, result[0].password)
                .then(valid => {
                    if(!valid) {
                        return res.status(401).json({error: 'Mot de passe incorrect !'});
                    }
                    console.log("ca")
                    res.status(200).json({
                        userId: result[0]['id'],
                        token: jwt.sign(
                            { userId: result[0]['id']},
                            process.env.PRIVATE_KEY,
                            { expiresIn:'24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({error}))

        }

    })


}

exports.authenticated = (req, res, next) => {
    try{
    let token = req.body.token;
    const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);
    res.json({token:token, decoded:decodedToken})

    if(decodedToken) {
        res.status(200).json({message:"valid"})
    } else {
        res.status(401).json({message:"invalid"})
    }
    }catch (err) {
        res.status(500).json({
            error: true,
            err: err
        })
    }
}