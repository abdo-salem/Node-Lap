const express = require('express');
const todo = require('./todo');
const user = require('./user');
const authMiddleware = require('../middlewares/authour');

const router = express.Router();

router.use('/todos', todo);
router.use('/users', user);

module.exports = router;
