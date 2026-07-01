const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderingId);

router.put('/update/:id', orderController.updateOrder);

router.delete('/cancel/:id', orderController.cancelOrder);

router.get('/customer/:customerId', orderController.getCustomerOrders);

export default router;