const User = require("../../models/user");

const getOne = (req, res) => {
  User.findById(req.params.id).then(result => {
    if (result) {
      res.status(200).json({ payload: result });
    } else {
      res.status(404).json({ error: "Entity Not Found" });
    }
  });
};

module.exports = getOne;
