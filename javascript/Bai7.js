async function asyncFunc1(callback) {
    console.log("Started asyncFunc1");

    setTimeout(() => {
        console.log("Completed asyncFunc1");
        callback();
    }, 3000);
}

async function asyncFunc2(callback) {
    console.log("Started asyncFunc2");

    setTimeout(() => {
        console.log("Completed asyncFunc2");
        callback();
    }, 2000);
}

async function asyncFunc3(callback) {
    console.log("Started asyncFunc3");

    setTimeout(() => {
        console.log("Completed asyncFunc3");
        callback();
    }, 1000);
}

let asyncFuncs = [
    asyncFunc1,
    asyncFunc2,
    asyncFunc3,
]

function callbackManager(asyncFuncs) {
    if (!asyncFuncs || asyncFuncs.length == 0) return;

    asyncFuncs[0](() => {
        asyncFuncs.shift();
        return callbackManager(asyncFuncs);
    })
}

callbackManager(asyncFuncs);