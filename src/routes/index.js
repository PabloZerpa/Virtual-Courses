
const express = require("express");
const router = express.Router();
const axios = require("axios");

//------------------------ ROUTER ------------------------------- 
router.get("/", (req,res) => 
{
    console.log(__dirname, "views/index");
    res.render("index");
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

                    });

            }
            catch(error)
            {
                console.log(error);
            }
            return dato;
            
        }

       const obtenerUrls = async () =>
        {
            for (let i = 0; i < itemToSearch.length; i++) 
            {
                videosUrls[i] = await obtenerDato(itemToSearch[i]);
            }

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
        lenguages: lenguages

    });
});

module.exports = router;