// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/mario", function (request, response) {
  response.sendFile(__dirname + "/views/mario.html");
});

app.get("/caesar", function (request, response) {
  response.sendFile(__dirname + "/views/caesar.html");
});

app.get("/css", function (request, response) {
  response.sendFile(__dirname + "/views/css.html");
});

app.get("/bootstrap", function (request, response) {
  response.sendFile(__dirname + "/views/bootstrap.html");
});

app.get("/github", function (request, response) {
  response.sendFile(__dirname + "/views/github.html");
});

app.get("/gitworks", function (request, response) {
  response.sendFile(__dirname + "/views/gitworks.html");
});

app.get("/hypertext", function (request, response) {
  response.sendFile(__dirname + "/views/hypertext.html");
});

app.get("/merges", function (request, response) {
  response.sendFile(__dirname + "/views/merges.html");
});

app.get("/publishing", function (request, response) {
  response.sendFile(__dirname + "/views/publishing.html");
});

app.get("/C", function (request, response) {
  response.sendFile(__dirname + "/views/C.html");
});

app.get("/flutter", function (request, response) {
  response.sendFile(__dirname + "/views/flutter.html");
});

app.get("/micard", function (request, response) {
  response.sendFile(__dirname + "/views/micard.html");
});

app.get("/gitpages", function (request, response) {
  response.sendFile(__dirname + "/views/gitpages.html");
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
