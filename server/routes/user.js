const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/login',  userController.login);
router.post('/register', userController.register);

router.get('/describe', userController.describeUser)

router.delete('/:userId', userController.deleteUser);

module.exports = router;