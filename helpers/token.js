const jwt = require("jsonwebtoken")

module.exports = {
  generateToken(payload, isEmail){

    let secret = isEmail ?  process.env.JWT_SECRET_VERIFY : process.env.JWT_SECRET    
    return jwt.sign(payload, secret, {expiresIn : "24h"})
  },

  verifyToken(token, isEmail){
    let secret = isEmail ?  process.env.JWT_SECRET_VERIFY : process.env.JWT_SECRET
    return jwt.verify(token, secret)
  },

}