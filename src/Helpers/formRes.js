module.exports = {
  getAllData: (res, response, status) => {
    const form = {
      status, // status: status
      response
    };
    res.json(form);
  },
  getByTitle: (res, response, status) => {
    const form = {
      status, // status: status
      response
    };
    res.json(form);
  },
  getByStatus: (res, response, status) => {
    const form = {
      status, // status: status
      response
    };
    res.json(form);
  },
  getByGenre: (res, response, status) => {
    const form = {
      status, // status: status
      response
    };
    res.json(form);
  },
  getLibrary: (res, response, status) => {
    const form = {
      status, // status: status
      response
    };
    res.json(form);
  },
  insertLibrary: (res, response, status) => {
    const form = {
      status,
      response
    };
    res.json(form);
  },
  // deleteLibrary: (res, response, status) => {
  //   const form = {
  //     status,
  //     response
  //   };
  //   res.json(form);
  // },
  // insertLibrary: (body, res) => {
  //   if (!body.title) {
  //     res.json({
  //       message: 'insert is required'
  //     });
  //   },
  editLibrary: (res, status, body) => {
    const response = {
      status,
      message: "Succes Update",
      data: body
    };
    res.json(response);
  }
};
