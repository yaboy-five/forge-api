let cart = {
    items: [],
    total: 0
};

// helper: recalculate total
const calculateTotal = () => {
    cart.total = cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
};

// view cart
exports.viewCart = (req, res) => {
    res.status(200).json(cart);
};

// add item to cart
exports.addToCart = (req, res) => {
    const { id, name, price, quantity } = req.body;

    if (!id || !name || !price) {
        return res.status(400).json({
            message: "Missing product details"
        });
    }

    const existingItem = cart.items.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += quantity || 1;
    } else {
        cart.items.push({
            id,
            name,
            price,
            quantity: quantity || 1
        });
    }

    calculateTotal();

    res.status(201).json({
        message: "Item added to cart",
        data: cart
    });
};

// update quantity
exports.updateCartItem = (req, res) => {
    const item = cart.items.find(i => i.id === parseInt(req.params.id));

    if (!item) {
        return res.status(404).json({
            message: "Item not found in cart"
        });
    }

    item.quantity = req.body.quantity ?? item.quantity;

    calculateTotal();

    res.status(200).json({
        message: "Cart updated",
        data: cart
    });
};

// remove item
exports.removeFromCart = (req, res) => {
    const index = cart.items.findIndex(
        i => i.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    cart.items.splice(index, 1);
    calculateTotal();

    res.status(200).json({
        message: "Item removed from cart",
        data: cart
    });
};

// clear cart
exports.clearCart = (req, res) => {
    cart.items = [];
    cart.total = 0;

    res.status(200).json({
        message: "Cart cleared",
        data: cart
    });
};