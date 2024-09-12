require("./models/artigo");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Artigo = mongoose.model("artigo");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão realizada com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro: Conexão não foi estabelecida!");
  });

app.post("/artigo", async (req, res) => {
  const artigo = await Artigo.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Erro: Artigo não foi cadastrado com sucesso!",
      });

    return res.status(200).json({
      error: false,
      message: "Artigo cadastrado com sucesso!",
    });
  });
});
