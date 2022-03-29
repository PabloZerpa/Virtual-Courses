//------------------------------- SERVER -------------------------------
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const path = require("path");
const app = express();

const youtubeKey = "AIzaSyBIjxF_ECsf6GdNCs4Tci47wNRYiCZxnJc";
const apiUrl = "https://www.googleapis.com/youtube/v3";
//const searchQuery = req.query.search_query;
let search = "html";
const url = `${apiUrl}/search?key=${youtubeKey}&type=video&part=snippet&q=${search}`;

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


// let getData = () =>
// {
//     fetch(`${apiUrl}/search?key=${youtubeKey}`)
//     .then(response => 
//     {
//         return response.json
//     })
//     .then(data => 
//     {
//         console.log(data);
//     })
    
// }

// getData();

const obtenerDatos = async () =>
{
    try
    {
        const datos = await axios.get(url);
        const title = datos.data.items.map((item) => item.snippet.title);
        console.log("Alo");
        console.log(title);
        //console.log(datos.data);
    }
    catch(error)
    {
        console.log(error);
    }
        
}

obtenerDatos();

//------------------------------- START SERVER ------------------------------- 
app.listen(app.get("port"), () =>
{
    console.log("Prueba");
});