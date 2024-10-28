const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const posts = [
  {
    author: "Antonio Giovinazzi",
    date: new Date(),
    title:
      "El regreso de Campi genera debate sobre el papel de la FIA en el control de carrera",
    image:
      "https://e0.365dm.com/22/07/2048x1152/skysports-michae-masi-f1_5833066.jpg?20220713114246",
  },
  {
    date: new Date(),
    title: "Cano insinúa su retiro: 'Todavía me queda algo de fuego dentro'",
    author: "Nikita Mazepin",
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-55768339",
  },
  {
    date: new Date(),
    author: "Robert Kubica",
    title:
      "La impresionante actuación de Cano revive las esperanzas de Aston Martin para la temporada",
    image:
      "https://fotografias.lasexta.com/clipping/cmsimages01/2023/11/03/813940F0-4C23-4561-9F76-A60BCAA8E001/fernando-alonso-brasil_98.jpg?crop=5272,2966,x0,y0&width=1900&height=1069&optimize=low&format=webply",
  },
];

app.use(express.static(path.join(__dirname, "public")));
app.use(ejsLayouts);

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "Log In" });
});
app.get("/news", (req, res) => {
  res.render("news", { title: "Noticias", posts: posts });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
