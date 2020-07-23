const router = require('express').Router();
const { taskValidator } = require('../config/validations');
const taskController = require('../controllers/task');

router.post('/add', taskValidator, taskController.post.add);

module.exports = router;