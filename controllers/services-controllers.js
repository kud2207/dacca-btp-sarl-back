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
      .json({ Message: "Error to cread service", Erreur: error.message });
  }
};

//all affiche service
const affAllServices = async (req, res) => {
  try {
    const affAllServices = await servicesSchema.find();
    res.send(affAllServices);
  } catch (error) {
    res.status(400).json({
      Message: "Error to affiche all service",
      Erreur: error.message,
    });
  }
};

//one affiche service
const affOneService = async (req, res) => {
  try {
    const affOneService = await servicesSchema.findById(req.params.id);
    res.send(affOneService);
  } catch (error) {
    res.status(400).json({
      Message: "Error to affiche One service'",
      Erreur: error.message,
    });
  }
};

//suprimer one service
const deletService = async (req , res) => {
  try {
    const deletService = await servicesSchema.findByIdAndDelete(req.params.id);
    if (!deletService) {
      res.status(404).send(req.params.id, "is not existe");
    }

    res.send(deletService);
  } catch (error) {
    res.status(400).json({
      Message: "Error to delete one service",
      Erreur: error.message,
    });
  }
};


module.exports = {
  creadService,
  affAllServices,
  affOneService,
  deletService
};
