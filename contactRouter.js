import express from 'express'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { Contacts } from './mongoo.js'

const contactRouter = express.Router()

contactRouter.route('/').get(async (req, res) => {
  let contacts = await Contacts.find({})
  res.send(contacts)
})

contactRouter.route('/').post(async (req, res) => {
  try {
    // const contact = {
    //   _id: req.body._id,
    //   email: req.body.email,
    //   name: req.body.name,
    //   password: req.body.password,
    // }
    const contact = await Contacts.findOne({ email: req.body.email })

    if (contact) {
      res.send({
        error: ' email already in use',
      })
    } else {
      // const hashedEmail = await bcrypt.hash(req.body.email, saltRounds)
      const insertResult = await Contacts.create({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: new Date(),
      })
      console.log(
        `New Contact Added ${insertResult.firstName} ${insertResult.lastName}`
      )
      res.send(insertResult)
    }
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

export default contactRouter
