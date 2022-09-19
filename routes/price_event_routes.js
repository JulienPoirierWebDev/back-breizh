const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")

const price_event_controller = require("../controllers/price_event_controller");

router.post('/', auth, price_event_controller.createOnePrice);

router.get('/', price_event_controller.getAllPrice);

router.get('/:id([0-9]{1,})', price_event_controller.getOnePrice);

router.get('/get_custom/:field/:value', price_event_controller.getPriceCustom);

router.put('/:id([0-9]{1,})', auth, price_event_controller.modifyOnePrice);

router.delete('/:id', auth, price_event_controller.deleteOnePrice);

router.delete('/delete_custom/:field/:value', auth, price_event_controller.deletePriceCustom);

module.exports = router;