cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        // iconSprite: cc.Sprite,
        typeLabel: cc.Label,
        effectLabel: cc.Label,
        quantityLabel: cc.Label,
    },

    onLoad() {
        // this.hide();
    },

    show(itemData) {
        this.nameLabel.string = itemData.name;
        this.typeLabel.string = itemData.type;
        this.effectLabel.string = itemData.effect;
        this.quantityLabel.string = "Số lượng: " + itemData.quantity;

        // this.node.active = true;
    },

    hide() {
        // this.node.active = false;
    }
});
