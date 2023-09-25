import Express from 'express'
import cutsRouter from './cutsRouter.js'

import cors from 'cors'
import mongoose, { createConnection, Schema } from 'mongoose'
import morgan from 'morgan'
import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'

import userRouter from './userRouter.js'
import signUpRouter from './signUpRouter.js'
import contactRouter from './contactRouter.js'
import postRouter from './postRouter.js'
import NewportContactsRouter from './newportContactRouter.js'

const app = Express()
dotenv.config()

const port = process.env.PORT || 80

app.use(Express.json())
app.use(morgan('tiny'))

app.use(
  cors({
    origin: '*',
  })
)

app.use('/', cutsRouter)

app.use('/user', userRouter)
app.use('/signUp', signUpRouter)
app.use('/contactInfo', contactRouter)
app.use('/newportContactInfo', NewportContactsRouter)
app.use('/posts', postRouter)

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server started on ${port}`)
})

export default app
