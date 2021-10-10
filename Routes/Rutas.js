const { CrearProducto } = require("../Metodos/CreateProduct");
const editProduct = require("../Metodos/editProduct");
const EliminarProductID = require("../Metodos/EliminarProduct");
const GetId = require("../Metodos/GetID");
const getProduct = require("../Metodos/getProducts");
const cloudinary = require("cloudinary");
const RegisterUser = require("../Metodos/RegisterUser");
const validateCreate = require("../Middlewarse/ValidatorUser");
const Login = require("../Metodos/LoginUser");
const ConfirmCorreo = require("../Middlewarse/ConfirmCorreo");
const GetProfile = require("../Metodos/GetProfile");
const Router = require("express").Router();

cloudinary.v2.config({
  cloud_name: "dvrsowzhf",
  api_key: "619715953128421",
  api_secret: "4BZId0FMtM7OSHubU5XI0qRXzqU",
});

Router.get("/list", (req, res) => {
  res.send("TODO BIEN");
});

Router.delete("/delete-Products/:id", EliminarProductID);

Router.put("/edit-producto/:id", editProduct);

Router.post("/Register/user", validateCreate, ConfirmCorreo, RegisterUser);
Router.post("/login/user", Login);
Router.post("/create-product", CrearProducto);

Router.get("/get-Products", getProduct);
Router.get("/get-producto/:id", GetId);
Router.get("/Perfil/user", GetProfile);
Router.get("/Informacion/user");

Router.post("/pruebas", (req, res) => {
  res.setHeader("token", "Token Listo vamoss");
  const TokenUser = res.set({
    token: "545",
  });
  console.log(req.get("token"));
});
module.exports = Router;
