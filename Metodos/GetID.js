const mongoose = require("mongoose");
const ModeloProduct = require("../Schems/Product");

const GetId = async (req, res, next) => {
  const id = req.params.id;
  const getsProducts = await ModeloProduct.findById(id);
  res.status(200).json(getsProducts);
};
module.exports = GetId;
