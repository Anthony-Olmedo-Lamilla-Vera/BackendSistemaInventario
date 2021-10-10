const ModelUser = require("../Schems/ModelUser");

const ConfirmCorreo = async (req, res, next) => {
  const { Correo } = req.body;
  const ValidateUser = await ModelUser.findOne({ Correo: Correo });
  if (!ValidateUser || ValidateUser === null) {
    next();
  }
  if (ValidateUser) {
    res.status(401).json({ err: "Correo Ya ha sido registrado " });
  }
};
module.exports = ConfirmCorreo;
