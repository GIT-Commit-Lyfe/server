const { Condition } = require("../models")

class ConditionController {
  static create(req, res, next){

    let body = {
      condition_name : req.body.condition_name,
    }

    Condition.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){

    let conditions = {}
    req.query.id && (conditions.id = req.query.id)
    req.query.condition_name && (conditions.condition_name = { $like : `%${req.query.condition_name}%`})
   

    Condition.findAll({
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
    Condition.findByPk(req.params.id)
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
      condition_name : req.body.condition_name,
    }

    Condition.update(body, {where : {id}})
    .then(([result]) => {
      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Condition.destroy({
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

module.exports = ConditionController