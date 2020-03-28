
const User = require('../models/user')
const Task = require('../models/task')

class UserController {
  async index (req , res) {
    try {
      const user = await User.find()
      return res.json(user)
    } catch (error) {
      console.log(error)
      res.status(400).json({error: "Error loading users"})
    }
  }

  async findById(req, res){

  }

 async store(req, res){
   try {
     const user = await User.create(req.body)
     return res.json(user)
   } catch (error) {
     console.log(error)
     res.status(400).json({error: "Error creating new user"})
   }

 }

 async update(req, res){

 }

 async delete(req, res){

 }
}

module.exports = new UserController()