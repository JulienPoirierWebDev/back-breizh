const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.method === "string" &&
        typeof req.body.link_paiement === "string" &&
        typeof req.body.id_don === "number"


) {
        return {
            method: mysql.escape(req.body.method),
            link_paiement: mysql.escape(req.body.link_paiement),
            id_don: mysql.escape(req.body.id_don),



        }
    }
    else {
        return false
        }
}

exports.field_name = ["method", "link_paiement", "id_don"]