const express = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middlewares/validateToken');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/post', validateToken, validatePost, postController.createPost);

module.exports = router;
