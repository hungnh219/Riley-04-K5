function callAfter2Seconds() {
    console.log("helu");
}

function mainFunc(callback) {
    console.log("start");
    setTimeout(() => {
        callback && callback();
    }, 2000)
    console.log("end");
    console.log(setTimeout(() => {
        callback && callback();
    }, 2000))
}

mainFunc(callAfter2Seconds);