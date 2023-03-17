const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static"));
// __dirname 현재위치

app.get("/", function (request, response) {
  //  response.send("Hello espress");
  response.render("test");
});

app.get("/login", (request, response) => {
  response.render("login");
});

app.get("/login/register", (req, res) => {
  res.render("register");
});

// request : 클라이언트가 서버에게 보내는 요청
// response : 서버가 클라이언트에게 보내는 응답

app.listen(port, () => {
  console.log(port + "is open!");
});
