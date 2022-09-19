const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const dons_controller = require("../controllers/dons_controller");

router.post('/', auth, dons_controller.createOneDons);

router.get('/', dons_controller.getAllDons);

router.get('/:id([0-9]{1,})', dons_controller.getOneDons);

router.put('/:id([0-9]{1,})', auth, dons_controller.modifyOneDons);

router.delete('/:id', auth, dons_controller.deleteOneDons);

module.exports = router;