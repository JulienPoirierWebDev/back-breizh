const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.content === "string" &&
        typeof req.body.creation_date === "string" &&
        typeof req.body.update_date === "string"


) {
        return {
            content: mysql.escape(req.body.content),
            creation_date: mysql.escape(req.body.creation_date),
            update_date: mysql.escape(req.body.update_date)
        }
    }
    else {
        return false
        }
}

exports.field_name = ["content", "creation_date", "update_date"]