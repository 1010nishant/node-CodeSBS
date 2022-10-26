const dbConnect = require('./mongodb');

const updation = async () => {
    let data = await dbConnect();
    data = await data.updateMany(
        {name : "sita"},{
            $set: {name : "sita ji", city : "ayodhya"}
        }
    )
}

updation();
