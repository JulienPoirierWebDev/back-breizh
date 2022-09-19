
const queryFunction = require("../database/queries")
const support_model = require("../models/support_model")

const table = "supports";


exports.createOneSupport = (req, res, next) => {


    let fields = support_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllSupport = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneSupport = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneSupport = (req, res, next) => {

    let fields = support_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, support_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneSupport = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

