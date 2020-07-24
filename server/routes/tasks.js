const router = require('express').Router();
const { taskValidator } = require('../config/validations');
const taskController = require('../controllers/task');

router.post('/add', taskValidator, taskController.post.add);

router.get('/:id', taskValidator, taskController.get.details);
router.delete('/:id', taskValidator, taskController.del.dismiss);
router.get('/', taskValidator, taskController.get.all);

module.exports = router;