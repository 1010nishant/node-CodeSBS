const express = require('express')
const dbConnect = require('./mongodb')
const app = express();

app.use(express.json())

app.get('/', async (request,response) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data)
    response.send(data)
    
})


//post method using mongodb module
app.post('/',async (request,response) => {
    // console.log()
    response.send(request.body)
})

app.listen(3000);


