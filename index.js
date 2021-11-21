import Express from "express"
import cutsRouter from './cutsRouter.js'
import dotenv from 'dotenv'
import cors from 'cors'
const app = Express()
dotenv.config()
const port = 3000
app.use(Express.json())
app.use(cors({
    origin:'*'
    
}))
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });

app.use('/', cutsRouter)

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`))

export default app