const { CrearProducto } = require("../Metodos/CreateProduct");
const editProduct = require("../Metodos/editProduct");
const EliminarProductID = require("../Metodos/EliminarProduct");
const GetId = require("../Metodos/GetID");
const getProduct = require("../Metodos/getProducts");
const cloudinary = require("cloudinary");
const Router = require("express").Router();

cloudinary.v2.config({
  cloud_name: "dvrsowzhf",
  api_key: "619715953128421",
  api_secret: "4BZId0FMtM7OSHubU5XI0qRXzqU",
});

Router.get("/list", (req, res) => {
  res.send("TODO BIEN");
});

Router.post("/create-product", CrearProducto);
Router.get("/get-Products", getProduct);
Router.delete("/delete-Products/:id", EliminarProductID);
Router.put("/edit-producto/:id", editProduct);
Router.get("/get-producto/:id", GetId);

module.exports = Router;
