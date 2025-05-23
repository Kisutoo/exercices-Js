const carregen = document.querySelector('.c1');
const carreColor = window.getComputedStyle(carregen);

const carregen1 = document.querySelector('.c2');
const carreColor1 = window.getComputedStyle(carregen1);

const carregen2 = document.querySelector('.c3');
const carreColor2 = window.getComputedStyle(carregen2);

const carregen3 = document.querySelector('.c4');
const carreColor3 = window.getComputedStyle(carregen3);

let carrenew = document.querySelector('.carreadapt');
let colorcarre = carreColor.getPropertyValue('background-color');
let colorcarre1 = carreColor1.getPropertyValue('background-color');
let colorcarre2 = carreColor2.getPropertyValue('background-color');
let colorcarre3 = carreColor3.getPropertyValue('background-color');

    carregen.addEventListener('click', () => changeColor(colorcarre));
    carregen1.addEventListener('click', () => changeColor(colorcarre1));
    carregen2.addEventListener('click', () => changeColor(colorcarre2));
    carregen3.addEventListener('click', () => changeColor(colorcarre3));

function changeColor(test)
{
    carrenew.style.backgroundColor = test;
    carrenew.innerText = test;
}   
