const express = require("express");
const app = express();
app.listen("4000", function () {
  console.log("server is running on the portx cs");
});

app.get("/", (req, res) => {
  res.send("hello world2");
});

app.get("/home", (req, res) => {
  res.send("Inside Home COntainer");
});

