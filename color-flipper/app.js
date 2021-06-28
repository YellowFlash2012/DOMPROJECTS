const colors = ['green', 'red', 'purple', 'yellow', 'grey', 'orange', 'blue', 'brown', 'darkred', 'firebrick', 'salmon', 'darksalmon', 'lightsalmon', 'crimson', 'deeppink', 'gold', 'khaki', 'darkkhaki', 'moccasin', 'magenta', 'indigo', 'turquoise', 'steelblue', 'sandybrown', 'peru', 'maroon'];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}