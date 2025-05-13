import ItemType from "./ItemType_31";

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        iconSprite: cc.Sprite,
        typeLabel: cc.Label,
        effectLabel: cc.Label,
        quantityLabel: cc.Label,
    },

    onLoad () {
        this.currentItem = null;

        this.quantity = 0;

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.itemClickCallBack();
        }, this);
    },

    start () {
    },

    // update (dt) {},

    onclick() {

    },

    initData(data, controllerNode) {
        this.name = data.name;
        this.quantity = data.quantity;
        this.effect = data.effect;
        this.type = data.usageType;

        this.quantityLabel.string = this.quantity;
        this.typeLabel.string =  this.type;
        this.effectLabel.string = this.effect;

        this.currentItem = data;
        // optimize cho nay
        // this.node.on('click', () => {
        //     itemClickCallBack(this.getData());
        // }, this)

        this.controllerNode = controllerNode;
        console.log("controllerNode: ", this.controllerNode.name);
    },

    getData() {
        return {
            "name" : this.name,
            "quantity": this.quantity,
            "effect": this.effect,
            "spriteFrame": this.iconSprite.spriteFrame,
            "type": this.type,
            "node": this.node,
        }
    },

    setData(data) {
        this.name = data.name;
        this.effect = data.effect;
        this.quantity = data.quantity;
    },

    useItem() {
        console.log('use');

        if (this.type == ItemType.ItemUsageType.CONSUMABLE) {
            if (this.quantity != 1) {
                this.quantity--;
                this.quantityLabel.string = this.quantity;
            } else {
                this.node.destroy();
            }
        } else {
            this.node.destroy();
        }
    },

    deleteItem() {

    },

    checkSearchWord(word) {
        return this.name.includes(word) ? true : false;
    },

    getItemUsageType() {
        return this.type;
    },

    itemClickCallBack () {
        console.log('???')
        this.controllerNode.emit("item-click", this.getData());
        console.log(this.getData())
    }


});
