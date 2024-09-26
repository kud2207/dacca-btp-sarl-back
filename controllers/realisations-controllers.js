const Realisation = require("../models/realisations-models"); // Corrected the model import

// Create the realisation
const creadRealisation = async (req, res) => {
  try {
    const { lienImgRealisation, descriptionRealisation } = req.body;

    const newRealisation = new Realisation({
      lienImgRealisation,
      descriptionRealisation,
    });
    await newRealisation.save();
    
    res.status(201).json({ serviceData: newRealisation });
  } catch (error) {
    res.status(400).json({
      message: "Error to create realisation",
      error: error.message,
    });
  }
};

// Affiche one realisation (retrieve one realisation by ID)
const affOneService = async (req, res) => {
  try {
    const realisation = await Realisation.findById(req.params.id);
    if (!realisation) {
      return res.status(404).json({ message: "Realisation not found" });
    }
    res.json(realisation);
  } catch (error) {
    res.status(400).json({
      message: "Error to retrieve the realisation",
      error: error.message,
    });
  }
};

// Affiche all realisations (retrieve all realisations)
const affAllRealisation = async (req, res) => {
  try {
    const allRealisations = await Realisation.find(); 
    res.json(allRealisations); 
  } catch (error) {
    res.status(400).json({
      message: "Error to retrieve all realisations",
      error: error.message,
    });
  }
};


// Delete one realisation
const deleteRealisation = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedRealisation = await Realisation.findByIdAndDelete(id);
    
    if (!deletedRealisation) {
      return res.status(404).json({ message: "Realisation does not exist" });
    }

    res.json({ message: "Realisation deleted successfully", data: deletedRealisation });
  } catch (error) {
    res.status(400).json({
      message: "Error to delete realisation",
      error: error.message,
    });
  }
};

module.exports = {
  creadRealisation,
  affOneService,
  affAllRealisation, 
  deleteRealisation,
};
