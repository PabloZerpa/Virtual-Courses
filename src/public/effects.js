
let lightIcon = document.getElementById("light");
let darkIcon = document.getElementById("dark");
let searchIcon = document.getElementById("search");
let loginIcon = document.getElementById("login");
let searchClose = document.getElementById("searchClose");
let loginClose = document.getElementById("loginClose");
let nav = document.getElementById("nav");
let body = document.getElementById("body");

let signUp = document.getElementById("showSignUp");
let signIn = document.getElementById("showSignIn");

//-------------------- CHANGE THEME --------------------
darkIcon.addEventListener('click', () => 
{
    document.body.classList.toggle("lightTheme");
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
})
lightIcon.addEventListener('click', () => 
{
    document.body.classList.remove("lightTheme");
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
})

//-------------------- SEARCH EFFECTS --------------------
searchIcon.addEventListener("click", function()
{
    document.getElementById("searchArea").style.opacity = "1";
    document.getElementById("searchArea").style.transform = "scale(1)";
    document.getElementById("searchInput").focus();
});
searchClose.addEventListener("click", function()
{
    document.getElementById("searchArea").style.opacity = "0";
    document.getElementById("searchArea").style.transform = "scale(0.2)";
});

//-------------------- LOGIN AREA EFFECTS --------------------
loginIcon.addEventListener("click", function()
{
    document.getElementById("loginArea").style.opacity = "1";
    document.getElementById("loginArea").style.transform = "scale(1)";
    document.getElementById("emailInput").focus();
});
loginClose.addEventListener("click", function()
{
    document.getElementById("loginArea").style.opacity = "0";
    document.getElementById("loginArea").style.transform = "scale(0.2)";
});

//-------------------- CHANGE LOGIN AREA --------------------
document.getElementById("showSignUp").addEventListener("click", function()
{
    document.getElementById("signUpArea").style.display = "flex";
    document.getElementById("signInArea").style.display = "none";
    document.getElementById("userNameInput").focus();
});
document.getElementById("showSignIn").addEventListener("click", function()
{
    document.getElementById("signUpArea").style.display = "none";
    document.getElementById("signInArea").style.display = "flex";
    document.getElementById("emailInput").focus();
});

const apiKey = "AIzaSyDE3DtU3DtW_qqBe0KUmhrj11KNqByNk0Y";
const apiUrl = "https://www.googleapis.com/youtube/v3";
let url;
let itemToSearch = ["react.js", "deno.js", "nuxt.js", "css", "c#", "java"];
let videoUrls = ["", "", "", "", "", ""];

const obtenerDato = async (search) =>
{
    let videoTitle;
    let videoUrl;

    try
    {
        url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${search}`;
        const datos = await axios.get(url);
        videoTitle = datos.data.items.map((item) => item.snippet.title);
        videoUrl = datos.data.items.map((item) => item.id.videoId);
        console.log(datos.data);
        console.log(videoTitle[0]);
    }
    catch(error)
    {
        console.log(error);
    }
    return videoUrl[0];
        
}

const obtenerVarios = async () =>
{
    for(i=0; i < itemToSearch.length; i++)
    {
        videoUrls[i] = obtenerDato(itemToSearch[i]);
    }
    console.log(videoUrls);
}

obtenerVarios();
