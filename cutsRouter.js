import express from 'express'
import cuts from './cuts.js'

const cutsRouter = express.Router()


cutsRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/vnd.api+json')
    res.json({cuts})
})


export default cutsRouter