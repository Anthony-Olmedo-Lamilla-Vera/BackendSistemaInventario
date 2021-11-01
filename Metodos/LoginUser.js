const ModelUser = require("../Schems/ModelUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const { Correo, Contraseña } = req.body;
  const LoginUser = await ModelUser.findOne({ Correo: Correo }).catch((err) =>
    res.status(400).json({
      msg: "Este Correo No existe ",
    })
  );
  if (!LoginUser) {
    res.status(400).send({ err: "Correo no existe" });
  }
  const ContraseñaHash = await bcrypt
    .compare(Contraseña, LoginUser.Contraseña)
    .catch((err) => res.status(400).json(err));

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
};
module.exports = Login;
