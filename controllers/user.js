const {User, Address} = require("../models")
const { verifyPassword } = require("../helpers/encryption")
const { generateToken } = require("../helpers/token")

class UserController {
  static register(req, res, next){
    
    const {cityId, address_line, postal_code} = req.body
    const {email, password, username} = req.body


    User.create(
      { 
        email, 
        password, 
        username,
        roleId : 2,
        Address : {
          cityId,
          address_line,
          postal_code
        }
      } , {
        include : {
          association: User.Address
        }
      }
    )
    .then(result => {
      console.log(result)
      res.status(201).json({
        message : "Successfully register a user"
      })
    })
    .catch(next)

  }



  static login(req, res, next){
    const {email, password} = req.body
    
    User.findOne({
      where : { email }
    })
    .then(result => {
      if(result && verifyPassword(password, result.password)){
        let payload = {
          id : result.id,
        }

        res.status(200).json({
          token : generateToken(payload)
        })
      }else {
        next({
          msg : "Invalid email/password",
          code : 400
        })
      }
    })
    .catch(next)

  }
}

module.exports = UserController