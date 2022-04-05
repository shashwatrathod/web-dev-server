const helloController = (app) => {
  app.get("/hello", (req, res) => {
    res.send("Hello world!");
  });
};

export default helloController;
