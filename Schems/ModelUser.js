const mongoose = require("mongoose");
const SchemaUser = new mongoose.Schema(
  {
    Nombre: String,
    Correo: String,
    Foto: String,
    Contraseña: String,
    ListProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const ModelUser = mongoose.model("Users", SchemaUser);
module.exports = ModelUser;
