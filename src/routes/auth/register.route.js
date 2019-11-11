const User = require("../../models/user");
const RolesEnum = require("../../models/roles");
// Alternative which is higly recommended it to use bcrypt
// npm i --save bcrypt
// However, my node docker image comes without python which bcyrpt package uses under the hood.
const md5 = require("md5");

/**
 * Register users as students with in active status
 *
 * @param {*} req
 * @param {*} res
 */
const register = (req, res) => {
  let hash = md5(req.body.password);
  console.log(hash);
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hash,
    role: RolesEnum.student,
    isActive: false
  });

  user
    .save()
    .then(data => {
      res.status(201).json({
        payload: data
      });
    })
    .catch(err => {
      res.status(500).json({ error: "Please try again...." });
    });
};

module.exports = register;
