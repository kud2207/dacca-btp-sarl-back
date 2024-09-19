require('dotenv').config()

const adminPrincipalSchema = [
  {
    nom: "kageu djouche",
    prenom: "ulrich auriol",
    gmail: process.env.GMAIL_ADMIN1,
    password: process.env.PWD_ADMIN1,
    admin: true,
  },
];
 
module.exports={
    adminPrincipalSchema
}