
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

        const apiKey = "AIzaSyDE3DtU3DtW_qqBe0KUmhrj11KNqByNk0Y";
        const apiUrl = "https://www.googleapis.com/youtube/v3";
        let url;
        let itemToSearch = ["React.js", "Deno.js", "Nuxt.js", "CSS", "MySQL", "Java"];
        //let videosTitles = ["", "", "", "", "", ""];
        let videosUrls = ["", "", "", "", "", ""];

        const obtenerDato = async (search) =>
        {
            let dato;

            try
            {
                url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${search}`;
                await axios.get(url)
                .then(response => {
                    //let videoTitle = response.data.items.map((item) => item.snippet.title);
                    let videoUrl = response.data.items.map((item) => item.id.videoId);
                    dato = "https://www.youtube.com/embed/" + videoUrl[0];
                    console.log("Dentro del axios: " + x);

                    });

            }
            catch(error)
            {
                console.log(error);
            }
            console.log("Dentro de la funcion: " + dato);
            return dato;
            
        }

       const obtenerUrls = async () =>
        {
            videosUrls[0] = await obtenerDato(itemToSearch[0]);
            videosUrls[1] = await obtenerDato(itemToSearch[1]);
            videosUrls[2] = await obtenerDato(itemToSearch[2]);
            videosUrls[3] = await obtenerDato(itemToSearch[3]);
            videosUrls[4] = await obtenerDato(itemToSearch[4]);
            videosUrls[5] = await obtenerDato(itemToSearch[5]);

            console.log("Dentro de la otra funcion: " + videosUrls);

            res.render("courses", 
            {   
                urls: videosUrls,
                titles: itemToSearch,

            });
        }

        obtenerUrls();
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