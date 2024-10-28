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
const races = [
  {
    name: "Bahrain Grand Prix",
    location: "Sakhir, Bahrain",
    date: new Date(2024, 2, 3),
    length: "5.412 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-bahrain/bahrain-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "Imola Grand Prix",
    location: "Imola, Italy",
    date: new Date(2024, 4, 5),
    length: "4.909 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-imola/imola-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "Belgian Grand Prix",
    location: "Spa-Francorchamps, Belgium",
    date: new Date(2024, 7, 28),
    length: "7.004 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-belgium/belgium-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "Monaco Grand Prix",
    location: "Monte Carlo, Monaco",
    date: new Date(2024, 5, 26),
    length: "3.337 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-monaco/monaco-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "Japanese Grand Prix",
    location: "Suzuka, Japan",
    date: new Date(2024, 9, 13),
    length: "5.807 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-japan/japan-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "Brazilian Grand Prix",
    location: "São Paulo, Brazil",
    date: new Date(2024, 11, 17),
    length: "4.309 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-brazil/brazil-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "British Grand Prix",
    location: "Silverstone, UK",
    date: new Date(2024, 6, 7),
    length: "5.891 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-britain/britain-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
  },
  {
    name: "Australian Grand Prix",
    location: "Melbourne, Australia",
    date: new Date(2024, 3, 24),
    length: "5.278 km",
    image:
      "https://www.formula1.com/content/dam/fom-website/races/2023/race-page-australia/australia-track-map.png.transform/2col/image.png",
    positions: [
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
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
app.get("/tracks", (req, res) => {
  res.render("tracks", { title: "Carreras", races: races });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
