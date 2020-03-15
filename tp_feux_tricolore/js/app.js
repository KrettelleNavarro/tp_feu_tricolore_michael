// création de la fonction
//vert :passer au vert 4secondes
//revenir au gris pendant le orange et être au gris pdt le rouge
//orange : etre au gris quand le vert est allume,passer à l'orange 4 secondes
//revenir au gris quand le rouge est allummé
//rouge : etre au gris quand le vert est allumé, etre au gris quand l'orange est allumé,passer au rouge 4 secondes
//revenir au gris
// si on appui sur appel pietons, mm méthode mais en 2 secondes



// Déclaration des variables

let feuRouge = document.querySelector('#cercle_rouge');
let feuOrange = document.querySelector('#cercle_orange');
let feuVert = document.querySelector('#cercle_vert');
let boutonAppelPieton = document.querySelector('#redButton');
let i = 0;
let t;
let color = [["green", "grey", "grey"],
["grey", "orange", "grey"],
["grey", "grey", "red"]];

//Fonction Appel pieton si bouton cliqué time = 2000  ou sinon time = 4000
function appel() {
    if (boutonAppelPieton === "click") {
        buttonGreen.addEventListener('click', function () { colorTemp('green', 2000) });
        buttonOrange.addEventListener('click', function () { colorTemp('orange', 2000) });
        buttonRed.addEventListener('click', function () { colorTemp('red', 2000) });

    }
    t = setTimeout(start, 2000);


} else {
    t = setTimeout(start, 4000);

}
}


buttonAppel.addEventListener('click', function () { appel() });
buttonRed.addEventListener('click', function () { colorTemp('red', 2000) });
buttonOrange.addEventListener('click', function () { colorTemp('orange', 2000) });
buttonGreen.addEventListener('click', function () { colorTemp('green', 2000) });


// boutonAppelPieton.addEventListener('click', function () { appel() });
// buttonAuto.addEventListener('click', function () { start() });
// //buttonStop.addEventListener('click', function () { stop() })
// buttonRed.addEventListener('click', function () { colorTemp('red', 2000) });
// buttonOrange.addEventListener('click', function () { colorTemp('orange', 2000) });
// buttonGreen.addEventListener('click', function () { colorTemp('green', 2000) });



//https://www.journaldunet.fr/web-tech/developpement/1202417-javascript-comment-attendre-x-secondes-avant-d-executer-la-ligne-suivante/
// function miseEnAttente() {
//     //Traitement
//     setTimeout(fonctionAExecuter, 5000); //On attend 5 secondes avant d'exécuter la fonction
// }
// function fonctionAExecuter() {
//     //Le code écrit dans cette fonction ne sera exécuté qu'au bout de 5 secondes
// }

