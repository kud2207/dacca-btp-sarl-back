const { default: mongoose } = require("mongoose");
require("dotenv").config();

const mongoBdLien = process.env.MONGODBLIEN;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoBdLien);
    console.log("connection reussie a MongoDb");
  } catch (error) {
    console.error("Error dBMongo :", error.message);
  }
};

module.exports = connectMongoDB;
