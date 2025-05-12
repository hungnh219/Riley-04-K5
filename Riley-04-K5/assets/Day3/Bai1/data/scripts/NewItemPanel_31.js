cc.Class({
    extends: cc.Component,

    properties: {
        prefabs: [cc.Prefab],
        scrollViewContent: cc.Node,

        prefabFactory: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log('check');
        this.prefabs = this.prefabFactory.getAllPrefabs();

        console.log("prefab 0: ", this.prefabs[0])
        console.log("prefab 0: ", this.prefabs[0].Component)
        console.log("prefab 0 children: ", this.prefabs)
        // let itemNode = cc.instantiate(this.prefabs[0]);
        this.prefabs[0].parent = this.node;

        let icon = this.prefabs[0].getChildByName("IconImageSprite");
        // let sprite = icon.getComponent(cc.Sprite);

        let sprite = this.prefabs[0].getComponent(cc.Sprite);
        console.log(sprite, icon)
    },

    start () {
    },

    // update (dt) {},
});
