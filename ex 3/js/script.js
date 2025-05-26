let tourne1 = document.querySelector('.carre1');
let tourne2 = document.querySelector('.carre2');
let tourne3 = document.querySelector('.carre3');
let tourne4 = document.querySelector('.carre4');

tourne1.addEventListener('click', () => transformation(tourne1));
tourne2.addEventListener('click', () => transformation(tourne2)); // Appel de fonction lorsque l'on clique sur le carré
tourne3.addEventListener('click', () => transformation(tourne3));
tourne4.addEventListener('click', () => transformation(tourne4));

function transformation(test) // Fonction pour transformer les carrés dans le cas ou on clique sur ceux ci
{
    let index = parseInt(test.getAttribute('data-index')) || 0; // Creation d'un index pour savoir dans quel état se trouve le carré

    if(index == 0)
    {
        test.style.transform = "rotate(-40deg)";
        test.style.backgroundColor = "rgb(182, 82, 82)"; // Transformation du carré lorsque l'on clique dessus
        test.style.height = "180px";
        test.style.width = "180px";
        test.setAttribute('data-index', '1');      //Changement de l'index
    }
    else
    {
        test.style.transform = "rotate(0)";
        test.style.backgroundColor = "";            // Remise à zero du style du carré si l'on clique dessus mais que l'on a déjà cliqué dessus une fois précédemment
        test.style.height = "200px";
        test.style.width = "200px";
        test.setAttribute('data-index', '0');    // Changement de l'index
    }
}