const router = require("express").Router()
const MaterialController = require("../controllers/material")

router.get("/",  MaterialController.findAll)
router.post("/", MaterialController.create)
router.get("/:id", MaterialController.findOne)
router.put("/:id", MaterialController.update)
router.delete("/:id", MaterialController.delete)

module.exports = router