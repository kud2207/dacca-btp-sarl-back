const { adminPrincipalSchema } = require("../models/admin-principalModel");
const { generateAccessToken } = require("../services/jwt");
require("dotenv").config();

const email = process.env.GMAIL_ADMIN1;
const password = process.env.PWD_ADMIN1;
const clesAdm = process.env.ACCESS_TOKEN_SECRET;
const timExp = "3000s";

const loginAdminPrinc = async (req, res) => {
  try {
    if (req.body.email !== email) {
      res.status(401).send("invalid credentials gmail");
      return;
    }
    if (req.body.password !== password) {
      res.status(401).send("invalid credentials pwd");
      return;
    }
  } catch (error) {
    console.log("erreur dans la condition :", error.name, error.value);
  }

  try {
    const accessToken = generateAccessToken(
      adminPrincipalSchema[0],
      clesAdm,
      timExp
    );

    res.send({
      accessToken,
    });
  } catch (error) {
    console.log("erreur dans res.send :", error.name, error.value);
  }
};

module.exports = {
  loginAdminPrinc,
};
