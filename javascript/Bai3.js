// function displayNumberEverySecond(count) {
//     // let count = 0;
//     setTimeout(() => {
//         count++;
//         console.log(count);

//         if (count == 10) {
//             clearTimeout()
//         } else {
//             displayNumberEverySecond(count);
//         }
//     }, 1000)
// }
// displayNumberEverySecond(0);

// *** ----------------------------------------------------------- ***
// count 1 -> 100 and return to 1
function displayNumberEverySecond(flag, count) {
    if (count == 100) flag *= -1;

    setTimeout(() => {
        console.log(count);
        count += flag;

        if (count == 0) {
            clearTimeout()
        } else {
            displayNumberEverySecond(flag, count);
        }
    }, 100)
}

displayNumberEverySecond(1, 1);