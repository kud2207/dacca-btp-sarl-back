const mongoose = require("mongoose");

const realisationSchema = new mongoose.Schema(
  {
    lienImgRealisation: {
      type: String, 
      required: true,
    },
    descriptionRealisation: {
      type: String, 
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Realisation", realisationSchema);
