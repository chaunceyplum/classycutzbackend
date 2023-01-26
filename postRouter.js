import express from 'express'
import mongoose from 'mongoose'
import { Posts } from './mongoo.js'

const postRouter = express.Router()

postRouter.route('/').get(async (req, res) => {
  let posts = await Posts.find({})
  res.send(posts)
})

postRouter.route('/').post(async (req, res) => {
  // let user = {
  //   email: req.body.email,
  // }

  // let posts = await Posts.find({})

  // for (let i = 0; i > posts.length; i++) {
  //   let currentUserEmail = i.email
  //   if ((user.email = currentUserEmail)) {
  //     res.json({
  //       message: 'you made a post already',
  //     })
  //   } else {
  //     const insertResult = await Posts.create({
  //       _id: mongoose.Types.ObjectId(),
  //       email: req.body.email,
  //       username: req.body.username,
  //       console: req.body.console,
  //       gamertag: req.body.gamertag,
  //       name: req.body.name,
  //       timePosted: new Date(),
  //       updated: new Date(),
  //       post: req.body.post,
  //     })
  //     res.json({
  //       user: insertResult,
  //       message: `sucessfully added ${insertResult.gamertag}'s post`,
  //     })
  //   }
  // }

  try {
    const doesPostExist = await Posts.exists({
      email: req.body.email,
    })

    if (doesPostExist) {
      res.json({
        message: ' you have an active post already',
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
