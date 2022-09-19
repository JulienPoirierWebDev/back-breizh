const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.firstname === "string" &&
        typeof req.body.lastname === "string" &&
        typeof req.body.description === "string" &&
        typeof req.body.poster === "string" &&
        typeof req.body.type_support === "string" &&
        typeof req.body.link_website === "string"

    ) {
        return {
            firstname: mysql.escape(req.body.firstname),
            lastname: mysql.escape(req.body.lastname),
            description: mysql.escape(req.body.description),
            poster: mysql.escape(req.body.poster),
            type_support: mysql.escape(req.body.type_support),
            link_website: mysql.escape(req.body.link_website)
        }
    }
    else {
        return false
    }
}

exports.field_name = ["firstname", "lastname","description", "poster", "type_support", "link_website"]