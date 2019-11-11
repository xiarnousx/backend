const home = (req, res) => {
  res.status(200).json({ payload: "Welcome To API!" });
};

module.exports = home;
