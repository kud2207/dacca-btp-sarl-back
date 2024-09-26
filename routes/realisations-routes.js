const { 
    creadRealisation, 
    deleteRealisation, 
    affAllRealisation, 
    affOneService 
  } = require('../controllers/realisations-controllers');
  
  const realisationRoute = require('express').Router();
  
  // http://localhost:3001/realisation/...
  
  realisationRoute.post('/creadRealisation', creadRealisation);
  realisationRoute.delete('/deleteRealisation/:id', deleteRealisation);
  realisationRoute.get('/affAllRealisations', affAllRealisation);
  realisationRoute.get('/affOneRealisation/:id', affOneService);
  
  module.exports = realisationRoute;
  