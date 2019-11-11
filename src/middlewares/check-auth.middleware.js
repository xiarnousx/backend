const jwt = require("jsonwebtoken");
const { JWT_SALT } = process.env;

const checkAuth = (req, res, next) => {
  try {
    // Get the token hash after Bearer auth type.
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SALT);
    req.currentUser = {
      email: decoded.email,
      fullName: decoded.fullName,
      isActive: decoded.isActive,
      role: decoded.role,
      id: decoded._id
    };
    next();
  } catch (error) {
    res.status(401).json({ error: "Not Authorized" });
  }
};

module.exports = checkAuth;
