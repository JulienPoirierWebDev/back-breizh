const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const paiement_achat_controller = require("../controllers/paiement_achat_controller");

router.post('/', auth, paiement_achat_controller.createOnePaiement_achat);

router.get('/', paiement_achat_controller.getAllPaiement_achat);

router.get('/:id([0-9]{1,})', paiement_achat_controller.getOnePaiement_achat);

router.get('/get_custom/:field/:value', paiement_achat_controller.getPaiement_achat_custom);

router.put('/:id([0-9]{1,})', auth, paiement_achat_controller.modifyOnePaiement_achat);

router.delete('/:id([0-9]{1,})', auth, paiement_achat_controller.deleteOnePaiement_achat);

router.delete('/delete_custom/:field/:value', auth, paiement_achat_controller.deletePaiement_achat_custom);


module.exports = router;