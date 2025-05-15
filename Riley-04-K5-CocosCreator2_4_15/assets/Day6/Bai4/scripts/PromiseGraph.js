class Store {
    constructor(name) {
        this.name = name;
        this.previousStore = [];
        this.isCompleted = false;
    }
    
    wait(previous) {
        this.previousStore.push(previous);
    }

    run(stepTime) {
        return new Promise(resolve => {
            console.log('Start running:', this.name);
            setTimeout(() => {
                this.isCompleted = true;
                console.log('Finished running:', this.name);
                resolve();
            }, stepTime * 1000);
        });
    }

    checkRun() {
        return (!this.isCompleted && this.previousStore.every(store => store.isCompleted));
    }
}

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.store1 = new Store('store_1')
        this.store2 = new Store('store_2');
        this.store3 = new Store('store_3');
        this.store4 = new Store('store_4');
        this.store5 = new Store('store_5');

        this.store1.wait(this.store3);
        this.store3.wait(this.store2);
        this.store2.wait(this.store5);
        this.store5.wait(this.store4);
        
    },

    async start () {
        await this.contribute(3, this.store1, this.store2, this.store3, this.store4, this.store5)
    },

    // update (dt) {},

    async contribute(stepTime, ...stores) {
        let flag = true;
        for (let i = 0; i < stores.length; i++) {
            if (!stores[i].isCompleted) {
                flag = false;
            }
        }

        if (flag) return;

        for (let i = 0; i < stores.length; i++) {
            if (stores[i].checkRun()) {
                await stores[i].run(stepTime);
            }
        }

        return await this.contribute(stepTime, ...stores);
    }
    
});
