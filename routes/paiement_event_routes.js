const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const paiement_event_controller = require("../controllers/paiement_event_controller");

router.post('/', auth, paiement_event_controller.createOnePaiement_event);

router.get('/', paiement_event_controller.getAllPaiement_event);

router.get('/:id([0-9]{1,})', paiement_event_controller.getOnePaiement_event);

router.get('/get_custom/:field/:value', paiement_event_controller.getPaiement_event_custom);

router.put('/:id([0-9]{1,})', auth, paiement_event_controller.modifyOnePaiement_event);

router.delete('/delete_custom/:field/:value', paiement_event_controller.deletePaiement_event_Custom);

router.delete('/:id([0-9]{1,})', auth, paiement_event_controller.deleteOnePaiement_event);


module.exports = router;