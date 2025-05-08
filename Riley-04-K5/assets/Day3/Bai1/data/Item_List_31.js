import ItemDatabase from './items_db'
cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        itemPrefab: cc.Prefab,
        detailPanel: cc.Node,
    },

    onLoad () {},

    start () {
        console.log("db", ItemDatabase)
        this.populateList(ItemDatabase);
    },

    // update (dt) {},
    populateList(itemList) {
        console.log(this.content)
        for (let itemData of itemList) {
            let itemNode = cc.instantiate(this.itemPrefab);
            itemNode.parent = this.content;
            itemNode.getComponent("Item_Renderer_31").init(itemData, this.onItemClicked.bind(this));
        }
    },

    onItemClicked(itemData) {
        console.log("Item được click:", itemData.name);

        const detailScript = this.detailPanel.getComponent("Item_Detail_Panel_31");
        console.log('detailscript', detailScript);
        console.log(this.detailPanel);
        detailScript.show(itemData);
    },
});

