const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.name === "string" &&
        typeof req.body.description === "string"

) {
        return {
            name: mysql.escape(req.body.name),
            description: mysql.escape(req.body.description)
        }
    }
    else {
        return false
        }
}

exports.field_name = ["name", "description"]