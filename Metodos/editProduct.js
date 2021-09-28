const ModeloProduct = require("../Schems/Product");

const editProduct = async (req, res, next) => {
  const id = req.params.id;
  const { Nombre, Categoria, Descripcion, Img, Precio, Cantidad, Marca } =
    await req.body;

  const getsProducts = await ModeloProduct.findByIdAndUpdate(id, {
    Nombre: Nombre,
    Cantidad: Cantidad,
    Categoria: Categoria,
    Descripcion: Descripcion,
    Precio: Precio,
    Marca: Marca,
    Img: Img,
  })
    .then((x) => res.status(200).send({ x }))
    .catch((err) => res.status(400).send({ err: "errror de gets id update" }));
};
module.exports = editProduct;
