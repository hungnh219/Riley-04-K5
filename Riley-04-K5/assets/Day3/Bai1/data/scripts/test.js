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
        console.log(this.prefabs);
        this.initData();
    },

    initData() {
        this.scrollViewContent.removeAllChildren();
        this.prefabs = this.prefabFactory.getAllPrefabs();

        this.prefabs.forEach((prefab) => {
            const itemNode = cc.instantiate(prefab);
            const imageSprite = itemNode.getChildByName('ItemImageSprite')?.getComponent(cc.Sprite);

            if (!imageSprite) {
                console.warn("ItemImageSprite not found in prefab:", prefab.name);
                return;
            }

            // Tạo node ảnh mới để hiển thị sprite
            const spriteNode = new cc.Node();
            const spriteComponent = spriteNode.addComponent(cc.Sprite);
            spriteComponent.spriteFrame = imageSprite.spriteFrame;
            spriteComponent.sizeMode = cc.Sprite.SizeMode.CUSTOM;

            // Resize và căn giữa
            spriteNode.setContentSize(80, 80);
            spriteNode.anchorX = 0.5;
            spriteNode.anchorY = 0.5;

            // ✅ Gán sự kiện click
            spriteNode.on('touchend', () => {
                console.log("Clicked prefab:", prefab.name);
                this.onSpriteClicked(prefab);
            }, this);

            // Thêm vào scroll view
            this.scrollViewContent.addChild(spriteNode);
        });
    },

    // onSpriteClicked(prefab) {
    //     console.log("Sprite clicked:", prefab.name);
    //     // Thực hiện hành động khi sprite được click
    //     // Ví dụ: hiển thị thông tin chi tiết về item
    // },

    // update (dt) {},
});
