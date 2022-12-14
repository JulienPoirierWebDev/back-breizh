const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const image_controller = require("../controllers/image_controller");

router.post('/', auth, image_controller.createOneImage);

router.get('/', image_controller.getAllImage);

router.get('/:id([0-9]{1,})', image_controller.getOneImage);

router.put('/:id([0-9]{1,})', auth, image_controller.modifyOneImage);

router.delete('/:id', auth, image_controller.deleteOneImage);

module.exports = router;