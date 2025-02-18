const router = require("express").Router();

router.use("/users", require("./userRoutes"));
router.use("/category", require("./categoryRoutes"));
router.use("/ads", require("./adRoutes"));

module.exports = router;