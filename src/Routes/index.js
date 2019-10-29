const express = require("express");
const library = require("./library");
// const getByGenre = require("./getByGenre");

const Router = express.Router();
//untuk manggil library
// Router.use("getAllData", getAllData);
Router.use("/library", library);

module.exports = Router;
