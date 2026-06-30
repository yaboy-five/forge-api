const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
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

export default router