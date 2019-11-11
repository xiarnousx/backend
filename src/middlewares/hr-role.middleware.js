const RolesEnum = require("../models/roles");

const hrRole = (req, res, next) => {
  if (req.currentUser && req.currentUser.role === RolesEnum.hr) {
    return next();
  }

  res.status(401).json({ error: "Not Authorized" });
};

module.exports = hrRole;
