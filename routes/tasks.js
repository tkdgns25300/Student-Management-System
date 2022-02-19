const express = require('express');
const router = express.Router();

// middleware
const { getAllTasks, getTask, createTask, updateTask, deleteTask, editTask } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask);

module.exports = router;
