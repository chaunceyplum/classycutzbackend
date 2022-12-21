// // import MongoClient from 'mongodb'
// const MongoClient = require('mongodb').MongoClient
// // import assert from 'assert'
// const assert = require('assert')

// const url =
//   'mongodb+srv://peso:chaPeso@cluster0.yy5c5.mongodb.net/myFirstDatabase'
// const dbname = 'myFirstDatabase'

// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   assert.strictEqual(err, null)

//   console.log('Connected correctly to Database')

//   const db = client.db(dbname)

//   // db.createCollection('Users', (err, res) => {
//   //     // assert.strictEqual(err, null)
//   //     console.log('Added Collection', res)

//     const collection = db.collection('Users')

//     collection.insertOne({
//         firstName : 'john',
//         lastName : 'doe',
//         email: "fakeEmail@gmail.com",
//         password: 'Password'
//     }, (err, res) => {
//         // assert.strictEqual(err, null)
//         console.log('Insert Document:', res.ops)

//         collection.find().toArray((err,docs) => {
//             // assert.strictEqual(err,null)
//             console.log('Found Documents: ', docs)

//             client.close()
//         })
//     })
// })
//})
