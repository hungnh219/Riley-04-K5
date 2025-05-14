// 3-5
// 1-2
// 4
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

function asyncFunc4() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc4");
        setTimeout(() => {
            console.log("Completed asyncFunc4");
            resolve(4);
        }, 1000);
    });
}

function asyncFunc5() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc5");
        setTimeout(() => {
            console.log("Completed asyncFunc5");
            resolve(5);
        }, 1000);
    });
}

let asyncFuncs = [
    asyncFunc1,
    asyncFunc2,
    asyncFunc3,
]


// 0 
// accAsyncFunc: Promise.resolve()
// curAsyncFunc: func(1)

// 1
// accAsyncFunc: Promise.resolve().then(().thenfunc(1) => 
// curAsyncFunc: func(2)
function callbackManager(asyncFuncs) {
    console.log('start');
    asyncFuncs.reduce((accAsyncFunc, curAsyncFunc) => {
        return accAsyncFunc.then(() => 
            curAsyncFunc().then((result) => {
                console.log(result);
            })
        )
    }, Promise.resolve())
    console.log('start');
}

asyncFuncs2 = [
    asyncFunc1,
    asyncFunc2,
    asyncFunc3,
    asyncFunc3,
    asyncFunc1,
]
callbackManager(asyncFuncs2);