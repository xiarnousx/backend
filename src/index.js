const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthRoutes = require("./routes/auth");
const StudentRoutes = require("./routes/students");

/**
 * instantiate the API APP.
 */
const api = express();

/**
 * Below are all middlewares.
 */
api.use(bodyParser.json());
api.use(cors());

/**
 * Below are default API routes.
 */
api.route("/").get(require("./routes/home.route"));
api.route("/api").get(require("./routes/api.route"));

/***
 * Below auth routes
 */
api.use("/api/auth", AuthRoutes);

/***
 * Below student crud operations
 */
api.use("/api/students", StudentRoutes);

/**
 * Startup the nodejs server.
 */
const port = process.env.PORT || 3000;

api.listen(port, function() {
  console.log(`API listening on ${port}!`);
});
