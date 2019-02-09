var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our JSON-CSV parser API");
  });

  app.post("/csv", function(req, res) {
    console.log(req.body);
    res.send(req.body);
  });
};

module.exports = appRouter;
