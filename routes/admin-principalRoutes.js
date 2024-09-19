const {
  loginAdminPrinc,
  dataAdmin,
} = require("../controllers/admin-principalControllers");
const { authenticateToken } = require("../middleware/jwtAdminPrinc");

const adminPrincipalRoute = require("express").Router();

adminPrincipalRoute.get("/admin", loginAdminPrinc);
adminPrincipalRoute.get('/admin/dataAdm',authenticateToken, dataAdmin)

module.exports = adminPrincipalRoute;
