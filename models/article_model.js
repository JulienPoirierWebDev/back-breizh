const mysql = require("mysql");

exports.fields = (req, res) => {
    if (
        typeof req.body.title === "string" &&
        typeof req.body.content === "string" &&
        typeof req.body.article_type === "string"
    ) {
        return {
            title: mysql.escape(req.body.title),
            content: mysql.escape(req.body.content),
            article_type: mysql.escape(req.body.article_type)
        }
    }
    else {
        return false
        }
}

exports.field_name = ["title", "content", "article_type"]