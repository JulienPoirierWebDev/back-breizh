
const queryFunction = require("../database/queries")
const event_model = require("../models/achat_model")

const table = "achat";


exports.createOneAchat = (req, res, next) => {


    let fields = event_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllAchat = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneAchat = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneAchat = (req, res, next) => {

    let fields = event_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {
        let values_string = queryFunction.updateValues(fields, event_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneAchat = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

