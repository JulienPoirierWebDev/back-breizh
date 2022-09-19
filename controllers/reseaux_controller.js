
const queryFunction = require("../database/queries")
const reseaux_model = require("../models/reseaux_model")

const table = "reseaux";


exports.createOneReseaux = (req, res, next) => {


    let fields = reseaux_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllReseaux = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneReseaux = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneReseaux = (req, res, next) => {

    let fields = reseaux_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, reseaux_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneReseaux = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

