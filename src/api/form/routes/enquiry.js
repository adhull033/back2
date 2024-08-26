
const form = require("./form")





module.exports = {
    routes:[
        {
        method: 'POST',
        path: '/form/enquiry',
        handler: 'form.enquire',
        config: {
            auth: false,
            description: "Post an enquiry "

        },
        }
    ]
}