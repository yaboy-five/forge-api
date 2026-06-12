const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

// review order
router.get('/review', reviewOrder);

// process checkout
router.post('/process', processCheckout);

// process payment
router.post('/payment', processPayment);

// order confirmation
router.get('/confirmation', orderConfirmation);

// cancel checkout
router.post('/cancel', cancelCheckout);

module.exports = router;