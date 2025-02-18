const router = require("express").Router();
const categoryController = require("../controllers/categoryController");
const {tokenCheck} = require("../middlewares/authCheck");

// Get categories
router.get("/", tokenCheck, categoryController.getAll);

// Create category
router.post("/create", tokenCheck, categoryController.create);

// Modify category by categoryID
router.patch("/:categoryID", tokenCheck, categoryController.modify);

// Delete category by categoryID
router.delete("/:categoryID", tokenCheck, categoryController.delete);

module.exports = router;