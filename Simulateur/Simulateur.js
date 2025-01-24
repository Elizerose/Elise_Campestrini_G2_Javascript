class Guerrier {
     
    constructor(attack, vie, precision, name)
    {
        this.attack = attack;
        this.vie = vie;
        this.precision = precision;
        this.name = name;
    }

    // calcul et affichage de la precision
    Precision(DivInfos)
    {
        let precision = false;
        let precisionText = document.createElement("p");
        let nb = Math.random();

        if((nb < this.precision))
        {
            precisionText.innerText = this.name  + " peut attaquer !";
            precision = true;
        }
        else
        {
            precisionText.innerText = this.name  + " ne peut pas attaquer !";
            precision = false;
        }
        
        DivInfos.appendChild(precisionText);

        return precision;
    }


    Attack(vieEnnemi, DivInfos)
    {
        let infoAttack = document.createElement("p");
        infoAttack.innerText = this.name + " attaque de " + this.attack + " points ! ";
        DivInfos.appendChild(infoAttack);

        return vieEnnemi - this.attack;
    }

    DisplayTour()
    {
        let info = document.createElement("h4");
        info.innerText = "Tour du Guerrier " + this.name;
        info.classList.add("Tour");
        GameSection.appendChild(info);
    }

}

// Affiche la vie des deux joueurs
function DisplayLife(guerrier1, guerrier2)
{
    let DivInfosVie = document.createElement("div");
    DivInfosVie.classList.add("Vie");
    GameSection.appendChild(DivInfosVie);

    let infoVie1 = document.createElement("p");
    infoVie1.innerText = "Vie  " + guerrier1.name + " = " +  guerrier1.vie;
    DivInfosVie.appendChild(infoVie1);

    let infoVie2 = document.createElement("p");
    infoVie2.innerText = "Vie  " + guerrier2.name + " = " +  guerrier2.vie;
    DivInfosVie.appendChild(infoVie2);

}

// recupere la section où le jeu se déroule
let GameSection = document.querySelector("section");


// fonction du jeu
function Combat(guerrier1, guerrier2)
{
    while (guerrier1.vie > 0 && guerrier2.vie > 0)
        {
            console.log("-------------------- TOUR DE " + guerrier1.name + "--------------------");
            guerrier1.DisplayTour();

            let DivInfos = document.createElement("div");
            GameSection.appendChild(DivInfos);

            if (guerrier1.Precision(DivInfos))
            {        
                console.log(guerrier1.name +" peut attaquer ! Il attaque de " + guerrier1.attack + " points !");
                guerrier2.vie = guerrier1.Attack(guerrier2.vie, DivInfos);
            }

            DisplayLife(guerrier1, guerrier2);

            console.log(" ");
            console.log("---- Vie du guerrier " + guerrier1.name + " = " + guerrier1.vie);
            console.log("---- Vie du guerrier " + guerrier2.name + " = " + guerrier2.vie);
            console.log(" ");

            // vérification supplémentaire avat de passer au tour du joueur 2

            if(guerrier1.vie <= 0 && guerrier2.vie <= 0)
                break;

            //---------- TOUR JOUEUR 2 ----------

            console.log("-------------------- TOUR DE " + guerrier2.name + "--------------------");
            console.log(" ");
            console.log(" ");
            guerrier2.DisplayTour();

            let DivInfos2 = document.createElement("div");
            GameSection.appendChild(DivInfos2);


            if (guerrier2.Precision(DivInfos2))
            {
                console.log(guerrier2.name +" peut attaquer ! Il attaque de " + guerrier2.attack + " points !");
                guerrier1.vie = guerrier2.Attack(guerrier1.vie, DivInfos2);
            }

            DisplayLife(guerrier1, guerrier2);
            console.log(" ");
            console.log("---- Vie du guerrier " + guerrier1.name + " = " + guerrier1.vie);
            console.log("---- Vie du guerrier " + guerrier2.name + " = " + guerrier2.vie);
            console.log(" ");
        }

    // Vérification du vainqueur
        
    if (guerrier1.vie <= 0)
    {
        let info = document.createElement("h3");
        info.innerText = guerrier2.name + " a gagné le combat.   " + guerrier1.vie + " / " + guerrier2.vie;
        GameSection.appendChild(info);

        console.log("Le guerrier " + guerrier2.name + " A gagné !" + guerrier1.vie + " / " + guerrier2.vie);

    } else 
    {
        let info = document.createElement("h3");
        info.innerText = guerrier1.name + " a gagné le combat.   " + guerrier2.vie + " / " + guerrier1.vie;
        GameSection.appendChild(info);

        console.log("Le guerrier " + guerrier1.name + " A gagné !" + guerrier2.vie + " / " + guerrier1.vie);
    }
}




let Jouer = document.getElementById("submit");
let ErrorBox = document.getElementById("Error");

let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");


Jouer.addEventListener("click", function(event)
{
    event.preventDefault();

    if(name1.value == name2.value || name1.value == "" || name2.value == "")
    {
        ErrorBox.classList.remove("invisible");
    } else
    {
        ErrorBox.classList.add("invisible");
        
        GameSection.innerHTML = "";

        let joueur1 = new Guerrier(10,30,0.5, name1.value);
        let joueur2 = new Guerrier(20,40,0.7, name2.value);
        Combat(joueur1, joueur2);
    }

    
})




