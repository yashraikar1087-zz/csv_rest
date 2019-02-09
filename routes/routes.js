var fs = require("fs");

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our JSON-CSV parser API");
  });

  app.post("/csv", function(req, res) {
    fs.writeFile("./procurement.csv", "test", "utf8", function(err) {
      if (err) {
        console.log(
          "Some error occured - file either not saved or corrupted file saved."
        );
      } else {
        console.log("It's saved!");
      }
    });
    console.log(req.body);
    res.send(req.body);
  });
};

module.exports = appRouter;
