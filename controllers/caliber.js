const { Caliber } = require("../models")

class CaliberController {
  static create(req, res, next){

    let body = {
      caliber_name : req.body.caliber_name,
    }

    req.body.BrandId && (body.BrandId = req.body.BrandId)

    Caliber.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){
    let conditions = {}

    req.query.id && (conditions.id = req.query.id)
    req.query.caliber_name && (conditions.caliber_name = { $like : `%${req.query.caliber_name}%`})
   

    Caliber.findAll({
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
    Caliber.findByPk(req.params.id)
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
      caliber_name : req.body.caliber_name,
    }

    Caliber.update(body, {where : {id}})
    .then(([result]) => {
      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Caliber.destroy({
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

module.exports = CaliberController