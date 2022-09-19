const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const reseaux_controller = require("../controllers/reseaux_controller");

router.post('/', auth, reseaux_controller.createOneReseaux);

router.get('/', reseaux_controller.getAllReseaux);

router.get('/:id([0-9]{1,})', reseaux_controller.getOneReseaux);

router.put('/:id([0-9]{1,})', auth, reseaux_controller.modifyOneReseaux);

router.delete('/:id', auth, reseaux_controller.deleteOneReseaux);

module.exports = router;