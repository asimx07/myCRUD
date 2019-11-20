const express = require("express");
const router = express.Router();

//@route GET api/profile/test
//@desc  Test Route
//@access Public

router.get("/test", (req, res) => res.json({ msg: "User Works" }));

module.exports = router;
