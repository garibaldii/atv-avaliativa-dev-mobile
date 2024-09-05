const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    CEP: "18100-180",
    RUA: "Hercules Francischine",
    BAIRRO: "Eden",
    CIDADE: "Sorocaba",
  });
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});
