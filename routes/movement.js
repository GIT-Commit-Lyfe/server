const router = require("express").Router()
const MovementController = require("../controllers/movement")


router.get("/", MovementController.findAll)
router.post("/", MovementController.create)
router.get("/:id", MovementController.findOne)
router.put("/:id", MovementController.update)
router.delete("/:id", MovementController.delete)


module.exports = router