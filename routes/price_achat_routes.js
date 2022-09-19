const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const price_achat_controller = require("../controllers/price_achat_controller");

router.post('/', auth, price_achat_controller.createOnePrice);

router.get('/', price_achat_controller.getAllPrice);

router.get('/:id([0-9]{1,})', price_achat_controller.getOnePrice);

router.get('/get_custom/:field/:value', price_achat_controller.getPriceCustom);

router.put('/:id([0-9]{1,})', auth, price_achat_controller.modifyOnePrice);

router.delete('/:id', auth, price_achat_controller.deleteOnePrice);

router.delete('/delete_custom/:field/:value', price_achat_controller.deletePriceCustom);

module.exports = router;