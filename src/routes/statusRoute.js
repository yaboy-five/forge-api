const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/:id', statusController.getOrderStatus);

router.put('/preparing/:id', markPreparing);

router.put('ready/:id', markReady);

router.put('/delivered/:id', markDelivered);

router.put('/cancelled/:id', markCancelled);

module.exports = router;