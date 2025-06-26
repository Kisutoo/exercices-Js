import { quotes } from './quotes.js';

const container = document.querySelector('.citationContainer');

makeCitation(quotes, container)

function makeCitation(quotes, container)  // Creation des citation en fonction de ce que contient quotes
{
    const favs = JSON.parse(localStorage.getItem('favCitations')) || [] // Parcours (si il existe) ou création du tableau favCitation dans le local storage
    
    Object.entries(quotes).forEach(([auteur, citation]) => { // Transformation du tableau "Quotes" en object dans le but de le forEach
        
        const allDiv = document.createElement('div');
        allDiv.className = 'all';
        allDiv.setAttribute('data-index', 0);

        const citationDiv = document.createElement('div');
        citationDiv.className = 'citation';                 // Création de chaque box de citation puis assignation de la citation + de l'auteur
        citationDiv.innerText = citation;                      // Classname = Assignation d'une class pour modifier le style avec Css

        const auteurDiv = document.createElement('div');
        auteurDiv.className = 'auteur';
        auteurDiv.innerText = auteur;

        allDiv.appendChild(citationDiv);
        allDiv.appendChild(auteurDiv);
                                                            // Organisation des div, citation et auteur dans all et all dans container
        
        const citationText = `${auteur}-${citation}`;
        if (favs.includes(citationText))  // Si le tableau de localStorage 'favCitation' contient une valeur, la div de cette valeure se voit modifiée avec son index
        {
            allDiv.style.boxShadow = "rgba(100, 20, 67, 0.29) 0px 54px 55px, rgba(145, 15, 123, 0.12) 0px -12px 30px, rgba(88, 17, 67, 0.12) 0px 4px 6px, rgba(105, 11, 93, 0.17) 0px 12px 13px, rgba(109, 4, 95, 0.09) 0px -3px 5px"
            allDiv.setAttribute('data-index', 1);
        }   
        
        container.appendChild(allDiv);

        allDiv.addEventListener('click', () => addFav(allDiv, auteur, citation))
    });
}

function addFav(citationDiv, auteur, citation) // Changement de style pour le favori
{
    const citationText = `${auteur}-${citation}`;
    let favs = JSON.parse(localStorage.getItem('favCitations')) || [];// Parcours du tableau LocalStorage 

    const isFav = favs.includes(citationText); // Assigne à isFav, la citation sur laquelle on vient de cliquer

    if(!isFav)
    {
        citationDiv.style.boxShadow = "rgba(100, 20, 67, 0.29) 0px 54px 55px, rgba(145, 15, 123, 0.12) 0px -12px 30px, rgba(88, 17, 67, 0.12) 0px 4px 6px, rgba(105, 11, 93, 0.17) 0px 12px 13px, rgba(109, 4, 95, 0.09) 0px -3px 5px"
        citationDiv.setAttribute('data-index', '1'); // Couleur de fond + changement index
        favs.push(citationText);
    }
    else
    {
        citationDiv.style.boxShadow = "";
        citationDiv.setAttribute('data-index', '0'); // Remise à 0 + changement index
        favs = favs.filter(c => c !== citationText); // Filtre la citation pour la retirer du tableau du local storage
    }

    localStorage.setItem('favCitations', JSON.stringify(favs)); // On transforme la citation en cle textuelle, 
    // auteur+citation pour l'ajouter au local storage et la garder en mémoire une fois le rechargement de la page
}   