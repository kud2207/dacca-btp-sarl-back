const jwt = require("jsonwebtoken");
require("dotenv").config();

const clesAdm = process.env.ACCESS_TOKEN_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, clesAdm, (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.user = user;
      next();
    });
  } catch (error) {console.log("erreur suite a authenticateToken", error)}
};

module.exports = {
  authenticateToken,
};

//https://www.wawasensei.dev/tuto/tuto-authentification-refresh-json-web-token-en-nodejs-avec-express