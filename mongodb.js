const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://Nishant1002:Nishant1002@cluster0.sgurora.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);

const database = 'database1';
const collection = 'collection1'

async function dbConnect(){
    let result = await client.connect()
    let db = result.db(database)
    return db.collection(collection)
   

}

module.exports = dbConnect;