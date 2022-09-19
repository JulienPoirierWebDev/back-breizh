const mysql = require("mysql");


exports.fields = (req, res) => {
    if (
        typeof req.body.name === "string" &&
        typeof req.body.description === "string" &&
        typeof req.body.city === "string" &&
        typeof req.body.location === "string" &&
        typeof req.body.poster === "string" &&
        typeof req.body.date_event === "string" &&
        typeof req.body.link_map === "string"

) {
        return {
            name: mysql.escape(req.body.name),
            description: mysql.escape(req.body.description),
            city: mysql.escape(req.body.city),
            location: mysql.escape(req.body.location),
            poster: mysql.escape(req.body.poster),
            date_event: mysql.escape(req.body.date_event),
            link_map: mysql.escape(req.body.link_map)


        }
    }
    else {
        return false
        }
}

exports.field_name = ["name", "description", "city", "location", "poster", "date_event", "link_map"]