require('dotenv').config({path:'.env'}) 
const express = require('express')
const app = express()

app.get("/res",function(req,res) {
    res.send("texto")
});
const puerto = process.env.PORT || 4000
app.listen(`${puerto}`)
console.log(`hola soy el puerto ${puerto} de node`);
