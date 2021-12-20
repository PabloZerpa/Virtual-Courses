//------------------------------- SERVER -------------------------------
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//------------------------------- SETTINGS ------------------------------- 
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
//app.set("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//------------------------------- ROUTER ------------------------------- 
app.use(require("./routes/index.js"));

//------------------------------- STATIC FILES ------------------------------- 
app.use(express.static(path.join(__dirname, "public")));

// const obtenerDatos = async () =>
// {
//     try
//     {
//         const datos = await axios.get("https://www.freetogame.com/api/games")
//         console.log("Alo");
//         console.log(datos.data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
        
// }

// obtenerDatos();

//------------------------------- START SERVER ------------------------------- 
app.listen(app.get("port"), () =>
{
    console.log("Prueba");
});