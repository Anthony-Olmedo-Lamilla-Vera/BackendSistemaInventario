const mongoose = require("mongoose");
const ModeloProduct = require("../Schems/Product");

const getProduct = async (req, res, next) => {
  const getsProducts = await ModeloProduct.find({});
  res.status(200).json(getsProducts);
};
module.exports = getProduct;
