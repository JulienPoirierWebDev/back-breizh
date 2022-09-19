
const queryFunction = require("../database/queries")
const document_model = require("../models/documents_model")

const table = "documents";


exports.createOneDocument = (req, res, next) => {


    let fields = document_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllDocument = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneDocument = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneDocument = (req, res, next) => {

    let fields = document_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, document_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneDocument = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

