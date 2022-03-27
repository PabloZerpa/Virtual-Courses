console.log("ALO");
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


// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   let superHeroes = request.response;
//   showHeroes(superHeroes);
// }

// function showHeroes(jsonObj) {
//   let heroes = jsonObj['members'];

//   for(i = 0; i < heroes.length; i++) 
//   {
//     console.log(heroes[i].name);
//     console.log(heroes[i].age);
//     console.log(heroes[i].powers);
//   }
// }

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

function createTag()
{
    let tags = document.getElementById("tags");
    
    const colors = ["blue","red","yellow","green","purple"];
    const lenguages = ["Javascript","TypeScript","HTML","CSS","SASS","LESS",
                        "Bootstrap","Tailwind","React","Vue","Angular","Next",
                        "Nuxt","Svelte","Node","Deno","Express","SQL","NoSQL",
                        "MySQL","MongoDB","PHP","Java","C#","Ruby","Go","C++","C","Rust",
                        "Dart","Flutter","Python","R","Assemble","Kotlin","Swif","M"];
    
    let indexColor = 0;
    for(let i of lenguages)
    {
        let tag = document.createElement("div");
        tag.innerHTML = `<p class=${colors[indexColor]}>#${i}</p>`;
        tags.appendChild(tag);
        if(indexColor>3)
            indexColor = 0;
        else
            indexColor++;
    }
    
}

createTag();
console.log(tags);

