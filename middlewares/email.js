const transporter = require("../helpers/email")
const { generateToken } = require("../helpers/token")
//const { generatePIN } = require("../helpers/pin")

let domain = "http://watchstreet.com"
let sender = "WatchStreet"

function sendEmail(req, res, next){
  
  let token = generateToken({id : req.registeredUser.id}, true)

  var mailOptions = {
    from: sender,
    to: req.registeredUser.email,
    subject: 'Welcome to WatchStreet',
    text: `
    Please verify your email using this link: 
    ${domain}/verify?v=${token}
    `
  };

  send(mailOptions)

  res.status(201).json({
    message : "Register succesfully, Please check your email"
  })
}

function sendPIN(req, res, next){

  var mailOptions = {
    from: sender,
    to: req.loggedUser.email,
    subject: 'WatchStreet Login',
    text: `
    PIN : ${ req.PIN }
    `
  };

  send(mailOptions)
  res.status(200).json({
    message : "We've send your login PIN, please check your email.",
    verify_token : generateToken({id : req.loggedUser.id}, "token")
  })

}

function send(mailOptions) {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      //nanti bikin error handlernya di errorHandler
      
    } else {
      console.log('Email sent: ' + info.response);
      
    }
  });
}


module.exports = {
  sendEmail,
  sendPIN
}
