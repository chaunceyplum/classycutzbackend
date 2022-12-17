import express from 'express'
import mongoose from 'mongoose'
import { userSchema, Users, connect, uri } from './mongoo.js'

const signUpRouter = express.Router()

signUpRouter.route('/').post(async (req, res) => {
  const user = new Users({
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    pass: req.body.password,
    name: req.body.name,
  })
  const userEmail = { email: req.body.email }
  const emailSearch = Users.findOne({ userEmail }).exec()
  if (!emailSearch) {
    res.json({
      status: 'FAILED',
      userFound: true,
      message: "Someone owns an account with the email you've entered",
    })
  } else {
    await user.save().then(
      res.json({
        status: 'OK',
        userFound: false,
        message: 'Account Created!',
      })
    )
  }
  //
  // !Users.findOne({ userEmail }).exec()
  // !user
  //   ? res.json({
  //       status: 'FAILED',
  //       userFound: true,
  //       message: "Someone owns an account with the email you've entered",
  //     })
  //   : await user.save()
})

export default signUpRouter
