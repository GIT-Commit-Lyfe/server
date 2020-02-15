const router = require("express").Router()
const CaliberController = require("../controllers/caliber")


router.get("/", CaliberController.findAll)
router.post("/", CaliberController.create)
router.get("/:id", CaliberController.findOne)
router.put("/:id", CaliberController.update)
router.delete("/:id", CaliberController.delete)


module.exports = router