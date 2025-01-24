// gestion des formulaires

let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) 
{
    event.preventDefault(); // empêche le rechargement de la page 

    let ErrorList = document.getElementById("errorInfos");
    ErrorList.innerHTML = "";

    // ------ test de l'email
    
    let email = document.getElementById("email");
    let emailCheck = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    if (!emailCheck.test(email.value)) //|| email.value == ""
    {
        email.classList.add("borderRed");
        email.classList.remove("borderGreen");
        let liError = document.createElement("li");
        liError.innerText = "Veuillez rentrer une adresse mail valide";
        ErrorList.appendChild(liError);
        ErrorList.classList.remove("invisible");
    }
    else 
    {
        email.classList.remove("borderRed");
        email.classList.add("borderGreen");
        email.classList.add("sucess");
    }

    // ------ tester le mot de passe

    let password = document.getElementById("password");
    let passwordCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    if(!passwordCheck.test(password.value)) {

        let liError = document.createElement("li");
        liError.innerText = "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial et doit faire au minimum 8 caractères.";
        ErrorList.appendChild(liError);
        ErrorList.classList.remove("invisible");

        password.classList.add("borderRed");
        password.classList.remove("borderGreen");
    } else {
        password.classList.remove("borderRed");
        password.classList.add("borderGreen");
        password.classList.add("sucess");
    }

    // tester la confirmation du mdp

    let passwordConfirmation = document.getElementById("passwordConfirmation");
    if((password.value != passwordConfirmation.value) || (passwordConfirmation == "") || (password.value == ""))
    {
        let liError = document.createElement("li");
        liError.innerText = "Votre mot de passe doit être le même que la confirmation";
        ErrorList.appendChild(liError);
        ErrorList.classList.remove("invisible");

        passwordConfirmation.classList.add("borderRed");
        passwordConfirmation.classList.remove("borderGreen");
    } else {
        passwordConfirmation.classList.remove("borderRed");
        passwordConfirmation.classList.add("borderGreen");
        passwordConfirmation.classList.add("sucess");
    }

    // ------ tester le firstName
    
    let pseudo = document.getElementById("pseudo");
    if (pseudo.value.length < 6)
    {
        let liError = document.createElement("li");
        liError.innerText = "Votre pseudo doit faire au minimum 6 caractères.";
        ErrorList.appendChild(liError);
        ErrorList.classList.remove("invisible");
        pseudo.classList.add("borderRed");
        pseudo.classList.remove("borderGreen");
    }
    else
    {
        pseudo.classList.remove("borderRed");
        pseudo.classList.add("borderGreen");
        pseudo.classList.add("sucess");
    }

    // tester la date de naissance

    let date = document.getElementById("birthday");
    if(date.value == "")
    {
        let liError = document.createElement("li");
        liError.innerText = "Veuillez indiquer votre date de naissance";
        ErrorList.appendChild(liError);
        ErrorList.classList.remove("invisible");
        date.classList.add("borderRed");
        date.classList.remove("borderGreen");
    }
    else 
    {
        date.classList.remove("borderRed");
        date.classList.add("borderGreen");
        date.classList.add("sucess");
    }

    let sucessBox = document.getElementById("sucessBox");
    if (date.classList.contains("sucess") && email.classList.contains("sucess") && password.classList.contains("sucess") && pseudo.classList.contains("sucess"))
    {
        ErrorList.classList.add("invisible");
        sucessBox.classList.remove("invisible");
    }

});