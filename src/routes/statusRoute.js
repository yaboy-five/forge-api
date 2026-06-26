const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/', statusController.getStatus);

router.put('/update', statusController.updateStatus);

router.post('/next', statusController.nextStatus);

router.post('/reset', statusController.resetStatus);

module.exports = router;