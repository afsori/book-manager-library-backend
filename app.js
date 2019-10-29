// Memanggil package yg diperlukan
require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./src/Routes/index");

const app = express();

app.listen(7000, () => {
  console.log("Server is running");
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

module.exports = app;

// http://localhost:7000/library?name=Uncensored
//"SELECT * FROM library WHERE status='available'",
//http://localhost:7000/library/title?title=Teman%20Berjuang
//http://localhost:7000/library/delete?
//http://localhost:7000/library/insert?
//http://localhost:7000/library/edit?
