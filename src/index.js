const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("ejs");

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ "extended": false })); //para entender datos de un formulario
app.use(express.static(path.join(__dirname, "public")));

//settings
app.set("appName", "Cinko Multimarket");
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routing
app.get("/", (req, res) => {
    res.render("home", {
        titulo: "Cinco Multimarket"
    });
});

app.get("/usuario/:user", (req, res) => {
    res.send(`Hola ${req.params.user} !`);
});

//si no encuentra ruta 
app.use((req, res) => {
    res.status(404).send("La página que buscas no existe.");
});

app.listen(app.get("port"));