const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = document.querySelector('.search-form');
const input = document.querySelector('[name="drink"]');


//search by id www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

const fetchDrinks = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const displayDrinks = ({ drinks }) => {
    const section = document.querySelector('.section-center');
    const title = document.querySelector('.title');

    if (!drinks) {
        //hide loading
        title.textContent = 'sorry, no drinks matched your search';
        section.innerHTML = '';
        return;
    }
    
    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href="drink.html">
                    <article class="cocktail" data-id="${id}">
                        <img src="${image}" alt="${name}">

                        <h3>${name}</h3>
                    </article>
                </a>`
    }).join('');

    //hide loading
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
};


const showDrinks = async (url) => {
    //fetch drinks
    const data = await fetchDrinks(url);
    console.log(data);
    
    //displaydrinks
    const section = await displayDrinks(data);
}

window.addEventListener('DOMContentLoaded', () => {
    showDrinks(url);
})

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log(input.value);
});