import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';

//create a task 
const createTask = asyncHandler(async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body);
    res.send("task created")
})

//get task data
const getAllTask = asyncHandler(async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const getSingleTask = asyncHandler(async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'task not found' })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})
const deleteTask = asyncHandler(async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'task not found' })
        }
        res.status(200).send('task deleted')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

export { createTask, getAllTask, getSingleTask, deleteTask }