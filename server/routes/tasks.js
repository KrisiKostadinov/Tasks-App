const router = require('express').Router();
const { taskValidator } = require('../config/validations');
const taskController = require('../controllers/task');

router.post('/add', taskValidator, taskController.post.add);

router.get('/details/:id', taskValidator, taskController.get.details);
router.get('/all', taskValidator, taskController.get.all);

module.exports = router;