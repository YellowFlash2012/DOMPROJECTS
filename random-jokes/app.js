const btn = document.querySelector('.btn');

const content = document.querySelector('.content');

const img = document.querySelector('.container img');

const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async () => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        displayData(response);
    } catch (error) {
        console.log(error);
    }
    
    // fetch(url)
    //     .then((data) => data.json())
    //     .then((response) => displayData(response))
    //     .catch((err) => console.log(err));
});

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== 4) {
//                 return;
//             }

//             if (xhr.status === 200) {
//                 resolve(xhr.responseText);
                
//             } else {
//                 reject({
//                     status: xhr.status,
//                     text: xhr.statusText,
//                 })
                
//             }
//         }
//     });
    
// }

//display fetched jokes
function displayData({ value: joke }) {
    img.classList.add('shake-img');
    // const { value: joke } = data;
    content.textContent = joke;

    const random = Math.random() * 2000;

    setTimeout(() => {
        img.classList.remove('shake-img');
        }, random);
}