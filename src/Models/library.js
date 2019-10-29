const db = require("../Configs/db");

module.exports = {
  getAllData: libraryAllData => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM library", [libraryAllData], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  getByStatus: libraryStatus => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM library WHERE status=?",
        [libraryStatus],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  getByGenre: libraryGenre => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM library WHERE genre=?",
        [libraryGenre],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  getByTitle: libraryTitle => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM library WHERE title=?",
        [libraryTitle],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  // insertLibrary: body => {
  //   return new Promise((resolve, reject) => {
  //     db.query("INSERT INTO library SET ?", [body], (err, response) => {
  //       if (!err) {
  //         resolve(response);
  //       } else {
  //         reject(err);
  //       }
  //     });
  //   });
  // },
  // deleteLibrary: id => {
  //   return new Promise((resolve, reject) => {
  //     const query = "DELETE FROM librry WHERE id=?";
  //     db.query(query, [id], (err, res) => {
  //       if (!err) {
  //         resolve(res);
  //       } else {
  //         reject(err);
  //       }
  //     });
  //   });
  // },
  deleteLibrary: library_id => {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM library WHERE library_id = ?";
      db.query(query, [library_id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  //route untuk delete data
  // app.post('/delete',(req, res) => {
  //   let sql = "DELETE FROM product WHERE product_id="+req.body.product_id+"";
  //   let query = conn.query(sql, (err, results) => {
  //     if(err) throw err;
  //       res.redirect('/');
  //   });
  // });

  insertLibrary: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO library SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  editLibrary: (body, library_id) => {
    return new Promise((resolve, reject) => {
      let query = `UPDATE library SET ? WHERE library_id = ?`;
      db.query(query, [body, library_id], (err, response) => {
        if (!err) {
          console.log(query);
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
  //WHERE library_id = ?
};
