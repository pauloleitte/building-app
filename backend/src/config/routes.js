const express = require("express");

const userController = require("../controller/userController");
const activityController = require("../controller/activityController");
const jwtService = require("../service/JwtService");

const routes = express.Router();

//rotas login
routes.post("/signup", userController.signup)
routes.post("/login", userController.login)


//rotas atividades
routes.get("/activity", jwtService.validate, activityController.findAll)
routes.get("/activity/:id", jwtService.validate, activityController.findOne)
routes.post("/activity", jwtService.validate, activityController.create)
routes.delete("/activity/:id", jwtService.validate, activityController.delete)
routes.put("/activity/:id", jwtService.validate, activityController.update)



module.exports = routes;