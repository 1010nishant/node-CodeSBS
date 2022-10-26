const dbConnect = require('./mongodb');

const insertion = async () => {
    let data = await dbConnect();
    data = await data.insertMany(
        [
            {name:"sita",email : 'sita@gmail.com',city : "kota",pin_code : "202010"},
            {name:"laxman",email : 'laxman@gmail.com',city : "bundi",pin_code : "204010"},
            {name:"bharat",email : 'bharat@gmail.com',city : "jhodpur",pin_code : "232310"},
            {name:"dasrath",email : 'dasrath@gmail.com',city : "nagore",pin_code : "202810"},
        ]
    )

}

insertion();