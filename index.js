const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the EC2-BABY");
});

app.get("/info", (req, res) => {
  res.send("hey this is /the slash");
});

app.listen(80, () => {
  console.log("listening on 80");
});
