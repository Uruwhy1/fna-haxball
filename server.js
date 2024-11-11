const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const posts = [
  {
    id: 1,
    author: "Antonio Giovinazzi",
    date: new Date(),
    title:
      "El regreso de Campi genera debate sobre el papel de la FIA en el control de carrera",
    content: `# El regreso de Campi genera debate sobre el papel de la FIA en el control de carrera

El retorno de Campi a las competencias de Fórmula 1 ha generado un encendido debate en torno a la gestión de la **FIA** y su papel en el control de las carreras.

> "El regreso de Campi plantea muchas preguntas sobre la transparencia y coherencia de las decisiones en carrera", comentó un directivo de un equipo.

Desde su controvertida salida tras los incidentes de la temporada anterior, Campi ha estado en el centro de la polémica. Su reincorporación no solo divide a la comunidad del automovilismo, sino que también resalta las tensiones existentes entre los pilotos, los equipos y la FIA.

## Reacciones en el paddock

Varios pilotos han expresado preocupación sobre cómo se tomarán las decisiones durante el resto de la temporada:
- **Cano**, piloto veterano, dijo: "No importa quién esté al mando, necesitamos consistencia".
- Otros pilotos, como los representantes de equipos más pequeños, temen que el regreso de Campi favorezca a las escuderías más grandes.

## La postura de la FIA

La FIA ha defendido la reincorporación de Campi, alegando que la experiencia es clave para evitar errores del pasado. Sin embargo, críticos sostienen que más experiencia no siempre garantiza decisiones justas.

**Resumen:** El regreso de Campi es visto como una apuesta arriesgada por parte de la FIA, y solo el tiempo dirá si este cambio traerá estabilidad o aumentará la controversia en la Fórmula 1.
`,
    image:
      "https://e0.365dm.com/22/07/2048x1152/skysports-michae-masi-f1_5833066.jpg?20220713114246",
  },
  {
    id: 2,
    date: new Date(),
    title: "Cano insinúa su retiro: 'Todavía me queda algo de fuego dentro'",
    content:
      'En una entrevista reciente, el piloto **Cano** dejó entrever la posibilidad de su retiro de la Fórmula 1, generando incertidumbre en el mundo del automovilismo. "Estoy en un punto de mi carrera donde empiezo a pensar en el final, pero todavía me queda algo de fuego dentro", confesó el experimentado piloto, dejando abierta la puerta a la continuidad por al menos una temporada más.\n\n## El legado de Cano\n\nCon una carrera que abarca más de dos décadas, Cano ha acumulado una impresionante lista de logros: múltiples victorias, innumerables podios y una reputación intachable como uno de los mejores pilotos de todos los tiempos. Su habilidad para adaptarse a diferentes coches y equipos ha sido clave para mantenerse competitivo, incluso frente a las nuevas generaciones de pilotos.\n\n> "No es solo una cuestión de velocidad, también es de motivación. Cuando sientes que has dado todo lo que tenías, sabes que es momento de parar", explicó Cano.\n\n## Las opciones para el futuro\n\nAunque aún no ha tomado una decisión definitiva, los rumores apuntan a varias posibilidades. Una de ellas es que Cano podría dedicarse a roles más estratégicos, como consultor para algún equipo, o incluso asumir un puesto directivo. También existe la posibilidad de verlo competir en otras categorías de automovilismo, como la Fórmula E o el WEC.\n\nPor otro lado, Cano dejó claro que su enfoque sigue siendo la temporada actual: **"Quiero terminar este año fuerte y dar lo mejor de mí en cada carrera"**, afirmó. Sin embargo, no negó que este podría ser su último año en la máxima categoría.\n\n## El impacto en la parrilla\n\nDe concretarse su retiro, la Fórmula 1 perdería no solo a un piloto de enorme talento, sino también a una figura icónica que ha sido parte fundamental del espectáculo. Su salida abriría la puerta a nuevos talentos, pero dejaría un vacío difícil de llenar.\n\nSea cual sea su decisión final, los aficionados y expertos coinciden en algo: el legado de Cano perdurará por siempre en la historia de la Fórmula 1.',
    author: "Nikita Mazepin",
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/manual/Hall%20of%20Fame%202024/GettyImages-55768339",
  },
  {
    id: 3,
    date: new Date(),
    author: "Robert Kubica",
    title:
      "La impresionante actuación de Cano revive las esperanzas de Aston Martin para la temporada",
    image:
      "https://fotografias.lasexta.com/clipping/cmsimages01/2023/11/03/813940F0-4C23-4561-9F76-A60BCAA8E001/fernando-alonso-brasil_98.jpg?crop=5272,2966,x0,y0&width=1900&height=1069&optimize=low&format=webply",
  },
  {
    id: 4,
    date: new Date(),
    author: "Robert Kubica",
    title: "Ricciardelli acusado de racismo por parte de Shiryu",
    content: `La reciente controversia entre los pilotos **Ricciardelli** y **Shiryu** ha estallado, con acusaciones de racismo que han sacudido el mundo del automovilismo. Ricciardelli, un talentoso piloto argentino, se encuentra en el ojo del huracán tras las declaraciones de su rival brasileño, Shiryu.

## El contexto de la rivalidad

Desde que ambos pilotos comenzaron sus carreras, han demostrado ser dos de los más rápidos en la pista. Su competencia ha captado la atención de los aficionados, pero también ha generado tensiones entre ellos. La rivalidad ha llegado a su punto máximo recientemente, y las emociones han estado a flor de piel.

## La acusación de Shiryu

En una conferencia de prensa, Shiryu declaró: "Las palabras de Ricciardelli durante la carrera fueron inaceptables y reflejan un desprecio hacia mi cultura". Estas acusaciones han causado un gran revuelo, llevando a los medios de comunicación a investigar la situación más a fondo.

> "No es solo una carrera; es una cuestión de respeto y dignidad", agregó Shiryu, defendiendo su postura ante el escándalo.

## Reacciones del público y de la FIA

Las reacciones han sido mixtas. Algunos aficionados apoyan a Shiryu, pidiendo que se tomen medidas enérgicas contra Ricciardelli. Otros, sin embargo, argumentan que la rivalidad ha sido llevada a extremos y que las declaraciones de Shiryu son una sobre reacción.

La **FIA** ha anunciado que está investigando las acusaciones y que se tomarán acciones si es necesario. "El respeto y la inclusión son valores fundamentales en nuestro deporte", afirmaron en un comunicado oficial.

## Conclusión

Esta controversia pone de relieve la necesidad de abordar el racismo y la intolerancia en el deporte. A medida que la situación se desarrolla, tanto Ricciardelli como Shiryu están en el centro de una discusión que podría tener repercusiones duraderas en sus carreras y en el automovilismo en general.`,
    image:
      "https://e0.365dm.com/20/09/2048x1152/skysports-lewis-hamilton-mercedes_5097251.jpg?20200915112218",
  },
  {
    id: 5,
    date: new Date(),
    author: "Vinicius Jr",
    title: "Amor en la Pista: Chimichan y Mou Revelan su Relación",
    content: `Durante los entrenamientos libres de este fin de semana, se produjo un fuerte altercado entre **Kev1**, el piloto argentino, y **Hax**, el veloz competidor húngaro. La tensión que ya se había acumulado entre ambos a lo largo de la temporada estalló en el circuito, lo que dejó a los aficionados y miembros del equipo atónitos.

## El incidente

Todo comenzó cuando Kev1, al adelantar a Hax en una curva cerrada, lo empujó hacia el borde de la pista. Esto llevó a Hax a perder el control temporalmente de su auto. Al finalizar la sesión, ambos pilotos se encontraron en el área de paddock, y las cosas rápidamente se tornaron hostiles.

**Kev1** no tardó en expresar su frustración: "¡Eres un mal piloto, Hax! ¡No sabes cómo conducir!" ("You are a bad driver, Hax! You don’t know how to drive!").

Por su parte, **Hax** respondió con una mezcla de ira y desprecio, gritando: "Megmutatom, mi az igazi sebesség, te hülye argentin!" ("I will show you what real speed is, you stupid Argentine!").

## Reacciones en el paddock

El altercado fue presenciado por varios miembros del equipo y otros pilotos, quienes rápidamente intervinieron para calmar la situación. Sin embargo, los ecos de la discusión se escucharon por todo el paddock, generando un gran revuelo entre los equipos y los aficionados.

Los directores de equipo de ambos pilotos han declarado que están investigando el incidente y que tomarán medidas si es necesario. "El respeto en el deporte es fundamental", afirmó el director del equipo de Kev1. 

## Conclusión

Este incidente ha puesto de relieve la creciente rivalidad entre Kev1 y Hax, y muchos se preguntan cómo afectará esto a sus actuaciones en las próximas carreras. Mientras tanto, los aficionados continúan debatiendo sobre el incidente en las redes sociales, mostrando un interés renovado por la dinámica entre estos dos talentosos pilotos. `,
    image:
      "https://media.wired.com/photos/59322e114dc9b45ccec5c73b/master/pass/P-20150424-00966_HiRes-JPEG-24bit-RGB.jpg",
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
      { driver: "Uruwhy", laptime: "35.324s" },
    ],
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
  },
];
const drivers = [
  {
    id: 1,
    name: "Lewis Hamilton",
    team: "Mercedes",
    country: "United Kingdom",
    wins: 103,
    points: 4500,
    podiums: 196,
    top10: 270,
    value: 70,
  },
  {
    id: 2,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    country: "Netherlands",
    wins: 51,
    points: 3000,
    podiums: 95,
    top10: 140,
    value: 50,
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "Ferrari",
    country: "Monaco",
    wins: 5,
    points: 1300,
    podiums: 27,
    top10: 85,
    value: 15,
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
app.get("/news/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  res.render("individualArticle", { title: post.title, post: post });
});

app.get("/tracks", (req, res) => {
  res.render("tracks", { title: "Carreras", races: races });
});
app.get("/tracks/:id", (req, res) => {
  const race = races.find((r) => r.id === parseInt(req.params.id));
  res.render("individualTrack", { title: "Carreras", race: race });
});

app.get("/drivers", (req, res) => {
  res.render("drivers", { title: "Pilotos", drivers: drivers });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
