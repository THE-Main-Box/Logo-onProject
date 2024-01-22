const routes = require("express").Router();
const Tcontroller = require("../controller/TaskController");

routes.get("/", (req, res) => res.render("../views/home"))

routes.get("/cadastro", (req, res)=> res.render("../views/log-on"))

routes.post("/create-user", Tcontroller.createUser)

routes.post("/login", Tcontroller.login)


module.exports = routes;