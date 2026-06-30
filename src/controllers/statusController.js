let orderStatus = {
    orderId: 1,
    status: "Pending",
    lastUpdated: new Date().toISOString()
};

// get status
exports.getStatus = (req, res) => {
    res.status(200).json(orderStatus);
};

// update status (simulate progression)
exports.updateStatus = (req, res) => {
    const { status } = req.body;

    const allowedStatuses = [
        "Pending",
        "Preparing",
        "Ready",
        "Delivered",
        "Cancelled"
    ];

    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            message: "Invalid status update"
        });
    }

    orderStatus.status = status;
    orderStatus.lastUpdated = new Date().toISOString();

    res.status(200).json({
        message: "Order status updated",
        data: orderStatus
    });
};

// auto progress (simulate kitchen flow)
exports.nextStatus = (req, res) => {

    const flow = ["Pending", "Preparing", "Ready", "Delivered"];

    const currentIndex = flow.indexOf(orderStatus.status);

    if (currentIndex === -1 || currentIndex === flow.length - 1) {
        return res.status(400).json({
            message: "Cannot advance status further"
        });
    }

    orderStatus.status = flow[currentIndex + 1];
    orderStatus.lastUpdated = new Date().toISOString();

    res.status(200).json({
        message: "Status advanced",
        data: orderStatus
    });
};

// reset status
exports.resetStatus = (req, res) => {
    orderStatus.status = "Pending";
    orderStatus.lastUpdated = new Date().toISOString();

    res.status(200).json({
        message: "Status reset",
        data: orderStatus
    });
};