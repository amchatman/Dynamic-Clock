function currentTime(){

// Get Date, Month, Time & etc
let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let hour = currentDate.getHours();
let mintues = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

//Array for Day and Months
let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
let monthNames = ['January','Feburary','March','April','May','June','July'];


let thisMonth  = monthNames[month] + "," + date + " " + year;
let thisTime = hour + ":" +  mintues + ":" + seconds;

document.getElementById('currentDay').innerHTML = dayNames[day];
document.getElementById('currentMonth').innerHTML = thisMonth;
document.getElementById('currentTime').innerHTML = thisTime;

let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();