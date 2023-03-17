const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("/views", "views");

app.get("/", (request, response) => {
  response.render("firstview");
});

app.get("/second", (request, response) => {
  response.render("second");
});

app.get("/third", (req, res) => {
  res.render("third");
});

app.listen(port, () => {
  console.log(port + "is open!");
});
