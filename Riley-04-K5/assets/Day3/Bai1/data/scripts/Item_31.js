
cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        iconSprite: cc.Sprite,
        typeLabel: cc.Label,
        effectLabel: cc.Label,
        quantityLabel: cc.Label,
    },

    onLoad () {},

    start () {

    },

    // update (dt) {},

    onclick() {
        console.log("Item clicked");
    }
});
