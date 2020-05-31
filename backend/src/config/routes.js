const express = require("express");

const userController = require("../controller/userController");
const activityController = require("../controller/activityController");
const nactivityController = require("../controller/nActivityController");

const jwtService = require("../service/JwtService");

const router = express.Router();

//rotas login
router.post("/signup", userController.signup)
router.post("/login", userController.login)


//rotas atividades
nactivityController.register(router, "/activity");


// routes.get("/activity", activityController.findAll)
// routes.get("/activity/:id",  activityController.findOne)
// routes.post("/activity", activityController.create)
// routes.delete("/activity/:id",  activityController.delete)
// routes.put("/activity/:id", activityController.update)



module.exports = router;