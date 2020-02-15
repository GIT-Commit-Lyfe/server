const router = require("express").Router()
const ClaspController = require("../controllers/clasp")

router.get("/",  ClaspController.findAll)
router.post("/", ClaspController.create)
router.get("/:id", ClaspController.findOne)
router.put("/:id", ClaspController.update)
router.delete("/:id", ClaspController.delete)

module.exports = router