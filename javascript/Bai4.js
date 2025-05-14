// between every number, print more n number
// n = 10
// 1 1.1 1.2 1.3 1.10 2 2.1 2.2 ... 3 3.1 3.2 ... 10
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