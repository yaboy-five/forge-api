const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const cartController = require('../controllers/cartController');

// view cart
router.get('/', auth, cartController.viewCart);

// add to cart
router.post('/add', auth, cartController.addToCart);

// update cart item
router.put('/update/:id', auth, cartController.updateCartItem);

// remove cart item
router.delete('/remove/:id', auth, cartController.removeCartItem);

// clear cart
router.delete('/clear', auth, cartController.clearCart);

export default router;