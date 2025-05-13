import ItemType from "./ItemType_31";

cc.Class({
    extends: cc.Component,

    properties: {
        prefabs: [cc.Prefab],
        scrollViewContent: cc.Node,

        prefabFactory: cc.Node,
        nameEditor: cc.EditBox,
        quantityEditor: cc.EditBox,
        effectEditor: cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prefabFactory = this.prefabFactory.getComponent("PrefabFactory_31");
        if (!this.prefabFactory) {
            console.error("Prefab Factory not found!!!");
            return;
        }

        this.clickedItem = null;
    },

    start () {
        this.initData();
    },

    initData() {
        this.scrollViewContent.removeAllChildren();
        this.prefabs = this.prefabFactory.getAllPrefabs();

        this.prefabs.forEach((prefab) => {
            const itemNode = cc.instantiate(prefab);

            const imageSpriteChild = itemNode.getChildByName('ItemImageSprite');
            const imageSprite = imageSpriteChild.getComponent(cc.Sprite);

            if (!imageSprite) {
                console.warn("ItemImageSprite not found in prefab:", prefab.name);
                return;
            }

            // create node to display sprite
            const spriteNode = new cc.Node();
            const spriteComponent = spriteNode.addComponent(cc.Sprite);
            spriteComponent.spriteFrame = imageSprite.spriteFrame;
            spriteComponent.sizeMode = cc.Sprite.SizeMode.CUSTOM;

            spriteNode.setContentSize(64, 64);
            spriteNode.anchorX = 0.5;
            spriteNode.anchorY = 0.5;

            // Add Button component
            const buttonComponent = spriteNode.addComponent(cc.Button);

            // Set up the click event for the button
            buttonComponent.node.on('click', () => {
                this.scrollViewContent.children.forEach((child) => {
                    child.opacity = 160;
                    child.scale = 1.0;
                });

                spriteNode.opacity = 255;
                spriteNode.scale = 1.4;
            
                this.onSpriteClicked(itemNode);
            }, this);
            
            spriteNode.opacity = 160;
            spriteNode.scale = 1.0;

            this.scrollViewContent.addChild(spriteNode);
        });
    },
  
    onSpriteClicked(prefab) {
        this.clickedItem = prefab;
        console.log("Sprite clicked:", prefab);
        this.nameEditor.string = prefab.name;
        this.quantityEditor.string = 0;
        this.effectEditor.string = '';
    },

    getClickedItem() {
        return {
            node: this.clickedItem,
            data: {
                name: this.nameEditor.string,
                quantity: this.quantityEditor.string,
                effect: this.effectEditor.string,
                usageType: (Math.random() >= 0.5) ? ItemType.ItemUsageType.EQUIPMENT : ItemType.ItemUsageType.CONSUMABLE,
            }
            // spriteFrame: this.clickedItem.getComponent(cc.Sprite).spriteFrame,
            // type: this.clickedItem.name,
        };
    }

    // update (dt) {},
});
