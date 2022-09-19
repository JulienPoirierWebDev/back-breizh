const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.name === "string" &&
        typeof req.body.link_reseau === "string"


) {
        return {
            name: mysql.escape(req.body.name),
            link_reseau: mysql.escape(req.body.link_reseau)
        }
    }
    else {
        return false
        }
}

exports.field_name = ["name", "link_reseau"]