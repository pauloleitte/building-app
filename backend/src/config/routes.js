const express = require("express");

const userController = require("../controller/userController");
const activityController = require("../controller/activityController");
const jwtService = require("../service/JwtService");

const routes = express.Router();

//rotas login
routes.post("/signup", userController.signup)
routes.post("/login", userController.login)


//rotas atividades
routes.get("/activity", activityController.findAll)
routes.get("/activity/:id",  activityController.findOne)
routes.post("/activity", activityController.create)
routes.delete("/activity/:id",  activityController.delete)
routes.put("/activity/:id", activityController.update)



module.exports = routes;