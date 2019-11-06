const router = require("express").Router()
const UserController = require("../controllers/user")

router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.get("/verify", UserController.verify)
//router.patch("/verify", UserController.verify)

module.exports = router