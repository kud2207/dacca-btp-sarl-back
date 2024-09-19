const {
  loginAdminPrinc,
} = require("../controllers/admin-principalControllers");

const adminPrincipalRoute = require("express").Router();

adminPrincipalRoute.get("/admin", loginAdminPrinc);

module.exports = adminPrincipalRoute;
