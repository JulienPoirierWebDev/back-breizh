const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.doc_name === "string" &&
        typeof req.body.doc_link === "string"


) {
        return {
            doc_name: mysql.escape(req.body.doc_name),
            doc_link: mysql.escape(req.body.doc_link),
        }
    }
    else {
        return false
        }
}

exports.field_name = ["doc_name", "doc_link"]