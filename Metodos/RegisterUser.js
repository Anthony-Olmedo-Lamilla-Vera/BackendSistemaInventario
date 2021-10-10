const ModelUser = require("../Schems/ModelUser");
const cloudinary = require("cloudinary");
const bcrypt = require("bcrypt");
const { Mongoose, Schema } = require("mongoose");

const RegisterUser = async (req, res, next) => {
  const { Nombre, Correo, Contraseña } = req.body;
  const { Imagen } = req.files;
  const Img = Imagen.file;

  const urlimg = await cloudinary.v2.uploader.upload(Img);
  const PwdHashed = await bcrypt.hash(Contraseña, 10);
  const NewUser = await new ModelUser({
    Nombre: Nombre,
    Correo: Correo,
    Contraseña: PwdHashed,
    Foto: urlimg.url,
  });

  NewUser.save();
  res.status(200);
  res.send(NewUser);
};
module.exports = RegisterUser;
