/*
Puissance 4
créer tableau
var x;
var y;

for (x=0, x<=42, x++)
if clicked >= change x++ +2

for (y=0, y<=42, y++)

function add(x,y){




       console.log(x+y);
 }

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (;cars[i];) {
    text += cars[i] + "<br>";
    i++;
}

*/
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
           console.log("ok !");
            })
        }

        // const joueur = buttons[i].innerHTML;
        // const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        // let resultat = "";



//         if (joueur === robot) {
//             resultat = "Egalité";
//         }
//         else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") ||
//          (joueur === "Ciseaux" && robot === "Feuille")){
//              resultat = "Gagné";
//                }else{
//                    resultat = "Perdu";
//                }
//                document.querySelector(".resultat").innerHTML = `
//                Joueur : ${joueur} </br>
//                Robot : ${robot} </br>
//                ${resultat} `;

//     });
//  }