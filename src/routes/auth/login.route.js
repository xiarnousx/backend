const User = require("../../models/user");
const jwt = require("jsonwebtoken");
// Alternative which is higly recommended it to use bcrypt
// npm i --save bcrypt
// However, my node docker image comes without python which bcyrpt package uses under the hood.
const md5 = require("md5");

const { JWT_SALT } = process.env;

const login = (req, res) => {
  let loggedUser;
  User.findOne({
    email: req.body.email,
    isActive: true
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: "Auth Failed, Password or Email Invalid" });
      }

      const hash = md5(req.body.password);

      const authResult = hash == user.password;

      if (!authResult) {
        return res.status(401).json({ error: "Auth Failed" });
      }

      const token = jwt.sign({ fullName: user.fullName, email: user.email, id: user._id, role: user.role }, JWT_SALT, {
        expiresIn: "1h"
      });

      res.status(200).json({ payload: { token: token } });
    })
    .catch(err => {
      return res.status(401).json({ error: "Not Valid User!" });
    });
};

module.exports = login;
