const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_GMAIL,
    pass: process.env.PASSWORD_GMAIL
  }
});

module.exports = transporter

