import Express from "express"
import cutsRouter from './cutsRouter.js'
import invisrRouter from './invisrRouter.js'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan'
const app = Express()
dotenv.config()

const port = 3000

app.use(Express.json())
app.use(morgan('tiny'));

app.use(cors({
    origin:'*'   
}))

app.use('/', cutsRouter)
app.use('/invisr', invisrRouter)

// const uri = process.env.URI
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
// const connection = mongoose.connection
// connection.once('open', () => {
//     console.log("MongoDB database connection established sucessfully")
// })

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`))

export default app