const { Brand } = require("../models")

class BrandController {
  
  static create(req, res, next){
    
    let body = {
      brand_name : req.body.brand_name
    }

    Brand.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){
    //console.log(req.baseUrl, "ini base url")
    let conditions = {}
    const { Reference } = require("../models")
    console.log(Object.keys(Reference.rawAttributes))
    req.query.id && (conditions.id = req.query.id)
    req.query.brand_name && (conditions.brand_name = { $like : `%${req.query.brand_name}%`})

    Brand.findAll({
      where : conditions
    })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(next)

  }

  static findOne(req, res, next){
    Brand.findByPk(req.params.id)
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
      brand_name : req.body.brand_name
    }

    Brand.update(body, {where : {id}})
    .then(([result]) => {

      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    Brand.destroy({
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

module.exports = BrandController