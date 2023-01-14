import express from "express";
import { getAllTask, createTask, getSingleTask, deleteTask, updateTask } from "../controllers/taskController.js";

const router = express.Router()

router.route('/tasks').post(createTask).get(getAllTask)
router.route('/tasks/:id').get(getSingleTask).delete(deleteTask).put(updateTask)


export default router