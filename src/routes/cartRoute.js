const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

// view cart
router.get('/', cartController.viewCart);

// add to cart
router.post("/add", cartController.addToCart);

// update cart item
router.put('/update/:id', cartController.updateCartItem);

// remove cart item
router.delete('/remove/:id', cartController.removeCartItem);

// clear cart
router.delete('/clear', cartController.clearCart);

module.exports = router;