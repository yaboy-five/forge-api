let currentOrder = {
    id: 1,
    items: [
        {
            id: 1,
            name: "Burger",
            quantity: 2,
            price: 79.99
        },
        {
            id: 2,
            name: "Fries",
            quantity: 1,
            price: 39.99
        }
    ],
    total: 199.97,
    paymentStatus: "Pending",
    orderStatus: "Review"
};

// Review current order
exports.reviewOrder = (req, res) => {
    res.status(200).json(currentOrder);
};

// Process checkout
exports.processCheckout = (req, res) => {

    if (currentOrder.items.length === 0) {
        return res.status(400).json({
            message: "No items available for checkout."
        });
    }

    currentOrder.orderStatus = "Awaiting Payment";

    res.status(200).json({
        message: "Checkout processed successfully.",
        data: currentOrder
    });
};

// Process payment
exports.processPayment = (req, res) => {

    if (currentOrder.paymentStatus === "Paid") {
        return res.status(400).json({
            message: "Order has already been paid."
        });
    }

    currentOrder.paymentStatus = "Paid";
    currentOrder.orderStatus = "Preparing";

    res.status(200).json({
        message: "Payment processed successfully.",
        data: currentOrder
    });
};

// Confirm order
exports.orderConfirmation = (req, res) => {

    if (currentOrder.paymentStatus !== "Paid") {
        return res.status(400).json({
            message: "Payment must be completed before confirmation."
        });
    }

    currentOrder.orderStatus = "Confirmed";

    res.status(200).json({
        message: "Order confirmed successfully.",
        data: currentOrder
    });
};

// Cancel order
exports.cancelCheckout = (req, res) => {

    currentOrder.orderStatus = "Cancelled";

    res.status(200).json({
        message: "Checkout cancelled successfully.",
        data: currentOrder
    });
};