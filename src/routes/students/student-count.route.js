const User = require("../../models/user");
const RolesEnum = require("../../models/roles");

const count = (req, res) => {
  const records = User.count({ role: RolesEnum.student });
  records.then(count => {
    res.status(200).json({ payload: { count } });
  });
};

module.exports = count;
