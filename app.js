const date =  new Date();

// dom elements
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const zeroDigit = time => time.toString().length < 2 ? `0${time}` : time;

// date 
const hours = date.getHours(); 
const minutes = date.getMinutes();
const seconds = date.getSeconds();

hoursEl.innerText = zeroDigit(hours);
minutesEl.innerText = zeroDigit(minutes);
secondsEl.innerText = zeroDigit(seconds);

setInterval(() => {
    const date = new Date();
    secondsEl.innerText = zeroDigit(date.getSeconds());

    if (date.getSeconds() == 0) 
        minutesEl.innerText = zeroDigit(date.getMinutes());
    
    if (date.getMinutes() == 0)
        hoursEl.innerText = zeroDigit(date.getHours());
}, 1000);