require("./models/artigo");
const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//Configuração
const app = express();
const port = 8080;
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", handleBars.engine({ default: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/produto", (req, res) => {
  res.render("produto");
});

app.get("/cadastrar_produto", (req, res) => {
  res.render("cadastrar_produto");
});

app.post("/add_produto", (req, res) => {
  let errors = [];

  if (req.body.nome.length < 5) {
    errors.push({ texto: "Campo nome com erro!" });
  }
  if (!req.body.valor) {
    errors.push({ texto: "Campo valor com erro!" });
  }
  if (!req.body.qtd) {
    errors.push({ texto: "Campo Qtd com erro!" });
  }
  if (errors.length > 0) {
    res.render("cadastrar_produto", { errors: errors });
  } else {
    res.send(
      "Produto: " +
        req.body.nome +
        "<br>Valor: " +
        req.body.valor +
        "<br>Qtd: " +
        req.body.qtd +
        "<br>"
    );
  }
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

//Sabendo se o back está funcionando
app.listen(port, () => {
  console.log(`App rodando na porta ${port} 🚪`);
});
