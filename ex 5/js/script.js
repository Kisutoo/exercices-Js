import { quotes } from './quotes.js';

const container = document.querySelector('.citationContainer');

makeCitation(quotes, container);




function makeCitation(quotes, container)
{
    Object.entries(quotes).forEach(([key, value]) => {
        
        const allDiv = document.createElement('div');
        allDiv.className = 'all';

        const citationDiv = document.createElement('div');
        citationDiv.className = 'citation';
        citationDiv.innerText = value;

        const auteurDiv = document.createElement('div');
        auteurDiv.className = 'auteur';
        auteurDiv.innerText = key;

        allDiv.appendChild(citationDiv);
        allDiv.appendChild(auteurDiv);

        container.appendChild(allDiv);

        allDiv.addEventListener('click', () => addFav(allDiv))
    });
}

function addFav(citation)
{
    let index = parseInt(citation.getAttribute('data-index')) || 0;
    
    if(index === 0)
    {
        citation.style.boxShadow = "rgba(100, 20, 67, 0.29) 0px 54px 55px, rgba(145, 15, 123, 0.12) 0px -12px 30px, rgba(88, 17, 67, 0.12) 0px 4px 6px, rgba(105, 11, 93, 0.17) 0px 12px 13px, rgba(109, 4, 95, 0.09) 0px -3px 5px"
        citation.setAttribute('data-index', '1');
        localStorage.setItem("favCitation", citation.innerText);
    }
    else
    {
        citation.style.boxShadow = ""
        citation.setAttribute('data-index', '0');
        localStorage.removeItem("favCitation");
    }
}   