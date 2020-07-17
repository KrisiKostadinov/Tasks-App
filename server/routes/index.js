const router = require('express').Router();

router.use('/', (req, res) => res.json({ info: 'Hello World!' }));

module.exports = router;