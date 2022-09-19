const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const document_controller = require("../controllers/documents_controller");

router.post('/', auth, document_controller.createOneDocument);

router.get('/', document_controller.getAllDocument);

router.get('/:id([0-9]{1,})', document_controller.getOneDocument);

router.put('/:id([0-9]{1,})', auth, document_controller.modifyOneDocument);

router.delete('/:id', auth, document_controller.deleteOneDocument);

module.exports = router;