const router = require('express').Router();

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    
    
});
router.post('/login', (req, res) => res.json({ info: 'Hello World!' }));

module.exports = router;