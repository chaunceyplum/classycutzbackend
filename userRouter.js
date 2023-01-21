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
    const user = await Users.exists({
      email: req.body.email,
    })

    if (user) {
      const userObj = await Users.findById(user._id)

      //console.log(userObj)
      if (userObj && user) {
        const cmp = await bcrypt.compare(req.body.password, userObj.password)
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions

          res.json(userObj)
        } else {
          res.json({
            loggedIn: false,
            name: '',
            email: '',
            message: 'Username already taken ',
          })
        }
      } else {
        res.json({
          loggedIn: false,
          name: '',
          email: '',
          message: 'Wrong email or password',
        })
      }
    } else {
      res.json({
        loggedIn: false,
        name: '',
        email: '',
        message: 'Wrong email or password',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      loggedIn: false,
      name: '',
      email: '',
      message: 'Wrong email or password',
    })
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
