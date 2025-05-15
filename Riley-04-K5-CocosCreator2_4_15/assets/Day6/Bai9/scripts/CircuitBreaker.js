cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label
    },

    async onLoad() {
        this.getTimeLimited = await this.circuitBreaker(this.testFunc, 1000);

        // this.getTimeLimited();
        setTimeout(async () => {
            console.log(await this.getTimeLimited());
        }, 200);
        // "ok";
        setTimeout(async () => {
            console.log(await this.getTimeLimited());
        }, 2100);
        // "service closed";
    },

    async circuitBreaker(fn, timeThreshold) {
        // try {
        //     let result = await Promise.race([
        //         fn(),
        //         new Promise(() => {
        //             setTimeout(() => {
        //                 console.log('server dong rui')
        //             }, timeThreshold)
        //         })
        //     ])

        //     console.log(result);

        //     return result;
        // } catch (err) {
        //     console.log(err);

        //     return "?";
        // }
        
    },

    async circuitBreaker(fn, timeThreshold) {
    //------- Complete code here -----------
    },

    testFunc() {
        // console.log('hihi hehe');
        let randomNumber = Math.random();
        let delay = randomNumber < 0.5 ? 1000 : 5000;

        console.log('delay testfunc: ', delay);
        return new Promise(() => {
            setTimeout(() => {
                console.log('test func done')
            })
        }, delay);
    }

});



