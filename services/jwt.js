const jwt = require('jsonwebtoken')

const generateAccessToken = (data, cles, time)=>{
    return jwt.sign(data , cles, { expiresIn: time });
}

module.exports={
    generateAccessToken
}