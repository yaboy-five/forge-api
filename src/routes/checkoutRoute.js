const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

// review order
router.get('/review', checkoutController.reviewOrder);

// process checkout
router.post('/process', checkoutController.processCheckout);

// process payment
router.post('/payment', checkoutController.processPayment);

// order confirmation
router.get('/confirmation', checkoutController.orderConfirmation);

// cancel checkout
router.post('/cancel', checkoutController.cancelCheckout);

module.exports = router;