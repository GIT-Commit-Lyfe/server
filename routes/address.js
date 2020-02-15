const router = require("express").Router()
const AddressController = require("../controllers/address")
const { addressAuthorization } = require("../middlewares/auth")

router.use("/:id", addressAuthorization)
router.put("/:id", AddressController.update)
router.get("/:id", AddressController.findOne)
router.delete("/:id", AddressController.delete)

module.exports = router