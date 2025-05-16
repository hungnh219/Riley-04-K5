// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    async start () {
        await this.logLatency();
        let localTime = await this.getLocalTime();
        console.log("Thời gian máy khách: ", localTime);
        let serverTime = await this.getServerTime();
        console.log("Thời gian máy chủ: ", serverTime);
    },

    // update (dt) {},
    async getServerTime() {
        try {
            const response = await fetch(window.location.href.toString(), {
            method: 'HEAD',
            headers: {
                'Content-Type': 'text/html'
            }
            });

            const dateHeader = response.headers.get('Date');
            if (!dateHeader) {
            throw new Error('Date header not found');
            }

            return new Date(dateHeader).getTime();
        } catch (error) {
            console.error('Failed to get server time:', error);
            return Date.now(); // fallback to client time
        }
    },

    async getLocalTime() {
        try {
            const response = await fetch(window.location.href.toString(), {
            method: 'HEAD',
            headers: {
                'Content-Type': 'text/html'
            }
            });

            const dateHeader = response.headers.get('Date');
            if (!dateHeader) {
            throw new Error('Date header not found');
            }

            return new Date(dateHeader).getTime();
        } catch (error) {
            console.error('Failed to get server time:', error);
            return Date.now(); // fallback to client time
        }
        },

        async logLatency() {
            let startTime = await this.getLocalTime();

            for (let i = 0; i < 10; i++) {
                const currentTime = await this.getLocalTime();
                const latency = currentTime - startTime;
                startTime = currentTime;
                console.log(`Độ trễ: ${latency} ms`);
            }
        }

});
