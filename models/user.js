const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  }

 
},{timestamps: true})

const User = mongoose.model("User", UserSchema)

module.exports = User