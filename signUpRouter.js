import express from 'express'
import mongoose from 'mongoose'
import { userSchema, Users, connect, URI } from './mongoo.js'
import bcrypt from 'bcryptjs'

const signUpRouter = express.Router()

const saltRounds = 10

signUpRouter.route('/').post(async (req, res) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds)
    const insertResult = await Users.create({
      _id: mongoose.Types.ObjectId(),
      email: req.body.email,
      password: hashedPwd,
      name: req.body.name,
    })
    console.log(`New User Added ${insertResult.email}`)
    res.send(insertResult)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Username Not Available' })
  }
})

// signUpRouter.route('/').post(async (req, res) => {
//   const user = new Users({
//     _id: mongoose.Types.ObjectId(),
//     email: req.body.email,
//     pass: req.body.password,
//     name: req.body.name,
//   })
//   const userEmail = { email: req.body.email }
//   const emailSearch = Users.findOne({ userEmail }).exec()
//   if (!emailSearch) {
//     res.json({
//       status: 'FAILED',
//       userFound: true,
//       message: "Someone owns an account with the email you've entered",
//     })
//   } else {
//     await user.save().then(
//       res.json({
//         status: 'OK',
//         userFound: false,
//         message: 'Account Created!',
//       })
//     )
//   }

// })

export default signUpRouter
