
const queryFunction = require("../database/queries")
const paiement_don_model = require("../models/paiement_don_model")

const table = "paiement_don";


exports.createOnePaiement_don = (req, res, next) => {


    let fields = paiement_don_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllPaiement_don = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOnePaiement_don = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.getPaiement_don_custom = (req, res, next) => {

    queryFunction.queryGetOneCustom(req, res, table)

}

exports.modifyOnePaiement_don = (req, res, next) => {

    let fields = paiement_don_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, paiement_don_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOnePaiement_don = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}


exports.deletePaiement_don_custom = (req, res, next) => {

    queryFunction.deleteCustom(req, res, table)
}

