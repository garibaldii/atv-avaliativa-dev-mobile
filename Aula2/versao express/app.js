const express = require("express");
const handleBars = require("express-handlebars");
const bodyParser = require("body-parser");

//Configuração
const app = express();
const port = 8080;

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

//Sabendo se o back está funcionando
app.listen(port, () => {
  console.log(`App rodando na porta ${port} 🚪`);
});
