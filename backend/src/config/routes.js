const express = require("express");

const userController = require("../controller/userController");
const activityController = require("../controller/activityController");
const jwtService = require("../service/JwtService");

const routes = express.Router();

//rotas login
routes.post("/signup", userController.signup)
routes.post("/login", userController.login)


//rotas atividades
routes.get("/activity", jwtService.validate, activityController.find)
routes.post("/activity", jwtService.validate, activityController.create)
routes.delete("/activity", jwtService.validate, activityController.delete)
routes.put("/activity", jwtService.validate, activityController.update)



module.exports = routes;