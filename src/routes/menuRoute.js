const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// get all menu items
router.get('/browse', menuController.browseMenu);

// get Menu by ID
router.get('/:id', menuController.getMenuItem);

// create new menuItem
router.post('/add', menuController.addMenuItem);

// update menuItem
router.put('/update/:id', menuController.updateMenuItem);

// delete menuItem
router.delete('/delete/:id', menuController.deleteItem);

module.exports = router;