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

// function callbackManager(asyncFuncs) {
//     let results = [];

//     async function executeAsyncFunctions() {
//         for (let i = 0; i < asyncFuncs.length; i++) {
//             if (typeof asyncFuncs[i] == 'function') {
//                 const result = await asyncFuncs[i]();
//                 results.push(result);
//             } else {
//                 console.error("error");
//             }
//         }
//         console.log(results);
//     }

//     executeAsyncFunctions();
// }

function callbackManager(asyncFuncs) {
    async function executeAsyncFunctions() {
        const results = await asyncFuncs.reduce(async (accPromise, func) => {
            const acc = await accPromise;
            if (typeof func === 'function') {
                const result = await func();
                acc.push(result);
            } else {
                console.error("error");
            }
            return acc;
        }, Promise.resolve([]));
        console.log(results);
    }

    executeAsyncFunctions();
}

callbackManager(asyncFuncs);