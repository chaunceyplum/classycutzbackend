import express from 'express'
import mongoose, { createConnection, Schema } from 'mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb'

export const uri =
  'mongodb+srv://peso:chaPeso@cluster0.yy5c5.mongodb.net/myFirstDatabase'

export const connect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

connect.then(
  () => console.log('Connected correctly to server'),
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

export default { Users, userSchema, connect, uri }
