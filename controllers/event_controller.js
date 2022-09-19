
const queryFunction = require("../database/queries")
const event_model = require("../models/event_model")

const table = "event";


exports.createOneEvent = (req, res, next) => {


    let fields = event_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllEvent = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneEvent = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneEvent = (req, res, next) => {

    let fields = event_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, event_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneEvent = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

