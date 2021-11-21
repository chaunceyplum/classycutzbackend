import Express from "express"
import cutsRouter from './cutsRouter.js'


const app = Express()
const port = 3000
app.use(Express.json())

app.use('/', cutsRouter)

app.listen(port, () => console.log(`listening on port ${port}`))

export default app