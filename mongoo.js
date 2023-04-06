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

export const newportContactSchema = new mongoose.Schema(
  {
    _id: String,
    firstName: String,
    lastName: String,
    date: Date,
    email: String,
  },
  {
    collection: 'newportContactSchema',
  }
)
export const NewportContacts = mongoose.model(
  'NewportContactInfo',
  newportContactSchema
)
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
export const postSchema = new mongoose.Schema(
  {
    _id: String,
    email: String,
    username: String,
    console: String,
    gamertag: String,
    likedBy: Array,
    timePosted: Date,
    updated: Date,
    post: String,
    title: String,
  },
  {
    collection: 'userPosts',
  }
)
export const Posts = mongoose.model('userPosts', postSchema)

export default { Contacts, Users, userSchema, connect, URI }
