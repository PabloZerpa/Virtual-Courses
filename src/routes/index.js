
const express = require("express");
const router = express.Router();

//------------------------ ROUTER ------------------------------- 
router.get("/", (req,res) => 
{
    console.log(__dirname, "views/index");
    res.render("index", {title: "prueba"});
    //res.sendFile(path.join(__dirname, "views/index.html"));
});

router.get("/courses", (req,res) => 
{
    res.render("courses", {title: "prueba"});
    //res.sendFile(path.join(__dirname, "views/index.html"));
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
    //res.sendFile(path.join(__dirname, "views/index.html"));
});

module.exports = router;