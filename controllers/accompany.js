const { Accompany } = require("../models")

class AccompanyController {
  static create(req, res, next){

    let body = {
      accompany_name : req.body.accompany_name,
    }

    Accompany.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){

    let conditions = {}
    req.query.id && (conditions.id = req.query.id)
    req.query.accompany_name && (conditions.accompany_name = { $like : `%${req.query.accompany_name}%`})
   

    Accompany.findAll({
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
    Accompany.findByPk(req.params.id)
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
      accompany_name : req.body.accompany_name,
    }

    Accompany.update(body, {where : {id}})
    .then(([result]) => {
      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Accompany.destroy({
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

module.exports = AccompanyController