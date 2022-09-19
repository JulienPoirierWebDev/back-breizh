const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const support_controller = require("../controllers/support_controller");

router.post('/', auth, support_controller.createOneSupport);

router.get('/', support_controller.getAllSupport);

router.get('/:id([0-9]{1,})', support_controller.getOneSupport);

router.put('/:id([0-9]{1,})', auth, support_controller.modifyOneSupport);

router.delete('/:id', auth, support_controller.deleteOneSupport);

module.exports = router;