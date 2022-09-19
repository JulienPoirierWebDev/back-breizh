
const queryFunction = require("../database/queries")
const news_model = require("../models/news_model")
const getPool = require("../database/connexion")
const pool= getPool()
const table = "news";


exports.createOneNews = (req, res, next) => {
    console.log("creation demand")

    let fields = news_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {
        let values_string = queryFunction.postValues(fields)
        console.log(values_string)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllNews = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneNews = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.getLastNews =  (req, res, next) => {
console.log("hello")
    let query = "SELECT * FROM "+ table + " ORDER BY id DESC LIMIT 1"
    pool.query( query, (err, result) => {
        if (err) {
            res.status(404).json(err)
        }
        else if (!result[0]) {
            res.status(404).send("No result")
        }
        else if (!err && result) {
            res.status(200).json(result)
        } else {
            res.status(204)
        }


    })

}

exports.modifyOneNews = (req, res, next) => {

    let fields = news_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, news_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneNews = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

