// view cart
exports.viewCart = (req, res) => {
    res.json ({ message: "Viewing Cart"})
};

// add item to cart
exports.addToCart = (req, res) => {
    res.json({ message: "Item added to cart"})
};

// update cart item
exports.updateCartItem = (req, res) => {
    res.json({ message: "Cart item updated"})
};

// remove cart item
exports.removeCartItem = (req, res) => {
    res.json({ message: "Cart item removed"})
};

// clear cart items
exports.clearCart = (req, res) => {
    res.json({ message: "Cart cleared" });
};