const express = require("express");
const compression = require("compression");
const controllers = require("./controller/router");

const app = express();
app.disable("x-powered-by");
app.use(compression());
app.use(express.json());
app.use(controllers);
app.set("port", process.env.PORT || 4000);
module.exports = app;
