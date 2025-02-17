const router = require("express").Router();
const categoryController = require("../controllers/categoryController");
const {tokenCheck} = require("../middlewares/authCheck");

// Create category
router.post("/create", tokenCheck, categoryController.create);

module.exports = router;