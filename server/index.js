import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/connectDB.js'
import taskRoutes from './routes/taskRoutes.js'
import Task from './models/taskModel.js'
import asyncHandler from 'express-async-handler';

const app = express()
dotenv.config()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api', taskRoutes)
// app.get('/api/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find()
//         res.status(200).json(tasks)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// app.post('/api', asyncHandler(async (req, res) => {
//     try {
//         const task = await Task.create(req.body)
//         res.status(200).json(task)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
//     console.log(req.body);
//     res.send("task created")
// }))

app.get('/', (req, res) => {
    res.send('Server is running ...🚀')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`.yellow.bold)
})