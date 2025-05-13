function displayNumberEverySecond(count) {
    // let count = 0;
    setTimeout(() => {
        count++;
        console.log(count);

        if (count == 10) {
            clearTimeout()
        } else {
            displayNumberEverySecond(count);
        }
    }, 1000)
}

displayNumberEverySecond(0);