function displayNumberEverySecond(count) {
    setTimeout(() => {
        if (count == 0) return;

        console.log(count);
        count--;
        displayNumberEverySecond(count);
    }, 1000)

    
}

let startNumber = 10;
let target = 0;
displayNumberEverySecond(startNumber);