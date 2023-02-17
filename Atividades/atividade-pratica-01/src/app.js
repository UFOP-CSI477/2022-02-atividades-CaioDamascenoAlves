const mongooseConnection = require("./config/mongooseConnection.config");

mongooseConnection.connectToDB()

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const donorRoutes = require("./routes/donor.routes");
const tipoRoutes = require("./routes/localColeta.routes");
const doacaoroutes = require("./routes/doacao.routes");
const localRoutes = require("./routes/tipoSanguineo.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.use(index);
app.use("/api/", userRoutes);
app.use("/api/", donorRoutes);
app.use("/api/", tipoRoutes);
app.use("/api/", doacaoroutes);
app.use("/api/", localRoutes);

module.exports = app;
