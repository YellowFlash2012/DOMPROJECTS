const getElement = (selection) => {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } throw new Error('no element selected');
};

const url = 'https://randomuser.me/api/';

const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');

const btns = [...document.querySelectorAll('.icon')];
console.log(btns);

const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();

    //destructure
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;

    const { dob: { age } } = person;
    console.log(age);

    const { street: { number, name } } = person.location;
    
    return {
        phone,
        email,
        image,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
    };
}

const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    btns.forEach((btn) => btn.classList.remove('active'));

    btns[0].classList.add('active');

    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];

            btns.forEach((btn) => btn.classList.remove('active'));
            btn.classList.add('active');
        });
    });
};

const showUser = async () => {
    //get user from API
    const person = await getUser();
    displayUser(person);
    //display user
}

// events listeners
window.addEventListener('DOMContentLoaded', showUser);

btn.addEventListener('click', showUser);