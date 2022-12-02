const router = require("express").Router();
const {
  getThoughts,
} = require("../../controllers/userController");

// /api/thoughts
router.route("/").get(getThoughts);


module.exports = router;