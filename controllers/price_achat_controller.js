
const queryFunction = require("../database/queries")
const price_model = require("../models/price_achat_model")

const table = "price_achat";


exports.createOnePrice = (req, res, next) => {


    let fields = price_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllPrice = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOnePrice = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.getPriceCustom = (req, res, next) => {

    queryFunction.queryGetCustom(req, res, table)

}


exports.modifyOnePrice = (req, res, next) => {

    let fields = price_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, price_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOnePrice = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

exports.deletePriceCustom = (req, res, next) => {

    queryFunction.deleteCustom(req, res, table)

}

