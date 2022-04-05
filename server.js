import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
