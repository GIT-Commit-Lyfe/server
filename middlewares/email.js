const transporter = require("../helpers/email")
const { generateToken } = require("../helpers/token")
let domain = "http://localhost:3000"

function sendEmail(req, res, next){
  
  let token = generateToken({id : req.registeredUser.id}, true)

  var mailOptions = {
    from: process.env.EMAIL_GMAIL,
    to: req.registeredUser.email,
    subject: 'Welcome to WatchStreet',
    text: `
    Please verify your email using this link: 
    ${domain}/verify?v=${token}
    `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      //nanti bikin error handlernya di errorHandler
      
    } else {
      console.log('Email sent: ' + info.response);
      
    }
  });
  res.status(201).json({
    message : "Register succesfully"
  })
}

module.exports = sendEmail
