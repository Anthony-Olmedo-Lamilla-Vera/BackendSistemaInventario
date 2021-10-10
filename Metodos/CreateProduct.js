const moongose = require("mongoose");
const ModeloProduct = require("../Schems/Product");
const Express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");
const ModelUser = require("../Schems/ModelUser");
const jwt = require("jsonwebtoken");

const CrearProducto = async (req, res) => {
  const { Nombre, Categoria, Descripcion, Precio, Cantidad, Marca } =
    await req.body;
  const Imagen = req.files.Img.file;
  const user_id = req.get("TokenUser");
  const Verify = jwt.verify(user_id, "Antox22");

  const { id } = Verify;
  if (!Verify) {
    res.status(400).send({ err: "token Incorrecto" });
  }

  const User = await ModelUser.findById(id);

  const urlimg = await cloudinary.v2.uploader.upload(Imagen);

  const newProduct = await new ModeloProduct({
    Nombre: Nombre,
    Cantidad: Cantidad,
    Categoria: Categoria,
    Descripcion: Descripcion,
    Precio: Precio,
    Img: urlimg.url,
    Marca: Marca,
    UserId: User._id,
  });

  const notaGuardada = await newProduct.save();
  User.ListProducts = await User.ListProducts.concat(newProduct._id);
  await User.save();
  await res.status(200).send({ notaGuardada });
};
module.exports = { CrearProducto };
