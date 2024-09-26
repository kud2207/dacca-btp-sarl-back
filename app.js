const express = require('express')
const bodyPaeser = require('body-parser')
const adminPrincipal = require('./routes/admin-principalRoutes')
const cors = require('cors')
const connectMongoDB = require('./config/dataBase')
const serviceRoute = require('./routes/services-routes')
const realisationRoute = require('./routes/realisations-routes')

require('dotenv').config()
const app = express()

 //conect mongoDb
 connectMongoDB()


//midelware
app.use(bodyPaeser.json())
app.use(bodyPaeser.urlencoded({ extended: false }))
app.use(cors())

//diff routes
app.use('/login',adminPrincipal)
app.use('/service',serviceRoute)
app.use('/realisation', realisationRoute)



const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('listening on port:', port)
}) 