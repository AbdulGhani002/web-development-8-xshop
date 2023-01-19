function getSignupRoute(req, res) {
  res.render("customer/auth/signup");
}

function getLoginRoute(req, res) {
  res.render("customer/auth/login");
}

module.exports = {
  getSignupRoute: getSignupRoute,
  getLoginRoute: getLoginRoute,
};
