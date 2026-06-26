let menu = [
    {
        id: 1,
        name: "Burger",
        price: 79.99
    },
    {
        id: 2,
        name: "Fries",
        price: 39.99
    },
    {
        id: 3,
        name: "Milkshake",
        price: 34.99
    },
];

// browse all menu items
exports.browseMenu = (req, res) => {
    res.status(200).json(menu);
};

//  get by item id
exports.getMenuItem = (req, res) => {
    const item = menu.find(m => m.id === parseInt(req.params.id));

    if (!item) {
        return res.status(404).json({
            message: "Menu item is not found"
        });
    }

    res.status(200).json(item);
};

// add new item
exports.addMenuItem = (req, res) => {
    const {name, price } = req.body;

    const newItem = {
        id: menu.length + 1,
        name,
        price
    };

    menu.push(newItem);

    res.status(201).json({
        message: "Menu item added successsfully",
        data: newItem
    })
};

// update menu item
exports.updateMenuItem = (req, res) => {
    const item = menu.find(m => m.id === parseInt(req.params.id));

    if (!item) {
        return res.status(404).json({
            message: "Menu Item not found"
        });
    };

    item.name = req.body.name ?? item.name;
    item.price = req.body.price ?? item.price;

    res.status(200).json({
        message: "Menu item updated successfully",
        data: item
    });
};

// delete menu item
exports.deleteMenuItem = (req, res) => {
    const itemIndex = menu.findIndex(
        m => m.id === parseInt(req.params.id)
    );

    if (itemIndex === -1) {
        return res.status(404).json({
            message: "Menu item not found"
        });
    }

    menu.splice(itemIndex, 1);

    res.status(200).json({
        message: "Menu item deleted successfully"
    });
};

