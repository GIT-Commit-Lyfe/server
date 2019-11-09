const tokenHelper = require("../helpers/token")
const { User, Role } = require("../models")


let NOT_AUTHORIZED = {
  status : "403",
  msg: "Not Authorized!"
}

class Auth {
  static authentication(req, res, next){
    try {
      
      let decoded = tokenHelper.verifyToken(req.headers.access_token)
      
      User.findByPk(
        decoded.id, 
        {
          include : [{model : Role}]
        }
      )
      .then(result=>{
        req.loggedUser = result
        //console.log(JSON.stringify(result, null, 2))
        result ? next() : next({code : 404, msg: "User not found"})
      })
      .catch(next)

    }
    catch (err){
      next(err)
    }
  }

  static decodeVerifyToken(req, res, next){

    try {
      req.decoded = tokenHelper.verifyToken(req.headers.verify_token, true)
      next()
    }catch (err){
      next(err)
    }
    
  }
  static adminAuthorization(req, res, next){
  
    console.log("masuk admin")
    if(_isAdmin(req)){
      next()
    }else {
      next(NOT_AUTHORIZED)
    }
  }

  static addressAuthorization(req, res, next){
    console.log("masuk address")
    if(req.loggedUser.AddressId == req.params.id || _isAdmin(req)){
      next()   
    } else {
      next(NOT_AUTHORIZED)
    }
  }
  
}

function  _isAdmin(req){
  return req.loggedUser.Role.role_name === 'admin'
}



module.exports = Auth