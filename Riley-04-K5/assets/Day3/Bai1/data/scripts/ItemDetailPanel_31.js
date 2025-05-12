// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        typeLabel: cc.Label,
        imageSprite: cc.Sprite,
        effectLabel: cc.Label,
        quantityLabel: cc.Label,

        useButton: cc.Button,
        deleteButton: cc.Button,
    },

    onLoad () {
        this.useButton.node.active = false;
        this.deleteButton.node.active = false;
    },

    start () {

    },

    // update (dt) {},
    clear() {
        this.nameLabel.string = "";
        this.typeLabel.string = "";
        this.imageSprite.node.active = false;
        this.effectLabel.string = "";
        this.quantityLabel.string = "";

        this.useButton.node.active = false;
        this.deleteButton.node.active = false;
    },

    show(itemData) {
        this.imageSprite.node.active = true;
        this.useButton.node.active = true;
        this.deleteButton.node.active = true;

        this.nameLabel.string = itemData.name;
        this.typeLabel.string = itemData.type;
        this.imageSprite.spriteFrame = itemData.spriteFrame;
        this.effectLabel.string = itemData.effect;
        this.quantityLabel.string = itemData.quantity;
    }
});
