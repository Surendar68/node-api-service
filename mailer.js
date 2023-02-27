const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "surendar.b@redblox.io", // email address from which you want to send the email
        pass: "pDmtzXKLqcrwksnJ" // password of your email address
    }
});

module.exports = transporter
