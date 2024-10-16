import { AppDataSource } from "./data-source";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((error) => console.error("Erro ao conectar ao banco de dados", error));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
