

module.exports = {
    async afterCreate(event) {
        const { result, params } = event
        console.log(result)

        if (result) {
            try {
                await strapi.plugins['email'].services.email.send({
                    to: "dineshkumar@akkenna.com",
                    from: result.email,
                    subject: "New Enquiry From Stanley Estates Website!",
                    html: `<h1>Hi Admin</h1>
<h2>We have received new enquiry.</h2>
<h2>Please find the details.</h2>
<h3>Name:       ${result.name}<h3>
<h3>Email Id:   ${result.email}<h3>
<h3>Phone No:   ${result.mobile}<h3>
<h3>Message:    ${result.message}<h3>
<h3>Page URL:   ${result.pageURL}<h3>`
                })
                console.log("Email sent successfully")
            } catch (error) {
                console.log(error)
                throw error; 
            }
        }
    }
}