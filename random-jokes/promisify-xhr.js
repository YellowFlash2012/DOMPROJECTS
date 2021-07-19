const btn = document.querySelector('.btn');

const content = document.querySelector('.content');

const img = document.querySelector('.container img');

const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
    getData(url)
        .then((response) => displayData(response))
        .catch((err) => console.log(err));
});

function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status === 200) {
                resolve(xhr.responseText);
                
            } else {
                reject({
                    status: xhr.status,
                    text: xhr.statusText,
                })
                
            }
        }
    });
    
}

//display fetched jokes
function displayData(data) {
    img.classList.add('shake-img');
                const { value: joke } = JSON.parse(data);
                content.textContent = joke;

                const random = Math.random() * 2000;

                setTimeout(() => {
                    img.classList.remove('shake-img');
                }, random);
}