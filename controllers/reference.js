const { Reference } = require("../models")
const { referenceAllAttribute, referenceAssociationAttributes, referenceModelAttributes } = require("../helpers/refAttribute")


class ReferenceController {
  static create(req, res, next){

    let body = referenceAllAttribute.reduce((o, key) => Object.assign(o, {[key]: req.body[key]}), {});

    Reference.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){
    let conditions = {}
    req.query.id && (conditions.id = req.query.id)
    
    referenceModelAttributes.forEach(element => {
      if(req.query[element]){
        conditions[element] = {$like : `%${req.query[element]}%` }
      }
    })
    referenceAssociationAttributes.forEach(element => {
      if(req.query[element]){
        conditions[element] = req.query[element]
      }
    })
   
    Reference.findAll({
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
    Reference.findByPk(req.params.id)
    .then(result=> {
      if(result) {
        res.status(200).json(result)
      }
    })
    .catch(next)
  }

  static update(req, res, next){
    let id = req.params.id

    let body = referenceAllAttribute.reduce((o, key) => Object.assign(o, {[key]: req.body[key]}), {});

    Reference.update(body, {where : {id}})
    .then(([result]) => {
      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Reference.destroy({
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

module.exports = ReferenceController