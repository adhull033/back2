require('dotenv').config()

module.exports = {
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'rehabpycenter@gmail.com',
          pass: 'rsrcvtimllosvweh',
        },
      },
      settings: {
        defaultFrom: 'rehabpycenter@gmail.com',
        defaultReplyTo: 'noreply@gmail.com',
      },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, 
    }
  },
}