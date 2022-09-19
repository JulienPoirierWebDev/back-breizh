
const queryFunction = require("../database/queries")
const article_model = require("../models/article_model")

const table = "articles";


exports.createOneArticle = (req, res, next) => {


    let fields = article_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {

        let values_string = queryFunction.postValues(fields)
        queryFunction.insertOne(req, res, table, values_string)

    }
}


exports.getAllArticles = (req, res, next) => {

    queryFunction.queryGetAll(res, table)

}

exports.getOneArticle = (req, res, next) => {

    queryFunction.queryGetOne(req, res, table)

}

exports.modifyOneArticle = (req, res, next) => {

    let fields = article_model.fields(req, res)
    if (!fields) {

        res.status(403).send("Contenu interdit")

    } else {


        let values_string = queryFunction.updateValues(fields, article_model.field_name)
        queryFunction.updateOne(req, res, table, values_string)

    }
}

exports.deleteOneArticle = (req, res, next) => {

    queryFunction.deleteOne(req, res, table)
}

