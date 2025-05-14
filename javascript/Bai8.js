// convert sang async function
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

function callbackManager(asyncFuncs, callbackAnswer) {
    let ans = [];
    let count = 0;
    for(let i = 0; i < asyncFuncs.length; i++) {
        asyncFuncs[i]((result) => {
            ans[i] = result;
            count++;
            if (count == 3) { // last item
                callbackAnswer(ans);
            }
        });
    }
}

callbackManager(asyncFuncs, (result) => { console.log(result) });