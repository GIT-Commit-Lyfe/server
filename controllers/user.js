const {User, Address} = require("../models")

class UserController {
  static register(req, res, next){
    
    let {cityId, address_line, postal_code} = req.body
    let {email, password, username} = req.body

    console.log(cityId)
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
    
  }
}

module.exports = UserController