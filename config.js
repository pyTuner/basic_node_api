const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url);
const database = 'youtube';



const dbConnect = async ()=> {
    let result = await client.connect();  // connect to the mongo client
    let db = result.db(database);         // fetch data from the database[select database from the server]
    let collection = db.collection('videos') // fetch data from the collection [select collection from the db]
    return collection; // return the result data from collection
}

module.exports = dbConnect;  //export module
// dbConnect();