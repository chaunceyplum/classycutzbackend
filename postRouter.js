import express from 'express'
import mongoose from 'mongoose'
import { Posts } from './mongoo.js'

const postRouter = express.Router()

postRouter.route('/').get(async (req, res) => {
  let posts = await Posts.find({})
  res.send(posts)
})

postRouter.route('/').post(async (req, res) => {
  try {
    const doesPostExist = await Posts.exists({
      email: req.body.email,
    })

    if (doesPostExist) {
      const insertResult = await Posts.updateMany(
        { title: req.body.title },
        { post: req.body.post },
        { updated: new Date() }
      )
      res.json({
        user: insertResult,
        message: `sucessfully updated post at ${insertResult.updated}`,
      })
    } else {
      const insertResult = await Posts.create({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        username: req.body.username,
        console: req.body.console,
        gamertag: req.body.gamertag,
        name: req.body.name,
        timePosted: new Date(),
        updated: new Date(),
        post: req.body.post,
        title: req.body.post,
      })
      res.json({
        user: insertResult,
        message: `sucessfully added ${insertResult.gamertag}'s post`,
      })
    }
  } catch (err) {
    res.json(err)
  }
})
export default postRouter
