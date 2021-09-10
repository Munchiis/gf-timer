const anniversary = new Date('July 10 2021');
const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secEL = document.getElementById('sec');
function countdown() {

    const currentDate = new Date();

    var t_seconds = Math.floor((currentDate - anniversary) / 1000); 
    var minutes = Math.floor(t_seconds / 60) % 60;
    var hours = Math.floor(t_seconds / 3600) % 24;
    var days = Math.floor(t_seconds / 3600 / 24) + 1;

    var seconds = Math.floor(t_seconds % 60);
    var monthsdated = Math.floor(days / 30);

    console.log(days, hours, minutes, seconds);

    const upcoming = new Date(`${(anniversary.getMonth()+monthsdated+1)%12} 10 2021`);

    console.log(upcoming);

    daysEL.innerHTML = formatTime(days);
hoursEL.innerHTML = formatTime(hours);
minsEL.innerHTML = formatTime(minutes);
secEL.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}


//initial call
countdown();


setInterval(countdown, 1000);