const router = require("express").Router()
const BrandController = require("../controllers/brand")


router.get("/", BrandController.findAll)
router.post("/", BrandController.create)
router.get("/:id", BrandController.findOne)
router.put("/:id", BrandController.update)
router.delete("/:id", BrandController.delete)


module.exports = router