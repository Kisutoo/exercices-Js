let tourne1 = document.querySelector('.carre1');
let tourne2 = document.querySelector('.carre2');
let tourne3 = document.querySelector('.carre3');
let tourne4 = document.querySelector('.carre4');

tourne1.addEventListener('click', () => transformation(tourne1));
tourne2.addEventListener('click', () => transformation(tourne2));
tourne3.addEventListener('click', () => transformation(tourne3));
tourne4.addEventListener('click', () => transformation(tourne4));

function transformation(test)
{
    let index = parseInt(test.getAttribute('data-index')) || 0;
    if(index == 0)
    {
        test.style.transform = "rotate(-40deg)";
        test.style.backgroundColor = "rgb(182, 82, 82)";
        test.style.height = "180px";
        test.style.width = "180px";
        test.setAttribute('data-index', '1');
    }
    else
    {
        test.style.transform = "rotate(0)";
        test.style.backgroundColor = "";
        test.style.height = "200px";
        test.style.width = "200px";
        test.setAttribute('data-index', '0');
    }
}