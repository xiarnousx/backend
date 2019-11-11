const User = require("../../models/user");
const RolesEnum = require("../../models/roles");

const users = (req, res) => {
  const pageSize = +req.query.pageSize || 2;
  const page = +req.query.page || 1;
  const userQuery = User.find({ role: RolesEnum.student });

  userQuery.skip(pageSize * (page - 1)).limit(pageSize);

  userQuery.then(documents => {
    res.status(200).json({
      payload: documents
    });
  });
};

module.exports = users;
