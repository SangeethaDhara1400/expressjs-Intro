const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.get("/date", (request, response) => {
  const date = new Date(2022, 01, 13);
  response.send(`${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
