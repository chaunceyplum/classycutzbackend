import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
export const URI = process.env.URI
export const connect = mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

connect.then(
  () => console.log('Connected correctly to database'),
  (err) => console.log(err)
)
export const contactSchema = new mongoose.Schema(
  {
    _id: String,
    firstName: String,
    lastName: String,
    date: Date,
    email: String,
  },
  {
    collection: 'contactInfo',
  }
)
export const Contacts = mongoose.model('ContactInfo', contactSchema)
export const userSchema = new mongoose.Schema(
  {
    _id: String,
    email: String,
    username: String,
    console: String,
    gamertag: String,
    name: String,
    password: String,
    date: Date,
    message: String,
  },
  { collection: 'userData' }
)

export const Users = mongoose.model('UserData', userSchema)

export default { Contacts, Users, userSchema, connect, URI }
