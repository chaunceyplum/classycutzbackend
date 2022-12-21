import express from 'express'
import mongoose, { createConnection, Schema } from 'mongoose'
import { userSchema, Users, connect, URI } from './mongoo.js'

const userRouter = express.Router()

//routing

//sends a list of all users
userRouter.route('/').get((req, res, next) => {
  Users.find({}, (data, err) => {
    data ? console.log(data) : console.log(err)
  })
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/vnd.api+json')
  res.json({ data })
})
// checks if User is in database
userRouter.route('/').post((req, res) => {
  let user = Users.findOne({
    email: req.body.email,
    password: req.body.password,
  }).exec()

  user
    ? res.json({
        status: 'OK',
        userFound: 'true',
        message: ' Found User!',
      })
    : res.json({
        status: 'BAD',
        userFound: false,
        message: ' Cannot find User!',
      })
})
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
