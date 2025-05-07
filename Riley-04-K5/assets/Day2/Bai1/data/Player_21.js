cc.Class({
    extends: cc.Component,

    properties: {
       playerHp: cc.Label,
       playerEnergy: cc.Label,
    },

    onLoad () {
        this.health = 100;
        this.attack = this.randomNumber(10, 20);
        this.defense = this.randomNumber(5, 15);
        this.energy = 50;
    },

    start () {

    },

    update (dt) {},
});
