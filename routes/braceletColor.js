const router = require("express").Router()
const BraceletColorController = require("../controllers/braceletColor")

router.get("/",  BraceletColorController.findAll)
router.post("/", BraceletColorController.create)
router.get("/:id", BraceletColorController.findOne)
router.put("/:id", BraceletColorController.update)
router.delete("/:id", BraceletColorController.delete)

module.exports = router