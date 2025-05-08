cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        // iconSprite: cc.Sprite,
        quantityLabel: cc.Label,
        typeLabel: cc.Label,
        effectLabel: cc.Label,
    },

    onLoad () {
    },

    start () {
    },

    init(itemData, onClickCallback) {
        this.nameLabel.string = itemData.name;
        this.quantityLabel.string = 'x' + itemData.quantity;
        this.typeLabel.string = itemData.type;
        this.effectLabel.string = itemData.effect;

        // Load ảnh từ resources/images
        // const imagePath = `images/${itemData.imageName}`;  // ví dụ: "sword" hoặc "potion"
        // cc.resources.load(imagePath, cc.SpriteFrame, (err, spriteFrame) => {
        //     if (!err && spriteFrame) {
        //         this.iconSprite.spriteFrame = spriteFrame;
        //     } else {
        //         console.warn("Không load được ảnh:", imagePath, err);
        //     }
        // });
        
        this.node.on('click', () => {
            console.log('check', itemData);
            if (onClickCallback) {
                onClickCallback(itemData);
            }
        }, this);
    }
});
