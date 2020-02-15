const router = require("express").Router()
const FunctionController = require("../controllers/function")

router.get("/",  FunctionController.findAll)
router.post("/", FunctionController.create)
router.get("/:id", FunctionController.findOne)
router.put("/:id", FunctionController.update)
router.delete("/:id", FunctionController.delete)

module.exports = router