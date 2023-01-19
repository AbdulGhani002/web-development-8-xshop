function getHomeRoute(req, res) {
  res.redirect("/login");
}

module.exports = {
  getHomeRoute: getHomeRoute,
};
