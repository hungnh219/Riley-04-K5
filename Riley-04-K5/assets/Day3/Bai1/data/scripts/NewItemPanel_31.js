cc.Class({
    extends: cc.Component,

    properties: {
        prefabs: [cc.Prefab],
        scrollViewContent: cc.Node,

        prefabFactory: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prefabFactory = this.prefabFactory.getComponent("PrefabFactory_31");
        if (!this.prefabFactory) {
            console.error("Prefab Factory not found!!!");
            return;
        }
    },

    start () {
        this.initData();
    },

    initData() {
        this.scrollViewContent.removeAllChildren();
        this.prefabs = this.prefabFactory.getAllPrefabs();

        this.prefabs.forEach((prefab) => {
            const itemNode = cc.instantiate(prefab);

            const imageSpriteChild = itemNode.getChildByName('ItemImageSprite').getComponent(cc.Sprite);
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

            spriteNode.setContentSize(80, 80);
            spriteNode.anchorX = 0.5;
            spriteNode.anchorY = 0.5;

            spriteNode.on('touchend', () => {
                this.onSpriteClicked(prefab);
            }, this);

            this.scrollViewContent.addChild(spriteNode);
        });
    },
  

    onSpriteClicked(prefab) {
        console.log("Sprite clicked:", prefab.name);
    },

    // update (dt) {},
});
