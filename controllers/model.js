const { Model } = require("../models")

class ModelController {
  static create(req, res, next){

    let body = {
      model_name : req.body.model_name,
      BrandId : req.body.BrandId
    }

    Model.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){
    let conditions = {}

    req.query.id && (conditions.id = req.query.id)
    req.query.model_name && (conditions.model_name = { $like : `%${req.query.model_name}%`})
    req.query.BrandId && (conditions.BrandId = req.query.BrandId)

    Model.findAll({
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
    Model.findByPk(req.params.id)
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
      model_name : req.body.model_name,
    }

    Model.update(body, {where : {id}})
    .then(([result]) => {
      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Model.destroy({
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

module.exports = ModelController