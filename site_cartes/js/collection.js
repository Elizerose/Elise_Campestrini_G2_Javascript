// On récupère les onglets tabs
let listTab = document.getElementsByClassName("tab");

// On parcours les onglets pour leur ajouter la fonction au click
for (let i = 0; i < listTab.length; i++)
{
    listTab[i].addEventListener("click", function() 
    {
        // On récupère la liste des onglets pour les parcourir et leur enlever la classe tabActive
        let listLi = document.getElementsByClassName("tab");
        for (let i = 0; i < listLi.length; i++)
        {
                listLi[i].classList.remove("tabActive");
        }

        // On fait pareil avec les différents contenus
        let listDiv = document.getElementsByClassName("content");
        for (let i = 0; i < listDiv.length; i++)
        {
                listDiv[i].classList.remove("Active");
        }

        this.classList.add("tabActive");

        // On ajoute la classe active sur la div correspondante
        if (this.classList.contains("tabChampions"))
        {
            document.getElementById("Champions").classList.add("Active");
        }
        else if (this.classList.contains("tabObjets"))
        {
            document.getElementById("Objets").classList.add("Active");
        }
        else if (this.classList.contains("tabAutre"))
        {
            document.getElementById("Autre").classList.add("Active");
        }
    })
}




    