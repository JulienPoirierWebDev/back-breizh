const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.name === "string" &&
        typeof req.body.alt === "string"

) {
        return {
            name: mysql.escape(req.body.name),
            alt: mysql.escape(req.body.alt)
        }
    }
    else {
        return false
        }
}

exports.field_name = ["name", "alt"]