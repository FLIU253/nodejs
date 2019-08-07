const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = require('./keys')

sgMail.setApiKey(sendgridAPIKey.key)

sgMail.send({
    to: 'franklin_liu3@hotmail.com',
    from: 'franklin_liu3@hotmail.com',
    subject: 'This is my first creation',
    text: 'testing testing testing'
})

