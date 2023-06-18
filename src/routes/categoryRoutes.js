const express = require('express');
const categoryController = require('../controllers/categoryContoller');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/categories', validateToken, categoryController.createCategory);
router.get('/categories', validateToken, categoryController.getCategories);

module.exports = router;
