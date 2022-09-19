const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.categ_name === "string" &&
        typeof req.body.categ_descr === "string" &&
        typeof req.body.id_event === "number" &&
        typeof req.body.price === "number"



    ) {
        return {
            categ_name: mysql.escape(req.body.categ_name),
            categ_descr: mysql.escape(req.body.categ_descr),
            id_event: mysql.escape(req.body.id_event),
            price: mysql.escape(req.body.price),




        }
    }
    else {
        return false
        }
}

exports.field_name = ["categ_name", "categ_descr", "id_event", "price"]