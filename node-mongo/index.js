import MongoClient from 'mongodb'
import assert from 'assert'

const url= 'mongodb://localhost:27017'
const dbname = 'classycutz'

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
    assert.strictEqual(err,null)

    console.log('Connected correctly to server')

    const db = client.db(dbname)

    db.createCollection('Users')
})