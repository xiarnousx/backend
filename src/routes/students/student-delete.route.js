const User = require("../../models/user");

const remove = (req, res) => {
  User.deleteOne({ _id: req.params.id }).then(data => {
    res.status(204).json({ payload: data });
  });
};

module.exports = remove;
