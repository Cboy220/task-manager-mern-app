import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/connectDB.js'

const app = express()
dotenv.config()

const port = process.env.PORT  || 5000

app.use(express.json())
app.use(cors())

connectDB()

app.get('/', (req, res)=>{
    res.send('Server is running ...🚀')
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`.yellow.bold)
})