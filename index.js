import Express from 'express'
import cutsRouter from './cutsRouter.js'
import invisrRouter from './invisrRouter.js'

import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { createConnection, Schema } from 'mongoose'
import morgan from 'morgan'
import { MongoClient, ServerApiVersion } from 'mongodb'

import axios from 'axios'
import userRouter from './userRouter.js'
import signUpRouter from './signUpRouter.js'

const app = Express()
dotenv.config()

const port = 3000

app.use(Express.json())
app.use(morgan('tiny'))

app.use(
  cors({
    origin: '*',
  })
)

app.use('/', cutsRouter)
app.use('/invisr', invisrRouter)
app.use('/user', userRouter)
app.use('/signUp', signUpRouter)

app.listen(1337, () => {
  console.log('server started on 1337')
})

export default app
