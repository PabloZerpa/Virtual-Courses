
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
