const express = require("express");
const router = express.Router();

router.post("/login", require("./login.route"));
router.post("/register", require("./register.route"));

module.exports = router;
