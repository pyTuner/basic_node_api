const dbConnect = require('./config');


const getData = async ()=> {
    let db = await dbConnect('ecom', 'vendors');                 // assign variable to the connection, [needed to handle promise]
    let result = await db.find({}).toArray();   // use find filter to get data from db/collection 
    
    console.log(result);
}

getData();