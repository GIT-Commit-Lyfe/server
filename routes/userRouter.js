const router = require("express").Router()
const UserController = require("../controllers/user")
const { authentication, adminAuthorization } = require("../middlewares/auth")


router.get("/users", UserController.findAll)
router.get("/users/:id", UserController.findOne)
router.post("/users", UserController.register)
router.put("/users/:id", UserController.update)
router.delete("/users/:id", UserController.delete)



module.exports = router