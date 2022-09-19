
const queryFunction = require("../database/queries")
const association_model = require("../models/association_model")

const table = "association";


exports.createOneAssociation = (req, res, next) => {


    let fields = association_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllAssociation = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneAssociation = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneAssociation = (req, res, next) => {

    let fields = association_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, association_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneAssociation = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

