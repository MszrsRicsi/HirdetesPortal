const router = require("express").Router();

router.use("/users", require("./userRoutes"));
router.use("/ads", require("./adRoutes"));

module.exports = router;