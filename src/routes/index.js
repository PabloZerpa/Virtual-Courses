
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
    res.render("category", {title: "prueba"});
    //res.sendFile(path.join(__dirname, "views/index.html"));
});

module.exports = router;