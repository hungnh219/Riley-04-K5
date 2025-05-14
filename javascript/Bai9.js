async function asyncFunc1(callback) {
    console.log("Started asyncFunc1");

    setTimeout(() => {
        console.log("Completed asyncFunc1");
        callback(1);
    }, 3000);
}

async function asyncFunc2(callback) {
    console.log("Started asyncFunc2");

    setTimeout(() => {
        console.log("Completed asyncFunc2");
        callback(2);
    }, 2000);
}

async function asyncFunc3(callback) {
    console.log("Started asyncFunc3");

    setTimeout(() => {
        console.log("Completed asyncFunc3");
        callback(3);
    }, 1000);
}

let asyncFuncs = [
    asyncFunc1,
    asyncFunc2,
    asyncFunc3,
]

function callbackManager(asyncFuncs) {
    let chain = Promise.resolve();

    for (const callbackFunc of asyncFuncs) {
        chain = chain.then(async () => {
        const result = await new Promise((resolve) => {
            callbackFunc(resolve);
        });
        console.log("Result:", result);
        });
    }

    chain.catch(err => {
        console.error("Error occurred:", err);
    });
}

// console.log(callbackManager(asyncFuncs));
callbackManager(asyncFuncs);