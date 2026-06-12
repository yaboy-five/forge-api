const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// view cart
router.get('/', viewCart);

// add to cart
router.post('/add', addToCart);

// update cart item
router.put('/update/:id', updateCartItem);

// remove cart item
router.delete('/remove/:id', removeCartItem);

// clear cart
router.delete('/clear', clearCart);

module.exports = router;