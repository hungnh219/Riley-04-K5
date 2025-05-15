const URL = 'https://jsonplaceholder.typicode.com/posts/1'
const TIMEOUT = 3

cc.Class({
    extends: cc.Component,

    properties: {
 
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.fetchDataWithTimeout(URL, TIMEOUT);
    },

    start () {

    },

    // update (dt) {},
    async fetchDataWithTimeout(url, timeout) {
        let controller = new AbortController();
        let abortSignal = controller.signal;


        this.scheduleOnce(() => {
            console.log('call bi huy')
            controller.abort();
        }, timeout)

        let random = Math.random();
        let delay = random < 0.5 ? 1 : 5;
        await new Promise((resolve) => {
            this.scheduleOnce(() => {
                resolve('call api done: ', delay)
                fetch(url, {
                    method: 'get',
                    signal: abortSignal
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error)
                })
            }, delay)
        })
        console.log('signal: ', abortSignal);
        
    }

});
