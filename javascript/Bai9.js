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
    let results = [];


    // optimize: su dung vong lap
    let asyncFunc1Promise = new Promise(async (resolve) => {
        await asyncFuncs[0](resolve);
    })

    asyncFunc1Promise.then(
        (result1) => {
            results.push(result1);

            let asyncFunc2Promise = new Promise(async (resolve) => {
                await asyncFuncs[1](resolve);
            })
            asyncFunc2Promise.then(
                (result2) => {
                    results.push(result2);

                    let asyncFunc3Promise = new Promise(async (resolve) => {
                        await asyncFuncs[2](resolve);
                    })
                    asyncFunc3Promise.then(
                        (result3) => {
                            results.push(result3);
                            console.log(results);
                            // return results;
                        }
                    )
                }
            )
        }
    )

    // let firstFunctionPromise = new Promise(async (resolve) => {
    //     await asyncFuncs[0](resolve);
    // })

    // // let currentPromise;
    // let nextPromise;
    // let count = 1;

    // let currentPromise = new Promise(async (resolve) => {
    //     await asyncFuncs[0](resolve);
    // })

    // while(true) {
    //     console.log(currentPromise);
    //     currentPromise.then((result) => {
    //         console.log(result);
    //         nextPromise = new Promise(async (resolve) => {
    //             await asyncFuncs[count + 1](resolve);
    //         })
    //     })

    //     currentPromise = nextPromise;
    //     count++;
    //     if (count == asyncFuncs.length) break;
    // }
}

// console.log(callbackManager(asyncFuncs));
callbackManager(asyncFuncs);