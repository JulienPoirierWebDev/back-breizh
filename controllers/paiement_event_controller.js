
const queryFunction = require("../database/queries")
const paiement_event_model = require("../models/paiement_event_model")

const table = "paiement_event";


exports.createOnePaiement_event = (req, res, next) => {


    let fields = paiement_event_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllPaiement_event = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOnePaiement_event = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.getPaiement_event_custom = (req, res, next) => {

    queryFunction.queryGetCustom(req, res, table)

}


exports.modifyOnePaiement_event = (req, res, next) => {

    let fields = paiement_event_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, paiement_event_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOnePaiement_event = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

exports.deletePaiement_event_Custom = (req, res, next) => {

    queryFunction.deleteCustom(req, res, table)
}
