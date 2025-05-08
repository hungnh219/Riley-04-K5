import ItemType from "./ItemType";

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        iconSprite: cc.Sprite,
        typeLabel: cc.Label,
        effectLabel: cc.Label,
        quantityLabel: cc.Label,
        useButton: cc.Button,
        deleteButton: cc.Button,
    },

    onLoad() {
        // this.hide();
        this.currentItem = null;
    },

    show(itemData, onDeleteCallback) {
        this.currentItem = itemData;
        this.deleteCallback = onDeleteCallback;

        this.nameLabel.string = itemData.name;
        this.typeLabel.string = itemData.type;
        this.effectLabel.string = itemData.effect;
        this.quantityLabel.string = "Số lượng: " + itemData.quantity;

        const imagePath = `images/${itemData.spriteFrameName}`;
        console.log(imagePath);
        cc.loader.loadRes(imagePath, cc.SpriteFrame, (err, spriteFrame) => {
            console.log('check 1');
            if (!err && spriteFrame) {
                console.log('check 2');
            this.iconSprite.spriteFrame = spriteFrame;
            } else {
                console.warn("Không load được ảnh:", imagePath, err);
            }
        });

        this.node.active = true;
    },

    hide() {
    },

    useItem() {
        if (!this.currentItem) return;
    
        if (this.currentItem.type == ItemType.consumable) {
            if (this.currentItem.quantity > 0) {
                this.currentItem.quantity -= 1;
                this.quantityLabel.string = "Số lượng: " + this.currentItem.quantity;
            }
    
            if (this.currentItem.quantity === 0) {
                this.deleteItem();
            }
        } else if (this.currentItem.type == ItemType.equipment) {
            this.deleteItem();
        }
    },

    deleteItem() {
        if (!this.currentItem) return;

        if (this.deleteCallback) {
            this.deleteCallback(this.currentItem);
        }

        if (this.node) {
            this.node.active = false;
        }
    }
});
