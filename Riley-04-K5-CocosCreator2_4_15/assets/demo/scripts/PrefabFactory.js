import ItemType from "./ItemType";

cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: cc.Prefab,
        swordPrefab: cc.Prefab,
        shieldPrefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    getItemPrefab(item) {
        switch (item) {
            case ItemType.SWORD:
                return this.swordPrefab;
            case ItemType.SHIELD:
                return this.shieldPrefab;
            default:
                return this.itemPrefab;
        }
    },
    // update (dt) {},
});
