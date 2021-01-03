setInterval(createSnowFlake, 1000);
setInterval(updateCountDown, 1000);
function createSnowFlake(){
    const snow_flake = document.createElement('i');
    snow_flake.className = 'fas fa-snowflake';
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 2 +'s';//Between 2 and 5 seconds
    document.body.appendChild(snow_flake);
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 + 10;
    setTimeout(()=>{
        snow_flake.remove();
    }, 5000);
} 
var daysLeft = document.getElementById('days');
var hoursLeft = document.getElementById('hours');
var minLeft = document.getElementById('minutes');
var secLeft = document.getElementById('seconds');

var endTime = new Date('December 31 2021 23:59:59');

function updateCountDown(){
    var startTime = new Date();
    var diff = endTime - startTime;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysLeft.innerHTML=days;
    hoursLeft.innerHTML=hours;
    minLeft.innerHTML=minutes;
    secLeft.innerHTML=seconds;
}