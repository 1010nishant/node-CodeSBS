const dbConnect = require('./mongodb')


//handling promise means async operations by using .then method 

dbConnect().then((response) => {
    response.find({name : 'ram'}).toArray().then((data) => {
        console.log(data)
    })
})

// handling promise means async operations by using async await

const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray();
    console.log(data)    
    
}

main();