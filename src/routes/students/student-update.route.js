const User = require("../../models/user");

const update = (req, res) => {
  const user = new User({
    _id: req.params.id,
    isActive: req.body.isActive
  });
  User.updateOne({ _id: req.params.id }, user).then(result => {
    res.status(200).json({ payload: result });
  });
};

module.exports = update;
