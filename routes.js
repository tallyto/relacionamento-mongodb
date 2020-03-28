const {Router} = require('express')
const routes = Router()
const ProjectController = require('./controllers/ProjectController')
const UserController = require('./controllers/UserController')


routes.get("/projects", ProjectController.index)
routes.get("/projects/:id", ProjectController.findById)
routes.post("/projects", ProjectController.store)
routes.put("/projects/:id", ProjectController.update)
routes.delete("/projects/:id", ProjectController.delete)

routes.get("/users", UserController.index)
routes.get("/users/:id", UserController.findById)
routes.post("/users", UserController.store)
routes.put("/users/:id", UserController.update)
routes.delete("/users/:id", UserController.delete)






module.exports = routes