import Express from "express"
import cutsRouter from './cutsRouter.js'
import dotenv from 'dotenv'
 
const app = Express()
dotenv.config()
const port = 3000
app.use(Express.json())


app.use('/', cutsRouter)

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`))

export default app