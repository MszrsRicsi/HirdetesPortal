const router = require("express").Router();
const userController = require("../controllers/userController");

// Registration
router.post("/registration", userController.registration)

module.exports = router;