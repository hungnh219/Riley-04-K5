// print time when wait
function callAfter2Seconds() {
    console.log("helu");
}

function mainFunc(callback, delay) {
    function timer(time) {
        setTimeout(() => {
            console.log("time: ", time);
            time -= 100;


            if (time <= 100) {
                console.log("time: ", 100);
                return;
            };

            return timer(time);
        }, 100)
    }

    setTimeout(() => {
        timer(delay);
        if (callback) {
            console.log('wait...');
            setTimeout(() => {
                callback();
            }, delay)
        }
    }, 2000)

}

// function mainFunc(callback, delay) {
//     setTimeout(() => {
//         // callback && callback();
//         if (callback) {
//             console.log('wait...');
//             setTimeout(() => {
//                 callback();
//             }, delay)
//         }
//     }, 2000)
// }

let delay = 2500;

mainFunc(callAfter2Seconds, delay);