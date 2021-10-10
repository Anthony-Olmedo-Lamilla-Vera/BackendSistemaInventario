const { check, validationResult } = require("express-validator");

const validateCreate = [
  check("Nombre").isString(),
  check("Correo").isEmail(),
  check("Contraseña").isLength({ min: 5 }),
  (req, res, next) => {
    validacion(req, res, next);
  },
];
const validacion = (req, res, next) => {
  try {
    res.status(200);
    validationResult(req).throw();
    next();
  } catch (err) {
    res.status(404);
    return res.send({ error: err.array() });
  }
};

module.exports = validateCreate;
