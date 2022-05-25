const router = require('express').Router();
const TaskCtrl = require('../controllers/taskCtrl');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin')


router.route('/task')
    .get(TaskCtrl.getTasks)
    .post(auth, authAdmin, TaskCtrl.createTask)

router.route('task/:id')
    .delete(auth, authAdmin, TaskCtrl.deleteTask)
    .put(auth, authAdmin, TaskCtrl.updateTask)

module.exports = router