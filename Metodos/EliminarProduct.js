const mongoose = require("mongoose");
const ModeloProduct = require("../Schems/Product");

const EliminarProductID = (req, res) => {
  console.log(req.params.id);
  ModeloProduct.findByIdAndRemove(req.params.id)
    .then((x) => res.status(200).send({ "Eliminado ": x }))
    .catch((err) => res.status(500).send({ err }));
};
module.exports = EliminarProductID;
