function asyncFunc1() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc1");
        setTimeout(() => {
            console.log("Completed asyncFunc1");
            resolve(1);
        }, 3000);
    });
}

function asyncFunc2() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc2");
        setTimeout(() => {
            console.log("Completed asyncFunc2");
            resolve(2);
        }, 2000);
    });
}

function asyncFunc3() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc3");
        setTimeout(() => {
            console.log("Completed asyncFunc3");
            resolve(3);
        }, 1000);
    });
}

function timeoutFunc(timeout) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Runtime: " + timeout + "ms"));
        }, timeout);
    });
}
const timeoutPromise = timeoutFunc(500);

let asyncArr = [
    asyncFunc1,
    asyncFunc2,
    asyncFunc3,
    // timeoutPromise
]

let promiseArr = asyncArr.map((func) => {
    return func();
});

promiseArr.push(timeoutPromise);

Promise.race(promiseArr).then((result) => {
    console.log("Result:", result);
}).catch((error) => {
    console.error(error);
});