const { creadService } = require('../controllers/services-controllers')

const serviceRoute = require('express').Router()

//http://localhost:3001/service/.....
serviceRoute.post('/creadService',creadService)

module.exports = serviceRoute