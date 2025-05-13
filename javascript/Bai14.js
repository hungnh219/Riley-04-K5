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

let asyncFuncs = [
    asyncFunc1,
    asyncFunc2,
    asyncFunc3,
]

function callbackManager(asyncFuncs) {
    // asyncFuncs.reduce((chain, func) => {
    //     return chain.then(() => func().then(result => {
    //         console.log("Result:", result);
    //     }));
    // }, Promise.resolve());
    let results = [];
    let promises = asyncFuncs.map((func, index) => {
        return func().then(result => {
            results[index] = result;
        });
    });

    Promise.all(promises).then(() => {
        console.log("Results:", results);
    });
}

callbackManager(asyncFuncs);