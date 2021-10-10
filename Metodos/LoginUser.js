const ModelUser = require("../Schems/ModelUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const { Correo, Contraseña } = req.body;
  const LoginUser = await ModelUser.findOne({ Correo: Correo }).catch((err) =>
    console.error("err")
  );
  const ContraseñaHash = await bcrypt.compare(Contraseña, LoginUser.Contraseña);
  try {
    if (ContraseñaHash) {
      const user = {
        nombre: LoginUser.Nombre,
        id: LoginUser._id,
      };
      const Token = jwt.sign(user, "Antox22", { expiresIn: "2h" });
      res.setHeader("TokenUser", Token);
      console.log(Token);
      res.status(200).send({ token: Token, message: "Logeo Correcto" });
    }
    if (!ContraseñaHash) {
      res.status(404).json({ msg: "Correo o Contraseña Incorrecta" });
    }
  } catch (err) {
    res.status(400).send({
      err: err,
      msg: { 0: "Correo o Contraseña Incorrecta", 1: "Intenta Nuevamente " },
    });
  }
};
module.exports = Login;
