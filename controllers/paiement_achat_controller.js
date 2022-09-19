
const queryFunction = require("../database/queries")
const paiement_achat_model = require("../models/paiement_achat_model")

const table = "paiement_achat";


exports.createOnePaiement_achat = (req, res, next) => {


    let fields = paiement_achat_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllPaiement_achat = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOnePaiement_achat = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.getPaiement_achat_custom = (req, res, next) => {

    queryFunction.queryGetCustom(req, res, table)

}

exports.modifyOnePaiement_achat = (req, res, next) => {

    let fields = paiement_achat_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, paiement_achat_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOnePaiement_achat = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

exports.deletePaiement_achat_custom = (req, res, next) => {

    queryFunction.deleteCustom(req, res, table)
}
