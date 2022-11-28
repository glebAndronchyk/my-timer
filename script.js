'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //Timer
    const deadLine = '2023-01-1';
    
    function parseDate(endTime) {
        let years,days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.parse(new Date());
        if (t <= 0) {
            return {
                total: t,
                years: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }

        years = Math.floor(t / (1000 * 60 * 60 * 24) / 365);
        days = Math.floor(t / (1000 * 60 * 60 * 24) % 365);
        hours = Math.floor((t / (1000 * 60 * 60) % 24));
        minutes = Math.floor((t / 1000 / 60) % 60);
        seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            years: years,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    };

    function setClock(endTime) {
        const timer = document.querySelector('.timer');

        const timerYears = timer.querySelector('#years');
        const timerDays = timer.querySelector('#days');
        const timerHours = timer.querySelector('#hours');
        const timerMinutes = timer.querySelector('#minutes');
        const timerSeconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        function setZero(element) {
            return element < 10 ? `0${element}` : element;
        }

        function updateClock() {
            const t = parseDate(endTime);

            timerYears.textContent = setZero(t.years);
            timerDays.textContent = setZero(t.days);
            timerHours.textContent = setZero(t.hours);
            timerMinutes.textContent = setZero(t.minutes);
            timerSeconds.textContent = setZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock(deadLine);
})