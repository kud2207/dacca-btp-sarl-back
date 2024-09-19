const express = require('express')
const bodyPaeser = require('body-parser')
const adminPrincipal = require('./routes/admin-principalRoutes')
const cors = require('cors')

require('dotenv').config()
const app = express()


//midelware
app.use(bodyPaeser.json())
app.use(bodyPaeser.urlencoded({ extended: false }))
app.use(cors())

//diff routes
app.use('/login',adminPrincipal)



const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('listening on port:', port)
}) 