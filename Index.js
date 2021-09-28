const express = require("express");
const cors = require("cors");
const { Router } = require("../Backend/Routes/Rutas");
const mongoose = require("mongoose");
const app = express();
var bb = require("express-busboy");
const fileUpload = require("express-fileupload");
bb.extend(app, {
  upload: true,
  path: "./Data/files",
  allowedPath: /./,
});
//app.use(fileUpload());
mongoose
  .connect(
    "mongodb+srv://antocraxx:perfect12@cluster0.feg8c.mongodb.net/Shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB conectado "));
app.use(cors());
app.use("/api/v1", require("../Backend/Routes/Rutas"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(process.env.PORT || 5000, () => {
  console.log("================================");
  console.log("=========CONECTADO!=============");
});
