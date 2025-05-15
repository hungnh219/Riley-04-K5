cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.fetchWithAutoRetry(this.simulateAPICall, 3).then(result => {
            console.log('Success: ', result );
        }).catch(error => {
            console.error('All retries failed: ', error.message)
        })
    },

    // update (dt) {},

       // Iterative approach
    async fetchWithAutoRetry(fetcher, maximumRetryCount = 5) {
        //-------- Complete code here -----------
        try {
            await fetcher();
            console.log('call api success')
        } catch {
            // console.log('error huhu', maximumRetryCount)
            maximumRetryCount--;
            if (maximumRetryCount == 0) return;
            this.fetchWithAutoRetry(fetcher, maximumRetryCount); 
        }
    },
    // Usage example
    simulateAPICall() {
        return new Promise((resolve, reject) => {
            // Simulate a 50% chance of failure
            let randomNumber = Math.random();
            console.log("randomNumber: ", randomNumber)
            if (randomNumber < 0.9) {
                reject(new Error('API call failed'));
            } else {
                resolve('API call succeeded');
            } 
        });
    },

});
