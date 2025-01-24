// On recupere le bouton du dark mode
let DarkModeButton = document.getElementById("DarkMode");

// On récupère les différents elements de notre page a modifier
let body = document.querySelector("body");
let tabList = document.getElementsByClassName("tab");
let tabActive = document.getElementsByClassName("tabActive");
let submitButton = document.getElementById("submit");
let Myform = document.getElementById("myForm");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

// On ajoute la fonction au click du bouton dark mode
DarkModeButton.addEventListener("click", function() 
{
    body.classList.toggle("DarkModeBody");
    Myform.classList.toggle("DarkModeForm");
    submitButton.classList.toggle("DarkModeSubmit");
    header.classList.toggle("DarkModeHeader");
    footer.classList.toggle("DarkModeHeader");
    for (let i = 0; i < tabList.length; i++)
    {
        tabList[i].classList.toggle("DarkModeTab");
    }
})