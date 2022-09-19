
const queryFunction = require("../database/queries")
const image_model = require("../models/image_model")

const table = "images";


exports.createOneImage = (req, res, next) => {


    let fields = image_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllImage = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneImage = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneImage = (req, res, next) => {

    let fields = image_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, image_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneImage = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

