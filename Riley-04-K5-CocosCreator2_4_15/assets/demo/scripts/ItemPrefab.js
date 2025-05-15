cc.Class({
    extends: cc.Component,

    properties: {
        // itemName: cc.Label,
        itemPrice: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log(this.itemPrice);
    },

    start () {

    },

    // update (dt) {},
    initData(item) {
        this.itemName = item.name;
        this.itemType = item.type;
        this.itemPrice.string = item.price;
    },

    getData() {
        return {
            "name": this.itemName,
            "type": this.itemType,
            "price": this.itemPrice.string,
        }
    }
});
