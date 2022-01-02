import express from 'express'
import invisr from "./invisr.js"

const invisrRouter = express.Router()

invisrRouter.route("/")
.get((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/vnd.api+json')
    res.json({invisr})
})


export default invisrRouter