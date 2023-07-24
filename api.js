const dbConnect = require('./config');
const express = require('express');
const mongodb = require('mongodb')

const port = 3100;
const app = express();

// middleware >> used to get body from request [earlier express versions(before 4.6) uses 'body-paser']
app.use(express.json());

// get api method [read data]
app.get('', async (req, res) => {
    let db = await dbConnect();
    let data = await db.find({}).toArray();
    res.send(data)
    res.end();
})

// push api method [create/insert data]
app.post('', async (req, res) => {
    // res.send(req.body)
    let db = await dbConnect();
    let data = await db.insertMany(req.body)

    console.log(data);
    res.end();
})


// put api method [update data]
app.put('/:title', async (req, res) => {
    let db = await dbConnect();
    // console.warn(req.body)

    let data = await db.updateOne({ title: req.params.title }, { $set: { views: req.body.views } })
    res.send(data)
    res.end();

})


app.delete('/:id', async (req, res) => {
    let db = await dbConnect();
    let data = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});   //'_id' is an objectID, need to access it using instance of 'mongodb.ObjectId()'
    
    res.send(data);
    // res.end()
})

app.listen(port);