import express from 'express'
import mongoose from 'mongoose'
import { Posts } from './mongoo.js'

const postRouter = express.Router()

postRouter.route('/').get(async (req, res) => {
  let posts = await Posts.find({})
  res.send(posts)
})

export default postRouter
