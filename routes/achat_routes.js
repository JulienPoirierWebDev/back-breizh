const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const achat_controller = require("../controllers/achat_controller");

router.post('/', auth, achat_controller.createOneAchat);

router.get('/', achat_controller.getAllAchat);

router.get('/:id([0-9]{1,})', achat_controller.getOneAchat);

router.put('/:id([0-9]{1,})', auth, achat_controller.modifyOneAchat);

router.delete('/:id', auth, achat_controller.deleteOneAchat);

module.exports = router;