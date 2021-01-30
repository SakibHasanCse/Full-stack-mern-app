import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './config/dbConfig'

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


import postRouter from './routers/posts'
import userRouter from './routers/user'
// app.use('/', userRouter)
app.use('/', postRouter)

dbConnection(process.env.MONGOURL)

export default app