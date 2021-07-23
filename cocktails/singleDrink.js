import './app.js';

//single drink display
const displayDrink = (data) => {
    hideLoading();

    const drink = data.drinks[0];

    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    const img = document.querySelector('.drink-img');
    const drinkName = document.querySelector('.drink-name');
    const description = document.querySelector('.drink-desc');
    const ingredients = document.querySelector('.drink-ingredients');

    img.src = image;
    document.title = name;
    drinkName.textContent = name;
    description.textContent = desc;

    ingredients.innerHTML = list.map((item) => {
        if (!item) return;
        return `<li><i class="far fa-check-square"></i>${item}</li>`
    }).join('');
}

const presentDrink = async () => {
    const id = localStorage.getItem('drink');

    if (!id) {
        window.location.replace(index.html);
    } else {
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

        displayDrink(drink);
    }

}

window.addEventListener('DOMContentLoaded', presentDrink);