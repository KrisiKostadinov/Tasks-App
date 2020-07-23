const router = require('express').Router();
const { registerValidation, loginValidation } = require('../config/validations');

router.post('/register', registerValidation, (req, res) => {
    const { email, password } = req.body;
    res.json({ email, password });
});
router.post('/login', loginValidation, (req, res) => res.json({ info: 'Hello World!' }));

module.exports = router;