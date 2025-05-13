import ItemDatabase from "./ItemDb_31";
import ItemType from "./ItemType_31";

cc.Class({
    extends: cc.Component,

    properties: {
        itemScrollViewContent: cc.Node,
        itemDetailPanel: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.shownNode = null;

        this.node.on("item-click", this.itemClick, this);
    },

    start () {
        this.populateList(ItemDatabase);
    },

    // update (dt) {},
    populateList(itemList) {
        const itemFactory = this.node.getComponent("PrefabFactory_31");

        if (!itemFactory) {
            console.error("Item not found!!!");
            return;
        }
        itemList.forEach((itemData) => {
            const itemPrefab = itemFactory.getPrefabByType(itemData.type);
            
            if (itemPrefab) {
                const itemNode = cc.instantiate(itemPrefab);
                this.itemScrollViewContent.addChild(itemNode);

                const itemPrefabScript = itemNode.getComponent("Item_31");
                itemPrefabScript.initData(itemData, this.node);
            }
        });
    },

    itemClick(data) {
        console.log("check item click", data)
        this.itemData = data;
        this.shownNode = data.node;

        const itemDetailPanelScript =  this.itemDetailPanel.getComponent("ItemDetailPanel_31");
        itemDetailPanelScript.show(this.itemData);
    },

    handleUse() {
        const itemDetailPanelScript = this.itemDetailPanel.getComponent("ItemDetailPanel_31");

        this.itemScrollViewContent.children.forEach((item) => {
            const itemPrefabScript = item.getComponent("Item_31");

            if (item == this.shownNode) {
                    itemPrefabScript.useItem();

                    this.itemData.quantity--;
                    if (this.itemData.quantity == 0 || this.itemData.type == ItemType.ItemUsageType.EQUIPMENT) {
                        itemDetailPanelScript.clear();
                    } else {
                        itemDetailPanelScript.show(this.itemData);
                    }
                }
            }
        )
    },

    onSearchChanged(value) {
        // debounce
        this.scheduleOnce(() => {
            this.itemScrollViewContent.children.forEach((item) => {
                const itemPrefabScript = item.getComponent("Item_31");

                if (itemPrefabScript.checkSearchWord(value)) {
                    item.active = true;
                } else {
                    item.active = false;
                }
            })
        }, 0.5)
    },

    onDestroy() {
        this.node.off("item-click", this.itemClick.bind(this), this);
    }

});
