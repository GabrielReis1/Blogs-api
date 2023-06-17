const express = require('express');
const { validateUser } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/user', validateUser, userController.createUser);
router.get('/user', validateToken, userController.getUsers);
router.get('/user/:id', validateToken, userController.getUserById);

module.exports = router;
