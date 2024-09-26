const {
  loginAdminPrinc,
  dataAdmin,
} = require("../controllers/admin-principalControllers");
const { authenticateToken } = require("../middleware/jwtAdminPrinc");

const adminPrincipalRoute = require("express").Router();

//http://localhost:3001/login/.....
adminPrincipalRoute.post("/admin", loginAdminPrinc);
adminPrincipalRoute.get('/admin/dataAdm',authenticateToken, dataAdmin)

module.exports = adminPrincipalRoute;
