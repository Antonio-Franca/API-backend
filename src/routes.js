const mongoose = require('mongoose')

const express = require('express') ;

const routes = express.Router();

const UserController = require("./controllers/UserController");

const AulaController = require("./controllers/aulaController");

//Usuarios
routes.get("/users",UserController.index);

routes.post('/users', UserController.create);

//Aulas
routes.post("/aulas",AulaController.create);

routes.get("/aulas",AulaController.index);

routes.get("/aulas/:id",AulaController.showAula );

routes.put("/aulas/:id",AulaController.updateAula);

routes.delete("/aulas/:id",AulaController.destroyAula);


module.exports = routes;
