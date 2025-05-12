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

        const itemNode = cc.instantiate(this.prefabs[0]);

        console.log("prefab 0 node: ", itemNode)
        // console.log("image label: ", itemNode.getChildByName("ItemImageLabel"))
        console.log("children: ", itemNode.children.getChildByName("ItemImageLabel"))

        itemNode.children.forEach(element => {
            element.name;
            console.log('test ', element.name)
        });

    },

    start () {
        console.log(this.prefabs[0].children)

    },

    // update (dt) {},
});
