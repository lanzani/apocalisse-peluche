const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');


function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours()
    let currentMinutes = date.getMinutes()
    let currentSeconds = date.getSeconds()

    handHours.style.transform = `rotate(${-currentHours * 30 + currentMinutes / 2}deg)`
    handMinutes.style.transform = `rotate(${-(currentMinutes * 6)}deg)`
    handSeconds.style.transform = `rotate(${-currentSeconds * 6}deg)`
}

getCurrentTime();

setInterval(getCurrentTime, 1000); //1000ms = 1s


// const handHours = document.querySelector('.clock__hour');
// const handMinutes = document.querySelector('.clock__minute');
// const handSeconds = document.querySelector('.clock__second');
//
// function getCurrentTime() {
//     let date = new Date();
//     let currentHours = date.getHours()
//     let currentMinutes = date.getMinutes()
//     let currentSeconds = date.getSeconds()
//
//     handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`
//     handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`
//     handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`
//
//
// }
//
// getCurrentTime();

