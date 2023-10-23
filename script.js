const date = document.getElementById("date");
let months = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
let days = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const clock = setInterval(function time(){
    let dateToday = new Date();
    
    let weekday = dateToday.getDay()
    let day = dateToday.getDate();
    let month = dateToday.getMonth();
    let year = dateToday.getFullYear();

    date.textContent = days[weekday] + ", " + day + " de " + months[month] + " de " + year;

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
});