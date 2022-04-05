import express from "express";
import helloController from "./controllers/hello-controller.js";

const app = express();

helloController(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
