const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//giveaway setup & update
// let futureDate = new Date(2021, 6, 25, 09, 00, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 09, 00, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date}th ${month} ${year} ${hours}:${minutes}am`;

//countdown setup & update
//future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
    const today = new Date().getTime();
    const t = futureTime - today;
    // console.log(t);
    //1s = 1000ms
    //1min = 60s
    //1hr = 60min
    //1d = 24h

    //value in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate values 
    let days = Math.floor(t / oneDay);
    

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // console.log(days, hours, minutes, seconds);

    //set values arrays
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        } else {
            return item;
        }
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}
//automating the countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();