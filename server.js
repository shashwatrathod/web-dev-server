import express from "express";
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";

const app = express();

app.use(express.json());

helloController(app);
userController(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
