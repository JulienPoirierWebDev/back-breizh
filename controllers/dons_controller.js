
const queryFunction = require("../database/queries")
const dons_model = require("../models/dons_model")

const table = "dons";


exports.createOneDons = (req, res, next) => {


    let fields = dons_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllDons = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneDons = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneDons = (req, res, next) => {

    let fields = dons_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, dons_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneDons = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

