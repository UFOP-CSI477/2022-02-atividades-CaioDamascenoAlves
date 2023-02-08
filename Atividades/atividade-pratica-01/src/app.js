const mongooseConnection = require("./config/mongooseConnection.config");

mongooseConnection.connectToDB()

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.use(index);
app.use("/api/", userRoutes);

module.exports = app;
