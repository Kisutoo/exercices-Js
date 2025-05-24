const fb = document.querySelector('.facebook');
colorFb = window.getComputedStyle(fb);
fbtxt = document.querySelector('.fbtxt');

const tt = document.querySelector('.twitter');
colorTt = window.getComputedStyle(tt);
tttxt = document.querySelector('.tttxt');

const insta = document.querySelector('.insta');
colorInsta = window.getComputedStyle(insta);
instatxt = document.querySelector('.instatxt');

const changeBg = document.querySelector('.all');

    fb.addEventListener('click', () => changeColor(fb, "rgb(94, 112, 167)", fbtxt, "Facebook"));
    tt.addEventListener('click', () => changeColor(tt, "rgb(145, 204, 247)", tttxt, "Twitter"));
    insta.addEventListener('click', () => changeColor(insta, "rgb(158, 66, 98)", instatxt, "Instagram"));


function changeColor(reseau, color, reseautxt, nomReseau)
{
    let index = parseInt(reseau.getAttribute('data-index')) || 0;
    
    if(index === 0)
    {
        changeBg.style.backgroundColor = color;
        reseau.style.borderRadius = "30px";
        reseau.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        reseautxt.innerText = nomReseau;
        reseau.setAttribute('data-index', '1');
    }
    else
    {
        changeBg.style.backgroundColor = "";
        reseau.style.borderRadius = "";
        reseau.style.boxShadow = ""
        reseautxt.innerText = "";
        reseau.setAttribute('data-index', '0')


    }
}   


/* function changeColor(reseau, color, reseautxt, nomReseau) {
    // Liste de tous les réseaux
    const reseaux = [fb, tt, insta];
    const textes = [fbtxt, tttxt, instatxt];

    // Si le réseau est déjà actif, on le désactive
    if (reseau.getAttribute('data-index') === '1') {
        changeBg.style.backgroundColor = "";
        reseau.style.borderRadius = "";
        reseau.style.boxShadow = "";
        reseautxt.innerText = "";
        reseau.setAttribute('data-index', '0');
        return;
    }

    // Réinitialiser tous les réseaux
    reseaux.forEach((r, i) => {
        r.style.borderRadius = "";
        r.style.boxShadow = "";
        r.setAttribute('data-index', '0');
        textes[i].innerText = "";
    });

    // Activer le réseau sélectionné
    changeBg.style.backgroundColor = color;
    reseau.style.borderRadius = "30px";
    reseau.style.boxShadow =
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, " +
        "rgba(0, 0, 0, 0.12) 0px -12px 30px, " +
        "rgba(0, 0, 0, 0.12) 0px 4px 6px, " +
        "rgba(0, 0, 0, 0.17) 0px 12px 13px, " +
        "rgba(0, 0, 0, 0.09) 0px -3px 5px";
    reseautxt.innerText = nomReseau;
    reseau.setAttribute('data-index', '1');
} */