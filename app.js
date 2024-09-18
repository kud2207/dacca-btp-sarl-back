const express = require('express')
const bodyPaeser = require('body-parser')
require('dotenv').config()
const app = express()


//midelware
app.use(bodyPaeser.json())
app.use(bodyPaeser.urlencoded({ extended: false }))

const auth = (req, res, next)=>{
    if(req.query.nom !== 'ulrich')
        return res.status(401).send('Incorect')
    return next()
}

app.get('/:id', auth, (req, res)=>{
    const id = req.params.id
    res.send(id)
})


const port = process.env.PORT
app.listen(port, ()=>{
    console.log('listening on port:', port)
})