const router = require("express").Router()
const UserController = require("../controllers/user")
const { sendEmail, sendPIN } = require("../middlewares/email")
const { decodeVerifyToken } = require("../middlewares/auth")

router.post("/register", UserController.register, sendEmail)
router.post("/login", UserController.login, sendPIN)
//router.get("/verify", decodeVerifyToken, UserController.verifyEmail)
router.patch("/verify", decodeVerifyToken, UserController.verifyEmail)
router.post("/pin", decodeVerifyToken, UserController.loginPIN)


module.exports = router