cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        this.items = [];
    },

    start () {

    },

    update (dt) {},

    getRandomString() {
        let stringLength = 6;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < stringLength; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    addItem() {
        let newItem = this.getRandomString();
        console.log(newItem);
        this.items.push(newItem);
    },

    showItem() {
        console.log(this.items);
    }
});
