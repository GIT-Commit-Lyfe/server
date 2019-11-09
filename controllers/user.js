const {User, Address} = require("../models")
const { verifyPassword } = require("../helpers/encryption")
const { generateToken } = require("../helpers/token")
const { generatePIN } = require("../helpers/pin")


class UserController {
  static register(req, res, next){
    
    const {CityId, address_line, postal_code, RoleId} = req.body
    const {email, password, username} = req.body

    User.create(
      { 
        email, 
        password, 
        username,
        RoleId : RoleId || 2,
        Address : {
          CityId,
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
      //console.log(result)
      req.registeredUser = result
      next()
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

        result.loginPIN = generatePIN()
        return result.save()

      }else {
        throw {
          msg : "Invalid email/password",
          code : 400
        }
      }
    })
    .then(result => {      
      req.PIN = result.loginPIN
      req.loggedUser = result
      next()    
    })
    .catch(next)

  }

  static verifyEmail(req, res, next){

      User.update({
        isVerified : true
      }, {
        where : {
          id: req.decoded.id
        }
      })
      .then(result => {
        res.status(200).json({
          message : "Verify email success"
        })
      })
      .catch(next)

  }

  static loginPIN(req, res, next){
    
    User.findByPk(req.decoded.id)
    .then(user => {
      if(user.loginPIN === req.body.pin){
        res.status(200).json({
          access_token : generateToken({
            id : user.id
          })
        })
      }else { 
        next({
          code : 401,
          msg : "Wrong PIN"
        })
      }
    })
    .catch(next)

  }

  static findAll(req, res, next){

    let conditions = {}

    req.query.id && (conditions.id = req.query.id)
    req.query.email && (conditions.email = { $like : `%${req.query.email}%`})
    req.query.username && (conditions.username = { $like : `%${req.query.username}%`})
    req.query.CityId && (conditions.CityId = req.query.CityId)

    User.findAll({
      where : conditions
    }, {
      include : [{ all : true }]
    })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(next)

  }

  static findOne(req, res, next) {

    User.findByPk(req.params.id, {
      include : [{all : true}]
    })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(next)
  }

  static update (req, res, next){

    let updatedData = {
      email : req.body.email,
      username : req.body.username,
    }

    if(updatedData.email && updatedData.username){
      User.update(updatedData , {
        where : {
          id : req.params.id
        }
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(next)
    } else {
      next({
        status : 400,
        msg : "email/username cannot be undefined"
      })
    }
  }

  static delete (req, res, next){
    User.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(result => {
      result ? res.status(200).json({ message : "Successfully delete data" }) : next({ status : 404, msg : "Id not found" })
    })
    .catch(next)
  }
}

module.exports = UserController