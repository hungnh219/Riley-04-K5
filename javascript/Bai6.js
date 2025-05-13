function timer(start, step) {
    // function startTimer() {
    //     console.log('start');
    // }

    // function stopTimer() {
    //     console.log('stop');
    // }
    let isRunning = false;
    function handleStartTimer(start, step) {
        console.log('start');
        isRunning = true;

        let timer = setInterval(() => {
            if(!isRunning) {
                clearInterval(timer);
                return;
            };

            console.log(start);
            start += step;
        }, 300)
    }

    function handleStopTimer() {
        console.log('end');
        isRunning = false;
    }
    return {
        startTimer: () => handleStartTimer(start, step),

        stopTimer: () => handleStopTimer()
    }
}

const timerInstance = timer(100, 10);

timerInstance.startTimer();
setTimeout(() => {
    timerInstance.stopTimer();
}, 5000);

