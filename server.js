const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(ejsLayouts);

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "Log In" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
