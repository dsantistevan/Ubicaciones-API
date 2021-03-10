var express = require('express');
var router = express.Router();

const ubicacionController = require("../controllers/ubicacion.controller.js");

router.get('/', ubicacionController.findAll);
router.get('/:id', ubicacionController.findOne);

module.exports = router;