let tourne1 = document.querySelector('.carre1');
let tourne2 = document.querySelector('.carre2');
let tourne3 = document.querySelector('.carre3');
let tourne4 = document.querySelector('.carre4');

tourne1.addEventListener('click', () => transformation(tourne1), false);
tourne2.addEventListener('click', () => transformation(tourne2), false);
tourne3.addEventListener('click', () => transformation(tourne3), false);
tourne4.addEventListener('click', () => transformation(tourne4), false);

function transformation(test)
{
    let index = 0
    if(index == 0)
    {
        index++;
        test.style.transform = "rotate(-40deg)";
        test.style.backgroundColor = "rgb(182, 82, 82)";
        test.style.height = "180px";
        test.style.width = "180px";
    }
    if(index > 1)
    {
        index--;
        test.style.transform = "rotate(40deg)";
        test.style.backgroundColor = "rgb(46, 122, 97)";
        test.style.height = "200px";
        test.style.width = "200px"
    }
}