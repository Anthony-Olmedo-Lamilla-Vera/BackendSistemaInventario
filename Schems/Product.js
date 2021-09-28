const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const SchemeProduct = new Schema(
  {
    Nombre: String,
    Marca: String,
    Cantidad: Number,
    Categoria: String,
    Descripcion: String,
    Precio: Number,
    Img: String,
  },
  {
    timestamps: true,
  }
);
const ModeloProduct = mongoose.model("Products", SchemeProduct);
module.exports = ModeloProduct;
