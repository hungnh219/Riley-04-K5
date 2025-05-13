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
    if (asyncFuncs == undefined) return; 
    let results = [];


    // optimize: su dung vong lap
    let asyncFunc1Promise = new Promise(async (resolve, reject) => {
        // await asyncFuncs[0](resolve);
        if (typeof asyncFuncs[0] == 'function') {
            await asyncFuncs[0](resolve);
        } else {
            reject("error1");
        }
    })

    asyncFunc1Promise.then(
        (result1) => {
            results.push(result1);

            let asyncFunc2Promise = new Promise(async (resolve, reject) => {
                if (typeof asyncFuncs[1] == 'function') {
                    await asyncFuncs[1](resolve);
                } else {
                    reject("error2");
                }
            })
            asyncFunc2Promise.then(
                (result2) => {
                    results.push(result2);

                    let asyncFunc3Promise = new Promise(async (resolve, reject) => {
                        if (typeof asyncFuncs[2] == 'function') {
                            await asyncFuncs[2](resolve);
                        } else {
                            reject("error3");
                        }
                    })
                    asyncFunc3Promise.then(
                        (result3) => {
                            results.push(result3);
                            console.log(results);
                            // return results;
                        }
                    ).catch((reason) => {
                        console.log(reason);
                    })
                }
            ).catch((reason) => {
                console.log(reason);
            })
        }
    ).catch((reason) => {
        console.log(reason);
    })
}

// console.log(callbackManager(asyncFuncs));
// callbackManager(0);
// callbackManager(null);
// callbackManager([]);