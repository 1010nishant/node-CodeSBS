const mongoose = require('mongoose')
const express = require('express')

const app = express();
app.use(express.json())
const url = 'mongodb+srv://Nishant1002:Nishant1002@cluster0.sgurora.mongodb.net/database1'

mongoose.connect(url);

const profileSchema = new mongoose.Schema({
    name : String,
    pin_code : Number,
    city : String,
    email : String

});
const Profile = mongoose.model('collection1',profileSchema);

app.post('/create',async (request,response) => {
    
    let data = new Profile(request.body);
    let result = await data.save()
    console.log(result)
    response.send(result)
})

app.get('/list',async (request,response) => {
    let data = await Profile.find()
    response.send(data)

})

app.delete('/delete/:_id',async (request,response) => {
    console.log(request.params);
    let data = await Profile.deleteOne(request.params)
    response.send(data)
})

app.get('/search/:key',async (request,response) => {
    console.log(request.params.key)
    let data = await Profile.find(
        {
            "$or" : [
                {"name" : {$regex:request.params.key}},
                {"city" : {$regex:request.params.key}}
            ]
        }
    )
    response.send(data)
})
app.listen(3000)