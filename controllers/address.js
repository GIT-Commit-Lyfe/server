const { Address, City, Country } = require("../models")

class AddressController {

  static update(req, res, next){

    const {CityId, address_line, postal_code} = req.body

    Address.update({
      CityId,
      address_line,
      postal_code
    }, {
      where : {
        id : req.params.id
      }
    })
    .then(result => {
      res.status(200).json({
        message : "Succesfully update data"
      })
    })
    .catch(next)
  }

  static findOne(req, res, next){

    Address.findByPk(req.params.id, {
      include : [
        {
          model : City,
          include : [{
            model : Country
          }]
        }
      ]
    })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(next)
  }

  static delete(req, res, next){

    Address.destroy({
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

module.exports = AddressController