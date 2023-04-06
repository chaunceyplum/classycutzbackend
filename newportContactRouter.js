import express from 'express'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { NewportContacts } from './mongoo.js'

const NewportContactsRouter = express.Router()

NewportContactsRouter.route('/').get(async (req, res) => {
  let contacts = await NewportContacts.find({})
  res.send(contacts)
})

NewportContactsRouter.route('/').post(async (req, res) => {
  try {
    const contact = await NewportContacts.findOne({ email: req.body.email })

    if (contact) {
      res.send({
        error: ' email already in use',
      })
    } else {
      // const hashedEmail = await bcrypt.hash(req.body.email, saltRounds)
      const insertResult = await NewportContacts.create({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        firstName: req.body.firstName,
        message: req.body.message,
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

export default NewportContactsRouter
