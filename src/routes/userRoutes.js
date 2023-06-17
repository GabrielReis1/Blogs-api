const express = require('express');
const { validateUser } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/user', validateUser, userController.createUser);

module.exports = router;
