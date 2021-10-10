const ModelUser = require("../Schems/ModelUser");
const jwt = require("jsonwebtoken");
const GetProfile = async (req, res, next) => {
  const Token = req.get("TokenUser");
  const TokenVerify = jwt.verify(Token, "Antox22");
  const { id } = TokenVerify;
  if (!Token) {
    res.status(400).send({ msg: "Token  Incorrecto" });
  }

  try {
    await ModelUser.findById(id, { Contraseña: 0 })
      .populate("ListProducts")
      .then((ress) => {
        res.status(200).json({ ress, id });
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = GetProfile;
