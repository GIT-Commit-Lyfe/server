const {BezelMaterial, DialMaterial, BraceletMaterial, ClaspMaterial} = require("../models")



module.exports = function(req, res, next){
  console.log(req.baseUrl)
  switch (req.baseUrl){
    case "/bezel-materials" : req.Material = BezelMaterial; break;
    case "/dial-materials" : req.Material = DialMaterial; break;
    case "/bracelet-materials" : req.Material = BraceletMaterial; break;
    case "/clasp-materials" : req.Material = ClaspMaterial; break;
  }
  next()

}