const { creadService, affAllServices, affOneService, deletService } = require('../controllers/services-controllers')

const serviceRoute = require('express').Router()

//http://localhost:3001/service/.....
serviceRoute.post('/creadService',creadService)
serviceRoute.get('/affAllServices', affAllServices)
serviceRoute.get('/affOneservice/:id', affOneService)
serviceRoute.delete('/deleteService/:id', deletService)

module.exports = serviceRoute