const router = require("express").Router()
const userRouter = require("./userRouter")
const authRouter = require("./authRouter")
const addressRouter = require("./addressRouter")
const { authentication, adminAuthorization, addressAuthorization } = require("../middlewares/auth")


router.use("/", authRouter)

router.use(authentication)
router.use("/users", adminAuthorization, userRouter)
router.use("/addresses", addressRouter)


module.exports = router