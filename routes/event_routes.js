const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const event_controller = require("../controllers/event_controller");

router.post('/', auth, event_controller.createOneEvent);

router.get('/', event_controller.getAllEvent);

router.get('/:id([0-9]{1,})', event_controller.getOneEvent);

router.put('/:id([0-9]{1,})', auth, event_controller.modifyOneEvent);

router.delete('/:id', auth, event_controller.deleteOneEvent);

module.exports = router;