const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought


} = require("../../controllers/userController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route("/:userId").get(getSingleThought);

module.exports = router; 