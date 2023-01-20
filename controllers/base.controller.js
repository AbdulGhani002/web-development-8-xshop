function getHome(req, res) {
  res.redirect("/login");
}

module.exports = {
  getHome: getHome,
};
