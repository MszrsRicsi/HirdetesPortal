const router = require("express").Router();
const adController = require("../controllers/adController");
const {tokenCheck} = require("../middlewares/authCheck");

// Get ads
router.get("/", tokenCheck, adController.getAll);

// Create category
router.post("/create", tokenCheck, adController.create);

// Modify ad by adID
router.patch("/:adID", tokenCheck, adController.modify);

// Delete ad by adID
router.delete("/:adID", tokenCheck, adController.delete);

module.exports = router;