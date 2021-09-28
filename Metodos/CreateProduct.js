const moongose = require("mongoose");
const ModeloProduct = require("../Schems/Product");
const Express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");

const CrearProducto = async (req, res) => {
  const { Nombre, Categoria, Descripcion, Precio, Cantidad, Marca } =
    await req.body;
  const Imagen = req.files.Img.file;
  console.log(req.files.Img.file);
  const urlimg = await cloudinary.v2.uploader.upload(Imagen);
  console.log(urlimg.url);

  const newProduct = await new ModeloProduct({
    Nombre: Nombre,
    Cantidad: Cantidad,
    Categoria: Categoria,
    Descripcion: Descripcion,
    Precio: Precio,
    Img: urlimg.url,
    Marca: Marca,
  });

  newProduct.save();
  await res.status(200).send({ newProduct });
  console.log({ newProduct });
};
module.exports = { CrearProducto };
