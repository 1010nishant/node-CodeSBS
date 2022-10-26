const mongoose = require('mongoose');

const url = 'mongodb+srv://Nishant1002:Nishant1002@cluster0.sgurora.mongodb.net/database1'

mongoose.connect(url);


const profileSchema = new mongoose.Schema({
    name : String,
    pin_code : Number,
    city : String,
    email : String

});

const saveDB = async () => {
    const Profile = mongoose.model('collection1',profileSchema);
    let data = new Profile({
        name : "nishant",
        city : "jaipur",
        email : "nishant@gmail.com",
        pin_code : "121212"
    })
    const result = await data.save()
    console.log(result)
}

saveDB();
