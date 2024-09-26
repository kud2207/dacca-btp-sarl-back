const servicesSchema = require("../models/services-model");

//Cread the serviceDacca
const creadService = async (req, res) => {
  try {
    const {
      lienImgServicePrin,
      nomService,
      descriptionService,
      plusInfoService,
    } = req.body;

    const newServices = new servicesSchema({
      lienImgServicePrin,
      nomService,
      descriptionService,
      plusInfoService,
    });
    await newServices.save();

    res.status(201).json({ serviceData: newServices });
  } catch (error) {
    res
      .status(400)
      .json({ Message: "Error to cread Service", Erreur: error.message});
  }
};


module.exports=({
    creadService
})