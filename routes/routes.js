var routes = require("../csvfile_process/csvfile.js");

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our JSON-CSV parser API");
  });

  app.post("/csv", function(req, res) {
    // console.log(req.body);    // req.body already comes in as an ObjectLiteralnpm
    res.send(req.body);
    routes.fileExists('./csvfile_process/procurement.csv', req.body);
    // routes.csvData(req.body);
  });
};

module.exports = appRouter;