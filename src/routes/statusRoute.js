const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const statusController = require('../controllers/statusController');

router.get('/:id', statusController.getOrderStatus);

router.put('/preparing/:id', markPreparing);

router.put('ready/:id', markReady);

router.put('/delivered/:id', markDelivered);

router.put('/cancelled/:id', markCancelled);

export default router;