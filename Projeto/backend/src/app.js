const mongooseConnection = require("./config/mongooseConnection.config");

mongooseConnection.connectToDB();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const petRoutes = require("./routes/pet.routes");
const pessoaRoutes = require("./routes/pessoa.routes");
const doacaoRoutes = require("./routes/doacao.routes");
const adocaoRoutes = require("./routes/adocao.routes");
const imagensRoutes = require("./routes/imagem.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.use(index);
app.use("/api/", userRoutes);
app.use("/api/", pessoaRoutes);
app.use("/api/", petRoutes);
app.use("/api/", adocaoRoutes);
app.use("/api/", doacaoRoutes);
app.use("/api/", imagensRoutes);

module.exports = app;
