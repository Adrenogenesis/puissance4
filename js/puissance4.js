const gameArea = document.getElementById("game-area"); // le seul élément du DOM dont on a besoin
// c'est l'élément parent de nos cases -> on récupérera l'enfant au clique.

 const cellsStatus = [["vide", "vide", "vide"],
                     ["vide", "vide", "vide"],
                     ["vide", "vide", "vide"]];

var joueurs=[];
var markers=["X","O"];
var joueurEnCours = 0;
joueurs[0] = "joueur1";
joueurs[1] = "joueur2";

gameArea.addEventListener("click", function(event) {
    let clickedCellElm;
    let clickedCellName;
    let clickedCellChordX;
    let clickedCellChordY;

    clickedCellElm = document.getElementById(event.target.id); //enregistre l'élément  enfant du DOM qui a été cliquée.
    clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string
    clickedCellChordX = parseInt(clickedCellName[1]); // récupère le 2eme caractère dans l'ID
    clickedCellChordY = parseInt(clickedCellName[4]); // récupère le 4eme caractère dans l'ID
    console.log("X : " + clickedCellChordX + ", Y : " + clickedCellChordY);
    console.log("clickedCell : " + clickedCellName);


    cellsStatus[clickedCellChordX-1][clickedCellChordY-1] = "joueur" + joueurEnCours; // modifie le tableau pour stocker la donnée dans la case cliquée
    partie();
    console.log(cellsStatus);

    clickedCellElm.innerHTML = markers[joueurEnCours]; // change la case qui viens d'être cliquée (contrairement a ce que j'ai dis
    // peut être fait aussi avec le clic MAIS n'oubliez pas de stocker l'information dans un tableau car
    // il faudra utiliser le tableau pour vérifier les conditions de victoire
    console.log("joueurEnCour",joueurEnCours);

    victoire();

});

function changeColor(id) {
    const tabs = document.getElementsByClassName('tab');

    for (let i = 0; i < tabs.length; ++i) {
        const item = tabs[i];
        item.style.backgroundColor = (item.id === id) ? "blue" : "white";
    }
}

function partie() {

    if(joueurEnCours === 0)
         joueurEnCours = 1;
    else joueurEnCours = 0;
}

 function victoire() {
    if (cellsStatus[0][0] === "joueur" + 0 && cellsStatus[0][1] === "joueur" + 0 && cellsStatus[0][2] === "joueur" + 0
         || cellsStatus[1][0] === "joueur" + 0 && cellsStatus[1][1] === "joueur" + 0 && cellsStatus[1][2] === "joueur" + 0
         || cellsStatus[2][0] === "joueur" + 0 && cellsStatus[2][1] === "joueur" + 0 && cellsStatus[2][2] === "joueur" + 0)
            {
        console.log("gagné !");
    }
    else  if (cellsStatus[0][0] === "joueur" + 1 && cellsStatus[0][1] === "joueur" + 1 && cellsStatus[0][2] === "joueur" + 1
        || cellsStatus[1][0] === "joueur" + 1 && cellsStatus[1][1] === "joueur" + 1 && cellsStatus[1][2] === "joueur" + 1
        || cellsStatus[2][0] === "joueur" + 1 && cellsStatus[2][1] === "joueur" + 1 && cellsStatus[2][2] === "joueur" + 1){
        console.log("perdu !");
           }
         else {
        console.log("rejouer !")
    }
}

