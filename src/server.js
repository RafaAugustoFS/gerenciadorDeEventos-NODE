const express = require("express");
const router = require("./routers/router");
const sequelize = require("./config/config");

const app = express();
//API modelo JSON
app.use(express.json());

app.use("/api/", router);

app.get("/healthcheck", (req, res) => {
  // 200 -> OK
  return res.status(200).json({
    msg: "Estamos vivos!",
    alive: true,
  });
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso!");
    await sequelize.sync({});
  })
  .then(() => {
    app.listen(8080, () => {
      console.log("#####");
      console.log("Rodando na porta 8080");
      console.log("#####");
    });
  })
  .catch(() => {
    console.error("Erro ao se conectar com o DataBase!");
  });