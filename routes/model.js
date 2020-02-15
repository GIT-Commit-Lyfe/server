const router = require("express").Router()
const ModelController = require("../controllers/model")


router.get("/", ModelController.findAll)
router.post("/", ModelController.create)
router.get("/:id", ModelController.findOne)
router.put("/:id", ModelController.update)
router.delete("/:id", ModelController.delete)


module.exports = router