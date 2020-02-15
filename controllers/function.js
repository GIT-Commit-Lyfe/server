const { Function } = require("../models")

class FunctionController {
  static create(req, res, next){

    let body = {
      function_name : req.body.function_name,
    }

    Function.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){

    req.query.id && (conditions.id = req.query.id)
    req.query.function_name && (conditions.function_name = { $like : `%${req.query.function_name}%`})
   

    Function.findAll({
      where : conditions
    }, {
      include : [{ all : true }]
    })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(next)
  
  }

  static findOne(req, res, next){
    Function.findByPk(req.params.id)
    .then(result=> {
      if(result) {
        res.status(200).json(result)
      }
    })
    .catch(next)
  }

  static update(req, res, next){
    let id = req.params.id
    let body = {
      function_name : req.body.function_name,
    }

    Function.update(body, {where : {id}})
    .then(([result]) => {
      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Function.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(result => {
      result ? res.status(200).json({ message : "Successfully delete data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

}

module.exports = FunctionController