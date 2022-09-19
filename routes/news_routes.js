const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const news_controller = require("../controllers/news_controller");

router.post('/', auth, news_controller.createOneNews);

router.get('/', news_controller.getAllNews);

router.get('/:id([0-9]{1,})', news_controller.getOneNews);

router.put('/:id([0-9]{1,})', auth, news_controller.modifyOneNews);

router.delete('/:id', auth, news_controller.deleteOneNews);

router.get('/last_news', news_controller.getLastNews);

module.exports = router;