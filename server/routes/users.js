const router = require('express').Router();
const { registerValidation, loginValidation } = require('../config/validations');
const userController = require('../controllers/user');

router.post('/register', registerValidation, userController.post.register);
router.post('/login', loginValidation, userController.post.login);

module.exports = router;