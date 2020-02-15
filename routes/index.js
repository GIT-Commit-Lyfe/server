const router = require("express").Router()
const route = require("./routers") 
const modelMaterialSelector = require("../middlewares/modelMaterialSelector")
const { authentication, adminAuthorization, addressAuthorization } = require("../middlewares/auth")


router.use("/", route.auth)
router.use("/brands", route.brand)
router.use("/models", route.model)
router.use("/movements", route.movement)
router.use("/calibers", route.movement)

router.use("/bezel-materials", modelMaterialSelector, route.material)
router.use("/dial-materials", modelMaterialSelector, route.material)
router.use("/bracelet-materials", modelMaterialSelector, route.material)
router.use("/clasp-materials", modelMaterialSelector, route.material)

router.use("/bracelet-colors", route.braceletColor)
router.use("/clasps", route.clasp)
router.use("/functions", route.functions)
router.use("/references", route.reference)

router.use(authentication)
router.use("/users", adminAuthorization, route.user)
router.use("/addresses", route.address)


module.exports = router