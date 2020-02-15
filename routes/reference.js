const router = require("express").Router()
const ReferenceController = require("../controllers/reference")


router.get("/", ReferenceController.findAll)
router.post("/", ReferenceController.create)
router.get("/:id", ReferenceController.findOne)
router.put("/:id", ReferenceController.update)
router.delete("/:id", ReferenceController.delete)


module.exports = router