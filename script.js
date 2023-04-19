const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('seconds')

const pujo = "20 Oct 2023";

function countdown(){
    const pujoDate = new Date(pujo);
    const currentDate = new Date();
    const totalSeconds = (pujoDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const secs = Math.floor(totalSeconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;
}

countdown();
setInterval(countdown,1000);
