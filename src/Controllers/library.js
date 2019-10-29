const libraryModel = require("../Models/library");
const formRes = require("../Helpers/formRes");

module.exports = {
  getAllData: (req, res) => {
    // const libraryName = req.params.name
    const libraryAllData = req.query.data;
    libraryModel
      .getAllData(libraryAllData)
      .then(response => formRes.getAllData(res, response, 200))
      .catch(err => console.log(err));
  },
  getByStatus: (req, res) => {
    // const libraryName = req.params.name
    const libraryStatus = req.query.status;
    libraryModel
      .getByStatus(libraryStatus)
      .then(response => formRes.getByStatus(res, response, 200))
      .catch(err => console.log(err));
  },
  getByGenre: (req, res) => {
    // const libraryName = req.params.name
    const libraryGenre = req.query.genre;
    libraryModel
      .getByGenre(libraryGenre)
      .then(response => formRes.getByGenre(res, response, 200))
      .catch(err => console.log(err));
  },
  getByTitle: (req, res) => {
    // const libraryName = req.params.name;
    const libraryTitle = req.query.title;
    libraryModel
      .getByTitle(libraryTitle)
      .then(response => formRes.getByTitle(res, response, 200))
      .catch(err => console.log(err));
  },
  insertLibrary: (req, res) => {
    // let date = moment().format("YYYY-MM-DD HH:mm:ss");
    let body = {
      ...req.body
      // created_at: date,
      // updated_at: date
    };

    libraryModel
      .insertLibrary(body)
      .then(result => {
        formRes.insertLibrary(res, 201, body);
        console.log(result);
      })
      .catch(err => {
        // errorHandling.insertLibraryErrorHandling(body, res);
        console.log(err);
      });
  },
  // insertLibrary: (req, res) => {
  //   //   const bodyReq = req.body;
  //   const body = {
  //     ...req.body,
  //     title: title,
  //     author: author,
  //     status: status,
  //     genre: genre
  //   };
  //   // let data = {
  //   //   product_name: req.body.product_name,
  //   //   product_price: req.body.product_price
  //   // };
  //   // {title: 'pikachu'} => title='pikachu', latitude=20
  //   //   console.log (body);
  //   libraryModel
  //     .insertLibrary(body)
  //     .then(response => formRes.insertLibrary(res, response, 201))
  //     .catch(err => console.log(err));
  // },
  // deleteLibrary: (req, res) => {
  //   // const libraryDelete = req.params.delete;
  //   // const libraryDelete = req.query.delete;
  //   const id = parseInt(req.body.id);
  //   libraryModel
  //     .deleteLibrary(id)
  //     .then(result => {
  //       if (result.affectedRows === 0) {
  //         res.json({ message: `Cannot find id ${id}` });
  //       }
  //       res.json({
  //         message: "success delete"
  //       });
  //       console.log(result);
  //     })
  //     .catch(err => console.log(err));
  // },
  deleteLibrary: (req, res) => {
    let library_id = parseInt(req.body.library_id);

    libraryModel
      .deleteLibrary(library_id)
      .then(result => {
        if (result.affectedRows === 0) {
          res.json({ message: `Cannot find id ${library_id}` });
        }
        res.json({
          message: "Succes Delete "
        });
        console.log(result);
      })
      .catch(err => {
        res.json(err);
      });
  },
  editLibrary: (req, res) => {
    // let date = moment().format("YYYY-MM-DD HH:mm:ss");
    let body = {
      ...req.body,
      library_id: parseInt(req.body.library_id)
      // author: parseInt(req.body.author),
      // genre: parseInt(req.body.genre),
      // status: parseInt(req.body.status)
      // updated_at: date
    };
    libraryModel
      .editLibrary(body, body.library_id)
      .then(result => {
        formRes.editLibrary(res, 200, body);
        console.log(result);
      })
      .catch(err => {
        // errorHandling.insertLibraryErrorHandling(body, res);
        console.log(err);
      });
  }
};
