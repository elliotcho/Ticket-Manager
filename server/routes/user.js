const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/login',  userController.login);
router.post('/register', userController.register);
router.get('/:userId', userController.describeUser);
router.delete('/:userId', userController.deleteUser);
router.post('/invite', userController.inviteUser);

module.exports = router;