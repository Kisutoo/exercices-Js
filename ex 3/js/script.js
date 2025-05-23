let tourne1 = document.querySelector('.carre1');
let tourne2 = document.querySelector('.carre2');
let tourne3 = document.querySelector('.carre3');
let tourne4 = document.querySelector('.carre4');
let index = 0


tourne1.addEventListener('click', () => transformation(tourne1));
tourne2.addEventListener('click', () => transformation(tourne2));
tourne3.addEventListener('click', () => transformation(tourne3));
tourne4.addEventListener('click', () => transformation(tourne4));

// tourne1.addEventListener('click', () => detransformation(tourne1));
// tourne2.addEventListener('click', () => detransformation(tourne2));
// tourne3.addEventListener('click', () => detransformation(tourne3));
// tourne4.addEventListener('click', () => detransformation(tourne4));

function transformation(test)
{
    test.style.transform = "rotate(-40deg)";
    test.style.backgroundColor = "rgb(182, 82, 82)";
    test.style.height = "180px";
    test.style.width = "180px"
}





