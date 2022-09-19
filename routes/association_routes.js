const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const association_controller = require("../controllers/association_controller");

router.post('/', auth, association_controller.createOneAssociation);

router.get('/', association_controller.getAllAssociation);

router.get('/:id([0-9]{1,})', association_controller.getOneAssociation);

router.put('/:id([0-9]{1,})', auth, association_controller.modifyOneAssociation);

router.delete('/:id', auth, association_controller.deleteOneAssociation);

module.exports = router;