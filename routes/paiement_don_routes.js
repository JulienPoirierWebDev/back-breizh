const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const paiement_don_controller = require("../controllers/paiement_don_controller");

router.post('/', auth, paiement_don_controller.createOnePaiement_don);

router.get('/', paiement_don_controller.getAllPaiement_don);

router.get('/:id([0-9]{1,})', paiement_don_controller.getOnePaiement_don);

router.get('/get_custom/:field/:value', paiement_don_controller.getPaiement_don_custom);

router.put('/:id([0-9]{1,})', auth, paiement_don_controller.modifyOnePaiement_don);

router.delete('/:id', auth, paiement_don_controller.deleteOnePaiement_don);

router.delete('/delete_custom/:field/:value', auth, paiement_don_controller.deletePaiement_don_custom);

module.exports = router;