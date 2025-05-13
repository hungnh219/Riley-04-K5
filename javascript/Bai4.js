function displayNumberEverySecond() {
    let count = 0;
    let myInterval = setInterval(() => {
        count++;
        console.log(count);

        if (count == 10) {
            // return;
            clearInterval(myInterval);
        } else {
        }
    }, 300)
}

displayNumberEverySecond();