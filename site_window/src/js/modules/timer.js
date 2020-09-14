const timer = (id, deadLine) => {
    const getTimeRemaining = (endtime) => {
        const time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor((time / (1000 * 60 * 60)) % 60),
            days = Math.floor((time / (1000 * 60 * 60 * 24)));


        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    };
    const addZerroNumber = (number) => {
        if (number <= 9) {
            return '0' + number;
        } else {
            return number
        }
    }
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.textContent = addZerroNumber(t.days);
            hours.textContent = addZerroNumber(t.hours);
            minutes.textContent = addZerroNumber(t.minutes);
            seconds.textContent = addZerroNumber(t.seconds);

            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        };
    };
    setClock(id, deadLine);

};




export default timer;