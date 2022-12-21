import express from 'express'
import mongoose, { createConnection, Schema } from 'mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb'
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
export const userSchema = new mongoose.Schema(
  {
    _id: String,
    email: String,
    name: String,
    password: String,
  },
  { collection: 'userData' }
)
export const Users = mongoose.model('UserData', userSchema)

export default { Users, userSchema, connect, URI }
