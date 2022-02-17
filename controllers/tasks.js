const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getTask = (req, res) => {
    res.json({ id: req.params.id });
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateTask = (req, res) => {
    res.send('upadte a task');
}

const deleteTask = (req, res) => {
    res.send('delete a task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}