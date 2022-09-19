const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.method === "string" &&
        typeof req.body.link_paiement === "string" &&
        typeof req.body.id_event === "number"


) {
        return {
            method: mysql.escape(req.body.method),
            link_paiement: mysql.escape(req.body.link_paiement),
            id_event: mysql.escape(req.body.id_event),


        }
    }
    else {
        return false
        }
}

exports.field_name = ["method", "link_paiement", "id_event"]