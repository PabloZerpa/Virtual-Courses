
const express = require("express");
const router = express.Router();

const axios = require("axios");

//------------------------ ROUTER ------------------------------- 
router.get("/", (req,res) => 
{
    console.log(__dirname, "views/index");
    res.render("index", {title: "prueba"});
    //res.sendFile(path.join(__dirname, "views/index.html"));
});

router.get("/courses", (req,res) => 
{
    (async() => {

        const apiKey = "AIzaSyDE3DtU3DtW_qqBe0KUmhrj11KNqByNk0Y";
        const apiUrl = "https://www.googleapis.com/youtube/v3";
        let url;
        let itemToSearch = ["react.js", "deno.js", "nuxt.js", "css", "c#", "java"];
        let videosTitles = ["", "", "", "", "", ""];
        let videosUrls = ["", "", "", "", "", ""];

        const obtenerDato = async () =>
        {
            try
            {
                url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${itemToSearch[i]}`;
                await axios.get(url)
                .then(response => {
                    let videoTitle = response.data.items.map((item) => item.snippet.title);
                    let videoUrl = response.data.items.map((item) => item.id.videoId);
                    videosUrls[i] = "https://www.youtube.com/embed/" + videoUrl[0];
                    videosTitles[i] = videoTitle[0];
                    //console.log(datos.data);
                    //console.log(videosTitles[i]);
                    console.log("Dentro del axios: " + videosUrls[i]);

                    });

            }
            catch(error)
            {
                console.log(error);
            }
            console.log("Dentro de la funcion: " + videosUrls[i]);
            return videosUrls[i];
            
        }

       const obtenerVarios = async () =>
        {
            for(i=0; i < itemToSearch.length; i++)
            {
                videosUrls[i] = await obtenerDato(itemToSearch[i]);
            }
            console.log("Dentro de la otra funcion: " + videosUrls);
        }

        obtenerVarios();

        res.render("courses", 
        {   
            title: "prueba",
            urls: videosUrls,
            titles: videosTitles,

        });

    })();

    
});

router.get("/category", (req,res) => 
{
    const lenguages = ["Javascript","TypeScript","HTML","CSS","SASS","LESS",
                    "Bootstrap","Tailwind","React","Vue","Angular","Next",
                    "Nuxt","Svelte","Node","Deno","Express","SQL","NoSQL",
                    "MySQL","MongoDB","PHP","Java","C#","Ruby","Go","C++","C","Rust",
                    "Dart","Flutter","Python","R","Assemble","Kotlin","Swif","M"];
                    
    res.render("category", 
    {
        title: "prueba",
        lenguages: lenguages

    });
});

module.exports = router;