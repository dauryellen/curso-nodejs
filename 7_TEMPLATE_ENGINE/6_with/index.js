const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Esse artigo vai te ajudar a aprender Node.js...",
    comments: 4
  };

  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "Daury",
    surname: "Mendes"
  };

  const auth = true;

  res.render("home", { user: user, auth });
});

app.listen(3000, () => console.log("App funcionando!"));