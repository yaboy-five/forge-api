const express = require('express');
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const menuController = require('../controllers/menuController');

// get all menu items
router.get('/browse', auth, menuController.browseMenu);

// get Menu by ID
router.get('/:id', auth,  menuController.getMenuItem);

// create new menuItem
router.post('/add', auth, menuController.addMenuItem);

// update menuItem
router.put('/update/:id', auth, menuController.updateMenuItem);

// delete menuItem
router.delete('/delete/:id', auth, menuController.deleteItem);

export default router