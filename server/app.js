import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './config/dbConfig'

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


import postRouter from './routers/posts'
import userRouter from './routers/user'
// app.use('/', userRouter)
app.use('/', postRouter)

dbConnection(process.env.MONGOURL)

export default app