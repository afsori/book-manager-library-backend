const express = require("express");
const libraryController = require("../Controllers/library");

const Router = express.Router();

Router.get("/", libraryController.getAllData);
Router.get("/title", libraryController.getByTitle);
Router.post("/insert", libraryController.insertLibrary);
Router.put("/edit", libraryController.editLibrary);

// Router.delete('/', novelController.deleteNovel);
Router.delete("/delete", libraryController.deleteLibrary);
Router.get("/status", libraryController.getByStatus);
Router.get("/genre", libraryController.getByGenre);

module.exports = Router;
