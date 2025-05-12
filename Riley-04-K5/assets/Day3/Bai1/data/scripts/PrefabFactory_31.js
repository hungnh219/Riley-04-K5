cc.Class({
    extends: cc.Component,

    properties: {
        swordPrefab: cc.Prefab,
        shieldPrefab: cc.Prefab,
        healthPotionPrefab: cc.Prefab,
        manaPotionPrefab: cc.Prefab,
        flowerPrefab: cc.Prefab,
        stonePrefab: cc.Prefab,
        emptyItemPrefab: cc.Prefab,
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    getPrefabByType(itemType) {
        switch (itemType) {
            case "sword":
                return this.swordPrefab;
            case "shield":
                return this.shieldPrefab;
            case "health_potion":
                return this.healthPotionPrefab;
            case "mana_potion":
                return this.manaPotionPrefab;
            case "flower":
                return this.flowerPrefab;
            case "stone":
                return this.stonePrefab;
            default:
                return this.emptyItemPrefab;
        }
    },

    getAllPrefabs() {
        return [
            this.swordPrefab,
            this.shieldPrefab,
            this.healthPotionPrefab,
            this.manaPotionPrefab,
            this.flowerPrefab,
            this.stonePrefab,
            this.emptyItemPrefab,
        ]
    }
});
