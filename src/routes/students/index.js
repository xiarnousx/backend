const express = require("express");
const router = express.Router();
const checkAuth = require("../../middlewares/check-auth.middleware");
const hrRole = require("../../middlewares/hr-role.middleware");
const staffRole = require("../../middlewares/staff-role.middleware");

router.get("", checkAuth, staffRole, require("./student-all.route"));
router.get("/count", checkAuth, staffRole, require("./student-count.route"));
router.get("/:id", checkAuth, staffRole, require("./student-get.route"));
router.put("/:id", checkAuth, hrRole, require("./student-update.route"));
router.delete("/:id", checkAuth, hrRole, require("./student-delete.route"));

module.exports = router;
