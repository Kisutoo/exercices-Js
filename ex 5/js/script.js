import { quotes } from './quotes.js';

const container = document.querySelector('.citationContainer');

makeCitation(quotes, container)

function makeCitation(quotes, container)  // Creation des citation en fonction de ce que contient quotes
{
    Object.entries(quotes).forEach(([key, value]) => { // Transformation du tableau "Quotes" en object dans le but de le forEach
        
        const allDiv = document.createElement('div');
        allDiv.className = 'all';

        const citationDiv = document.createElement('div');
        citationDiv.className = 'citation';                 // Création de chaque box de citation puis assignation de la citation + de l'auteur
        citationDiv.innerText = value;                      // Classname = Assignation d'une class pour modifier le style avec Css

        const auteurDiv = document.createElement('div');
        auteurDiv.className = 'auteur';
        auteurDiv.innerText = key;

        allDiv.appendChild(citationDiv);
        allDiv.appendChild(auteurDiv);
                                                            // Organisation des div, citation et auteur dans all et all dans container
        container.appendChild(allDiv);

        allDiv.addEventListener('click', () => addFav(allDiv))
    });
}



function addFav(citation, ) // Changement de style pour le favori
{
    let index = parseInt(citation.getAttribute('data-index')) || 0; // Donner un index à la citation  
    console.log(citation);
    const citationInStorage = localStorage.getItem('favCitation');
    const citations = citationInStorage ? JSON.parse(citationInStorage) : [];
    
    if(index === 0)
    {
        citation.style.boxShadow = "rgba(100, 20, 67, 0.29) 0px 54px 55px, rgba(145, 15, 123, 0.12) 0px -12px 30px, rgba(88, 17, 67, 0.12) 0px 4px 6px, rgba(105, 11, 93, 0.17) 0px 12px 13px, rgba(109, 4, 95, 0.09) 0px -3px 5px"
        citation.setAttribute('data-index', '1'); // Couleur de fond + changement index
        localStorage.setItem('favCitation', JSON.stringify(citation));
    }
    else
    {
        citation.style.boxShadow = ""
        citation.setAttribute('data-index', '0'); // Remise à 0 + changement index
        localStorage.removeItem('favCitation');
    }
}   