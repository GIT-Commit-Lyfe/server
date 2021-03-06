
class MaterialController {

  static create(req, res, next){

    let body = {
      material_name : req.body.material_name,
    }

    req.Material.create(body)
    .then( result => {
      res.status(201).json(result)
    })
    .catch(next)
  }

  static findAll(req, res, next){
    let conditions = {}

    req.query.id && (conditions.id = req.query.id)
    req.query.material_name && (conditions.material_name = { $like : `%${req.query.material_name}%`})
   
    req.Material.findAll({
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
    req.Material.findByPk(req.params.id)
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
      material_name : req.body.material_name,
    }

    req.Material.update(body, {where : {id}})
    .then(([result]) => {      
      result ? res.status(200).json({ message : "Succesfully update data" }) : next({ code : 404, msg : "Id not found" })
    })
    .catch(next)
  }

  static delete(req, res, next){

    req.Material.destroy({
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

module.exports = MaterialController