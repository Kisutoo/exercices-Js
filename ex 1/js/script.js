const carre = document.querySelector('.carre');
const cssCarre = window.getComputedStyle(carre);

let id = carre.className;
let bgColor = cssCarre.getPropertyValue("background-color");
let color = cssCarre.getPropertyValue("color");
let height = cssCarre.getPropertyValue("height");       // Assignation des variables en fonction des informations que l'on veut récupérer du carré
let width = cssCarre.getPropertyValue("width");
let display = cssCarre.getPropertyValue("display");
let font = cssCarre.getPropertyValue("font-family") + " (" + cssCarre.getPropertyValue("font-size") + ")";

let boxInfos = ["Class : " + id + "\n- Background color = " + bgColor + "\n- Color : " + color + "\n- Height : " + height + "\n- Width : " + width + "\n- Display : " + display + "\n- Display : " + font];

carre.addEventListener('click', alertbox);

function alertbox() // Fontion qui sert à afficher une boite d'alerte
{
    alert(boxInfos); // Affiche la boite d'alerte avec les valeurs de notre choix 
}