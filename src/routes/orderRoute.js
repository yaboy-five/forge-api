const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const orderController = require('../controllers/orderController');

router.get('/', getAllOrders);

router.get('/:id', getOrderingId);

router.put('/update/:id', updateOrder);

router.delete('/cancel/:id', cancelOrder);

router.get('/customer/:customerId', getCustomerOrders);

export default router;