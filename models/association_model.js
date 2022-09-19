const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.name === "string" &&
        typeof req.body.content === "string"


) {
        return {
            name: mysql.escape(req.body.name),
            content: mysql.escape(req.body.content),



        }
    }
    else {
        return false
        }
}

exports.field_name = ["name", "content"]