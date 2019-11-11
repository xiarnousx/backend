const RolesEnum = require("../models/roles");

const staffRole = (req, res, next) => {
  if (req.currentUser && (req.currentUser.role === RolesEnum.staff || req.currentUser.role === RolesEnum.hr)) {
    return next();
  }

  res.status(401).json({ error: "Not Authorized" });
};

module.exports = staffRole;
