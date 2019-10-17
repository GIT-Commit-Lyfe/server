const tokenHelper = require("../helpers/token")
const User = require("../models/user")
const Player = require("../models/player")

class Auth {
  static authentication(req, res, next){
    try {

      req.loggedUser = tokenHelper.verifyToken(req.headers.token)
      
      User.findById(req.loggedUser.id)
      .then(result=>{
        result ? next() : next({code : 404, msg: "User not found"})
      })
      .catch(next)

    }
    catch (err){
      next(err)
    }
  }
  static authorization(req, res, next){
    let options = {
      _id : req.params.playerId,
      userId : req.loggedUser.id
    }

    Player.findOne(options)
    .then(result=>{
      result ? next() : next({code : 403, msg: "Not Authorized"})
    })
  }
}

module.exports = Auth