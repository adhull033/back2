const property = require("./property");


module.exports={
    routes: [
        {
            method: 'GET',
            path: '/properties/featured/:city',
            handler: 'property.getfeatured',
            config:{
                auth: false,
                description: "Get featured properties by city",
            }
        },{
            method: 'GET',
            path: '/properties/listing/:city',
            handler: 'property.getlisting',
            config:{
                auth: false,
            }
        },{
            method: 'GET',
            path: '/properties/search/',
            handler: 'property.search',
            config:{
                auth: false,
            }
        }
    ]
}