const router = require("express").Router();
const userController = require("../controllers/userController");

// Registration
router.post("/registration", userController.registration)

// Login
router.post("/login", userController.login)

module.exports = router;