const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
function userId(req, res , next){
  req.userId = "5e7f612ad9abd524811fb2c9"
  next()
}
mongoose.connect("mongodb://localhost:27017/relacionamento", {useNewUrlParser: true, useUnifiedTopology: true})
app.use(userId)
app.use(express.json())
app.use(routes)



app.listen(3001)