const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")

const articles_controller = require("../controllers/articles_controller");

router.post('/', auth, articles_controller.createOneArticle);

router.get('/', articles_controller.getAllArticles);

router.get('/:id([0-9]{1,})', articles_controller.getOneArticle);

router.put('/:id([0-9]{1,})',  auth, articles_controller.modifyOneArticle);

router.delete('/:id',  auth, articles_controller.deleteOneArticle);

module.exports = router;