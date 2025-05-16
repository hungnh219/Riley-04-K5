cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    async start () {
        let getTimeLimited = await this.circuitBreaker(this.testFunc, 2000);
        setTimeout(() => {
            console.log(getTimeLimited());

        }, 300);
        // "ok";
        setTimeout(() => {
            console.log(getTimeLimited());
        }, 2100);
        // "service closed";
    },

    // update (dt) {},
    async  circuitBreaker(fn, timeThreshold) {
        console.log(Date.now());
        let isOpen = false;
        let startTime = Date.now();

        return function(...args) {
            if (isOpen) {
                return "service closed";
            }
            // if (Date.now() - lastTime > timeThreshold) {
            if (Date.now() - startTime < timeThreshold) {
                return fn(...args);
            } else {
                isOpen = true;
                // timeOut = setTimeout(() => {
                //     isOpen = false;
                //     // lastTime = Date.now();
                //     startTime = Date.now();
                // }, timeThreshold);
                return "service closed";
            }
        };
    },

    testFunc() {
        console.log("testFunc");
        return "hihi hehe";
    }

});
