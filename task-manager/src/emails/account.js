const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = require('./keys')

sgMail.setApiKey(sendgridAPIKey.key)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'franklin_liu3@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'franklin_liu3@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. Hope to see you back soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}