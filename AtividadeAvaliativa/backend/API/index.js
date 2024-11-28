const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/tarefas", taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta:${port} 🚀`);
});