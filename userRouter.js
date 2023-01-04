import express from 'express'
import mongoose, { createConnection, Schema } from 'mongoose'
import { userSchema, Users, connect, URI } from './mongoo.js'
import bcrypt from 'bcryptjs'
const userRouter = express.Router()

//routing
const saltRounds = 10
//sends a list of all users
userRouter.route('/').get(async (req, res, next) => {
  // Users.find({}, async(data, err) => {
  //    data ? console.log(data) : console.log(err)

  // })
  let users = await Users.find({})
  res.send(users)
  // let data = 'welcome to /user'
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/vnd.api+json')
  // res.send(data)
})
// checks if User is in database
userRouter.route('/').post(async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email })
    console.log(user)
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password)
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions
        res.json({
          LoggedIn: true,
          loading: false,
          error: null,
          auth: 'OK',
          email: `${req.body.email}`,
          name: `${req.body.name}`,
        })
      } else {
        res.send('Wrong username or password.')
      }
    } else {
      res.send('Wrong username or password.')
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server error Occured')
  }
})
// userRouter.route('/').post((req, res) => {
//   let user = Users.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   }).exec()

//   user
//     ? res.json({
//         status: 'OK',
//         userFound: 'true',
//         message: ' Found User!',
//       })
//     : res.json({
//         status: 'BAD',
//         userFound: false,
//         message: ' Cannot find User!',
//       })
// })
//updates fields
userRouter.route('/').put((req, res) => {
  let update = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  }
  let user = Users.findOneAndUpdate({ email: req.body.email }, update, {
    new: true,
  }).exec()

  user
    ? res.json({
        status: 'OK',
        userFound: 'true',
        message: ' User Updated!',
      })
    : res.json({
        status: 'BAD',
        userFound: false,
        message: ' Cannot find User!',
      })
})

userRouter.route('/').delete((req, res) => {
  let update = {
    email: req.body.email,
  }
  let user = Users.findOneAndDelete(update).exec()

  user
    ? res.json({
        status: 'OK',
        userFound: 'true',
        message: ' User Deleted!',
      })
    : res.json({
        status: 'BAD',
        userFound: false,
        message: ' Cannot find User!',
      })
})

export default userRouter
